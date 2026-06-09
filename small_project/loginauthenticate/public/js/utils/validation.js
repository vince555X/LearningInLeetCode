const Validator = {
    isEmpty(value) {
        return value.trim() === "";
    },

    logged(username, password) {
        if (username === "admin" && password === "123") {
            return "Successfully login.";
        }

        return "Username or Password does not match!";
    },
};

export default Validator;