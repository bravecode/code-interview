import { shallow } from 'enzyme';
import { Navigation } from '../Navigation';
import { NavigationLogo } from '../NavigationLogo';
import { NavigationMenu } from '../NavigationMenu';

describe(Navigation.name, () => {
    it('renders', () => {
        // Act
        const wrapper = shallow(<Navigation />);

        // Assert
        expect(wrapper.find(NavigationLogo).exists()).toBe(true);
        expect(wrapper.find(NavigationMenu).exists()).toBe(true);
    });
});