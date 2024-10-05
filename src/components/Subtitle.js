import styled from 'styled-components';

const StyledSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.subtitle.fontSize};  // Subtitle size from theme
  color: ${({ theme }) => theme.subtitle.color};  // Subtitle color from theme
  font-weight: ${({ theme }) => theme.subtitle.fontWeight};  // Subtitle weight from theme
  margin-bottom: ${({ theme }) => theme.subtitle.marginBottom};  // Space below subtitle
`;

export default StyledSubtitle;
