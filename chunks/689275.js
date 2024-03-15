function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("233069"),
        l = n("42203"),
        u = n("299039");
    let d = {},
        c = new Set;

    function f(e) {
        return {
            id: e.id,
            parentId: e.parent_id
        }
    }

    function _(e) {
        e in d && delete d[e]
    }

    function E(e) {
        null != e.threads && e.threads.length > 0 && (d[e.id] = {}, e.threads.filter(e => o.ALL_CHANNEL_TYPES.has(e.type)).forEach(t => h(e.id, t))), e.hasThreadsSubscription && c.add(e.id)
    }

    function h(e, t) {
        let n = d[e],
            i = t.parent_id;
        !(i in n) && (n[i] = {}), d[e][i][t.id] = f(t)
    }

    function g(e) {
        var t, n;
        let {
            channel: i
        } = e;
        if (!o.ALL_CHANNEL_TYPES.has(i.type)) return !1;
        if ((null === (t = i.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return m(i);
        {
            let e = null !== (n = d[i.guild_id]) && void 0 !== n ? n : {};
            d[i.guild_id] = {
                ...e,
                [i.parent_id]: {
                    ...e[i.parent_id],
                    [i.id]: f(i)
                }
            }
        }
    }

    function m(e) {
        let {
            guild_id: t,
            parent_id: n,
            id: i
        } = e;
        if (null == t || null == n || !(t in d) || !(n in d[t]) || !(i in d[t][n])) return !1;
        d[t] = {
            ...d[t],
            [n]: {
                ...d[t][n]
            }
        }, delete d[t][n][i], s.isEmpty(d[t][n]) && delete d[t][n]
    }
    let p = {};
    class S extends r.default.Store {
        initialize() {
            this.waitFor(l.default)
        }
        isActive(e, t, n) {
            return null != e && null != this.getThreadsForParent(e, t)[n]
        }
        getThreadsForGuild(e) {
            var t;
            return null !== (t = d[e]) && void 0 !== t ? t : p
        }
        getThreadsForParent(e, t) {
            var n;
            return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : p
        }
        hasThreadsForChannel(e, t) {
            return !s.isEmpty(this.getThreadsForParent(e, t))
        }
        forEachGuild(e) {
            u.default.keys(d).forEach(t => {
                e(t, d[t])
            })
        }
        hasLoaded(e) {
            return c.has(e)
        }
    }
    S.displayName = "ActiveThreadsStore";
    var v = new S(a.default, {
        CONNECTION_OPEN: function(e) {
            d = {}, c.clear(), e.guilds.forEach(e => {
                E(e)
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                channels: t
            } = e;
            d = {}, s(t).filter(e => o.THREAD_CHANNEL_TYPES.has(e.type)).groupBy("guild_id").forEach((e, t) => {
                d[t] = {}, e.forEach(e => h(t, e))
            })
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            _(t.id), E(t)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            _(t.id)
        },
        THREAD_CREATE: g,
        THREAD_UPDATE: g,
        THREAD_LIST_SYNC: function(e) {
            let {
                guildId: t,
                threads: n,
                channelIds: i
            } = e;
            for (let e in null == i && c.add(t), d[t] = {
                    ...d[t]
                }, d[t]) d[t][e] = {
                ...d[t][e]
            };
            n.forEach(e => h(t, e))
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return m(t)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.guild_id || !(t.guild_id in d)) return !1;
            d[t.guild_id] = {
                ...d[t.guild_id]
            }, delete d[t.guild_id][t.id]
        }
    })
}