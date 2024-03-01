function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("222007");
    var s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        a = n("913144"),
        o = n("233069"),
        d = n("42203"),
        u = n("299039");
    let l = {},
        f = new Set;

    function _(e) {
        return {
            id: e.id,
            parentId: e.parent_id
        }
    }

    function c(e) {
        e in l && delete l[e]
    }

    function g(e) {
        null != e.threads && e.threads.length > 0 && (l[e.id] = {}, e.threads.filter(e => o.ALL_CHANNEL_TYPES.has(e.type)).forEach(t => m(e.id, t))), e.hasThreadsSubscription && f.add(e.id)
    }

    function m(e, t) {
        let n = l[e],
            s = t.parent_id;
        !(s in n) && (n[s] = {}), l[e][s][t.id] = _(t)
    }

    function h(e) {
        var t, n;
        let {
            channel: s
        } = e;
        if (!o.ALL_CHANNEL_TYPES.has(s.type)) return !1;
        if ((null === (t = s.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return v(s);
        {
            let e = null !== (n = l[s.guild_id]) && void 0 !== n ? n : {};
            l[s.guild_id] = {
                ...e,
                [s.parent_id]: {
                    ...e[s.parent_id],
                    [s.id]: _(s)
                }
            }
        }
    }

    function v(e) {
        let {
            guild_id: t,
            parent_id: n,
            id: s
        } = e;
        if (null == t || null == n || !(t in l) || !(n in l[t]) || !(s in l[t][n])) return !1;
        l[t] = {
            ...l[t],
            [n]: {
                ...l[t][n]
            }
        }, delete l[t][n][s], i.isEmpty(l[t][n]) && delete l[t][n]
    }
    let E = {};
    class p extends r.default.Store {
        initialize() {
            this.waitFor(d.default)
        }
        isActive(e, t, n) {
            return null != e && null != this.getThreadsForParent(e, t)[n]
        }
        getThreadsForGuild(e) {
            var t;
            return null !== (t = l[e]) && void 0 !== t ? t : E
        }
        getThreadsForParent(e, t) {
            var n;
            return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : E
        }
        hasThreadsForChannel(e, t) {
            return !i.isEmpty(this.getThreadsForParent(e, t))
        }
        forEachGuild(e) {
            u.default.keys(l).forEach(t => {
                e(t, l[t])
            })
        }
        hasLoaded(e) {
            return f.has(e)
        }
    }
    p.displayName = "ActiveThreadsStore";
    var y = new p(a.default, {
        CONNECTION_OPEN: function(e) {
            l = {}, f.clear(), e.guilds.forEach(e => {
                g(e)
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                channels: t
            } = e;
            l = {}, i(t).filter(e => o.THREAD_CHANNEL_TYPES.has(e.type)).groupBy("guild_id").forEach((e, t) => {
                l[t] = {}, e.forEach(e => m(t, e))
            })
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            c(t.id), g(t)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            c(t.id)
        },
        THREAD_CREATE: h,
        THREAD_UPDATE: h,
        THREAD_LIST_SYNC: function(e) {
            let {
                guildId: t,
                threads: n,
                channelIds: s
            } = e;
            for (let e in null == s && f.add(t), l[t] = {
                    ...l[t]
                }, l[t]) l[t][e] = {
                ...l[t][e]
            };
            n.forEach(e => m(t, e))
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return v(t)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.guild_id || !(t.guild_id in l)) return !1;
            l[t.guild_id] = {
                ...l[t.guild_id]
            }, delete l[t.guild_id][t.id]
        }
    })
}