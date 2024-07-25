const TOKEN_AUTHOR = 'accessToken';
export const USER_LOGIN = 'userLogin';
// Lưu local storage dạng Json
const getDataTextStorage = (storeName) => {
    if (typeof window !== 'undefined' && localStorage.getItem(storeName)) {
        return localStorage.getItem(storeName);
    }
    return null;
}

// lấy local storage dạng Json
const getDataJsonStorage = (storeName) => {
    if (typeof window !== 'undefined' && localStorage.getItem(storeName)) {
        return JSON.parse(localStorage.getItem(storeName));
    }
    return null;
}

// Lưu Datastorage dạng text
const setDataTextStorage = (storeName, data) => {
    localStorage.setItem(storeName, data);
}

// lấy local storage dạng text
const setDataJsonStorage = (storeName, data) => {
    localStorage.setItem(storeName, JSON.stringify(data));
}

// Xoá khỏi local storage
const removeDataStorage = (storeName) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(storeName);
    }
}

// ----------------Hàm lưu cookie----------------
function createCookie(cookieName, cookieValue, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
}
// createCookie('username', 'l3m0n', 7); 

// ----------------Hàm get cookie----------------
function getCookie(cookieName, req) {
    if (!req || !req.headers) {
        return ''; // Trả về chuỗi rỗng nếu không có đối tượng req hoặc không có thuộc tính headers
    }

    const name = `${cookieName}=`;
    const cookies = req.headers.cookie;

    if (!cookies) {
        return ''; // Trả về chuỗi rỗng nếu không có cookie
    }

    const cookieArray = cookies.split(';');
    for (const cookie of cookieArray) {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.indexOf(name) === 0) {
            return trimmedCookie.substring(name.length);
        }
    }

    return ''; // Trả về chuỗi rỗng nếu không tìm thấy cookie
}
// const usernameValue = getCookie('username');

// ----------------Hàm xoá cookie----------------
function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}
// deleteCookie('username');


export {
    getDataTextStorage,
    getDataJsonStorage,
    setDataTextStorage,
    setDataJsonStorage,
    removeDataStorage,
    createCookie,
    getCookie,
    deleteCookie,
    TOKEN_AUTHOR
}