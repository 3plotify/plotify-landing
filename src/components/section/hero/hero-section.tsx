import Image from "next/image";
import SpeechBubble from "../../ui/speech-bubble";
import {useTranslations} from "use-intl";
import DefaultOutlineCard from "../../ui/card/default-outline-card";
import Title from "../../ui/typography/title";
import Paragraph from "../../ui/typography/paragraph";
import {DefaultButton} from "../../ui/button/default-button";
import DefaultButtonLink from "../../ui/link/default-button-link";

export default function HeroSection() {

    const translation = useTranslations('Page.Landing.Hero')

    return(
        <section>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto xl:gap-8 lg:py-0 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 z-0">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                        {translation('title')} <span className={"text-primary inline rotate-45"}>EASY!</span>
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {translation('subTitle')}
                    </p>
                </div>
                <div className="hidden lg:block lg:mt-0 lg:col-span-5 flex relative p-4">
                    <div className={"absolute bottom-1/2 left-[20%] -z-50"}>
                        <div className="text-light-100 dark:text-dark-600 font-outline text-[450px] -translate-x-1/2 translate-y-1/2">
                            woah
                        </div>
                    </div>
                    <div className={"absolute z-10 top-[50%] -right-[10%]"}>
                        <SpeechBubble text={translation('recommendOne')} image={"/image/person-3.jpg"}/>
                    </div>
                    <div className={"absolute z-10 bottom-[10%] left-[10%]"}>
                        <SpeechBubble text={translation('recommendTwo')} image={"/image/person-2.jpg"}/>
                    </div>
                    <div className={"absolute -z-10 top-[30%] left-[30%]"}>
                        <SpeechBubble text={translation('recommendThree')} image={"/image/person-1.jpg"}/>
                    </div>
                    <img
                        className={"z-0 max-w-screen"}
                        src="/image/hero-full.png"
                        alt="image"
                    />
                    <p className={"text-light-100 dark:text-dark-600 align-middle"}>Image by rawpixel.com</p>
                </div>
            </div>
            <div className="bg-dark-800 grid max-w-screen-xl px-4 py-10 mx-auto xl:gap-12 lg:py-0 lg:grid-cols-12">
                <div className="lg:col-span-7 z-0 translate-y-0 lg:-translate-y-[22%]">
                    <div className={"grid grid-cols-1 sm:grid-cols-2 justify-center"}>
                        <DefaultOutlineCard outline={"outline-primary"} width={"w-3/4"} height={"h-96"}>
                            <Title className={"text-2xl font-bold"}>Lorem ipsum dolor sit amet, consetetur sadipscing</Title>
                            <Paragraph className={"text-md"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Paragraph>
                            <DefaultButtonLink href={'#'}>
                                Products
                            </DefaultButtonLink>
                        </DefaultOutlineCard>
                        <DefaultOutlineCard outline={"outline-secondary"} width={"w-3/4"} height={"h-96"}>
                            <Title className={"text-2xl font-bold"}>Lorem ipsum dolor sit amet, consetetur sadipscing</Title>
                            <Paragraph className={"text-md"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Paragraph>
                            <DefaultButtonLink href={'#'} className={"bg-secondary hover:bg-secondary-600"}>
                                Sales
                            </DefaultButtonLink>
                        </DefaultOutlineCard>
                    </div>
                </div>
                <div className="hidden lg:block mt-12 lg:mt-12 lg:col-span-5 flex relative p-4">
                    <Title className={"text-2xl font-bold"}>Lorem ipsum dolor sit amet, consetetur sadipscing</Title>
                    <Paragraph className={"text-md"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Paragraph>
                </div>
            </div>
        </section>
    );
}