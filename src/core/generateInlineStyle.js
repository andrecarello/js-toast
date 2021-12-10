export const GenerateInlineStyle = (config) => {
    let inlineStyle = "";

    const inlinePosition = (style) => {
        let position = ""
        let transform = ""
        let translate = ""
        Object.keys(style).map(property => {
            position += property+":"+style[property]+"px;"

            if (property === "top") translate = style[property] > 10 ? 10 : style[property];
            if (property === "bottom") translate = style[property] > 10 ? -10 : (style[property] * -1);
        })

        transform = "transform: translateY("+translate+"px);";
        return position + transform;
    }

    const inline = (key, value) => {
        return key +":"+ value +";";
    }

    Object.keys(config).map(key => {
        const value = config[key];

        if (key === "position") inlineStyle += inlinePosition(value);
        else inlineStyle += inline(key, value);
    })

    return inlineStyle
}