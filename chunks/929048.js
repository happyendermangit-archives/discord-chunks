function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Store: function() {
            return p
        }
    });
    var r, o = n("512722"),
        i = n.n(o),
        a = n("757167");
    n("179870");
    var u = n("574417"),
        s = n("533785");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var d = [],
        _ = !1,
        E = new Promise(function(e) {
            r = function() {
                e(), r = null
            }
        }),
        p = function() {
            var e, t, n;

            function o(e, t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, o), f(this, "_changeCallbacks", new u.ChangeListeners), f(this, "_reactChangeCallbacks", new u.ChangeListeners), f(this, "_syncWiths", []), f(this, "_dispatchToken", void 0), f(this, "_dispatcher", void 0), f(this, "_mustEmitChanges", void 0), f(this, "_isInitialized", !1), f(this, "__getLocalVars", void 0), f(this, "addChangeListener", this._changeCallbacks.add), f(this, "addConditionalChangeListener", this._changeCallbacks.addConditional), f(this, "removeChangeListener", this._changeCallbacks.remove), f(this, "addReactChangeListener", this._reactChangeCallbacks.add), f(this, "removeReactChangeListener", this._reactChangeCallbacks.remove), this._dispatcher = e, this._dispatchToken = this._dispatcher.createToken(), this.registerActionHandlers(null != t ? t : {}, n), d.push(this), _ && this.initializeIfNeeded()
            }
            return e = o, t = [{
                key: "registerActionHandlers",
                value: function(e, t) {
                    var n = this;
                    this._dispatcher.register(this.getName(), e, function(e) {
                        (n._changeCallbacks.hasAny() || n._reactChangeCallbacks.hasAny() || n._syncWiths.length > 0) && (s.default.markChanged(n), s.default.getIsPaused() && null != n._mustEmitChanges && n._mustEmitChanges(e) && s.default.resume(!1))
                    }, t, this._dispatchToken)
                }
            }, {
                key: "getName",
                value: function() {
                    var e;
                    return null !== (e = this.constructor.displayName) && void 0 !== e ? e : this.constructor.name
                }
            }, {
                key: "initializeIfNeeded",
                value: function() {
                    if (!this._isInitialized) {
                        var e = Date.now();
                        this.initialize(), this._isInitialized = !0;
                        var t = Date.now() - e;
                        t > 5 && a.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", t)
                    }
                }
            }, {
                key: "initialize",
                value: function() {}
            }, {
                key: "syncWith",
                value: function(e, t, n) {
                    var r = this;
                    if (this.waitFor.apply(this, function(e) {
                            if (Array.isArray(e)) return l(e)
                        }(o = e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(o) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return l(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                            }
                        }(o) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()), null != n) {
                        var o, i, a, u, c = 0,
                            f = function() {
                                c !== s.default.getChangeSentinel() && (c = s.default.getChangeSentinel(), !1 !== t() && r.emitChange())
                            };
                        i = null != n ? n : 0, a = f, u = null, f = 0 === i ? function() {
                            clearImmediate(u), u = setImmediate(a)
                        } : function() {
                            null == u && (u = setTimeout(function() {
                                try {
                                    a()
                                } finally {
                                    u = null
                                }
                            }, i))
                        }, e.forEach(function(e) {
                            return e.addChangeListener(f)
                        })
                    } else e.forEach(function(e) {
                        e._syncWiths.push({
                            func: t,
                            store: r
                        })
                    })
                }
            }, {
                key: "waitFor",
                value: function() {
                    for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var o = n.map(function(t, n) {
                        return (i()(null != t, "Store.waitFor(...) called with null Store at index ".concat(n, " for store ").concat(e.getName())), null != t._dispatcher) ? (i()(t._dispatcher === e._dispatcher, "Stores belong to two separate dispatchers."), t.getDispatchToken()) : null
                    });
                    this._dispatcher.addDependencies(this.getDispatchToken(), o.filter(function(e) {
                        return null != e
                    }))
                }
            }, {
                key: "emitChange",
                value: function() {
                    s.default.markChanged(this)
                }
            }, {
                key: "getDispatchToken",
                value: function() {
                    return this._dispatchToken
                }
            }, {
                key: "mustEmitChanges",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                        return !0
                    };
                    this._mustEmitChanges = e
                }
            }], n = [{
                key: "initialize",
                value: function() {
                    _ = !0, d.forEach(function(e) {
                        return e.initializeIfNeeded()
                    }), null != r && r()
                }
            }, {
                key: "destroy",
                value: function() {
                    d.length = 0, s.default.destroy()
                }
            }, {
                key: "getAll",
                value: function() {
                    return d
                }
            }], t && c(e.prototype, t), n && c(e, n), o
        }();
    f(p, "displayName", void 0), f(p, "initialized", E)
}