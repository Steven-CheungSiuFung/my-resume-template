import SessionContainer from "../../components/session-container/session-container.component";

import SubTitle from "../../components/sub-title/sub-title.component";
import Text from "../../components/text/text.component";
import Spacer from "../../components/spacer/spacer.component";

import { MdWorkHistory } from "react-icons/md";

import './working-experience.style.css';

function WorkingExperience() {
    return (
        <SessionContainer>
            <SubTitle><MdWorkHistory /><Spacer />Working Experience</SubTitle>
            <Text>XXXXXXX Technology Limit</Text>
        </SessionContainer>
    )
}

export default WorkingExperience;