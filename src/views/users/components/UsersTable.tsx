import React from 'react';
import { User } from '../types/User.interface';
import { UsersTableItem } from './UsersTableItem';
import { UsersTableSearch } from './UsersTableSearch';

export interface UsersTableProps {
    data?: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ data }) => {
    if (!data) {
        return (
            <div>
                Loading ...
            </div>
        );
    }    

    return (
        <div className="users">
            <UsersTableSearch />
            
            {
                data?.map((item) => 
                    <UsersTableItem key={item.ID} data={item} />
                )
            }
        </div>
    );
}

export { UsersTable }