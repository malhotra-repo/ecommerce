import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import productRouter from './routes/product.routes.js';
import passport from 'passport';
import { Strategy as googleStrategy } from 'passport-google-oauth20'
import { config } from './config/config.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(cors({ origin: true, credentials: true }));


app.use(passport.initialize())
passport.use(new googleStrategy({
 clientID: config.GOOGLE_CLIENT_ID,
 clientSecret: config.GOOGLE_CLIENT_SECRET,
 callbackURL: "/api/auth/google/callback"
},
(accessToken, refreshToken, profile, done) => {
 return done(null, profile)
}))

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
 res.status(200).json({ message: " server is running" })
});

export default app;
