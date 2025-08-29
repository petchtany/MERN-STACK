const express = require('express');
const router = express.Router();

/* localhost:8000/api/create */
router.get('/create' , (req,res) =>{
    res.send('Create Person Endpoint ')
})

/* localhost:8000/api/update */
router.get('/update', (req,res) =>{
    res.send('Update Person Endpoint')
})

module.exports = router;