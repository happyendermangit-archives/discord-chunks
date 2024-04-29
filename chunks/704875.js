function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("845537"),
        o = n("891414"),
        l = n("3500"),
        u = n("990291");

    function d(e, t, n) {
        let {
            attributes: r,
            children: l,
            element: d
        } = e;
        switch (d.type) {
            case "line":
                var c;
                if (null === (c = d.codeBlockState) || void 0 === c ? void 0 : c.isInCodeBlock) return (0, i.jsx)("div", {
                    className: o.codeLine,
                    spellCheck: null == d.codeBlockState || null == d.codeBlockState.lang,
                    ...r,
                    children: l
                });
                return (0, i.jsx)("div", {
                    ...r,
                    children: l
                });
            case "blockQuote": {
                let e = s()(u.blockquoteContainer, u.slateBlockquoteContainer);
                return (0, i.jsxs)("div", {
                    ...r,
                    className: e,
                    children: [(0, i.jsx)("span", {
                        contentEditable: !1,
                        className: u.blockquoteDivider
                    }), (0, i.jsx)("blockquote", {
                        children: l
                    })]
                })
            }
            case "emoji":
                return (0, i.jsxs)(_, {
                    attributes: r,
                    children: [(0, i.jsx)(a.Emoji, {
                        emoji: d.emoji
                    }), l]
                });
            case "customEmoji":
                return (0, i.jsxs)(_, {
                    attributes: r,
                    children: [(0, i.jsx)(a.CustomEmoji, {
                        emoji: d.emoji
                    }), l]
                });
            case "textMention":
                return (0, i.jsxs)(_, {
                    attributes: r,
                    children: [(0, i.jsx)(a.TextMention, {
                        text: d.name,
                        channelId: n,
                        guildId: t
                    }), l]
                });
            case "userMention":
                return (0, i.jsxs)(_, {
                    attributes: r,
                    children: [(0, i.jsx)(a.UserMention, {
                        id: d.userId,
                        channelId: n,
                        guildId: t
                    }), l]
                });
            case "roleMention":
                return (0, i.jsxs)(_, {
                    attributes: r,
                    children: [(0, i.jsx)(a.RoleMention, {
                        id: d.roleId,
                        guildId: t
                    }), l]
                });
            case "channelMention":
                return (0, i.jsxs)(_, {
                    attributes: r,
                    children: [(0, i.jsx)(a.ChannelMention, {
                        id: d.channelId
                    }), l]
                });
            case "staticRouteLink":
                return (0, i.jsxs)(_, {
                    attributes: r,
                    children: [(0, i.jsx)(a.StaticRouteMention, {
                        id: d.channelId
                    }), l]
                });
            case "soundboard":
                return (0, i.jsxs)(_, {
                    attributes: r,
                    children: [(0, i.jsx)(a.SoundboardMention, {
                        id: d.soundId
                    }), l]
                });
            case "commandMention":
                return (0, i.jsxs)(_, {
                    attributes: r,
                    children: [(0, i.jsx)(a.CommandMention, {
                        text: d.commandName,
                        id: d.commandId
                    }), l]
                });
            case "timestamp":
                return (0, i.jsxs)(_, {
                    attributes: r,
                    children: [(0, i.jsx)(a.Timestamp, {
                        timestamp: d.parsed
                    }), l]
                });
            default:
                return null
        }
    }
    let _ = e => {
        let {
            className: t,
            attributes: n,
            children: r
        } = e, a = s()(l.inlineElement, l.inlineVoid, t);
        return (0, i.jsx)("span", {
            ...n,
            className: a,
            contentEditable: !1,
            children: r
        })
    }
}