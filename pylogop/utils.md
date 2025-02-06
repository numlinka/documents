# logop - 实用工具

_于 `logop.utils` 中定义，在 `logop` 中使用 `utils` 访问，未包含在 `__all__` 中。_

### (function) `try_execute`
```Python
(function) def try_execute(
    func: Callable -> Any,
    fallback_value: Any = None,
    *args: Any,
    **kwargs: Any
) -> Any
```

尝试执行一个函数，如果函数执行失败，返回一个默认值。

#### 参数
- `func` `(Callable)` 函数对象。
- `fallback_value` `(Any)` 函数执行失败时返回的值。
- `*args` `(Any)` 函数参数。
- `**kwargs` `(any)` 函数关键字参数。

---

### (function) `level_details`
```Python
(function) def level_details(
    level: str | int
) -> LevelDetails
```

获取日志级别详情。

#### 参数
- `level` `(str | int)` 日志级别或其别名。

#### 返回
- `LevelDetails` `(LevelDetails)` 指定日志级别的详细信息。

#### 引发
- `LogLevelAliasNotExists` `(LogLevelAliasNotExists)` 日志级别别名不存在。
- `LogLevelNotExists` `(LogLevelNotExists)` 日志级别不存在。

---

### (function) `set_windows_console_mode`
```
(function) def set_windows_console_mode() -> bool
```

设置 Windows 控制台模式，启用 ANSI 转义码。

#### 返回
- `bool` `(bool)` 设置是否成功。

---

### (function) `secure_format`
```Python
(function) def secure_format(
    format_spec: str,
    *format_args: Tuple[AnyStr],
    **format_kwargs: Dict[str, AnyStr]
) -> str
```

使用指定的格式参数和关键字参数安全地格式化字符串。

它会处理 IndexError 和 KeyError 异常，并尝试为格式参数和关键字参数添加占位符。

#### 参数
- `format_spec` `(str)` 要格式化的字符串。
- `*format_args` `(Tuple[AnyStr])` 用于格式化的参数。
- `**format_kwargs` `(Dict[str, AnyStr])` 用于格式化的关键字参数。

#### 返回
- `result` `(str)` 格式化后的字符串。

---

### (function) `format_log_message`
```Python
(function) def format_log_message_secure(
    log_format: str,
    log_unit: LogUnit
) -> str
```

使用指定的格式字符串和日志单位初始化日志消息。

#### 参数
- `log_format` `(str)` 日志格式字符串。
- `log_unit` `(LogUnit)` 日志单元。

#### 返回
- `message` `(str)` 格式化后的日志消息。

---

### (function) `add_log_level`
```Python
(function) def add_log_level(
    level: int,
    alias: str,
    name: str
) -> None
```

添加自定义日志级别。

#### 参数
- `level` `(int)` 日志级别，用于确定日志的重要性以及是否对其进行过滤。
- `alias` `(str)` 日志级别的别名，通常是小写字符串，用于索引，必须唯一。
- `name` `(str)` 日志级别的名称，通常是大写字符串，用于显示。

#### 引发
- `LogLevelInvalid` `(LogLevelInvalid)` 日志级别无效。
- `LogLevelAliasExists` `(LogLevelAliasExists)` 日志级别别名已存在。

#### 示例
```Python
logop.utils.add_log_level(0x10, "custom", "CUSTOM")
log.custom("This is a custom log level.")
```

---

### (function) `del_log_level`
```Python
(function) def del_log_level(alias: str) -> None
```

删除自定义日志级别。

#### 参数
- `alias` `(str)` 日志级别的别名。

#### 引发
- `LogLevelAliasNotExists` `(LogLevelAliasNotExists)` 日志级别别名不存在。

#### 示例
```Python
logop.utils.del_log_level("custom")
```

当然你可以尝试删除 `info` `debug` 等预设日志级别，这个函数会起作用，但是不推荐。

---

### (function) `set_default_logging`
```Python
(function) def set_default_logging(
    logging_object: BaseLogging,
    force: bool = False
) -> None
```

设置默认日志记录对象。

#### 参数
- `logging_object` `(BaseLogging)` 日志记录对象。
- `force` `(bool)` 强制设置。

#### 引发
- `TypeError` `(TypeError)` 参数类型错误。

---

### (function) `get_default_logging`
```Python
(function) def get_default_logging() -> BaseLogging
```

获取默认日志记录对象。

