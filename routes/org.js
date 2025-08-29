const express = require('express');
const router = express.Router();


/* localhost:8000/api/register */

router.get('/create-org',(req,res) =>{
    res.send('Hello create org')
});

/* localhost:8000/api/test */
router.get('/update-org',(req,res) =>{
    res.send('Hello Update org')
});

module.exports = router;