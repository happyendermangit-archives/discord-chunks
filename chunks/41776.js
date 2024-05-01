function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458");
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("271383"),
        d = n("430824"),
        _ = n("594174"),
        c = n("981631");
    let E = [],
        I = {},
        T = null,
        f = null;

    function S(e) {
        let t = E.indexOf(e);
        if (t > -1) {
            let n = [...E];
            return n.splice(t, 1), E = n, delete I[e], !0
        }
        return !1
    }

    function h(e) {
        return !(e === c.ME || E.includes(e)) && (E = [...E, e], !0)
    }
    class A extends(i = o.default.Store) {
        initialize() {
            this.waitFor(d.default, _.default)
        }
        setHistorySnapshot(e) {
            T = e
        }
        getHistorySnapshot() {
            return T
        }
        lurkingGuildIds() {
            return E
        }
        mostRecentLurkedGuildId() {
            return 0 === E.length ? null : E[E.length - 1]
        }
        isLurking(e) {
            var t;
            let n = u.default.isCurrentUserGuest(e),
                i = null === (t = d.default.getGuild(e)) || void 0 === t ? void 0 : t.isLurker();
            return !!(!n && i)
        }
        getLurkingSource() {
            return f
        }
        getLoadId(e) {
            return null != e ? I[e] : null
        }
    }
    s = "LurkingStore", (a = "displayName") in(r = A) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new A(l.default, {
        CONNECTION_OPEN: function() {
            E = Object.values(d.default.getGuilds()).reduce((e, t) => t.isLurker() ? [...e, t.id] : e, [])
        },
        GUILD_JOIN: function(e) {
            let {
                guildId: t,
                lurker: n,
                source: i,
                directoryChannelId: r,
                loadId: a
            } = e;
            if (n) {
                var s, o;
                switch (h(t), s = t, null != (o = a) && (I[s] = o), i) {
                    case c.JoinGuildSources.MOBILE_GUILD_DISCOVERY:
                        f = {
                            type: c.JoinGuildSources.MOBILE_GUILD_DISCOVERY
                        };
                        break;
                    case c.JoinGuildSources.DIRECTORY_ENTRY:
                        f = {
                            type: c.JoinGuildSources.DIRECTORY_ENTRY,
                            directoryChannelId: r
                        };
                        break;
                    default:
                        f = null
                }
                return !0
            }
            return !1
        },
        GUILD_STOP_LURKING: function(e) {
            let {
                ignoredGuildIds: t
            } = e, n = function(e) {
                let t = new Set([...null != e ? e : []]);
                return [...E].reduce((e, n) => t.has(n) ? e : S(n) || e, !1)
            }(t);
            return n && (T = null, f = null), n
        },
        GUILD_STOP_LURKING_FAILURE: function(e) {
            let {
                lurkingGuildId: t,
                lurkingSource: n
            } = e;
            return h(t), f = n, !0
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            return !!(null != t.joined_at && E.includes(t.id)) && (S(t.id), T = null, f = null, !0)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            return !!E.includes(t.id) && (S(t.id), T = null, f = null, !0)
        },
        GUILD_MEMBER_ADD: function(e) {
            var t;
            let {
                guildId: n,
                joinedAt: i,
                user: r
            } = e, a = r.id === (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
            return !!(a && null != i && E.includes(n)) && (S(n), T = null, f = null, !0)
        }
    })
}