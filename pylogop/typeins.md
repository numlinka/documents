# logop - 数据类型

logop 特定的数据类型。

_于 `logop.typeins` 中定义，在 `logop` 中使用 `typeins` 访问，未包含在 `__all__` 中。_


## `LevelDetails`

日志级别详细信息；包含日志级别、名称和别名。

- `.level -> int` 等级
- `.alias -> str` 等级别名
- `.name -> str` 等级名称


## `StateSource`

状态来源；获取更丰富状态信息的信息来源；用于获取当前日志级别、线程、进程等信息。

- `.loglevel -> LevelDetails`
- `.datetime -> DateTime`
- `.frame -> FrameType`
- `.thread -> Thread`
- `.process -> BaseProcess`


## `LogDetails`

记录日志详细信息；

- `.message -> str` 日志消息
- `.mark -> str` 标记
- `.level -> int` 日志等级
- `.level_name -> str` 日志等级名称
- `.level_alias -> str` 日志等级别名
- `.date -> str` 日期
- `.time -> str` 时间
- `.milli -> str` 毫秒
- `.micro -> str` 微秒
- `.module -> str` 模块
- `.filepath -> str` 文件绝对路径
- `.filename -> str` 文件名
- `.function -> str` 函数名
- `.line -> int` 文件路径
- `.file -> str` 行
- `.thread -> str` 线程名
- `.thread_name -> str` 线程名
- `.thread_ident -> int` 线程标识
- `.process -> int` 进程标识


## `LogUnit`

日志单元；包含一个日志的所有信息。

- `.details -> LogDetails`
- `.args -> Tuple[AnyStr]` 
- `.kwargs -> Dict[str, AnyStr]`


## `TrackStateUnit`

追踪状态单元；包含一个追踪状态的所有信息。

- `._lock -> threading.RLock`
- `.logging -> Optional[Logging]`
- `.track_callee -> bool`
- `.track_result -> bool`
- `.track_except -> bool`
- `.callable -> Callable`
- `.level_alias -> str`
