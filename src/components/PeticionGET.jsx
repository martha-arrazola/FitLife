import { useEffect, useState } from "react";
export default function Getusers() {

    const [persons, setPersons] = useState([]);


    const getusers = async () => {
        try {

            const response = await fetch("https://api.fitlife.com/registro");

            const data = await response.json();

            console.log(data);

            setPersons(data);


        } catch (error) {

            console.error('Error fetching data:', error);
            //setPersons(["Juan", "Emilio"])

        }
    }

    useEffect(() => {

        getusers();



    }, [])


    /*
        return (
            persons.length == 0 ? <li>No existen usuarios registrados</li> : (persons.map((person) => { return <li>{person}</li> }))
    
        )*/


}


