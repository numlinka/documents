# typex - 多例类

允许同一类创建多个独立的实例，方便在不同上下文中使用相同的类定义。

_于 `typex.basic` 中定义，可在 `typex` 中直接访问。_


## `Multiton`

多例类，该类不能直接被实例化，该类的子类可以创建多个实例，且子类的 `__init__` 方法会被替换成 `Multiton.__init__` ，使得该方法每个实例只会执行一次。

_于 `typex.basic` 中定义，可在 `typex` 中直接访问。_

- `class Multiton (*args, instance_name: str = DEFAULT, **kwargs) -> Self`\
  获取一个实例，如果该实例不存在，则创建一个实例并返回。\
  `instance_name` 参数是可选的，默认为 `DEFAULT`，会返回一个指定名称的实例；`args` 和 `kwargs` 会传递给实例的 `__init__` 方法。

- `.instance_name -> str`\
  只读属性，记录该实例的名称。

- `.get_instance(instance_name: str = DEFAULT, *args: Any, **kwargs: Any) -> Self`\
  类方法，它的作用和 `class Multiton (...)` 一样， 但是参数的位置不同。


## 使用示例

想要定义单例类，需要继承 `Multiton` 类。

```Python
from typex import Multiton

class MyMultiton (Multiton):
    ...
```

通过该方法定义的类可以创建多个实例，你可以通过实例化语法或类方法 `get_instance()` 来创建或获取实例。对于已有的实例，将不再重新执行 `__init__` 方法。

```Python
class MyMultiton (Multiton):
    def __init__(self, mode: int):
        print(f"MyMultiton: {mode}")
        self.mode = mode

instance_a_1 = MyMultiton(1)  # MyMultiton: 1
instance_a_2 = MyMultiton(2)  # (No output)
instance_a_3 = MyMultiton.get_instance(3)  # (No output)
instance_a_4 = MyMultiton.get_instance()  # (No output)

print(instance_a_1 is instance_a_2)  # True
print(instance_a_1 is instance_a_3)  # True
print(instance_a_1 is instance_a_4)  # True

instance_b_1 =  MyMultiton.get_instance("b", 5)  # MyMultiton: 5
instance_b_2 =  MyMultiton(6, instance_name="b")  # (No output)

print(instance_b_1 is instance_b_2)  # True
print(instance_b_1 is instance_a_1)  # False

print(instance_a_1.mode)  # 1
print(instance_b_1.mode)  # 5

print(instance_a_1.instance_name)  # default
print(instance_b_1.instance_name)  # b
```

