import axios from "axios";
import { Request, Response, NextFunction } from "express";

export class CEPValidator {
    
    public async validate(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const { cep } = req.body;
    
        const cepRegex = /^\d{5}-\d{3}$/;
    
        if (!cepRegex.test(cep)) {
            return res.status(400).send('Invalid CEP format.');
        }
    
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if(response.data && !response.data.erro){
                next();
            } else {
                return res.status(400).send('Invalid CEP.');
            } 
        } catch (error) {
            res.status(500).send('Internal Server Error.');
        }
    }
}
