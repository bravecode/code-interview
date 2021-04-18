import React from 'react';
import { User } from '../types/User.interface';

export interface UsersTableItemProps {
    data: User;
}

const UsersTableItem: React.FC<UsersTableItemProps> = ({ data }) => {
    return (
        <div className="user">
            { data.name }
            <span className="user__username">
                @{ data.username }
            </span>
        </div>
    );
}

export { UsersTableItem }