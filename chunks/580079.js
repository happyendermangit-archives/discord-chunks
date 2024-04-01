function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_STORED_MESSAGES: function() {
            return I
        }
    }), n("653041"), n("47120"), n("724458");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("592125");
    n("914010");
    var c = n("709054"),
        E = n("176505");
    let I = 26,
        T = {},
        f = {},
        S = {},
        h = {};

    function A(e) {
        let t = f[e];
        if (null == t) return;
        let n = c.default.fromTimestamp(Date.now() - 9e5),
            i = l().findIndex(t, e => c.default.compare(e.id, n) > 0);
        if (-1 === i) f[e] = [];
        else {
            let n = Math.max(i, t.length - I);
            f[e] = l().slice(t, n)
        }
        S[e] = Date.now()
    }

    function m(e, t, n, i) {
        T[e].add(t);
        let r = S[t];
        (null == r || r + 3e5 > Date.now()) && A(t), null == f[t] && (f[t] = []), f[t].push({
            id: n,
            userId: i
        })
    }

    function N(e) {
        let {
            channel: t
        } = e;
        delete f[t.id], delete S[t.id]
    }
    class O extends(i = u.default.Store) {
        getActiveChannelsFetchStatus(e) {
            return h[e]
        }
        getActiveChannelIds(e) {
            return T[e]
        }
        getChannelMessageData(e) {
            return f[e]
        }
        shouldFetch(e) {
            var t;
            return null == T[e] && !(null === (t = h[e]) || void 0 === t ? void 0 : t.loading)
        }
    }
    a = "ActiveChannelsStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new O(d.default, {
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t,
                guildId: n
            } = e;
            if (!(0, E.isGuildHomeChannel)(t) || null == n) return !1;
            let i = T[n];
            if (null == i) return !1;
            i.forEach(e => {
                var t;
                A(e), (null === (t = f[e]) || void 0 === t ? void 0 : t.length) === 0 && delete f[e]
            });
            let r = l().chain(Array.from(i)).filter(e => e in f).sortBy(e => {
                var t, n;
                return -(null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0)
            }).value();
            T[n] = new Set(r)
        },
        MESSAGE_CREATE: function(e) {
            var t;
            let {
                channelId: n,
                message: i,
                optimistic: r,
                isPushNotification: s
            } = e;
            if (r || s) return !1;
            let a = _.default.getChannel(n);
            if (null == a) return !1;
            let o = a.guild_id;
            if (null == o || null == T[o]) return !1;
            m(o, n, i.id, null === (t = i.author) || void 0 === t ? void 0 : t.id)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete T[t.id]
        },
        CHANNEL_DELETE: N,
        THREAD_DELETE: N,
        ACTIVE_CHANNELS_FETCH_START: function(e) {
            let {
                guildId: t
            } = e;
            h[t] = {
                loading: !0,
                error: null,
                fetchedAt: Date.now()
            }
        },
        ACTIVE_CHANNELS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                channels: n
            } = e;
            h[t] = {
                loading: !1,
                error: null,
                fetchedAt: Date.now()
            }, T[t] = new Set, n.forEach(e => {
                let {
                    channel_id: n,
                    messages: i
                } = e;
                i.forEach(e => {
                    m(t, n, e.message_id, e.user_id)
                })
            })
        },
        ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
            let {
                guildId: t,
                error: n
            } = e;
            h[t] = {
                loading: !1,
                error: n,
                fetchedAt: null
            }
        },
        CONNECTION_OPEN: function() {}
    })
}