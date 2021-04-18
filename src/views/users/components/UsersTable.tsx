import React, { useState } from 'react';
import { User } from '../types/User.interface';
import { UsersTableItem } from './UsersTableItem';
import { UsersTableSearch } from './UsersTableSearch';

export interface UsersTableProps {
    data?: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ data }) => {
    const [searchValue, setSearchValue] = useState('');

    // Spinner
    if (!data) {
        return (
            <div>
                Loading ...
            </div>
        );
    }

    // Handlers
    const handleValueChange = (value: string) => {
        setSearchValue(value);
    }

    return (
        <section className="users">
            <header className="users-header">
                <h1 className="users-header__title">
                    Users list
                </h1>
            </header>

            <UsersTableSearch 
                value={searchValue}
                onValueChange={handleValueChange}
            />
            
            {
                data?.filter((item) => item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((item) => 
                    <UsersTableItem key={item.ID} data={item} />
                )
            }
        </section>
    );
}

export { UsersTable }