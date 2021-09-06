# Jungle Devs - React Challenge #001

## Description
Challenge goal: The goal of this challenge is to give you a general idea of ​​how React works and how you can use it to create simple reactive applications. You will implement a simplified version of Hapu's 'Become a Nanny Shared Host' vision. The concepts you will apply are:

JSX;
Components, props and condition;
Life cycle methods;
Responsive design with CSS media queries;
API calls;
Error handling;
Loading states;
SEO and accessibility;
A / B tests;
Production Buildings.

# TOOLS
   React.Js
   next.js
   Yarn
   Vercel
   styled-components
   
# Brief explanation of the tools used
    ## React.Js
    React is an open source JavaScript library focused on creating user interfaces on web pages. It is maintained by Facebook, Instagram, other companies and a community
    of individual developers.
    React makes creating interactive UIs an easy task. Create simple views for each state in your application, and React will efficiently update and render only the
    necessary components as the data changes.
    Next.js, developed by the same team as Vercel , is the most powerful React framework for production-ready sites. Vercel is the easiest way to deploy Next.js apps, with
    zero configuration.

    ## Next.Jss
    Next.js is a framework for React. What does that mean? React is a Javascript library for building interfaces and Next is considered a framework because it adds several
    features on top of React.
    Next.js delivers the best developer experience with all the features you need for production: static and server hybrid rendering, TypeScript support, intelligent
    grouping, route prefetching and more. No configuration required.
    Create a Next.js app
    To create a Next.js application, open your cd terminal in the directory where you want to create the application and run the following command:
    npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
    Under the hood, it uses a tool called create-next-app, which launches a Next.js app for you. He uses this model through the --example flag.

    ## Yarn
    Yarn is a package manager for your code. It allows you to use and share code (eg JavaScript) with other developers around the world. Yarn does this quickly, securely
    and reliably so you don't have to worry.

    Yarn allows you to use other developers' solutions for different problems, making it easier for you to develop your software. if you have problems
    you can report them or contribute back, and when the problem is fixed, you can use Yarn to keep them up to date.
    Code is shared through something called a package (sometimes called a module). A package contains all the code being shared, as well as a
    package.jsonfile that describes the package.

     ##Installation
     Install via npm
     It is recommended to install Yarn via the npm package manager, which comes bundled with Node.js when you install it on your system.
     After installing npm, you can do the following to install and update Yarn:
     ## npm install --global yarn
     
     ## Vercel
     Vercel is a platform aimed at hosting applications in a very simple and fast way. She is known for being the creator of the Next JS framework,
     facing the React. As Your Own Website Says Vercel is the best place to deploy any front-end application.
   
   
     ## styled-components
     
     styled-components is a library for React and React Native that allows you to use component-level styles in your application. They are written in a
     mix of JavaScript with CSS.
     
 # Example app with styled-components

This example features how you use a different styling solution than [styled-jsx](https://github.com/vercel/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering) . Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org /docs/advanced-features/custom-app) component.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with- styled-components)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next. js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

Run [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs. com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components. com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

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
    first post
  </StyledLink>
)
```

</details>

## Execute mode dev, production and test

#Using npm
There are three commands you will need to know when Next.js is installed:

npm run dev to run a development instance with dynamic reload, file watch, and task rerun.
npm run build to build your project.
npm start to start your app in production mode.

#Using yarn
## To run as dev:
 yarn run dev
    Starts the development server.

## to run as production
  yarn run start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd hapu
  yarn run dev or yarn start
  
  # If you want to docker the project
  
  Starting the Project and Development Settings
  The first step is to create a clean project with React. I will call it react-challenge-001FT. After creation, enter the project directory.
  npx create-react-app react-challenge-001FT
  react-challenge-001FT cd
  Now add the following Dockerfile file to the project root:
  Start
  
  #Source Image
  FROM node:13-alpine
  #Work directory (this is where the application will be inside the container).
  WORKDIR /app
  #Adding `/app/node_modules/.bin` to $PATH
  ENV PATH /app/node_modules/.bin:$PATH
  #Installing application dependencies and caching.
  COPY package.json /app/package.json
  RUN npm install --silent
  RUN npm install react-scripts@3.3.1 -g --silent
  #Start the application
  CMD ["npm", "start"]
  
  The end
  
  
  Silencing the output of installing NPM packages with --silent is an optional thing, but its use is not well regarded as it hides problems, should they occur,
  keep this in mind, so you don't waste time if the packages don't work as expected.
  Add the .dockerignore file to the project, inside it add the node_modules/ directory, this directory will not be sent into the Docker Deamon, so
  this will speed up the image building process.
  Now it's time to build the image, let's do that and add a tag (-t) to it:
  docker build -t sample:dev .
  
  As soon as the command above finishes building the image, let's create the container from it:
  docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev
  When running the above command, you should see a message similar to this one:
  > react-challenge-001FT@0.1.0 start /app
  > react-scripts start
  ℹ ｢wds｣: Project is running at http://172.17.0.2/
  ℹ ｢wds｣: webpack output is served from /
  ℹ ｢wds｣: Content not from webpack is served from /app/public
  ℹ ｢wds｣: 404s will fallback to /index.html
  Starting the development server…
  Compiled successfully!
  You can now view react-challenge-001FT in the browser.
  Location: http://localhost:3000/
  On Your Network: http://172.17.0.2:3000/
  Note that the development build is not optimized.
  To create a production build, use yarn build.
  See that in the message above, it is informed that Your Network is the address: http://172.17.0.1:3000 , but it is important to remember that this is the internal
  address of the container.
  Every time a container is raised, the Docker assigns it an IP, it creates a standard internal network, called a bridge, as it is the network that allows communication
  between the containers. The port that was exported to the local machine was 3001 by parameter -p. Therefore, to access the application, proceed as follows:
  localhost:3001
  The homepage should now work
  
  
  # How to deploy to vercel?
  
   To deploy it is very simple! It is possible to do this with just 3 steps. The deployment will be done through an integration with GitHub. That's why it's important that
   you have an account created on GitHub.

   1. Create an account and login
   First you must go to Vercel's website and click on the Sign Up option in the menu. There you will have 3 options available, which is login with GitHub, Gitlab and
   Bitbucket.

   How to log in to Vercel

   In my case I logged in using my GitHub account and this is the splash screen after logging in.

   Vercel Home Screen

   2. Create new project and import/clone template
   The next step is to create a new project (if you already have a project created) or import a project. In both cases you will have to import the project or
   then clone an existing Vercel template.

   Importing project

   Select the desired project by clicking Import. After that, the account must be selected to import the project.

   Select project

   Now you will see your project files and you will have to select which folder is the front-end code you want to use.

   Select Front End

   In my example project the source code was at the root itself, so I just checked the first option and clicked continue.

   3. Project configuration
   The last step is to carry out the project settings. In this step you can choose your project name and based on that your domain will be created.

   Deploy Settings

   If you have used any Framework, you must select it in the Framework Preset field. You can also define environment variables defined in your .env
   project. If not, just leave it blank.

   As in this project I didn't use any Framework and didn't have any environment variable, I left the option Other checked and didn't fill in the other fields

   Click on Deploy and after that the site will be processed for a few moments and will be online.

   After that click on Visit to view your site. Simple right?!

   Website on air

   One of Vercel's best features is automatic deploy, that is, every time you commit to your repository, Vercel will automatically deploy
   from your website.

   At the end your website URL will look like: https://simple-deploy.vercel.app/
  
  
  # Link to demo of the developed test
  ## Homologation link: https://hapu-hkwj339gc-hapu.vercel.app/
  ## Production link: https://hapu-m6vjjik3n-hapu.vercel.app/
