import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.title.fontSize};  // Title size from theme
  color: ${({ theme }) => theme.title.color};  // Title color from theme
  font-weight: ${({ theme }) => theme.title.fontWeight};  // Title weight from theme
  margin-bottom: 0px;
`;

export default StyledTitle;
