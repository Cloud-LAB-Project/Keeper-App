const router = require('express').Router();
const { post } = require('../models/post');
const { user } = require('../models/user');
const cookieParser = require('cookie-parser');
const cors = require('cors');

router.use(cookieParser());
router.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// signup
router.route('/signup').post((req, res) => {
    const newUser = new user({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        notes: []
    });

    newUser.save().then(doc => {
        res.cookie('uid', doc._id);
        res.json(doc).end()
    });
});

// login
router.route('/login').post((req, res) => {
    user.find({ email: req.body.email }, (err, doc) => {
        if (!err && req.body.password === doc[0].password) {
            res.cookie('uid', doc[0]._id);
            res.json(doc[0]).end();
        } else if (req.body.password !== doc[0].password) {
            res.json({ password: false }).end();
        }
    })
});

router.route('/letin').post((req, res) => {
    // console.log(req.body.id);
    user.find({ _id: req.body.id }, (err, doc) => {
        if (!err) {
            res.json(doc[0]).end();
        }
    });
});

// post method to post a new note
router.route('/post').post((req, res) => {
    const note = new post({
        title: req.body.title,
        content: req.body.content
    });

    note.save().then(doc => {
        user.findByIdAndUpdate(req.body.id, { $push: { notes: doc._id } }).then(() => res.status(200).send(doc).end());

    })
})

router.route('/update').post((req, res) => {
    post.updateOne({_id: req.body.id}, {title: req.body.title, content: req.body.content}, (err, doc)=>{
        if(!err){
            res.status(200).end();
        } else {
            console.log(err);
        }
    })
})

router.route('/post').get(async (req, res) => {   // to get all notes of the current user.
    const curruser = await user.findById(req.query.user);
    const { notes } = curruser;
    post.find({
        '_id': { $in: notes }
    }, function (err, docs) {
        if (!err) res.json(docs).status(200).end();
        else res.status(400).end();
    });
});

// deleting a post.
router.route('/delete').post((req, res) => {
    // user.update({ _id: req.body.userId }, { $pull: { notes: req.body.postId } }, (err, doc) => {
    //     console.log(doc);
    // })

    res.status(200).end();
    post.findOneAndDelete({ _id: req.body.postId }, (err, doc) => {
        if (!err) {
            res.status(200).end()
        } else {
            res.status(400).end();
        }
    });

})

module.exports.user = router;