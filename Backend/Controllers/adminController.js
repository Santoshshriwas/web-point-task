const Admin = require('../Models/adminModel');

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    res.status(200).json({ message: 'Admin logged in successfully', admin });
  } catch (error) {
    console.error('Error during admin login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { adminLogin };
