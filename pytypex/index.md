# typex - 介绍

_该库根据 MIT 许可协议分发。_

## 介绍

pytypex 是一个轻量级的 Python 库，作为 [simplepylibs](https://github.com/numlinka/simplepylibs) 计划的一部分，旨在扩展 Python 的基础类型。为了方便，我们通常直接称之为 **typex** 。该库实现了一些在标准库中未提供的类型，增强了 Python 的灵活性和使用场景，这些类型包括：

- 静态类：仅允许定义为静态类，无法实例化，适用于组织和管理静态方法和属性。
- 单例类：确保类只有一个实例存在，并提供一个全局访问点，为全局访问提供便利。
- 多例类：允许同一类创建多个独立的实例，方便在不同上下文中使用相同的类定义。
- 原子计数器：提供线程安全的计数功能，适用于并发编程，确保计数操作的原子性。
- 目录构建器：更方便的创建目录结构，帮助记录目录结构，并自动创建文件夹。

通过使用 typex，开发者能够轻松实现更高效的代码结构，满足特定的编程需求。

## 安装

安装 typex 的首选方式是通过 pip ：

```shell
pip install typex
```

要将 typex 升级到最新版本，请使用以下命令：

```shell
pip install --upgrade typex
```

## 使用

要使用 typex，可以通过以下方式导入：

```Python
import typex
```

```Python
from typex import *
```
