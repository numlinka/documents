# logop - 异常

异常是运行时错误，它表明程序在运行过程中出现了意外。

_于 `logop.exceptions` 中定义，在 `logop` 中使用 `exceptions` 访问，未包含在 `__all__` 中。_


## `LogopBaseException`

logop 的异常基类，所有 logop 的异常都继承自该类。


## `LogLevelInvalid`

错误的日志级别。


## `LogLevelNotExists`

日志级别不存在。


## `LogLevelAliasInvalid`

错误的日志级别别名。


## `LogLevelAliasExists`

日志级别别名已存在。


## `LogLevelAliasNotExists`

日志级别别名不存在。


## `StreamAssociationFailed`

绑定日志输出流失败。


## `StreamVerificationFailed`

验证日志输出流失败。


## `LoggingIsClosed`

日志已关闭。


## `OutputStreamNotExist`

输出流不存在。
