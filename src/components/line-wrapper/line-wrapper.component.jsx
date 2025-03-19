import { LineWrapperContainer } from "./line-wrapper.style";

function LineWrapper({columns="100px 1fr", children}) {
    return (
        <LineWrapperContainer columns={columns}>
            {children}
        </LineWrapperContainer>
    )
}

export default LineWrapper;