function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("186188"),
        r = n("785217"),
        o = n("165555"),
        u = n("919163");

    function d(e, t, n) {
        let {
            attributes: l,
            children: o,
            element: d
        } = e;
        switch (d.type) {
            case "line":
                var f;
                if (null === (f = d.codeBlockState) || void 0 === f ? void 0 : f.isInCodeBlock) return (0, i.jsx)("div", {
                    className: r.codeLine,
                    spellCheck: null == d.codeBlockState || null == d.codeBlockState.lang,
                    ...l,
                    children: o
                });
                return (0, i.jsx)("div", {
                    ...l,
                    children: o
                });
            case "blockQuote": {
                let e = a(u.blockquoteContainer, u.slateBlockquoteContainer);
                return (0, i.jsxs)("div", {
                    ...l,
                    className: e,
                    children: [(0, i.jsx)("span", {
                        contentEditable: !1,
                        className: u.blockquoteDivider
                    }), (0, i.jsx)("blockquote", {
                        children: o
                    })]
                })
            }
            case "emoji":
                return (0, i.jsxs)(c, {
                    attributes: l,
                    children: [(0, i.jsx)(s.Emoji, {
                        emoji: d.emoji
                    }), o]
                });
            case "customEmoji":
                return (0, i.jsxs)(c, {
                    attributes: l,
                    children: [(0, i.jsx)(s.CustomEmoji, {
                        emoji: d.emoji
                    }), o]
                });
            case "textMention":
                return (0, i.jsxs)(c, {
                    attributes: l,
                    children: [(0, i.jsx)(s.TextMention, {
                        text: d.name,
                        channelId: n,
                        guildId: t
                    }), o]
                });
            case "userMention":
                return (0, i.jsxs)(c, {
                    attributes: l,
                    children: [(0, i.jsx)(s.UserMention, {
                        id: d.userId,
                        channelId: n,
                        guildId: t
                    }), o]
                });
            case "roleMention":
                return (0, i.jsxs)(c, {
                    attributes: l,
                    children: [(0, i.jsx)(s.RoleMention, {
                        id: d.roleId,
                        guildId: t
                    }), o]
                });
            case "channelMention":
                return (0, i.jsxs)(c, {
                    attributes: l,
                    children: [(0, i.jsx)(s.ChannelMention, {
                        id: d.channelId
                    }), o]
                });
            case "staticRouteLink":
                return (0, i.jsxs)(c, {
                    attributes: l,
                    children: [(0, i.jsx)(s.StaticRouteMention, {
                        id: d.channelId
                    }), o]
                });
            case "soundboard":
                return (0, i.jsxs)(c, {
                    attributes: l,
                    children: [(0, i.jsx)(s.SoundboardMention, {
                        id: d.soundId
                    }), o]
                });
            case "commandMention":
                return (0, i.jsxs)(c, {
                    attributes: l,
                    children: [(0, i.jsx)(s.CommandMention, {
                        text: d.commandName,
                        id: d.commandId
                    }), o]
                });
            case "timestamp":
                return (0, i.jsxs)(c, {
                    attributes: l,
                    children: [(0, i.jsx)(s.Timestamp, {
                        timestamp: d.parsed
                    }), o]
                });
            default:
                return null
        }
    }
    let c = e => {
        let {
            className: t,
            attributes: n,
            children: l
        } = e, s = a(o.inlineElement, o.inlineVoid, t);
        return (0, i.jsx)("span", {
            ...n,
            className: s,
            contentEditable: !1,
            children: l
        })
    }
}