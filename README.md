# Questionário de Passo a Passo

## Visão Geral do Projeto

Este é um projeto que usa Vue3, Javascript, SASS, Vite e Vitest.

É uma stack de desenvolvimento web moderna que é rápida e eficiente para construir aplicativos web escaláveis.

## Preview

O projeto mostra a criação de componentes reutilizáveis, da mesma forma que uma biblioteca UI. A exibição se dá na tela inicial, utilizando um componente de passo a passo, em cada qual há outro componente dentro.
A seguir os componentes que foram criados:

### Telas

#### Passo 1

![image](https://github.com/augustopiatto/LigaMagic-ProcessoSeletivo/assets/77405968/1e51380d-1c12-4d52-a5d7-019e424af693)

#### Passo 2

![image](https://github.com/augustopiatto/LigaMagic-ProcessoSeletivo/assets/77405968/3aba9d46-f57d-405b-99cf-8ff97fcefed8)

#### Passo 3

![image](https://github.com/augustopiatto/LigaMagic-ProcessoSeletivo/assets/77405968/0aa4855a-f08d-41f5-9912-f302c565549e)

#### Passo 4

##### Passo 4.1

![image](https://github.com/augustopiatto/LigaMagic-ProcessoSeletivo/assets/77405968/8abc80ab-ddac-41ed-9035-35c6f641ed5e)

##### Passo 4.2

![image](https://github.com/augustopiatto/LigaMagic-ProcessoSeletivo/assets/77405968/6fd7931d-8c9a-4b75-b04a-490dd8941f2a)

##### Passo 4.3

![image](https://github.com/augustopiatto/LigaMagic-ProcessoSeletivo/assets/77405968/7a1a026a-7cc7-4877-b12a-0fd7d10292f6)

##### Validações de input

![image](https://github.com/augustopiatto/LigaMagic-ProcessoSeletivo/assets/77405968/99ad1a69-b53f-43bd-ba70-81cf4913cf53)

## Começando

Para iniciar o projeto, siga os passos abaixo:

- Clone o repositório em sua máquina local
- Execute `npm install` para instalar as dependências do projeto (utilizado node v20.1.0 e npm v9.6.6)
- Execute `npm run dev` para iniciar o servidor de desenvolvimento
- Acesse [localhost:5173](http://localhost:5173/)

## Estrutura de pasta

```
├── public                   # Assets públicos
├── src                      # Código fonte
│   ├── assets               # Assets estáticos
│   │   ├── style.scss       # Estilos gerais
│   ├── components           # Componentes reutilizáveis
│   │   ├── tests            # Testes unitários dos componentes usando Vitest
│   ├── pages                # Componentes de página
│       ├── Home.vue         # Página inicial
│   ├── App.vue              # Componente raiz
│   └── main.js              # Entry point
├── index.html               # Arquivo de acesso do JS
├── package.json             # Dependências e scripts
├── vite.config.ts           # Configuração do Vite
└── README.md                # Documentação do projeto
```

## Tecnologias e Funcionalidades

### Tecnologias

O projeto inclui as seguintes tecnologias:

- Vue3 para reatividade
- Javascript para escalabilidade
- SASS para estruturação do CSS
- Vite para desenvolvimento e construção rápidos e eficientes
- Vitest para testes unitários

### Funcionalidades

O projeto possui as seguintes funcionalidades:

- Componentes Reutilizáveis
- Exibe um passo a passo para o usuário preencher

## Scripts

O projeto inclui os seguintes scripts:

Front:

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Builda o aplicativo pronto para produção
- `npm run lint`: Linta e corrige os arquivos
- `npm run test`: Roda os testes com Vitest

## Decisões técnicas

### Tecnologias

- SASS para estruturação de CSS pois permite organizar uma hierarquia, da mesma forma que os componentes à que ele se refere.

## Melhorias futuras

- CSS de forma geral, para mostrar carregamento de componentes e estilizá-los de forma a criar uma identidade visual
