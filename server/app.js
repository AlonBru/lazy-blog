const express = require('express');


const app = express()
app.use(express.json())

const posts = [
  {
    id:1,
    title:'oh my god the bees',
    content:'oh dear oh lord\n oh my goodness gracious\n the bees\n the bees\n the bees',
    comments:[
      {
        id:0,
        name:'archie',
        content: 'oh my'     
      },
      {
        id:1,
        name:'linda',
        content: 'my my'     
      },
      {
        id:2,
        name:'Kurtz',
        content: 'the horror'     
      },

    ]
  },
  {
    id:3,
    title:'The Weather',
    content:'it\'s so rainy my god \n how can anyone go out like this\n lmao',
    comments:[
      {
        id:0,
        name:'manman',
        content: 'some of us have a job'     
      },
      {
        id:1,
        name:'linda',
        content: 'omg omg omg'     
      },
      {
        id:2,
        name:'Han',
        content: 'boring conversation anyway'     
      },

    ]
  }
]

app.get('/posts/:id', (req, res) => {
  const {id} = req.params
  console.log(id)
  res.json(posts.filter((post)=>post.id === Number(id)))
});
app.post('/posts/:id/comments', (req, res) => {
  const id = Number(req.params.id)
  const {body} = req
  console.log('comments',id,body)
  const post = posts.find(onePost=>onePost.id===id)
  body.id = post.comments.length
  post.comments.push(body)
  res.json(post.comments)
});
app.get('/posts', (req, res) => {
  console.log(posts)
  // const json = JSON.stringify(posts)
  // res.json(json)
  res.json(posts)
});

app.use('*', function(req,res){
    res.sendStatus(404)
})


module.exports = app;
