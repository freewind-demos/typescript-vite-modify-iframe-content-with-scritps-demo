console.log("### Hello, typescript");

import {modifyHtml} from './modifyHtml';

const iframe = document.querySelector<HTMLIFrameElement>('iframe')!;

iframe.contentWindow?.addEventListener('load', () => {
  console.log("### load")
  console.log("### iframe.contentWindow?.document", iframe.contentWindow?.document)
  modifyHtml(iframe.contentWindow!.document.body, (source) => `Hello, modified! <script>alert("hello, modified!")</script>`);
  // iframe.contentWindow?.document.addEventListener('DOMContentLoaded', (event) => {
  //   console.log("### DOMContentLoaded", event)
  //   const doc = event.target as Document;
  //   modifyHtml(doc.body, (source) => source.replace('console.log("### hello from iframe")', `alert("Hello modified");`));
  // })

});

