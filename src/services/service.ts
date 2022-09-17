import express from 'express'
import customerMethod from './../methods/customerMethod'

const router =express.Router();

router.get('/c',customerMethod.getCustomer)

export default router;