import styled, { css } from "styled-components";

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;

  > h2,
  > h4 {
    ${({ primary }) =>
      primary &&
      css`
        color: ${({ theme }) => theme.colors.primary};
      `};
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 300;
  font-size: 4.8rem;
  color: white;
`;

export const SectionSubtitle = styled.h4`
  color: white;
  font-size: 1.4rem;
  font-weight: 300;
  opacity: 0.5;
`;
export const StyledSectionContent = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
`;
