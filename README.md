# 大学无机化学自学教材

面向应用化学与理论化学方向大一学生的开放自学教材。

## 本地预览

需要Python 3.10或更高版本。

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --requirement requirements.txt
mkdocs serve
```

浏览器打开 <http://127.0.0.1:8000/>。

## 构建静态站点

```bash
mkdocs build --strict
```

生成结果位于`site/`，该目录不提交到Git。

## GitHub Pages

仓库中的`.github/workflows/pages.yml`会在每次推送到`main`时：

1. 安装固定版本的MkDocs和Material主题；
2. 严格模式构建站点；
3. 上传`site/`产物；
4. 部署到GitHub Pages。

首次使用时，在GitHub仓库中打开：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

站点地址：

<https://windssmile.github.io/mychemistrybook/>

## 目录

- `content/`：网站实际发布的教材内容；
- `docs/`：课程设计、范围基线和制作规范；
- `mkdocs.yml`：网站导航和渲染配置；
- `.github/workflows/pages.yml`：GitHub Pages自动部署。

开发、渲染和部署中遇到的问题记录在
[开发与编写踩坑记录](docs/development-notes.md)。

## 数学与化学式

网站使用MathJax，并加载mhchem扩展：

```latex
\[
\ce{NH3 + H2O <=> NH4+ + OH-}
\]
```

## 当前状态

8.1“酸碱模型、结构与溶剂”用于建立首个单元模板。第0章至第18章的核心单元、
章末复习、综合练习与答案现已形成完整首轮自学稿；第2～17章已按相邻或相关后续章节
完成跨章回看，第18章已完成章内复核和全书综合诊断。

当前状态仍不是正式定稿：全书尚需独立科学审校、真实目标读者盲学、图表/版权清理和
逐设备视觉验收，完成这些步骤前不标记为`validated`。详细状态与复核记录见
[编写计划](docs/book-writing-plan.md)。
