module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksShortcode('log', function(value) {
        console.log( 'cheese' );
        console.log(value)
    });
};