import SessionContainer from "../../components/session-container/session-container.component";
import LineWrapper from "../../components/line-wrapper/line-wrapper.component";

import SubTitle from "../../components/sub-title/sub-title.component";
import Text from "../../components/text/text.component";
import Spacer from "../../components/spacer/spacer.component";
import SplitLine from "../../components/split-line/split-line.component";
import StyleText from "../../components/style-text/style-text.component";

import { MdWorkHistory } from "react-icons/md";

import './working-experience.style.css';

function WorkingExperience() {
    return (
        <SessionContainer>
            <SubTitle><MdWorkHistory /><Spacer /><StyleText>Working Experience</StyleText></SubTitle>
            <SplitLine />
            <LineWrapper columns="100px 200px 1fr"><Text>2022-2024</Text><Text>Frontend-Programmer</Text><Text>XXXXXXX Technology Limit</Text></LineWrapper>
            <LineWrapper columns="100px 200px 1fr"><Text>2018-2022</Text><Text>Frontend-Programmer</Text><Text>XXXXXXX Technology Limit</Text></LineWrapper>
            <LineWrapper columns="100px 200px 1fr"><Text>2016-2018</Text><Text>Frontend-Programmer</Text><Text>XXXXXXX Technology Limit</Text></LineWrapper>
        </SessionContainer>
    )
}

export default WorkingExperience;