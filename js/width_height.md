# 获取(块)元素的各类宽高

## element.style.<width | height> (可读可写)
### 获取的是什么
* 获取的是设置宽高, 与盒模型无关
* 获取到的是字符串, 带px, 如果不存在则返回的是空字符串
### 获取条件
* 元素内联样式存在才能获取
* 通过js代码设置也能获取(相当于内联样式)


## element.<clientWidth | clientHeight> (只读)
### 获取的是什么
* 获取的是内容宽高 + padding值
* 出现滚动条时要减去滚动条的宽高
* 获取到的是数字, 不带px
### 获取条件
* 总是能够获取到


## element.<clientLeft | clientTop> (只读)
### 获取的是什么
* 获取的是border值
* 获取到的是数字, 不带px
### 获取条件
* 总是能够获取到


## element.<offsetWidth | offsetHeight> (只读)
### 获取的是什么
* 获取的是内容高度 + padding值 + border值
* 获取到的是数字, 不带px
### 获取条件
* 总是能够获取到


## element.<offsetLeft | offsetTop> (只读)
### offsetParent
* 指向当前元素的最近父辈元素(具有定位功能, 如position: relative)
* 如果找不到则指向body
### 获取的是什么
* 获取的是自身border的距离到offsetParent的border距离
* 获取到的是数字, 不带px
### 获取条件
* 总是能够获取到


## element.<scrollWidth | scrollHeight> (只读)
### 获取的是什么
* 内容的宽高 + padding值