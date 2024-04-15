function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useNewMemberBadge: function() {
            return u
        }
    }), n("789020");
    var i = n("442837"),
        r = n("271383"),
        s = n("430824"),
        a = n("594174"),
        o = n("630388"),
        l = n("372897");
    let u = (e, t) => {
        var n, u, d;
        let _ = (0, i.useStateFromStores)([r.default], () => {
                var n, i;
                return (0, o.hasFlag)(null !== (i = null === (n = r.default.getMember(e, t)) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0, l.GuildMemberFlags.DID_REJOIN)
            }),
            c = (0, i.useStateFromStores)([s.default], () => {
                var t;
                return null === (t = s.default.getGuild(e)) || void 0 === t ? void 0 : t.isNew()
            }),
            E = (0, i.useStateFromStores)([a.default], () => {
                var e;
                return null === (e = a.default.getUser(t)) || void 0 === e ? void 0 : e.bot
            });
        return n = e, u = {
            maxDaysOld: 7
        }, d = t, (0, i.useStateFromStores)([], () => (function(e, t, n) {
            let {
                maxDaysOld: i,
                minDaysOld: a = 0
            } = t, o = s.default.getGuild(e), l = null == o ? void 0 : o.joinedAt;
            if (null != n) {
                let t = r.default.getMember(e, n);
                l = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt)
            }
            if (null == l) return !1;
            let u = Date.now() - l.getTime();
            return (null == i || u <= 864e5 * i) && u >= 864e5 * a
        })(n, u, d), [u, n, d]) && !c && !E && !_
    }
}