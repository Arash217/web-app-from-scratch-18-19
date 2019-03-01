export const URLParameterBuilder = params => {
    return params.join(';');
};

export const debounce = (fn, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
};

export const setExpirationDate = obj => {
    const now = new Date();
    now.setHours(now.getHours() + 24);
    obj.expirationDate = now.getTime();
};

export const isExpired = obj => {
    return new Date().getTime() > obj.expirationDate;
};

export const request = async URL => {
    const res = await fetch(URL);
    const data = await res.json();
    if (!res.ok) throw data;
    return data;
};

export const errorMiddleware = fn => {
    return async (...args) => {
        try {
            return await fn(...args);
        } catch (e) {
            throw e;
        }
    }
};