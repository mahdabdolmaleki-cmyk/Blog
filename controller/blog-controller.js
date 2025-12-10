const Blog = require('../model/blog')

const blog_index = (req,res) =>{
Blog.find()
    .then((blogs)=>{res.render('index',{blogs})})
    .catch(err => console.log(err))
}


const blog_creat_get = (req,res) =>{
    const id = req.params.id
    const ss = Blog.findById(id)
    .then(r =>{
        res.render('details',{blogs:r})})
    .catch(err =>{console.log(err)})
}


const blog_creat_post = (req,res) =>{
    const blog = new Blog({
        title:req.body.title,
        snippet:req.body.snippet
    })
    blog.save()
    .then((re)=>{
        console.log('created blog with title : '+blog.title+' & with snippet : '+blog.snippet)
        res.redirect('/')
    })
    .catch(err => console.log(err))
}


const blog_delete = (req,res) =>{
const id = req.params.id    
    Blog.findByIdAndDelete(id)
    .then(r=>{
        console.log('deleted blog with id : '+id)
        res.json({redirect:'/'})
    })
    .catch(err =>{console.log(err)})
}

const blog_edit_get = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(blog => {
            if (!blog) return res.status(404).render('404.ejs');
            res.render('edit', { blogs: blog });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error loading edit form');
        });
}

const blog_update_post = (req, res) => {
    const id = req.params.id;
    const update = {
        title: req.body.title,
        snippet: req.body.snippet
    };
    Blog.findByIdAndUpdate(id, update, { new: true })
        .then(result => {
            console.log('updated blog', id);
            res.redirect('/blogs/' + id);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error updating blog');
        });
}

module.exports ={
    blog_delete,
    blog_creat_post,
    blog_creat_get,
    blog_index,
    blog_edit_get,
    blog_update_post
}