import nodemailer from 'nodemailer';

import { EMAIL_PASSWORD } from './env.js'

export const accountEmail = 'malkartanmay6300@gmail.com';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'malkartanmay6300@gmail.com',
        pass: EMAIL_PASSWORD
    }
})

export default transporter;