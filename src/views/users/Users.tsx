import React from 'react';
import { UsersTable } from './components/UsersTable';
import './Users.scss';

const Users: React.FC = () => {
    return (
        <div className="page-users">
            
            <UsersTable />

        </div>
    );
}

export { Users }