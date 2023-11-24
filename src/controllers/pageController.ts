import {Response,Request} from 'express';
import {tabela,pegarNomeMes} from '../models/itens'


export const home = (req: Request, res:Response) =>{
    let list = tabela.getAll();

    res.render('pages/page',{
        banner: {
            title: 'Tabela',
            background: 'AfonsoClaudio.jpg'
        },
        list,

    });


};
