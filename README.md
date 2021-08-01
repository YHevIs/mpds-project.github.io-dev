## 开发步骤

1. Fork 项目
2. 在项目根目录执行 `npm install`
3. 在项目根目录执行 `eleventy --server`
4. 开发
5. 提交 PR

## 更新 mpds-project.github.io

进入 _site 目录

执行:

```bash
git init .
rm * -rf
git remote add origin git@github.com-mpds-project:mpds-project/mpds-project.github.io.git
git pull origin master
```

mpds-project.github.io-dev 更新生成 _site 目录之后, 进入 _site

```bash
git add .
git commit -m "your commit message"
git pull origin master
```

## 开源游戏目录

在以下资料中查找好玩的游戏

- [Open Source Game Clones](https://osgameclones.com/)
- [List of Open Source Games](https://trilarion.github.io/opensourcegames/)