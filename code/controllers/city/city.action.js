var getOne = (req,res) =>{
    res.status(200).json({
        name: 'Hyderabad',
        state: 'AP'
    });
}

var getAll = ( req, res ) => {
    res.status(200).json([{
        name: 'Hyderabad',
        state: 'AP'
    },{
        name: 'Banglore',
        state: 'Karnataka'
    }]);
}

module.exports = {
    getAll,
    getOne
}