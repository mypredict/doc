# interface
~~~
1. 只读数组(可索引类型)
  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  const myArr: ReadonlyStringArray = ['a', 'b'];
2. 可选和其它未知参数
  interface FreeParams {
    key: string;
    value?: number;
    [propName: string]: any;
  }
  const freeParams: FreeParams = {
    key: 'a',
    name: () => {}
  };
3. 定义函数
  interface MyFn {
    (a: string, b: Array<number>): boolean;
  }
  let myFn: MyFn;
  myFn = (name, skill) => {
    return skill.length > 3;
  };
  myFn('小明', [1,2,3]);
4. 混合类型
  interface MixedType {
    (start: number): string;
    count: number;
    myFn(): boolean;
  }
  function fn(): MixedType {
    const targetObj = <MixedType>(start: number) => {};
    targetObj.count = 100;
    targetObj.myFn = () => {return true};
    return targetObj;
  }
~~~
