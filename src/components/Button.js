import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${({ theme }) => theme.sizes.buttonPadding};
  font-size: 24px;
  background-color: ${({ theme }) => theme.button.background};  // Background from theme
  border: 2px solid ${({ theme }) => theme.button.borderColor};  // Border color from theme
  border-radius: ${({ theme }) => theme.sizes.cornerRadius};  // Rounded corners from theme
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s ease;
  width: ${({ theme }) => theme.button.width};  // Width from theme
  height: ${({ theme }) => theme.button.height};  // Height from theme
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.button.textColor};  // Text color from theme

  &:hover {
    border-color: ${({ theme }) => theme.button.hoverBorderColor};  // Hover border color from theme
    background-color: ${({ theme }) => theme.button.background};  // Keep background color on hover
  }
`;

export default StyledButton;
