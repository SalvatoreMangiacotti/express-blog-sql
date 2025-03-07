const connection = require('../data/db')

// Index

const index = (req, res) => {

    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {

        if (err) return res.status(500).json({ error: 'Database query failed' });

        res.json(results);

        console.log(results);

    })

}


// // Show

// const show = (req, res) => {

//     const id = parseInt(req.params.id);

// }


// // Store

// const store = (req, res) => {

//     const newId = postsList[postsList.length - 1].id + 1;

// }


// // Update

// const update = (req, res) => {

//     const id = parseInt(req.params.id);

// }


// // Modify

// const modify = (req, res) => {

//     res.send("Modifica parziale del post");

// }


// Destroy

const destroy = (req, res) => {

    const id = parseInt(req.params.id);

    connection.query('DELETE FROM posts WHERE id = ?', [id], (err) => {

        if (err) return res.status(500).json({ error: 'Failed to delete post' });

        res.sendStatus(204)

    });

}


module.exports = {
    index,
    // show,
    // store,
    // update,
    // modify,
    destroy
}