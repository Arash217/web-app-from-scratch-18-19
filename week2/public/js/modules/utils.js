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

    async renderTemplate2(data, templatePath, toElement) {
        const response = await fetch(templatePath);
        const template = await response.text();
        console.log(template)
        const element = this.getElement(toElement);
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

    isExpired(epochTime) {
        return new Date().getTime() > epochTime;
    },

    async getHandleBarsTemplate(path) {
        const response = await fetch(path);
        return response.text();
    }
};

export default utils;