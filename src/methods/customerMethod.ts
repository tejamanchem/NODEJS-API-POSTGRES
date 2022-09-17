import {Database} from './../../database/dbConnection'
import {getDBRepository} from './../../database/dbRepositry'
import {Request,Response} from 'express'
import { Connection } from 'typeorm';

const connectionName = 'default';
const database = new Database();
const dbConn: Connection = await database.getConnection(connectionName);
 const MspRepository = dbConn.getRepository('Users');

const getCustomer = async (req: Request, res: Response, ) => {
    let result = await MspRepository.createQueryBuilder('ur')
    .select([`cr.id,cr.firstname,cr.lastname`])
    .getMany()
    
    if(result[0]){
     return res.status(200).json({
         message: "success",
         result:result   
     });
 
    } 
    else{
        res.status(404).json({
            message:"no users found"
        })
    }
    
 };
  export default {getCustomer}
