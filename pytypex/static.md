# typex - 静态类

仅允许定义为静态类，无法实例化，适用于组织和管理静态方法和属性。

_于 `typex.basic` 中定义，可在 `typex` 中直接访问。_


## `Static`

静态类，该类不能被实例化，继承该类的子类也不能被实例化。


## 使用示例

想要定义静态类，需要继承 `Static` 类。

```Python
from typex import Static

class MyStatic (Static):
    ...
```

通过该方式定义的类不能够实例化，否则会抛出 `TypeError` 异常。

```Python
class MyStatic (Static):
    ...

instance = MyStatic()  # raise TypeError  # [!code error]
```


静态类可以定义属性和方法，但由于不能实例化，所以只能静态访问和调用。

```Python
class MyStatic (Static):
    my_attr_1 = 10086
    my_attr_2 = "static"
    my_attr_3 = 3.1415926

    def my_method_1 ():
        return True

print(MyStatic.my_attr_1)  # 10086
print(MyStatic.my_method_1())  # True
```
