# for in (Object.keys() 和 Object.values() 都是基于 for in)

## 遍历对象
* 可以遍历 `数组` 或 `类数组 (对象, 字符串等)`, 通常用来遍历对象
* 遍历对象和对象继承来的可枚举属性取出的为 `key` 值
* 遍历数组, 字符串等取出的都是下标值
* 不保证在迭代过程中在对象上进行添加、修改或者删除属性的操作, 除非是对当前正在被访问的属性

## 遍历顺序
* 遍历顺序不是绝对固定的
* 先按 `整数索引 (integer indices)` 升序输出
* 然后按添加顺序输出字符串key
* 所以纯数字索引以升序排在最前面 (最后会被转换为字符串)