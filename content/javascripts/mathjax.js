window.MathJax = {
  loader: {
    load: ["[tex]/mhchem"]
  },
  tex: {
    packages: {
      "[+]": ["mhchem"]
    },
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    if (!window.MathJax || !window.MathJax.typesetPromise) {
      return;
    }

    window.MathJax.startup.output.clearCache();
    window.MathJax.typesetClear();
    window.MathJax.texReset();
    window.MathJax.typesetPromise();
  });
}
