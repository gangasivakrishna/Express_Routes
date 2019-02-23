const create = (req, res) => {
    res.status(200).json({ msg: 'The User have been created' });
};

const getOne = (req, res) => {
    res.status(200).json({
        name: 'Avis', age: 21
    });
};

const getAll = (req, res) => {
    res.status(200).json([
        { name: 'ganga', age: 21 },
        { name: 'siva', age: 24 },
        { name: 'krishna', age: 25 }
    ]);
};

module.exports = {
    create,
    getOne,
    getAll
};