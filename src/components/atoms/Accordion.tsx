import styled, { css } from "styled-components";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { ReactNode, useState } from "react";

const Root = styled.div`
  border: 1px solid #e0e0e0;
  border-left: 5px solid ${(props) => props.theme.colors.primary.main};
  background-color: #fff;

  ${(props) =>
    props.open &&
    css`
      margin: 16px 0;
    `}

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center; // verticalmente no centro
  padding: 16px;
  cursor: pointer;

  & h6 {
    margin: 0;
    flex: 1;
  }

  & svg {
    font-size: 1.25rem;
  }
`;

const Body = styled.div`
  padding: 0 16px 16px 16px;
`;

interface PropType {
  title?: string;
  children?: ReactNode;
  open?: boolean;
  onChange?: Function;
}

const Accordion = ({
  title,
  open: pOpen,
  onChange = () => {},
  children,
}: PropType) => {
  const [sOpen, setOpen] = useState(false);

  const isControlled = pOpen !== undefined;
  const open = isControlled ? pOpen : sOpen;

  const handleClick = () => {
    const newState = !open;
    if (!isControlled) {
      setOpen(newState);
    }
    onChange(newState);
  };

  return (
    <Root open={open}>
      <Head role="button" onClick={handleClick}>
        <h6>{title}</h6>
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </Head>
      {open && <Body>{children}</Body>}
    </Root>
  );
};

export default Accordion;
