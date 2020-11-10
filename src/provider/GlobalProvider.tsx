import React, { createContext, useReducer } from 'react';
import { localStorageUtility } from '@util';
import { DEFAULT_THEME, ThemeMode } from '@theme';
type State = {
    isLoading: boolean;
    themeMode: ThemeMode;
};

const initialState: State = {
    isLoading: false,
    themeMode: (localStorageUtility.getItem('theme') as ThemeMode) || DEFAULT_THEME,
};

type Action = { type: 'SET_LOADING'; payload: boolean } | { type: 'SET_THEME'; payload: ThemeMode };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        case 'SET_THEME':
            return { ...state, themeMode: action.payload };
        default:
            throw new Error('Global reducer error');
    }
};

export const GlobalContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};
