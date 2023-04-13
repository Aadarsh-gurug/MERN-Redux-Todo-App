import JWT from 'jsonwebtoken'

//protected route token based

export const requireSignIn = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(200).json({ success: false, message: 'Please login to Continue' })
    }
    const { user } = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
    if (user) {
        req.user = user
        next()
    } else {
        return res.status(200).json({ success: false, message: 'invalid access' })
    }
}
