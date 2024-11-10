const yup = require('yup')

const schema = yup.object().shape(

    {
        nome: yup
        .string("Campo nome precisa ser um texto")
        .required( "Campo nome é Obrigatorio"),
        descricao: yup
        .string("Campo nome precisa ser um texto")
        .required( "Campo nome é Obrigatorio"),
        salario: yup
        .string("Campo salario precisa ser numerico")
        .required("Campo Salario é Obrigatorio"),
        habilidade: yup
        .string("Campo nome precisa ser um texto")
        .required( "Campo nome é Obrigatorio"),
        status_cargo: yup
        .string("Campo nome precisa ser um texto")
        .required( "Campo nome é Obrigatorio"),

    }
)

function validarCargo (req,res, next) {
    schema.validate(req.body, {abortEarly: false} ).then(() => next ()).catch(err => res.status(400).json (
        {
            mensagem: "Erro na validação dos Campos",
            erro: err.errors
        }
    ))
}

module.exports = {
    validarCargo
}