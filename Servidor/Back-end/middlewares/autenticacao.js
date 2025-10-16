
const tokensAtivos = {}

const autenticar = (req, res, next) => {
    const authHeader = req.headers['authorization']

    if (!authHeader) {
        console.error('Não autorizado: header ausente')
        return res.status(401).redirect('/login.html')
    }

    const token = authHeader.split(' ')[1] || authHeader

    if (tokensAtivos[token]) {
        req.usuarioId = tokensAtivos[token]
        next()
    } else {
        console.error('Não autorizado: token inválido')
        return res.status(401).redirect('/login.html')
    }
}

module.exports = autenticar;
