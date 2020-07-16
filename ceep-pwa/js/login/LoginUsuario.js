let logado = false;

LoginUsuario_render({
  logado,
  onLogin: () => (logado = true),
  onLogout: () => (logado = false),
});
