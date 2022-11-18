import React, { useContext, useState } from 'react'
import { Box, VStack, Heading, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { PaletteContext } from '../context/PaletteContext'
import PaletteEditModal from '../modals/PaletteEditModal'

const PaletteCard = ({ title, id, color1, color2, color3, color4, favorite }) => {
    const { handleFavPalette } = useContext(PaletteContext)

    const { handleEdit } = useContext(PaletteContext)

    const [newTitle, setNewTitle] = useState(title)

    const [color, setColor] = useState({
        color1, color2, color3, color4
    })

    const handleClickStar = () => handleFavPalette(id)

    const onEdit = (e) => {
        e.preventDefault()
        handleEdit(id, {
            title: newTitle,
            color1: color.color1,
            color2: color.color2,
            color3: color.color3,
            color4: color.color4,
        })
    }
    return (
        <Box>
            <VStack spacing={0}>
                <Heading as={'h3'}>{title}</Heading>
                <Box display={'flex'} flexDirection='column' alignItems={'center'}>
                    <Box borderTopRadius={'13px'} bg={color1} w='250px' h={'80px'}></Box>
                    <Box bg={color2} w='250px' h={'60px'}></Box>
                    <Box bg={color3} w='250px' h={'50px'}></Box>
                    <Box borderBottomRadius={'13px'} bg={color4} w='250px' h={'40px'}></Box>
                </Box>
            </VStack>
            <StarIcon onClick={handleClickStar}
                fontSize={'20px'}
                transition={'all .2s ease-in-out'}
                color={favorite ? 'yellow.300' : 'white'}
                _hover={{ color: 'yellow.300', transform: 'scale(1.2)' }} />
            <PaletteEditModal handleEdit={onEdit}>
                <FormControl isRequired>
                    <FormLabel htmlFor='palette-title'>Palette Title</FormLabel>
                    <Input value={newTitle} id='palette-title' type={'text'} onChange={(e) => setNewTitle(e.target.value)} />
                </FormControl>
                <FormControl mt={6}>
                    <FormLabel htmlFor='color1'>Color 1</FormLabel>
                    <Input value={color.color1} id='color1' type={'color'} onChange={(e) => setColor({ ...color, color1: e.target.value })} />
                </FormControl>
                <FormControl mt={6}>
                    <FormLabel htmlFor='color2'>Color 2</FormLabel>
                    <Input value={color.color2} id='color2' type={'color'} onChange={(e) => setColor({ ...color, color2: e.target.value })} />
                </FormControl>
                <FormControl mt={6}>
                    <FormLabel htmlFor='color3'>Color 3</FormLabel>
                    <Input value={color.color3} id='color3' type={'color'} onChange={(e) => setColor({ ...color, color3: e.target.value })} />
                </FormControl>
                <FormControl mt={6}>
                    <FormLabel htmlFor='color4'>Color 4</FormLabel>
                    <Input value={color.color4} id='color4' type={'color'} onChange={(e) => setColor({ ...color, color4: e.target.value })} />
                </FormControl>
            </PaletteEditModal>
        </Box>
    )
}

export default PaletteCard