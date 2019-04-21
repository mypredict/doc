# void 是js的操作符

## void基本特性
* void后可以跟着任何表达式, void都会执行这个表达式
* 返回值为严格的undefined

## void作用
* 返回严格的undefined
* a标签执行一个不刷新页面的URL, href="javascript:void(0)"

> undefined 不是保留字, 为了严谨是用void * 返回严谨的 undefined

~~~
function fn () {
  const undefined = 2;
  return undefined;
}
fn();  // 2
~~~