import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";

function Loading(props) {
  return (
    <Modal isOpen={props.isLoading}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          <Spinner
            thickness="10px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </ModalBody>

        <ModalFooter>
          <Text>Loading...</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Loading;
