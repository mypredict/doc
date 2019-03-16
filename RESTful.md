# 客户端
## 请求形式
客户端发出的请求规范 动词 + 宾语 `GET /articles`
* GET: 读取  
* POST: 新建  
* PUT: 更新  
* PATCH: 更新  
* DELETE: 删除  

## 宾语必须是名词, 建议是复数 (articles | /article)

## 避免多级URL
GET /authors/12/categories/2  // 不建议
GET /authors/12?categories=2  // 建议

## 查询已发布的文章
GET /articles/published       // 不建议
GET /articles?published=true  // 建议

# 服务器
## 不返回纯文本
响应头: Content-Type: application/json
请求头: Accept: application/json
## 发生错误不返回 200