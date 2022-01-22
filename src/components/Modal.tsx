import { useState } from "react";
import { Modal } from "react-responsive-modal";
import styled from "styled-components";
import { Results } from "../services/types";
import infoIcon from "../assets/icons/info.svg";

const ModalWrapper = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 50%;
  cursor: pointer;
`;
const ModalCover = styled.img`
  margin: 0 3rem 0 1rem;
  border-radius: 2px;
  width: 20%;
  height: 20%;
  align-self: center;
  @media (max-width: 1200px) {
    margin: 0 2rem 0 0;
  }
`;
const ModalInfo = styled.div``;
const ItemTitle = styled.p`
  display: flex;
  color: #b4b4b4;
  margin-bottom: 0.5rem;
  font-size: 16px;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;
const Span = styled.span`
  color: white;
`;
interface ModalProps {
  content: {
    el: Results;
  };
}
const InfoModal: React.FunctionComponent<ModalProps> = ({
  content: { el },
}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Img onClick={onOpenModal} src={infoIcon} alt="info icon" />
      <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <ModalWrapper>
          <ModalCover src={el.artworkUrl100} alt="cover" />
          <ModalInfo>
            <ItemTitle>
              Artist Name:&nbsp; <Span>{el.artistName}</Span>
            </ItemTitle>
            <ItemTitle>
              Title:&nbsp; <Span>{el.trackName}</Span>
            </ItemTitle>
            <ItemTitle>
              Collection:&nbsp; <Span>{el.collectionCensoredName}</Span>
            </ItemTitle>
            <ItemTitle>
              Genre:&nbsp; <Span>{el.primaryGenreName}</Span>
            </ItemTitle>
            <ItemTitle>
              Country:&nbsp; <Span>{el.country}</Span>
            </ItemTitle>
            <ItemTitle>
              Type:&nbsp;{" "}
              <Span>{el.kind[0].toUpperCase() + el.kind.substring(1)}</Span>
            </ItemTitle>
            <ItemTitle>
              Price:&nbsp; <Span>{el.trackPrice} USD</Span>{" "}
            </ItemTitle>
            <ItemTitle>
              Release Date:&nbsp; <Span>{el.releaseDate.slice(0, 10)}</Span>
            </ItemTitle>
          </ModalInfo>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default InfoModal;
