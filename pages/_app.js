import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import useLightOrDarkTheme from '@/hooks/useLightOrDarkTheme';
import ErrorBoundary from '@/components/ErrorBoundary';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import {Provider} from 'react-redux';
import {reduxStore} from '@/redux/store';

export default function App({Component, pageProps}) {
    const {activeTheme, toggleTheme, selectedTheme} = useLightOrDarkTheme();
    return (
        <AuthProvider>
            <Provider store={reduxStore}>
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
            </Provider>
        </AuthProvider>
    )
}