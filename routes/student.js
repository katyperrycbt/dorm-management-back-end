const express = require('express');
const { requirestudentLogin } = require('../controllers/auth')
const { removeRequestFix,
    studentLogin,
    studentSeeRoommate,
    studentSeeStudent,
    studentEditAccount,
    getStudentInfo,
    getStudentAccount,
    studentEditInfo,
    getRequestReturn,
    requestReturn,
    getRequestFix,
    requestFix,
    getBill
} = require('../controllers/student');
const router = express.Router()

router.post('/login/:remember', studentLogin);//student login
router.post('/seeRoomate', requirestudentLogin, studentSeeRoommate);//student see list of roomate
router.post('/seeStudent/:_id', requirestudentLogin, studentSeeStudent);//see detail info of roomate
router.get('/get/info', requirestudentLogin, getStudentInfo);//see info themselves
router.get('/get/account', requirestudentLogin, getStudentAccount);//see account info(email,activestatus)
router.put('/edit/account', requirestudentLogin, studentEditAccount);////edit password of their account
router.put('/edit/info/:_id', requirestudentLogin, studentEditInfo);////edit password of their account
router.get('/get/request/return', requirestudentLogin, getRequestReturn);////student get request return
router.post('/request/return', requirestudentLogin, requestReturn);////student send request return
router.get('/get/request/fix', requirestudentLogin, getRequestFix);////student get request fix
router.post('/request/fix', requirestudentLogin, requestFix);////student send request fix
router.get('/get/bill/:room_id', requirestudentLogin, getBill);////student get bill
router.delete('/remove/request/fix/:_id', requirestudentLogin, removeRequestFix);
module.exports = router