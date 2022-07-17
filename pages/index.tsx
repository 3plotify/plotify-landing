import type {GetStaticPropsContext, NextPage} from 'next'
import {DefaultLayout} from "../src/components/layout/default-layout";
import {useTranslations} from "use-intl";
import HeroSection from "../src/components/section/hero/hero-section";

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
            <HeroSection/>
        </DefaultLayout>
    )
}

export default Home
