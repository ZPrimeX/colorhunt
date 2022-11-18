import React, { createContext } from "react";
import { usePalette } from "../hooks/usePalette";

export const PaletteContext = createContext({
    allPalettes: [],
    handleSubmit: undefined,
    handleEdit: undefined,
    color1: '',
    color2: '',
    color3: '',
    color4: '',
    title: '',
    setColor1: undefined,
    setColor2: undefined,
    setColor3: undefined,
    setColor4: undefined,
    setTitle: undefined,
    setAllPalettes: undefined,
    handleFavPalette: undefined,
    handleDeletePalette: undefined
})

function PaletteProvider(props) {
    const { allPalettes, handleEdit, handleSubmit, color1, color2, color3, color4, title, setColor1, setColor2, setColor3, setColor4, setTitle, setAllPalettes, handleFavPalette, handleDeletePalette } = usePalette()
    return (
        <PaletteContext.Provider value={{ allPalettes, handleEdit, handleSubmit, color1, color2, color3, color4, title, setColor1, setColor2, setColor3, setColor4, setTitle, setAllPalettes, handleFavPalette, handleDeletePalette }}>
            {props.children}
        </PaletteContext.Provider>
    )
}
export default PaletteProvider;