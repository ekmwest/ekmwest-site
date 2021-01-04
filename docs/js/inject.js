// (1) Must be used as module:
// <script type="module" src="inject.js"></script>
//
// (2) Specify height to avoid flicker:
// <svg data-inject="logo.svg" height="100px"></svg>

const ATTRIBUTE = 'data-inject';
const SELECTOR = `[${ATTRIBUTE}]`;

const injectElements = document.querySelectorAll(SELECTOR);

injectElements.forEach(injectElement => {
    const url = injectElement.getAttribute(ATTRIBUTE);

    fetch(url)
        .then(res => res.text())
        .then(markup => injectElement.replaceWith(createElementFromMarkup(markup)));
});

function createElementFromMarkup(markup) {
    const template = document.createElement('template');
    template.innerHTML = markup.trim();
    return template.content.firstChild;
}
