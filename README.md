# Joykid 最终版 Demo

这是从 `joyKid4.zip` 中提取的最终版 Demo 上传包。

保留内容：

- `ui/index.html`：最终版 Joykid 儿童成长管理 Demo（原包中修改时间为 2026-08-16）
- 最终版页面所需的 CSS、JS 和图片资源
- `server.mjs` / `package.json` / `.env.example`：如需本地运行 AI 接口可使用

已移除内容：

- `ui-v2/`：旧版本 Demo（原包中修改时间为 2026-07-28）
- 方案总览页、截图预览图、PRD 文档等非最终 Demo 内容
- `.env`、macOS 元数据和历史/临时文件

## GitHub Pages

上传本目录内容到仓库根目录后，开启 Pages：`Settings → Pages → Deploy from a branch → main → / root`。

访问仓库 Pages 链接即可自动进入最终版 Demo。

> 注意：GitHub Pages 只能展示静态页面，AI 问诊 `/api/chat` 需要另行部署 Node 服务。
