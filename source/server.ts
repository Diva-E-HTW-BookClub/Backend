/** source/server.ts */
import http from 'http';
import express, { Express, response } from 'express';
import morgan from 'morgan';
import { routes } from './routes/routes';
import cors from 'cors';
import { Server } from 'socket.io';

const router: Express = express();
const discussionMap = new Map();

var playingSateServer = [true, true];
var progressTimesServer= [0, 0];
var progressSumServer = -1;


/** Logging */
router.use(cors())

router.use(morgan('combined'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
router.use('/', routes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const apiServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 80;
const SOCKET_IO_PORT: any = process.env.SOCKET_IO_PORT ?? 2000;


// Add socket.io websocket
function createInMap(nameOfDiscussionId: any){
    discussionMap.set(nameOfDiscussionId, [[true, true],-1,-1]);
}

const io = new Server(apiServer, {
    
    cors: {
        methods: ["GET", "POST"], 
    }
})

io.on('connection', (socket: any) => {
    console.log(`User Connected: ${socket.id}`);
    
    socket.on("join_discussion_room", (data: any) => {
        if(!(discussionMap.has(data))){
            createInMap(data)
        }
        console.log(discussionMap.get(data)[0]);
        console.log(discussionMap.get(data))
        socket.join(data);
    });

    socket.on("send_playButton", (data: any) => {
        discussionMap.set(data.discussionId,[[data.emitStates], [discussionMap.get(data.discussionId)[1]],discussionMap.get(data.discussionId)[2]])
        playingSateServer = data;
        console.log(playingSateServer)
        console.log("HIER SCHAU MAL" + discussionMap.get(data.discussionId)[0])
        io.in(data.discussionId).emit("receive_playButton", data)
    });

    socket.on("send_time", (data: any) => {
        discussionMap.set(data.discussionId,[[discussionMap.get(data.discussionId)[0]],[data.emitTimes] ,discussionMap.get(data.discussionId)[2]])
        progressTimesServer = data;
        console.log(progressTimesServer)
        io.in(data.discussionId).emit("receive_time", data)
    });

    socket.on("send_sum_time", (data: any) => {
        discussionMap.set(data.discussionId,[[discussionMap.get(data.discussionId)[0]], discussionMap.get(data.discussionId)[1], [data.emitSum]])
        progressSumServer = data;
        console.log(progressSumServer)
        io.in(data.discussionId).emit("receive_sum_time", data)
    });

    socket.on("send_all_Current_Data", (data: any) => {
        discussionMap.set(data.discussionId,[[data.emitStates], [discussionMap.get(data.discussionId)[1]],discussionMap.get(data.discussionId)[2],discussionMap.get(data.discussionId)[3]])
        discussionMap.set(data.discussionId,[[discussionMap.get(data.discussionId)[0]],[data.emitTimes] ,discussionMap.get(data.discussionId)[2],discussionMap.get(data.discussionId)[3]])
        discussionMap.set(data.discussionId,[[discussionMap.get(data.discussionId)[0]], discussionMap.get(data.discussionId)[1], [data.emitSum],discussionMap.get(data.discussionId)[3]])
        playingSateServer = data.emitStates;
        progressTimesServer = data.emitTimes;
        progressSumServer = data.emitSum;
        io.in(data.discussionId).emit("receive_all_Data", data)
    });

    socket.on("send_all_Data", (data: any) => {
        discussionMap.set(data.discussionId,[[data.emitStates], [discussionMap.get(data.discussionId)[1]],discussionMap.get(data.discussionId)[2]])
        playingSateServer = data.emitStates;

        discussionMap.set(data.discussionId,[[discussionMap.get(data.discussionId)[0]],[data.emitTimes] ,discussionMap.get(data.discussionId)[2]])
        progressTimesServer = data.emitTimes;

        discussionMap.set(data.discussionId,[[discussionMap.get(data.discussionId)[0]], discussionMap.get(data.discussionId)[1], [data.emitSum]])
        progressSumServer = data.emitSum;
        
        console.log("states:  "+ playingSateServer)
        console.log("timesServer: " + progressTimesServer)
        console.log("Sum: " + progressSumServer)

        // Update Synchronisation
        io.in(data.discussionId).emit("receive_playButton", data)
        io.in(data.discussionId).emit("receive_time", data)
        io.in(data.discussionId).emit("rreceive_sum_time", data)

    });
    socket.on("request_data", (data: any) => {
      
        if(progressSumServer != -1){
            console.log("state im loop: " + playingSateServer)
            console.log("times im loop: " + progressTimesServer)
            console.log("sum im loop: " + progressSumServer)

            console.log("state im loop SERVER" + discussionMap.get(data.discussionId)[0]);
            console.log("times im loop SERVER" + discussionMap.get(data.discussionId)[1]);
            console.log("sum im loop SERVER" + discussionMap.get(data.discussionId)[2]);

            io.in(data.discussionId).emit("receive_playButtonStart", discussionMap.get(data.discussionId)[0]);
            io.in(data.discussionId).emit("receive_timeStart", discussionMap.get(data.discussionId)[1]);
            io.in(data.discussionId).emit("receive_sum_timeStart", discussionMap.get(data.discussionId)[2]);

        }
    })
});


// Start the server
io.listen(SOCKET_IO_PORT)
apiServer.listen(PORT, "0.0.0.0", () => console.log(`The server is running on port ${PORT}`));