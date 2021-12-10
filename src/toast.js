/**
 * Suiteshare Toast
 *
 * @param type : String
 * @param content : String
 * @param config : Object
 */

import { GenerateId } from "./core/generateId";
import { GenerateComponent } from "./core/generateComponent";
import { GenerateInlineStyle } from "./core/generateInlineStyle";

export default (type, content, config = {}) => {
    const baseClass = "_s-toast";
    const baseConfig = {
        type: type || "",
        innerHTML: config.innerHTML || "",
        appendTo: config.appendTo || "body",
        time: config.time || 5000,
        close: config.close || false,
        style: {
            background: config.style && config.style.background || "#e1e1e1",
            color: config.style && config.style.color || "#1e1e1e",
            position: config.style && config.style.position || {},
        }
    }

    const installTrack = () => {
        return GenerateComponent({
            className: "_s-toast-track",
            style: GenerateInlineStyle({
                animation: ((baseConfig.time - 200) / 1000) +"s linear 0s 1 normal none running toast-width-animation"
            }),
        })
    }

    const installContent = () => {
        return GenerateComponent({
            tag: "DIV",
            className: "_s-toast-content",
            appendChild: GenerateComponent({
                id: GenerateId(baseClass),
                tag: "div",
                className: "_s-toast-text",
                innerHTML: baseConfig.innerHTML
            }),
        })
    }

    const installAnimation = () => {
        const container = document.querySelector('[id*="toast"]');
        setTimeout(() => container.classList.add(baseClass+"-active"), 200);
        setTimeout(() => container.classList.remove(baseClass+"-active"), baseConfig.time - 400);
        setTimeout(() => container.remove(), baseConfig.time);
    }

    const uninstall = () => {
        const toasts = document.querySelectorAll("."+baseClass);
        if (toasts) toasts.forEach(element => element.remove());
    }

    const install = () => {
        uninstall();

        const theme = !!baseConfig.type ? baseClass + "-" + baseConfig.type : null;
        document.querySelector(baseConfig.appendTo).appendChild(GenerateComponent({
            id: GenerateId(baseClass),
            className: "_s-toast " + theme + "",
            style: GenerateInlineStyle(baseConfig.style),
            appendChild: [
                installTrack(),
                installContent()
            ]
        }));

        installAnimation()
    }

    install();
};