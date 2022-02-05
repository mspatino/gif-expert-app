import React, { useState } from 'react'
import PropTypes from 'prop-types'



export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setinputValue(e.target.value);
        
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( cats => [inputValue,...cats]);
            setinputValue('');
        }

        console.log('Submit hecho');

       
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Add Category</h2>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
