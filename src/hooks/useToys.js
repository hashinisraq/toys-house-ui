import { useEffect, useState } from 'react';

const useToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://immense-lake-11478.herokuapp.com/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return [toys, setToys];
}

export default useToys;