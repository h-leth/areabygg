module.exports = config => {
  config.addPassthroughCopy('./src/images/')
  config.addPassthroughCopy('./src/css/')
  config.addPassthroughCopy('./src/.htaccess')
  return {
    markdownTemplateEngine: 'njk',
    dataTemplareEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
