import { useEffect, useState, useRef, useCallback } from "react"

const useFetchUser = (userId) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null)
    const cache = useRef({});

    const  fetchUser = useCallback(async () =>{

        if (cache.current[userId]) {
            setUser(cache.current[userId]);
            setLoading(false);
            return;
        }

        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if (!response.ok) {
                throw new Error('Pas de retour concluant');
            }

            const data = await response.json();

            setUser(data);
            setLoading(false);
            
        } catch (error) {
            setError(error)
            setLoading(false);
        }finally{
            setLoading(false);
        }
           
    }, [userId])

    useEffect(()=> {
        fetchUser();
    }, [fetchUser])

    return { user, loading , error ,refetch: fetchUser  }
} ;


export default useFetchUser ;