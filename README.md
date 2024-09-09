## Formulário de Registro de Usuários

### Descrição
Este projeto consiste em um formulário de registro de usuários simples e responsivo, construído com HTML, JavaScript, Bootstrap e Validator.js. Ele permite aos usuários cadastrarem-se fornecendo seu email, nome de usuário e senha, além de exibir mensagens de erro para validação dos dados inseridos.

### Tecnologias Utilizadas
* **HTML:** Estrutura básica da página.
* **JavaScript:** Lógica para interação com o usuário, validações e envio do formulário (implementadas no arquivo `registerValidation.js`).
* **Validator.js:** Biblioteca JavaScript (CDN) para validação de dados do formulário (ex: email válido, formato de senha).
* **Bootstrap:** Framework CSS para estilização da interface e layout responsivo.
* **GitHub Pages:** Plataforma de hospedagem (opcional).

### Funcionalidades
* Cadastro de novos usuários com os seguintes campos:
    * Email
    * Nome de usuário
    * Senha
* Validação dos dados do formulário:
    * Email: Verifica se o formato do email é válido utilizando `validator.isEmail`.
    * Nome de usuário:
        * Mínimo de 3 caracteres.
        * Máximo de 20 caracteres.
        * Somente letras, números e underscores.
        * Não pode começar ou terminar com underscore (implementado com `validator.isLength`, `validator.isAlphanumeric` e verificação manual).
    * Senha:
        * Mínimo de 8 caracteres.
        * Deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um símbolo (implementado com `validator.isStrongPassword`).
* Exibição de mensagens de erro personalizadas para cada campo do formulário.

### Instruções de Uso

**1. Clonando o Repositório**
```bash
git clone [https://github.com/](https://github.com/)<seu_usuario>/<seu_repositorio>.git
