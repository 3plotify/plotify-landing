import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {NextIntlProvider} from "next-intl";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <NextIntlProvider messages={pageProps.messages}>
            <Component {...pageProps} />
        </NextIntlProvider>
    );
}

export default MyApp