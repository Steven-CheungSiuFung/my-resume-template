import SubTitle from "../../components/sub-title/sub-title.component";
import Text from "../../components/text/text.component";
import Spacer from "../../components/spacer/spacer.component";
import SplitLine from "../../components/split-line/split-line.component";

import SessionContainer from "../../components/session-container/session-container.component";
import LineWrapper from "../../components/line-wrapper/line-wrapper.component";

import { LuCodeXml } from "react-icons/lu";

import './technical-skills.style.css';

function TechnicalSkills() {
    return (
        <SessionContainer>
            <SubTitle><LuCodeXml /><Spacer />Technical Skills</SubTitle>
            <SplitLine />
            <LineWrapper columns="200px 1fr"><Text>Frontend Framwork:</Text><Text>React.js, Vue.js</Text></LineWrapper>
            <LineWrapper columns="200px 1fr"><Text>Backend Framwork:</Text><Text>Node.js, Next.js</Text></LineWrapper>
            <LineWrapper columns="200px 1fr"><Text>Database:</Text><Text>SQL, MongoDB, Redis</Text></LineWrapper>
            <LineWrapper columns="200px 1fr"><Text>Programming Language:</Text><Text>Javascript</Text></LineWrapper>
        </SessionContainer>
    )
}

export default TechnicalSkills;