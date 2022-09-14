import Vue from 'vue';
import Vuex from 'vuex';

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
        user: {
            id: 'dfdfs',
            registeredMeetups: ["aadsfhbkhlk1241"]
        }
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.unshift(payload);
        }
    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date:payload.date,
                id:Math.random().toString(36).slice(2)
            };
            commit('createMeetup', meetup)
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
        }
    }
}); 

