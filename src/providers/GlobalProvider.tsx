import { createContext, useEffect, useContext, useReducer, ReactNode } from 'react';

const GlobalStateContext = createContext(null);
const GlobalDispatchContext = createContext(null);

const initialGlobalState = {
	sideNavOpen: false,
	theme: null,
	searchQuery: ``,
};

const GlobalReducer = (state = initialGlobalState, action) => {
	switch (action.type) {
		case `SET_MOBILE_NAV_OPEN`: {
			return { ...state, sideNavOpen: action.payload };
		}
		case `SET_THEME`: {
			localStorage.setItem(`theme`, action.payload);
			return { ...state, theme: action.payload };
		}
		case `SET_SEARCH_QUERY`: {
			return { ...state, searchQuery: action.payload };
		}
	}
};

interface Props {
	children?: ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(GlobalReducer, initialGlobalState);

	// Needed because window is not defined on server, so we have to wait till app is rendered to check it
	useEffect(() => {
		// Get existing dark mode preference from local storage
		const localTheme = localStorage.getItem(`theme`);
		if (localTheme === `dark`) {
			dispatch({ type: `SET_THEME`, payload: `dark` });
			localStorage.setItem(`theme`, `dark`);
		} else if (localTheme === `light`) {
			dispatch({ type: `SET_THEME`, payload: `light` });
			localStorage.setItem(`theme`, `light`);
		} else {
			// No site level preference, so check for browser level preference
			if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
				if (window.matchMedia('(prefers-color-scheme: light)').matches) {
					dispatch({ type: `SET_THEME`, payload: `light` });
					localStorage.setItem(`theme`, `light`);
				} else {
					dispatch({ type: `SET_THEME`, payload: `dark` });
					localStorage.setItem(`theme`, `dark`);
				}
			} else {
				// Old browser; set default to light
				dispatch({ type: `SET_THEME`, payload: `light` });
				localStorage.setItem(`theme`, `light`);
			}
		}
	}, []);

	// Adds and removes theme colors from :root of CSS
	useEffect(() => {
		const root = document.documentElement;
		if (state.theme === `dark`) {
			root.classList.remove(`theme-light`);
			root.classList.add(`theme-dark`);
		} else {
			root.classList.remove(`theme-dark`);
			root.classList.add(`theme-light`);
		}
	}, [state.theme]);

	return (
		<GlobalStateContext.Provider value={state}>
			<GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
		</GlobalStateContext.Provider>
	);
};

export const useGlobalState = () => {
	const context = useContext(GlobalStateContext);
	if (context === undefined) {
		throw new Error(`useGlobalState must be used within a GlobalProvider`);
	}
	return context;
};

export const useGlobalDispatch = () => {
	const context = useContext(GlobalDispatchContext);
	if (context === undefined) {
		throw new Error(`useGlobalDispatch must be used within a GlobalProvider`);
	}
	return context;
};
