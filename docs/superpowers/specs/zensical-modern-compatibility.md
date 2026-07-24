# Zensical Modern 兼容性记录

## 环境

- Zensical: `0.0.51`
- Python: `Python 3.13.12`
- 执行日期: `2026-07-24`

## 未改配置基线

- 命令：`SITE_URL=http://127.0.0.1:8012/ /private/tmp/mychemistrybook-zensical-py313/bin/zensical build --clean`
- 结果：`Build started`、`No issues found`、`Build finished in 3.69s`
- 产物：`site/index.html` 与
  `site/chapters/03-periodic-law/03-03-ionization-affinity-electronegativity/index.html` 已生成。

## Material 专属阻塞项

无。Zensical 接受当前的 `mkdocs.yml`，包括 `theme.name: material` 与 `palette`；它们会在
下一步为了明确启用 Modern 原生视觉而移除，而非因构建失败被迫删除。

## 结论

`mkdocs.yml` 保留为正式配置；删除 Material 专属且不符合 Modern 默认设计的主题项。

## 切换后验证

- 生产 URL 构建：`SITE_URL=https://windssmile.github.io/mychemistrybook/ zensical build --clean`
  完成且无问题；
- 已检查路由：`/`、
  `/chapters/03-periodic-law/03-03-ionization-affinity-electronegativity/`、
  `/chapters/08-acid-base/08-01-models-structure-solvent/`；
- 桌面与 390px 窄屏下，三个页面均无文档级水平溢出；首页三张课程卡片在窄屏为单列；
- 站内导航后，首页有 2 个、3.3 有 96 个、8.1 有 196 个 MathJax `math` 元素；浏览器控制台
  未记录错误。
