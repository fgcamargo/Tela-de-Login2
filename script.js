document
  .getElementById('formularioLogin')
  .addEventListener('submit', function (evento) {
    evento.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const mensagem = document.getElementById('mensagem')

    const emailValido = 'usuario@exemplo.com'
    const senhaValida = 'senha123'

    if (email === emailValido && senha === senhaValida) {
      mensagem.style.color = 'green'
      mensagem.textContent = 'Login bem-sucedido! Redirecionando...'
      setTimeout(() => {
        window.location.href = 'home.html'
      }, 2000)
    } else {
      mensagem.style.color = 'red'
      mensagem.textContent = 'Email ou senha inválidos'
    }
  })
