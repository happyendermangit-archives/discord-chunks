function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        useNewMemberBadge: function() {
            return d
        }
    }), i("789020");
    var l = i("442837"),
        r = i("271383"),
        a = i("430824"),
        n = i("594174"),
        s = i("630388"),
        o = i("372897");
    let d = (t, e) => {
        var i, d, c;
        let h = (0, l.useStateFromStores)([r.default], () => {
                var i, l;
                return (0, s.hasFlag)(null !== (l = null === (i = r.default.getMember(t, e)) || void 0 === i ? void 0 : i.flags) && void 0 !== l ? l : 0, o.GuildMemberFlags.DID_REJOIN)
            }),
            u = (0, l.useStateFromStores)([a.default], () => {
                var e;
                return null === (e = a.default.getGuild(t)) || void 0 === e ? void 0 : e.isNew()
            }),
            f = (0, l.useStateFromStores)([n.default], () => {
                var t;
                return null === (t = n.default.getUser(e)) || void 0 === t ? void 0 : t.bot
            });
        return i = t, d = {
            maxDaysOld: 7
        }, c = e, (0, l.useStateFromStores)([], () => (function(t, e, i) {
            let {
                maxDaysOld: l,
                minDaysOld: n = 0
            } = e, s = a.default.getGuild(t), o = null == s ? void 0 : s.joinedAt;
            if (null != i) {
                let e = r.default.getMember(t, i);
                o = (null == e ? void 0 : e.joinedAt) == null ? null : new Date(e.joinedAt)
            }
            if (null == o) return !1;
            let d = Date.now() - o.getTime();
            return (null == l || d <= 864e5 * l) && d >= 864e5 * n
        })(i, d, c), [d, i, c]) && !u && !f && !h
    }
}