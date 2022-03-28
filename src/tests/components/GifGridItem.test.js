import react from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"


describe('Pruebas en <GifGridItem /> ', () => {

    const title = 'Un titulo';

    const url = 'https://localhost/algo.jpeg';

    const wrapper = shallow( <GifGridItem title = {title} url = { url} />  )

    test('debe de mostrar el componente correctamente', () => { 

       

        expect ( wrapper ).toMatchSnapshot();

     })

     test('debe de mostrar un parrafo con el titulo', () => { 

        const p = wrapper.find('p');

        expect ( p.text().trim() ).toBe( title );

      })

      test('debe de tener una imagen igual al src y alt de los props', () => { 

        const img = wrapper.find('img');

       // console.log(img.props().src);
       console.log(img.prop('src'));
       expect( img.prop('src') ).toBe( url ); 
       expect( img.prop('alt') ).toBe( title ); 

       })

       test('debe de tener  animate__fadeIn', () => { 

            const div = wrapper.find('div');

            const className = div.prop('className');

            expect ( div.find(".animate__fadeIn").length).toBe(1);
            expect( className.includes('animate__fadeIn')).toBe(true);

        })


  })