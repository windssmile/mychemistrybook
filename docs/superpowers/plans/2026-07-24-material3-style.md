# Material 3 全站视觉适配 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 MkDocs 化学教材站完整适配为石墨灰蓝的 Material 3 阅读界面，同时保留原有内容与功能。

**Architecture:** 保留 Material for MkDocs 的结构、交互和响应式逻辑。以 `mkdocs.yml` 提供一致的主题语义，以 `content/stylesheets/extra.css` 集中定义颜色令牌并覆盖框架、阅读组件和首页；不使用自定义模板或 JavaScript。

**Tech Stack:** Python 3.10+、MkDocs、Material for MkDocs、CSS 自定义属性、MathJax。

---

## 文件结构

- 修改：`mkdocs.yml` — 将 Material 主题的主色与强调色改为灰蓝语义，保持浅深主题切换与现有功能列表不变。
- 修改：`content/stylesheets/extra.css` — 全站 Material 3 令牌与组件覆盖的唯一入口。
- 验证：`mkdocs build --strict` — 验证 YAML、Markdown、导航和样式资源引用。
- 手动验证：首页 `content/index.md`、章节页 `content/chapters/08-acid-base/08-01-models-structure-solvent.md`、含表格和提示框的章节页。

### Task 1: 对齐 Material 主题语义

**Files:**
- Modify: `mkdocs.yml:25-42`
- Test: `mkdocs build --strict`

- [ ] **Step 1: 修改两个 palette 的主题色名称，保持现有切换文案和图标不变**

```yaml
  palette:
    - media: "(prefers-color-scheme: light)"
      scheme: default
      primary: blue grey
      accent: blue grey
      toggle:
        icon: material/weather-night
        name: 切换到深色模式
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      primary: blue grey
      accent: blue grey
      toggle:
        icon: material/weather-sunny
        name: 切换到浅色模式
```

- [ ] **Step 2: 构建站点，确认配置可被主题接受**

Run: `mkdocs build --strict`

Expected: 退出码为 `0`，并输出 `Documentation built`，不出现 palette 或 CSS 资源错误。

- [ ] **Step 3: 提交主题语义配置**

```bash
git add mkdocs.yml
git commit -m "style: align MkDocs palette with graphite blue"
```

### Task 2: 建立浅色与深色 Material 3 令牌

**Files:**
- Modify: `content/stylesheets/extra.css:1-10`
- Test: `mkdocs build --strict`

- [ ] **Step 1: 在文件顶部声明字体、浅色 surface、灰蓝主色、描边、圆角和阴影令牌**

```css
:root {
  --md-text-font: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --md-code-font: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  --chem-primary: #355e78;
  --chem-on-primary: #ffffff;
  --chem-primary-container: #dbe8f1;
  --chem-on-primary-container: #15364c;
  --chem-page: #f7f9fb;
  --chem-surface: #ffffff;
  --chem-surface-low: #eef3f6;
  --chem-text: #1b1d21;
  --chem-muted: #5c626c;
  --chem-outline: #c3c8cf;
  --chem-radius-sm: 0.625rem;
  --chem-radius-md: 0.875rem;
  --chem-radius-lg: 1rem;
  --chem-shadow: 0 0.125rem 0.5rem rgb(27 29 33 / 8%);
  --md-default-bg-color: var(--chem-page);
  --md-default-fg-color: var(--chem-text);
  --md-primary-fg-color: var(--chem-primary);
  --md-accent-fg-color: var(--chem-primary);
}

[data-md-color-scheme="slate"] {
  --chem-primary: #9ccbe7;
  --chem-on-primary: #00354f;
  --chem-primary-container: #164660;
  --chem-on-primary-container: #cfe7f6;
  --chem-page: #111418;
  --chem-surface: #1b1f24;
  --chem-surface-low: #24292f;
  --chem-text: #e2e7eb;
  --chem-muted: #bac2ca;
  --chem-outline: #444b53;
  --chem-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 24%);
}
```

- [ ] **Step 2: 追加所有交互元素共用的焦点和减弱动画规则**

```css
a:focus-visible,
button:focus-visible,
input:focus-visible,
.md-nav__link:focus-visible,
.md-button:focus-visible {
  outline: 0.1875rem solid color-mix(in srgb, var(--chem-primary) 55%, transparent);
  outline-offset: 0.1875rem;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: 构建站点，确认 `color-mix()` 规则不会影响文档生成**

Run: `mkdocs build --strict`

Expected: 退出码为 `0`；生成目录中包含 `stylesheets/extra.css`。

- [ ] **Step 4: 提交设计令牌**

```bash
git add content/stylesheets/extra.css
git commit -m "style: add Material 3 color tokens"
```

### Task 3: 改造框架导航、搜索与页脚

**Files:**
- Modify: `content/stylesheets/extra.css`（追加 framework 区段）
- Test: `mkdocs serve`

- [ ] **Step 1: 追加顶栏、标签栏、侧栏、搜索与页脚的 surface 规则**

```css
.md-header,
.md-tabs,
.md-footer {
  background: var(--chem-surface);
  color: var(--chem-text);
}

.md-header,
.md-tabs {
  border-bottom: 0.0625rem solid var(--chem-outline);
  box-shadow: none;
}

.md-nav__link,
.md-tabs__link,
.md-footer__link {
  color: var(--chem-muted);
  border-radius: var(--chem-radius-sm);
  transition: background-color 160ms ease, color 160ms ease;
}

.md-nav__link:is(:hover, :focus-visible),
.md-tabs__link:is(:hover, :focus-visible),
.md-nav__link--active,
.md-tabs__link--active {
  background: var(--chem-primary-container);
  color: var(--chem-on-primary-container);
}

.md-search__form,
.md-search-result,
.md-search-result__meta,
.md-search-result__teaser {
  background: var(--chem-surface);
  color: var(--chem-text);
}

.md-search__input {
  border: 0.0625rem solid var(--chem-outline);
  border-radius: var(--chem-radius-sm);
}
```

- [ ] **Step 2: 启动本地站点并检查顶栏、两级导航、搜索框和页脚**

Run: `mkdocs serve`

Expected: 访问 `http://127.0.0.1:8000/` 后，当前导航项为浅灰蓝容器，搜索框和页脚不再使用 teal 大色块。

- [ ] **Step 3: 在深色切换后复查相同组件**

Run: 在浏览器中点击“切换到深色模式”。

Expected: 顶栏、侧栏和搜索结果使用深色 surface，文字和当前项仍清晰可辨。

- [ ] **Step 4: 提交框架组件**

```bash
git add content/stylesheets/extra.css
git commit -m "style: refine navigation and search surfaces"
```

### Task 4: 改造正文、信息组件与操作控件

**Files:**
- Modify: `content/stylesheets/extra.css`（追加 reading 与 controls 区段）
- Test: `mkdocs build --strict`

- [ ] **Step 1: 追加正文、标题、链接、引用、details、admonition、表格和代码的阅读规则**

```css
.md-main__inner {
  margin-top: 1.5rem;
}

.md-content {
  background: var(--chem-surface);
  border: 0.0625rem solid var(--chem-outline);
  border-radius: var(--chem-radius-lg);
  box-shadow: var(--chem-shadow);
  padding: clamp(1.25rem, 3vw, 2.25rem);
}

.md-typeset {
  color: var(--chem-text);
  line-height: 1.82;
}

.md-typeset h1,
.md-typeset h2,
.md-typeset h3 {
  color: var(--chem-text);
  letter-spacing: -0.02em;
}

.md-typeset a {
  color: var(--chem-primary);
  text-decoration-color: color-mix(in srgb, var(--chem-primary) 45%, transparent);
  text-underline-offset: 0.16em;
}

.md-typeset blockquote,
.md-typeset details,
.md-typeset .admonition,
.md-typeset details > summary,
.md-typeset table:not([class]) th,
.md-typeset pre > code {
  background: var(--chem-surface-low);
  border-color: var(--chem-outline);
}

.md-typeset details,
.md-typeset .admonition,
.md-typeset table:not([class]) {
  border-radius: var(--chem-radius-md);
  overflow: hidden;
}

.md-typeset :not(pre) > code {
  background: var(--chem-primary-container);
  color: var(--chem-on-primary-container);
  border-radius: 0.25rem;
}
```

- [ ] **Step 2: 追加主次按钮与任务清单规则**

```css
.md-typeset .md-button {
  border: 0.0625rem solid var(--chem-outline);
  border-radius: var(--chem-radius-sm);
  color: var(--chem-on-primary-container);
  padding: 0.625em 1.1em;
  transition: background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
}

.md-typeset .md-button:hover {
  background: var(--chem-primary-container);
  box-shadow: var(--chem-shadow);
}

.md-typeset .md-button--primary {
  background: var(--chem-primary);
  border-color: var(--chem-primary);
  color: var(--chem-on-primary);
}

.md-typeset .md-button--primary:hover {
  background: color-mix(in srgb, var(--chem-primary) 88%, #000);
  color: var(--chem-on-primary);
}

.md-typeset .task-list-control [type="checkbox"]:checked + .task-list-indicator {
  background-color: var(--chem-primary);
}
```

- [ ] **Step 3: 构建并复查包含公式、表格、提示框和代码的章节页**

Run: `mkdocs build --strict`

Expected: 退出码为 `0`；在第 8.1 节可看到公式保持可横向滚动，表格/提示框/代码块的背景和描边统一且不截断内容。

- [ ] **Step 4: 提交阅读与控件适配**

```bash
git add content/stylesheets/extra.css
git commit -m "style: apply Material 3 reading components"
```

### Task 5: 完成首页、窄屏与跨主题验收

**Files:**
- Modify: `content/stylesheets/extra.css`（追加 homepage、responsive 与 print 区段）
- Test: `mkdocs build --strict`；浏览器桌面和窄屏检查

- [ ] **Step 1: 将首页网格和卡片替换为 Material 3 surface 卡片**

```css
.home-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.home-card {
  background: var(--chem-surface);
  border: 0.0625rem solid var(--chem-outline);
  border-radius: var(--chem-radius-lg);
  box-shadow: var(--chem-shadow);
  padding: 0.5rem 1.25rem 1.25rem;
  transition: box-shadow 160ms ease, transform 160ms ease;
}

.home-card:hover {
  box-shadow: 0 0.375rem 1.25rem rgb(27 29 33 / 12%);
  transform: translateY(-0.125rem);
}
```

- [ ] **Step 2: 追加窄屏与打印规则，保留数学公式和宽表格的横向滚动**

```css
.arithmatex,
.md-typeset__scrollwrap {
  overflow-x: auto;
  overflow-y: hidden;
}

@media screen and (max-width: 60rem) {
  .md-main__inner {
    margin-top: 0.75rem;
  }

  .md-content {
    border-inline: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 1.25rem 1rem;
  }

  .home-grid {
    grid-template-columns: 1fr;
  }

  .md-typeset .md-button {
    margin-bottom: 0.5rem;
    min-height: 2.75rem;
  }
}

@media print {
  .md-content {
    border: 0;
    box-shadow: none;
  }

  details,
  details > * {
    display: block;
  }
}
```

- [ ] **Step 3: 完成构建与四场景人工验收**

Run: `mkdocs build --strict`

Expected: 退出码为 `0`。

Run: `mkdocs serve`

Expected: 分别检查首页、8.1 节在浅色/深色、桌面/窄屏下的导航、按钮、卡片、表格、代码、公式与焦点状态；没有横向页面溢出，窄屏公式和表格可单独横向滚动。

- [ ] **Step 4: 提交最终样式并检查工作树**

```bash
git add content/stylesheets/extra.css
git commit -m "style: finish responsive Material 3 theme"
git status --short --branch
```

Expected: 工作树无未提交的样式改造文件；分支仅领先本地提交。
