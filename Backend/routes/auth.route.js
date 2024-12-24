import express from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    res.send('Welcome to the signup');
});

router.post('/login', async (req, res) => {
    res.send('Welcome to the login');
});

router.get('/logout', async (req, res) => {
    res.send('Welcome to the logout');
});

export default router; 