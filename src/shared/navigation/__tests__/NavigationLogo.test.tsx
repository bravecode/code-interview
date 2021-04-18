import { shallow } from 'enzyme';
import { NavigationLogo } from '../NavigationLogo';

describe(NavigationLogo.name, () => {
    it('renders', () => {
        // Act
        const wrapper = shallow(<NavigationLogo />);
        
        // Assert
        expect(wrapper.find('img').exists()).toBe(true);
    });
});