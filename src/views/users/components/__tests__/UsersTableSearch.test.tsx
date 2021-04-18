import { shallow } from 'enzyme';
import { UsersTableSearch, UsersTableSearchProps } from '../UsersTableSearch';

describe(UsersTableSearch.name, () => {
    it('renders', () => {
        // Arrange
        const props: UsersTableSearchProps = {
            value: '',
            onValueChange: jest.fn()
        }

        // Act
        const wrapper = shallow(<UsersTableSearch {...props} />);

        // Assert
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(false);
    });

    describe('when value length is > 0', () => {
        it('renders reset button', () => {
            // Arrange
            const props: UsersTableSearchProps = {
                value: 'test',
                onValueChange: jest.fn()
            }
    
            // Act
            const wrapper = shallow(<UsersTableSearch {...props} />);
    
            // Assert
            expect(wrapper.find('button').exists()).toBe(true);
        });

        describe('when button onClick', () => {
            it('triggers onValueChange with empty string as arg', () => {
                // Arrange
                const props: UsersTableSearchProps = {
                    value: 'test',
                    onValueChange: jest.fn()
                }
        
                // Act
                const wrapper = shallow(<UsersTableSearch {...props} />);
                wrapper.find('button').prop('onClick')!({} as any);

                // Assert
                expect(props.onValueChange).toBeCalledTimes(1);
                expect(props.onValueChange).toBeCalledWith('');
            }); 
        });
    });

    describe('when input onChange', () => {
        it('triggers onValueChange', () => {
            // Arrange
            const props: UsersTableSearchProps = {
                value: 'test',
                onValueChange: jest.fn()
            }
    
            // Act
            const wrapper = shallow(<UsersTableSearch {...props} />);
            wrapper.find('input').prop('onChange')!({
                currentTarget: {
                    value: 'John'
                }   
            } as any);

            // Assert
            expect(props.onValueChange).toBeCalledTimes(1);
            expect(props.onValueChange).toBeCalledWith('John');
        });
    });
});