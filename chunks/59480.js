function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        KvMessage: function() {
            return s
        }
    }), n("47120"), n("653041");
    var i = n("271383"),
        r = n("594174"),
        a = n("981631");
    class s {
        static fromMessage(e, t, n, i) {
            let [r, a] = s.deriveMemberUsers(e, n);
            return {
                id: n.id,
                channelId: t,
                message: n,
                members: r,
                users: a,
                connectionId: i
            }
        }
        static deriveMemberUsers(e, t) {
            var n, s, o, l;
            let u = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (s = t.interaction) || void 0 === s ? void 0 : s.user.id, ...null !== (l = null === (o = t.mentions) || void 0 === o ? void 0 : o.map(e => e.id)) && void 0 !== l ? l : []]),
                d = [],
                _ = [];
            for (let t of u) {
                if (null == t) continue;
                let n = r.default.getUser(t),
                    s = i.default.getTrueMember(null != e ? e : a.EMPTY_STRING_SNOWFLAKE_ID, t);
                null != n && _.push(n), null != s && d.push(s)
            }
            return [d, _]
        }
    }
}