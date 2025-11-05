import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';
import itemRoutes from './src/routes/itemRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

// koneksi database
sequelize.sync()
    .then(() => console.log('Database connected & synced'))
    .catch((err) => console.error('DB Connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
