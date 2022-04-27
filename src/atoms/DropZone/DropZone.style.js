import styled from "styled-components";

const primaryColor = (opacity = 1) => `rgba(98, 0, 238, ${opacity})`;

const Zone = styled.div`
    width: 800px;
    height: 500px;
    background: ${primaryColor(0.1)};
    border: 1px dashed ${primaryColor(1)};
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;

export { Zone }