## Attribute configuration
* Configuration of config in the router

| property                 | value                 | describe                                                     |
| ------------------------------ | -------------------- | -------------------------------------------------------- |
| transition             	       | slideleft            | From right to left(overlay)                                        |
|                                | slideright           | From left to right(overlay)                                        |
|                                | slideup              | From bottom to top(overlay)                                        |
|                                | slidedown            | From top to bottom(overlay)                                        |
|                                | wxslideleft          | Similar to WeChat from right to left                                     |
|                                | wxslideright         | Similar to WeChat from left to right                                     |
|                                | wxslideup            | Similar to WeChat from bottom to top                                     |
|                                | wxslidedown          | Similar to WeChat from top to bottom                                     |
|                                | pushslideleft        | From right to left(push)                                           |
|                                | pushslideright       | From left to right(push)                                           |
|                                | pushslideup          | From bottom to top(push)                                           |
|                                | pushslidedown        | From top to bottom(push)                                           |
|                                | material(default)       | Android Material style                                   |
| mode                   	       | standard(default)       | Multiple cases                                                     |
|                                | single               | Singleton (when clicked back, it will be destroyed)                              |
|                                | singleInstance       | Complete singleton (will not be destroyed)                                     |
|                                | result               | With a return value (you can bring back the return value to the parent page)                     |
|                                | singleInstanceResult | A complete singleton with a return value (will not be destroyed, can bring back the return value to the parent page) |
| intentfilterAction    	       | string               | If the page is to be subscribed to the notification                               |
| intentfilterCategorys 	       | [string1 string2 …]  | Filter parameters when subscribing                                         |
| intentfilterPriority  	       | number 0(default)       | Priority when sending an ordered broadcast. The default value is 0.