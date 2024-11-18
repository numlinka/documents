# logop - 常量

常量是一些被事先确定好的值的集合，这些值在程序运行期间不会被改变。

_于 `logop.constants` 中定义，在 `logop` 中使用 `constants` 访问，未包含在 `__all__` 中。_


## 导入

你可以通过以下三种方式访问常量：

::: code-group

```Python [import]
import logop

logop.constants.INFO
```

```Python [from _ import]
from logop import constants

constants.INFO
```

```Python [from _ import *]
from logop.constants import *

INFO
```

`from logop import *` 不会导入常量和常量模块，它未被包含在 `__all__` 中。

:::


## 常量内容

### 日志等级 {#log-level}

- `ALL` `(int)`
- `TRACE` `(int)`
- `DEBUG` `(int)`
- `INFO` `(int)`
- `WARN` `(int)`
- `WARNING` `(int)`
- `ERROR` `(int)`
- `SEVERE` `(int)`
- `CRITICAL` `(int)`
- `FATAL` `(int)`
- `OFF` `(int)`

### 日志等级名称

- `TRACE_NAME` `(str)`
- `DEBUG_NAME` `(str)`
- `INFO_NAME` `(str)`
- `WARN_NAME` `(str)`
- `WARNING_NAME` `(str)`
- `ERROR_NAME` `(str)`
- `SEVERE_NAME` `(str)`
- `CRITICAL_NAME` `(str)`
- `FATAL_NAME` `(str)`

### 日志等级别名

- `TRACE_ALIAS` `(str)`
- `DEBUG_ALIAS` `(str)`
- `INFO_ALIAS` `(str)`
- `WARN_ALIAS` `(str)`
- `WARNING_ALIAS` `(str)`
- `ERROR_ALIAS` `(str)`
- `SEVERE_ALIAS` `(str)`
- `CRITICAL_ALIAS` `(str)`
- `FATAL_ALIAS` `(str)`

### 日志内容键

| 常量名 | 类型 | 描述 |
| :--- | :--- | :--- |
| `MESSAGE` | `(str)` | 日志消息 |
| `MARK` | `(str)` | 标记 |
| `LEVEL` | `(int)` | 日志等级 |
| `LEVEL_NAME` | `(str)` | 日志等级名称 |
| `LEVEL_ALIAS` | `(str)` | 日志等级别名 |
| `DATE` | `(str)` | 日期 |
| `TIME` | `(str)` | 时间 |
| `MILLI` | `(str)` | 毫秒 |
| `MICRO` | `(str)` | 微秒 |
| `MODULE` | `(str)` | 模块 |
| `FILEPATH` | `(str)` | 文件绝对路径 |
| `FILENAME` | `(str)` | 文件名 |
| `FUNCTION` | `(str)` | 函数名 |
| `FILE` | `(str)` | 文件路径 |
| `LINE` | `(int)` | 行 |
| `THREAD` | `(str)` | 线程名 |
| `THREAD_NAME` | `(str)` | 线程名 |
| `THREAD_IDENT` | `(int)` | 线程标识 |
| `PROCESS` | `(int)` | 进程标识 |

### 输出流类型

- `STANDARD` `(str)`\
  标准类型输出流

### 特殊标识值

- `IDENT_EMPTY` `(int)`\
  输出流标识为空时的值

### 默认名称

- `DEFAULT_THREAD_NAME` `(str)`\
  日志记录器的默认线程名称
- `IDENT_COUNTER` `(str)`\
  输出流标识的原子计数器名称
- `LOG_ID_COUNTER` `(str)`\
  日志标识的原子计数器名称

### 其它字符常量

- `CHAR_LF` `(str)`\
  换行符

### 日志格式

- `FORMAT_DEFAULT` `(str)`
- `FORMAT_SIMPLE` `(str)`
- `FORMAT_VERY_SIMPLE` `(str)`
- `FORMAT_DEBUG` `(str)`
- `FORMAT_TRACE` `(str)`

### ASNI 样式代码 {#asni-style-code}

以下常量只适合作为 ANSI 样式参数使用，不适合直接输出。

| 常量名 | 类型 | 描述 |
| :--- | :--- | :--- |
| `RESET` | `(str)` | 重置所有颜色和样式属性 |
| `BOLD` | `(str)` | 加粗 |
| `DIM` | `(str)` | 淡色 |
| `ITALIC` | `(str)` | 斜体 |
| `UNDERLINE` | `(str)` | 下划线 |
| `BLINK` | `(str)` | 闪烁 |
| `REVERSE` | `(str)` | 反显（前景色和背景色互换） |
| `HIDDEN` | `(str)` | 隐藏 |
| `STRIKETHROUGH` | `(str)` | 删除线 |
| `FG_BLACK` | `(str)` | 前景色 黑 |
| `FG_RED` | `(str)` | 前景色 红 |
| `FG_GREEN` | `(str)` | 前景色 绿 |
| `FG_YELLOW` | `(str)` | 前景色 黄 |
| `FG_BLUE` | `(str)` | 前景色 蓝 |
| `FG_MAGENTA` | `(str)` | 前景色 洋红 |
| `FG_CYAN` | `(str)` | 前景色 青 |
| `FG_WHITE` | `(str)` | 前景色 白 |
| `BG_BLACK` | `(str)` | 背景色 黑 |
| `BG_RED` | `(str)` | 背景色 红 |
| `BG_GREEN` | `(str)` | 背景色 绿 |
| `BG_YELLOW` | `(str)` | 背景色 黄 |
| `BG_BLUE` | `(str)` | 背景色 蓝 |
| `BG_MAGENTA` | `(str)` | 背景色 洋红 |
| `BG_CYAN` | `(str)` | 背景色 青 |
| `BG_WHITE` | `(str)` | 背景色 白 |

- `FG_256` `(str)`\
  高亮前景色；需要提供格式化 `n` 的值，范围 0-255
- `BG_256` `(str)`\
  高亮背景色；需要提供格式化 `n` 的值，范围 0-255
- `FG_RGB` `(str)`\
  RGB 前景色；需要提供格式化 `r` `g` `b` 的值，范围 0-255
- `BG_RGB` `(str)`\
  RGB 背景色；需要提供格式化 `r` `g` `b` 的值，范围 0-255

### ASNI 控制代码

以下常量可以直接推送到标准输出。

- `CURSOR_UP` `(str)`\
  向上移动 n 行；需要提供格式化 `n` 的值
- `CURSOR_DOWN` `(str)`\
  向下移动 n 行；需要提供格式化 `n` 的值
- `CURSOR_FORWARD` `(str)`\
  向右移动 n 列；需要提供格式化 `n` 的值
- `CURSOR_BACK` `(str)`\
  向左移动 n 列；需要提供格式化 `n` 的值
- `CURSOR_POSITION` `(str)`\
  将光标移动到第 n 行第 m 列；需要提供格式化 `row` `col` 的值
- `CURSOR_COLUMN` `(str)`\
  将光标移动到第 m 列；需要提供格式化 `col` 的值
- `CURSOR_ROW` `(str)`\
  将光标移动到第 n 行；需要提供格式化 `row` 的值
- `CLEAR_SCREEN` `(str)`\
  清除整个屏幕
- `CLEAR_FROM_CURSOR_TO_START` `(str)`\
  清除从当前光标位置到屏幕开头的内容
- `CLEAR_FROM_CURSOR_TO_END` `(str)`\
  清除从当前光标位置到屏幕末尾的内容
- `CLEAR_LINE` `(str)`\
  清除从当前光标位置到行末的内容
- `CLEAR_LINE_FROM_CURSOR_TO_START` `(str)`\
  清除从行首到当前光标位置的内容
- `CLEAR_LINE_FROM_CURSOR_TO_END` `(str)`\
  清除整行
- `CURSOR_SAVE` `(str)`\
  保存当前光标位置
- `CURSOR_RESTORE` `(str)`\
  恢复之前保存的光标位置
- `CURSOR_HIDE` `(str)`\
  隐藏光标
- `CURSOR_SHOW` `(str)`\
  显示光标

### 日志消息

- `SPEC_CALLABLE_TRACK_CALLEE` `(str)`
- `SPEC_CALLABLE_TRACK_RESULT` `(str)`
- `SPEC_CALLABLE_TRACK_EXCEPT` `(str)`

