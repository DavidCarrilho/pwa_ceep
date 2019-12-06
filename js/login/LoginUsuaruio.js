let logado = false

LoginUsuario_render({
    logado: false,
    onLogin: () => logado = true,
    onLogout: () => logado = false
})