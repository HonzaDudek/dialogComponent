import { Modal } from "../atoms/Modal";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { DialogHeader } from "../molecules/DialogHeader";
import { DialogContent } from "../molecules/DialogContent";
import { DialogFooter } from "../molecules/DialogFooter";
import { Button, IButtonProps } from "../atoms/Button";

export type IDialogProps = PropsWithChildren & {
  buttonProps?: Partial<IButtonProps>;
  icon?: JSX.Element;
  title: string;
  headerActions?: JSX.Element;
  footerActions?: JSX.Element;
  footerContent?: string;
  isOpen?: boolean;
};

export const Dialog = (props: IDialogProps) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <>
      <Button onClick={() => handleToggle()} {...props.buttonProps} />
      {isOpen && (
        <Modal isOpen={isOpen}>
          <DialogHeader
            title={props.title}
            handleToggle={handleToggle}
            actions={props.headerActions}
          />
          <DialogContent>{props.children}</DialogContent>
          <DialogFooter
            actions={props.footerActions}
            footerContent={props.footerContent}
          />
        </Modal>
      )}
    </>
  );
};
