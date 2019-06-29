const db = require('./dbConfig');

const nfl = require('./nflTeamsModel');

describe('nflTeams model', () => {
    afterEach(async () => {
        await db('teams').truncate();
    });

    it('should get all teams', async () => {
        let records = await db('teams');
        expect(records).toHaveLength(0);

        await nfl.insert({ name: 'Denver Broncos' });
        await nfl.insert({ name: 'Arizona Cardinals' });
        await nfl.insert({ name: 'Pittsburgh Steelers' });

        records = await db('teams');
        expect(records).toHaveLength(3);
    });

    it('should insert the team', async () => {
        let records = await db('teams').where({ name: 'Philadelphia Eagles' });
        expect(records).toHaveLength(0);

        await nfl.insert({ name: 'Philadelphia Eagles' });
        records = await db('teams').where({ name: 'Philadelphia Eagles' });
        expect(records).toHaveLength(1);
    });

    it('should delete the record', async () => {
        let records = await db('teams');
        await nfl.insert({ name: 'Miami Dolphins' });
        await nfl.insert({ name: 'San Diego Chargers' });

        records = await db('teams').where({ name: 'Miami Dolphins' });
        expect(records).toHaveLength(1);

        await nfl.remove(1);
        records = await db('teams').where({ name: 'Miami Dolphins' });
        expect(records).toHaveLength(0);
        
        records = await db('teams');
        expect(records).toHaveLength(1);
    });
});
