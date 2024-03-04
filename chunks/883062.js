function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        KvMessage: function() {
            return a
        }
    }), n("222007"), n("424973");
    var i = n("26989"),
        s = n("697218"),
        r = n("49111");
    class a {
        static fromMessage(e, t, n, i) {
            let [s, r] = a.deriveMemberUsers(e, n);
            return {
                id: n.id,
                channelId: t,
                message: n,
                members: s,
                users: r,
                connectionId: i
            }
        }
        static deriveMemberUsers(e, t) {
            var n, a, o, l;
            let u = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (a = t.interaction) || void 0 === a ? void 0 : a.user.id, ...null !== (l = null === (o = t.mentions) || void 0 === o ? void 0 : o.map(e => e.id)) && void 0 !== l ? l : []]),
                d = [],
                c = [];
            for (let t of u) {
                if (null == t) continue;
                let n = s.default.getUser(t),
                    a = i.default.getTrueMember(null != e ? e : r.EMPTY_STRING_SNOWFLAKE_ID, t);
                null != n && c.push(n), null != a && d.push(a)
            }
            return [d, c]
        }
    }
}