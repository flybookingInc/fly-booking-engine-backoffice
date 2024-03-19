<div align="center"> <a href="https://github.com/kailong321200875/vue-element-plus-admin"> <img width="100" src="./public/logo.png"> </a> <br> <br>

[![license](https://img.shields.io/github/license/kailong321200875/vue-element-plus-admin.svg)](LICENSE)

<h1>vue-element-plus-admin</h1>
</div>

[English](./README.md) | **中文**

## 介紹

vue-element-plus-admin 是一個基於 `element-plus` 免費開源的中後台模版。使用了最新的`vue3`，`vite4`，`TypeScript`等主流技術開發，開箱即用的中後台前端解決方案，可以用來作為項目的啓動模版，也可用於學習參考。並且時刻關注着最新技術動向，儘可能的第一時間更新。

vue-element-plus-admin 的定位是後台集成方案，不太適合當基礎模板來進行二次開發。因為集成了很多你可能用不到的功能，會造成不少的代碼冗餘。如果你的項目不關注這方面的問題，也可以直接基於它進行二次開發。

如需要基礎模版，請切換到 `tempalte` 分支，`tempalte` 只簡單集成了一些如：佈局、動態菜單等常用佈局功能，更適合開發者進行二次開發。

## 特性

- **最新技術棧**：使用 Vue3/vite4 等前端前沿技術開發
- **TypeScript**: 應用程序級 JavaScript 的語言
- **主題**: 可配置的主題
- **國際化**：內置完善的國際化方案
- **自定義數據** 內置 Mock 數據方案
- **權限** 內置完善的動態路由權限生成方案
- **組件** 二次封裝了多個常用的組件
- **示例** 內置豐富的示例

## 預覽

- [vue-element-plus-admin](https://element-plus-admin.cn/) - 完整版 github 站點
- [vue-element-plus-admin](https://kailong110120130.gitee.io/vue-element-plus-admin) - 完整版 gitee 站點

帳號：**admin/admin test/test**

`admin` 帳號用於模擬服務端控制權限，服務端返回什麼就渲染什麼

`test` 帳號用於模擬前端控制權限，服務端只返回需要顯示的菜單 key，前端進行匹配渲染

## 文檔

[文檔地址 Github](https://element-plus-admin-doc.cn/)

[文檔地址 Gitee](https://kailong110120130.gitee.io/vue-element-plus-admin-doc)

## 前序準備

- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) - 項目開發環境
- [Vite4](https://vitejs.dev/) - 熟悉 vite 特性
- [Vue3](https://v3.vuejs.org/) - 熟悉 Vue 基礎語法
- [TypeScript](https://www.typescriptlang.org/) - 熟悉 `TypeScript` 基本語法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本語法
- [Vue-Router-Next](https://next.router.vuejs.org/) - 熟悉 vue-router 基本使用
- [Element-Plus](https://element-plus.org/) - element-plus 基本使用
- [Mock.js](https://github.com/nuysoft/Mock) - mockjs 基本語法

## 安裝和使用

- 獲取代碼

```bash
git clone https://github.com/kailong321200875/vue-element-plus-admin.git
```

- 安裝依賴

```bash
cd vue-element-plus-admin

pnpm install

```

- 運行

```bash
pnpm run dev
```

- 打包

```bash
pnpm run build:pro
```

## 更新日誌

[更新日誌](./CHANGELOG.md)

## 如何貢獻

你可以[提一個 issue](https://github.com/kailong321200875/vue-element-plus-admin/issues/new) 或者提交一個 Pull Request。

**Pull Request:**

1. Fork 代碼
2. 創建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交 `pull request`

## Git 貢獻提交規範

- `feat` 新功能
- `fix` 修補 bug
- `docs` 文檔
- `style` 格式、樣式(不影響代碼運行的變動)
- `refactor` 重構(即不是新增功能，也不是修改 BUG 的代碼)
- `perf` 優化相關，比如提升性能、體驗
- `test` 添加測試
- `build` 編譯相關的修改，對項目構建或者依賴的改動
- `ci` 持續集成修改
- `chore` 構建過程或輔助工具的變動
- `revert` 回滾到上一個版本
- `workflow` 工作流改進
- `mod` 不確定分類的修改
- `wip` 開發中
- `types` 類型

## 瀏覽器支持

本地開發推薦使用 `Chrome 80+` 瀏覽器

支持現代瀏覽器, 不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 許可證

[MIT](./LICENSE)
