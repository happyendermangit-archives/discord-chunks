function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackMessageNotificationTimestamps: function() {
            return l
        },
        default: function() {
            return p
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("26989"),
        a = n("282109"),
        o = n("697218");

    function l(e, t) {
        var n;
        let i = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
            l = a.default.isSuppressEveryoneEnabled(t),
            u = a.default.isSuppressRolesEnabled(t),
            d = null != e.mentions && e.mentions.some(e => e.id === i),
            c = null == t || null == i ? null : r.default.getMember(t, i),
            _ = null != e.mention_roles && null != c && null != c.roles && e.mention_roles.some(e => c.roles.includes(e));
        s.default.dispatch({
            type: "MESSAGE_NOTIFICATION_SHOWN",
            guildId: t,
            mentioned: d,
            roleMentioned: _ && !u,
            everyoneMentioned: !0 === e.mention_everyone && !l
        })
    }
    let u = null,
        d = null,
        c = null,
        _ = null,
        f = {},
        E = {},
        h = {},
        g = {};
    class m extends i.default.Store {
        getGlobalStats() {
            let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
            return {
                approx_seconds_since_last_notification: e(u),
                approx_seconds_since_last_mention: e(d),
                approx_seconds_since_last_role_mention: e(c),
                approx_seconds_since_last_everyone_mention: e(_)
            }
        }
        getStats(e) {
            let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
            return {
                approx_seconds_since_last_notification: t(u),
                approx_seconds_since_last_mention: t(d),
                approx_seconds_since_last_role_mention: t(c),
                approx_seconds_since_last_everyone_mention: t(_),
                approx_seconds_since_last_guild_notification: null == e ? null : t(f[e]),
                approx_seconds_since_last_guild_mention: null == e ? null : t(E[e]),
                approx_seconds_since_last_guild_role_mention: null == e ? null : t(g[e]),
                approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(h[e])
            }
        }
    }
    var p = new m(s.default, {
        CONNECTION_OPEN: function() {
            let e = e => null != e && Date.now() - e < 6e4;
            for (let t in !e(u) && (u = null), !e(d) && (d = null), !e(c) && (c = null), !e(_) && (_ = null), f) !e(f[t]) && delete f[t];
            for (let t in E) !e(E[t]) && delete E[t];
            for (let t in g) !e(g[t]) && delete g[t];
            for (let t in h) !e(h[t]) && delete h[t]
        },
        MESSAGE_NOTIFICATION_SHOWN: function(e) {
            let {
                guildId: t,
                mentioned: n,
                roleMentioned: i,
                everyoneMentioned: s
            } = e, r = Date.now();
            u = r, null != t && (f[t] = r), n && (d = r, null != t && (E[t] = r)), i && (c = r, null != t && (g[t] = r)), s && (_ = r, null != t && (h[t] = r))
        }
    })
}