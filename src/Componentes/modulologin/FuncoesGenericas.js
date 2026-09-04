const USUARIO_VALIDO = 'aluno';
const SENHA_VALIDA = '1234';

export function validarLogin(usuario, senha) {
    // Verifica se o usuário e a senha correspondem aos valores válidos
    // Retorna true se ambos forem válidos, caso contrário, retorna false
  return usuario.trim() === USUARIO_VALIDO && senha === SENHA_VALIDA;
}

export function obterMensagemErroLogin() {
  return 'Usuário ou senha inválidos. Tente: aluno / 1234';
}