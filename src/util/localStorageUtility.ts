class LocalStorageUtility {
    public getItem(localStorageKey: string): string | null {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(localStorageKey);
        } else {
            return null;
        }
    }

    public setItem(localStorageKey: string, value: string): void {
        if (typeof window !== 'undefined') {
            localStorage.setItem(localStorageKey, value);
        }
    }

    public removeItem(localStorageKey: string): void {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(localStorageKey);
        }
    }

    public clear(): void {
        if (typeof window !== 'undefined') {
            localStorage.clear();
        }
    }
}
const localStorageUtility: LocalStorageUtility = new LocalStorageUtility();
export default localStorageUtility;
