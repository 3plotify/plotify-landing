import {useRouter} from "next/router";
import Link from "next/link";

interface IDefaultButtonLinkProps {
    children: any;
    href: string;
    className?: string;
}

export default function DefaultButtonLink( { children, href, className }: IDefaultButtonLinkProps ) {

    const { locale } = useRouter();

    return (
        <Link href={href} locale={locale}>
            <a className={"w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-hover " + className}>
                {children}
            </a>
        </Link>
    );

}