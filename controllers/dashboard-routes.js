const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    console.log(posts)
    res.render('all-posts-admin', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
  
  // create post
router.post('/', async (req, res) => {
    try { 
      const postData = await Post.create({
       
      title: req.body.title,
      content: req.body.title,
      
    });
    res.status(200).json(postData)
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;