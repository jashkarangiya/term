$('body').terminal({
    founder: function() {
        this.echo('Hello,  Wellcome to this terminal.');
        // this string can be written with ES6 - uncomment to test
        // this.echo(`Hello, ${what}. Wellcome to this terminal.`);
    }
}, {
    greetings: 'My First Web Terminal'
});

github('jcubic/jquery.terminal');