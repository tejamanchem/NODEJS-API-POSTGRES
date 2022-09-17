import express,{Express} from 'express';
import morgan from 'morgan';
import http from 'http';
import services from './services/service';


const router:Express= express()



router.use(morgan('dev'));

router.use(express.urlencoded({extended:false}))

router.use(express.json());

router.use('/',services)

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});


const httpServer = http.createServer(router)

const port = 3000

httpServer.listen(port,()=>{
    console.log(`!!!!!!!!->Server Started<-!!!!!!!!`)
    console.log(`The server is running at port:${port}`)
})



