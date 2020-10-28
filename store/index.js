export const state = () => ({
  blogPosts: [],
  tags: [],
  workPosts: [],
  pages: {}
});

export const mutations = {
  SET_BLOG_POSTS(state, list) {
    state.blogPosts = list;
  },
  SET_PORTFOLIO_POSTS(state, list) {
    state.portfolioPosts = list;
  },
  SET_TAGS(state, list) {
    state.tags = list;
  },
  SET_PAGES(state, list) {
    list.forEach(item => state.pages[item.slug] = item)
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {

    let blogFiles = await require.context('~/assets/content/blog/', false, /\.json$/);
    let blogPosts = blogFiles.keys().map(key => {
      let res = blogFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    blogPosts = blogPosts.sort((firstPost, secondPost) => { return new Date(secondPost.date) - new Date(firstPost.date)})
    await commit('SET_BLOG_POSTS', blogPosts);

    let tagFiles = await require.context('~/assets/content/tag/', false, /\.json$/);
    let tags = tagFiles.keys().map(key => {
      let res = tagFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('SET_TAGS', tags);

    let portfolioFiles = await require.context('~/assets/content/portfolio/', false, /\.json$/);
    let portfolioPosts = portfolioFiles.keys().map(key => {
      let res = portfolioFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    portfolioPosts = portfolioPosts.filter(post => post.active)
    portfolioPosts = portfolioPosts.sort((firstPost, secondPost) => { return new Date(secondPost.date) - new Date(firstPost.date)})
    await commit('SET_PORTFOLIO_POSTS', portfolioPosts);

    let pageFiles = await require.context('~/assets/content/page/', false, /\.json$/);
    let pages = pageFiles.keys().map(key => {
      let res = pageFiles(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('SET_PAGES', pages);

  },
};