import React, { useState } from 'react';
import { UsersTable } from './components/UsersTable';
import { User } from './types/User.interface';
import './Users.scss';
import { prepareUser } from './utils/mapper';

export interface UsersProps {
    fetchUsers?: typeof fetch;
}

const Users: React.FC<UsersProps> = ({
    fetchUsers = fetch
}) => {
    const [users, setUsers] = useState<User[]>();

    React.useEffect(() => {
        fetchUsers('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setUsers(data.map(prepareUser));
            })
            .catch(err => {
                throw new Error('Fetching Users failed');
            });
    }, []);
    
    return (
        <div className="page-users">
            
            <UsersTable data={users} />

        </div>
    );
}

export { Users }