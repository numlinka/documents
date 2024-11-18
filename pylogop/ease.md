# logop - 易用设计

为了减少用户更方便的使用 `logop`，提供了一些易用设计。

_于 `logop._ease` 中定义，可在 `logop` 中直接访问，未包含在 `__all__` 中。_


## `ease`

`ease` 实例，实例化自 `_Ease` 类，对属性访问进行重载。

### (variable) `logging` {#ease-logging}
```Python
(variable) logging -> Logging
```

访问默认日志对象，没有时自动创建。通常情况下，用户实例化的第一个日志记录器对象将被作为默认日志对象。

## 日志函数

- (function) `trace(...) -> None`
- (function) `debug(...) -> None`
- (function) `info(...) -> None`
- (function) `warn(...) -> None`
- (function) `warning(...) -> None`
- (function) `error(...) -> None`
- (function) `severe(...) -> None`
- (function) `critical(...) -> None`
- (function) `fatal(...) -> None`

以上函数与 `Logging` 的同名方法功能一致，因为它们就是直接调用的 [`ease.logging`](#ease-logging) 。

这意味着，你可以在 `import logop` 之后，直接使用 `logop.info()` 来输出日志消息，在此过程中它会尝试调用 `logging.ease.logging.info()` ，而 `logging.ease` 会在没有第一个日志记录器时自动创建一个默认的日志记录器。