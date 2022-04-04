import { useEffect, useState } from "react"

const useHeadphones =(num) => {
    const [headphones, setHeadphones] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{
            const reviewer = data.slice(0, num);
            setHeadphones(reviewer);
        })

    }, [])
    return [headphones, setHeadphones] ;
}

export default useHeadphones;