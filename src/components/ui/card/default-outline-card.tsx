interface IDefaultOutlineCardProps {
    children: any;
    width: string;
    height: string;
    outline: string;
    className?: string;
}

export default function DefaultOutlineCard( { children, width, height, outline, className }: IDefaultOutlineCardProps ) {
    return(
        <div className={`flex flex-col justify-between ${width} ${height} p-4 outline outline-offset-2 outline-2 rounded-2xl ${outline} ${className}` }>
            {children}
        </div>
    );
}