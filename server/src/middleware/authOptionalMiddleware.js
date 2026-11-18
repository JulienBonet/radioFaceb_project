// server/src/middleware/authOptionalMiddleware.js
import jwt from 'jsonwebtoken';

export const authOptionalMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next();
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
};