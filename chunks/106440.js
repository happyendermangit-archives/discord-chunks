function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        State: function() {
            return o
        }
    });
    var r, o, i, a = n("898511"),
        u = n("629815"),
        s = n("884876");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                c(e, t, n[t])
            })
        }
        return e
    }

    function _(e, t) {
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

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {}))[r.NotResolved = 0] = "NotResolved", r[r.Resolving = 1] = "Resolving", r[r.Resolved = 2] = "Resolved", r[r.Invalid = 3] = "Invalid";
    var p = 0,
        m = null,
        y = {},
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }(I, e);
            var t, n, r, o, i, a = (t = I, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = f(t);
                if (n) {
                    var a = f(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function I() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, I), a.apply(this, arguments)
            }
            return r = I, o = [{
                key: "getCurrentBuildOverride",
                value: function() {
                    return 0 === p && (p = 1, (0, s.getBuildOverride)().then(function(e) {
                        u.default.dispatch({
                            type: "CURRENT_BUILD_OVERRIDE_RESOLVED",
                            overrides: e
                        })
                    })), {
                        state: p,
                        overrides: m
                    }
                }
            }, {
                key: "getBuildOverride",
                value: function(e) {
                    return ! function(e) {
                        if (!(e in y)) {
                            var t = (0, s.validateURL)(e);
                            if (null == t) {
                                y = _(d({}, y), c({}, e, {
                                    url: e,
                                    state: 3
                                }));
                                return
                            }
                            y = _(d({}, y), c({}, e, {
                                url: e,
                                validatedURL: t.url,
                                payload: String(t.payload),
                                state: 1
                            }));
                            (0, s.getBuildOverrideMeta)(t.url).then(function(t) {
                                u.default.dispatch({
                                    type: "BUILD_OVERRIDE_RESOLVED",
                                    url: e,
                                    override: t
                                })
                            })
                        }
                    }(e), y[e]
                }
            }, {
                key: "getBuildOverrides",
                value: function() {
                    return y
                }
            }], l(r.prototype, o), i && l(r, i), I
        }(a.default.Store);
    c(I, "displayName", "BuildOverrideStore"), t.default = new I(u.default, {
        BUILD_OVERRIDE_RESOLVED: function(e) {
            var t = e.url,
                n = e.override;
            y = _(d({}, y), c({}, t, _(d({}, y[t]), {
                state: null == n ? 3 : 2,
                override: n
            })))
        },
        CURRENT_BUILD_OVERRIDE_RESOLVED: function(e) {
            var t = e.overrides;
            p = 2, m = t
        }
    })
}