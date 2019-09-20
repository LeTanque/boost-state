import React, { useState } from 'react'

// Apollo
import { useMutation, useQuery } from "@apollo/react-hooks";
import { 
    ADD_TODO,
    UPDATE_TODO
} from "../../graphql/mutations";
import {
    TODOS,
    GET_TODOS,
} from "../../graphql/queries";



const AddTodo = () => {
    let input;
 
    const { loading, error, data } = useQuery(GET_TODOS);
    
    const [addTodo] = useMutation(ADD_TODO, {
        update( cache, { data: { addTodo } } ) 
        {
            const { todos } = cache.readQuery({ query: TODOS });
            
            cache.writeQuery({
                query: TODOS,
                data: { 
                    todos: [...todos, addTodo]
                }
            });
        }
    });
    
    const [
        // updateTodo,
        { 
            loading: mutationLoading, 
            error: mutationError 
        }
    ] = useMutation(UPDATE_TODO);
    

    const [ 
        state, 
        // setState 
    ] = useState({
        updating: false,
        selectedTodoId: "",
    });

    
    const handleAdd = event => {
        event.preventDefault();
        addTodo({ 
            variables: { 
                type: input.value 
            } 
        });
        input.value = '';
    };

    // // This works, just needs a little modification to work correctly in this component
    // const handleUpdate = (event, id) => {
    //     event.preventDefault();
    //     updateTodo({ 
    //         variables: { 
    //             id, 
    //             type: input.value 
    //         } 
    //     });
    //     input.value = "";
    // }

    // // Todo - delete, which will require a small mutation

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <form
                onSubmit={handleAdd}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                { state.updating ? 
                    <button type="submit">Update Todo</button> : 
                    <button type="submit">Add Todo</button> }
            </form>
            {/* 
            <form
                onSubmit={handleUpdate(id)}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                onSubmit={setState({
                    updating:true,
                    selectedTodoId:id,
                })}
            </form> 
            */}
            
            {data.todos ? data.todos.map(({ id, type }) => {
                // let input;
        
                return (
                    <span key={id} >
                        <span>{type} &nbsp;</span>
                        
                        {mutationLoading && <p>Loading...</p>}
                        {mutationError && <p>Error :( Please try again</p>}

                        {/* <button 
                            type="submit" 
                            onClick={() => setState({updating:true,selectedTodoId:id,})} 
                        >
                            Update
                        </button> */}
                    </span>
                );
            })
            : null
            }
        </>
    );
}


export default AddTodo

