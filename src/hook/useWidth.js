import { useState, useEffect } from "react"


export const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    // const getImageBasedOnSize = (image) => {
    //     if (width > 768) {
    //         return image.desktop
    //     } else if (width < 768 && width > 500) {
    //         console.log('tablet', image.tablet);
    //         return image.tablet
    //     } else {
    //         return image.mobile
    //     }
    // }

    return width

}