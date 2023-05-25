export const state = () => ({
  offers: {},
});
export const mutations = {
  SET_OFFER(state, data) {
    state.offers = data;
  },
};
export const actions = {
  async handleOffers({ commit }, data) {
    commit("SET_OFFER", data);
  },
};
