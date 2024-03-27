function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackMessageNotificationTimestamps: function() {
            return l
        }
    });
    var i = n("442837"),
        r = n("570140"),
        s = n("271383"),
        a = n("9156"),
        o = n("594174");

    function l(e, t) {
        var n;
        let i = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
            l = a.default.isSuppressEveryoneEnabled(t),
            u = a.default.isSuppressRolesEnabled(t),
            d = null != e.mentions && e.mentions.some(e => e.id === i),
            _ = null == t || null == i ? null : s.default.getMember(t, i),
            c = null != e.mention_roles && null != _ && null != _.roles && e.mention_roles.some(e => _.roles.includes(e));
        r.default.dispatch({
            type: "MESSAGE_NOTIFICATION_SHOWN",
            guildId: t,
            mentioned: d,
            roleMentioned: c && !u,
            everyoneMentioned: !0 === e.mention_everyone && !l
        })
    }
    let u = null,
        d = null,
        _ = null,
        c = null,
        E = {},
        I = {},
        T = {},
        f = {};
    class S extends i.default.Store {
        getGlobalStats() {
            let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
            return {
                approx_seconds_since_last_notification: e(u),
                approx_seconds_since_last_mention: e(d),
                approx_seconds_since_last_role_mention: e(_),
                approx_seconds_since_last_everyone_mention: e(c)
            }
        }
        getStats(e) {
            let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
            return {
                approx_seconds_since_last_notification: t(u),
                approx_seconds_since_last_mention: t(d),
                approx_seconds_since_last_role_mention: t(_),
                approx_seconds_since_last_everyone_mention: t(c),
                approx_seconds_since_last_guild_notification: null == e ? null : t(E[e]),
                approx_seconds_since_last_guild_mention: null == e ? null : t(I[e]),
                approx_seconds_since_last_guild_role_mention: null == e ? null : t(f[e]),
                approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(T[e])
            }
        }
    }
    t.default = new S(r.default, {
        CONNECTION_OPEN: function() {
            let e = e => null != e && Date.now() - e < 6e4;
            for (let t in !e(u) && (u = null), !e(d) && (d = null), !e(_) && (_ = null), !e(c) && (c = null), E) !e(E[t]) && delete E[t];
            for (let t in I) !e(I[t]) && delete I[t];
            for (let t in f) !e(f[t]) && delete f[t];
            for (let t in T) !e(T[t]) && delete T[t]
        },
        MESSAGE_NOTIFICATION_SHOWN: function(e) {
            let {
                guildId: t,
                mentioned: n,
                roleMentioned: i,
                everyoneMentioned: r
            } = e, s = Date.now();
            u = s, null != t && (E[t] = s), n && (d = s, null != t && (I[t] = s)), i && (_ = s, null != t && (f[t] = s)), r && (c = s, null != t && (T[t] = s))
        }
    })
}