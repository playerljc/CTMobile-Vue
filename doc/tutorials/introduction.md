## CtMobile-Vue
&ensp;&ensp;A mobile framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., for developing single page applications (SPA), hybrid development (Hybrid), Cordova development, CtMobile-Vue is in [" CtMobile"](https://github.com/playerljc/CTMobile "click to understand CtMobile"), plus support for [Vue](https://cn.vuejs.org/ "click to learn Vue") .
## Development inspiration
&ensp;&ensp; When I first came into contact with Hybrid development, the company chose jQueryMobile+Cordova to develop hybrid applications. When using jQueryMobile, I encountered many problems. For example, management class and Dom are not well integrated. Together, the original idea was that if each partial page on the browser side and its management class can be just like the Activity in Android, so the inspiration comes, and the implementation of CtMobile is completely realized by the Activity in Android.
## Three concepts
&ensp;&ensp;CtMoble has three important feelings, namely **Page**, **Router**, **BorasdCast**.
Page is used to manage the entire life cycle of page creation, initialization, and destruction. Router manages the routing jump of this framework. BorassdCast is used to manage the communication interaction between the notification and the data between the pages.
## Page startup mode
 1. standard
 Multiple case mode
 2. single
 Singleton mode (destroyed when clicked back)
 3. singleInstance
 Complete singleton mode (will not be destroyed at any time)
 4. result
 With a return value (you can bring back the return value to the parent page)
 5. singleInstanceResult
 A complete singleton with a return value (will not be destroyed, can bring back the return value to the parent page)
## Page transition effect
 Switch between pages to support multiple effects

 1. Slideleft-From right to left(overlay)
 2. slideright-From left to right(overlay)
 3. slideup-From bottom to top(overlay)
 4. slidedown-From top to bottom(overlay)
 5. wxslideleft-Similar to WeChat from right to left
 6. wxslideright-Similar to WeChat from left to right
 7. wxslideup-Similar to WeChat from bottom to top
 8. wxslidedown-Similar to WeChat from top to bottom
 9. pushslideleft-From right to left(push)
 10. pushslideright-From left to right(push)
 11. pushslideup-From bottom to top(push)
 12. pushslidedown-From top to bottom(push)
 13. material-Android Material style
##  Other functions
 1. Passing values between pages
 2. Whether the new page adds a history stack
 3. Function can be called through configuration and api