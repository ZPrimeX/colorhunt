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


const PaletteEditModal = ({ title, children, handleEdit }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button variant={'outline'} onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <Box as='form' onSubmit={handleEdit}>
                        <ModalBody>{children}</ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' variant={'outline'} mr={3} onClick={onClose}>Cancel</Button>
                            <Button colorScheme='blue' mr={3} onClick={onClose} type={'submit'}>Save</Button>
                        </ModalFooter>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PaletteEditModal