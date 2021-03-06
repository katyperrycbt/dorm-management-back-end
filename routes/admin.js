const express = require('express');
const { requireadminLogin } = require('../controllers/auth')
const { removeStudentFromRoom,
    transferStudent,
    getDatabase,
    adminRegister,
    adminLogin,
    adminSeeStudent,
    adminSearchStudentByName,
    adminUpdateActiveStudent,
    getStudentList,
    getAdminAccount,
    editAccount,
    getAdminInfo,
    editInfo,
    createAdminAccount, 
    getAllStudentsWithTheirRoomInfo } = require('../controllers/admin');
const { studentRegister } = require('../controllers/student');
const router = express.Router()
router.post('/register', requireadminLogin, adminRegister);//admin register
router.post('/createAdminAccount', requireadminLogin, createAdminAccount);//create admin account
router.post('/login/:remember', adminLogin);//admin login
router.post('/edit/account', requireadminLogin, editAccount);//admin edit account(re new password)
router.get('/getStudentList', requireadminLogin, getStudentList);//admin get student list
router.get('/get/getAllStudentsWithTheirRoomInfo', requireadminLogin, getAllStudentsWithTheirRoomInfo);//admin get student list
router.get('/get/info', requireadminLogin, getAdminInfo);//get admin info
router.get('/get/account', requireadminLogin, getAdminAccount);//admin get account
router.get('/seeStudent/:_id', requireadminLogin, adminSeeStudent);// admin see detail information of student given its id
router.get('/searchStudentByName/:name', requireadminLogin, adminSearchStudentByName);//admin search student by name pattern
router.put('/updateActiveStudent/:_id', requireadminLogin, adminUpdateActiveStudent);//update active or not of one student account
router.patch('/edit/info', requireadminLogin, editInfo);//edit admin info
router.get('/get/database/:whatDatabase', requireadminLogin, getDatabase)
router.post('/create/studentAccount', requireadminLogin, studentRegister);//student register
router.put('/update/room', requireadminLogin, transferStudent);
router.put('/deactivate/account', requireadminLogin, removeStudentFromRoom);
router.put('/activate/account', requireadminLogin, adminUpdateActiveStudent);

module.exports = router