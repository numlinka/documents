# logop - 日志记录器

日志记录器的具体实现。

_于 `logop.logging` 中定义，可在 `logop` 中直接访问。_


## `Logging`

日志记录器对象，实现 `BaseLogging` ，它的主要任务是被用户调用，收集日志和状态信息，将其打包成日志单元，然后交给输出流对象。

### (class) `Logging`
```Python
(method) def __init__(
    log_level: str | int = INFO,
    log_format: str = FORMAT_DEFAULT,
    *,
    stdout: bool = True,
    asynchronous: bool = False,
    thread_name: str = DEFAULT_THREAD_NAME,
    daemon: bool = True
) -> None
```

如果您不允许它自动初始化标准输出流、则需要自己添加输出流，否则它不会输出任何内容。\
在同步模式下，调用输出流所消耗的时间由调用线程承担、如果不想这样，请使用异步模式。

通常，用户声明的第一个日志记录器，会被作为默认日志记录器保存。

#### 参数
- `log_level` `(str | int)` 日志级别；必须是有效的日志级别或别名；默认值：`INFO` 。
- `log_format` `(str)` 日志格式；必须是格式字符串；默认值：`FORMAT_DEFAULT` 。
- `stdout` `(bool)` 是否输出到标准输出流；默认值：`True` 。
- `asynchronous` `(bool)` 是否使用异步输出；默认值：`False` 。
- `thread_name` `(str)` 用于异步输出的线程名称；默认值：`DEFAULT_THREAD_NAME` 。
- `daemon` `(bool)` 用于异步输出的线程是否为守护进程线程；默认值：`True` 。

---

### (variable) `level`
```Python
(variable) level -> int
```

当前日志级别；只读属性。

---

### (variable) `log_format`
```Python
(variable) log_format -> str
```

当前日志格式；只读属性。

---

### (variable) `is_paused`
```Python
(variable) is_paused -> bool
```

记录器是否被暂停；只读属性。

---

### (variable) `is_closed`
```Python
(variable) is_closed -> bool
```

记录器是否被关闭；只读属性。

---

### (variable) `is_async`
```Python
(variable) is_async -> bool
```

记录器是否是异步模式；只读属性。

---

### (variable) `stdout`
```Python
(variable) stdout -> StandardOutputStream
```

标准输出流对象；只读属性。

获取输出流列表中的标准输出流。如果没有标准输出流，则会自动创建一个临时标准输出流。该临时标准输出流不会添加到输出流列表中。

---

### (method) `exist_stdout_stream`
```Python
(method) def exist_stdout_stream() -> bool
```

检查输出流列表中是否存在标准输出流。

---

### (method) `set_level`
```Python
(method) def set_level(
    level: str | int
) -> None
```

设置日志级别；低于此级别的日志将被过滤。

#### 参数
- `level` `(str | int)` 日志级别；必须是有效的日志级别或别名。

#### 引发
- `TypeError` `(TypeError)` 如果级别类型不是 `str` 或 `int` 。
- `LogLevelInvalid` `(LogLevelInvalid)` 如果级别不是有效的日志级别或别名。

---

### (method) `set_format`
```Python
(method) def set_format(
    log_format: str
) -> None
```

设置日志格式；输出日志内容的格式，`Logging` 不处理日志内容，而是将其传递给 `OutputStream` 对象。

#### 参数
- `log_format` `(str)` 日志格式；必须是格式字符串。

#### 引发
- `TypeError` `(TypeError)` 如果格式类型不是 `str` 。

---

### (method) `pause`
```Python
(method) def pause() -> None
```

暂停日志记录器；暂停时，新的日志信息将暂时保存在列表中，直至取消暂停。

---

### (method) `unpause`
```Python
(method) def unpause() -> None
```

恢复日志记录器；同时，临时存储在列表中的日志将立即输出。

---

### (method) `close`
```Python
(method) def close() -> None
```

关闭日志记录器；关闭后，将不再接受新的日志信息，系统将等待输出未打印的日志信息。

#### 引发
- `LogClosed` `(LogClosed)` 如果记录器已经被关闭。

---

### (method) `clear_messages`
```Python
(method) def clear_messages() -> None
```

清除临时存储在列表中的日志。

---

### (method) `clear`
```Python
(method) def clear() -> None
```

清除临时存储在列表中的日志。

---

### (method) `add_stream`
```Python
(method) def add_stream(
    stream: BaseOutputStream
) -> int
```

添加输出流；需要注意的是，只能添加一个标准输出流对象。

#### 参数
- `stream` `(BaseOutputStream)` 输出流对象。

#### 返回
- `ident` `(int)` 输出流的唯一标识符。

#### 引发
- `StandardOutputStreamExist` `(StandardOutputStreamExist)` 如果添加了多个标准输出流对象。
- `StreamVerificationFailed` `(StreamVerificationFailed)` 如果输出流未能通过验证。

---

### (method) `add_stream_verify`
```Python
(method) def add_stream_verify(
    stream: BaseOutputStream,
    ident: int
) -> bool
```

验证添加的输出流；该方法由 `add_stream` 方法调用。只有经过验证后，输出流才能被添加到输出流列表中。

#### 参数
- `stream` `(BaseOutputStream)` 输出流对象。
- `ident` `(int)` 输出流的唯一标识符。

#### 返回
- `bool` `(bool)` 验证结果。

---

### (method) `del_stream`
```Python
(method) def del_stream(
    ident: int
) -> None
```

删除输出流。

#### 参数
- `ident` `(int)` 输出流的唯一标识符。

#### 引发
- `OutputStreamNotExist` `(OutputStreamNotExist)` 如果输出流不存在。

---

### (method) `del_stream_verify`
```Python
(method) def del_stream_verify(
    stream: BaseOutputStream,
    ident: int
) -> bool
```

验证删除的输出流；该方法由 `del_stream` 方法调用。只有经过验证后，输出流才能被删除。

#### 参数
- `stream` `(BaseOutputStream)` 输出流对象。
- `ident` `(int)` 输出流的唯一标识符。

#### 返回
- `bool` `(bool)` 验证结果。

---

### (method) `get_streams`
```Python
(method) def get_stream(
    ident: int
) -> BaseOutputStream
```

获取输出流对象。

#### 参数
- `ident` `(int)` 输出流的唯一标识符。

#### 返回
- `stream` `(BaseOutputStream)` 输出流对象。

#### 引发
- `OutputStreamNotExist` `(OutputStreamNotExist)` 如果输出流不存在。

---

### (method) `get_stream_list`
```Python
(method) get_stream_list() -> list[BaseOutputStream]
```

获取输出流列表。

#### 返回
- `stream_list` `(list[BaseOutputStream])` 输出流列表。

---

### (method) `call`
```Python
(method) def call(
    log_level: int | str,
    log_message: str,
    *args: AnyStr,
    log_mark: AnyStr = None,
    back_count: int = 0,
    **kwargs: AnyStr
) -> None
```

新的日志消息；调用日志记录器，日志记录器将调用输出流列表中的所有输出流对象。

#### 参数
- `log_level` `(int | str)` 日志级别；必须是有效的日志级别或别名。
- `log_message` `(str)` 要记录的信息；可以是格式规范字符串。
- `*args` `(AnyStr)` 格式规格字符串的参数。
- `log_mark` `(AnyStr)` 日志信息的标记；将打印在日志信息中。
- `back_count` `(int)` 调用堆栈的深度；用于获取源信息。
- `**kwargs` `(AnyStr)` 格式规格字符串的关键字参数。

---

### (method) `info`
```Python
(method) def info(
    message: str = "",
    *args: AnyStr,
    mark: str = None,
    back_count: int = 0,
    **kwargs: AnyStr
) -> None
```

记录一条 `INFO` 级别的日志消息。

#### 参数
- `message` `(str)` 日志信息；可以是格式规范字符串。
- `*args` `(AnyStr)` 格式规格字符串的参数。
- `mark` `(AnyStr)` 日志信息的标记；将打印在日志信息中。
- `back_count` `(int)` 调用堆栈的深度；用于获取源信息。
- `**kwargs` `(AnyStr)` 格式规格字符串的关键字参数。

---

### (method) `trace`

同 [`(method) info`](#method-info) ，但是记录 `TRACE` 级别的日志消息。

---

### (method) `debug`

同 [`(method) info`](#method-info) ，但是记录 `DEBUG` 级别的日志消息。

---

### (method) `warn`

同 [`(method) info`](#method-info) ，但是记录 `WARN` 级别的日志消息。

---

### (method) `warning`

同 [`(method) info`](#method-info) ，但是记录 `WARNING` 级别的日志消息。

---

### (method) `error`

同 [`(method) info`](#method-info) ，但是记录 `ERROR` 级别的日志消息。

---

### (method) `severe`

同 [`(method) info`](#method-info) ，但是记录 `SEVERE` 级别的日志消息。

---

### (method) `critical`

同 [`(method) info`](#method-info) ，但是记录 `CRITICAL` 级别的日志消息。

---

### (method) `fatal`

同 [`(method) info`](#method-info) ，但是记录 `FATAL` 级别的日志消息。

---

### (method) `get_custom_call`
```Python
(method) def get_custom_call(
    alias: str
) -> Callable[(...) -> None]
```

获取自定义日志调用函数；你将会得到一个类似于 [`(method) info`](#method-info) 的函数，但是它的日志级别将会被设置为你指定的别名。

#### 参数
- `alias` `(str)` 日志级别别名。

#### 返回
- `custom_call` `Callable[..., None]` 自定义日志调用函数。

---

### (method) `__getattr__`
```Python
(method) def __getattr__(
    name: str
) -> Callable[(...) -> None]
```
