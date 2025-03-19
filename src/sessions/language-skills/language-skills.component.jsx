import SessionContainer from "../../components/session-container/session-container.component";
import LineWrapper from "../../components/line-wrapper/line-wrapper.component";

import SubTitle from "../../components/sub-title/sub-title.component";
import Text from "../../components/text/text.component";
import Spacer from "../../components/spacer/spacer.component";

import { IoLanguageSharp } from "react-icons/io5";

import './language-skills.style.css';

function LanguageSkills() {
    return (
        <SessionContainer>
            <SubTitle><IoLanguageSharp /><Spacer />Language Skills</SubTitle>
            <LineWrapper columns="repeat(3,max-content)"><Text>Cantonese</Text><Text>Engilsh</Text><Text>Mandarin</Text></LineWrapper>
        </SessionContainer>
    )
}

export default LanguageSkills;