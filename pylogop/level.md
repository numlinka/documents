# logop - 日志等级

日志等级是日志系统中一个重要的概念，它用来控制日志的输出级别。


## 等级

等级使用整数表示，用于比较日志的优先级。

logop 提供了以下几种日志等级，级别从低到高依次为：\
`TRACE` `DEBUG` `INFO` `WARN` `WARNING` `ERROR` `SEVERE` `CRITICAL` `FATAL`

其中 `WARN` 和 `WARNING` 是同一个等级， `SEVERE` 和 `CRITICAL` 是同一个等级；除此外，还提供了 `ALL` 和 `OFF` 两种等级，分别表示输出所有日志和不输出任何日志。

它们值的定义如下：
```
    ALL
     │
~ 0x7F E D C B A 9 8 7 6 5 4 3 2 1 0  ━┳━━  Undefined / Special Purpose
~ 0x6F E D C B A 9 8 7 6 5 4 3 2 1 0  ━┫
~ 0x5F E D C B A 9 8 7 6 5 4 3 2 1 0  ━┫
~ 0x4F E D C B A 9 8 7 6 5 4 3 2 1 0  ━┛
~ 0x3F E D C B A 9 8 7 6 5 4 3 2 1 0  ━┳━━  TRACE
~ 0x2F E D C B A 9 8 7 6 5 4 3 2 1 0  ━┛
~ 0x1F E D C B A 9 8 7 6 5 4 3 2 1 0  ━┳━━  DEBUG
~ 0x0F E D C B A 9 8 7 6 5 4 3 2 1 0  ━┛
  0x00 1 2 3 4 5 6 7 8 9 A B C D E F  ━┳━━  INFO
  0x10 1 2 3 4 5 6 7 8 9 A B C D E F  ━┛
  0x20 1 2 3 4 5 6 7 8 9 A B C D E F  ━┳━━  WARN / WARNING
  0x30 1 2 3 4 5 6 7 8 9 A B C D E F  ━┛
  0x40 1 2 3 4 5 6 7 8 9 A B C D E F  ━┳━━  ERROR
  0x50 1 2 3 4 5 6 7 8 9 A B C D E F  ━┛
  0x60 1 2 3 4 5 6 7 8 9 A B C D E F  ━━━━  SEVERE / CRITICAL
  0x70 1 2 3 4 5 6 7 8 9 A B C D E F  ━━━━  FATAL
                                   │
                                  OFF
```

其中的 `Undefined / Special Purpose` 区域用于表示未定义的日志等级，可以由用户定义一些特殊的日志等级。


## 等级名称

等级名称用大写的英文字符串表示，主要用于输出日志时显示。

logop 提供了以下几种日志等级名称，它们与等级一一对应：\
`TRACE_NAME` `DEBUG_NAME` `INFO_NAME` `WARN_NAME` `WARNING_NAME` `ERROR_NAME` `SEVERE_NAME` `CRITICAL_NAME` `FATAL_NAME`


## 等级别名

等级别名用小写的英文字符串表示，且必须是唯一的，主要用于标识和检索日志等级。

logop 提供了以下几种日志等级别名，它们与等级一一对应：\
`TRACE_ALIAS` `DEBUG_ALIAS` `INFO_ALIAS` `WARN_ALIAS` `WARNING_ALIAS` `ERROR_ALIAS` `SEVERE_ALIAS` `CRITICAL_ALIAS` `FATAL_ALIAS` 
