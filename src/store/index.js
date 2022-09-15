import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
                id: 'afajfjadfaadfa323',
                title: 'Meetup in New York',
                date: new Date()
            },
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
                id: 'aadsfhbkhlk1241',
                title: 'Meetup in Paris',
                date: new Date()
            }
        ],
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        setLoadedMeetups(state, payload) {
            state.loadedMeetups = payload
        },
        createMeetup(state, payload) {
            state.loadedMeetups.unshift(payload);
        },
        setUser(state, payload) {
            state.user = payload
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        }


    },
    actions: {
        loadedMeetups({ commit }) {
            commit("setLoading", true)
            firebase.database().ref("meetups").once("value")
                .then((data) => {
                    const meetups = [];
                    const obj = data.val();
                    for (let key in obj) {
                        meetups.push({
                            id: key,
                            title: obj[key].title,
                            description: obj[key].description,
                            imageUrl: obj[key].imageUrl,
                            date: obj[key].date,
                            creatorId: obj[key].creatorId
                        })
                    }
                    commit("setLoadedMeetups", meetups)
                    commit("setLoading", false)
                })
                .catch((error) => {
                    console.log(error)
                    commit("setLoading", false)
                })
        },
        createMeetup({ commit }, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date.toISOString()
            };
            firebase.database().ref("meetups").push(meetup)
                .then((data) => {
                    console.log(data);
                    const key = data.key;
                    commit('createMeetup', {
                        ...meetup, id: key
                    })
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        signUserUp({ commit }, payload) {
            commit('clearError')
            commit('setLoading', true);
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then((user) => {
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    }
                    commit('setUser', newUser);
                    commit('setLoading', false);

                })
                .catch((error) => {
                    commit('setError', error.message)
                    commit('setLoading', false);
                })
        },
        signUserIn({ commit }, payload) {
            commit('clearError')
            commit('setLoading', true);
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then((user) => {
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    }
                    commit('setUser', newUser)
                    commit('setLoading', false);

                })
                .catch((error) => {
                    commit('setError', error.message)
                    commit('setLoading', false);

                })
        },
        clearError({ commit }) {
            commit('clearError')
        }
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date;
            })
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        user(state) {
            return state.user
        },
        error(state) {
            return state.error
        },
        loading(state) {
            return state.loading
        }
    }
});

