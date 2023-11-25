import asyncHandler from 'express-async-handler'
// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public

const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Auth User'})
});

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'registerUser User'})
});

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Logout User'})
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'UserProfile User'})
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'update User Profile'})
});
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
}