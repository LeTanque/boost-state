import React from "react"

// Apollo
import { useQuery } from '@apollo/react-hooks';
import { 
    // GET_DOGS, 
    GET_DOG_PHOTO, 
} from "../../graphql/queries";



const Dogs = ({ breed }) => {
    const { loading, error, data, refetch, networkStatus } = useQuery( 
        GET_DOG_PHOTO, 
        {
            variables: { breed }, 
            notifyOnNetworkStatusChange: true,
            skip: !breed, // If skip is true, the query will be skipped entirely.
            pollInterval: 5000,
        } 
    );

    if (networkStatus === 4) return "Refetching!";
    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>Error loading dogs!</h3>
    
    console.log("Data in dogs", data);

    return (
        <>
            <img src={data.dog.displayImage} style={{ height: 300, width: 300 }} />
            <button onClick={() => refetch()}>Refetch!</button>
        </>
    );
}


export default Dogs;

