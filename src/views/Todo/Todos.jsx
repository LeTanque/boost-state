import React, { useState } from 'react';

// Apollo
import { useMutation, useQuery } from "@apollo/react-hooks";
import { 
    UPDATE_TODO,
} from "../../graphql/mutations";
import { 
    GET_TODOS, 
} from "../../graphql/queries";



function Todos() {
    const { loading, error, data } = useQuery(GET_TODOS);
    
    const [
        updateTodo,
        { 
            loading: mutationLoading, 
            error: mutationError 
        }
    ] = useMutation(UPDATE_TODO);

    const [ state ] = useState({
        updating: false,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.todos.map(({ id, type }) => {
        let input;
        
        
        return (
            <div key={id}>
                <p>{type}</p>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        updateTodo({ variables: { id, type: input.value } });
            
                        input.value = "";
                    }}
                >
                    <input
                        ref={node => {
                            input = node;
                        }}
                    />
                    {state.updating ? <button type="submit">Update Todo</button> : null}
                    
                </form>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
            </div>
        );
    });
}


export default Todos

