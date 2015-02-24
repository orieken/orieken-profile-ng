
profileApp.controller("OscarDataController", function($scope) {
    $scope.oscarData = {
        firstName: 'Oscar',
        lastName: 'Rieken',
        email: 'oriekenjr@gmail.com',
        date: 'Thu Jan 23 2014 23:59:05',
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.",
        githubUrl: "https://github.com/orieken",
        twitterUrl: "https://twitter.com/OscarRieken",
        twitterUserName: "OscarRieken",
        experience: [
            {
                companyName: 'Ionic Security',
//                    dateStarted: '01.2012',
//                    dateEnded: 'Current',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
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
//                    dateStarted: '01.2012',
//                    dateEnded: 'Current',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
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
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
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
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                technologies: [
                    {techName: 'CSharp.Net', techIcon: 'csharp-logo.png', techUrl: ''},
                    {techName: 'VB.Net', techIcon: 'vb-net-logo.png', techUrl: ''},
                    {techName: 'QTP', techIcon: 'qtp-logo.png', techUrl: ''}
                ]
            },
            {
                companyName: 'VGT',
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
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
