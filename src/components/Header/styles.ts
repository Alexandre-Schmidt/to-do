import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 200px;
  background: ${(props) => props.theme["gray-700"]};
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding-top: 4.5rem;
  }
`;
