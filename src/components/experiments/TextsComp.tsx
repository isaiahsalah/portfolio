import { TextsBox } from '../../styles/Experiment/Texts.styles'
import TextShadowComp from './texts/TextShadowComp'
import TypingEffectComp from './texts/TypingEffectComp'
import HackerComp from './HackerComp'
import TextGlitchedComp from './texts/TextGlitchedComp'
import TextLineComp from './texts/TextLineComp'

const TextsComp = () => {
    return (
        <TextsBox>
            <div className='text'>
                <TextShadowComp />
            </div>
            <div className='text'>
                <TypingEffectComp />
            </div>
            <div className='text'>
                <HackerComp />
            </div>
            <div className='text'>
                <TextGlitchedComp />
            </div>
            <div className='text'>
                <TextLineComp />
            </div>
        </TextsBox>
    )
}

export default TextsComp