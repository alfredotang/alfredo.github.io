export const removeEmptyOrSlash = (value: string): string => {
    const result = value.replace(/( |\/)/g, '');
    return result;
};
