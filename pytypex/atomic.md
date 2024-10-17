# 原子计数器

提供线程安全的计数功能，适用于并发编程，确保计数操作的原子性。


## `typex.Atomic`

原子计数器，每次访问时值都会递增。

`class Atomic (max_value: int = -1)`

> 获取一个原子计数器实例  
> max_value (int): 计数器的最大值，超过这个值将从头计数，默认为 -1，表示不限制。

`._set_max_value(max_value: int) -> None`

> max_value (int): 计数器的最大值，超过这个值将从头计数，-1 表示不限制。\
> 最大值推荐在声明时就设置好，不推荐在运行时动态设置。

`.get_count() -> int`

> 获取当前计数值。

`.count -> int`

> 只读属性；获取当前计数值，方便的是，你不需要写括号。

`.value -> int`

> 同 `.count` 。


## `typex.AbsoluteAtomic`

> 绝对原子计数器，继承 `Singleton` 和 `Atomic`，同时拥有两者的特性。这意味着所有使用该类的实例将共享一个计数器。


## `typex.MultitonAtomic`

> 多例原子计数器，继承 `Multiton` 和 `Atomic`，同时拥有两者的特性。这意味着你可以创建不同的实例，且每个实例的计数器都是独立的。


## 使用示例

原子计数器每一个实例都是独立的，拥有唯一的计数器。

```Python
from typex import Atomic

atomic_1 = Atomic()
atomic_2 = Atomic()
atomic_3 = Atomic()
atomic_4 = Atomic()

for _ in range(10):
    print(atomic_1.get_count())  # 0 1 2 3 ... 9

for _ in range(10):
    print(atomic_2.count)  # 0 1 2 3 ... 9

for _ in range(10):
    print(atomic_3.value)  # 0 1 2 3 ... 9

for _ in range(10):
    print(atomic_4.get_count())  # 0 1 2 3 ... 9
```

绝对原子计数器，是一个单例类，这意味着它只有一个实例。

```Python
from typex import AbsoluteAtomic

atomic_1 = AbsoluteAtomic()
atomic_2 = AbsoluteAtomic()
atomic_3 = AbsoluteAtomic()
atomic_4 = AbsoluteAtomic()

for _ in range(10):
    print(atomic_1.get_count())  # 0 1 2 3 ... 9

for _ in range(10):
    print(atomic_2.count)  # 10 11 12 13 ... 19

for _ in range(10):
    print(atomic_3.value)  # 20 21 22 23 ... 29

for _ in range(10):
    print(atomic_4.get_count())  # 30 31 32 33 ... 39
```

多例原子计数器在相同的实例中共享一个计数器。

```Python
from typex import MultitonAtomic

atomic_1 = MultitonAtomic()
atomic_2 = MultitonAtomic(instance_name="test")
atomic_3 = MultitonAtomic.get_instance()
atomic_4 = MultitonAtomic(instance_name="test")

for _ in range(10):
    print(atomic_1.get_count())  # 0 1 2 3 ... 9

for _ in range(10):
    print(atomic_2.count)  # 0 1 2 3 ... 9

for _ in range(10):
    print(atomic_3.value)  # 10 11 12 13 ... 19

for _ in range(10):
    print(atomic_4.get_count())  # 10 11 12 13 ... 19
```
