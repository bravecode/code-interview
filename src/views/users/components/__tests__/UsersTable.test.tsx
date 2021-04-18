import { shallow } from 'enzyme';
import { UsersTable, UsersTableProps } from '../UsersTable';
import { UsersTableItem } from '../UsersTableItem';
import { UsersTableSearch } from '../UsersTableSearch';

describe(UsersTable.name, () => {
    it('renders', () => {
        // Arrange
        const props: UsersTableProps = {
            data: [
                {
                    ID: 1,
                    name: 'Viggo Mortensen',
                    username: '@Aragorn'
                },
                {
                    ID: 2,
                    name: 'Ian McKellen',
                    username: '@Gandalf'
                }
            ]
        }

        // Act
        const wrapper = shallow(<UsersTable {...props} />);

        // Assert
        expect(wrapper.findWhere((el) => el.text() === 'Users list').exists()).toBe(true);
        expect(wrapper.find(UsersTableSearch).exists()).toBe(true);
        expect(wrapper.find(UsersTableItem).length).toBe(2);
    });

    describe('when UsersTableSearch onValueChange', () => {
        it('should update UsersTableSearch value & filter UsersTableItems', () => {
            // Arrange
            const props: UsersTableProps = {
                data: [
                    {
                        ID: 1,
                        name: 'Viggo Mortensen',
                        username: '@Aragorn'
                    },
                    {
                        ID: 2,
                        name: 'Ian McKellen',
                        username: '@Gandalf'
                    }
                ]
            }

            // Act
            const wrapper = shallow(<UsersTable {...props} />);
            wrapper.find(UsersTableSearch).prop('onValueChange')('Ian');

            // Assert
            expect(wrapper.find(UsersTableSearch).prop('value')).toBe('Ian');
            expect(wrapper.find(UsersTableItem).length).toBe(1);
            expect(wrapper.find(UsersTableItem).prop('data')).toEqual(props.data![1]);
        });
    });
});