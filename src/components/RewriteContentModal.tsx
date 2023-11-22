import React, { useRef, useEffect, useState } from "react";
import { Button, FlexContainer, Textarea } from "@open-universities-australia/web-components";
import { cssVars } from "@open-universities-australia/design-tokens";
import styled from "styled-components";

const StyledDialog = styled.dialog`
  border: none;
  border-radius: ${cssVars["border-radius-xs"]};
  box-shadow: ${cssVars["box-shadow-menu"]};
  padding: clamp(${cssVars["space-md"]}, 3vw, ${cssVars["space-xl"]});
  max-inline-size: min(80vw, 60ch);
  max-block-size: min(90vh, 100%);
  max-block-size: min(90dvb, 100%);
  overflow-y: auto;
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const RewriteContentModal = ({
  showModal,
  finishedRewriting,
  onRewriteContent,
}: {
  showModal: boolean;
  finishedRewriting: boolean;
  onRewriteContent: (keywords: string) => void;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(showModal);
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsModalOpen(false);
    setLoading(false);
    setKeywords('');
  }, [finishedRewriting]);

  useEffect(() => {
    setIsModalOpen(showModal);
  }, [showModal]);

  useEffect(() => {
    if (dialogRef.current?.open && !isModalOpen) {
      dialogRef.current?.close();
    } else if (!dialogRef.current?.open && isModalOpen) {
      dialogRef.current?.showModal();
    }
  }, [isModalOpen]);

  const handeSubmit = () => {
    setLoading(true);
    onRewriteContent(keywords);
  };

  return (
    <StyledDialog
      ref={dialogRef}
      aria-modal="true"
      open={isModalOpen}
      className="dialog"
    >
      {!loading && (
        <>
          <div className="">
            <h2>Rewrite the SEO Content</h2>
          </div>
          <div className="">
            <p>Enter the keywords you want to optimise for</p>
            <Textarea
              block={true}
              value={keywords} // ...force the input's value to match the state variable...
              onChange={(e) => setKeywords(e.target.value)}
            />
            <FlexContainer gap="md" flexDirection={"column"}>
                <Button variant="primary" onClick={handeSubmit}>
                Submit
                </Button>
                <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Close
                </Button>
            </FlexContainer>
          </div>
        </>
      )}
      {loading && <p>Rewriting content ...</p>}
    </StyledDialog>
  );
};
export default RewriteContentModal;
