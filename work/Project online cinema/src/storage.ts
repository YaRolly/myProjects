const defoultArray : any[] = [];
export function addStorage(key: string) {
    try {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
        return defoultArray;
    } catch (error) {
        console.error(error);
    }
}

export function saveStorage(key: string, value: any) {
    try {
        if (key === 'token') {
            localStorage.setItem(key, JSON.stringify(value));
        }
        const ARRAY = new Set(addStorage(key));
        ARRAY.add(value);
        localStorage.setItem(key, JSON.stringify([...ARRAY]));
    } catch (error) {
        console.error(error)
    }
}