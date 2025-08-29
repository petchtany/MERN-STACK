const express = require('express');
const router = express.Router();


/* localhost:8000/api/register */

router.get('/register',(req,res) =>{
    res.send('Hello Register')
});

/* localhost:8000/api/test */
router.get('/test',(req,res) =>{
    res.send('Hello Test')
});

module.exports = router;