import { User } from "../models/user.model";
import bcryptjs from 'bcryptjs';
export const signup = async (req, res, next) => {
    const { email, password, name } = req.body;

    try {
        if (!email || !password || !name) {
            throw new Error("all the fields are required");
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("Email already exists");
        }

        const hashPassword = await bcryptjs.hash(password, 10);


    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}
export const login = async (req, res, next) => {
    res.status(200).json({ message: " login successful" });
}

export const logout = (req, res) => {
    res.json({ message: "Logged out successfully" });
}