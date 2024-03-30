function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("851285"),
        u = n("306912"),
        s = n("29884"),
        l = n("687588"),
        c = n("523018"),
        f = n("620525"),
        d = n("31480");

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
    var y = {},
        I = {};

    function h() {
        var e = null !== (s = a.default.getGuildsProto()) && void 0 !== s ? s : {},
            t = u.default.getGuilds(),
            n = c.default.keys(t);
        I = {};
        var r = !0,
            o = !1,
            i = void 0;
        try {
            for (var s, l, d = n[Symbol.iterator](); !(r = (l = d.next()).done); r = !0) {
                var _ = l.value;
                (0, f.getGuildAlertModeEnabled)(_).showAlertMode && (I[_] = function(e) {
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
                }({
                    guildId: _,
                    guildName: t[_].name
                }, e[_]))
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !r && null != d.return && d.return()
            } finally {
                if (o) throw i
            }
        }
    }

    function O(e) {
        return null != e && Object.keys(e).length > 0 ? {
            raidDetectedAt: e.raid_detected_at,
            dmSpamDetectedAt: e.dm_spam_detected_at,
            dmsDisabledUntil: e.dms_disabled_until,
            invitesDisabledUntil: e.invites_disabled_until
        } : null
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
            }), t && m(e, t)
        }(f, e);
        var t, n, r, o, i, c = (t = f, n = function() {
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

        function f() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, f), c.apply(this, arguments)
        }
        return r = f, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(a.default, u.default, s.default, l.default), this.syncWith([a.default, u.default, s.default, l.default], h)
            }
        }, {
            key: "getGuildIncident",
            value: function(e) {
                return y[e]
            }
        }, {
            key: "getIncidentsByGuild",
            value: function() {
                return y
            }
        }, {
            key: "getGuildAlertSettings",
            value: function() {
                return I
            }
        }], _(r.prototype, o), i && _(r, i), f
    }(o.default.Store);
    E(T, "displayName", "GuildIncidentsStore"), t.default = new T(i.default, {
        CONNECTION_OPEN: function(e) {
            y = {};
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = e.guilds[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a, u = o.value,
                        s = O(null === (a = u.properties) || void 0 === a ? void 0 : a.incidents_data);
                    null != s && ((0, d.hasDetectedActivity)(s) || (0, d.isUnderLockdown)(s)) && (y[u.id] = s)
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
        },
        GUILD_CREATE: function(e) {
            var t, n = e.guild,
                r = O(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
            null != r && ((0, d.hasDetectedActivity)(r) || (0, d.isUnderLockdown)(r)) && (y[n.id] = r)
        },
        GUILD_UPDATE: function(e) {
            var t = e.guild,
                n = O(t.incidents_data);
            null != n && ((0, d.hasDetectedActivity)(n) || (0, d.isUnderLockdown)(n)) ? y[t.id] = n : delete y[t.id]
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            delete y[t.id]
        },
        LOGOUT: function(e) {
            y = {}
        }
    })
}