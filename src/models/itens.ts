

let data = [
    {
           "Total": "42",
           "Mes": "1",
           "Cidade": "\"AFONSO CLÁUDIO\""
       },
       {
           "Total": "22",
           "Mes": "2",
           "Cidade": "\"AFONSO CLÁUDIO\""
       },
       {
           "Total": "25",
           "Mes": "3",
           "Cidade": "\"AFONSO CLÁUDIO\""
       },
       {
           "Total": "25",
           "Mes": "4",
           "Cidade": "\"AFONSO CLÁUDIO\""
       },
       {
           "Total": "20",
           "Mes": "5",
           "Cidade": "\"AFONSO CLÁUDIO\""
       },
       {
           "Total": "26",
           "Mes": "6",
           "Cidade": "\"AFONSO CLÁUDIO\""
       },
       {
           "Total": "27",
           "Mes": "7",
           "Cidade": "\"AFONSO CLÁUDIO\""
       },
       {
           "Total": "27",
           "Mes": "8",
           "Cidade": "\"AFONSO CLÁUDIO\""
       },
       {
           "Total": "36",
           "Mes": "9",
           "Cidade": "\"AFONSO CLÁUDIO\""
       },
       {
           "Total": "27",
           "Mes": "10",
           "Cidade": "\"AFONSO CLÁUDIO\""
       }
   ];

export const tabela = {
    getAll:() => {
        return data;
    },

};

function pegarNomeMes (numeroDoMes: number) { 
    let mouth = [
        'janeiro','Fevereiro','março','abril','junho','julho','agosto','setembro','outubro'
    ]
    return mouth[numeroDoMes - 1] || 'Mẽs não encontrado'
}



