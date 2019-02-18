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

    URLParametersBuilder(params){
        return params.reduce((url, param) => url + ';' + param);
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

    handleFetchErrors(fn) {
        return async (...args) => {
            const res = await fn(...args);
            if (!res.ok) throw await res.json();
            return res.json();
        }
    },

    handleRequestErrors(fn) {
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