import React from 'react';
import { User } from '../types/User.interface';

export interface UsersTableItemProps {
    data: User;
}

const UsersTableItem: React.FC<UsersTableItemProps> = ({ data }) => {
    return (
        <div className="users__item user">
            <div className="user__id">
                { data.ID }.
            </div>
            <div className="user__name">
                { data.name }
            </div>
            <div className="user__username">
                @{ data.username }
            </div>
        </div>
    );
}

export { UsersTableItem }