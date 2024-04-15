function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("302454"),
        r = n.n(i),
        s = n("430198"),
        a = n("933557"),
        o = n("66999"),
        l = n("754688"),
        u = n("592125"),
        d = n("430824"),
        _ = n("496675"),
        c = n("699516"),
        E = n("594174"),
        I = n("768581"),
        T = n("934415"),
        f = n("624138"),
        S = n("699450"),
        h = n("594199"),
        A = n("981631"),
        m = n("689938");
    let N = e => {
        let t = u.default.getChannel(e);
        return null == t ? void 0 : t.getGuildId()
    };

    function p(e) {
        return {
            type: "guild",
            guildId: e.id,
            content: (0, f.truncateText)(e.name, 32),
            icon: I.default.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 40
            })
        }
    }

    function O(e, t) {
        let n;
        let i = L((0, f.truncateText)(e.name, 32));
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

    function R(e) {
        return {
            type: "channel",
            content: [L("")],
            iconType: e ? "post" : "message"
        }
    }

    function C(e, t) {
        var n;
        let i = u.default.getChannel(e),
            r = (0, o.getChannelRoleSubscriptionStatus)(e, u.default, s.default, _.default).isSubscriptionGated,
            d = null !== (n = (0, T.getMentionIconType)(i)) && void 0 !== n ? n : "text";
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
                roleSubscriptionGated: r,
                iconType: d,
                parentId: null == i ? void 0 : i.parent_id
            }
        }
        return null != i ? {
            type: i.type,
            id: i.id,
            guildId: i.guild_id,
            name: (0, a.computeChannelName)(i, E.default, c.default),
            isDm: i.isPrivate(),
            isForumPost: i.isForumPost(),
            isMentionable: (0, S.isChannelTypeMentionable)(i.type),
            canViewChannel: (0, l.canViewChannel)(i),
            roleSubscriptionGated: r,
            iconType: d,
            parentId: i.parent_id
        } : null
    }

    function g(e) {
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

    function L(e) {
        return {
            type: "text",
            content: e
        }
    }

    function D(e, t, n, i, r) {
        let s = d.default.getGuild(e),
            a = (null == s ? void 0 : s.id) === i;
        return {
            type: "channelMention",
            guildId: e,
            channelId: t,
            messageId: n,
            originalLink: r,
            inContent: null == s || a ? null : [p(s)],
            content: [O({
                name: m.default.Messages.UNKNOWN_CHANNEL,
                type: A.ChannelTypes.UNKNOWN,
                iconType: "text"
            }, "italics")]
        }
    }

    function v(e, t, n, i) {
        if (!e.canViewChannel) return function(e, t) {
            let n = {
                type: "channel",
                content: [L(e.roleSubscriptionGated ? e.name : m.default.Messages.NO_ACCESS)],
                channelType: e.roleSubscriptionGated ? e.type : A.ChannelTypes.UNKNOWN,
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
        if (!e.isMentionable) return L("#".concat(e.name));
        let r = {
                type: "channelMention",
                channelId: e.id,
                guildId: e.guildId,
                messageId: t,
                originalLink: i
            },
            s = d.default.getGuild(e.guildId);
        if (null == s) {
            var a;
            if (e.isDm) return {
                ...r,
                guildId: A.ME,
                inContent: [O(e)],
                content: [R(!1)]
            };
            return null != (a = i) ? g(a) : L("#".concat(m.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
        }
        let o = e.guildId === n;
        return {
            ...r,
            ... function(e, t, n, i) {
                let r = p(e),
                    s = O(t),
                    a = R(t.isForumPost);
                if (n && i) {
                    if (t.isForumPost) {
                        let e = u.default.getChannel(t.parentId);
                        if (null != e) {
                            var o;
                            return {
                                inContent: [O({
                                    name: e.name,
                                    type: e.type,
                                    iconType: null !== (o = (0, T.getMentionIconType)(e)) && void 0 !== o ? o : "forum"
                                })],
                                content: [s]
                            }
                        }
                    }
                    return {
                        inContent: [s],
                        content: [a]
                    }
                }
                if (n && !i) return {
                    inContent: null,
                    content: [s]
                };
                if (!n && i) return {
                    inContent: [r],
                    content: [t.isForumPost ? s : a]
                };
                else if (!n && !i) return {
                    inContent: [r],
                    content: [s]
                }
            }(s, e, o, null != t)
        }
    }
    let M = {
            order: h.default.order,
            requiredFirstCharacters: ["<"],
            match: e => /^<#(\d+)>/.exec(e),
            parse(e, t, n) {
                let i = e[1];
                if (n.returnMentionIds) return {
                    type: "channelMention",
                    id: i
                };
                let r = C(i, n.mentionChannels);
                return null == r ? D(null, i, null, N(n.channelId)) : v(r, null, N(n.channelId))
            }
        },
        y = {
            order: r().defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match(e) {
                let t = l.CHANNEL_OR_MESSAGES_URL_RE.exec(e);
                return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
            },
            parse(e, t, n) {
                let i = e[0],
                    r = e[1],
                    s = e[2],
                    a = e[3];
                if (null == s) return g(i);
                let o = C(s, null);
                return null == o ? D(r, s, a, N(n.channelId), i) : v(o, a, N(n.channelId), i)
            }
        },
        P = {
            order: r().defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match: e => l.MEDIA_POST_URL_RE.exec(e),
            parse(e, t, n) {
                let i = e[0],
                    r = e[1],
                    s = e[2],
                    a = e[3],
                    o = e[4];
                if (null == s || null == a) return g(i);
                let l = C(a, null);
                if (null != l) return v(l, o, N(n.channelId), i);
                let u = C(s, null);
                return null != u ? v(u, o, N(n.channelId), i) : D(r, s, o, N(n.channelId), i)
            }
        };
    t.default = {
        channelMention: M,
        channelOrMessageUrl: y,
        mediaPostLink: P
    }
}