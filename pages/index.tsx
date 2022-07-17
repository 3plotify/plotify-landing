import type {GetStaticPropsContext, NextPage} from 'next'
import {DefaultLayout} from "../src/components/layout/default-layout";
import {useTranslations} from "use-intl";

export async function getStaticProps({locale}: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`/locales/${locale}.json`)).default
        }
    };
}

const Home: NextPage = () => {
    return (
        <DefaultLayout>

        </DefaultLayout>
    )
}

export default Home
