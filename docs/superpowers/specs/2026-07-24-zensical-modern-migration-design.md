# Zensical Modern 迁移设计

## 目标

以 Zensical 的 Modern 默认设计替换当前 Material for MkDocs 视觉壳与构建器，
让站点获得框架原生的现代阅读体验。保留现有 `mkdocs.yml`、教材 Markdown、目录树、
既有 URL、中文搜索、MathJax 和 GitHub Pages 发布目标；后续正式发布只使用 Zensical。

## 成功标准

- `mkdocs.yml` 继续是唯一站点配置入口，不新增 Zensical 专用 TOML 配置；
- `zensical build --clean` 可在严格的发布检查下生成 `site/`；
- 首页与所有教材页面的既有目录 URL 可访问，搜索、目录、代码复制、公式和瞬时导航可用；
- 页面框架采用 Zensical Modern 的原生配色、导航、搜索、间距与深浅色行为，不再由项目
  CSS 覆盖；
- GitHub Pages 仍从 `site/` 上传并发布，构建失败时工作流直接失败，不产生半成品页面。

## 保留与替换的边界

### 保留

- `content/` 下的所有 Markdown、图片、脚本、公式写法与目录结构；
- `mkdocs.yml` 中的站点元数据、`docs_dir`、`site_dir`、`nav`、搜索插件、Markdown 扩展、
  JavaScript、社交链接和版权信息；
- GitHub Pages 工作流的触发条件、权限、部署并发控制、部署环境和上传目录；
- `site_dir: site`，确保本地与 CI 使用同一产物目录。

### 替换

- `requirements.txt` 从 `mkdocs` / `mkdocs-material` 改为固定的 `zensical==0.0.51`；
  该版本作为本次迁移的可复现基线，后续升级须通过一次显式依赖更新和完整站点验证；
- `.github/workflows/pages.yml` 的工作流名称与构建命令改为 Zensical，构建步骤使用
  `zensical build --clean`；`site_dir` 已在配置中声明，因此上传路径仍为 `site`；
- `mkdocs.yml` 中仅属于 Material 的主题名、调色板、图标切换和不被 Zensical 接受的
  主题项，将在兼容性探测后删除或缩减；保留已被验证的通用设置；
- `content/stylesheets/extra.css` 从全局壳层重写缩减为内容补丁，不再控制页头、导航、
  搜索、页脚、全局背景、主题色或框架的深浅色状态。

## Modern 视觉与自定义 CSS 的分工

Zensical Modern 负责全站视觉系统：页面表面、导航与侧栏、搜索、排版层级、按钮、代码块、
提示框、表格以及深浅色切换均使用框架默认行为。项目不再把 Material 3 的令牌或组件样式
翻译给新主题，以避免两个设计系统相互覆盖。

保留的 CSS 只限于与教材内容强相关、Modern 默认样式无法表达的项目语义：

- 中文正文字体回退栈、行高和适合长篇教材的最大阅读宽度；
- 宽公式、表格和代码块在窄屏上的安全横向滚动；
- 打印时展开课程正文中的 `details`；
- 首页 `home-grid`、`home-card` 与课程操作按钮的局部布局，且只使用这些自定义类选择器。

若 Modern 原生样式已妥善处理上述项目，应优先删除重复规则。任何新规则不得选择或重置
Zensical 的全局 header、导航、搜索、色彩变量或内部 class 名称。

## 迁移步骤

### 1. 兼容性基线

在隔离的本地 Python 环境安装固定版本的 Zensical，先以未改动的 `mkdocs.yml` 运行
`zensical build --clean`。记录任何不支持的键、扩展或插件，并只调整阻塞构建的
Material 专属配置。构建必须覆盖当前的 `pymdownx.arithmatex`、搜索插件和静态资源。

### 2. 配置与依赖切换

将通过兼容性探测的配置固定到 `mkdocs.yml`；以 Zensical 替换构建依赖；将 Pages 工作流
构建命令替换为 `zensical build --clean`。不保留双发布链路：旧 MkDocs 构建能力以 Git 历史
作为回退来源，而不进入正式 CI。

### 3. 样式收敛

先删除现有 `extra.css` 中所有全局壳层覆盖，再按“内容补丁”边界逐项恢复必要规则。
以 Zensical Modern 的实际预览为依据，不通过复制旧 Material 视觉来掩盖迁移差异。

### 4. 交互与页面核验

验证首页、长正文、带表格/代码/提示框的章节，以及包含行内和块级公式的章节。重点检查
瞬时导航后 MathJax 是否再次排版；若现有 `mathjax.js` 与 Zensical 的页面导航事件不兼容，
再按官方集成方式做最小修改，而非预先替换脚本。

## 发布流程

```text
push main
  -> 安装 requirements.txt 中固定的 Zensical
  -> 注入 SITE_URL
  -> zensical build --clean
  -> 上传 site/
  -> GitHub Pages 部署
```

Python 的 pip 下载缓存可以继续用于加速依赖安装；不启用 Zensical 站点构建缓存，保证每次
发布由当前源码完整生成。工作流维持现有的 GitHub Pages action 版本，避免将 action 升级与
框架迁移混为同一次变更。

## 验证清单

- `zensical build --clean` 成功，且 `site/` 中生成首页与章节页面；
- `zensical serve` 预览首页、`/chapters/03-periodic-law/03-03-ionization-affinity-electronegativity/`
  和一个包含表格、提示框、代码块的页面；
- 检查中文搜索、目录高亮、代码复制、页内锚点和瞬时导航；
- 在瞬时导航前后检查行内公式与块级公式是否都完成 MathJax 排版；
- 在桌面与 390px 窄屏检查导航、公式、表格、代码与首页卡片，确认不存在水平溢出；
- 推送后确认 GitHub Pages workflow 的 build 与 deploy job 均成功。

## 风险与回退

Zensical 当前仍处于 `0.0.x` 阶段，因此依赖必须精确固定，并在后续升级前重新执行完整
验证清单。配置、主题 CSS 或 MathJax 若出现兼容问题，迁移提交可整体回退至前一版
Material 构建配置；不会修改教材正文或 URL，因此内容和链接不需要迁移回滚。

## 不在本轮范围

不重写教材内容、不引入自定义主题模板、不改导航信息架构、不更换域名或 Pages 发布方式，
也不做 GitHub Actions 的无关版本升级。
