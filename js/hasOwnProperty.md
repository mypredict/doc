# hasOwnPropert

## 作用
* 检测一个对象上是否定义了某个属性, 不查找原型链，返回值都是 `true|false`

## 使用
1. obj.hasOwnProperty(key)
2. hasOwnProperty.call(obj, key)
> `null` 这两者调用都会报错  
> 推荐使用 `hasOwnProperty.call(obj, key)`, 因为以下情况会出错
> 1. 对象的 `hasOwnProperty` 属性被重写
> 2. 有些对象不存在 `hasOwnProperty` 属性, 例如 `字符串`

~~~
// TypeError: is not a function
Object.create(null).hasOwnProperty(key);
// TypeError: is not a function
hasOwnProperty.call(Object.create(null), key);
~~~