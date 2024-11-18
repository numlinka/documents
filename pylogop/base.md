# logop - 抽象类型

抽象类型是定义了接口，但不包含实现。

_于 `logop.base` 中定义，可在 `logop` 中直接访问。_


## `BaseLogging`

日志记录器对象，抽象类型；它的主要任务是被用户调用，收集日志和状态信息，将其打包成日志单元，然后交给输出流对象。

- `.level -> int`
- `.log_format -> str`
- `.is_paused -> bool`
- `.is_closed -> bool`
- `.is_async -> bool`
- `.stdout -> BaseOutputStream`
- `.set_level(...) -> None`
- `.set_format(...) -> None`
- `.pause(...) -> None`
- `.unpause(...) -> None`
- `.close(...) -> None`
- `.add_stream(...) -> int`
- `.add_stream_verify(...) -> bool`
- `.del_stream(...) -> None`
- `.del_stream_verify(...) -> bool`
- `.call(...) -> None`
- `.debug(...) -> None`
- `.info(...) -> None`
- `.warn(...) -> None`
- `.error(...) -> None`
- `.fatal(...) -> None`


## `BaseOutputStream`

输出流对象，抽象类型；它的主要任务是以合适的格式和方式将日志信息输出到指定位置。

- `name -> str`
- `type -> str`
- `ident -> int`
- `logging -> BaseLogging`
- `exception_count -> int`
- `.add_exception_count(...) -> None`
- `.associate(...) -> None`
- `.disassociate(...) -> None`
- `.direct(...) -> None`
- `.call(...) -> None`
