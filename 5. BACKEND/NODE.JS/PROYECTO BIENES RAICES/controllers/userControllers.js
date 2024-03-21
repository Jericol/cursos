

const formLogin = (req, res) => {
    res.render('auth/login', {
        autenticado: true
    })
};

export {
    formLogin
}