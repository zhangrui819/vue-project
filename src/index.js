import HelloWorld from './components/hello-world';
const components = {
    HelloWorld,
};

const tview = {
    ...components,
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(tview).forEach(key => {
        Vue.component(key, tview[key]);
    });

};

