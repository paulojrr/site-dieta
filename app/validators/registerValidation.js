module.exports = function (email, password, confirm) {

    const regex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

    if (regex.test(email)) {
        if (password.length >= 5) {
            if (password == confirm) {
                return true;
            }
        }
    } else {
        return false;
    }
}