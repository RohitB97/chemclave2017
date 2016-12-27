'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var multer= require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client/assets/files');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });


var router = new Router();

router.get('/', auth.hasRole('admin'), controller.Index);
router.get('/userCount', controller.userCount);
router.get('/accommodations', controller.accommodations);
router.get('/erp/finance', controller.accomodationIndex);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.put('/accomRequest/:id', controller.RequestAccom);
router.put('/accomAccept/:id', controller.AcceptAccom);
router.put('/accomReject/:id', controller.RejectAccom);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);
router.post('/accomRequest/fileUpload', upload.single('payReceipt'), controller.upload);

module.exports = router;
