import SessionContainer from "../../components/session-container/session-container.component";

import SubTitle from "../../components/sub-title/sub-title.component";
import Text from "../../components/text/text.component";
import Spacer from "../../components/spacer/spacer.component";

import { PiStudentFill } from "react-icons/pi";

import './education.style.css';

function Education() {
    return (
        <SessionContainer>
            <SubTitle><PiStudentFill /><Spacer />Education</SubTitle>
            <Text>Department of XXXXX of XXXXX University</Text>
        </SessionContainer>
    )
}

export default Education;