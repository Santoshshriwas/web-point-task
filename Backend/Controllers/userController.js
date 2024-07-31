const userModel = require("../Models/userModel.js")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userRegister = async (req, res) => {
  try {
    const { name, email, password, phone, gender } = req.body;
    if (!name || !email || !password || !phone || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      phone,
      gender
    });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'User logged in successfully', user });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};








// admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await userModel.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    res.status(200).json({ message: "Admin logged in successfully", admin });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error("Server error during admin login:", error);
  }
};
// const Profile =async (req, res) => {
//   try {
//     const user = await userModel.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//     console.error("Server error while fetching user profile:", error);
//   }
// };

const Profile = async (req, res) => {
  try {
    const { name } = req.params; 
    const user = await userModel.findByName(name); 

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const allUser = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const users = await userModel.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const totalUsers = await userModel.countDocuments();

    res.status(200).json({
      users,
      totalPages: Math.ceil(totalUsers / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error("Server error while fetching all users:", error);
  }
};
// search  data user
const searchUser = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    const user = await userModel.findOne({ email });
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error searching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


 const updatePassword =  async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    if (!email || !oldPassword || !newPassword) {
      return res.status(400).json({ message: 'Email, old password, and new password are required' });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Old password is incorrect' });
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ message: 'Server error' });
  }
};




module.exports = {userRegister,userLogin,Profile,adminLogin,allUser,searchUser,updatePassword}