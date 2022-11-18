import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export const usePalette = () => {
    const [title, setTitle] = useState('')
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [color3, setColor3] = useState('')
    const [color4, setColor4] = useState('')

    const [allPalettes, setAllPalettes] = useState(JSON.parse(localStorage.getItem("palettes")) || [])
    const [favPalettes, setfavPalettes] = useState(JSON.parse(localStorage.getItem("fav")) || 0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            title,
            color1,
            color2,
            color3,
            color4,
            id: uuid(),
            favorite: false
        }
        setAllPalettes([...allPalettes, obj])

        localStorage.setItem('palettes', JSON.stringify([...allPalettes, obj]))

        setColor1("")
        setColor2("")
        setColor3("")
        setColor4("")
        setTitle("")
    }

    const handleEdit = (id, object) => {
        const updatedPalette = allPalettes.map(obj => {
            if (obj.id === id) {
                return obj = { ...obj, ...object }
            }
            return obj
        })
        setAllPalettes(updatedPalette)
        localStorage.setItem('palettes', JSON.stringify(updatedPalette))
    }

    const handleDeletePalette = (filteredData) => {
        setAllPalettes(filteredData)
        if (favPalettes !== 0) {
            setfavPalettes(favPalettes - 1)
            localStorage.setItem('fav', JSON.stringify(favPalettes - 1))
        }
        localStorage.setItem('palettes', JSON.stringify(filteredData))
    }

    const handleFavPalette = (id) => {
        const updatedData = allPalettes.map(obj => {
            if (obj.id === id) {
                if (obj.favorite) {
                    return {
                        ...obj,
                        favorite: false
                    }
                }
                return {
                    ...obj,
                    favorite: true
                }
            }
            return obj
        })
        setAllPalettes(updatedData)
        localStorage.setItem('palettes', JSON.stringify(updatedData))
    }

    return {
        handleDeletePalette,
        handleFavPalette,
        allPalettes,
        favPalettes,
        handleSubmit,
        handleEdit,
        color1,
        color2,
        color3,
        color4,
        setTitle,
        title,
        setColor1,
        setColor2,
        setColor3,
        setColor4,
        setAllPalettes,
    }
}