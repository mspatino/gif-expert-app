import React from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category} ) => {

    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([]);
    
    //:::: desestructuro const state:::::::
    // const state = useFetchGifs();
    const { data:images , loading } = useFetchGifs( category );
    
    console.log(loading);
    //console.log(data);
    console.log(images);

    //     useEffect(() => {
    //         getGifs ( category ).then( imgs => setImages(imgs) )
            
    //     }, [ category ]);


    //se ejecuta getGift(), cuando el componente es renderizado por primera vez
    // useEffect(() => {
    //     getGift( )
    // }, []);


//Antes de hacer la funcion getGifs en helpers
    // const getGift = async () => {

    //     const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI ( category ) }&limit=10&api_key=4KnQ42ibsjGLNaIfxZ0zHmc6IIpV897h`;
        
        
    //     const resp = await fetch(url);
    //     const  { data }   = await resp.json();

    //     const gif = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url

    //         }
    //     });
        
        
    //     console.log(gif);
    //     setImages(gif);
    // }


   // getGift();


    return (
        <>
        <h3> { category } </h3>
        { loading && <p>Loading</p>}
        {/* { loading ? 'Cargando...' : 'Data cargada'} */}
            {/* <h3> { category } </h3> */}
            {/* <h3> { count } </h3>
            <button onClick={ () => setCount (count + 1) }>Count</button> */}
            {/* <ol>
                {
                    images.map(({id,title}) => (
                     <li key={id}>{title}</li>       

                    ))
                }
            </ol> */}
    <div className='card-grid'>
            {
             images.map(img => 
                (<GifGridItem 
                    key = {img.title}
                    {...img}
                />))   

            }
            
        </div> 
        </>
        
    )
}
