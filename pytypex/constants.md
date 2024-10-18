# typex - 常量

常量是一些被事先确定好的值的集合，这些值在程序运行期间不会被改变。

_于 `typex.constants` 中定义，在 `typex` 中使用 `constants` 访问，未包含在 `__all__` 中。_


## 导入

你可以通过以下三种方式访问常量：

::: code-group

```Python [import]
import typex

typex.constants.DEFAULT
```

```Python [from _ import]
from typex import constants

constants.DEFAULT
```

```Python [from _ import *]
from typex.constants import *

DEFAULT
```

`from typex import *` 不会导入常量和常量模块，它未被包含在 `__all__` 中。

:::


## 常量内容

- `DEFAULT` `(str)`\
  多例类在生成默认实例时使用的默认名称。
