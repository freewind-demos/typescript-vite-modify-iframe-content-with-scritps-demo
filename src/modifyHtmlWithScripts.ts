function nodeScriptReplace(node: Node) {
  if (nodeScriptIs(node)) {
    node.parentNode?.replaceChild(nodeScriptClone(node), node);
  } else {
    for (const child of node.childNodes) {
      nodeScriptReplace(child as HTMLElement);
    }
  }

  return node;
}

function nodeScriptClone(node: HTMLElement): HTMLScriptElement {
  const script = document.createElement("script");
  script.text = node.innerHTML;

  for (const attr of node.attributes) {
    script.setAttribute(attr.name, attr.value);
  }
  return script;
}

function nodeScriptIs(node: Node | HTMLElement): node is HTMLElement {
  return ('tagName' in node) && node.tagName === 'SCRIPT';
}

export function modifyHtmlWithScripts(element: HTMLElement, fn: (html: string) => string): void {
  const html = element.innerHTML


  const newHtml = fn(html)
  element.innerHTML = newHtml;
  nodeScriptReplace(element);
  // console.log("### newHtml", newHtml)
  // const scriptElements = element.querySelectorAll('script');
  // console.log("### scriptElements", scriptElements)
  //
  // Array.from(scriptElements).forEach((scriptElement) => {
  //   const clonedElement = document.createElement("script");
  //   Array.from(scriptElement.attributes).forEach((attribute) => {
  //     clonedElement.setAttribute(attribute.name, attribute.value);
  //   });
  //   clonedElement.text = scriptElement.text;
  //   scriptElement.parentNode?.replaceChild(clonedElement, scriptElement);
  // });
  //
  // // element.append(...template.children);
}
