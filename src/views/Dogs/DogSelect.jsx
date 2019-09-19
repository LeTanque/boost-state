import React from 'react'

// Apollo
import { useQuery } from '@apollo/react-hooks';
import { 
    GET_DOGS, 
    // GET_DOG_PHOTO, 
} from "../../graphql/queries";



const DogSelect = ({ onDogSelected }) => {
    const { loading, error, data } = useQuery(GET_DOGS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <select name="dog" onChange={onDogSelected}>
            {data.dogs.map(dog => (
                <option key={dog.id} value={dog.breed}>
                    {dog.breed}
                </option>
            ))}
        </select>
    );
}


export default DogSelect

