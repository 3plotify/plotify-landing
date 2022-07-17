interface ITitleProps {
    children: any;
    className: string;
}

export default function Title( { children, className }: ITitleProps ) {
    return(
        <h1 className={"text-dark-700 dark:text-light-200 " + className}>
            { children }
        </h1>
    );
}