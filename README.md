# Cypress-Challenge
## (English)

- This project is part of a job challenge, aiming to create a series of E2E tests that properly assess the main functionalities of the application.

There are many possibilities for testing the SauceDemo application, and countless additional tests I could write to catch more bugs on the site. However, fully testing the app would be an overreach for this particular challenge.

Important considerations: At the time of writing these tests, the SauceDemo app has significant issues when used with Cypress. The main problem is the recurring 401 status, which causes tests to fail consistently. In this repository, you will find a "workaround" a temporary solution that helped me, and I hope it will help you as well.
seriously... i wasted more time than i could count on this issue....

## (Português)

- Este é um repositório criado para um desafio sobre uma vaga de QA - Engineer, o propósito do desafio é contemplar diversos testes E2E que verificam diversas áreas da aplicação saucedemo
  Existem diversos cenários que eu não criei e não contemplei, alguns pela complexidade elevada e que não faria sentido para este desafio e outros simplesmente por que... não tive tempo.
  Porém se você caiu neste repositório de para quedas eu recomendo que tente pegar mais cenários que envolvem os bug´s já apresentados pela aplicação.

  Um aviso à aqueles que estarão trabalhando com o saucedemo. Atualmente este site odeia o cypress de uma forma que só deus e o site sabem, o principal problema é que se você somente instalar
  o cypress e não configurar a mais nenhum teste irá rodar por conta de respostas 401 do backtrace.io, neste repositório existe uma solução paleativa para ele, não é o melhor mas vai resolver
  seu problema.


## English Instructions

### 1 - Clone the repository
Open your terminal and run the following command to clone the repository to your local machine:
`git clone <repository-url>`  Switch for the url from this repository
You could open a terminal in the folder you are going to clone then using this command

### 2 - Navigate to the project folder
After cloning, navigate to the project directory:
`cd <project-folder>`

### 3 - Install dependencies
Run the following command to install all the required npm dependencies:
`npm install`

### 4 - Run Cypress
Once the dependencies are installed, you can open Cypress by running:
`npx cypress open`

This will launch the Cypress test runner, allowing you to run the E2E tests.
You can also use` npx cypress run` for headless mode.


## Instruções em Português

### 1 - Clonar o repositório
Abra o terminal e execute o seguinte comando para clonar o repositório na sua máquina local:
`git clone <repository-url>`  Substitua <repository-url> pela URL real do repositório.
Você pode também abrir o terminal ou git bash a partir da pasta em que você deseja instalar este repositório.

### 2 - Navegar para a pasta do projeto
Após clonar, navegue até o diretório do projeto:
`cd <pasta-do-projeto>`

### 3 - Instalar as dependências
Execute o seguinte comando para instalar todas as dependências necessárias:
`npm install`

### 4 - Executar o Cypress
Depois de instalar as dependências, você pode abrir o Cypress com o seguinte comando:
`npx cypress open`   uma alternativa seria rodar o `npx cypress run` caso deseje rodar os testes em modo headless(sem o navegador)
