# Zensical Modern Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the chemistry textbook site from MkDocs Material to Zensical Modern while retaining `mkdocs.yml`, every content URL, MathJax, Chinese search, and the GitHub Pages release destination.

**Architecture:** Keep `mkdocs.yml` as the sole site manifest and make only the configuration changes needed for Zensical's Modern default. Replace the Python builder dependency and the Pages build command, then reduce the existing Material-specific stylesheet to content-only rules. Validate every release-critical behavior against a local Zensical build and live preview before the workflow is pushed.

**Tech Stack:** Zensical 0.0.51, Python 3.13, Python Markdown/Pymdown Extensions, MathJax 3 with mhchem, GitHub Actions and GitHub Pages.

---

## Files and responsibilities

- Modify: `requirements.txt` — declare one reproducible site builder, `zensical==0.0.51`.
- Modify: `mkdocs.yml` — retain site/content configuration while removing Material-only theme selection and palette configuration.
- Modify: `content/stylesheets/extra.css` — retain only project-owned typography, overflow, homepage layout and print rules.
- Modify only if preview exposes a regression: `content/javascripts/mathjax.js` — re-typeset MathJax after Zensical instant navigation using the supported document event.
- Modify: `.github/workflows/pages.yml` — build the configured site with Zensical and upload `site/`.
- Create: `docs/superpowers/specs/zensical-modern-compatibility.md` — record the actual result of the baseline build and the tested release-critical pages; this is a small operator record, not a second configuration source.

### Task 1: Establish a reproducible Zensical compatibility baseline

**Files:**
- Create: `docs/superpowers/specs/zensical-modern-compatibility.md`
- Do not modify: `requirements.txt`, `mkdocs.yml`, `content/stylesheets/extra.css`, `.github/workflows/pages.yml`

- [ ] **Step 1: Create a disposable environment outside the repository and install the pinned builder**

Run:

```bash
/opt/homebrew/bin/python3.13 -m venv /private/tmp/mychemistrybook-zensical-py313
/private/tmp/mychemistrybook-zensical-py313/bin/python -m pip install --upgrade pip
/private/tmp/mychemistrybook-zensical-py313/bin/python -m pip install zensical==0.0.51
```

Expected: the last command reports `Successfully installed zensical-0.0.51` and does not modify repository dependencies.

- [ ] **Step 2: Run the unchanged configuration through Zensical and capture its exit status**

Run:

```bash
SITE_URL=http://127.0.0.1:8012/ \
  /private/tmp/mychemistrybook-zensical-py313/bin/zensical build --clean
```

Expected: either a successful build, or a precise configuration error identifying the first unsupported Material-only key. Do not change configuration before saving the observed command output.

- [ ] **Step 3: Record the compatibility result with concrete evidence**

Create `docs/superpowers/specs/zensical-modern-compatibility.md` with these exact
headings. Under `环境`, copy the output of `python3 --version` and state Zensical
`0.0.51`. Under `未改配置基线`, copy the build command and its final success line
or its first configuration error verbatim. Under `Material 专属阻塞项`, write
`无` when the build succeeds, otherwise write the YAML key identified by the
error. End the file with this fixed conclusion after the evidence:

```markdown
# Zensical Modern 兼容性记录

## 环境

## 未改配置基线

## Material 专属阻塞项

## 结论

`mkdocs.yml` 保留为正式配置；仅删除已证实不兼容的 Material 专属主题项。
```

- [ ] **Step 4: Verify the record is complete and commit the baseline**

Run:

```bash
rg -n '^## (环境|未改配置基线|Material 专属阻塞项|结论)$' \
  docs/superpowers/specs/zensical-modern-compatibility.md
rg -n '\[|\]|TBD|TODO|FIXME|待定|待确认' \
  docs/superpowers/specs/zensical-modern-compatibility.md
git diff --check
```

Expected: the first command prints all four headings; the second prints no lines; the
third command returns no output.

Commit:

```bash
git add docs/superpowers/specs/zensical-modern-compatibility.md
git commit -m "docs: record Zensical compatibility baseline"
```

### Task 2: Switch configuration and dependencies to Zensical Modern

**Files:**
- Modify: `requirements.txt`
- Modify: `mkdocs.yml:11-35`

- [ ] **Step 1: Make the dependency check fail against the current repository declaration**

Run:

```bash
rg -n '^zensical==0\.0\.51$' requirements.txt
```

Expected: exit status `1`, because the repository still declares only MkDocs and Material.

- [ ] **Step 2: Replace the requirements file with the single pinned release builder**

Set `requirements.txt` to exactly:

```text
zensical==0.0.51
```

This deliberately removes `mkdocs==1.6.1` and `mkdocs-material==9.7.7`; the release pipeline must not choose between two builders.

- [ ] **Step 3: Remove Material's theme and palette selection while retaining portable site behavior**

Replace the current `theme:` block at `mkdocs.yml:11-35` with:

```yaml
theme:
  language: zh
  font: false
  features:
    - navigation.instant
    - navigation.instant.progress
    - navigation.tracking
    - navigation.tabs
    - navigation.sections
    - navigation.top
    - navigation.footer
    - toc.follow
    - search.suggest
    - search.highlight
    - content.code.copy
```

Do not alter `site_url`, `docs_dir`, `site_dir`, `nav`, `plugins`, `markdown_extensions`, `extra_javascript`, `extra_css`, `extra`, `copyright`, or `strict`. If Task 1 identified a feature key Zensical rejects, remove only that named feature and add its exact error to the compatibility record.

- [ ] **Step 4: Verify dependency declaration and strict Zensical build**

Run:

```bash
rg -n '^zensical==0\.0\.51$' requirements.txt
rg -n 'name: material|palette:|blue grey|material/weather' mkdocs.yml
SITE_URL=http://127.0.0.1:8012/ \
  /private/tmp/mychemistrybook-zensical-py313/bin/zensical build --clean
test -f site/index.html
test -f site/chapters/03-periodic-law/03-03-ionization-affinity-electronegativity/index.html
```

Expected: the first command prints one matching line; the second prints no matches; the build succeeds; both artifact checks exit `0`.

- [ ] **Step 5: Commit the builder and configuration switch**

```bash
git add requirements.txt mkdocs.yml docs/superpowers/specs/zensical-modern-compatibility.md
git commit -m "build: switch site to Zensical Modern"
```

### Task 3: Replace the Material shell CSS with content-only styling

**Files:**
- Modify: `content/stylesheets/extra.css`
- Do not modify: `content/index.md`

- [ ] **Step 1: Confirm the existing file still contains Material-only selectors that must disappear**

Run:

```bash
rg -n '\.md-(header|tabs|footer|nav|search|main|content)|--md-|data-md-color-scheme|--chem-' content/stylesheets/extra.css
```

Expected: multiple matches, establishing that the current file overrides the previous framework shell.

- [ ] **Step 2: Replace the stylesheet with the project-owned content patch**

Set `content/stylesheets/extra.css` to exactly:

```css
:root {
  --chem-text-font: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --chem-code-font: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
}

body {
  font-family: var(--chem-text-font);
}

code,
pre {
  font-family: var(--chem-code-font);
}

article {
  line-height: 1.82;
}

.arithmatex,
table,
pre {
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

.home-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 2rem 0;
}

.home-card {
  padding: 0.5rem 1.25rem 1.25rem;
}

@media screen and (max-width: 60rem) {
  .home-grid {
    grid-template-columns: 1fr;
  }
}

@media print {
  details,
  details > * {
    display: block;
  }
}
```

The selectors intentionally target generic content elements and the project's `home-*` classes only. Do not restore color tokens, shadows, navigation selectors, palette attributes, or button overrides.

- [ ] **Step 3: Verify shell overrides are absent and the content rules remain**

Run:

```bash
rg -n '\.md-(header|tabs|footer|nav|search|main|content)|--md-|data-md-color-scheme|--chem-(primary|surface|page)' content/stylesheets/extra.css
rg -n '^\.home-grid|^\.home-card|^\.arithmatex|^@media print' content/stylesheets/extra.css
```

Expected: the first command prints no lines; the second prints each retained local-content rule.

- [ ] **Step 4: Rebuild and run a rendered output smoke test**

Run:

```bash
SITE_URL=http://127.0.0.1:8012/ \
  /private/tmp/mychemistrybook-zensical-py313/bin/zensical build --clean
rg -n 'home-grid|arithmatex|mathjax' site/index.html
```

Expected: the build succeeds and the generated homepage retains the custom card markup, formula markup, and MathJax asset reference.

- [ ] **Step 5: Commit the CSS boundary**

```bash
git add content/stylesheets/extra.css
git commit -m "style: use Zensical Modern shell"
```

### Task 4: Validate MathJax across instant navigation and make only a proven compatibility fix

**Files:**
- Inspect: `content/javascripts/mathjax.js`
- Modify only if necessary: `content/javascripts/mathjax.js`

- [ ] **Step 1: Start a Zensical preview from the switched repository**

Run:

```bash
SITE_URL=http://127.0.0.1:8012/ \
  /private/tmp/mychemistrybook-zensical-py313/bin/zensical serve --dev-addr 127.0.0.1:8012
```

Expected: the server reports that it is listening on `http://127.0.0.1:8012/`. Keep this process running while performing the next checks.

- [ ] **Step 2: Verify formulas before and after a client-side page navigation**

In a browser, open `http://127.0.0.1:8012/`, confirm the two formulas on the homepage are rendered, navigate through the site UI to `/chapters/03-periodic-law/03-03-ionization-affinity-electronegativity/`, then return to the homepage through the site UI. Inspect the rendered MathJax containers after each navigation.

Expected: no raw `\\[` / `\\]` formula delimiters remain visible, and no JavaScript console error mentions `document$`, `MathJax`, or `typesetPromise`.

- [ ] **Step 3: Keep the script unchanged when the preview passes; otherwise apply the smallest event-safe replacement**

If Step 2 passes, do not edit `content/javascripts/mathjax.js`. If it fails because `document$` is absent, replace only the subscription block after the `window.MathJax` configuration with:

```js
const typesetMath = () => {
  if (!window.MathJax?.typesetPromise) {
    return;
  }

  window.MathJax.startup.output.clearCache();
  window.MathJax.typesetClear();
  window.MathJax.texReset();
  window.MathJax.typesetPromise();
};

if (typeof document$ !== "undefined") {
  document$.subscribe(typesetMath);
} else {
  document.addEventListener("DOMContentLoaded", typesetMath, { once: true });
}
```

This maintains the existing `mhchem`, inline, display, and class-processing options while adding only a non-instant-navigation fallback.

- [ ] **Step 4: Recheck the failing scenario and commit only when the script changed**

Run the Step 2 browser flow again. If and only if `content/javascripts/mathjax.js` changed:

```bash
git add content/javascripts/mathjax.js
git commit -m "fix: preserve MathJax after Zensical navigation"
```

Expected: formulas render through both initial load and client-side navigation.

### Task 5: Switch the GitHub Pages build job and perform end-to-end checks

**Files:**
- Modify: `.github/workflows/pages.yml:1-39`

- [ ] **Step 1: Confirm the current workflow still invokes MkDocs**

Run:

```bash
rg -n 'Deploy MkDocs|mkdocs build' .github/workflows/pages.yml
```

Expected: two matching lines: the workflow name and the build command.

- [ ] **Step 2: Update only the workflow name and site build command**

Change the following two lines in `.github/workflows/pages.yml`:

```yaml
name: Deploy Zensical to GitHub Pages
```

and:

```yaml
        run: zensical build --clean
```

Keep the Python version, pip cache, actions versions, `SITE_URL` environment variable, artifact path, permissions, concurrency, and deploy job unchanged.

- [ ] **Step 3: Verify the workflow contract locally**

Run:

```bash
rg -n 'Deploy Zensical|zensical build --clean|path: site' .github/workflows/pages.yml
rg -n 'mkdocs build|Deploy MkDocs' .github/workflows/pages.yml
SITE_URL=https://windssmile.github.io/mychemistrybook/ \
  /private/tmp/mychemistrybook-zensical-py313/bin/zensical build --clean
test -f site/index.html
test -f site/chapters/03-periodic-law/03-03-ionization-affinity-electronegativity/index.html
```

Expected: the first command prints all three required workflow lines; the second prints no lines; the build and artifact checks exit `0`.

- [ ] **Step 4: Perform the final browser visual checks**

Use the preview from Task 4 (or start it again) and inspect the following at desktop width and 390px width:

```text
/
/chapters/03-periodic-law/03-03-ionization-affinity-electronegativity/
/chapters/08-acid-base/08-01-models-structure-solvent/
```

For each page, verify that Zensical Modern controls the framework header, navigation, search, colors and dark/light behavior; check that home cards are one column at 390px; verify formulas, tables and code blocks do not cause document-level horizontal overflow.

- [ ] **Step 5: Commit the release workflow and final validation record**

Update the compatibility record's conclusion with the tested routes and final pass result, then run:

```bash
git diff --check
SITE_URL=https://windssmile.github.io/mychemistrybook/ \
  /private/tmp/mychemistrybook-zensical-py313/bin/zensical build --clean
git status --short
git add .github/workflows/pages.yml docs/superpowers/specs/zensical-modern-compatibility.md
git commit -m "ci: publish Zensical site to GitHub Pages"
```

Expected: no whitespace errors, a successful clean production-URL build, and a commit containing only the workflow and validation record for this task.

### Task 6: Review the migration branch before publishing

**Files:**
- Inspect: `requirements.txt`, `mkdocs.yml`, `content/stylesheets/extra.css`, `content/javascripts/mathjax.js`, `.github/workflows/pages.yml`, `docs/superpowers/specs/zensical-modern-compatibility.md`

- [ ] **Step 1: Check migration scope and residual Material references**

Run:

```bash
git diff origin/main...HEAD --check
rg -n 'mkdocs-material|mkdocs build|name: material|data-md-color-scheme|--md-' \
  requirements.txt mkdocs.yml content/stylesheets/extra.css .github/workflows/pages.yml
```

Expected: no whitespace errors and no remaining release-path references to MkDocs Material. An intentional historical reference inside Markdown design documents is acceptable.

- [ ] **Step 2: Repeat the production build and assert the essential output paths**

Run:

```bash
rm -rf site
SITE_URL=https://windssmile.github.io/mychemistrybook/ \
  /private/tmp/mychemistrybook-zensical-py313/bin/zensical build --clean
for path in \
  site/index.html \
  site/course-guide/index.html \
  site/chapters/00-orientation/index.html \
  site/chapters/03-periodic-law/03-03-ionization-affinity-electronegativity/index.html; do
  test -f "$path" || exit 1
done
```

Expected: the build exits `0` and every required historical URL has an output page.

- [ ] **Step 3: Request code review, then publish only with user authorization**

Run the repository review procedure against the final diff. Do not push as part of this task. After review passes, report the final commit list, local build result, browser evidence, and the exact branch state; wait for the user's explicit instruction before `git push`.
