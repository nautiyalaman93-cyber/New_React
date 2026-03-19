function TextInput({type="text",label,palaceholder="Enter text here",onChangeHandler}) {
    return (
        <label>
            <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
            <input
            type={type}
            className="px-4 py-4 border-gray-500 rounded-md-w-full"
            placeholder={palaceholder}
            // value={value}
            onChange={onChangeHandler}

             />
        </label>
    )

}


export default TextInput;