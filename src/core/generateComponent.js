export const GenerateComponent = (options = {}) => {
    const config = {
        tag: options.tag || "DIV",
        id: options.id || null,
        className: options.className || [],
        style: options.style || {},
        innerHTML: options.innerHTML || "",
        appendChild: options.appendChild || []
    }

    const addId = (element) => element.id = config.id;
    const addClass = (element) => element.className = config.className;
    const addInlineStyle = (element) => element.style = config.style;
    const addAppendChild = (element) => {
        if (config.appendChild instanceof HTMLElement) {
            element.appendChild(config.appendChild)
        }
        else if (typeof config.appendChild === "object") {
            config.appendChild.forEach(append => element.appendChild(append));
        }
    }
    const addInnerHTML = (element) => {
            element.innerHTML = config.innerHTML
    };

    const component = () => {
        const element = document.createElement(config.tag);

        if (!!config.id) addId(element);
        if (!!config.className) addClass(element);
        if (!!config.style) addInlineStyle(element);
        if (!!config.innerHTML) addInnerHTML(element);
        if (!!config.appendChild) addAppendChild(element);

        return element
    }

    return component()
}