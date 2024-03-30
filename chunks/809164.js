function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("302454"),
        o = n.n(r),
        i = n("291178"),
        a = n("534965"),
        u = n("228845"),
        s = n("42969"),
        l = n("935741"),
        c = n("306912"),
        f = n("29884"),
        d = n("776982"),
        _ = n("208454"),
        E = n("299529"),
        p = n("115752"),
        m = n("778513"),
        y = n("822678"),
        I = n("676641"),
        h = n("281767"),
        O = n("941504");

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }
    var S = function(e) {
        var t = l.default.getChannel(e);
        return null == t ? void 0 : t.getGuildId()
    };

    function v(e) {
        return {
            type: "guild",
            guildId: e.id,
            content: (0, m.truncateText)(e.name, 32),
            icon: E.default.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 40
            })
        }
    }

    function g(e, t) {
        var n, r = R((0, m.truncateText)(e.name, 32));
        return {
            type: "channel",
            content: [n = "italics" === t ? {
                type: "em",
                content: [r]
            } : r],
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

    function b(e, t) {
        var n, r = l.default.getChannel(e),
            o = (0, u.getChannelRoleSubscriptionStatus)(e, l.default, i.default, f.default).isSubscriptionGated,
            c = null !== (n = (0, p.getMentionIconType)(r)) && void 0 !== n ? n : "text";
        if (null != t) {
            var E = t.find(function(t) {
                return t.id === e
            });
            if (null != E) return {
                type: E.type,
                id: E.id,
                guildId: E.guild_id,
                name: E.name,
                isDm: null != r && r.isPrivate(),
                isForumPost: null != r && r.isForumPost(),
                isMentionable: !0,
                canViewChannel: !0,
                roleSubscriptionGated: o,
                iconType: c,
                parentId: null == r ? void 0 : r.parent_id
            }
        }
        return null != r ? {
            type: r.type,
            id: r.id,
            guildId: r.guild_id,
            name: (0, a.computeChannelName)(r, _.default, d.default),
            isDm: r.isPrivate(),
            isForumPost: r.isForumPost(),
            isMentionable: (0, y.isChannelTypeMentionable)(r.type),
            canViewChannel: (0, s.canViewChannel)(r),
            roleSubscriptionGated: o,
            iconType: c,
            parentId: r.parent_id
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

    function C(e, t, n, r, o) {
        var i = c.default.getGuild(e),
            a = (null == i ? void 0 : i.id) === r;
        return {
            type: "channelMention",
            guildId: e,
            channelId: t,
            messageId: n,
            originalLink: o,
            inContent: null == i || a ? null : [v(i)],
            content: [g({
                name: O.default.Messages.UNKNOWN_CHANNEL,
                type: h.ChannelTypes.UNKNOWN,
                iconType: "text"
            }, "italics")]
        }
    }

    function P(e, t, n, r) {
        if (!e.canViewChannel) {
            ;
            return o = e, i = t, a = {
                type: "channel",
                content: [R(o.roleSubscriptionGated ? o.name : O.default.Messages.NO_ACCESS)],
                channelType: o.roleSubscriptionGated ? o.type : h.ChannelTypes.UNKNOWN,
                iconType: "locked"
            }, {
                type: "channelMention",
                guildId: o.guildId,
                channelId: o.id,
                messageId: i,
                inContent: null,
                content: [a]
            }
        }
        if (!e.isMentionable) return R("#".concat(e.name));
        var o, i, a, u, s, f, d = {
                type: "channelMention",
                channelId: e.id,
                guildId: e.guildId,
                messageId: t,
                originalLink: r
            },
            _ = c.default.getGuild(e.guildId);
        if (null == _) {
            ;
            if (e.isDm) {
                ;
                return u = T({}, d), s = (s = {
                    guildId: h.ME,
                    inContent: [g(e)],
                    content: [A(!1)]
                }, s), Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(s)).forEach(function(e) {
                    Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(s, e))
                }), u
            }
            return null != (f = r) ? N(f) : R("#".concat(O.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
        }
        var E = e.guildId === n;
        return T({}, d, function(e, t, n, r) {
            var o = v(e),
                i = g(t),
                a = A(t.isForumPost);
            if (n && r) {
                if (t.isForumPost) {
                    var u, s = l.default.getChannel(t.parentId);
                    if (null != s) return {
                        inContent: [g({
                            name: s.name,
                            type: s.type,
                            iconType: null !== (u = (0, p.getMentionIconType)(s)) && void 0 !== u ? u : "forum"
                        })],
                        content: [i]
                    }
                }
                return {
                    inContent: [i],
                    content: [a]
                }
            }
            if (n && !r) return {
                inContent: null,
                content: [i]
            };
            if (!n && r) return {
                inContent: [o],
                content: [t.isForumPost ? i : a]
            };
            else if (!n && !r) return {
                inContent: [o],
                content: [i]
            }
        }(_, e, E, null != t))
    }
    var D = {
            order: I.default.order,
            requiredFirstCharacters: ["<"],
            match: function(e) {
                return /^<#(\d+)>/.exec(e)
            },
            parse: function(e, t, n) {
                var r = e[1];
                if (n.returnMentionIds) return {
                    type: "channelMention",
                    id: r
                };
                var o = b(r, n.mentionChannels);
                return null == o ? C(null, r, null, S(n.channelId)) : P(o, null, S(n.channelId))
            }
        },
        L = {
            order: o().defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match: function(e) {
                var t = s.CHANNEL_OR_MESSAGES_URL_RE.exec(e);
                return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
            },
            parse: function(e, t, n) {
                var r = e[0],
                    o = e[1],
                    i = e[2],
                    a = e[3];
                if (null == i) return N(r);
                var u = b(i, null);
                return null == u ? C(o, i, a, S(n.channelId), r) : P(u, a, S(n.channelId), r)
            }
        },
        M = {
            order: o().defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match: function(e) {
                return s.MEDIA_POST_URL_RE.exec(e)
            },
            parse: function(e, t, n) {
                var r = e[0],
                    o = e[1],
                    i = e[2],
                    a = e[3],
                    u = e[4];
                if (null == i || null == a) return N(r);
                var s = b(a, null);
                if (null != s) return P(s, u, S(n.channelId), r);
                var l = b(i, null);
                return null != l ? P(l, u, S(n.channelId), r) : C(o, i, u, S(n.channelId), r)
            }
        };
    t.default = {
        channelMention: D,
        channelOrMessageUrl: L,
        mediaPostLink: M
    }
}