export default {

    // localStorage.setItem的封装
    set(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    },

    // localStorage.getItem的封装
    get(key) {
        let val = localStorage.getItem(key);
        // 先尝试着解析数据, 成功了就返回解析后的值, 不成功就原物返回
        try {
            val = JSON.parse(val);
        }finally {
            return val;
        }
    },

    // 清除所有本地存储的数据
    clear() {
        localStorage.clear();
    }

};
