import styled from "styled-components";

const Title = styled.h2`
  color: #7b78e6;
  font-size: 32px;
  text-align: ${(props) => (props.$alignment ? props.$alignment : "left")};
`;

export default Title;
