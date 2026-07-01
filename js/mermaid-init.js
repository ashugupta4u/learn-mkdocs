document.addEventListener("DOMContentLoaded", function () {
  if (typeof mermaid === "undefined") {
    return;
  }

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose"
  });

  var blocks = document.querySelectorAll("pre.mermaid");
  blocks.forEach(function (pre) {
    var code = pre.querySelector("code");
    var definition = code ? code.textContent : pre.textContent;
    var container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = definition;
    pre.parentNode.replaceChild(container, pre);
  });

  mermaid.init(undefined, document.querySelectorAll("div.mermaid"));
});
