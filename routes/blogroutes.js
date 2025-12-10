const express = require('express')
const router = express.Router()

const con = require('../controller/blog-controller')


router.get('/',con.blog_index)
router.post('/blogs',con.blog_creat_post)
router.get('/blogs/:id/edit', con.blog_edit_get)
router.post('/blogs/:id', con.blog_update_post)
router.get('/blogs/:id',con.blog_creat_get)
router.delete('/blogs/:id',con.blog_delete)


module.exports = router