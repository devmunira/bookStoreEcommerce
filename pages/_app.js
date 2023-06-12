import Layout from '@/src/components/layout/Layout'
import '@/src/styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import useLightOrDarkTheme from '@/src/hooks/useLightOrDarkTheme';
import ErrorBoundary from '@/src/components/ErrorBoundary';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/src/components/AuthProvider/AuthProvider';
import {Provider} from 'react-redux';
import store, {persistor} from '@/src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({Component, pageProps}) {
    const {activeTheme, toggleTheme, selectedTheme} = useLightOrDarkTheme();
    return (
        <AuthProvider>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
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
            </PersistGate>
            </Provider>
        </AuthProvider>
    )
}