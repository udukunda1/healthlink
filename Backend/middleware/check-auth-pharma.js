import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
      }

      try {
        const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
          return res.status(403).json({err: 'authentication failed'});
        }

    const decodedToken = jwt.verify(token, 'supersecret_dont_share');
    req.pharmacyId = decodedToken.pharmaId ;
    next();
  } catch (err) {
    res.status(403).json({err: 'authentication failed'});
  }
}