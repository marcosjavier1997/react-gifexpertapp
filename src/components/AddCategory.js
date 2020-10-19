import React,{useState} from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); //useState () tiene un error de indefinido si no recibe nada, usar ''
    const handleInputChange = (e) => {
       // console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log('Submit hecho')

        if(inputValue.trim().length>2){
            setCategories(cats =>[ inputValue,...cats]);
        }

        
    }
    
    return (
    
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>    
 
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}