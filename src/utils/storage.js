export const storage = {
    get: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (error) {
            console.error(`Error parsing storage key "${key}":`, error);
            return null;
        }
    },
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
};