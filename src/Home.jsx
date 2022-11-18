import React, { useContext } from 'react'
import { Box, Heading, HStack } from '@chakra-ui/react'
import PaletteCard from './components/cards/PaletteCard'
import { PaletteContext } from './components/context/PaletteContext'
import { v4 as uuid } from 'uuid'

const Home = () => {
    const { allPalettes } = useContext(PaletteContext)

    const fav = allPalettes.filter((palette) => palette.favorite === true)

    return (
        <Box>
            <Box>
                {fav.length > 0 ? <Heading as={'h1'}>Favorites</Heading> : ""}

                <HStack alignItems={'center'} mt={12} gap='20px' flexWrap={'wrap'}>
                    {fav?.map((palette) => (<PaletteCard key={uuid()} {...palette} />))}
                </HStack>
            </Box>
            <Box mt={5}>
                <Heading as={'h1'}>All Palettes</Heading>

                <HStack alignItems={'center'} mt={12} gap='20px' flexWrap={'wrap'}>
                    {allPalettes?.map((palette) => (<PaletteCard key={uuid()} {...palette} />))}
                </HStack>
            </Box>
        </Box>
    )
}

export default Home