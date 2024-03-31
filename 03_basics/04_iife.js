//IIFE - Immediately Invoked Function Expressions
(function tea(params) {
    // named IIFE
    console.log(`DB Connected`);
})();
// in iife, line is to be terminated by ';' in order to ask the compiler to stop
( (name) => {
    console.log(`DB Connected 2 ${name}`);
} )('Tanishq')