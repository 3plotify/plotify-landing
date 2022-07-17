import Link from "next/link";
import {useRouter} from "next/router";

interface IDefaultIconLinkProps {
    children: any,
    href: string,
}

export default function DefaultHoverLink({ children, href }: IDefaultIconLinkProps ) {

    const {locale} = useRouter();

    return (
        <>
            <Link href={href} locale={locale}>
                <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-dark-700 dark:text-light-200 hover:bg-light-100 dark:hover:bg-dark-800">
                    { children }
                </a>
            </Link>
        </>
    );
}