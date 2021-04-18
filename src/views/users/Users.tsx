import React, { useEffect, useState } from 'react';
import { UsersTable } from './components/UsersTable';
import { User } from './types/User.interface';
import './Users.scss';
import { prepareUser } from './utils/mapper';

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setUsers(data.map(prepareUser));
            });
    }, []);
    
    return (
        <div className="page-users">
            
            <UsersTable data={users} />

        </div>
    );
}

export { Users }