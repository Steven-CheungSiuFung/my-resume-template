import { SpacerContainer } from "./spacer.style";

function Spacer({position = "left", size = "10px", children}) {

    return (
        <SpacerContainer position={position} size={size}>
            {children}
        </SpacerContainer>
    )
}

export default Spacer;