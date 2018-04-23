import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({ adapter: new Adapter() });

//Need not import Jest library as it made available when you run test command
describe('<BurgerBuilder />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => { }}/>);
    });

    it('Should render  <BurgerBuilder /> when receiving ings', () => {
        wrapper.setProps({ ings: { salad: 0 }});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });

    /*it('Should render three <NavigationItem /> if authenticated', () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('Should render three <NavigationItem /> if authenticated', () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });*/
});