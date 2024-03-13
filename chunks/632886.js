function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    });
    var i = n("404828"),
        s = n.n(i),
        r = n("203288"),
        a = n("679653"),
        o = n("848848"),
        l = n("361572"),
        u = n("42203"),
        d = n("305961"),
        c = n("957255"),
        f = n("27618"),
        _ = n("697218"),
        h = n("315102"),
        E = n("404008"),
        g = n("159885"),
        m = n("82300"),
        p = n("290689"),
        S = n("49111"),
        v = n("782340");
    let T = e => {
        let t = u.default.getChannel(e);
        return null == t ? void 0 : t.getGuildId()
    };

    function I(e) {
        return {
            type: "guild",
            guildId: e.id,
            content: (0, g.truncateText)(e.name, 32),
            icon: h.default.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 40
            })
        }
    }

    function C(e, t) {
        let n;
        let i = R((0, g.truncateText)(e.name, 32));
        return {
            type: "channel",
            content: [n = "italics" === t ? {
                type: "em",
                content: [i]
            } : i],
            channelType: e.type,
            iconType: e.iconType
        }
    }

    function A(e) {
        return {
            type: "channel",
            content: [R("")],
            iconType: e ? "post" : "message"
        }
    }

    function y(e, t) {
        var n;
        let i = u.default.getChannel(e),
            s = (0, o.getChannelRoleSubscriptionStatus)(e, u.default, r.default, c.default).isSubscriptionGated,
            d = null !== (n = (0, E.getMentionIconType)(i)) && void 0 !== n ? n : "text";
        if (null != t) {
            let n = t.find(t => t.id === e);
            if (null != n) return {
                type: n.type,
                id: n.id,
                guildId: n.guild_id,
                name: n.name,
                isDm: null != i && i.isPrivate(),
                isForumPost: null != i && i.isForumPost(),
                isMentionable: !0,
                canViewChannel: !0,
                roleSubscriptionGated: s,
                iconType: d,
                parentId: null == i ? void 0 : i.parent_id
            }
        }
        return null != i ? {
            type: i.type,
            id: i.id,
            guildId: i.guild_id,
            name: (0, a.computeChannelName)(i, _.default, f.default),
            isDm: i.isPrivate(),
            isForumPost: i.isForumPost(),
            isMentionable: (0, m.isChannelTypeMentionable)(i.type),
            canViewChannel: (0, l.canViewChannel)(i),
            roleSubscriptionGated: s,
            iconType: d,
            parentId: i.parent_id
        } : null
    }

    function N(e) {
        return {
            type: "link",
            content: [{
                type: "text",
                content: e
            }],
            target: e,
            title: void 0
        }
    }

    function R(e) {
        return {
            type: "text",
            content: e
        }
    }

    function O(e, t, n, i, s) {
        let r = d.default.getGuild(e),
            a = (null == r ? void 0 : r.id) === i;
        return {
            type: "channelMention",
            guildId: e,
            channelId: t,
            messageId: n,
            originalLink: s,
            inContent: null == r || a ? null : [I(r)],
            content: [C({
                name: v.default.Messages.UNKNOWN_CHANNEL,
                type: S.ChannelTypes.UNKNOWN,
                iconType: "text"
            }, "italics")]
        }
    }

    function D(e, t, n, i) {
        if (!e.canViewChannel) return function(e, t) {
            let n = {
                type: "channel",
                content: [R(e.roleSubscriptionGated ? e.name : v.default.Messages.NO_ACCESS)],
                channelType: e.roleSubscriptionGated ? e.type : S.ChannelTypes.UNKNOWN,
                iconType: "locked"
            };
            return {
                type: "channelMention",
                guildId: e.guildId,
                channelId: e.id,
                messageId: t,
                inContent: null,
                content: [n]
            }
        }(e, t);
        if (!e.isMentionable) return R("#".concat(e.name));
        let s = {
                type: "channelMention",
                channelId: e.id,
                guildId: e.guildId,
                messageId: t,
                originalLink: i
            },
            r = d.default.getGuild(e.guildId);
        if (null == r) {
            var a;
            if (e.isDm) return {
                ...s,
                guildId: S.ME,
                inContent: [C(e)],
                content: [A(!1)]
            };
            return null != (a = i) ? N(a) : R("#".concat(v.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
        }
        let o = e.guildId === n;
        return {
            ...s,
            ... function(e, t, n, i) {
                let s = I(e),
                    r = C(t),
                    a = A(t.isForumPost);
                if (n && i) {
                    if (t.isForumPost) {
                        let e = u.default.getChannel(t.parentId);
                        if (null != e) {
                            var o;
                            return {
                                inContent: [C({
                                    name: e.name,
                                    type: e.type,
                                    iconType: null !== (o = (0, E.getMentionIconType)(e)) && void 0 !== o ? o : "forum"
                                })],
                                content: [r]
                            }
                        }
                    }
                    return {
                        inContent: [r],
                        content: [a]
                    }
                }
                if (n && !i) return {
                    inContent: null,
                    content: [r]
                };
                if (!n && i) return {
                    inContent: [s],
                    content: [t.isForumPost ? r : a]
                };
                else if (!n && !i) return {
                    inContent: [s],
                    content: [r]
                }
            }(r, e, o, null != t)
        }
    }
    let P = {
            order: p.default.order,
            requiredFirstCharacters: ["<"],
            match: e => /^<#(\d+)>/.exec(e),
            parse(e, t, n) {
                let i = e[1];
                if (n.returnMentionIds) return {
                    type: "channelMention",
                    id: i
                };
                let s = y(i, n.mentionChannels);
                return null == s ? O(null, i, null, T(n.channelId)) : D(s, null, T(n.channelId))
            }
        },
        M = {
            order: s.defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match(e) {
                let t = l.CHANNEL_OR_MESSAGES_URL_RE.exec(e);
                return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
            },
            parse(e, t, n) {
                let i = e[0],
                    s = e[1],
                    r = e[2],
                    a = e[3];
                if (null == r) return N(i);
                let o = y(r, null);
                return null == o ? O(s, r, a, T(n.channelId), i) : D(o, a, T(n.channelId), i)
            }
        },
        L = {
            order: s.defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match: e => l.MEDIA_POST_URL_RE.exec(e),
            parse(e, t, n) {
                let i = e[0],
                    s = e[1],
                    r = e[2],
                    a = e[3],
                    o = e[4];
                if (null == r || null == a) return N(i);
                let l = y(a, null);
                if (null != l) return D(l, o, T(n.channelId), i);
                let u = y(r, null);
                return null != u ? D(u, o, T(n.channelId), i) : O(s, r, o, T(n.channelId), i)
            }
        };
    var b = {
        channelMention: P,
        channelOrMessageUrl: M,
        mediaPostLink: L
    }
}