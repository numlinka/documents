# logop - 演示

## 基本功能

```Python
from logop import *
from logop.constants import *

# 创建日志对象；输出全部级别，禁用默认标准输出
log = Logging(ALL, stdout=False)
# 创建一个更好的标准输出流对象；将它添加到日志对象中
log.add_stream(StandardOutputStreamPlus())

# 直接写入到标准输出
log.stdout.direct("\n")
# 输出日志
log.trace("This is a trace message.")
log.debug("This is a debug message.")
log.info("This is an info message.")
log.warn("This is a warn message.")
log.warning("This is a warning message.")
log.error("This is an error message.")
log.severe("This is a severe message.")
log.critical("This is a critical message.")
log.fatal("This is a fatal message.")

# 设置格式
log.set_format(FORMAT_TRACE)

log.stdout.direct("\n")
# 输出日志
log.trace("This is a trace message.")
log.debug("This is a debug message.")
log.info("This is an info message.")
log.warn("This is a warn message.")
log.warning("This is a warning message.")
log.error("This is an error message.")
log.severe("This is a severe message.")
log.critical("This is a critical message.")
log.fatal("This is a fatal message.")
```


## 易用设计

```Python
import logop

# 设置日志格式
logop.ease.logging.set_format(logop.constants.FORMAT_TRACE)

# 输出日志
logop.info("Hello, World!")
```


## 调用追踪

```Python
from logop import *
from logop.constants import *

# 创建日志对象；创建一个更好的标准输出流对象；将它添加到日志对象中
log = Logging(ALL, stdout=False)
log.add_stream(StandardOutputStreamPlus())

# 创建一个函数，并使用装饰器进行调用追踪
@callabletrack
def demo_function(a: int, b: int) -> float:
    return a / b


def main():
    log.stdout.direct("\n")
    log.info("Let us first call the function in the right way.")
    # 正确调用
    demo_function(1, 1)

    try:
        log.stdout.direct("\n")
        log.info("Now let us call the function in the wrong way.")
        # 错误调用
        demo_function(1, 0)

    except ZeroDivisionError as _:
        ...


if __name__ == "__main__":
    main()
```


## 个性化

```Python
import logop
from logop.constants import *

# 创建日志对象；创建一个更好的标准输出流对象；将它添加到日志对象中
log = logop.Logging(DEBUG, FORMAT_TRACE, stdout=False)
stdout = logop.StandardOutputStreamPlus()
log.add_stream(stdout)

# 添加自定义级别
logop.utils.add_log_level(WARN, "custom", "CUSTOM")
logop.utils.add_log_level(ERROR, "custom_2", "CUSTOM-2")

# 使用自定义日志级别输出日志（日志对象会自动重载这些方法）
log.custom("This is a custom log level.")
log.custom_2("This is a custom_2 log level.")

# 设置指定级别日志的颜色和风格
stdout.set_level_color(WARN, ITALIC, FG_YELLOW)

# 输出日志
log.warn("This is a warn message.")
```
