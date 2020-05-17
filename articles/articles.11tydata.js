/*
*
*	Scoped config for the notes folder
*	Automatically generate the navigation structure using computed value
*
*/ 


module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => data.parent,
    }
  },
  layout: 'article.njk',
  tags: 'article',
};