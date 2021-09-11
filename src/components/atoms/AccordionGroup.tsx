import { ReactNode, Children, cloneElement, useState } from "react";

interface PropType {
  children?: ReactNode;
}

const AccordionGroup = ({ children }: PropType) => {
  const [index, setIndex] = useState(-1);

  return Children.map(children, (child: any, childIndex: number) =>
    cloneElement(child, {
      open: childIndex === index,
      onChange: () => {
        if (childIndex === index) {
          setIndex(-1);
        } else {
          setIndex(childIndex);
        }
      },
    })
  );
};

export default AccordionGroup;
