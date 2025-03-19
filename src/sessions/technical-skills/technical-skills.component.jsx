import SubTitle from "../../components/sub-title/sub-title.component";
import Text from "../../components/text/text.component";
import Spacer from "../../components/spacer/spacer.component";
import SplitLine from "../../components/split-line/split-line.component";
import StyleText from "../../components/style-text/style-text.component";

import SessionContainer from "../../components/session-container/session-container.component";
import LineWrapper from "../../components/line-wrapper/line-wrapper.component";

import { LuCodeXml } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";

import './technical-skills.style.css';

function TechnicalSkills() {
    return (
        <SessionContainer>
            <SubTitle><LuCodeXml /><Spacer /><StyleText>Technical Skills</StyleText></SubTitle>
            <SplitLine />
            <LineWrapper columns="200px 10px 100px 10px 1fr">
                <Text>Frontend Framework:</Text>
                <FaReact /><Text>React.js</Text>
                <FaVuejs /><Text>Vue.js</Text>
            </LineWrapper>
            <LineWrapper columns="200px 10px 100px 10px 1fr">
                <Text>Backend Framework:</Text>
                <FaNodeJs /><Text>Node.js</Text>
                <TbBrandNextjs /><Text>Next.js</Text>
            </LineWrapper>
            <LineWrapper columns="200px 10px 100px 10px 100px 10px 1fr">
                <Text>Database:</Text>
                <DiMysql /><Text>SQL</Text>
                <BiLogoMongodb /><Text>MongoDB</Text>
                <DiRedis /><Text>Redis</Text>
            </LineWrapper>
            <LineWrapper columns="200px 10px 1fr">
                <Text>Programming Language:</Text>
                <TbBrandJavascript /><Text>Javascript</Text>
            </LineWrapper>
        </SessionContainer>
    )
}

export default TechnicalSkills;