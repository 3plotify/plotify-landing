import Link from "next/link";
import {useRef} from "react";
import {useRouter} from "next/router";

interface IDefaultLinkProps {
    children: any;
    href: string;
}

export default function DefaultLink( { children, href }: IDefaultLinkProps ) {

    const { locale } = useRouter();

    return (
        <Link href={href} locale={locale}>
            <a className={"rounded-md text-base font-medium text-primary hover:text-primary-800 dark:text-primary dark:hover:text-primary-600"}>
                {children}
            </a>
        </Link>
    );
}