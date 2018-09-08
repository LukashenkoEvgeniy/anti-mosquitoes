export function emailValidation(value) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

export function phoneValidation(value) {
    const re = /^((.\d{2})?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;
    return re.test(String(value).toLowerCase());
}

export function addressValidation(value) {
    return true;
}
