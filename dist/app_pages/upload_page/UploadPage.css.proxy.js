// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#drop-area.svelte-16o71ic{height:500px;width:500px;border-radius:50%;background-color:black;animation:svelte-16o71ic-moving-animation infinite 1.6s ease-in-out alternate;margin-bottom:1rem}@keyframes svelte-16o71ic-moving-animation{from{transform:scale(1)}to{transform:scale(1.02)}}#file-selector.svelte-16o71ic{visibility:hidden}#file-button.svelte-16o71ic{font-family:inherit;font-size:inherit;border:none;background:none;cursor:pointer;transition:.2s ease-in-out}#file-button.svelte-16o71ic:hover{color:#F22B29}#file-item-container.svelte-16o71ic{display:flex;flex-direction:column}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}