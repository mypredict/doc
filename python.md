## list str 
a = [0,1,2,3,4,5,5,5]
len(a)          # 6
min(a)          # 0
max(a)          # 5
a.index(3)      # 3
a.index(3,2,3)  # err
a.count(5)      # 3
a[0] == 0
a[-1] == 5
a[::] == [0,1,2,3,4,5]
a[1:5:2] == [1,3]
a[1:6:-1] == [5,4,3,2,1]
a + a == [0,1,2,3,4,5,0,1,2,3,4,5]
a * 3 == [0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5]
10 in a                         # False
10 not in a                     # True
q,w,e,*r = a

## list (可变)
a[0] = 10                       # [10,1,2,3,4,5,5,5]
a[0:2] = ['a','b','c']          # ['a','b','c',2,3,4,5,5,5]
a[0:0] = 'b'                    # ['b',0,1,2,3,4,5,5,5]
a[::2] = ['a','a','a','a']      # ['a',1,'a',3,'a',5,'a',5]
del a[0]                        # [1,2,3,4,5,5,5]
del a[::2]                      # [1,3,5,5]
a[::2] = []                     # [1,3,5,5]

a.append('z')                   # [0,1,2,3,4,5,5,5,'z']
a.insert(2, 'z')                # [0,1,'z',2,3,4,5,5,5,'z']
a.extend(['a','b','c'])         # [0,1,2,3,4,5,5,5,'z','a','b','c']
a.pop(-1) == a.pop()            # [0,1,2,3,4,5,5]
a.remove(5)                     # [0,1,2,3,4,5,5]
a.clear()                       # []
a.reverse()                     # [5,5,5,4,3,2,1,0]
a.sort()
a.sort(reverse=True)
for item in a :
    ...

## str (不可变)
a = 'abcde'
list(a) == ['a','b','c','d','e']

## tuple (不可变)
a = (1,2,3,4,5)
b = (1,)
c,d,*e = a
c                    # 1
d                    # 2
e                    # [3,4,5]
f,*g,h = a

## dict (可变)
obj = {
    'name': 'g',
    'age': 23,
    'job': 'web'
}
obj = dict(name='g', age=23, job='web')
obj = dict([('name', 'g'), ('age', 23)])
obj['name']
obj.get('name', 'default')
obj['love'] = 'g'
obj.setdefault('name', 'g')       # 存在就返回, 不存在就插入再返回
obj.update({'city': '北京'})

del obj['name']
obj.popitem()                     # 返回被删除的键值对(一般最后一个)
obj.pop('name', 'default, 如果不存在不会报错')
obj.clear()
obj2 = obj.copy()                 # 浅复制
obj.keys()                        # ['name', 'age', 'job']
obj.values()                      # ['g', 23, 'web']
obj.items()                       # [('name', 'g'), ('age', 23), ('job', 'web')]

for v,k in obj.items() :
    ...

## set (可变)
<!-- 只能存储不可变对象 -->
newSet = {1,2,3,4,5}
newSet = set([1,2,3,4,4,5])
newSet = set((1,2,3,4,4,5))
newSet = set('abbc')
newSet = set(obj)                 # {'name', 'age', 'job'}
newSet.add(10)
newSet.update({4,5,6,7})
newSet.update((4,5,6,7))
newSet.update(obj)
newSet.copy()

newSet.pop()                      # 随机删除(一般从头)
newSet.remove(3)
newSet.clear()

set1 = {1,2,3,4,5}
set2 = {4,5,6,7,8}
set1 & set2         # {1,2,3,4,5,6,7,8}
set1 | set2         # {4,5}
set1 ^ set2         # {1,2,3,6,7,8}
set1 - set2         # {1,2,3}
set1 <= set2        # False (子集)
set1 < set2         # False (真子集)

## function
def fn(a:str = '10', *b, c:int) -> str:        # b是一个元组, 函数返回值为 str 类型
    '''
        这里是函数功能的说明
    '''
    print(f'函数被调用了, 参数为{a}')
    return 'string'
fn(1,2,3,4,c=5)

def fn(*,a,b) :
    print('强制必须赋值传参')

def fn(a,**b) :
    print('解构为字典b')                        # a == {b: 2, c: 3}
fn(a=1,b=2,c=3)