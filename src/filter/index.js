import DateFilter from './date.js';
import JsonFilter from './json.js';

export default {
    install(Vue) {
        Vue.filter('date', DateFilter);
        Vue.filter('json', JsonFilter);
    }
};
