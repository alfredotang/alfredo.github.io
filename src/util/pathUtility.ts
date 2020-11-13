import { removeEmptyOrSlash } from './stringUtility';

type GeneratorTarget = 'article' | 'tag' | 'category' | 'blog';
export const targetPath = (target: GeneratorTarget, value?: [string, string?]): string => {
    switch (target) {
        case 'article':
            return `/blog/`;
        case 'tag':
            return `/tag/${removeEmptyOrSlash(value[0])}/`;
        case 'category':
            return `article`;
        case 'blog':
            return `/blog/${removeEmptyOrSlash(value[0])}/${removeEmptyOrSlash(value[1])}/`;
        default:
            return `/`;
    }
};
