import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req, res)=> {
    res.status(100). json ({
        message: "Chai aur code"
    })
})

export { registerUser };