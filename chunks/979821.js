function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("281767");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function y(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var I = h();

    function h() {
        return {
            recentCustomStatuses: [],
            currentDefaultStatus: null
        }
    }
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(c, e);
        var t, n, a, u, s, l = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
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
            }(this, c), l.apply(this, arguments)
        }
        return a = c, u = [{
            key: "initialize",
            value: function(e) {
                I = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            E(e, t, n[t])
                        })
                    }
                    return e
                }({}, h(), null != e ? e : {})
            }
        }, {
            key: "getState",
            value: function() {
                return I
            }
        }, {
            key: "getCurrentHangStatus",
            value: function() {
                return r
            }
        }, {
            key: "getCustomHangStatus",
            value: function() {
                return o
            }
        }, {
            key: "getRecentCustomStatuses",
            value: function() {
                return I.recentCustomStatuses
            }
        }, {
            key: "getCurrentDefaultStatus",
            value: function() {
                return I.currentDefaultStatus
            }
        }, {
            key: "getHangStatusActivity",
            value: function() {
                return null == r ? null : i
            }
        }], _(a.prototype, u), s && _(a, s), c
    }(l.default.PersistedStore);
    E(O, "displayName", "HangStatusStore"), E(O, "persistKey", "HangStatusStore"), t.default = new O(c.default, {
        LOGOUT: function() {
            I = h()
        },
        UPDATE_HANG_STATUS: function(e) {
            var t = e.status,
                n = e.saveAsDefault;
            r = t, o = null, n && (I.currentDefaultStatus = {
                status: t,
                customHangStatus: o,
                expiresAt: Date.now() + 288e5
            }), i = {
                type: f.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: r
            }
        },
        UPDATE_HANG_STATUS_CUSTOM: function(e) {
            var t = e.status,
                n = e.emoji,
                a = e.saveAsDefault;
            r = f.HangStatusTypes.CUSTOM, o = {
                status: t,
                emoji: n
            };
            var u = y(I.recentCustomStatuses),
                l = u.findIndex(function(e) {
                    return e.status === t && s().isEqual(e.emoji, n)
                }); - 1 !== l ? u.splice(l, 1) : 7 === u.length && u.splice(6, 1), I.recentCustomStatuses = [o].concat(y(u)), a && (I.currentDefaultStatus = {
                status: r,
                customHangStatus: o,
                expiresAt: Date.now() + 288e5
            }), i = {
                type: f.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: r,
                details: t,
                emoji: n
            }
        },
        CLEAR_HANG_STATUS: function(e) {
            var t = e.saveAsDefault;
            r = null, o = null, t && (I.currentDefaultStatus = {
                status: null,
                customHangStatus: null,
                expiresAt: Date.now() + 288e5
            }), i = null
        }
    })
}