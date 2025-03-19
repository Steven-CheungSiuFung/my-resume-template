import SessionContainer from "../../components/session-container/session-container.component";
import LineWrapper from "../../components/line-wrapper/line-wrapper.component";

import SubTitle from "../../components/sub-title/sub-title.component";
import Text from "../../components/text/text.component";
import Spacer from "../../components/spacer/spacer.component";
import SplitLine from "../../components/split-line/split-line.component";
import StyleText from "../../components/style-text/style-text.component";

import { PiStudentFill } from "react-icons/pi";

import './education.style.css';

function Education() {
    return (
        <SessionContainer>
            <SubTitle><PiStudentFill /><Spacer /><StyleText>Education</StyleText></SubTitle>
            <SplitLine />
            <LineWrapper columns="100px 1fr"><Text>2012 - 2016</Text><Text>Department of XXXXX of XXXXX University</Text></LineWrapper>  
        </SessionContainer>
    )
}

export default Education;