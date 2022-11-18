import React, { useContext } from 'react'
import { Navbar } from './Navbar'
import { PaletteContext } from '../context/PaletteContext'
import { useLocation } from 'react-router-dom'
import { Box, Container, FormControl, FormLabel, Input } from '@chakra-ui/react'
import PaletteCreateModal from '../modals/PaletteCreateModal'

const Layout = ({ children }) => {
    const location = useLocation()

    const { setColor1, setColor2, setColor3, setColor4, setTitle, handleSubmit } = useContext(PaletteContext)

    const NavbarProps = location.pathname === '/' ? <PaletteCreateModal btnText={'Create'} title='Create A Palette' handleSubmit={handleSubmit}>
        <FormControl isRequired>
            <FormLabel htmlFor='palette-title'>Palette Title</FormLabel>
            <Input id='palette-title' type={'text'} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl mt={6}>
            <FormLabel htmlFor='color1'>Color 1</FormLabel>
            <Input id='color1' type={'color'} onChange={(e) => setColor1(e.target.value)} />
        </FormControl>
        <FormControl mt={6}>
            <FormLabel htmlFor='color2'>Color 2</FormLabel>
            <Input id='color2' type={'color'} onChange={(e) => setColor2(e.target.value)} />
        </FormControl>
        <FormControl mt={6}>
            <FormLabel htmlFor='color3'>Color 3</FormLabel>
            <Input id='color3' type={'color'} onChange={(e) => setColor3(e.target.value)} />
        </FormControl>
        <FormControl mt={6}>
            <FormLabel htmlFor='color4'>Color 4</FormLabel>
            <Input id='color4' type={'color'} onChange={(e) => setColor4(e.target.value)} />
        </FormControl>
    </PaletteCreateModal> : "";

    return (
        <Box>
            <Navbar action={NavbarProps} />
            <Container maxW={'8xl'} mt={20}>{children}</Container>
        </Box>
    )
}

export default Layout