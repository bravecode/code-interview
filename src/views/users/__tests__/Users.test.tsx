import { shallow } from 'enzyme';
import React from 'react';
import { UsersTable } from '../components/UsersTable';
import { Users, UsersProps } from '../Users';

describe(Users.name, () => {
    it('renders', () => {
        jest.spyOn(React, 'useEffect').mockImplementation(f => f());

        // Arrange
        const props: UsersProps = {
            fetchUsers: jest.fn().mockResolvedValue(JSON.stringify([]))
        }

        // Act
        const wrapper = shallow(<Users {...props} />);

        // Assert
        expect(props.fetchUsers).toHaveBeenCalled();
        expect(wrapper.find(UsersTable).exists()).toBe(true);
    });
});