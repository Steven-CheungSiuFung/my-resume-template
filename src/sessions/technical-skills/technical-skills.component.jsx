import SubTitle from "../../components/sub-title/sub-title.component";
import Text from "../../components/text/text.component";
import Spacer from "../../components/spacer/spacer.component";

import { LuCodeXml } from "react-icons/lu";

import SessionContainer from "../../components/session-container/session-container.component";

import './technical-skills.style.css';

function TechnicalSkills() {
    return (
        <SessionContainer>
            <SubTitle><LuCodeXml /><Spacer />Technical Skills</SubTitle>
            <Text>Javascript</Text>
        </SessionContainer>
    )
}

export default TechnicalSkills;