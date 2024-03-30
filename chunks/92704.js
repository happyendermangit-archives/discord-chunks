function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("776982");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                s(e, t, n[t])
            })
        }
        return e
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = !1,
        _ = Object.freeze({
            userAffinities: [],
            affinityUserIds: new Set,
            lastFetched: 0
        }),
        E = Object.freeze({
            userAffinitiesMap: new Map,
            affinityUserIds: new Set
        }),
        p = c({}, _),
        m = c({}, E);

    function y() {
        var e = new Map(p.userAffinities.filter(function(e) {
                var t = e.user_id;
                return !a.default.isBlocked(t)
            }).map(function(e) {
                return [e.user_id, e]
            })),
            t = new Set(e.keys());
        m = {
            userAffinitiesMap: e,
            affinityUserIds: t
        }
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(c, e);
        var t, n, r, o, i, s = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var a = l(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function c() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), s.apply(this, arguments)
        }
        return r = c, o = [{
            key: "initialize",
            value: function(e) {
                this.waitFor(a.default), null != e && (p.userAffinities = e.userAffinities, p.lastFetched = e.lastFetched, y()), this.syncWith([a.default], y)
            }
        }, {
            key: "needsRefresh",
            value: function() {
                return Date.now() - p.lastFetched > 864e5
            }
        }, {
            key: "getFetching",
            value: function() {
                return d
            }
        }, {
            key: "getState",
            value: function() {
                return p
            }
        }, {
            key: "getUserAffinities",
            value: function() {
                return p.userAffinities
            }
        }, {
            key: "getUserAffinity",
            value: function(e) {
                return m.userAffinitiesMap.get(e)
            }
        }, {
            key: "getUserAffinitiesUserIds",
            value: function() {
                return m.affinityUserIds
            }
        }], u(r.prototype, o), i && u(r, i), c
    }(o.default.PersistedStore);
    s(I, "displayName", "UserAffinitiesStore"), s(I, "persistKey", "UserAffinitiesStore"), s(I, "migrations", [function(e) {
        return null
    }]), t.default = new I(i.default, {
        LOAD_USER_AFFINITIES_SUCCESS: function(e) {
            var t, n = e.affinities;
            p.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], p.lastFetched = Date.now(), y(), d = !1
        },
        LOAD_USER_AFFINITIES: function() {
            d = !0
        },
        LOAD_USER_AFFINITIES_FAILURE: function() {
            d = !1
        },
        LOGOUT: function() {
            p = c({}, _), m = c({}, E)
        }
    })
}