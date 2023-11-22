import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

export const register = async (req, res) => {
    try {
        const { userName, password: pass, email, role } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(pass, 10);

        const user = await User.create({
            userName,
            password: hash,
            email,
            role
        });

        const { password, ...userData} = user._doc;

        return res.status(200).json(userData);
    } catch (e) {
        console.error(e, e.message, 'error message');
        res.status(500).json({message: e.message});
    }
};

export const login = async (req, res) => {
    try {
        const { email, password: pass } = req.body;
        const user = await User.findOne({email});
        
         if (!user) {
            res.status(404).json({message: "User not found"});
         }

         const isValid = await bcrypt.compare(pass, user.password);
         if (!isValid) {
            res.status(400).json({message: 'Email or password is incorrect'});
         }

         const { password, ...userData} = user._doc;

        return res.status(200).json(userData); 
    } catch (e) {
        console.error(e);
        res.status(500).json({message: e.message});
    }
};