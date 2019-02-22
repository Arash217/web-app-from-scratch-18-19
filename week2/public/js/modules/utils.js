const utils = {
    getElement(selector) {
        return document.querySelector(selector);
    },

    renderTemplate(data, templateId, toElement) {
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

    extractFromObject(obj, toExtract) {
      return toExtract.reduce((o, key) => ({...o, [key]: obj[key]}), {});
    },

    extractFromArray(arr, toExtract) {
        return arr.map(obj => this.extractFromObject(obj, toExtract));
    },

    URLParameterBuilder(params) {
        return params.join(';');
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

    setExpirationDate(obj) {
        const now = new Date();
        now.setHours(now.getHours() + 24);
        obj.expirationDate = now.getTime();
    },

    isExpired(obj) {
        return new Date().getTime() > obj.expirationDate;
    },

    async fetchRequest(URL) {
        const res = await fetch(URL);
        const data = await res.json();
        if (!res.ok) throw data;
        return data;
    },

    errorMiddleware(fn) {
        return async (...args) => {
            try {
                return await fn(...args);
            } catch (e) {
                throw e;
            }
        }
    }
};

export default utils;