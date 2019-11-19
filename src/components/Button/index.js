import styled, { css } from "styled-components";

const defaultStyles = css`
  border: 1px solid white;
  background-color: transparent;
`;

const enabledButtonStyles = css`
  border: 0.13rem solid white;
`;

const Button = styled.button.attrs(() => ({
  className: "Button"
}))`
  border: none;
  display: flex;
  outline: none;
  padding: 0.75rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  background-color: ${({ theme, buttonStyle }) => theme.colors[buttonStyle]};
  ${({ buttonStyle }) => !buttonStyle && defaultStyles};
  ${({ buttonId, buttonActive }) =>
    buttonActive && buttonActive === buttonId && enabledButtonStyles};
`;

export default Button;
