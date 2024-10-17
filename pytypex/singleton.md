# 单例类

确保类只有一个实例存在，并提供一个全局访问点，为全局访问提供便利。

## `typex.Singleton`

单例类，该类不能直接被实例化，该类的子类只会创建一个实例，且子类的 `__init__` 方法会被替换成 `Singleton.__init__` ，使得该方法只会被执行一次。


## 使用示例

想要定义单例类，需要继承 `Singleton` 类。

```Python
from typex import Singleton

class MySingleton (Singleton):
    ...
```

通过该方式定义的类只会有一个实例，当你尝试创建多个实例时，它们将引用同一个实例。

```Python
class MySingleton (Singleton):
    ...

instance_1 = MySingleton()
instance_2 = MySingleton()

print(instance_1 is instance_2)  # True
```

单例类的子类会在第一次创建实例时替换该类的 `__init__` 方法，使得该方法只会被执行一次。

```Python
class MySingleton (Singleton):
    def __init__(self, name: str = "MySingleton") -> None:
        print(name)
        self.name = name

instance_1 = MySingleton("MySingleton - first")  # MySingleton - first
instance_2 = MySingleton("MySingleton - second")  # (No output)

print(instance_2.name)  # MySingleton - first
```

