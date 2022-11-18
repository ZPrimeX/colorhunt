import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box
} from '@chakra-ui/react'


const PaletteCreateModal = ({ btnText, children, title, handleSubmit }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button bgColor={'rgb(26, 32, 44)'} _hover={{ bgColor: 'rgb(0, 0, 0)' }} onClick={onOpen}>{btnText}</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <Box as='form' onSubmit={handleSubmit}>
                        <ModalBody>{children}</ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' variant={'outline'} mr={3} onClick={onClose}>Close</Button>
                            <Button colorScheme='blue' mr={3} onClick={onClose} type={'submit'}>Create</Button>
                        </ModalFooter>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PaletteCreateModal