// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="rxjs" />
var WINDOW = window;
WINDOW.reactiveObservables = WINDOW.reactiveObservables || {};
var ReactiveStore = /** @class */ (function () {
    function ReactiveStore() {
    }
    ReactiveStore.instance = function () {
        return this._instance || (this._instance = new this());
    };
    // level here is needed to reinforce type K in return
    ReactiveStore.prototype.onLevel = function (_level) {
        return this;
    };
    ReactiveStore.prototype.save = function (name, observable) {
        if (WINDOW.reactiveObservables[name]) {
            throw new Error('event already registered: ' + name);
        }
        WINDOW.reactiveObservables[name] = observable;
        return this;
    };
    ReactiveStore.prototype.getObservable = function (name) {
        return WINDOW.reactiveObservables[name].asObservable();
    };
    ReactiveStore.prototype.getSubject = function (name) {
        return WINDOW.reactiveObservables[name];
    };
    return ReactiveStore;
}());

export { ReactiveStore };
