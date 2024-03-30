function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DeviceSettingsStore: function() {
            return g
        },
        OfflineCacheStore: function() {
            return A
        },
        PersistedStore: function() {
            return S
        }
    });
    var r = n("123763"),
        o = n.n(r),
        i = n("757167"),
        a = n("242880"),
        u = n("929048");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t && f(e.prototype, t), n && f(e, n), e
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e, t, n) {
        return (E = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && I(e, t)
    }

    function y(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = p(e);
            if (t) {
                var a = p(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : l(n)
        }
    }
    var O = {
            _state: void 0,
            _version: void 0
        },
        T = null,
        S = function(e) {
            m(n, e);
            var t = h(n);

            function n(e, r) {
                var i;
                if (c(this, n), _(l(i = t.call(this, e, r)), "_version", null == i.getClass().migrations ? 0 : i.getClass().migrations.length), _(l(i), "callback", function(e) {
                        var t = i.getClass().persistKey;
                        i.persist(), n._writePromises.delete(t), n._writeResolvers.delete(t), e()
                    }), _(l(i), "throttledCallback", o()(function(e) {
                        return i.callback(e)
                    }, i.getClass().throttleDelay, {
                        leading: !1
                    })), "string" != typeof i.getClass().persistKey) throw Error("".concat(i.getClass().name, " initialized without a `persistKey`. Add one so we know where to save your stuff!"));
                if ("function" != typeof i.initialize) throw Error("".concat(i.getClass().name, " initialized without an `initialize` method. Add one that accepts the initial cached state."));
                if ("function" != typeof i.getState) throw Error("".concat(i.getClass().name, " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work."));
                return i.addChangeListener(function() {
                    return i.asyncPersist()
                }), i
            }
            return d(n, [{
                key: "getClass",
                value: function() {
                    return this.constructor
                }
            }, {
                key: "initializeFromState",
                value: function(e) {
                    this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (n.allPersistKeys.add(this.getClass().persistKey), this._isInitialized = !0)
                }
            }, {
                key: "initializeIfNeeded",
                value: function() {
                    if (!this._isInitialized) {
                        var e = Date.now();
                        n.allPersistKeys.add(this.getClass().persistKey);
                        var t = n.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations),
                            r = t.state,
                            o = t.requiresPersist;
                        this.initialize(r) && this.asyncPersist(), o && this.asyncPersist(), this._isInitialized = !0;
                        var a = Date.now() - e;
                        a > 5 && i.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", a)
                    }
                }
            }, {
                key: "asyncPersist",
                value: function() {
                    var e = this,
                        t = this.getClass(),
                        r = t.persistKey,
                        o = t.disableWrite,
                        i = t.throttleDelay;
                    if (n.disableWrites || o) return Promise.resolve(!1);
                    var a = n._writePromises.get(r);
                    return null != a ? a : (a = new Promise(function(t) {
                        var o = i > 0 ? function() {
                            return e.throttledCallback(t)
                        } : function() {
                            return e.callback(t)
                        };
                        n._writeResolvers.set(r, [t, requestIdleCallback(o, {
                            timeout: 500
                        })])
                    }), n._writePromises.set(r, a), a)
                }
            }, {
                key: "persist",
                value: function() {
                    var e = this.getClass().persistKey,
                        t = this.getState(),
                        n = this._version;
                    a.Storage.set(e, {
                        _state: t,
                        _version: n
                    })
                }
            }, {
                key: "clear",
                value: function() {
                    var e = this.getClass().persistKey;
                    a.Storage.remove(e)
                }
            }], [{
                key: "clearAll",
                value: function(e) {
                    return T = e, null == n._clearAllPromise && (n._clearAllPromise = new Promise(function(t) {
                        requestIdleCallback(function() {
                            n.clearPersistQueue(e), n.allPersistKeys.forEach(function(t) {
                                n.shouldClear(e, t) && a.Storage.remove(t)
                            }), u.Store.getAll().forEach(function(t) {
                                y(t, n) && n.shouldClear(e, t.getClass().persistKey) && (t._isInitialized = !1, t.initializeIfNeeded())
                            }), n._clearAllPromise = null, t()
                        }, {
                            timeout: 500
                        })
                    })), n._clearAllPromise
                }
            }, {
                key: "shouldClear",
                value: function(e, t) {
                    var r;
                    return (null === (r = e.omit) || void 0 === r ? !void 0 : !r.includes(t)) && ("all" === e.type || "user-data-only" === e.type && !n.userAgnosticPersistKeys.has(t))
                }
            }, {
                key: "clearPersistQueue",
                value: function(e) {
                    n._writeResolvers.forEach(function(t, r) {
                        var o, i, a = (i = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(o = t) || function(e, t) {
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
                            }(o, i) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return s(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                                }
                            }(o, i) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            u = a[0],
                            l = a[1];
                        n.shouldClear(e, r) && (n._writePromises.delete(r), n._writeResolvers.delete(r), cancelIdleCallback(l), u(!1))
                    }), n._writePromises.clear(), n._writeResolvers.clear()
                }
            }, {
                key: "getAllStates",
                value: function() {
                    return Promise.all(Array.from(n._writePromises.values())).then(function() {
                        var e = {};
                        return n.allPersistKeys.forEach(function(t) {
                            var n;
                            e[t] = (null !== (n = a.Storage.get(t)) && void 0 !== n ? n : O)._state
                        }), e
                    })
                }
            }, {
                key: "initializeAll",
                value: function(e) {
                    u.Store.getAll().forEach(function(t) {
                        if (y(t, n)) {
                            var r = t.getClass().persistKey;
                            e.hasOwnProperty(r) && t.initializeFromState(e[r])
                        }
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    T = null, u.Store.destroy(), n.clearPersistQueue({
                        type: "all"
                    }), n.allPersistKeys.clear(), n.userAgnosticPersistKeys.clear()
                }
            }, {
                key: "migrateAndReadStoreState",
                value: function(e, t) {
                    if (null != T && n.shouldClear(T, e)) return a.Storage.remove(e), {
                        state: void 0,
                        requiresPersist: !1
                    };
                    var r = null != n._clearAllPromise ? null : a.Storage.get(e),
                        o = null != r ? r : O,
                        i = o._state,
                        u = o._version,
                        s = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) {
                                    if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                }
                            }
                            return o
                        }(o, ["_state", "_version"]),
                        l = null == t ? 0 : t.length;
                    if (0 !== l && u !== l && null != t) {
                        var c = null != u ? u : 0,
                            f = i;
                        for (null == u && (f = s); c < l;) f = (0, t[c])(f), c++;
                        return {
                            state: f,
                            requiresPersist: !0
                        }
                    }
                    if (Object.values(s).length > 0) return {
                        state: s,
                        requiresPersist: !0
                    };
                    return {
                        state: i,
                        requiresPersist: !1
                    }
                }
            }]), n
        }(u.Store);
    _(S, "allPersistKeys", new Set), _(S, "userAgnosticPersistKeys", new Set), _(S, "_writePromises", new Map), _(S, "_writeResolvers", new Map), _(S, "_clearAllPromise", void 0), _(S, "disableWrites", !1), _(S, "persistKey", void 0), _(S, "disableWrite", !1), _(S, "throttleDelay", 0), _(S, "migrations", void 0);
    var v = function(e) {
            m(n, e);
            var t = h(n);

            function n() {
                return c(this, n), t.apply(this, arguments)
            }
            return d(n, [{
                key: "initializeFromState",
                value: function(e) {
                    return S.userAgnosticPersistKeys.add(this.getClass().persistKey), E(p(n.prototype), "initializeFromState", this).call(this, e)
                }
            }, {
                key: "initializeIfNeeded",
                value: function() {
                    return S.userAgnosticPersistKeys.add(this.getClass().persistKey), E(p(n.prototype), "initializeIfNeeded", this).call(this)
                }
            }, {
                key: "getState",
                value: function() {
                    return this.getUserAgnosticState()
                }
            }]), n
        }(S),
        g = function(e) {
            m(n, e);
            var t = h(n);

            function n() {
                return c(this, n), t.apply(this, arguments)
            }
            return n
        }(v),
        A = function(e) {
            m(n, e);
            var t = h(n);

            function n() {
                return c(this, n), t.apply(this, arguments)
            }
            return n
        }(v)
}