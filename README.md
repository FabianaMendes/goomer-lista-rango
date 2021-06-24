<h1 align="center">Challenge - Developer Frontend</h1>

<img align="center" alt="logo-goomer" src="./src/assets/logo.png">

<p align="center" >  
    <a href="#descrição">Descrição</a> • 
    <a href="#desafios">Desafios Encontrados</a> • 
    <a href="#status">Status</a> • 
    <a href="#como rodar o app">Como rodar o App localmente</a> • 
    <a href="#tecnologias">Tecnologias</a> • 
    <a href="#versão">Versão</a> • 
    <a href="#conclusão">Conclusão</a>
</p>


## Descrição
Desafio proposto pela *Goomer*
- Projeto iniciado em 17/jun/2021 e entregue em 24/jun/2021 (8 dias de desenvolvimento)
- Objetivo: Criar uma aplicação Web responsiva que consulte a API disponibilizada e exiba uma lista de restaurantes com seu status (aberto/fechado) e o cardápio de cada um deles, com as promoções disponíveis para o dia e horário atual.
- Foi utilizado [esse link](https://xd.adobe.com/spec/f6e71782-ebba-4573-6f7a-005a1a6d391f-80d6/grid) como referência para a construção da interface de usuário.
- [Api disponibilizada](https://challange.goomer.com.br/) 
- Você pode conferir o app em produção clicando [aqui!](https://goomer-lista-rango-fabimendes.netlify.app/) 



## Desafios Encontrados
Tive bastante dificuldade nesses três casos pois foi a primeira vez que apliquei soluções neste sentido, com mais variáveis, camadas de dados e sem constância entre elas. Mas foi um excelente aprendizado! Me inspirou a fazer mais projetos neste sentido para praticar!
- A busca e atualização constante dos status de aberto/fechado dos restaurantes.
- A busca e atualização por promoções ativas no momento.
- Necessidade de tratar dados da api, como ausência de fotos, ausência de horários de funcionamento e ausência de valores de refeições.



## Status

🚧⛔  Em construção - Não finalizado  ⛔🚧 

*Melhorias/Pendências*
- Necessário correção de bug em pop-ups que não estão sendo exibidos corretamente.
- Necessário correção na exibição das listas de categorias de cada restaurante, que abrem todas ao click enquanto deveria abrir só a correspondente.
- Necessário tratar ausência de fotos do backend (se acaso não possuir fotos do estabelecimento ou das refeições, exibir um padrão)
- Necessário melhora nas funções de captura de estado aberto/fechado e promoções
- Quando o cliente buscar pelo nome da refeição na página do restaurante, devolver a resposta fora das categorias
- TESTES! Claro... =)



## Como rodar o App localmente

- Abra o terminal de comando e clone o repositório:
``` $ git clone https://github.com/FabianaMendes/goomer-lista-rango ```
- Acesse a pasta do projeto pelo terminal: 
``` $ cd goomer-lista-rango ```
- Instale as dependências:
``` $ npm install ```
- Para abrir o projeto no seu editor de código: 
``` $ code . ``` 
- Para rodar a aplicação localmente:
``` $ npm start ```
_O servidor irá iniciar automaticamente na porta:3000 - acesse [http://localhost:3000](http://localhost:3000)
Para parar a aplicação pressione Ctrl + c_



## Tecnologias

As seguintes ferramentas foram utilizadas na construção desse projeto:

**Web-app ([React](https://pt-br.reactjs.org/))**
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Axios](https://www.npmjs.com/package/axios)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://www.npmjs.com/package/react-icons)

**Utilities**
- Editor: [Visual Studio Code](https://code.visualstudio.com/)
- Package Manager: [Npm](https://www.npmjs.com/)
- Google Fonts: [Montserrat](https://fonts.google.com/specimen/Montserrat?query=monts)



## Versão 
<p>Versão 1.0</p>


## Conclusão
No geral, foi muito divertido e muito prazeroso o desenvolvimento do desafio! No dia em que o recebi fiquei bastante empolgada e o entrego com a mesma sensação, embora não finalizado. Em alguns momentos do desenvolvimento desse projeto pensei que pudesse ser mais fluido se tivesse utilizado typescript. Creio que a tipagem poderia ter evitado muitos erros de console e quebras de execução. Quero refazê-lo em typescript para perceber as dificuldades e vantagens de cada linguagem.
Aprendi muita coisa nova. A cada desafio sinto uma evolução bem bacana. Em breve, após finalização do processo, quero dar continuidade e terminar o app, com todas as funcionalidades propostas, a título de aprendizado. 