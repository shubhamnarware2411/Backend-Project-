const asyncHandeler = (reqesthandler) => {
    (req, res, next) => {
        Promise.resolve(reqesthandler(req, res.next)).catch((err) => next(err))
    }
}
export { asyncHandeler }


// const asyncHandeler = (reqesthandler) => async (req, res, next) => {
//     try {
//         await reqesthandler(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json
//             (
//                 {
//                     success: false,
//                     message: error.message
//                 }
//             )


//     }
// }

// export { asyncHandeler }
