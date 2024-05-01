function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        isMentioned: function() {
            return l
        },
        isRawMessageMentioned: function() {
            return o
        }
    });
    var i = n("592125"),
        r = n("271383"),
        s = n("430824");

    function a(e) {
        let {
            message: t,
            userId: n,
            suppressEveryone: i = !1,
            suppressRoles: r = !1
        } = e;
        return l({
            userId: n,
            channelId: t.channel_id,
            mentionEveryone: t.mentionEveryone,
            mentionUsers: t.mentions,
            mentionRoles: t.mentionRoles,
            suppressEveryone: i,
            suppressRoles: r
        })
    }

    function o(e) {
        var t, n, i, r;
        let {
            rawMessage: s,
            userId: a,
            suppressEveryone: o = !1,
            suppressRoles: u = !1
        } = e;
        return l({
            userId: a,
            channelId: s.channel_id,
            mentionEveryone: null !== (n = s.mention_everyone) && void 0 !== n && n,
            mentionUsers: null !== (i = null === (t = s.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== i ? i : [],
            mentionRoles: null !== (r = s.mention_roles) && void 0 !== r ? r : [],
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
        let _ = i.default.getChannel(n);
        if (null == _) return !1;
        let c = _.getGuildId();
        if (null == c || null == s.default.getGuild(c)) return !1;
        let E = r.default.getMember(c, t);
        return null != E && l.some(e => E.roles.includes(e))
    }
}