function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        isRawMessageMentioned: function() {
            return o
        },
        isMentioned: function() {
            return l
        }
    });
    var i = n("42203"),
        s = n("26989"),
        r = n("305961");

    function a(e) {
        let {
            message: t,
            userId: n,
            suppressEveryone: i = !1,
            suppressRoles: s = !1
        } = e;
        return l({
            userId: n,
            channelId: t.channel_id,
            mentionEveryone: t.mentionEveryone,
            mentionUsers: t.mentions,
            mentionRoles: t.mentionRoles,
            suppressEveryone: i,
            suppressRoles: s
        })
    }

    function o(e) {
        var t, n, i, s;
        let {
            rawMessage: r,
            userId: a,
            suppressEveryone: o = !1,
            suppressRoles: u = !1
        } = e;
        return l({
            userId: a,
            channelId: r.channel_id,
            mentionEveryone: null !== (n = r.mention_everyone) && void 0 !== n && n,
            mentionUsers: null !== (i = null === (t = r.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== i ? i : [],
            mentionRoles: null !== (s = r.mention_roles) && void 0 !== s ? s : [],
            suppressEveryone: o,
            suppressRoles: u
        })
    }

    function l(e) {
        let {
            userId: t,
            channelId: n,
            mentionEveryone: a,
            mentionUsers: o,
            mentionRoles: l,
            suppressEveryone: u = !1,
            suppressRoles: d = !1
        } = e;
        if (a && !u || o.includes(t)) return !0;
        if (d || null == l || 0 === l.length) return !1;
        let c = i.default.getChannel(n);
        if (null == c) return !1;
        let _ = c.getGuildId();
        if (null == _) return !1;
        let f = r.default.getGuild(_);
        if (null == f) return !1;
        let E = s.default.getMember(_, t);
        return null != E && l.some(e => E.roles.includes(e))
    }
}