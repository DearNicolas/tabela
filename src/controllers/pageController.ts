import {Response,Request} from 'express';

export const home = (req: Request, res:Response) =>{
    res.render('pages/page',{
        menu:{
            all: true,
            dog: false,
            cat: false,
            fish: false


        },
        banner: {
            title: 'Todos os Animais',
            background: 'allAnimals.jpg'
        }
        });


};
export const dogs = (req: Request, res:Response) =>{
    res.render('pages/page',{
    banner: {
        title: 'Cachorros',
        background: 'banner_dog.jpg'
    }
    });

};
export const cats = (req: Request, res:Response) =>{
    res.render('pages/page',{
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
        });
    


};
export const fishes = (req: Request, res:Response) =>{
    res.render('pages/page',{
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
        });
    
};