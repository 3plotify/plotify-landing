interface ISpeechBubbleProps {
    text: string,
    image: string,
}

export default function SpeechBubble( { text, image }: ISpeechBubbleProps ) {
    return(
        <div className={"relative p-3 bg-dark-600 rounded-lg flex justify-center items-center text-light-200 text-lg"}>
            { text }
            <div className={"absolute -top-6 left-5 text-dark-600"}>
                <img className={"rounded-full w-10 h-10"} src={image}/>
            </div>
        </div>
    );
}