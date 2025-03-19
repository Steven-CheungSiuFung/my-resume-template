import SessionContainer from "../../components/session-container/session-container.component";

import SubTitle from "../../components/sub-title/sub-title.component";
import Text from "../../components/text/text.component";
import Spacer from "../../components/spacer/spacer.component";

import { BsUniversalAccess } from "react-icons/bs";

import './availability-and-salary.style.css';

function AvailabilityAndSalary() {
    return (
        <SessionContainer>
            <SubTitle><BsUniversalAccess /><Spacer />Availability And Salary</SubTitle>
            <Text>Immediately available</Text>
        </SessionContainer>
    )
}

export default AvailabilityAndSalary;