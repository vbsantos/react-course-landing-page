import styled from "styled-components";

// FIXME não tá aparecendo no Storybook, mas no Hero funciona (??)
type BasePropType = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  Exclude<keyof React.ButtonHTMLAttributes<HTMLButtonElement>, "type">
>;

export enum ButtonColors {
  default = "default",
  primary = "primary",
  danger = "danger",
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'default' | 'primary' | 'danger';
 */
type ButtonColorsStrings = keyof typeof ButtonColors;

export enum ButtonVariants {
  default = "default",
  outlined = "outlined",
  link = "link",
}

/**
 * This is equivalent to:
 * type ButtonVariantsStrings = 'default' | 'outlined' | 'link';
 */
type ButtonVariantsStrings = keyof typeof ButtonVariants;

interface ButtonPropTypes extends BasePropType {
  /**
   * Objeto proveniente do Theme Provider
   */
  theme?: any;
  /**
   * Tipo do Botão
   */
  type?: string;
  /**
   * Conteúdo do Botão
   */
  children?: React.ReactNode;
  /**
   * Cor do botão
   */
  color?: ButtonColorsStrings;
  /**
   * Tipo do Botão
   */
  variant?: ButtonVariantsStrings;
}

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.danger:
      return theme.colors.danger.main;
    default:
      return "#e0e0e0";
  }
};

const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.danger:
      return theme.colors.danger.dark;
    default:
      return "#5a6268";
  }
};

const getColorText = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.text;
    case ButtonColors.danger:
      return theme.colors.danger.text;
    default:
      return "#212121";
  }
};

const getLinkColorText = (props) => {
  if (
    props.color === ButtonColors.primary ||
    props.color === ButtonColors.danger
  ) {
    return getMainColor(props);
  }
  return "#757575";
};

const getOutlinedColorText = (props) => {
  if (
    props.color === ButtonColors.primary ||
    props.color === ButtonColors.danger
  ) {
    return getMainColor(props);
  }
  return "#212121";
};

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;

  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${getDarkColor};
    border: 2px solid ${getDarkColor};
  }
`;

const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getOutlinedColorText};

  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkColorText};
  padding-left: 0;
  padding-right: 0;

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonWrapper = (props: ButtonPropTypes) => {
  switch (props.variant) {
    case ButtonVariants.outlined:
      return <ButtonOutlined {...props} />;

    case ButtonVariants.link:
      return <ButtonLink {...props} />;

    default:
      return <Button {...props} />;
  }
};

export default ButtonWrapper;
