import React from 'react'
import { Box, Container, HStack, Image } from '@chakra-ui/react'
import zprimex from '../../zprimex.png'

export const Navbar = (props) => {
    return (
        <>
            <Box as='nav' padding={'25px 0'} bgColor='rgb(34, 153, 223)' display={{ base: 'none', md: 'block' }}>
                <Container maxW={'8xl'}>
                    <HStack alignItems={'center'} justifyContent={'space-between'}>
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src={zprimex}
                            alt='zprimex'
                        />
                        <HStack justifyContent='space-between' alignItems={'center'} gap={10}>
                            {props.action}
                        </HStack>
                    </HStack>
                </Container>
            </Box>
        </>
    )
}
