function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComponentDispatch: function() {
            return f
        },
        ComponentDispatcher: function() {
            return c
        }
    });
    var r = n("836560");
    n("179870");
    var o = n("35523");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n("281767");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return function(e) {
            if (Array.isArray(e)) return i(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || l(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e, t) {
        if (e) {
            if ("string" == typeof e) return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
        }
    }
    var c = function() {
            var e, t, n;

            function i() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, i), u(this, "emitter", new r.EventEmitter), u(this, "_savedDispatches", {}), this.emitter.setMaxListeners(100)
            }
            return e = i, t = [{
                key: "safeDispatch",
                value: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    if (!this.hasSubscribers(e)) {
                        var o, i, a, u = (i = 1, function(e) {
                            if (Array.isArray(e)) return e
                        }(o = n) || function(e, t) {
                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    u = !0, r = e
                                } finally {
                                    try {
                                        !a && null != o.return && o.return()
                                    } finally {
                                        if (u) throw r
                                    }
                                }
                                return i
                            }
                        }(o, i) || l(o, i) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())[0];
                        return (this._savedDispatches[e] = null !== (a = this._savedDispatches[e]) && void 0 !== a ? a : []).push(u), this
                    }
                    return this.dispatch.apply(this, [e].concat(s(n)))
                }
            }, {
                key: "dispatch",
                value: function(e, t) {
                    return Date.now(), this.emitter.emit(e, t), this
                }
            }, {
                key: "dispatchToLastSubscribed",
                value: function(e, t) {
                    Date.now();
                    var n = this.emitter.listeners(e);
                    return n.length > 0 && n[n.length - 1](t), this
                }
            }, {
                key: "hasSubscribers",
                value: function(e) {
                    return this.emitter.listenerCount(e) > 0
                }
            }, {
                key: "_checkSavedDispatches",
                value: function(e) {
                    var t = this,
                        n = this._savedDispatches[e];
                    null != n && (n.forEach(function(n) {
                        t.dispatch(e, n)
                    }), this._savedDispatches[e] = void 0)
                }
            }, {
                key: "subscribe",
                value: function(e, t) {
                    return this.emitter.listeners(e).indexOf(t) >= 0 ? (new o.default("ComponentDispatchUtils").warn("ComponentDispatch.subscribe: Attempting to add a duplicate listener", e), this) : (this.emitter.on(e, t), this._checkSavedDispatches(e), this)
                }
            }, {
                key: "subscribeOnce",
                value: function(e, t) {
                    return this.emitter.once(e, t), this._checkSavedDispatches(e), this
                }
            }, {
                key: "resubscribe",
                value: function(e, t) {
                    if (!this.emitter.listeners(e).includes(t)) return new o.default("ComponentDispatchUtils").warn("ComponentDispatch.resubscribe: Resubscribe without existing subscription", e), this;
                    this.emitter.off(e, t), this.emitter.on(e, t)
                }
            }, {
                key: "unsubscribe",
                value: function(e, t) {
                    return this.emitter.removeListener(e, t), this
                }
            }, {
                key: "reset",
                value: function() {
                    return this.emitter.removeAllListeners(), this
                }
            }, {
                key: "dispatchKeyed",
                value: function(e, t) {
                    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
                    return this.dispatch.apply(this, ["".concat(e, "_").concat(t)].concat(s(r)))
                }
            }, {
                key: "subscribeKeyed",
                value: function(e, t, n) {
                    return this.subscribe("".concat(e, "_").concat(t), n)
                }
            }, {
                key: "unsubscribeKeyed",
                value: function(e, t, n) {
                    return this.unsubscribe("".concat(e, "_").concat(t), n)
                }
            }], a(e.prototype, t), n && a(e, n), i
        }(),
        f = new c
}