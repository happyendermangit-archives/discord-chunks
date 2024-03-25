function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var a, r, s = n("917351"),
        i = n("446674"),
        l = n("407846"),
        u = n("913144"),
        o = n("766274"),
        d = n("271938"),
        c = n("299039"),
        f = n("9759"),
        h = n("837374");
    (r = a || (a = {}))[r.INVALID = 0] = "INVALID", r[r.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", r[r.VALID = 2] = "VALID";
    let E = new Set,
        p = new Set,
        m = new Set,
        C = [],
        S = {
            BROADCASTS_BY_USER_ID: e => "user:".concat(e),
            BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
            BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
        },
        g = new l.SecondaryIndexMap(function(e) {
            let t = E.has(e.userId) ? 1 : 0;
            return null != e.viewers && (t = 2), [S.BROADCASTS_BY_USER_ID(e.userId), S.BROADCASTS_BY_CHANNEL_ID(e.channelId), S.BROADCASTS_BY_VALIDITY(t)]
        }, e => e.channelId);

    function _(e, t, n) {
        if (d.default.getId() === e) return !1;
        if (null == t) {
            let t = g.get(e);
            return !!(null != t && (0, s.isEqual)(t.source, n)) && (g.delete(e), void 0)
        }!E.has(e) && !p.has(e) && (m.add(e), C = [...m]);
        let a = (0, h.broadcastFromServer)(t, e, n);
        g.set(e, a)
    }

    function T(e) {
        return null != e ? {
            type: h.BroadcastSourceType.GUILD,
            guildId: e
        } : {
            type: h.BroadcastSourceType.GLOBAL
        }
    }
    class v extends i.default.Store {
        getBroadcasts() {
            return g.values(S.BROADCASTS_BY_VALIDITY(2))
        }
        getBroadcastsToValidateChannels() {
            return g.values(S.BROADCASTS_BY_VALIDITY(1))
        }
        getBroadcastByChannel(e) {
            return g.values(S.BROADCASTS_BY_CHANNEL_ID(e))[0]
        }
        getBroadcastByUser(e) {
            return g.get(e)
        }
        getUserIdsToValidate() {
            return C
        }
    }
    v.displayName = "BroadcastingStore";
    var I = new v(u.default, {
        PRESENCE_UPDATES: function(e) {
            let {
                updates: t
            } = e;
            return t.forEach(e => {
                let {
                    user: t,
                    broadcast: n,
                    guildId: a
                } = e;
                _(t.id, n, T(a))
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
                    guildId: a
                } = e;
                _(t.id, n, T(a))
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
                    guildId: a
                } = e;
                _(t.id, n, T(a))
            }), n.forEach(e => {
                let {
                    presences: t,
                    id: n
                } = e;
                t.forEach(e => {
                    let {
                        user: t,
                        broadcast: a
                    } = e;
                    _(t.id, a, T(n))
                })
            })
        },
        BROADCASTER_BUCKETS_RECEIVED: function(e) {
            let {
                data: t
            } = e;
            c.default.keys(t).forEach(e => {
                f.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? E.add(e) : p.add(e), m.clear(), C = [...m];
                let n = g.get(e);
                null != n && (g.delete(e), g.set(e, n))
            })
        },
        BROADCAST_VIEWERS_UPDATE: function(e) {
            let {
                viewers: t
            } = e;
            Object.entries(t).forEach(e => {
                let [t, n] = e, a = g.get(t);
                null != a && g.set(t, {
                    ...a,
                    viewers: n
                })
            })
        },
        CHANNEL_RECIPIENT_ADD: function(e) {
            let {
                channelId: t,
                user: n
            } = e, a = g.values(S.BROADCASTS_BY_CHANNEL_ID(t))[0];
            if (null == a || null == a.viewers || a.viewers.some(e => e.id === n.id)) return !1;
            g.set(a.userId, {
                ...a,
                viewers: [...a.viewers, new o.default(n)]
            })
        },
        CHANNEL_RECIPIENT_REMOVE: function(e) {
            let {
                channelId: t,
                user: n
            } = e, a = g.values(S.BROADCASTS_BY_CHANNEL_ID(t))[0];
            if (null == a || null == a.viewers) return !1;
            g.set(a.userId, {
                ...a,
                viewers: a.viewers.filter(e => e.id !== n.id)
            })
        },
        CHANNEL_CREATE: function(e) {
            var t;
            let {
                channel: n
            } = e, a = g.values(S.BROADCASTS_BY_CHANNEL_ID(n.id))[0];
            if (null == a) return !1;
            let r = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
            g.set(a.userId, {
                ...a,
                viewers: r.filter(e => e.id !== a.userId).map(e => new o.default(e))
            })
        },
        LOGOUT: function() {
            E.clear(), p.clear(), m.clear(), C = [], g.clear()
        }
    })
}