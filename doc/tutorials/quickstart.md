## Quick start

**1. Initialize the application**
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
&ensp;Detailed parameter explanation please refer to[Attribute configuration](#attribute-configuration)。

**2. Router**
-----

&ensp;&ensp;In the code to initialize the application, you need to configure the router option. The router is an object. The object's key uniquely identifies a page. The value is an object. There are two attributes, component and config.

* component
  Returns a Promise object representing the logical processing class of this page. The object returned in Promise should be a subclass of the Page.WrappedPage class. Page.WrappedPage inherits React.Component。
  When developing with Webpack, it can be defined as
  ```js
  component: import(/* webpackChunkName: "about" */ "../pages/about")
  ```

* config
   * transition: {string} - Excessive type
   * mode: {string} - Startup type
   * intentfilterAction: {string} - Notification action
   * intentfilterCategorys: {string} - Notice of categorys
   * intentfilterPriority: {string} - Notice of priority

**3. Write the page corresponding to the page**
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
        console.log('page initial');
    }

    /**
     * @override
     */
    pageShow() {
      console.log('Called when the page DOM is displayed');
    }

    /**
     * @override
     */
    pageBeforeDestory(){
      console.log('Called before the page DOM is destroyed');
    }

    render() {
      return(
        <React.Fragment>
          content
        </React.Fragment>
      );
    }
}
```
&ensp;&ensp;Write a class that inherits from the Page.WrappedPage class to complete a page definition. It should be noted that the render method only needs to return the local component, because the upper layer of the Page class has been wrapped with a layer.
```html
<div data-ct-data-role="page"></div>
```
The top-level container, also need to pay attention to the componentDidMount method, the Page.WrappedPage class has registered the componentDidMount method, so the custom Page class needs to manually call the parent class's componentDidMount in the componentDidMount method.
```js
componentDidMount() {
    super.componentDidMount(...arguments);
}
```
&ensp;&ensp;Among them pageCreate, pageShow and pageBeforeDestory are the life cycle functions of Page, more life cycle functions please refer to[Page life cycle](#8-page-life-cycle)

**4. Jump to a new page**
-----------
&ensp;There are two ways to jump to a new page.
* Label method
```js
import React from 'react';
import CtMobile from "ctmobile-react";
const {Link, Back} = CtMobile;

<Link pageId="info">Jump to the info page</Link>
```
&ensp;&ensp;Using the pageId attribute in the Link tag, you can jump to a new page where the value of pageId is the key in Router.

* api mode
Use the App.startPage method to jump to a new page, where the App object is the return value after initializing the application. If it is in the Page class, it can be obtained by this.props.ctmobile.
```js
this.props.ctmobile.startPage("#info?pageId=info");
```

**5. Passing parameters between pages**
---------
* string mode
  * use the parameter attribute
  ```js
  <Link pageId="about" parameter="&a=1&b=2"/>
  ```
  * use api mode
  ```js
  this.props.ctmobile.startPage("#info?pageId=info&a=1&b=2");
  ```
* memory mode
&ensp;&ensp;By calling the setRequest method of the Page class to pass parameters, calling the getRequest method of the Page class on the target page to get the parameters. The advantage of using the memory method is that any data type data can be passed between pages. The disadvantage is that if the page is directly refreshed, Will save the last data, unlike the string method, you can permanently retain the value of the parameter.

   A.js
   ```js
   <!-- Pass parameters to B.html -->
   this.props.parent.setRequest('requestCode',{a:1,b:2});
   this.props.ctmobile.startPage("#b?pageId=b");
   ```
   B.js
   ```js
   pageAfterShow() {
       <!-- Get the parameters passed by A.html -->
       const parameter = JSON.stringify(this.props.parent.getRequest());
	   console.log('parameter',parameter);
	}
   ```
&ensp;&ensp;Note that you need to call the getRequest method in the callback of pageAfterShow. As long as the pageAfterShow function is called, you can get the parameters by calling the getRequest method anywhere.

**6. Page with return value**
---------
&ensp;&ensp; Add mode: "result" or mode: "singleInstanceResult" attribute to the router's config
```js
const Router = {
    PopUpDialog:{
        component: import(/* webpackChunkName: "index" */ "../pages/PopUpDialog"),
        config:{
            mode:'result',
            /*
             Or declared as singleInstanceResult
             mode:'singleInstanceResult'
            */
        }
    }
};
```

&ensp;&ensp;For example, there are currently two pages index.jsx, PopUpDialog.jsx two pages. There is an eject button in index.jsx, click the button to pop up the PopUpDialog page.

&ensp;&ensp;Index.js definition
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
   * Triggered when PopUpDialog returns
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
            <Link pageId="PopUpDialog">Popup PopUpDialog</Link>
            <div>{this.state.resultText}<div>
        </React.Fragment>
    );
  }
}
```

&ensp;&ensp;Definition of PopUpDialog.js
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
          }}>return</button>
        </React.Fragment>
    );
  }
}
```
&ensp;&ensp;Index.js overrides the pageResult method. This method is triggered after PopUpDialog returns or manually calls the finish method. The pageResult has three parameters e, resultCode, bundle, where resultCode is used to distinguish different sources, and the bundle is the value brought back.
&ensp;&ensp;PopUpDialog.js calls the this.props.parent.setResult(resultCode,bundle); method to set the returned value, and the page closes after calling the this.props.parent.over(); method.

The page usage scenarios with return values are generally divided into two types.
 * Many to one
 A.jsx, b.jsx, c.jsx... all pop up d.jsx
 * One-to-many
 A.jsx pops up b.jsx, c.jsx, d.jsx...

In the case of many-to-one, the flag of the parent page can be passed through the setRequest method.

In the case of one-to-many, different sources can be distinguished by the requestCode of the pageResult method.

**7. Page startup mode**
---------
Set the mode attribute value in the config of the Router. The framework supports a total of 5 startup modes.
 * standard（default）
  &ensp;&ensp;Multiple case mode

  &ensp;&ensp;The multi-instance mode will create a new instance when the configuration or api jumps to this page. The so-called new instance is that the Page class corresponding to Dom and Dom will be new.

 * single
  &ensp;&ensp;Singleton mode (destroyed when clicked back)

  &ensp;&ensp;Like Single in Android, for example, add the following page development order:
  index.jsx -> a.jsx -> b.jsx -> c.jsx -> d.jsx -> b.jsx
  If the mode of b.jsx is set to single, then after executing the above page order, the history stack is currently index.jsx -> a.jsx -> b.jsx
  c.jsx and d.jsx are also deleted, and the deleted colleague also calls the corresponding lifecycle function.
  But if you click back in b.jsx then b.jsx will still be destroyed.

 * singleInstance
  &ensp;&ensp;Complete singleton mode (will not be destroyed at any time)

  &ensp;&ensp;A complete singleton is never destroyed at all times and only one instance exists.

 * result
  &ensp;&ensp;With a return value (you can bring back the return value to the parent page)

  &ensp;&ensp;[Page with return value](#6-page-with-return-value)

 * singleInstanceResult
  &ensp;&ensp;A complete singleton with a return value (will not be destroyed, can bring back the return value to the parent page)

  &ensp;&ensp;Just like result, only instances will not be destroyed.

**8. Page life cycle**
---------
Page 1 has a total of 10 life cycle functions

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;![](https://github.com/playerljc/CTMobile/raw/master/outimages/pagelife.png "Page life cycle")

**9. Page transition effect**
---------
Set the transition attribute value in the config of the Router. The framework supports a total of 13 pages of excessive effects.

 * slideleft-From right to left(overlay)
 * slideright-From left to right(overlay)
 * slideup-From bottom to top(overlay)
 * slidedown-From top to bottom(overlay)
 * wxslideleft-Similar to WeChat from right to left
 * wxslideright-Similar to WeChat from left to right
 * wxslideup-Similar to WeChat from bottom to top
 * wxslidedown-Similar to WeChat from top to bottom
 * pushslideleft-From right to left(push)
 * pushslideright-From left to right(push)
 * pushslideup-From bottom to top(push)
 * pushslidedown-From top to bottom(push)
 * material-Android Material style

**10. borasdcast**
---------
&ensp;&ensp;Drawing on the concept of Borsdcast in Android, it provides a series of functions for data transfer between Pages. The broadcast is divided into ordered and unordered, and broadcast can be realized through configuration and api.

 * Register by configuration
   Add the intentfilterAction to the Router, register the intentfilterCategorys property.
   Page rewriting pageReceiver method
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
 * Register via api
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

        // register borasdcast
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
 * Sending an unordered broadcast
 Call CtMobile's sendBroadcast method in the Page class
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
 * Send an orderly broadcast
 Call CtMobile's sendOrderedBroadcast method in the Page class
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
 * Ordered broadcast
   * Priority of notification
   Ordered broadcast notifications are ordered. This order is determined by the priority attribute. The larger the priority, the sooner it is notified. The smaller the later, the more notified.
 Use configuration settings priority
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
 Use api registration to set priority
 ```js
 // register borasdcast
 this.props.ctmobile.registerReceiver({
    action: 'actionCode',
    priority: 0,
    categorys: ['c1','c2']
 }, this.onRegisterReceiver);
 ```
   * Pass parameters back and terminate delivery

&ensp;&ensp;There are two parameters intent and opt in the callback function of the ordered broadcast, where intent is the parameter passed by the notification, opt is an object, there are 2 methods, putExtras and next, where putExtras sets the parameters passed down, these parameters It is merged together. Only the next method is called to pass down.

   * Classification of notifications(categorys)

&ensp;&ensp;In addition to Action, when registering a broadcast, you can define multiple categories. Categoryes can be considered as a secondary title, which is used to define the action fine-grained.

**12. Other functions**
---------
 * Whether to increase history
 If you don't want to add a new page to the history stack, you can set the reload property to true to prevent the browser from adding history.
 ```js
<Link pageId="a" reload="true">info A</Link>
 ```
 ```js
 this.props.ctmobile.startPage('#a?pageId=a',{
    reload:true
 });
 ```
 For example, index.jsx -> a.jsx, then only a.jsx in the history stack

 * Use Back to return the page
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