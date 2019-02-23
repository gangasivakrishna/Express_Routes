
const getAll = (req, res) => {
    res.status(200).json([
        { name: 'Siva Krishna', age: '20' },
        { name: 'AVIS', age: '20' }
    ]);
};

const getOne = (req, res) => {
    res.status(200).json({
        name: 'siva', age: '20'
    });
};

const middlewares = [
    // Insert your middlewares here
];

const postAction = (req, res) => {
    res.status(200).json({ msg: 'Your entry have been created' });
};


module.exports = {
    getAll,
    getOne,
    middlewares,
    postAction
}