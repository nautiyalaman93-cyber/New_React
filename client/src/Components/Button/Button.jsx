function Button({ text, onClickHandler,styleType="primary", type="button"}) {
    // console.log("Button rendered with text:", text);
    return (
        <button
            type={type}
            className={getButtonStyles(styleType) + " m-2"}
            onClick={onClickHandler}
        >
            {text}
        </button>
    );
}

function getButtonStyles(styleType) {
    switch (styleType) {
        case "primary":
            return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2";
        case "secondary":
            return "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2";
        case "danger":
            return "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2";
        default:
            return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    } 
}

export default Button;