# Zensical 深浅色切换设计

## 目标

为教材站启用 Zensical Modern 原生的浅色/深色配色切换。首次访问遵从操作系统外观偏好；
读者手动切换后，主题自身保存该选择并在后续访问中继续使用。站点不增加自定义主题
JavaScript 或框架壳层 CSS。

## 配置

只修改 `mkdocs.yml` 的 `theme` 配置，新增按顺序定义的两项 `palette`：

```yaml
palette:
  - media: "(prefers-color-scheme: light)"
    scheme: default
    toggle:
      icon: lucide/sun
      name: 切换到深色模式
  - media: "(prefers-color-scheme: dark)"
    scheme: slate
    toggle:
      icon: lucide/moon
      name: 切换到浅色模式
```

`default` 为浅色方案，`slate` 为深色方案。两个 `media` 查询决定首次访问时与系统偏好
一致；Zensical 在搜索框旁渲染原生切换按钮。图标与中文名称随当前配色互换，名称同时用作
可访问的提示文本。

## 交互边界

- 默认行为只有浅色与深色两档，不增加“自动 / 浅色 / 深色”三态循环；
- 用户点击图标后立即切换到另一配色；
- 用户选择应在页面刷新和跨页面导航后保持；
- 未有用户选择时，系统外观变化应依照 Zensical 的媒体查询规则决定初始配色；
- 不设置 `primary`、`accent` 或 `--md-*` 自定义颜色，继续采用 Modern 默认色彩。

## 验证

- `zensical build --clean --strict` 无警告完成；
- 桌面与 390px 窄屏下，首页与 3.3 章节页均在搜索框旁显示唯一的切换按钮；
- 在浅色和深色状态各检查导航、正文、表格、代码、MathJax 公式与首页卡片的可读性，且
  文档级页面没有水平溢出；
- 点击切换按钮后刷新首页、站内导航到 3.3、返回首页，确认手动选择保持；
- 使用 `prefers-color-scheme: light` 与 `prefers-color-scheme: dark` 两种环境分别打开新会话，
  确认首次配色分别为 `default` 与 `slate`。

## 不在范围

不重新引入 Material 配色、三态自动模式、自定义配色令牌、用户账户设置或额外前端脚本。
