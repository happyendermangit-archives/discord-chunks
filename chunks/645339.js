function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        isMentioned: function() {
            return s
        },
        isRawMessageMentioned: function() {
            return u
        }
    });
    var r = n("935741"),
        o = n("957808"),
        i = n("306912");

    function a(e) {
        var t = e.message,
            n = e.userId,
            r = e.suppressEveryone,
            o = e.suppressRoles;
        return s({
            userId: n,
            channelId: t.channel_id,
            mentionEveryone: t.mentionEveryone,
            mentionUsers: t.mentions,
            mentionRoles: t.mentionRoles,
            suppressEveryone: void 0 !== r && r,
            suppressRoles: void 0 !== o && o
        })
    }

    function u(e) {
        var t, n, r, o, i = e.rawMessage,
            a = e.userId,
            u = e.suppressEveryone,
            l = e.suppressRoles;
        return s({
            userId: a,
            channelId: i.channel_id,
            mentionEveryone: null !== (n = i.mention_everyone) && void 0 !== n && n,
            mentionUsers: null !== (r = null === (t = i.mentions) || void 0 === t ? void 0 : t.map(function(e) {
                return e.id
            })) && void 0 !== r ? r : [],
            mentionRoles: null !== (o = i.mention_roles) && void 0 !== o ? o : [],
            suppressEveryone: void 0 !== u && u,
            suppressRoles: void 0 !== l && l
        })
    }

    function s(e) {
        var t = e.userId,
            n = e.channelId,
            a = e.mentionEveryone,
            u = e.mentionUsers,
            s = e.mentionRoles,
            l = e.suppressEveryone,
            c = e.suppressRoles;
        if (a && !(void 0 !== l && l) || u.includes(t)) return !0;
        if (void 0 !== c && c || null == s || 0 === s.length) return !1;
        var f = r.default.getChannel(n);
        if (null == f) return !1;
        var d = f.getGuildId();
        if (null == d || null == i.default.getGuild(d)) return !1;
        var _ = o.default.getMember(d, t);
        return null != _ && s.some(function(e) {
            return _.roles.includes(e)
        })
    }
}