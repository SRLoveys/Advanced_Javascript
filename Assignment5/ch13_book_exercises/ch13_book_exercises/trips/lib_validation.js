const isEmpty = (value) => {
    return value == "";
}

const posNumeric = (value) => {
    const num = parseFloat(value);
    return isNaN(num) || num < 0;
}

const exports = {isEmpty, posNumeric}
export {exports}; 