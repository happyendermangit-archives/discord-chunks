function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        KvMessage: function() {
            return a
        }
    }), n("47120"), n("653041");
    var i = n("271383"),
        r = n("594174"),
        s = n("981631");
    class a {
        static fromMessage(e, t, n, i) {
            let [r, s] = a.deriveMemberUsers(e, n);
            return {
                id: n.id,
                channelId: t,
                message: n,
                members: r,
                users: s,
                connectionId: i
            }
        }
        static deriveMemberUsers(e, t) {
            var n, a, o, l;
            let u = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (a = t.interaction) || void 0 === a ? void 0 : a.user.id, ...null !== (l = null === (o = t.mentions) || void 0 === o ? void 0 : o.map(e => e.id)) && void 0 !== l ? l : []]),
                d = [],
                _ = [];
            for (let t of u) {
                if (null == t) continue;
                let n = r.default.getUser(t),
                    a = i.default.getTrueMember(null != e ? e : s.EMPTY_STRING_SNOWFLAKE_ID, t);
                null != n && _.push(n), null != a && d.push(a)
            }
            return [d, _]
        }
    }
}