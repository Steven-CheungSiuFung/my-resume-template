import styled from "styled-components";

export const LineWrapperContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: ${(props) => props.columns};
    gap: 10px;
`