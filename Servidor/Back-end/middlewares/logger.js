const logger = (req, res, next) => {
    const data = new Date()
    console.log(`[${data.toISOString()} - ${req.method} - ${req.url}]`)
    next()
}
// Mostra as paginas acessadas no console
module.exports = logger