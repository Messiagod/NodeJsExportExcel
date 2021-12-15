const mysql = require('mysql');

const con = mysql.createConnection({    /* variavel de conexão */
    host: '',
    database: '',
    user: '',
    password: ''
});

con.connect(function(err){              /* conectando ao banco  */
    if (err) throw err;                 /* se der erro , retornar o erro ocorrido */
    console.log("Conectado coom sucesso!")
    const sql = 'SELECT * FROM tabela';
});