/* TODO geen innerhtml gebruiken */

const utils = {
    getElement(selector) {
        return document.querySelector(selector);
    },

    renderTemplate(data, templateId, toElement) {
        const element = this.getElement(toElement);
        const template = this.getElement(templateId).innerHTML;
        const compiledTemplate = Handlebars.compile(template);
        element.innerHTML = compiledTemplate(data);
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

    isExpired(epochTime){
        return new Date().getTime() > epochTime;
    }
};

export default utils;