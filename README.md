# Inove Soluções em Topografia - Site Institucional

## 📖 Descrição

Este projeto é o site institucional oficial da **Inove Soluções em Topografia**, uma empresa especializada em soluções de alta precisão para os setores de infraestrutura, mineração e agronegócio. O objetivo principal do site é estabelecer uma presença online moderna e eficaz, apresentando a empresa, seus serviços, portfólio de projetos e facilitando o contato de potenciais clientes.

**✨ Site ao vivo:** [**https://www.inovesolucoestopografia.com.br/**](https://www.inovesolucoestopografia.com.br/)


## ✨ Funcionalidades Implementadas

A aplicação é uma "single-page" com navegação suave entre as seções:

* **Header & Navegação:**
    * **Barra Superior (Top Bar):** Exibe informações de contato rápido (e-mail, WhatsApp) no desktop.
    * **Menu Principal:** Navegação fixa na base da seção Hero no desktop e um menu hambúrguer funcional no mobile.
    * **Menu Mobile:** O menu hambúrguer se transforma em um "X" e abre um painel em tela cheia com os links de navegação e as informações de contato. A rolagem da página é travada quando o menu está aberto para melhor usabilidade.

* **Seção Hero:**
    * Carrossel de tela cheia que mistura **vídeos e imagens** de fundo, com transição "fade" e autoplay.
    * O sistema carrega mídias diferentes para desktop (paisagem) e mobile (retrato) para garantir a melhor qualidade visual.

* **Seção Serviços:**
    * No desktop, os serviços são exibidos em um grid organizado.
    * No mobile, a seção se transforma em um **menu sanfona (accordion) interativo**, onde o usuário toca no título para expandir a descrição. Ícones representam cada serviço.

* **Seção Obras (Portfólio):**
    * Apresenta os projetos realizados em um **carrossel de cards**.
    * No desktop, cada card é clicável e abre um **modal (pop-up)** com a descrição completa do projeto.
    * No mobile, os cards exibem a descrição completa diretamente, sem modal.

* **Seção Tecnologias e Equipamentos:**
    * Destaca as ferramentas de ponta utilizadas pela empresa em um layout de cards.
    * No desktop, os cards são exibidos em um grid responsivo.
    * No mobile e em tablets, a seção se transforma em um **carrossel** para melhor navegação por toque.

* **Seção Contato:**
    * Layout de tela cheia no desktop com duas colunas: informações de contato à esquerda e um formulário à direita.
    * O formulário é funcional e integrado com o serviço **Formspree**, enviando as mensagens diretamente para o e-mail do cliente e exibindo uma mensagem de sucesso na tela sem redirecionamento.

* **Funcionalidades Globais:**
    * **Botão "Voltar ao Topo":** Aparece no canto da tela após o usuário rolar a página, permitindo um retorno rápido ao início.
    * **Otimização para SEO:** Implementação de metadados, dados estruturados (Schema.org) e boas práticas de semântica HTML.
    * **Design Totalmente Responsivo:** O layout se adapta a desktops, tablets e celulares.

## 🚀 Tecnologias e Bibliotecas

* **[Next.js](https://nextjs.org/)**: Framework React para produção, com otimizações de performance e SEO.
* **[React](https://reactjs.org/)**: Biblioteca para construção de interfaces de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Adiciona tipagem estática ao JavaScript.
* **CSS Padrão:** Estilização feita com arquivos `.css` para cada componente.
* **[Swiper.js](https://swiperjs.com/)**: Para a criação de todos os carrosséis interativos.
* **[React Icons](https://react-icons.github.io/react-icons/)**: Para todos os ícones utilizados no projeto.
* **[Formspree](https://formspree.io/)**: Serviço para gerenciar o envio do formulário de contato.

## 🏁 Começando

Siga estas instruções para configurar e rodar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

* **Node.js**: Versão 18.x ou superior.
* **npm** ou **Yarn**

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone git@github.com:seu-usuario/inove-topografia.git
    cd inove-topografia
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

### Rodando o Servidor de Desenvolvimento

Para iniciar o servidor local, que se atualizará automaticamente conforme você edita os arquivos:
```bash
npm run dev


Abra http://localhost:3000 no seu navegador para ver o resultado.

Scripts Disponíveis
npm run dev: Inicia o servidor de desenvolvimento.

npm run build: Cria a versão de produção otimizada do site.

npm run start: Inicia um servidor de produção local após o build.

☁️ Deploy
O projeto está configurado para deploy contínuo na Vercel. Qualquer push para a branch principal (main ou master) no GitHub irá automaticamente iniciar um novo deploy.# Test comment
