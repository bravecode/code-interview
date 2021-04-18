import { shallow } from 'enzyme';
import { UsersTableItem, UsersTableItemProps } from '../UsersTableItem';

describe(UsersTableItem.name, () => {
    it('renders', () => {
        // Arrange
        const props: UsersTableItemProps = {
            data: {
                ID: 10,
                name: 'Elijah Wood',
                username: '@Frodo'
            }
        }

        // Act
        const wrapper = shallow(<UsersTableItem {...props} />);

        // Assert
        expect(wrapper.findWhere((el) => el.text() === '10.').exists()).toBe(true);
        expect(wrapper.findWhere((el) => el.text() === 'Elijah Wood').exists()).toBe(true);
        expect(wrapper.findWhere((el) => el.text() === '@Frodo').exists()).toBe(true);
    });
});