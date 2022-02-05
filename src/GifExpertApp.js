import React, { useState }  from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



//Fuctional Component
export const GifExpertApp = () => {

    // const categories = ['saporo','max','dalma','camila'] ;
    const [categories, setCategories] = useState([]);//['saporo','max','dalma','camila']
    
    // operador spread ... : permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de  función) o elementos (para Array literales) son esperados
    //Para llamadas de funciones: myFunction(...iterableObj);
    //Para arreglos literales o cadenas de caracteres: [...iterableObj, '4', 'five', 6];	
    // const handleAdd = ( ) =>{
    //     //setCategories([...categories,'element']);
    //     //otra forma de realizar lo anterior
    //     setCategories( cats =>
    //         [...categories,'otraForma']
    //     );
        
        
    //     console.log(categories);
    //  }


    return (
    <>
        {/* <pre> { JSON.stringify(saludo,null,3) } </pre> */}
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />
        {/* <button onClick={  handleAdd }> Agregar element</button> */}
        <ol>{
       
                categories.map( category => 
                    //  <li key={ category }>{ category }</li>
                    <GifGrid 
                    key = { category }
                    category= { category }/>
                )
            }
        </ol>
        

    </>);
}

