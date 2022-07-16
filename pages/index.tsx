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

    const translations = useTranslations('PageLayout');

    return (
        <DefaultLayout>
            <div className={"text-primary"}>
                { translations('pageTitle') }
            </div>
            <div>
                <button type="button" onClick={() => {
                    throw new Error("Sentry Frontend Error");
                }}>
                    Throw error
                </button>
            </div>
        </DefaultLayout>
    )
}

export default Home
