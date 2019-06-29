const db = require('./dbConfig');

module.exports = {
    insert,
    remove,
    getAll,
}

async function insert(team) {
    const [id] = await db('teams').insert(team);

    return db('teams')
        .where({ id })
        .first();
}

function remove(id) {
    return db('teams').where({ id: id }).del();
}

function getAll() {
    return db('teams');
}
