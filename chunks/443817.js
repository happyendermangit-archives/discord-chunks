function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComponentAction: function() {
            return p
        },
        ComponentDispatchGroupContext: function() {
            return d
        },
        ComponentDispatchGroupProvider: function() {
            return _
        },
        useComponentAction: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("836560"),
        i = n("120447");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e
    }
    var c = function() {
            function e() {
                var t, n, r;
                u(this, e), t = this, n = "emitter", r = new o.EventEmitter, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r
            }
            return l(e, [{
                key: "subscribe",
                value: function(e, t) {
                    i.ComponentDispatch.subscribe(e, t), this.emitter.on(e, t)
                }
            }, {
                key: "unsubscribe",
                value: function(e, t) {
                    i.ComponentDispatch.unsubscribe(e, t), this.emitter.off(e, t)
                }
            }, {
                key: "bumpDispatchPriority",
                value: function() {
                    var e = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var r, o = this.emitter.eventNames()[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                            var a = r.value,
                                u = !0,
                                s = !1,
                                l = void 0;
                            try {
                                for (var c, f = this.emitter.listeners(a)[Symbol.iterator](); !(u = (c = f.next()).done); u = !0) {
                                    var d = c.value;
                                    i.ComponentDispatch.resubscribe(a, d)
                                }
                            } catch (e) {
                                s = !0, l = e
                            } finally {
                                try {
                                    !u && null != f.return && f.return()
                                } finally {
                                    if (s) throw l
                                }
                            }
                        }
                    } catch (e) {
                        t = !0, n = e
                    } finally {
                        try {
                            !e && null != o.return && o.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                }
            }]), e
        }(),
        f = function() {
            function e() {
                u(this, e)
            }
            return l(e, [{
                key: "subscribe",
                value: function(e, t) {
                    i.ComponentDispatch.subscribe(e, t)
                }
            }, {
                key: "unsubscribe",
                value: function(e, t) {
                    i.ComponentDispatch.unsubscribe(e, t)
                }
            }, {
                key: "bumpDispatchPriority",
                value: function() {}
            }]), e
        }(),
        d = r.createContext(new f),
        _ = r.forwardRef(function(e, t) {
            var n = e.children,
                o = r.useRef(null);

            function i() {
                return null === o.current && (o.current = new c), o.current
            }
            return r.useImperativeHandle(t, i), r.createElement(d.Provider, {
                value: i()
            }, n)
        });

    function E(e) {
        var t = e.event,
            n = e.handler,
            o = r.useContext(d),
            i = r.useRef(n);
        r.useEffect(function() {
            i.current = n
        }, [n]);
        var u = null == n;
        return r.useEffect(function() {
            if (!u) {
                var e = function() {
                    for (var e, t, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    null === (t = i.current) || void 0 === t || t.call.apply(t, [i].concat(function(e) {
                        if (Array.isArray(e)) return a(e)
                    }(e = r) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                        }
                    }(e) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()))
                };
                return o.subscribe(t, e),
                    function() {
                        o.unsubscribe(t, e)
                    }
            }
        }, [o, t, u]), null
    }

    function p(e) {
        return E(e), null
    }
}