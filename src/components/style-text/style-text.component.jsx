import { StyleTextContainer } from "./style-text.style";

function StyleText({fontSize="2rem", color="rgb(255, 97, 40)", children}) {
    return (
        <StyleTextContainer fontSize={fontSize} color={color}>
            {children}
        </StyleTextContainer>
    )
}

export default StyleText;