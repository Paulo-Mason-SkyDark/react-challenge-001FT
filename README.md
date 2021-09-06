# Jungle Devs - React Challenge #001

## Description
Objetivo do desafio : o objetivo deste desafio é dar uma ideia geral de como o React funciona e como você pode usá-lo para criar aplicativos reativos simples. Você implementará uma versão simplificada da visão 'Torne-se um Host Compartilhado Nanny' de Hapu. Os conceitos que você vai aplicar são:

JSX;
Componentes, adereços e estado;
Métodos de ciclo de vida;
Design responsivo com consultas de mídia CSS;
Chamadas de API;
Manipulação de erros;
Carregando estados;
SEO e acessibilidade;
Testes A / B;
Construções de produção.

# FERRAMENTAS
   React.Js
   Next.js
   Yarn
   Vercel
   styled-components
   
# Breve explicação das ferramentas ultiliadas
    ## React.Js
    O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.
    React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.
    Next.js, desenvolvido pela mesma equipe do Vercel , é a estrutura React mais poderosa para sites prontos para produção. Vercel é a maneira mais fácil de implantar aplicativos Next.js, com configuração zero.

    ## Next.Jss
    Next.js é um framework para React. O que isso quer dizer? O React é uma biblioteca Javascript para construção de interfaces e o Next é considerado um framework pois       adiciona várias funcionalidades em cima do React.
    Next.js oferece a melhor experiência de desenvolvedor com todos os recursos de que você precisa para produção: renderização híbrida estática e de servidor, suporte a       TypeScript, agrupamento inteligente, pré-busca de rota e muito mais. Nenhuma configuração necessária.
    Crie um aplicativo Next.js
    Para criar um aplicativo Next.js, abra seu terminal cdno diretório em que deseja criar o aplicativo e execute o seguinte comando:
    npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
    Sob o capô, ele usa a ferramenta chamada create-next-app, que inicializa um aplicativo Next.js para você. Ele usa esse modelo por meio da --examplebandeira.

    ## Yarn
    Yarn é um gerenciador de pacotes para o seu código. Ele permite que você use e compartilhe código (por exemplo, JavaScript) com outros desenvolvedores de todo o mundo.     O Yarn faz isso de forma rápida, segura e confiável para que você não precise se preocupar.

    Yarn permite que você use soluções de outros desenvolvedores para problemas diferentes, tornando mais fácil para você desenvolver seu software. Se tiver problemas
    você pode relatá-los ou contribuir de volta e, quando o problema for corrigido, você pode usar o Yarn para mantê-los atualizados.
    O código é compartilhado por meio de algo chamado de pacote (às vezes chamado de módulo ). Um pacote contém todo o código que está sendo compartilhado, bem como um
    package.jsonarquivo que descreve o pacote.

     ##Instalação
     Instalar via npm
     É recomendável instalar o Yarn por meio do gerenciador de pacotes npm , que vem junto com o Node.js quando você o instala em seu sistema.
     Depois de instalar o npm, você pode executar o seguinte para instalar e atualizar o Yarn:
     ## npm install --global yarn
     
     ## Vercel
     A Vercel é uma plataforma voltada para a hospedagem de aplicações de uma forma bem simples e rápida. Ela é conhecida por ser a empresa criadora do framework Next JS,
     voltado para o React. Como diz seu próprio site A Vercel é o melhor lugar para implantar qualquer aplicativo de front-end.
   
   
     ## styled-components
     
     styled-components é uma biblioteca para React e React Native que permite que você use estilos ao nível de componente na sua aplicação. Eles são escritos em uma
     mistura de JavaScript com CSS.
     
 # Example app with styled-components

This example features how you use a different styling solution than [styled-jsx](https://github.com/vercel/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-styled-components)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>


## Execute mode dev, production and test

#Usando npm
Há três comandos que você precisará saber quando o Next.js estiver instalado:

npm run dev para executar uma instância de desenvolvimento com recarga dinâmica, observação de arquivo e nova execução de tarefa.
npm run build para compilar seu projeto.
npm start para iniciar seu aplicativo no modo de produção.

#Usando yarn
## To run as dev:
 	yarn run dev
    	Starts the development server.

## to run as production
  	yarn run start
    	Runs the built app in production mode.

We suggest that you begin by typing:

  cd hapu
  yarn run dev or yarn start
  
  # Caso queira dockerizar o projeto
  
  Iniciando o projeto e as configurações de Desenvolvimento
  O primeiro passo é criar um projeto limpo com React. Eu vou chamá-lo de react-challenge-001FT. Após a criação, entre no diretório do projeto.
  npx create-react-app react-challenge-001FT
  cd react-challenge-001FT
  Agora, adicione o seguinte arquivo Dockerfile, na raíz do projeto:
  Inicio
  
  #Imagem de Origem
  FROM node:13-alpine
  #Diretório de trabalho(é onde a aplicação ficará dentro do container).
  WORKDIR /app
  #Adicionando `/app/node_modules/.bin` para o $PATH
  ENV PATH /app/node_modules/.bin:$PATH
  #Instalando dependências da aplicação e armazenando em cache.
  COPY package.json /app/package.json
  RUN npm install --silent
  RUN npm install react-scripts@3.3.1 -g --silent
  #Inicializa a aplicação
  CMD ["npm", "start"]
  
  Fim
  
  
  Silenciar a saída da instalação dos pacotes NPM com o --silent é uma coisa opcional, mas o uso dele não é bem visto pois ele oculta os problemas, caso estes ocorram,
  lembre-se disso, para não ficar perdendo tempo, caso os pacotes não venham a funcionar como esperado.
  Adicione ao projeto o arquivo .dockerignore , dentro dele adicione o diretório node_modules/ , este diretório não será enviado para dentro da Deamon do Docker, portanto
  isso acelerará o processo de construção da imagem.
  Agora é hora de buildar a imagem, vamos fazer isso e adicionar uma tag (-t) para ela:
  docker build -t sample:dev .
  
  Assim que o comando acima finalizar a construção da imagem, vamos criar o container a partir dela:
  docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev
  Ao rodar o comando acima, você deverá ver uma mensagem semelhante a esta:
  > react-challenge-001FT@0.1.0 start /app
  > react-scripts start
  ℹ ｢wds｣: Project is running at http://172.17.0.2/
  ℹ ｢wds｣: webpack output is served from /
  ℹ ｢wds｣: Content not from webpack is served from /app/public
  ℹ ｢wds｣: 404s will fallback to /index.html
  Starting the development server…
  Compiled successfully!
  You can now view react-challenge-001FT in the browser.
  Local: http://localhost:3000/
  On Your Network: http://172.17.0.2:3000/
  Note that the development build is not optimized.
  To create a production build, use yarn build.
  Veja que na mensagem acima, é informado que Your Network é o endereço: http://172.17.0.1:3000 , porém é importante lembrar que este é o endereço interno do container.
  Toda vez que um container é levantando, o Docker atribui a ele um IP, ele cria uma rede interna padrão, chamada bridge (ponte), pois é a rede que permite a comunicação
  interna entre os containers. A porta que foi exportada para a máquina local foi a 3001 pelo parâmentro -p. Portanto para acessar a aplicação faz-se da seguinte maneira:
  localhost:3001
  A página inicial já deverá funcionar
  
  
  # Como fazer o deploy para a vercel?
  
   Para fazer o deploy é bem simples! É possível fazer isso com apenas 3 passos. O deploy será realizado através de uma integração com o GitHub. Por isso é importante que
   você tenha uma conta criada no GitHub.

   1. Criar uma conta e fazer login
   Primeiramente você deve ir até no site da Vercel e clicar no menu na opção Sign Up. Nele vai ter 3 opções disponíveis que é login com o GitHub, Gitlab e Bitbucket.

   Como fazer login na Vercel

   No meu caso fiz login usando a minha conta do GitHub e essa é a tela inicial após ter efetuado o login.

   Tela inicial da Vercel

   2. Criar novo projeto e importar/clonar template
   O próximo passo é criarmos um novo projeto(caso você já tenha um projeto criado) ou então importar um projeto. Em ambos os casos você terá que importar o projeto ou
   então clonar um template já existente da Vercel.

   Importando projeto

   Selecione o projeto desejado clicando em Import. Após isso deve ser selecionado a conta para fazer o import do projeto.

   Selecionar projeto

   Agora você verá os arquivos do seu projeto e deverá selecionar em qual pasta está o código front-end que você quer utilizar.

   Selecionar Front-end

   No meu projeto de exemplo o código fonte estava na raiz mesmo, então só marquei a primeira opção e cliquei em continuar.

   3. Configuração do projeto
   O último passo é realizar as configurações do projeto. Nesta etapa você pode escolher o nome do seu projeto e baseado nisso seu domínio será criado.

   Configurações de Deploy

   Caso você tenha usado algum Framework, deverá selecionar ele no campo Framework Preset. Também é possível definir variáveis de ambiente definidas no .env do seu
   projeto. Se não tiver, basta deixar em branco.

   Como nesse projeto não usei nenhum Framework e não tinha nenhuma variável de ambiente, deixei marcada a opção Other e não preenchi os demais campos

   Clique em Deploy e após isso o site será processado por alguns instantes e já estará no ar

   Após isso clique em Visit para visualizar seu site. Simples né?!

   Site no ar

   Uma das melhores características da Vercel é o deploy automático, ou seja, toda vez que você fizer um commit no seu repositório a Vercel irá fazer o deploy automático
   do seu site.

   No final a URL do seu site ficará parecida com: https://simple-deploy.vercel.app/
  
  
  # Link para demostração do teste desenvolvido
  ## Homologação link: https://hapu-hkwj339gc-hapu.vercel.app/
  ## Produção link: https://hapu-m6vjjik3n-hapu.vercel.app/
  
