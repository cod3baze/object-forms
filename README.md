# Object forms

> ways to create objects in javaScript

- Object literals

  - fácil de entender/criar
  - [x] `!` se precisar usar mais de 1, tem que mudar algum detalhe

- Factory

  - coloco o objeto literal como retorno
  - Mantém a variável dentro do escopo da função
  - [x] `!` Recriação de funções internas

- Prototype

  - **this** é a referencia do objeto
  - funções extras são criadas pelo prototype
  - [x] `!` se criar funções dentro da função, ela será repetida

- Class
  - Syntactic sugar
  - **Prototype under the hood**
  - Clareza visual
  - [x] `!` Não é igual class de linguagens orientada a objetos
  - [x] `!` o **new** não vai criar uma instância da classe, mas um objeto com a cadeia de prototype
