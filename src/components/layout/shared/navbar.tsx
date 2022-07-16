import {useTranslations} from "use-intl";

const NavbarElements: Array<{name: string, href: string}> = [
    { name: 'Home', href: '' },
];

export default function Navbar() {

    const translations = useTranslations('PageLayout');

    return (
        <>
            { translations('pageTitle') }
        </>
    );
}