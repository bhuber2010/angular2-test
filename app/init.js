System.config({
    baseURL: '/',
    paths: { '*': '*.js' }
});
System['import'] = function (name, options) {
    return System.originalSystem.import.call(this, name, options).then(function (module) {
        return module;
    });
};
System.import('angular2/router').then(function (m) {
    System.defined['angular2/router'] = { normalizedDeps: [] };
    System.defined['angular2/router'].module = {};
    System.defined['angular2/router'].module.exports = m;
});
System.import('app')
    .catch(function (e) { return console.error(e, 'Report this error at https://github.com/mgechev/angular2-seed/issues'); });
//# sourceMappingURL=init.js.map