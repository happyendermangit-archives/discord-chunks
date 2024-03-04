function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007"), n("808653");
    var i = n("446674"),
        s = n("913144"),
        r = n("26989"),
        a = n("305961"),
        o = n("697218"),
        l = n("49111");
    let u = [],
        d = {},
        c = null,
        f = null;

    function _(e) {
        let t = u.indexOf(e);
        if (t > -1) {
            let n = [...u];
            return n.splice(t, 1), u = n, delete d[e], !0
        }
        return !1
    }

    function h(e) {
        return !(e === l.ME || u.includes(e)) && (u = [...u, e], !0)
    }
    class E extends i.default.Store {
        initialize() {
            this.waitFor(a.default, o.default)
        }
        setHistorySnapshot(e) {
            c = e
        }
        getHistorySnapshot() {
            return c
        }
        lurkingGuildIds() {
            return u
        }
        mostRecentLurkedGuildId() {
            return 0 === u.length ? null : u[u.length - 1]
        }
        isLurking(e) {
            var t;
            let n = r.default.isCurrentUserGuest(e),
                i = null === (t = a.default.getGuild(e)) || void 0 === t ? void 0 : t.isLurker();
            return !!(!n && i)
        }
        getLurkingSource() {
            return f
        }
        getLoadId(e) {
            return null != e ? d[e] : null
        }
    }
    E.displayName = "LurkingStore";
    var g = new E(s.default, {
        CONNECTION_OPEN: function() {
            let e = Object.values(a.default.getGuilds()).reduce((e, t) => {
                let n = t.isLurker();
                return n ? [...e, t.id] : e
            }, []);
            u = e
        },
        GUILD_JOIN: function(e) {
            let {
                guildId: t,
                lurker: n,
                source: i,
                directoryChannelId: s,
                loadId: r
            } = e;
            if (n) {
                var a, o;
                switch (h(t), a = t, null != (o = r) && (d[a] = o), i) {
                    case l.JoinGuildSources.MOBILE_GUILD_DISCOVERY:
                        f = {
                            type: l.JoinGuildSources.MOBILE_GUILD_DISCOVERY
                        };
                        break;
                    case l.JoinGuildSources.DIRECTORY_ENTRY:
                        f = {
                            type: l.JoinGuildSources.DIRECTORY_ENTRY,
                            directoryChannelId: s
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
                return [...u].reduce((e, n) => t.has(n) ? e : _(n) || e, !1)
            }(t);
            return n && (c = null, f = null), n
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
            } = e, n = null == t.joined_at;
            return !!(!n && u.includes(t.id)) && (_(t.id), c = null, f = null, !0)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            return !!u.includes(t.id) && (_(t.id), c = null, f = null, !0)
        },
        GUILD_MEMBER_ADD: function(e) {
            var t;
            let {
                guildId: n,
                joinedAt: i,
                user: s
            } = e, r = s.id === (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
            return !!(r && null != i && u.includes(n)) && (_(n), c = null, f = null, !0)
        }
    })
}