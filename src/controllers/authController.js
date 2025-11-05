import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

// REGISTER
export const register = async (req, res) => {
try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ where: { email } });
    if (exist) return res.status(400).json({ message: 'Email sudah digunakan' });

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashed });

    res.json({ message: 'Registrasi berhasil' });
} catch (err) {
    res.status(500).json({ message: 'Gagal register', error: err.message });
}
};

// LOGIN
export const login = async (req, res) => {
try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'User tidak ditemukan' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Password salah' });

    const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
    );

    res.json({ token });
} catch (err) {
    res.status(500).json({ message: 'Gagal login', error: err.message });
}
};
