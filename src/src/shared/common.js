export const emailCheck = (email) => {
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;   // 0부터 9까지, a부터z까지, A부터Z까지, 

    return _reg.test(email);
}