import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {StoreProvider} from 'easy-peasy';
import store from '@/store/store';
import useLightOrDarkTheme from '@/hooks/useLightOrDarkTheme';
import ErrorBoundary from '@/components/ErrorBoundary';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

export default function App({Component, pageProps}) {
    const {activeTheme, toggleTheme, selectedTheme} = useLightOrDarkTheme();
    return (
        <AuthProvider>
            <StoreProvider store={store}>
                <ThemeProvider theme={activeTheme}>
                    <CssBaseline/>
                    <ErrorBoundary>
                        <Layout selectedTheme={selectedTheme} toggleTheme={toggleTheme}>
                            <Component {...pageProps}/>
                        </Layout>
                    </ErrorBoundary>
                </ThemeProvider>
                <ToastContainer
                    position="top-right"
                    autoClose={8000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    draggable={false}
                    pauseOnVisibilityChange
                    closeOnClick
                    pauseOnHover/>
            </StoreProvider>
        </AuthProvider>
    )
}