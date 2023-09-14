# LigaMagic

## Visão Geral do Projeto

Este é um projeto que usa Vue3, Javascript, SASS, Vite e Vitest.

É uma stack de desenvolvimento web moderna que é rápida e eficiente para construir aplicativos web escaláveis.

## Preview

O projeto mostra a criação de componentes reutilizáveis, da mesma forma que uma biblioteca UI. A exibição se dá na tela inicial, utilizando um componente de passo a passo, em cada qual há outro componente dentro.
A seguir os componentes que foram criados:

### Telas

#### Button

#### Checkbox

#### Radio

#### TextField

#### DateTime

#### Stepper

##### Primário

##### Secundário

## Começando

Para iniciar o projeto, siga os passos abaixo:

- Clone o repositório em sua máquina local
- Execute `npm install` para instalar as dependências do projeto (utilizado node v20.1.0 e npm v9.6.6)
- Execute `npm run dev` para iniciar o servidor de desenvolvimento
- Acesse [localhost:5173](http://localhost:5173/)

## Estrutura de pasta (TODO)

```
├── public                   # Assets públicos
├── src                      # Código fonte
│   ├── api                  # API
│   ├── apimock              # API (nesse caso mock da API)
│   ├── assets               # Assets estáticos
│   │   ├── style.scss       # Estilos gerais
│   │   ├── images           # Pasta de imagens
│   ├── components           # Componentes reutilizáveis
│   ├── App.vue              # Componente raiz
│   └── main.ts              # Entry point
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
