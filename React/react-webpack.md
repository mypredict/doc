# 创建项目时集成ts
create-react-app <name> --typescript

# 添加redux
npm install --save redux react-redux redux-thunk
npm install --save-dev redux-devtools
## ts版本下
npm install --save @types/react-redux
npm install --save-dev @types/redux-devtools-extension

# 添加scss
npm install --save-dev node-sass

# 添加react-router
npm install --save react-router-dom
## ts版本下
npm install --save @types/react-router-dom

# 本地代理
package.json
~~~
{
  "proxy": "http://192.168.31.222:8000/"
}
~~~