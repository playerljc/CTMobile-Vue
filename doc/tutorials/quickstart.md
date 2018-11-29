## Quick start

**1. Initialize the application**
--------

```js
const Router = {
    index: {
      component: import(/* webpackChunkName: "index" */ "../pages/index/index.vue"),
    },
    info: {
      component: import(/* webpackChunkName: "info" */ "../pages/info/index.vue"),
    },
    about: {
      component: import(/* webpackChunkName: "about" */ "../pages/about/index.vue"),
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
  Returns a Promise object representing the logical processing class of this page.
  When developing with Webpack, it can be defined as
  ```js
  component: import(/* webpackChunkName: "about" */ "../pages/about/index.vue")
  ```

* config
   * transition: {string} - Excessive type
   * mode: {string} - Startup type
   * intentfilterAction: {string} - Notification action
   * intentfilterCategorys: {string} - Notice of categorys
   * intentfilterPriority: {string} - Notice of priority

**3. Write the page corresponding to the page**
--------------
&ensp;&ensp;index.vue
```html
<template>
  <div>
    <header>
      <p class="ct-header-title">index</p>
    </header>
    <div class="ct-content" style="top:3rem;bottom:0;">
      <h1>index</h1>
    </div>
  </div>
</template>
<script src="./index.js"></script>
```
&ensp;&ensp;index.js
```js
export default {
  props: {
    _pDom: {
      type: HTMLDivElement,
      require: true,
    },
    pageId: {
      type: String,
      require: true,
      value: ''
    }
  },
  data: () => {
    return {};
  },
  created() {

  },
  mounted() {

  },
  methods: {
    pageCreate() {
      console.log(`${this.$parent.getId()}:pageCreate`);
    },

    /***
     * Before the page is displayed
     * @callback
     * @override
     * @param {Object} e
     */
    pageBeforeShow(e) {
      console.log(`${this.$parent.getId()}:pageBeforeShow`);
    },

    /***
     * page show
     * @callback
     * @override
     * @param {Object} e
     */
    pageShow(e) {
      console.log(`${this.$parent.getId()}:pageShow`);
    },

    /***
     *  page after show
     * @callback
     * @override
     * @param {Object} e
     */
    pageAfterShow(e) {
      console.log(`${this.$parent.getId()}:pageAfterShow`);
    },

    /***
     * Before the page is paused
     * @callback
     * @override
     * @param {Object} e
     */
    pageBeforePause(e) {
      console.log(`${this.$parent.getId()}:pageBeforePause`);
    },

    /***
     * After the page is paused
     * @callback
     * @override
     * @param {Object} e
     */
    pageAfterPause(e) {
      console.log(`${this.$parent.getId()}:pageAfterPause`);
    },

    /***
     * Before page recovery
     * @callback
     * @override
     * @param {Object} e
     */
    pageBeforeRestore(e) {
      console.log(`${this.$parent.getId()}:pageBeforeRestore`);
    },

    /***
     * Page recovery
     * @callback
     * @override
     * @param {Object} e
     */
    pageRestore(e) {
      console.log(`${this.$parent.getId()}:pageRestore`);
    },

    /***
     * After the page is restored
     * @callback
     * @override
     * @param {Object} e
     */
    pageAfterRestore(e) {
      console.log(`${this.$parent.getId()}:pageAfterRestore`);
    },

    /***
     * Before the page DOM is destroyed
     * @callback
     * @override
     * @param {Object} e
     */
    pageBeforeDestroy(e) {
      console.log(`${this.$parent.getId()}:pageBeforeDestroy`);
    },

    /***
     * pageResult
     * @callback
     * @override
     * @param {Object} e - jQuery的event
     * @param {string} resultCode - return code
     * @param {Object} bundle - return parameter
     */
    pageResult(e, resultCode, bundle) {
      console.log(`${this.$parent.getId()}:pageResult`);
    },

    /***
     * If the ct-data-intentfilter-action attribute is added, the condition is triggered.
     * @callback
     * @override
     * @param {Object} bundle
     * @param {Object} functions
     */
    pageReceiver(bundle, functions) {
      console.log(`${this.$parent.getId()}:pageReceiver`);
    }
  }
};
```
&ensp;&ensp;Write a single file component of *.vue. Note that this component has two props, _pDom and pageId, where _pDom is the dom at the top of this Page, and pageId is the key configured in the config of Router. In the template, you only need to return the local code, because the layer has been wrapped in the upper layer.
```html
<div data-ct-data-role="page"></div>
```
The top container.
&ensp;&ensp;Among them pageCreate, pageShow and pageBeforeDestory are the life cycle functions of Page, more life cycle functions please refer to [Page life cycle](#8-page-life-cycle)

**4. Jump to a new page**
-----------
&ensp;There are two ways to jump to a new page.
* Label method
```html
<ctmobile-link pageId="info">Jump to the info page</ctmobile-link>
```
&ensp;&ensp;Using the pageId attribute in the Link tag, you can jump to a new page where the value of pageId is the key in Router，ctmobile-link can be used globally.

* api mode
Use the App.startPage method to jump to a new page, where the App object is the return value after initializing the application. If it is in the Page class, it can be obtained by this.$parent.ctmobile.
```js
this.$parent.ctmobile.startPage("#info?pageId=info");
```

**5. Passing parameters between pages**
---------
* string mode
  * use the parameter attribute
  ```js
  <ctmobile-link pageId="about" parameter="&a=1&b=2" />
  ```
  * use api mode
  ```js
  this.$parent.ctmobile.startPage("#info?pageId=info&a=1&b=2");
  ```
* memory mode
&ensp;&ensp;By calling the setRequest method of the Page class to pass parameters, calling the getRequest method of the Page class on the target page to get the parameters. The advantage of using the memory method is that any data type data can be passed between pages. The disadvantage is that if the page is directly refreshed, Will save the last data, unlike the string method, you can permanently retain the value of the parameter.

   A.vue
   ```html
   <!-- Pass parameters to B.html -->
   this.$parent.setRequest('requestCode',{a:1,b:2});
   this.$parent.ctmobile.startPage("#b?pageId=b");
   ```
   B.vue
   ```html
   pageAfterShow() {
       <!-- Get the parameters passed by A.html -->
       const parameter = JSON.stringify(this.$parent.getRequest());
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
        component: import(/* webpackChunkName: "index" */ "../pages/PopUpDialog/index.vue"),
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

&ensp;&ensp;For example, there are currently two pages index.vue, PopUpDialog.vue two pages. There is an eject button in index.vue, click the button to pop up the PopUpDialog page.

&ensp;&ensp;index.vue definition
```html
<template>
    <div>
        <ctmobile-link pageId="PopUpDialog">Popup PopUpDialog</ctmobile-link>
        <div>{{resultText}}<div>
    </div>
</template>
<script>
    export default {
      props: {
        _pDom: {
          type: HTMLDivElement,
          require: true,
        },
        pageId: {
          type: String,
          require: true,
          value: ''
        }
      },
      data:() => {
        return {
            resultText:''
        }
      },
      methods:{
          /**
           * PopUpDialogTrigger on return
           * override
           */
          pageResult(e, resultCode, bundle) {
             console.log("resultCode", resultCode, "bundle", JSON.stringify(bundle));
             this.setState({
                resultText: `resultCode:${resultCode}\r\nbundle:${JSON.stringify(bundle)}`
             });
          }
      }
    }
</script>
```

&ensp;&ensp;Definition of PopUpDialog.vue
```html
<template>
    <button @click="
        $parent.setResult('PopUpDialog', {a: 1, b: 2});
        $parent.over();
    ">return</button>
</template>
<script>
    export default {}
</script>
```
&ensp;&ensp;index.vue rewrites the pageResult method. This method is triggered after PopUpDialog returns or manually calls the finish method. The pageResult has three parameters e, resultCode, bundle, where resultCode is used to distinguish different sources, bundle is Bring back the value.
&ensp;&ensp;PopUpDialog.vue calls the this.$parent.setResult(resultCode,bundle); method to set the returned value, and the page closes after calling the this.$parent.over(); method.

The page usage scenarios with return values are generally divided into two types.
 * Many to one
 a.vue, b.vue, c.vue... all pop up d.vue
 * One-to-many
 a.vue pops up b.vue, c.vue, d.vue...

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
  index.vue -> a.vue -> b.vue -> c.vue -> d.vue -> b.vue
  If the mode of b.vue is set to single, then after executing the above page order, the history stack is currently index.vue -> a.vue -> b.vue
  c.vue and d.vue are also deleted, and the deleted colleague also calls the corresponding lifecycle function.
  But if you click back in b.vue then b.vue will still be destroyed.

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
   <template>
      <div>{{resultText}}</div>
   </template>
   <script>
      export default {
         data:() => {
            return {
                resultText: ''
            };
         },
         methods:{
            /**
            * @override
            */
            pageReceiver(intent) {
                this.resultText = JSON.stringify(intent);
            }
         }
      }
   </script>
   ```
 * Register via api
   ```js
   <template>
        <div>{{resultText}}</div>
   </template>
   <script>
        export default {
            data(){
                return {
                    resultText: ''
                }
            },
            methods:{
                /**
                 * @override
                 */
                 pageCreate() {
                   this.onRegisterReceiver = this.onRegisterReceiver.bind(this);

                    // 注册borasdcast
                    this.$parent.ctmobile.registerReceiver({
                      el: this.$parent.getPageDOM(),
                      action: 'borasdcast_normal_api',
                      priority: 1,
                      categorys: []
                    }, this.onRegisterReceiver);
                 },
                 onRegisterReceiver(intent) {
                    this.resultText = JSON.stringify(intent);
                 }
            }
        }
   </script>
   ```
 * Sending an unordered broadcast
 Call CtMobile's sendBroadcast method in the Page class
 ```js
 this.$parent.ctmobile.sendBroadcast({
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
 this.$parent.ctmobile.sendOrderedBroadcast({
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
    component: import(/* webpackChunkName: "index" */ "../pages/index/index.vue"),
    config:{
        intentfilterPriority:0
    }
  }
}
```
 Use api registration to set priority
 ```js
 // register borasdcast
 this.$parent.ctmobile.registerReceiver({
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
<ctmobile-link pageId="a" reload="true">info A</ctmobile-link>
 ```
 ```js
 this.$parent.ctmobile.startPage('#a?pageId=a',{
    reload:true
 });
 ```
 For example, index.vue -> a.vue, then only a.vue in the history stack

 * Use ctmobile-back to return the page
 ```html
 <template>
    <ctmobile-back/>
 </template>
 <script>export default {}</script>
 ```