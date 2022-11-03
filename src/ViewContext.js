import React, { useContext, useState, } from 'react';

export const ViewContext = React.createContext();
const ViewUpdateContext = React.createContext();

export function useView() {
    return useContext(ViewContext);
}

export function useViewUpdate() {
    return useContext(ViewUpdateContext);
}

export function ViewProvider({ children }) {
    const [view, setView] = useState({});

    function updateView(newView) {
        setView(newView);
    }

    return (
        <ViewContext.Provider value={view}>
            <ViewUpdateContext.Provider value={updateView}>
                {children}
            </ViewUpdateContext.Provider>
        </ViewContext.Provider>
    )
}