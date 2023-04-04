import { useState } from "react"
import {useRef} from 'react';
// import { FaHeart } from "react-icons/fa";

export default function Music() {
    const [like, setLike] = useState(false)
    const ref = useRef(null);

    function handleLike (e, id) {
        e.preventDefault();
        const idx = e.target.id
        console.log(e.target.id)
        console.log(ref)
        if (idx == ref.current.id) {
            setLike("❤️")
        }
    }

    return (
        <>
        <header>Songs by Neoni</header>
        
        </>
    )
}
