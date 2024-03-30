function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n("898511"),
        l = n("629815");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = [],
        E = !1,
        p = void 0,
        m = _,
        y = {},
        I = null,
        h = void 0,
        O = 0,
        T = function(e) {
            m = (0, u.cloneDeep)(e);
            var t = {};
            m.forEach(function(e) {
                t[e.id] = e
            }), y = t
        },
        S = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
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

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "isFetching",
                get: function() {
                    return E
                }
            }, {
                key: "fetchError",
                get: function() {
                    return p
                }
            }, {
                key: "profileEffects",
                get: function() {
                    return m
                }
            }, {
                key: "tryItOutId",
                get: function() {
                    return I
                }
            }, {
                key: "canFetch",
                value: function() {
                    return null == h || Date.now() >= h
                }
            }, {
                key: "hasFetched",
                value: function() {
                    return null != h && null == p
                }
            }, {
                key: "getProfileEffectById",
                value: function(e) {
                    return null != e ? y[e] : void 0
                }
            }], c(r.prototype, o), i && c(r, i), u
        }(s.default.Store);
    i = "ProfileEffectStore", (o = "displayName") in(r = S) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new S(l.default, {
        USER_PROFILE_EFFECTS_FETCH: function() {
            E = !0
        },
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: function(e) {
            var t = e.profileEffects;
            E = !1, p = void 0, h = Date.now() + 3e5, O = 0, T(0 === t.length ? _ : t)
        },
        USER_PROFILE_EFFECTS_FETCH_FAILURE: function(e) {
            var t = e.error;
            E = !1, p = t, h = Date.now() + Math.min(6e4 * Math.pow(2, O), 36e5), ++O, T(_)
        },
        PROFILE_EFFECTS_SET_TRY_IT_OUT: function(e) {
            I = e.id
        },
        LOGOUT: function(e) {
            E = !1, T(_), I = null
        }
    })
}