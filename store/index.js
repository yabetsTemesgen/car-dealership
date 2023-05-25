export const state = () => ({
  cars: {},
});
export const mutations = {
  SET_CAR(state, data) {
    state.cars = data;
  },
};

export const actions = {
  async newCar({ commit }, data) {
    commit('SET_CAR', data)
  },
};

export const getters = {};
