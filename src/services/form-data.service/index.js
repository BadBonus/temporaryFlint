const FormDataService = {
    install(Vue) {
        Vue.prototype.$fdService = {
            fill: (object) => {
                const fd = new FormData();
                for(let key in object) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (object.hasOwnProperty(key)) {
                        if (Array.isArray(object[key])) {
                            object[key].forEach( item => {
                                fd.append(`${key}[]`, JSON.stringify(item))
                            } )
                        } else {
                            fd.append(key, object[key])
                        }
                    }
                }
                return fd;
            },
            reset: (object) => {
                for(let key in object) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (object.hasOwnProperty(key)) {
                        if (Array.isArray(object[key])) {
                            object[key] = []
                        } else {
                            if(typeof object[key] === 'string') {
                                object[key] = '';
                            } else {
                                object[key] = null
                            }
                        }
                    }
                }
            },
            subscribers(array, message) {
                const fd = new FormData();
                array.forEach( item => {
                    fd.append('subscribers[]', item)
                });
                fd.append('message', message);
                return fd;
            }
        }
    }
};

export default (FormDataService);
