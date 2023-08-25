import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import JWT_TOKEN from "../config/jwtconfig";

const authorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authen = req.headers.authorization

    if (!authen) {
        res.status(400).json({error : "Unauthorized Access!!"})
    } else {
        const secretToken = authen.split(' ')[1]

        try {
            const decodedToken:any = jwt.verify(secretToken, JWT_TOKEN as Secret) 

            if (decodedToken.role === "Approver") {
                next()
                console.log(decodedToken, `= Decode test`)
            } else {
                res.status(400).json({error : "Unauthorized Access!!!"})
            }
        }catch (error) {
            res.status(400).json({error: error})
        }
    } 
}
// ===============================AUTHORIZATION MIDDLEWARE STILL WIP
export default authorMiddleware