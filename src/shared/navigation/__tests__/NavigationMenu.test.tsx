import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import { NavigationMenu } from '../NavigationMenu';

describe(NavigationMenu.name, () => {
    it('renders', () => {
        // Act
        const wrapper = shallow(<NavigationMenu />);

        // Assert
        expect(wrapper.find(NavLink).length).toBe(2);
    });
});