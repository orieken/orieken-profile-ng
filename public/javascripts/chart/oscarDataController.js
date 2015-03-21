
profileApp.controller("OscarDataController", function($scope) {
    $scope.oscarData = {
        firstName: 'Oscar',
        lastName: 'Rieken',
        email: 'oriekenjr@gmail.com',
        date: 'Thu Feb 27 2015 06:23:05',
        bio: "Oscar currently serves as a Software Engineer in Test.  He has over ten years of total experience with increasing responsibility as Quality Assurance Analyst and Manager, and is expert in functional, automated, and requirements testing and validation. He is experienced in testing not only the actual application, but the environment as well including server configuration testing, database testing etc.  Oscar is skilled in building and supporting test environments and testing farms, while establishing realistic, time-bound testing agendas and schedules that consistently deliver product releases on time and under budget. His proven interpersonal and communication skills developed while managing teams of testers and interfacing with focus groups, application development teams and IT management. Oscar comfortably fills the role of Quality Assurance Analyst, Business Test Analyst, Environmental Test Analyst, Technical Test Analyst, Test Executioner and Test Coordinator. ",
        githubUrl: "https://github.com/orieken",
        twitterUrl: "https://twitter.com/OscarRieken",
        twitterUserName: "OscarRieken",
        experience: [
            {
                companyName: 'Ionic Security',
                    dateStarted: '04.2015',
                    dateEnded: 'Current',
                details: 'Automation: User Stories, Regression, Infrastructure, Build and Deployment',
                techSpace: 'Lead Software Engineer in Test, Security; Atlanta, Ga',
//                full_details: "Oscar worked as the lead of the automation team establish best practices for automation, training manual testers on coding best practices as well as:" +
//                "-Building a sustainable automation framework for multiple complex systems, " +
//                "- Building up the automated regression testing, -Introducing in cycle automation of current features being developed. " +
//                "- Updating Application code to ensure ease of automation, -Training on BDD, Continuous Testing, Continuous Delivery, Continuous Deployment," +
//                "- Building of dynamic testing environments using Packer, Vagrant, Ansible and Powershell.",
                technologies: [
                    {techName: 'Ruby', techIcon: 'ruby-logo.png', techUrl: ''},
                    {techName: 'Java', techIcon: 'sun-microsystem-java-logo.png', techUrl: ''},
                    {techName: 'jRuby', techIcon: 'jruby.png', techUrl: ''},
                    {techName: 'Watir-Webdriver', techIcon: 'watir-so.png', techUrl: ''},
                    {techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo.png', techUrl: ''},
                    {techName: 'Selenium-Grid', techIcon: 'selenium-grid.png', techUrl: ''},
                    {techName: 'Rails', techIcon: 'rails.png', techUrl: ''},
                    {techName: 'jQuery', techIcon: 'jquery-logo.png', techUrl: ''},
                    {techName: 'JavaScript', techIcon: '32px-JavaScript-logo.png', techUrl: ''},
                    {techName: 'Nodejs', techIcon: 'nodejs.png', techUrl: ''},
                    {techName: 'Angularjs', techIcon: 'angularjs-logo.png', techUrl: ''},
                    {techName: 'GruntJS', techIcon: 'gruntjs_logo.png', techUrl: ''},
                    {techName: 'Bower', techIcon: 'bower_logo.png', techUrl: ''},
                    {techName: 'Sass', techIcon: 'sasslang_logo.png', techUrl: ''},
                    {techName: 'Handlebars', techIcon: 'handlebarsjs_logo.svg', techUrl: ''},
                    {techName: 'KarmajsJS', techIcon: 'karmajs_logo.png', techUrl: ''},
                    {techName: 'JasmineJS', techIcon: 'jasminejs_logo.png', techUrl: ''},
                    {techName: 'ChaiJS', techIcon: 'chaijs_logo.png', techUrl: ''},
                    {techName: 'MochaJS', techIcon: 'mochajs_logo.png', techUrl: ''},
                    {techName: 'MeteorJS', techIcon: 'logo-meteor.png', techUrl: ''},
                    {techName: 'Puppet', techIcon: 'PL_logo_vertical_RGB_sm.png', techUrl: ''},
                    {techName: 'Packer', techIcon: 'logo_vagrant.png', techUrl: ''},
                    {techName: 'Vagrant', techIcon: 'logo_vagrant.png', techUrl: ''},
                    {techName: 'Ansible', techIcon: 'ansible_logo.png', techUrl: ''},
                    {techName: 'GoLang', techIcon: 'golang_logo.jpg', techUrl: ''}
                ]
            },
            {
                companyName: 'Manheim',
                    dateStarted: '01.2012',
                    dateEnded: '04.2014',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                techSpace: 'Lead Quality Assurance Analyst, Automotive; Atlanta, Ga',
//                full_details: "Oscar worked as the lead part of the automation team of up to 15 Testers. Oscar's main focus is on helping establish best practices for automation, building a sustainable automation framework for multiple complex systems, building up the automated regression testing, as well as in cycle automation of current features being developed. Working with the development team to create solutions to ease the automation process, Also, introducing various practices such as BDD and continuous testing, Migrating legacy QTP regression that took over 40 hours to run to BDD style scenarios, using Cucumber and Watir-webdriver over Selenium Grid 2 Hub with over 200 headless vm's which take less than 20 minutes, Helping put together a continuos delivery model that takes less than 30 min from developer check in to deployable code, Removing the testing bottleneck and allowing Product owners to choose when they want to release into production",
                technologies: [
                    {techName: 'Ruby', techIcon: 'ruby-logo.png', techUrl: ''},
                    {techName: 'Java', techIcon: 'sun-microsystem-java-logo.png', techUrl: ''},
                    {techName: 'jRuby', techIcon: 'jruby.png', techUrl: ''},
                    {techName: 'Watir-Webdriver', techIcon: 'watir-so.png', techUrl: ''},
                    {techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo.png', techUrl: ''},
                    {techName: 'Selenium-Grid', techIcon: 'selenium-grid.png', techUrl: ''},
                    {techName: 'Rails', techIcon: 'rails.png', techUrl: ''},
                    {techName: 'jQuery', techIcon: 'jquery-logo.png', techUrl: ''},
                    {techName: 'Nodejs', techIcon: 'nodejs.png', techUrl: ''},
                    {techName: 'Angularjs', techIcon: 'angularjs-logo.png', techUrl: ''},
                    {techName: 'Meteorjs', techIcon: 'logo-meteor.png', techUrl: ''},
                    {techName: 'Puppet', techIcon: 'PL_logo_vertical_RGB_sm.png', techUrl: ''}
                ]
            },
            {
                companyName: 'ThoughtWorks',
                dateStarted: '07.2008',
                dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                techSpace: 'Global Software Consulting',
                //full_details: "Oscar worked as the lead part of a QA team of up to 4-6 testers. Oscar's main focus was on building up the automated framework and regression testing, as well as Integration testing with external systems (i.e. other front-facing systems, external third-party web applications, other internal applications) using various frameworks, working with the development team to verify bug fixes, Client and Server side monitoring, performance testing, and automated regression testing and updating templates to allow for easier testing.  Testing of Web services as well as a front facing retail site for products and services from other internal systems. Also, introducing various practices such as BDD and continuous testing, setting up automated mobile testing (iOS and Android) and regression testing for web based mobile and web based applications.",
                sub_projects: [
                    {
                        projectName: 'Quality Assurance Analyst, Online Retail; San Francisco, CA/Porto Alegre, RS Brazil',
                        projectDetails: 'Oscar worked as the lead part of a QA team of up to 6-8 QA Analysts and various client Analysts. Oscar\'s main focus was on building up the automated regression testing, as well as Integration testing with external systems (i.e. other front-facing systems, external third-party web applications, other internal applications) using various frameworks, working with the development team to verify bug fixes, Client and Server side monitoring, performance testing, and automated regression testing.  Testing of Web services as well as a front facing retail site for products and services from other internal systems. Also, introducing various practices such as BDD and continuous testing, and regression testing on a grid.'
                    },
                    {
                        projectName: 'Quality Assurance Analyst, Online Customer Experience; Calgary, AB',
                        projectDetails: 'Oscar worked as the lead part of a QA team of up to 3 QA Analysts and various client Analysts. Oscar\'s main focus was automated regression testing, as well as Integration testing with external systems (i.e. other front-facing systems, external third-party web applications, other internal applications), QA environment deployment, working with the development team to verify data migrations, Client and Server side monitoring, performance testing, and automated regression testing.  Testing of Web services as well as a front facing ecommerce site for products and services from other internal systems.'
                    },
                    {
                        projectName: 'Quality Assurance Analyst, Online Vehicle Exchange; Atlanta, GA',
                        projectDetails: 'Oscar worked as part of a QA team of up to 5 QA Analysts and various client Analysts. Oscar\'s main focus was functional and regression testing, as well as Integration testing with external systems (i.e. other front-facing systems, Microsoft CRM, other internal applications), QA environment deployment, working with the development team to verify data migrations, WebTrendz logging, Client and Server side monitoringEnvironment:  Ruby on Rails web application, MySQL, Microsoft CRM, Web services'
                    }

                ],
                technologies: [
                    {techName: 'Ruby', techIcon: 'ruby-logo.png', techUrl: ''},
                    {techName: 'Java', techIcon: 'sun-microsystem-java-logo.png', techUrl: ''},
                    {techName: 'jRuby', techIcon: 'jruby.png', techUrl: ''},
                    {techName: 'Watir-Webdriver', techIcon: 'watir-so.png', techUrl: ''},
                    {techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo.png', techUrl: ''},
                    {techName: 'Selenium-Grid', techIcon: 'selenium-grid.png', techUrl: ''},
                    {techName: 'Rails', techIcon: 'rails.png', techUrl: ''},
                    {techName: 'CSharp.Net', techIcon: 'csharp-logo.png', techUrl: ''},
                    {techName: 'jQuery', techIcon: 'jquery-logo.png', techUrl: ''}
                ]
            },
            {
                companyName: 'S3',
                    dateStarted: '07.2012',
                    dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                techSpace: 'Advertising Company',
                //full_details: 'Performed manual and automated Test Case Design, and built custom reporting tools for presenting results of daily automated regression tests. Designed, implemented, and maintained manual and automated test suites, generated test reports to summarize results of a test sweep, and performed support and maintenance of applications and data for proprietary applications. Troubleshot both server and client side applications, participated in user interface design/workflow design of applications, and performed Black and White box testing of applications.  Completed research and analysis, writing technical specs and training documentation, and performed Test Case Analysis, Design, Planning and execution.  Developed applications written in C# and using the .net 3.5 framework to aid in the automated testing and gathering of metrics for weekly status reports. Administration of the Test Automation Share Point Page',
                technologies: [
                    {techName: 'CSharp.Net', techIcon: 'csharp-logo.png', techUrl: ''},
                    {techName: 'VB.Net', techIcon: 'vb-net-logo.png', techUrl: ''},
                    {techName: 'QTP', techIcon: 'qtp-logo.png', techUrl: ''}
                ]
            },
            {
                companyName: 'VGT',
                    dateStarted: '07.2012',
                    dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                techSpace: 'Video Game Company',
                //full_details: 'Extracted test requirements from product functional specification documents, or via discussions with software developers and project managers.  Designed, implemented, and maintained manual and automated test suites, generated test reports to summarize results of a test sweep, and performed support and maintenance of applications and data for proprietary applications.Troubleshot both server and client side applications, participated in user interface design/workflow design of applications, and performed Black and White box testing of applications.  Completed research and analysis, writing technical specs and training documentation, and performed Test Case Analysis, Design, Planning and execution.',
                technologies: [
                    {techName: 'CSharp.Net', techIcon: 'csharp-logo.png', techUrl: ''},
                    {techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo.png', techUrl: ''},
                    {techName: 'QTP', techIcon: 'qtp-logo.png', techUrl: ''}
                ]
            },
            {
                companyName: 'OCA',
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                techSpace: 'Business Services Software Vendor ',
                full_details: 'Provide consultation and testing to the client’s software testing and marketing departments.  The company produces and distributes business process automation software utilized by Orthodontists, Pediadontists and General Practitioners to achieve a paperless office support environment. The applications suite comprises Accounts Receivable, Accounts Payable, General Ledger, Billing and Clinical Charting through terminals or tablet PCs, Ceph Tracking and a biometric fingerprint scanner utilized for patient check in, as well as time and attendance management. The applications are designed to run both batch and online',
                technologies: [
                    {techName: 'CSharp.Net', techIcon: 'csharp-logo.png', techUrl: ''},
                    {techName: 'VB.Net', techIcon: 'vb-net-logo.png', techUrl: ''},
                    {techName: 'Visual Basic', techIcon: 'vb6-logo.png', techUrl: ''},
                    {techName: 'Rational Robot', techIcon: 'rational-robot-logo.png', techUrl: ''}
                ]
            }
        ]
    }
});
