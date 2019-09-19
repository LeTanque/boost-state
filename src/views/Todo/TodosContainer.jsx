import React from 'react';


// views
// import Todo from "./Todos.jsx";
import AddTodo from "./ToCrudaeux.jsx";


// If a mutation updates a single existing entity, Apollo Client 
// can automatically update that entity's value in its cache when 
// the mutation returns. To do so, the mutation must return the 
// id of the modified entity, along with the values of the fields 
// that were modified. Conveniently, mutations do this by default 
// in Apollo Client.



const Todos = () => {

    return (
        <>
            <AddTodo />
            {/* <Todo /> */}
        </>
    );
}


export default Todos;

