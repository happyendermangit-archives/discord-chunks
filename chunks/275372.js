function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        useNewMemberBadge: function() {
            return u
        }
    });
    var n = r("898511"),
        l = r("957808"),
        i = r("306912"),
        a = r("208454"),
        o = r("947248"),
        c = r("844659"),
        u = function(e, t) {
            var r, u, s, f = (0, n.useStateFromStores)([l.default], function() {
                    var r, n;
                    return (0, o.hasFlag)(null !== (n = null === (r = l.default.getMember(e, t)) || void 0 === r ? void 0 : r.flags) && void 0 !== n ? n : 0, c.GuildMemberFlags.DID_REJOIN)
                }),
                d = (0, n.useStateFromStores)([i.default], function() {
                    var t;
                    return null === (t = i.default.getGuild(e)) || void 0 === t ? void 0 : t.isNew()
                }),
                m = (0, n.useStateFromStores)([a.default], function() {
                    var e;
                    return null === (e = a.default.getUser(t)) || void 0 === e ? void 0 : e.bot
                });
            return r = e, u = {
                maxDaysOld: 7
            }, s = t, (0, n.useStateFromStores)([], function() {
                return function(e, t, r) {
                    var n = t.maxDaysOld,
                        a = t.minDaysOld,
                        o = i.default.getGuild(e),
                        c = null == o ? void 0 : o.joinedAt;
                    if (null != r) {
                        var u = l.default.getMember(e, r);
                        c = (null == u ? void 0 : u.joinedAt) == null ? null : new Date(u.joinedAt)
                    }
                    if (null == c) return !1;
                    var s = Date.now() - c.getTime();
                    return (null == n || s <= 864e5 * n) && s >= 864e5 * (void 0 === a ? 0 : a)
                }(r, u, s)
            }, [u, r, s]) && !d && !m && !f
        }
}