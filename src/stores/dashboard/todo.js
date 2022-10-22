import { defineStore } from "pinia";

import * as s$todo from '@/services/dashboard/todo';

const d$todo = defineStore({
    id: 'todo',
    state: () => ({
        list: [],
    }),
    actions: {

    },
    getters: {
        
    },
});

export default d$todo;