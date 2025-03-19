import SessionContainer from "../../components/session-container/session-container.component";

import SubTitle from "../../components/sub-title/sub-title.component";
import Text from "../../components/text/text.component";
import Spacer from "../../components/spacer/spacer.component";

import { IoLanguageSharp } from "react-icons/io5";

import './language-skills.style.css';

function LanguageSkills() {
    return (
        <SessionContainer>
            <SubTitle><IoLanguageSharp /><Spacer />Language Skills</SubTitle>
            <Text>Engilsh</Text>
        </SessionContainer>
    )
}

export default LanguageSkills;