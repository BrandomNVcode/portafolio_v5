import infCovid from '../assets/images/portfolio/info-covid.png';
import chat from '../assets/images/portfolio/socket-chat.png';
import modastore from '../assets/images/portfolio/modastore.png';
import postresApp from '../assets/images/portfolio/postres-app.png';
import coffe from '../assets/images/portfolio/coffee.png';


/*const projectsDataOLD = [
  {
    id: "rest-countries",
    img: 'RestCountries',
    name: "Rest Countires",
    stack: ["< HTML5 />" ,"< CSS3 />", "< React.js />"],
    src: "https://catherineisonline.github.io/rest-countries/",
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.",
  }
];*/

const projectsData = [
  {
      id: -1,
      img: infCovid,
      name: 'Infocovid',
      stack: ["< HTML5 />", "< CSS3 />", "< Laravel />"],
      fai: 'fa-solid fa-hand-holding-medical',
      year: '2020 - 2021',
      yColor: 'text-danger',
      yyColor: '#63b947',
      description: 'Proyecto web el cual tenía como objetivo principal informar sobre los precios de los medicamentos de las diferentes farmacéuticas del país. Además, brindaba información sobre la pandemia. Proyecto realizado con PHP en Laravel.',
      src: 'http://info-covid-sma.herokuapp.com/',
      faDemo: 'fa-brands fa-laravel',
      source: 'https://github.com/HuamanAngel/infocovid'
  },
  {
      id: 0,
      img: chat,
      name: 'Chat',
      stack: ["< HTML5 />", "< CSS3 />", "< NodeJs />", "< ExpressJs />", "< Sockets />"],
      fai: 'fa-regular fa-message',
      year: '2020 - 2021',
      yColor: 'text-danger',
      yyColor: '#63b947',
      description: 'Un Chat funcional utilizando sockets.',
      src: 'https://socket-chat-rzzs.onrender.com/',
      faDemo: 'fa-regular fa-message',
      source: 'https://github.com/BrandomNVcode/mysocket-chat'
  },
  {
      id: 1,
      img: modastore,
      name: 'ModaStore',
      stack: ["< RESTful API />", "< HTML5 />", "< CSS3 />", "< React.js />", "< Redux />"],
      fai: 'fa-solid fa-cart-shopping',
      year: '2022',
      yColor: 'text-success',
      yyColor: '#408ca9',
      description: 'Desarrollado en ReactJs. Un sitio web moderno de venta que muestra los productos de una tienda de ropa.',
      src: 'https://modastore.netlify.app/',
      faDemo: 'fa-brands fa-react',
      source: 'https://github.com/BrandomNVcode/modastore'
  },
  {
      id: 2,
      img: postresApp,
      name: 'App web de pedidos de Postres',
      stack: ["< Firebase />", "< HTML5 />", "< CSS3 />", "< React.js />", "< Redux />"],
      fai: 'fa-solid fa-basket-shopping',
      year: '2022',
      yColor: 'text-success',
      yyColor: '#838d67',
      description: 'Desarrollado en ReactJs y Firebase. Un sitio web moderno que muestra los productos a delivery de una postreria.',
      src: 'https://postres-lorem-ipsum.netlify.app/',
      faDemo: 'fa-brands fa-react',
      source: 'https://github.com/BrandomNVcode/postres-app'
  },
  {
      id: 3,
      img: coffe,
      name: 'MyCoffeeBlog',
      stack: ["< HTML5 />", "< CSS3 />", "< React.js />"],
      fai: 'fa-solid fa-mug-hot',
      year: '2021',
      yColor: 'text-success',
      yyColor: '#af0d5f',
      description: 'Blog elegante y responsivo hecho con Bootstrap 4 y ReactJs. Hecho para brindar información sobre recetas y preparación de café.',
      src: 'https://mycoffeeblogs.netlify.app/',
      faDemo: 'fa-brands fa-react',
      source: 'https://github.com/BrandomNVcode/coffee-blog'
  },
];

export { projectsData };
