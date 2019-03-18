# 相对 RESTful 的优点
## Overfetching
得到了多余的不想要得到的数据

## Underfetching
没有得到所有想要得到的, 多次请求

# GraphQL
## 描述
使用 Schema 来描述数据，并通过制定和实现 GraphQL 规范 定义了支持 Schema 查询的 DSQL

## 使用(以express为例)
###前端测试
~~~
{
  users,
  articles,
  complex {
    name,
    age,
    job,
    num(type: "foot")
  },
  computed(a: 10, b: 11)
}
~~~

### 前端
~~~
const query = `
  query Computed($a: Int!, $b: Int) {
    computed(a: $a) {
      
    }
  }
`
~~~

### 后端测试
~~~
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// 定义查询语句和类型 (articles 方法, String 类型)
// 基本类型: String, Int, Float, Boolean, ID
// ! 参数是否是必须的
const schema = buildSchema(`
  type Complex {
    name: String
    age: Int
    job: String,
    num (type: String!): Int
  }
  type Query {
    users: [String]
    articles: [String]
    complex: Complex
    computed(a: Int!, b: Int): Int
  }
  type Mutation {

  }
`)

// 对应上面的方法
const root = {
  articles: () => {
    return ['article1', 'article2'];
  },
  users: () => {
    return ['user1', 'user2'];
  },
  complex: () => {
    return {
      name: 'guo',
      age: 20,
      job: 'web',
      num: ({type}) => {
        switch (type) {
          case 'head':
            return 1
          case 'foot':
            return 2
          default:
            return 3
        }
      }
    }
  },
  computed ({a, b}) {
    if (b) {
      return a + b
    }
    return a
  }
}

// 绑定
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true  // 是否启用调试界面
}))
~~~