import React, { createContext, useReducer } from 'react';

type GlobalState = {
    isLoading: boolean;
};

const initialState: GlobalState = {
    isLoading: false,
};

type GlobalAction = { type: 'SET_LOADING'; payload: boolean };

const reducer = (state: GlobalState, action: GlobalAction): GlobalState => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            throw new Error('Global reducer error');
    }
};

const GlobalContext = createContext<{
    globalState: GlobalState;
    globalDispatch: React.Dispatch<GlobalAction>;
}>({
    globalState: initialState,
    globalDispatch: () => null,
});

export const GlobalProvider: React.FC = ({ children }) => {
    const [globalState, globalDispatch] = useReducer(reducer, initialState);
    return <GlobalContext.Provider value={{ globalState, globalDispatch }}>{children}</GlobalContext.Provider>;
};
