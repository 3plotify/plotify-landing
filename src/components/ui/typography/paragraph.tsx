interface IParagraphProps {
    children: any;
    className: string;
}

export default function Paragraph( { children, className }: IParagraphProps ) {
    return(
        <p className={"text-dark-700 dark:text-light-200 " + className}>
            { children }
        </p>
    );
}