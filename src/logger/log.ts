// import path from 'path'
// import morgan from 'morgan'
// import morganBody from 'morgan-body'
// import express from 'express'
// import moment from 'moment'

// const rfs = require('rotating-file-stream')
// const logDirectory = path.join(__dirname, '../logs')
// const accessLogStream = rfs.createStream((time: any, index: number) => {
//     if (!time) return moment().format('YYYY-MM-DD') + '_ServerHTTP.log'
//     const day = moment(time).format('YYYY-MM-DD')
//     return `${day}_${index}_ServerHTTP.log`
// }, {
//     interval: '1d',
//     path: logDirectory,
//     rotate: 10,
// })

// const loggerHTTP = (app: express.Express) => {
//     morganBody(app, {
//         noColors: true,
//         stream: accessLogStream,
//     })
//     app.use(morgan('combined', { stream: accessLogStream }))
// }

// export default loggerHTTP