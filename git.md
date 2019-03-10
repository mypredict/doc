# 基本操作
## 初始化
git init

## git 当前状态
git status

## 提交到暂存区
git add <文件> | .

## 将暂存区内容提交到本地库
git commit -m "提交说明"

## 查看文件更改
git diff

## 查看历史记录
// 所有提交记录  
git reflog  
// 详细版本  
git log  
// 一行显示版本, 版本号不完整  
git log --oneline  
// 一行显示版本, 版本号完整  
git log --pretty=oneline  
// 分支合并图  
git log --graph

## 重置或者回退前进版本
// HEAD指针, 位于哪个版本  
// 将版本重置到前一个( 根据 ^ 个数 )版本  
git reset --hard HEAD^  
// 将版本重置到前10个版本  
git reset --hard HEAD~10  
// 将版本重置到版本号所在版本  
git reset --hard <版本号>

## 撤销修改
// 撤销 add 前的工作区修改  
git checkout -- <文件>
// 撤销 add 后 commit 前的工作区修改  
git reset --hard HEAD => git checkout -- <文件>  
// 直接回退版本就到了 commit 后之前的版本  
git reset --hard HEAD^

## 删除还原文件
git rm <文件> => git commit -m "删除说明"  
// 同样可以撤销删除  
git checkout -- <文件>

# 远程库
## 关联远程库
git remote add origin <远程分支>

## 查看远程库信息
git remote  
git remote -v

## 推送到远程仓库
// 由于第一推送远程仓库所以加上 -u , origin 代表远程  
git push -u origin master  
// 将本地推送到远程分支(本地的分支要与远程的相对应)  
git push origin <分支名>

## 克隆远程仓库
// 远程仓库可以有 SSH HTTPS 等协议  
git clone <远程仓库>

# 分支
## 创建切换分支
git branch dev => git checkout dev  
// 创建 (-b 切换) 分支dev
git checkout -b dev

## 查看分支
git branch

## 合并分支
// dev开发完后切换到 master 分支, 将 dev 合并到 master  
git checkout master => git merge dev  
// 可以看到合并的记录  
git merge --no-ff -m "merge with no-ff" dev  

// 只对尚未推送或分享给别人的本地修改执行变基操作清理历史  
// 从不对已推送至别处的提交执行变基操作  
// 可以有一条干净的合并路线  
git rebase <分支>

## 删除分支
git branch -d <分支>  
// 强行删除  
git branch -D <分支>

## 临时保存工作区
git stash  
...  
git checkout <刚才保存的分支>  
  // 可以看到保存的记录  
  => git stash list  
  // 恢复后内容再删除stash的保存  
  => git stash apply => git stash drop  
  ||  
  // 恢复后内容直接删除stash的保存
  => git stash pop  
git stash apply <具体stash>

## 拉取远程分支并合并
git fetch origin <远程分支> => git merge  
||  
git pull origin <远程分支>  
||  
git branch --set-upstream-to=origin/dev dev => git pull

# 其他
## 打标签
git checkout <分支>  
  => git tag v1.0  
  ||  
  => git tag v1.0 <commit id>

## 查看标签
git tag

## 删除标签
git tag -d v1.0

## 防止提交
.gitignore 文件夹