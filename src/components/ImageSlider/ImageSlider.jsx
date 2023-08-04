import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

export function ImageSlider({ imageList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalSlider = (imgIndex) => {
    setCurrentImageIndex(imgIndex);
    setIsModalOpen(true);
  };

  const renderImages = () => {
    return imageList.map((imageLink, i) => {
      return (
        <Image
          onClick={() => openModalSlider(i)}
          key={imageLink}
          src={imageLink}
          boxShadow="xl"
          borderRadius="xl"
        />
      );
    });
  };

  const slider = (
    <Slide
      defaultIndex={currentImageIndex}
      arrows={imageList.length > 1}
      infinite={false}
      autoplay={false}
    >
      {renderImages()}
    </Slide>
  );

  const modalSlider = (
    <Modal
      bg="transparent"
      size="6xl"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow={"none"}>
        <ModalCloseButton zIndex={1} bg="white" />
        <ModalBody>{slider}</ModalBody>
      </ModalContent>
    </Modal>
  );

  return (
    <>
      <Box w={350}>{slider}</Box>
      {modalSlider}
    </>
  );
}
