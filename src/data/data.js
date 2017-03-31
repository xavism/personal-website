let tabs = [{ title: 'Description', path: '/', icon: 'fa fa-vcard' },
            { title: 'Contact', path: '/contact', icon: 'fa fa-comments' },
            { title: 'Work Experience', path: '/work', icon: 'fa fa-briefcase' },
            { title: 'Technological Stack', path: '/stack', icon: 'fa fa-code-fork' },
            { title: 'Education', path: '/education', icon: 'fa fa-graduation-cap' },
            { title: 'Skills', path: '/skills', icon: 'fa fa-code' }]

let socialMedia = [{ title: 'Github', url: 'https://github.com/xavism', icon: 'fa fa-github' },
            { title: 'Twitter', url: 'https://twitter.com/XaviSanchezMir', icon: 'fa fa-twitter' },
            { title: 'Spotify', url: 'https://play.spotify.com/user/11131836955', icon: 'fa fa-spotify' }]

let homeheader = { title: { text: 'Welcome to my little space!', icon: 'fa is-danger fa-heart-o' }, subtitle: { text: 'Keep reading to know more about me', icon: 'fa is-primary fa-hand-peace-o' } }

let techheader = { title: { text: 'Take a quick look at my technolocical stack', icon: 'fa is-danger fa-code-fork' }, subtitle: { text: 'Now it\'s time to see an overview of what can I do. Here there some of the languages, frameworks and more that I\'ve been working with. Always trying to be trendy', icon: 'fa is-primary fa-hand-peace-o' } }

let cardInfo = {
  title: 'Xavi Sánchez Mir',
  subtitle: '@xavism',
  description: 'I am a very curious person, always trying to be informed about the cutting edge technology. Happiness above all, friend of my friends. I need to practice sport to be mentally healthy.',
  date: 'Birthday: 24 Dec. 1994',
  coverImage: 'Cover.png',
  profileImage: 'SocialProfile.png'
}

let technologicalStack = []
technologicalStack['vue'] = {
  title: 'Vue.js',
  description: 'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.',
  imgPath: '/static/technological/vue.png',
  class: 'vue'
}
technologicalStack['angular'] = {
  title: 'AngularJS',
  description: 'AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML\'s syntax to express your application\'s components clearly and succinctly. AngularJS\'s data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.',
  imgPath: '/static/technological/angular.png',
  class: 'angular'
}
technologicalStack['node'] = {
  title: 'Nodejs',
  description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.',
  imgPath: '/static/technological/node.png',
  class: 'node'
}
technologicalStack['npm'] = {
  title: 'npm',
  description: 'npm is the package manager for JavaScript and the world’s largest software registry. Use npm to install, share, and distribute code; manage dependencies in your projects; and share & receive feedback with others.',
  imgPath: '/static/technological/npm.png',
  class: 'npm'
}
technologicalStack['git'] = {
  title: 'Git',
  description: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
  imgPath: '/static/technological/git.png',
  class: 'git'
}
technologicalStack['js'] = {
  title: 'JavaScript',
  description: 'JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.',
  imgPath: '/static/technological/js.png',
  class: 'js'
}
technologicalStack['jquery'] = {
  title: 'jQuery',
  description: 'jQuery is a JavaScript library that allows web developers to add extra functionality to their websites. It is open source and provided for free under the MIT license. In recent years, jQuery has become the most popular JavaScript library used in web development.',
  imgPath: '/static/technological/jquery.png',
  class: 'jquery'
}
technologicalStack['bootstrap'] = {
  title: 'Bootstrap',
  description: 'Bootstrap is the most popular HTML, CSS, and JS framework in the world for building responsive, mobile-first projects on the web.',
  imgPath: '/static/technological/bootstrap.png',
  class: 'bootstrap'
}
technologicalStack['bulma'] = {
  title: 'Bulma',
  description: 'Bulma is an open source CSS framework based on Flexbox and built with Sass. It\'s 100% responsive, fully modular, and available for free.',
  imgPath: '/static/technological/bulma.png',
  class: 'bulma'
}
technologicalStack['gulp'] = {
  title: 'Gulp',
  description: 'Gulp is a tool that helps you out with several tasks when it comes to web development.',
  imgPath: '/static/technological/gulp.png',
  class: 'gulp'
}
technologicalStack['ubuntu'] = {
  title: 'Ubuntu Server',
  description: 'Ubuntu is an open source software platform that runs from the cloud, to the smartphone, to all your things',
  imgPath: '/static/technological/ubuntu.png',
  class: 'ubuntu'
}
technologicalStack['html'] = {
  title: 'HTML5',
  description: 'HTML 5 is a revision of the Hypertext Markup Language (HTML), the standard programming language for describing the contents and appearance of Web pages.',
  imgPath: '/static/technological/html.png',
  class: 'html'
}
technologicalStack['css'] = {
  title: 'CSS3',
  description: 'CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.',
  imgPath: '/static/technological/css.png',
  class: 'css'
}
technologicalStack['sass'] = {
  title: 'Sass',
  description: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. An extension of CSS that adds power and elegance to the basic language. It allows to use variables, nested rules, mixins, inline imports, and more.',
  imgPath: '/static/technological/sass.png',
  class: 'sass'
}
technologicalStack['webpack'] = {
  title: 'Webpack',
  description: 'Webpack is a popular module bundler, a tool for bundling application source code in convenient chunks and for loading that code from a server into a browser.',
  imgPath: '/static/technological/webpack.png',
  class: 'webpack'
}
technologicalStack['graphql'] = {
  title: 'GraphQL',
  description: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.',
  imgPath: '/static/technological/graphql.png',
  class: 'graphql'
}
technologicalStack['laravel'] = {
  title: 'Laravel',
  description: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar.',
  imgPath: '/static/technological/laravel.png',
  class: 'laravel'
}
technologicalStack['php'] = {
  title: 'PHP',
  description: 'PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language. ',
  imgPath: '/static/technological/php.png',
  class: 'php'
}
technologicalStack['mysql'] = {
  title: 'MySQL',
  description: 'MySQL is an open-source relational database management system (RDBMS).',
  imgPath: '/static/technological/mysql.png',
  class: 'mysql'
}
technologicalStack['net'] = {
  title: '.Net',
  description: '.NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library named Framework Class Library (FCL) and provides language interoperability (each language can use code written in other languages) across several programming languages.',
  imgPath: '/static/technological/net.png',
  class: 'net'
}
technologicalStack['csharp'] = {
  title: 'C#',
  description: 'C# is a programming language that is designed for building a variety of applications that run on the .NET Framework. C# is simple, powerful, type-safe, and object-oriented. The many innovations in C# enable rapid application development while retaining the expressiveness and elegance of C-style languages.',
  imgPath: '/static/technological/csharp.png',
  class: 'csharp'
}


let object = {
  code: `
    let me = {
      name: Xavi,
      lastName: Sánchez,
      languages: ['Spanish', 'Catalan', 'English', 'German'],
      universities: [{
        longName: 'Facultad dInformàtica de Barcelona',
        shortName: 'FIB',
        country: 'Spain'
        }, {
        longName: 'Karlsruher Institute für Technologie',
        shortName: 'KIT',
        country: 'Germany'
      }]
    }
    `,
  language: 'javascript'
}

export { tabs, socialMedia, cardInfo, object, homeheader, techheader, technologicalStack }
