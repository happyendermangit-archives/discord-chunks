function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("428920");

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

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = !1,
        d = {};

    function _(e) {
        var t, n, r = e.guildBoostSlot;
        t = function(e) {
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
        }({}, d), n = null != (n = s({}, r.id, r)) ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), d = t
    }

    function E() {
        var e = {},
            t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = Object.values(d)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var u = o.value;
                e[u.id] = u, u.subscription = a.default.getSubscriptionById(u.subscriptionId)
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
        d = e
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }(_, e);
        var t, n, r, o, i, s = (t = _, n = function() {
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

        function _() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _), s.apply(this, arguments)
        }
        return r = _, o = [{
            key: "initialize",
            value: function() {
                this.syncWith([a.default], E)
            }
        }, {
            key: "hasFetched",
            get: function() {
                return f
            }
        }, {
            key: "boostSlots",
            get: function() {
                return d
            }
        }, {
            key: "getGuildBoostSlot",
            value: function(e) {
                return d[e]
            }
        }], u(r.prototype, o), i && u(r, i), _
    }(o.default.Store);
    s(p, "displayName", "GuildBoostSlotStore"), t.default = new p(i.default, {
        GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
            var t = e.guildBoostSlots;
            d = {}, t.forEach(function(e) {
                d[e.id] = e
            }), f = !0
        },
        GUILD_BOOST_SLOT_UPDATE_SUCCESS: _,
        GUILD_BOOST_SLOT_CREATE: _,
        GUILD_BOOST_SLOT_UPDATE: _,
        LOGOUT: function() {
            d = {}, f = !1
        }
    })
}