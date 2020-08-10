
exports.get = (req, res, next) => {
    res.status(200).send('Get request received!');
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Get request received for [${id}]`);
};

exports.post = (req, res, next) => {
    res.status(201).send('Post method received!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Put method received for [${id}]`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Delete request received for [${id}]`);
};