const utils = {
    getElement(selector) {
        return document.querySelector(selector);
    },

    renderTemplate(data, templateId, toElement) {
        console.log(data);
        const element = this.getElement(toElement);
        const template = this.getElement(templateId).innerHTML;
        const compiledTemplate = Handlebars.compile(template);
        this.removeChildrenInElement(element);
        element.insertAdjacentHTML('beforeend', compiledTemplate(data));
    },

    removeChildrenInElement(element) {
        while (element.firstChild) {
            element.firstChild.remove();
        }
    },

    debounce(fn, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn.apply(this, args);
            }, wait);
        };
    },

    isExpired(epochTime) {
        return new Date().getTime() > epochTime;
    }
};

export default utils;