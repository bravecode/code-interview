import { prepareUser } from '../mapper';

describe(prepareUser.name, () => {
    it('should map query data to User interface', () => {
        expect(
            prepareUser({
            id: 23,
            name: 'Orlando Bloom',
            username: 'Legolas'
            }
        )).toEqual({
            ID: 23,
            name: 'Orlando Bloom',
            username: 'Legolas'
        });
    });
});