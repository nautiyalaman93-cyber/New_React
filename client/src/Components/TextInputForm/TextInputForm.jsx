import TextInput from "../TexrInput/TextInout";
import Button from "../Button/Button"


function TextInputForm({handleSumbitForm,handleShowHideButton,handleTextInputChange,inputType}){
    return (
        <form >
            <div>
                <TextInput
                label="Enter a word or phrase"
                placeholder="Enter a word or phrase here...."
                ClassName="border-2"
                type={inputType}
                onChangeHandler={handleTextInputChange}
            />
            </div>

            <div>
                <Button
                styleType="secondary"
                text={inputType==="password"?"Show":"Hide"} 
                onClickHandler={handleShowHideButton}
                type="button"
                />
            </div>

            <div>
                <Button
                text="Submit"
                type="sumbit"
                styleType="danger"
                onChnage={handleSumbitForm}
                />

            </div>
            

        </form>
    )
}

export default TextInputForm;