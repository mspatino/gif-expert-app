import react from 'react';
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas de <AddCategory />', () => { 

    const setCategories = () => {};
    test('debe de mostrarse correctamente', () => { 
        const wrapper = shallow( <AddCategory setCategories={ setCategories }/>);
        expect( wrapper ).toMatchSnapshot();
     })

 })