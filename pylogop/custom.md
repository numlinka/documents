# logop - 个性化

有些时候我们希望有独具一格的体验，比如添加自定义的日志等级，修改控制台颜色，独具一格的日志输出格式等等。虽然这些函数和方法在前面的文档中有介绍，但并未详细说明，这里将提供一些简单的使用示例。


## 日志级别

默认提供的日志级别不喜欢？没关系！通过 `utils` 中的 `add_log_level()` 函数即可自定义日志级别，只需要提供三个参数，**等级**、**等级别名**、**等级名称**，具体的内容可参考 [日志等级](./level.md) 页面。通过这种方式添加的日志级别在所有的日志记录器中都是有效的，并且你可以在日志记录器中直接访问 `.{等级别名}` 属性的方式获得重载后的日志方法，且参数与 `.info` 一样。

### 示例

```Python
import logop
from logop.constants import *

log = logop.Logging()

logop.utils.add_log_level(WARN, "custom", "CUSTOM")
logop.utils.add_log_level(ERROR, "custom_2", "CUSTOM-2")

log.custom("This is a custom log level.")
log.custom_2("This is a custom_2 log level.")
```

::: warning 注意
由于重载的原因，通过这种方式得到的日志方法性能会略微劣于 `.info`，但影响不会很大。
:::


## 控制台日志颜色

不喜欢 `StandardOutputStreamPlus` 默认的颜色？那就使用它的 `set_level_color()` 方法来修改吧，第一个参数为**等级**，之后的参数为样式代码，具体的样式代码可参考 [常量](./constants.md) 页面的 [ANSI 样式代码](./constants.md#asni-style-code) 段。

### 示例

```Python
import logop
from logop.constants import *

log = logop.Logging(stdout=False)
std_stream = StandardOutputStreamPlus()
log.add_stream(std_stream)

stdout.set_level_color(WARN, ITALIC, FG_YELLOW)

log.warn("This is a warn message.")
```


## 日志输出格式

默认的日志格式为 `FORMAT_DEFAULT` ，虽然我们也提供了一些可选的日志格式，参考 [常量](./constants.md) 页面的 [日志格式](./constants.md#log-format) ，但我相信你肯定不满足于此。

日志格式为一段格式化字符串，且其中必须包含 `"{message}"` ，其它的日志内容键可参考 [常量](./constants.md) 页面的 [日志内容键](./constants.md#log-content-key) 。

### 示例

```Python
import logop
from logop.constants import *

log = logop.Logging()

log.set_format(FORMAT_TRACE)
log.info("This is a log message.")

log.set_format("{time} > {level_name} > {message}")
log.info("Here's another log message.")

log.set_format("{balabala}")  # <-- ValueError # [!code error]
```
