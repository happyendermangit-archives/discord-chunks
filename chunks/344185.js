function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("131704"),
        c = n("592125"),
        E = n("709054");
    let I = {},
        T = new Set;

    function f(e) {
        return {
            id: e.id,
            parentId: e.parent_id
        }
    }

    function S(e) {
        e in I && delete I[e]
    }

    function h(e) {
        null != e.threads && e.threads.length > 0 && (I[e.id] = {}, e.threads.filter(e => _.ALL_CHANNEL_TYPES.has(e.type)).forEach(t => A(e.id, t))), e.hasThreadsSubscription && T.add(e.id)
    }

    function A(e, t) {
        let n = I[e],
            i = t.parent_id;
        !(i in n) && (n[i] = {}), I[e][i][t.id] = f(t)
    }

    function m(e) {
        var t, n;
        let {
            channel: i
        } = e;
        if (!_.ALL_CHANNEL_TYPES.has(i.type)) return !1;
        if ((null === (t = i.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return N(i);
        {
            let e = null !== (n = I[i.guild_id]) && void 0 !== n ? n : {};
            I[i.guild_id] = {
                ...e,
                [i.parent_id]: {
                    ...e[i.parent_id],
                    [i.id]: f(i)
                }
            }
        }
    }

    function N(e) {
        let {
            guild_id: t,
            parent_id: n,
            id: i
        } = e;
        if (null == t || null == n || !(t in I) || !(n in I[t]) || !(i in I[t][n])) return !1;
        I[t] = {
            ...I[t],
            [n]: {
                ...I[t][n]
            }
        }, delete I[t][n][i], l().isEmpty(I[t][n]) && delete I[t][n]
    }
    let O = {};
    class p extends(i = u.default.Store) {
        initialize() {
            this.waitFor(c.default)
        }
        isActive(e, t, n) {
            return null != e && null != this.getThreadsForParent(e, t)[n]
        }
        getThreadsForGuild(e) {
            var t;
            return null !== (t = I[e]) && void 0 !== t ? t : O
        }
        getThreadsForParent(e, t) {
            var n;
            return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : O
        }
        hasThreadsForChannel(e, t) {
            return !l().isEmpty(this.getThreadsForParent(e, t))
        }
        forEachGuild(e) {
            E.default.keys(I).forEach(t => {
                e(t, I[t])
            })
        }
        hasLoaded(e) {
            return T.has(e)
        }
    }
    a = "ActiveThreadsStore", (s = "displayName") in(r = p) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new p(d.default, {
        CONNECTION_OPEN: function(e) {
            I = {}, T.clear(), e.guilds.forEach(e => {
                h(e)
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                channels: t
            } = e;
            I = {}, l()(t).filter(e => _.THREAD_CHANNEL_TYPES.has(e.type)).groupBy("guild_id").forEach((e, t) => {
                I[t] = {}, e.forEach(e => A(t, e))
            })
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            S(t.id), h(t)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            S(t.id)
        },
        THREAD_CREATE: m,
        THREAD_UPDATE: m,
        THREAD_LIST_SYNC: function(e) {
            let {
                guildId: t,
                threads: n,
                channelIds: i
            } = e;
            for (let e in null == i && T.add(t), I[t] = {
                    ...I[t]
                }, I[t]) I[t][e] = {
                ...I[t][e]
            };
            n.forEach(e => A(t, e))
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return N(t)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.guild_id || !(t.guild_id in I)) return !1;
            I[t.guild_id] = {
                ...I[t.guild_id]
            }, delete I[t.guild_id][t.id]
        }
    })
}