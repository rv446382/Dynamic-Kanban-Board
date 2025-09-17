export const createElement = (tag, props = {}, ...children) => {
    const element = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
        if (key.startsWith('on') && typeof value === 'function') {
            element.addEventListener(key.toLowerCase().substring(2), value);
        } else {
            element[key] = value;
        }
    });
    children.forEach(child => element.append(child));
    return element;
};