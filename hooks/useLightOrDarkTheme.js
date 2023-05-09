import {useState} from 'react';
import {useEffect} from 'react';
import {useMediaQuery} from '@mui/material';
import {useCookies} from 'react-cookie';
import {createTheme} from '@mui/material';

const lightTheme = createTheme({
    typography: {
        fontFamily: ['Poppins', 'serif'].join(','),
        button : {
            fontSize : '13px',
        },
        body1:{
            fontSize : '13px',
        },
        body2 : {
            fontSize : '12px',
        }
    },
    palette: {
        mode: 'light',
        background: {
            light: '#f5fbff',
            dark: '#fff'
        },
        primary: {
            main: '#d00906',
            light: '#D43533',
            dark: '#dc3545'
        },
        secondary: {
            main: '#e8a40e',
            light: '#e8bb56',
            dark: '#d29614'
        }
    }
})

const darkTheme = createTheme({
    typography: {
        fontFamily: ['Poppins', 'serif'].join(','),
        button : {
            fontSize : '13px',
        },
        body1:{
            fontSize : '13px',
        },
        body2 : {
            fontSize : '12px',
        }
    },
    palette: {
        mode: 'dark',
        background: {
            light: '#042236',
            dark: '#010d14',
            default: '#010d14',
            paper: '#042236'
        },
        primary: {
            main: '#d00906',
            light: '#D43533',
            dark: '#dc3545'
        },
        secondary: {
            main: '#e8a40e',
            light: '#e8bb56',
            dark: '#d29614'
        }
    }
})

const useLightOrDarkTheme = () => {
    function getActiveTheme(themeMode) {
        return themeMode === 'light'
            ? lightTheme
            : darkTheme;
    }

    const PREFERENCE_COOKIE_NAME = 'theme-preference'

    const userSystemThemePreferenceDark = useMediaQuery('(prefers-color-scheme: dark)');

    const [activeTheme,
        setActiveTheme] = useState(lightTheme);
    const [cookieTheme,
        setCookieTheme] = useCookies([PREFERENCE_COOKIE_NAME]);

    const defaultInitialTheme = userSystemThemePreferenceDark
        ? 'dark'
        : 'light';
    const preferredTheme = cookieTheme && cookieTheme[PREFERENCE_COOKIE_NAME]
        ? cookieTheme[PREFERENCE_COOKIE_NAME]
        : defaultInitialTheme;

    const [selectedTheme,
        setSelectedTheme] = useState(preferredTheme);

    const toggleTheme = () => {
        const desiredTheme = selectedTheme === 'light'
            ? 'dark'
            : 'light';

        setSelectedTheme(desiredTheme);
        setCookieTheme(PREFERENCE_COOKIE_NAME, desiredTheme);
    };

    useEffect(() => {
        setActiveTheme(getActiveTheme(selectedTheme))
    }, [selectedTheme]);

    return {activeTheme, toggleTheme, selectedTheme}
}
export default useLightOrDarkTheme