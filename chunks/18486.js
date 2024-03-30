function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConfettiCannonContext: function() {
            return f
        },
        ConfettiCannonContextProvider: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("911765"),
        i = n("37295"),
        a = n("622780"),
        u = n("281767");

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function l(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }
    var c = {
            confettiCanvas: null,
            cannon: null,
            createConfetti: function() {},
            createConfettiAt: function() {},
            createMultipleConfetti: function() {
                return []
            },
            createMultipleConfettiAt: function() {
                return []
            },
            addClickListener: function() {
                return u.NOOP
            },
            removeClickListener: u.NOOP
        },
        f = r.createContext(c);

    function d(e) {
        var t = e.children,
            n = e.confettiCanvas,
            u = e.spriteCanvas,
            d = e.baseConfig,
            _ = e.addClickListener,
            E = e.removeClickListener,
            p = (0, o.useConfettiCannon)(n, u),
            m = (0, i.useStateFromStores)([a.default], function() {
                return a.default.useReducedMotion
            }),
            y = r.useMemo(function() {
                return m ? c : {
                    confettiCanvas: n,
                    cannon: p,
                    createConfetti: function(e, t) {
                        return p.createConfetti(s({}, d, e), t)
                    },
                    createConfettiAt: function(e, t, n, r) {
                        return p.createConfetti(s(l(s({}, d), {
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            }
                        }), n), r)
                    },
                    createMultipleConfetti: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return p.createMultipleConfetti(s({}, d, e), t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            o = arguments.length > 4 ? arguments[4] : void 0;
                        return p.createMultipleConfetti(s(l(s({}, d), {
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            }
                        }), n), r, o)
                    },
                    addClickListener: _,
                    removeClickListener: E
                }
            }, [_, d, p, n, m, E]);
        return r.createElement(f.Provider, {
            value: y
        }, t)
    }
}