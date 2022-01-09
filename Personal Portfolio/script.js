function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} 


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "liam", /*#__PURE__*/

    React.createElement("strong", null, "shaw")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "I do"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "software design"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " developement.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who I am"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Liam Shaw."), /*#__PURE__*/
    React.createElement("p", null, "I am a 17 year old software developer based in the vibrant city of Calcutta, India."), /*#__PURE__*/



    React.createElement("p", null, "I enjoy solving problems and making things efficient and easy to use. I love learning new things and have several hobbies including performing magic, coding, swimming, speed-solving the Rubik's Cube, playing football with friends, and attempting different physical and mental challenges. I rarely indulge in desserts but when I do, it's one of two things - chocolate eclairs or Bournvita with vanilla ice cream.")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What I do"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
    React.createElement("p", null, "I write code primarily in Java but am also familiar with Python, JavaScript, and C. I have designed games in JavaScript and developed web applications through the integration of Python, SQL, HTML, CSS, React, Flask, Ajax  & more. "), /*#__PURE__*/



    React.createElement("p", null, "Although Web Development is kind of my forte at the moment, I am deeply intrigued by Artificial Intelligence and am currently researching and acquiring more knowledge on it.")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "The Dream: "), /*#__PURE__*/
    React.createElement("p", null, "I am a certified web developer, but not a professional one. My dream is to be a software engineer at Google someday. Along my career journey, I also aspire to perform pro-bono software-related work for NGOs on the side and also develop applications that make everyday tasks easier."), /*#__PURE__*/

)))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Projects"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "These are a few of the projects that I have worked on and am incredibly proud of. You can view my freeCodeCamp Developer Certification",
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "https://www.freecodecamp.org/certification/fccc5b8395b-b8c5-455f-b17b-8ef1e803d252/responsive-web-design", target: "_blank", rel: "noopener noreferrer" }, "here"), ", and some of my other professionally-relevant certifications",
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "Certifications.html", target: "_blank", rel: "noopener noreferrer" }, "here."))), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    
    
    React.createElement(Project, {
      title: "Clumsy Bird",
      img: 'https://cdn.vox-cdn.com/thumbor/lOsLKrJuBuBBrhtVON3VjvFUaYw=/0x120:360x360/1200x800/filters:focal(0x120:360x360)/cdn.vox-cdn.com/uploads/chorus_image/image/28112431/screen480x480.0.jpeg',
      tech: "js css",
      link: "Games/Clumsy Bird",
      repo: "Games/Clumsy Bird" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML, CSS, JS, JSON, and MelonJS"), /*#__PURE__*/
    React.createElement("p", null, "A clone of the famous Flappy Bird game")), /*#__PURE__*/

    
    React.createElement(Project, {
      title: "Block Stacker",
      img: 'https://is5-ssl.mzstatic.com/image/thumb/Purple20/v4/32/83/50/3283508d-0d99-28cf-7e3a-3c98e8be0cad/source/512x512bb.jpg',
      tech: "css js",
      link: "https://codepen.io/Liam4Shaw/full/NWavprL",
      repo: "https://codepen.io/Liam4Shaw/pen/NWavprL" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML, SCSS, and TypeScript"), /*#__PURE__*/

    React.createElement("p", null, "A simple block stacking game I coded with the help of a fellow developer.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Snake",
      img: 'https://1.bp.blogspot.com/-dGTPQARmr7I/X3M4-NNMaxI/AAAAAAAAARA/kam3xobKPjs7WDrBBozdrrGfce6BNPEewCLcBGAsYHQ/s400/snake_image.png',
      tech: "css js",
      link: "Games/Snake",
      repo: "Games/Snake" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML, CSS, and JavaScript"), /*#__PURE__*/


    React.createElement("p", null, "A slightly more digital take on the classic snake game.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Ball Escape",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EOZEaCT-_ftbUZjcQx-gfXfTDQ_c9FuiRQ&usqp=CAU',
      tech: "js css",
      link: "Games/Ball Escape",
      repo: "Games/Ball Escape" }, /*#__PURE__*/

    React.createElement("small", null, "JS, CSS, and HTML."), /*#__PURE__*/
    React.createElement("p", null, "A simple keyboard ball control game where you direct the ball through the map and to the finish")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Piano",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCZ2lCKr0hpec38HYQnl6eiInDWiQ-hTWcQ&usqp=CAU',
      tech: "js css",
      link: "Games/Piano (js)",
      repo: "Games/Piano (js)" }, /*#__PURE__*/

    React.createElement("small", null, "Built in JavaScript with reference to" ,
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "https://www.youtube.com/watch?v=vjco5yKZpU8&t=929s", target: "_blank", rel: "noopener noreferrer" }, "WebDevSimplified's"), " YouTube video"), /*#__PURE__*/
    React.createElement("p", null, "A piano which can be played using the mouse or keyboard (z-m keys represent notes A-G; s,d,g,h,j keys represent the flat notes).")), /*#__PURE__*/


    React.createElement(Project, {
      title: "First portfolio page",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqL3WqxFnEyf5oW_kpyUnYAQD5HEcXJpN5w&usqp=CAU',
      tech: "css",
      link: "https://codepen.io/Liam4Shaw/full/jOBwWpz",
      repo: "https://codepen.io/Liam4Shaw/full/jOBwWpz" }, /*#__PURE__*/

    React.createElement("small", null, "Just HTML and CSS"), /*#__PURE__*/
    React.createElement("p", null, "My first personal portfolio website. I built it as part of problem for a course. It showcases a few other beginner projects I had to complete as well.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Technical Documentation Page",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTbpgLE8Ji5aUS4YwzHvNRpbV7gsDQcwWGQ&usqp=CAU',
      tech: "css",
      link: "https://codepen.io/Liam4Shaw/pen/WNpjxYp",
      repo: "https://codepen.io/Liam4Shaw/pen/WNpjxYp" }, /*#__PURE__*/

    React.createElement("small", null, "Used basic HTML and CSS"), /*#__PURE__*/
    React.createElement("p", null, "Designed a basic JavaScript Technical Documentation Page as part of a course submission")), /*#__PURE__*/


    React.createElement(Project, {
      title: "TicTacToe",
      img: 'https://e7.pngegg.com/pngimages/244/874/png-clipart-3d-tic-tac-toe-game-multiplayer-tictactoe-artificial-intelligence-toes-game-angle.png',
      tech: "js react css",
      link: "https://codepen.io/Liam4Shaw/full/rNGZrEb",
      repo: "https://codepen.io/Liam4Shaw/pen/rNGZrEb" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React, CSS and SVG."), /*#__PURE__*/
    React.createElement("p", null, "A TicTacToe game with a AI algorithm that I find rather unbeatable.")), /*#__PURE__*/))));







};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "", /*#__PURE__*/
    React.createElement("br", null), "Contact"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "liamshaw421", /*#__PURE__*/

    React.createElement("i", { className: "color" }, "@"), "gmail.com", /*#__PURE__*/), ":")), /*#__PURE__*/



    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://www.instagram.com/liam4shaw/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Instagram profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-instagram" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/Liam4Shaw?tab=repositories",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://codepen.io/Liam4Shaw",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));