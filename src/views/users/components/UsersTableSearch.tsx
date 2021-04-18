import React from 'react';

export interface UsersTableSearchProps {
    value: string;
    onValueChange: (val: string) => void;
}

const UsersTableSearch: React.FC<UsersTableSearchProps> = ({
    value,
    onValueChange
}) => {
    // Handlers
    const handleValueChange = (e: React.FormEvent<HTMLInputElement>) => {
        onValueChange(e.currentTarget.value);
    }

    const handleValueReset = () => {
        onValueChange('');
    }

    return (
        <div className="users-search">
            <input 
                className="users-search__input"
                onChange={handleValueChange}
                value={value}
                placeholder="Search by user name"
            />

            {
                !!value.length && (
                    <button className="users-search__reset" onClick={handleValueReset}>
                        <i className="fas fa-times-circle" />
                    </button>
                )
            }
        </div>
    );
}

export { UsersTableSearch }