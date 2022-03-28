import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({id,title,url}) => {

  console.log(id,title,url);  

  return <div className='card animate__animated animate__fadeIn'>
      <img src={url} alt={title}></img>
      <p>{title}</p>
  </div>;
};


/**
 * 1.- Enzymw
 * 2.- Enzymw to Json
 * 3.- debe de mostrar el componente correctamente
 *    * shallow
 *    * wrapper
 *    * wrapper .toMatchSnapshot() 
 * 
 */

 GifGridItem.propTypes ={
  title : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired,
}