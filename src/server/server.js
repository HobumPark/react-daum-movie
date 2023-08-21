const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.get('/api/v2/list_movies.json', (req, res) => {
    console.log('/api/v2/list_movies.json')
    console.log(req.query)
    const query_term = req.query.query_term
    db.query(`SELECT * FROM movie where title like '%${query_term}%'`, (err, data) => {
        if(!err) res.send({ movie_res : data });
        else res.send(err);
    })
})

app.get('/api/v2/home_slide.json', (req, res) => {
    console.log('/api/v2/home_slide.json')
    db.query(`
    select 
    B.rank_no, B.movie_code,
    A.title, A.opening_date, A.genre, A.film_rating, A.director, A.main_actor, A.audience_rating, B.reservation_rate
    from 
    movie as A
    inner join 
    home_slide_movie_rank as B
    on A.movie_code=B.movie_code
    order by B.rank_no asc`, (err, data) => {
        console.log(data)
        if(!err) res.send({ movie_res : data });
        else res.send(err);
    })
})

app.get('/api/v2/movie_details.json', (req, res) => {
    console.log('/api/v2/movie_details.json')
    console.log(req.query)
    const id = req.query.id
    db.query(`SELECT * FROM movie where movie_code=${id}`, (err, data) => {
        if(!err) res.send({ movie_res : data });
        else res.send(err);
    })
})

app.get('/api/v2/movie_director_actor.json', (req, res) => {
    console.log('/api/v2/movie_director_actor.json')
    console.log(req.query)
    console.log(req.query.id)
    const id = req.query.id
    db.query(`SELECT * FROM movie_director_actor where movie_code=${id}`, (err, data) => {
        if(!err) res.send({ movie_res : data });
        else res.send(err);
    })
})

app.get('/api/v2/movie_summary.json', (req, res) => {
    console.log('/api/v2/movie_summary.json')
    console.log(req.query)
    console.log(req.query.id)
    const id = req.query.id
    db.query(`SELECT * FROM movie_summary where movie_id=${id}`, (err, data) => {
        console.log(data)
        if(!err) res.send({ movie_res : data });
        else res.send(err);
    })
})

app.get('/api/get/comment/latest', (req, res) => {
    console.log('/api/get/comment/latest')
    db.query(`select * from movie_comment order by write_date desc limit 0,10`, (err, data) => {
        if(!err) res.send({ comment_res : data });
        else res.send(err);
    })
})

app.get('/api/get/comment/oldest', (req, res) => {
    console.log('/api/get/comment/oldest')
    db.query(`select * from movie_comment order by write_date asc limit 0,10`, (err, data) => {
        if(!err) res.send({ comment_res : data });
        else res.send(err);
    })
})

app.get('/api/get/comment/more/:page', (req, res) => {
    console.log('/api/get/comment/more')
    const page = req.params.page
    console.log(page)
    const startIndex = page*10
    db.query(`select * from movie_comment order by write_date desc limit ${startIndex},10`, (err, data) => {
        if(!err) res.send({ comment_res : data });
        else res.send(err);
    })
})

app.post('/api/post/comment', (req, res) => {
    console.log('/api/post/comment')
    console.log(req.body)
    const {movie_id,member_id,nickname,comment,rating,write_date}=req.body
     db.query(`insert into movie_comment values(${movie_id},${member_id},'${nickname}','${comment}',${rating},'${write_date}')`, (err, data) => {
        if(!err) res.send({ comment_res : data });
        else res.send(err);
    })
})

app.get('/api/get/comment/history/:id', (req, res) => {
    console.log('/api/get/comment/history/:id')
    const id = req.params.id
    db.query(`select reply_idx,recommend_type from reply_recommend_history where id='${id}'`, (err, data) => {
        if(!err) res.send({ comment_res : data });
        else res.send(err);
    })
})

app.get('/api/get/movie_popular_search', (req, res) => {
    console.log('/api/get/movie_popular_search')
    db.query(`select * from movie_popular_search`, (err, data) => {
        if(!err) res.send({ res : data });
        else res.send(err);
    })
})

app.get('/api/get/actor_popular_search', (req, res) => {
    console.log('/api/get/actor_popular_search')
    db.query(`select * from actor_popular_search`, (err, data) => {
        if(!err) res.send({ res : data });
        else res.send(err);
    })
})

app.get('/api/get/box_office', (req, res) => {
    console.log('/api/get/box_office')
    db.query(`select * from box_office`, (err, data) => {
        if(!err) res.send({ res : data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

