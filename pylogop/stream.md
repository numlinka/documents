# logop - 输出流

输出流的具体实现。

_于 `logop.stream` 中定义，可在 `logop` 中直接访问。_


## `StandardOutputStream`

标准输出流对象，实现 `BaseOutputStream` ，它的主要任务是以合适的格式和方式将日志信息输出到指定位置。

### (class) `StandardOutputStream`
```Python
(method) def __init__(
    name: str = None
) -> None
```

创建一个新的标准输出流；它接受日志对象传递的日志信息单元，将其格式化并输出到标准输出或错误输出。

#### 参数
- `name` `(str)` 输出流的名称，用于区分同类型的输出流。

---

### (variable) `name`
```Python
(variable) name -> str
```

输出流的名称。

---

### (variable) `type`
```Python
(variable) type -> str
```

输出流的类型；只读属性。

---

### (variable) `ident`
```Python
(variable) ident -> int
```

输出流的标识符；只读属性。

---

### (variable) `logging`
```Python
(variable) logging -> Optional[BaseLogging]
```

与此输出流相关的日志记录对象；只读属性。

---

### (variable) `exception_count`
```Python
(variable) exception_count -> int
```

该输出流已捕获的异常次数；只读属性。

---

### (method) `add_exception_count`
```Python
(method) def add_exception_count() -> None
```

增加异常计数。

---

### (method) `associate`
```Python
(method) def associate(
    logging_object: BaseLogging,
    ident: int = IDENT_EMPTY
) -> None
```

将此输出流与日志记录对象关联。

#### 参数
- `logging_object` `(BaseLogging)` 日志记录对象。
- `ident` `(int)` 该输出流的标识。

#### 引发
- TypeError `(TypeError)` 如果 `logging_object` 不是 `BaseLogging` 的实例。
- StreamAssociationFailed `(StreamAssociationFailed)` 输出流已与日志记录对象关联。
- StreamVerificationFailed `(StreamVerificationFailed)` 提供的标识无效。

---

### (method) `disassociate`
```Python
(method) def disassociate(
    verify: bool = False
) -> None
```

将此输出流与日志记录对象解除关联。

#### 参数
- `verify` `(bool)` 你无需提供此参数，取消关联的验证阶段。

#### 引发
- StreamVerificationFailed `(StreamVerificationFailed)` 提供的标识无效。

---

### (method) `direct`
```Python
(method) def direct(
    value: str,
    *args: AnyStr,
    **kwargs: AnyStr
) -> None
```

直接输出消息内容。

#### 参数
- `value` `(str)` 消息内容。
- `*args` `(AnyStr)` 可选参数。
- `**kwargs` `(AnyStr)` 可选关键字参数。

---

### (method) `call`
```Python
(method) def call(
    log_format: str,
    log_unit: LogUnit
) -> None
```

输出信息内容。

#### 参数
- `log_format` `(str)` 日志格式。
- `log_unit` `(LogUnit)` 日志单元。



## `StandardOutputStreamPlus`

标准输出流对象，继承 `StandardOutputStream` 。

### (class) `StandardOutputStreamPlus`
```Python
(method) def __init__(
    name: str = None
) -> None
```

创建一个新的标准输出流；它接受日志对象传递的日志信息单元，将其格式化并输出到标准输出或错误输出。与普通版本不同的是，Plus 版本会给控制台日志着色。

#### 参数
- `name` `(str)` 输出流的名称，用于区分同类型的输出流。

---

### (method) `set_level_color`
```Python
(method) def set_level_color(
    level: int,
    *colors: str
) -> None
```

设置日志级别对应的颜色。

#### 参数
- `level` `(int)` 日志级别。
- `*colors` `(str)` 颜色。

#### 引发
- LogLevelInvalid `(LogLevelInvalid)` 提供的日志级别无效。
- ValueError `(ValueError)` 必须提供颜色参数。
- TypeError `(TypeError)` 颜色参数必须是字符串。

---

### (method) `call`
```Python
(method) def call(
    log_format: str,
    log_unit: LogUnit
) -> None
```

输出信息内容。

#### 参数
- `log_format` `(str)` 日志格式。
- `log_unit` `(LogUnit)` 日志单元。


## `FileOutputStream`

文件输出流对象，继承 `StandardOutputStream` 。

### (class) `FileOutputStream`
```Python
(method) def __init__(
    name: str = None,
    target: str | TextIOBase = None
) -> None
```

创建一个新的文件输出流；它接受日志对象传递的日志信息单元，将其格式化并输出到文件或文件 IO 对象中。

#### 参数
- `name` `(str)` 输出流的名称，用于区分同类型的输出流。
- `target` `(str | TextIOBase)` 它必须是一个有效的文件路径或文本 IO 对象。如果是字符串，它将以日志单元格式化。默认值： `"./logs/{date}.log"`

---

### (variable) `target`
```Python
(variable) target -> Union[str, TextIOBase]
```

输出目标。

---

### (method) `set_target`
```Python
(method) def set_target(
    target: str | TextIOBase
) -> None
```

设置输出目标。

#### 参数
- `target` `(str | TextIOBase)` 它必须是一个有效的文件路径或文本 IO 对象。如果是字符串，它将以日志单元格式化。默认值： `"./logs/{date}.log"`

#### 引发
- TypeError `(TypeError)` 提供的目标无效。

---

### (method) `call`
```Python
(method) def call(
    log_format: str,
    log_unit: LogUnit
) -> None
```

输出信息内容。

#### 参数
- `log_format` `(str)` 日志格式。
- `log_unit` `(LogUnit)` 日志单元。

