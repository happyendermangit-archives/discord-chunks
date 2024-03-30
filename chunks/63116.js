function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("917211");
    n("895517");
    var u = n("163291"),
        s = n("217014"),
        l = n("306912"),
        c = n("281767");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = null,
        m = null,
        y = {};

    function I() {
        null != p && null == l.default.getGuild(p) && null == a.default.getRequest(p) && (p = null), null != m && null == l.default.getGuild(m) && null == a.default.getRequest(m) && (m = null), h(p)
    }

    function h(e) {
        null != e && (y[e] = Date.now())
    }

    function O(e) {
        var t = !1;
        return delete y[e], m === e && (m = null, t = !0), p === e && (Object.values(l.default.getGuilds()).find(function(t) {
            return t.id !== e
        }), p = null, (0, u.replaceWith)(c.Routes.ME), t = !0), t
    }
    var T = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
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
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
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
            key: "initialize",
            value: function(e) {
                var t, n, r;
                this.mustEmitChanges(function(e) {
                    return "CONNECTION_OPEN" !== e.type
                }), this.waitFor(l.default, s.default), y = null !== (t = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== t ? t : {}, p = null !== (n = null == e ? void 0 : e.selectedGuildId) && void 0 !== n ? n : null, m = null !== (r = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== r ? r : null
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    selectedGuildTimestampMillis: y,
                    selectedGuildId: p,
                    lastSelectedGuildId: m
                }
            }
        }, {
            key: "getGuildId",
            value: function() {
                return p
            }
        }, {
            key: "getLastSelectedGuildId",
            value: function() {
                return m
            }
        }, {
            key: "getLastSelectedTimestamp",
            value: function(e) {
                return p === e ? -1 : y[e]
            }
        }], f(r.prototype, o), i && f(r, i), u
    }(o.default.PersistedStore);
    d(T, "displayName", "SelectedGuildStore"), d(T, "persistKey", "SelectedGuildStore"), t.default = new T(i.default, {
        CONNECTION_OPEN: I,
        OVERLAY_INITIALIZE: function(e) {
            p = e.selectedGuildId, m = void 0, I()
        },
        CHANNEL_SELECT: function(e) {
            var t = e.guildId;
            if (p === t) return !1;
            h(p), h(t), null != t && (m = t), p = t
        },
        GUILD_MEMBER_REMOVE: function(e) {
            var t = e.guildId;
            return e.user.id === s.default.getId() && O(t)
        },
        GUILD_DELETE: function(e) {
            var t = e.guild,
                n = t.id;
            return !0 !== t.unavailable && O(n)
        },
        LOGOUT: function() {
            p = null, m = null
        }
    })
}