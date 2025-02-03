import { TypingEffectBox } from "../../../styles/Experiment/texts/TypingEffect.styles"

const TypingEffectComp = () => {


    return (
        <TypingEffectBox   >
            <div className="back-image">
                <img className="image-dance" src="https://i.giphy.com/media/UQ1EI1ML2ABQdbebup/giphy.webp"></img>
            </div>
            <div className="image">
                <img className="image-cat" src="https://i.giphy.com/media/0luWy8p6oKImZt41tz/giphy.webp"></img>
            </div>
            <div className="text">
                <h6 className="typing">
                    Olis!!!
                </h6>
            </div>
            <div className="image">
                <img className="image-cat-2" src="https://i.giphy.com/media/0luWy8p6oKImZt41tz/giphy.webp"></img>
            </div>
        </TypingEffectBox>
    )
}

export default TypingEffectComp