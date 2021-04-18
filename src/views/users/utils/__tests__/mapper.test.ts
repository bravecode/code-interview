import { prepareUser } from '../mapper';

describe(prepareUser.name, () => {
    it('should map query data to User interface', () => {
        expect(
            prepareUser({
            id: 23,
            name: 'John Doe',
            username: 'johndoe'
            }
        )).toEqual({
            ID: 23,
            name: 'John Doe',
            username: 'johndoe'
        });
    });
});