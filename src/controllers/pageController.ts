import {Response,Request} from 'express';
import {tabela,pegarNomeMes} from '../models/itens'


export const home = (req: Request, res:Response) =>{
    let list = tabela.getAll();
    let numeroNome = pegarNomeMes;
    res.render('pages/page',{
        banner: {
            title: 'Tabela',
            background: 'AfonsoClaudio.jpg'
        },
        list,
        numeroNome
    });
};
