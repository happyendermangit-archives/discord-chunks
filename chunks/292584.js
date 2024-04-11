function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o, l, u = n("392711"),
        d = n("442837"),
        _ = n("759174"),
        c = n("570140"),
        E = n("598077"),
        I = n("314897"),
        T = n("709054"),
        f = n("770471"),
        S = n("860852");
    (s = i || (i = {}))[s.INVALID = 0] = "INVALID", s[s.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", s[s.VALID = 2] = "VALID";
    let h = new Set,
        A = new Set,
        m = new Set,
        N = [],
        O = {
            BROADCASTS_BY_USER_ID: e => "user:".concat(e),
            BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
            BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
        },
        p = new _.SecondaryIndexMap(function(e) {
            let t = h.has(e.userId) ? 1 : 0;
            return null != e.viewers && (t = 2), [O.BROADCASTS_BY_USER_ID(e.userId), O.BROADCASTS_BY_CHANNEL_ID(e.channelId), O.BROADCASTS_BY_VALIDITY(t)]
        }, e => e.channelId);

    function R(e, t, n) {
        if (I.default.getId() === e) return !1;
        if (null == t) {
            let t = p.get(e);
            return !!(null != t && (0, u.isEqual)(t.source, n)) && (p.delete(e), void 0)
        }!h.has(e) && !A.has(e) && (m.add(e), N = [...m]);
        let i = (0, S.broadcastFromServer)(t, e, n);
        p.set(e, i)
    }

    function C(e) {
        return null != e ? {
            type: S.BroadcastSourceType.GUILD,
            guildId: e
        } : {
            type: S.BroadcastSourceType.GLOBAL
        }
    }
    class g extends(r = d.default.Store) {
        getBroadcasts() {
            return p.values(O.BROADCASTS_BY_VALIDITY(2))
        }
        getBroadcastsToValidateChannels() {
            return p.values(O.BROADCASTS_BY_VALIDITY(1))
        }
        getBroadcastByChannel(e) {
            return p.values(O.BROADCASTS_BY_CHANNEL_ID(e))[0]
        }
        getBroadcastByUser(e) {
            return p.get(e)
        }
        getUserIdsToValidate() {
            return N
        }
    }
    l = "BroadcastingStore", (o = "displayName") in(a = g) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new g(c.default, {
        PRESENCE_UPDATES: function(e) {
            let {
                updates: t
            } = e;
            return t.forEach(e => {
                let {
                    user: t,
                    broadcast: n,
                    guildId: i
                } = e;
                R(t.id, n, C(i))
            })
        },
        PRESENCES_REPLACE: function(e) {
            let {
                presences: t
            } = e;
            return t.forEach(e => {
                let {
                    user: t,
                    broadcast: n,
                    guildId: i
                } = e;
                R(t.id, n, C(i))
            })
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                presences: t,
                guilds: n
            } = e;
            t.forEach(e => {
                let {
                    user: t,
                    broadcast: n,
                    guildId: i
                } = e;
                R(t.id, n, C(i))
            }), n.forEach(e => {
                let {
                    presences: t,
                    id: n
                } = e;
                t.forEach(e => {
                    let {
                        user: t,
                        broadcast: i
                    } = e;
                    R(t.id, i, C(n))
                })
            })
        },
        BROADCASTER_BUCKETS_RECEIVED: function(e) {
            let {
                data: t
            } = e;
            T.default.keys(t).forEach(e => {
                f.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? h.add(e) : A.add(e), m.clear(), N = [...m];
                let n = p.get(e);
                null != n && (p.delete(e), p.set(e, n))
            })
        },
        BROADCAST_VIEWERS_UPDATE: function(e) {
            let {
                viewers: t
            } = e;
            Object.entries(t).forEach(e => {
                let [t, n] = e, i = p.get(t);
                null != i && p.set(t, {
                    ...i,
                    viewers: n
                })
            })
        },
        CHANNEL_RECIPIENT_ADD: function(e) {
            let {
                channelId: t,
                user: n
            } = e, i = p.values(O.BROADCASTS_BY_CHANNEL_ID(t))[0];
            if (null == i || null == i.viewers || i.viewers.some(e => e.id === n.id)) return !1;
            p.set(i.userId, {
                ...i,
                viewers: [...i.viewers, new E.default(n)]
            })
        },
        CHANNEL_RECIPIENT_REMOVE: function(e) {
            let {
                channelId: t,
                user: n
            } = e, i = p.values(O.BROADCASTS_BY_CHANNEL_ID(t))[0];
            if (null == i || null == i.viewers) return !1;
            p.set(i.userId, {
                ...i,
                viewers: i.viewers.filter(e => e.id !== n.id)
            })
        },
        CHANNEL_CREATE: function(e) {
            var t;
            let {
                channel: n
            } = e, i = p.values(O.BROADCASTS_BY_CHANNEL_ID(n.id))[0];
            if (null == i) return !1;
            let r = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
            p.set(i.userId, {
                ...i,
                viewers: r.filter(e => e.id !== i.userId).map(e => new E.default(e))
            })
        },
        LOGOUT: function() {
            h.clear(), A.clear(), m.clear(), N = [], p.clear()
        }
    })
}