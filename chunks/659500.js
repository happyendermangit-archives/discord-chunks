function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        ComponentDispatcher: function() {
            return n
        },
        ComponentDispatch: function() {
            return r
        }
    }), E("222007"), E("424973");
    var t = E("44170");
    E("704744");
    var o = E("605250");
    E("49111");
    class n {
        safeDispatch(e) {
            for (var _, E = arguments.length, t = Array(E > 1 ? E - 1 : 0), o = 1; o < E; o++) t[o - 1] = arguments[o];
            if (!this.hasSubscribers(e)) {
                let [E] = t, o = this._savedDispatches[e] = null !== (_ = this._savedDispatches[e]) && void 0 !== _ ? _ : [];
                return o.push(E), this
            }
            return this.dispatch(e, ...t)
        }
        dispatch(e, _) {
            return Date.now(), this.emitter.emit(e, _), this
        }
        dispatchToLastSubscribed(e, _) {
            Date.now();
            {
                let E = this.emitter.listeners(e);
                return E.length > 0 && E[E.length - 1](_), this
            }
        }
        hasSubscribers(e) {
            return this.emitter.listenerCount(e) > 0
        }
        _checkSavedDispatches(e) {
            let _ = this._savedDispatches[e];
            null != _ && (_.forEach(_ => {
                this.dispatch(e, _)
            }), this._savedDispatches[e] = void 0)
        }
        subscribe(e, _) {
            let E = this.emitter.listeners(e);
            return E.indexOf(_) >= 0 ? (new(0, o.default)("ComponentDispatchUtils").warn("ComponentDispatch.subscribe: Attempting to add a duplicate listener", e), this) : (this.emitter.on(e, _), this._checkSavedDispatches(e), this)
        }
        subscribeOnce(e, _) {
            return this.emitter.once(e, _), this._checkSavedDispatches(e), this
        }
        resubscribe(e, _) {
            let E = this.emitter.listeners(e);
            if (!E.includes(_)) return new(0, o.default)("ComponentDispatchUtils").warn("ComponentDispatch.resubscribe: Resubscribe without existing subscription", e), this;
            this.emitter.off(e, _), this.emitter.on(e, _)
        }
        unsubscribe(e, _) {
            return this.emitter.removeListener(e, _), this
        }
        reset() {
            return this.emitter.removeAllListeners(), this
        }
        dispatchKeyed(e, _) {
            for (var E = arguments.length, t = Array(E > 2 ? E - 2 : 0), o = 2; o < E; o++) t[o - 2] = arguments[o];
            return this.dispatch("".concat(e, "_").concat(_), ...t)
        }
        subscribeKeyed(e, _, E) {
            return this.subscribe("".concat(e, "_").concat(_), E)
        }
        unsubscribeKeyed(e, _, E) {
            return this.unsubscribe("".concat(e, "_").concat(_), E)
        }
        constructor() {
            this.emitter = new t.EventEmitter, this._savedDispatches = {}, this.emitter.setMaxListeners(100)
        }
    }
    let r = new n
}