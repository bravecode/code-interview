import { shallow } from 'enzyme';
import { UsersTableItem, UsersTableItemProps } from '../UsersTableItem';

describe(UsersTableItem.name, () => {
    it('renders', () => {
        // Arrange
        const props: UsersTableItemProps = {
            data: {
                ID: 10,
                name: 'John Doe',
                username: '@johnnybravo'
            }
        }

        // Act
        const wrapper = shallow(<UsersTableItem {...props} />);

        // Assert
        expect(wrapper.findWhere((el) => el.text() === '10.').exists()).toBe(true);
        expect(wrapper.findWhere((el) => el.text() === 'John Doe').exists()).toBe(true);
        expect(wrapper.findWhere((el) => el.text() === '@johnnybravo').exists()).toBe(true);
    });
});