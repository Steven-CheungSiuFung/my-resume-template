import SubTitle from '../../components/sub-title/sub-title.component';
import Text from '../../components/text/text.component';
import Spacer from '../../components/spacer/spacer.component';
import SplitLine from '../../components/split-line/split-line.component';

import SessionContainer from '../../components/session-container/session-container.component';
import LineWrapper from '../../components/line-wrapper/line-wrapper.component';

import { HiInformationCircle } from "react-icons/hi";

import './personal-profile.style.css';

function PersonalProfile() {
    return (
        <SessionContainer>
            <SubTitle> <HiInformationCircle /><Spacer position="left" size="5px" />Personal Information</SubTitle>
            <SplitLine />
            <LineWrapper><Text>Name:</Text><Text>Steven Cheung</Text></LineWrapper>
            <LineWrapper><Text>Mobile:</Text><Text>8888-8888</Text></LineWrapper>
            <LineWrapper><Text>Email:</Text><Text>my-email-address@gmail.com</Text></LineWrapper>
            <LineWrapper><Text>Nationality:</Text><Text>Hong Kong, China</Text></LineWrapper>
            <LineWrapper><Text>Address:</Text><Text>XXXXX Garden, XXXXX Road, XXXXX, XX, Hong Kong</Text></LineWrapper>
            <LineWrapper><Text>Website:</Text><Text>8https://steven-cheung.com</Text></LineWrapper>
        </SessionContainer>
    )
}

export default PersonalProfile;