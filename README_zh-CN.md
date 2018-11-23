[english](https://github.com/playerljc/CTMobile-React "english") | 简体中文

## CtMobile-React
&ensp;&ensp;一个移动端框架，支持页面的多种形式切换，页面转场，页面传值，通知等，适用于开发单页面应用(SPA)，混合开发(Hybrid)，Cordova开发，CtMobile-React是在["CtMobile"](https://github.com/playerljc/CTMobile "点击了解CtMobile")的基础之上，加上了对[React](https://reactjs.org/ "点击了解React")的支持。
## 开发灵感
&ensp;&ensp;期初刚接触Hybrid开发的时候公司选用的是jQueryMobile+Cordova的组合来开发混合应用，在用jQueryMobile的时候遇到了很多问题如管理类和Dom之间总是不能很好的有机结合在一起，当初的想法是如果在浏览器端每个局部页面和其管理类能像Android中的Activity一样就好了，所以灵感就来了，CtMobile的实现完全借助于Android中的Activity来实现。
## 三大概念
&ensp;&ensp;CtMoble中有三个重要的感念，分别是**Page**，**Router**，**BorasdCast**.
其中Page用来管理页面的创建，初始化，销毁的整个生命周期，Router管理这个框架的路由跳转，BorasdCast用来管理通知和页面之间的数据的通信交互。
## Page(页面)的启动模式
 1. standard
 多例模式
 2. single
 单例模式(当点击返回时会销毁)
 3. singleInstance
 完全的单例模式(在任何时候都不会被销毁)
 4. result
 带有返回值的(可以向父页面带回返回值)
 5. singleInstanceResult
 带有返回值的完全单例(不会被销毁，可以向父页面带回返回值)
## Page(页面)的转场效果
 页面之间切换支持多种过度效果

 1. slideleft-从右到左(overlay)
 2. slideright-从左到右(overlay)
 3. slideup-从下到上(overlay)
 4. slidedown-从上到下(overlay)
 5. wxslideleft-类似于微信的从右到左
 6. wxslideright-类似于微信的从左到右
 7. wxslideup-类似于微信的从下到上
 8. wxslidedown-类似于微信的从上到下
 9. pushslideleft-从右到左(push)
 10. pushslideright-从左到右(push)
 11. pushslideup-从下到上(push)
 12. pushslidedown-从上到下(push)
 13. material-Android Material的风格
##  其他功能
 1. 页面之间的传值
 2. 新增页面是否增加历史栈
 3. 功能可以通过配置和api两种方式进行调用

##  安装
需要依赖react和react-dom，使用的打包工具没有限制webpack,gulp...
```bash
$ npm install react --save
$ npm install react-dom --save
$ npm install ctmobile-react --save
```

##  API文档
[docs](https://playerljc.github.io/ctmobile-react/index.html)

## 快速开始

**1. 初始化应用**
--------

```js
import CtMobile from "ctmobile-react";
const Router = {
    index: {
      component: import(/* webpackChunkName: "index" */ "../pages/index"),
    },
    info: {
      component: import(/* webpackChunkName: "info" */ "../pages/info"),
    },
    about: {
      component: import(/* webpackChunkName: "about" */ "../pages/about"),
    },
};
const App = CtMobile.CtMobileFactory.create({
    supportCordova: false,
    linkCaptureReload: false,
    router: Router,
});
```
&ensp;详细参数解释请参考[属性配置](#属性配置)。

**2. 路由**
-----

&ensp;&ensp;在初始化应用的代码中需要配置router选项，router是一个对象，对象的键唯一标识一个页面，值为一个对象，有两个属性component和config

* component
  返回一个Promise对象，代表这个页面的逻辑处理类，Promise中返回的对象应该是继承了Page.WrappedPage类的一个子类，Page.WrappedPage继承了React.Component。
  如用Webpack进行开发的时候可以定义成
  ```js
  component: import(/* webpackChunkName: "about" */ "../pages/about")
  ```

* config
   * transition: {string} - 过度类型
   * mode: {string} - 启动类型
   * intentfilterAction: {string} - 通知的actioon
   * intentfilterCategorys: {string} - 通知的categorys
   * intentfilterPriority: {string} - 通知的proirity

**3. 编写页面对应的Page**
--------------

```js
import React from 'react';
import CtMobile from "ctmobile-react";

export default class extends CtMobile.Page.WrappedPage {
    constructor(props) {
      super(props);
    }

    /**
     * @override
     */
    pageCreate(){
        console.log('页面初始化');
    }

    /**
     * @override
     */
    pageShow() {
      console.log('page的DOM显示时调用');
    }

    /**
     * @override
     */
    pageBeforeDestory(){
      console.log('page的DOM销毁之前调用');
    }

    render() {
      return(
        <React.Fragment>
          内容
        </React.Fragment>
      );
    }
}
```
&ensp;&ensp;编写一个类继承自Page.WrappedPage类即可完成一个页面的定义。需要注意的是render方法只需要返回局部组件即可，因为Page类的上层已经包装了一层
```html
<div data-ct-data-role="page"></div>
```
的顶层容器，还需要注意的是componentDidMount方法,Page.WrappedPage类已经注册了componentDidMount方法，所以自定的Page类需要在componentDidMount方法中手动调用父类的componentDidMount
```js
componentDidMount() {
    super.componentDidMount(...arguments);
}
```
&ensp;&ensp;其中pageCreate，pageShow和pageBeforeDestory是Page的生命周期函数，更多生命周期函数请参考[Page的生命周期](#8-page的生命周期)

**4. 跳转到一个新页面**
-----------
&ensp;跳转到一个新页面可以有两种方式
* 标签方式
```js
import React from 'react';
import CtMobile from "ctmobile-react";
const {Link, Back} = CtMobile;

<Link pageId="info">跳转到info页面</Link>
```
&ensp;&ensp;在Link标签中使用pageId属性就可以跳转到一个新的页面，其中pageId的值为Router中的键。

* api方式
使用App.startPage方法跳转到一个新的页面，其中App对象是初始化应用后的返回值，如果是在Page类中可以通过this.props.ctmobile获取
```js
this.props.ctmobile.startPage("#info?pageId=info");
```

**5. 页面间传递参数**
---------
* 字符串方式
  * 使用parameter属性
  ```js
  <Link pageId="about" parameter="&a=1&b=2"/>
  ```
  * 使用api方式
  ```js
  this.props.ctmobile.startPage("#info?pageId=info&a=1&b=2");
  ```
* 内存方式
&ensp;&ensp;通过调用Page类的setRequest方法进行参数传递，在目标页面调用Page类的getRequest方法获取参数，使用内存方式的好处是可以在页面之间传递任何数据类型的数据，缺点是如果直接刷新此页的话不会保存上一回的数据，不像字符串方式可以永久保留参数的值

   A.js
   ```js
   <!-- 向B.html传递参数 -->
   this.props.parent.setRequest('requestCode',{a:1,b:2});
   this.props.ctmobile.startPage("#b?pageId=b");
   ```
   B.js
   ```js
   pageAfterShow() {
       <!-- 获取A.html传递过来的参数 -->
       const parameter = JSON.stringify(this.props.parent.getRequest());
	   console.log('parameter',parameter);
	}
   ```
&ensp;&ensp;需要注意的是需要在pageAfterShow的回调中调用getRequest方法，只要pageAfterShow函数被调用，之后在任何地方在调用getRequest方法都可以获取到参数。

**6. 带有返回值的页面**
---------
&ensp;&ensp; 在router的config中加入mode:"result"或者mode:"singleInstanceResult"属性
```js
const Router = {
    PopUpDialog:{
        component: import(/* webpackChunkName: "index" */ "../pages/PopUpDialog"),
        config:{
            mode:'result',
            /*
             或者声明为singleInstanceResult
             mode:'singleInstanceResult'
            */
        }
    }
};
```

&ensp;&ensp;举个例子，当前有两个页面index.jsx，PopUpDialog.jsx两个页面。index.jsx中有个弹出按钮，点击按钮弹出PopUpDialog页面

&ensp;&ensp;index.js定义
```js
import React from 'react';
import CtMobile from 'ctmobile-react';

const {Link} = CtMobile;

export default class extends CtMobile.Page.WrappedPage {
  constructor(props){
    super(props);
    this.state = {
        resultText:'',
    }
  }

  /**
   * PopUpDialog返回时触发
   * override
   */
  pageResult(e, resultCode, bundle) {
     console.log("resultCode", resultCode, "bundle", JSON.stringify(bundle));
     this.setState({
        resultText: `resultCode:${resultCode}\r\nbundle:${JSON.stringify(bundle)}`
     });
  }

  render() {
    return (
        <React.Fragment>
            <Link pageId="PopUpDialog">弹出PopUpDialog</Link>
            <div>{this.state.resultText}<div>
        </React.Fragment>
    );
  }
}
```

&ensp;&ensp;PopUpDialog.js的定义
```js
import React from 'react';
import CtMobile from 'ctmobile-react';

export default class extends CtMobile.Page.WrappedPage {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <React.Fragment>
          <button onClick={() => {
            this.props.parent.setResult('PopUpDialog', {a: 1, b: 2});
            this.props.parent.over();
          }}>返回</button>
        </React.Fragment>
    );
  }
}
```
&ensp;&ensp;index.js中重写pageResult方法，此方法在PopUpDialog返回或手动调用finish方法后被触发，pageResult的有三个参数e，resultCode，bundle，其中resultCode用来区分不同的来源，bundle是被带回来的值。
&ensp;&ensp;PopUpDialog.js中调用this.props.parent.setResult(resultCode,bundle);方法来设置返回的值，在调用this.props.parent.over();方法后页面关闭。

带有返回值的页面使用场景一般分为两种
 * 多对一
 a.jsx,b.jsx,c.jsx...都弹出d.jsx
 * 一对多
 a.jsx弹出b.jsx,c.jsx,d.jsx...

在多对一的情况下可以通过setRequest方法把父页面的标志传递过去。

在一对多的情况下可以通过pageResult方法的requestCode区分不同来源。

**7. Page的启动模式**
---------
在Router的config中设置mode属性值即可，框架一共支持5中启动模式
 * standard（默认）
  &ensp;&ensp;多例模式

  &ensp;&ensp;多例模式通过配置或者api跳转到此页面的时候都会建立一个新的实例，所谓新的实例就是Dom和Dom对应的Page类都会是新的。

 * single
  &ensp;&ensp;单例模式(当点击返回时会销毁)

  &ensp;&ensp;和Android中single一样,举个例子，加入有如下的页面开发顺序 :
  index.jsx -> a.jsx -> b.jsx -> c.jsx -> d.jsx -> b.jsx
  如果把b.jsx的mode设置为single，那么执行上述页面顺序后，   历史栈中当前是 index.jsx -> a.jsx -> b.jsx
  也是删除了c.jsx和d.jsx，删除的同事也会调用相应的生命周期函数。
  但是如果在b.jsx中点击返回那么b.jsx还是会销毁的。

 * singleInstance
  &ensp;&ensp;完全的单例模式(在任何时候都不会被销毁)

  &ensp;&ensp;完全单例就是在任何时候都不会被销毁且只有一个实例存在。

 * result
  &ensp;&ensp;带有返回值的(可以向父页面带回返回值)

  &ensp;&ensp;[参见带有返回值的页面](#6-带有返回值的页面)

 * singleInstanceResult
  &ensp;&ensp;带有返回值的完全单例(不会被销毁，可以向父页面带回返回值)

  &ensp;&ensp;和result一样只是实例不会被销毁。

**8. Page的生命周期**
---------
Page一共有10个生命周期函数

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;![](https://github.com/playerljc/CTMobile/raw/master/outimages/pagelife.png "Page生命周期")

**9. 页面转场效果**
---------
在Router的config中设置transition属性值即可，框架一共支持13种页面的过度效果

 * slideleft-从右到左(overlay)
 * slideright-从左到右(overlay)
 * slideup-从下到上(overlay)
 * slidedown-从上到下(overlay)
 * wxslideleft-类似于微信的从右到左
 * wxslideright-类似于微信的从左到右
 * wxslideup-类似于微信的从下到上
 * wxslidedown-类似于微信的从上到下
 * pushslideleft-从右到左(push)
 * pushslideright-从左到右(push)
 * pushslideup-从下到上(push)
 * pushslidedown-从上到下(push)
 * material-Android Material的风格

**10. 广播(borasdcast)**
---------
&ensp;&ensp;借鉴了Android中Borasdcast概念，为Page之间的数据传递提供了一系列功能，广播分为有序和无序，可以通过配置和api两种方式实现广播。

 * 通过配置注册
   在Router的中加入intentfilterAction，intentfilterCategorys属性进行注册
   Page中重写pageReceiver方法
   ```js
   import React from 'react';
   import CtMobile from 'ctmobile-react';
   export default class extends CtMobile.Page.WrappedPage {
      constructor(props){
        super(props);
        this.state = {
            resultText:'',
        };
      }

      /**
       * @override
       */
      pageReceiver(intent) {
        this.setState({
            resultText:JSON.stringify(intent),
        });
      }

      render(){
        return(
            <React.Fragment>
              {this.state.resultText}
            </React.Fragment>
        );
      }
   }
   ```
 * 通过api注册
   ```js
   import React from 'react';
   import CtMobile from 'ctmobile-react';
   export default class extends CtMobile.Page.WrappedPage {
     constructor(props){
       super(props);
       this.state = {
          resultText: '',
       };
     }

     /**
       * @override
       */
     pageCreate() {
       this.onRegisterReceiver = this.onRegisterReceiver.bind(this);

        // 注册borasdcast
        this.props.ctmobile.registerReceiver({
          el: this.props.parent.getPageDOM(),
          action: 'borasdcast_normal_api',
          priority: 1,
          categorys: []
        }, this.onRegisterReceiver);
     }

     onRegisterReceiver(intent) {
        this.setState({
            resultText:JSON.stringify(intent),
        });
     }

     render() {
        return (
            <React.Fragment>
                {this.state.resultText}
            </React.Fragment>
        );
     }

   }
   ```
 * 发送无序广播
 在Page类中调用CtMobile的sendBroadcast方法
 ```js
 this.props.ctmobile.sendBroadcast({
    action: 'actionCode',
    categorys: ['c1','c2'],
    bundle: {
      a: 1,
      b: 2
    }
 });
 ```
 * 发送有序广播
 在Page类中调用CtMobile的sendOrderedBroadcast方法
 ```js
 this.props.ctmobile.sendOrderedBroadcast({
    action: 'actionCode',
    categorys: ['c1','c2'],
    bundle: {
      a: 1,
      b: 2
    }
 });
 ```
 * 有序广播
   * 通知的优先级
   有序广播的通知是有顺序的，这个顺序是有priority这个属性决定的，priority越大越先被通知到，越小越晚被通知到。
 使用配置设置priority
```js
const Router = {
  index:{
    component: import(/* webpackChunkName: "index" */ "../pages/index"),
    config:{
        intentfilterPriority:0
    }
  }
}
```
 使用api注册设置priority
 ```js
 // 注册borasdcast
 this.props.ctmobile.registerReceiver({
    action: 'actionCode',
    priority: 0,
    categorys: ['c1','c2']
 }, this.onRegisterReceiver);
 ```
   * 向后传递参数和终止传递

&ensp;&ensp;在有序广播的回调函数中会有2个参数intent和opt，其中intent是通知传递的参数，opt是个对象，其中有2个方法,putExtras和next，其中putExtras设置向下传递的参数，这些参数是合并在一起的。只有调用next方法才向下进行传递。

   * 通知的分类(categorys)

&ensp;&ensp;在注册广播的时候除了Action之外，还可以定义多个category，categorys可以认为是一个二级标题，作用是用来对Action进行细粒度的定义。

**12. 其他功能**
---------
 * 是否增加历史
 如果不想让新跳转的页面增加到历史栈中，可以设置reload属性为true来阻止浏览器增加历史。
 ```js
<Link pageId="a" reload="true">info A</Link>
 ```
 ```js
 this.props.ctmobile.startPage('#a?pageId=a',{
    reload:true
 });
 ```
 比如index.jsx -> a.jsx，那么历史栈中只有a.jsx

 * 使用Back进行页面的返回
 ```js
 import React from 'react';
 import CtMobile from 'ctmobile-react';
 const {Back} = CtMobile;

 export default class extends CtMobile.Page.WrappedPage {
    render(){
        return(
            <React.Fragment>
                <Back/>
            </React.Fragment>
        );
    }
 }
 ```

## 属性配置
* Router中config的配置

| 属性(property)                 | 取值                 | 说明                                                     |
| ------------------------------ | -------------------- | -------------------------------------------------------- |
| transition             	       | slideleft            | 从右到左(overlay)                                        |
|                                | slideright           | 从左到右(overlay)                                        |
|                                | slideup              | 从下到上(overlay)                                        |
|                                | slidedown            | 从上到下(overlay)                                        |
|                                | wxslideleft          | 类似于微信的从右到左                                     |
|                                | wxslideright         | 类似于微信的从左到右                                     |
|                                | wxslideup            | 类似于微信的从下到上                                     |
|                                | wxslidedown          | 类似于微信的从上到下                                     |
|                                | pushslideleft        | 从右到左(push)                                           |
|                                | pushslideright       | 从左到右(push)                                           |
|                                | pushslideup          | 从下到上(push)                                           |
|                                | pushslidedown        | 从上到下(push)                                           |
|                                | material(缺省)       | Android Material的风格                                   |
| mode                   	       | standard(缺省)       | 多例                                                     |
|                                | single               | 单例(当点击返回时，会销毁)                               |
|                                | singleInstance       | 完全单例(不会被销毁)                                     |
|                                | result               | 带有返回值的(可以向父页面带回返回值)                     |
|                                | singleInstanceResult | 带有返回值的完全单例(不会被销毁，可以向父页面带回返回值) |
| intentfilterAction    	       | string               | 如果页面要订阅通知时的标识                               |
| intentfilterCategorys 	       | [string1 string2 …]  | 订阅时的过滤参数                                         |
| intentfilterPriority  	       | number 0(缺省)       | 发送有序广播时的优先级，默认值是0                        |

## CtMobile应用程序展示

## Demo程序的运行
&ensp;&ensp;checkou后进入demo目录
```bash
$ npm install
$ npm start
```
&ensp;&ensp;在浏览器上输入localhost:8000即可访问到demo的主页面

## Note程序的运行
&ensp;&ensp;Note是一个使用CtMobile-React来编写的一个便签程序,checkout后进入note
```bash
$ npm install
$ npm start
```
在浏览器上输入localhost:8001即可访问到demo的主页面。

![](https://github.com/playerljc/CTMobile-React/blob/master/outimages/note/note-index.png "note")

## 讨论群
![](https://github.com/playerljc/CTMobile/raw/master/outimages/qq.png "讨论群")

## 许可
[MIT](/LICENSE)
