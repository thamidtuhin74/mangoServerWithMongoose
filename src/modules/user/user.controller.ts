import User from "./user.model";

const registerUser = async (req, res) =>{
    const payload =  req.body;
    const user = new User(payload);

    const data =  await user.save();

    res.json({
        success: true,
        message: "User Registration Successfully",
        data,
    })
}
const getUser =  async (req, res) =>{
    // const payload =  req.query;
    const data =  User;

    res.json({
        seccess : true,
        message: "All User there",
        data
    })
}

export {registerUser, getUser}