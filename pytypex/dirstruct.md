# typex - 目录构建器

更方便的创建目录结构，帮助记录目录结构，并自动创建文件夹。

_于 `typex.dirstruct` 中定义，可在 `typex` 中直接访问。_


## `FilePath`

文件路径，用来标识文件的路径，继承自 `str` ，它在计算之后转换成 `FinalFilePath` 对象。仅声明为 `Directory` 的属性时可以被识别为需要计算路径的属性。


## `DirectoryPath`

目录路径，用来标识目录的路径，继承自 `str` ，它在计算之后转换成 `FinalDirectoryPath` 对象。仅声明为 `Directory` 的属性时可以被识别为需要计算路径的属性。


## `FinalFilePath`

最终文件路径，继承自 `str` ，它是 `FilePath` 经过计算后的路径，或着直接被标识为不需要计算的文件路径。


## `FinalDirectoryPath`

最终目录路径，继承自 `str` ，它是 `DirectoryPath` 经过计算后的路径，或着直接被标识为不需要计算的目录路径。


## `Directory`

目录构建器，继承自 `DirectoryPath` ，它本身可以用来表示一个目录路径，也可以用来构建目录结构，并自动创建文件夹。该类的类型为 `str` 的属性会被计算后转换成 `FinalDirectoryPath` 对象，而 `FilePath` 类型的属性会被计算后转换成 `FinalFilePath` 对象， `Final...Path` 类型的属性不会被计算。

- `._include_ -> bool`\
  计算目标路径时是否包括自身，（默认为 `True` ）。只推荐修改根 `Directory` 的属性，它决定了在计算子属性的路径时是否会用自身的值进行目录拼接。

- `._value_ -> str`\
  自身原始值, 当你懒得实例化这个类时可以为这个属性赋值，当 `Directory` 类嵌套且未实例化时，目录默认为类名。

- `._makedirs_ -> bool`\
  当目录路径不存在时是否创建，（默认为 `True` ）。是否自动创建文件夹。


## 使用示例

使用 `Directory` 类来构建目录结构，可以将 `FilePath` 和 `DirectoryPath` 赋值给 `Directory` 类的属性，它们会被自动计算。或者直接声明一个 `str` 类型的属性，它同样会作为目录路径进行计算。当尝试访问这个实例的目录路径属性时，若该文件夹不存在，则会自动创建，访问文件路径属性时，则不做检查处理。例如我们构建如下的目录结构：

```
/
├── data/
├── src/
├── test/
└── config.txt
```

```Python
class CWD (Directory):
    data = DirectoryPath("data")
    src = "src"
    test = "test"
    config = FilePath("config.txt")


cwd = CWD(os.getcwd())
print(cwd.data)
```

当有多层目录时，我们可以使用 `Directory` 进行嵌套，在嵌套时目录中，如果路径符合则不需要写出完整的路径。例如我们构建如下的目录结构：

```
/
├── data/
│   ├── users.db
│   └── items.db
│
├── src/
│   ├── module1/
│   └── module2/
│
└── config/
    └── autorun.txt
```

```Python
class CWD (Directory):
    class data (Directory):
        users = FilePath("users.db")
        items = FilePath("items.db")

    class src (Directory):
        module1 = "module1"
        module2 = "module2"

    class config (Directory):
        autorun = FilePath("autorun.txt")

    autorun = FilePath("config/autorun.txt")
```

当某个目录的名称存在特殊字符，或名称不适合作为变量名时，我们可以使用 `_value_` 属性来指定目录名称。例如我们构建如下的目录结构：

```
/
└── user data/
    └── profile.txt
```

```Python
class CWD (Directory):
    class user_data (Directory):
        _value_ = "user data"
        profile = FilePath("profile.txt")
```

通过修改根 `Directory` 的 `_include_` 属性，我们可以控制计算路径时是否包含自身，以实现返回相对路径和绝对路径。例如我们构建如下的目录结构：

```
/
├── env/
├── cache/
└── dist/
```

``` Python
class CWD (Directory):
    env = "env"
    cache = "cache"
    dist = "dist"


CWD._include_ = True
abscwd = CWD(os.getcwd())

CWD._include_ = False
relcwd = CWD(os.getcwd())
```
