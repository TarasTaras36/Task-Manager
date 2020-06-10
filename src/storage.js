class storage {
    static get (key) {
       return JSON.parse(localStorage.getItem(key))
    }

    static set (key, value) {
        return localStorage.setItem(key, JSON.stringify(value))
    }

}

export default storage


