const userModel = require("../models/user");


const Getuser = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).json({ users })
    } catch (error) {
        res.status(500).json({ message: "intenral server error" })
        console.log(error)
    }
}


const deletUser = async (req, res) => {
    try {
        const userId = req.params.id
        const checkAdmin = await userModel.findById(userId)

        if (checkAdmin.role == 'admin') {
            return res.status(409).json({ message: "you can not delete yourself" })
        }

        const user = await userModel.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        res.status(200).json({ message: "user delet successfully ", user })

    } catch (error) {
        res.status(500).json({ message: "intenral server error" })
        console.log(error)
    }
}

module.exports = { Getuser, deletUser };