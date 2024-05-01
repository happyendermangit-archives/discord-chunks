function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("845537"),
        o = n("653309"),
        l = n("891414"),
        u = n("3500"),
        d = n("990291");

    function _(e, t, n) {
        var r, u;
        let {
            attributes: _,
            children: E,
            element: I,
            decorations: T
        } = e, f = function(e) {
            return Object.entries(e).filter(e => {
                let [t] = e;
                return "anchor" !== t && "focus" !== t
            }).map(e => {
                let [t, n] = e;
                return !0 === n && t in o.cssClasses ? o.cssClasses[t] : null
            }).filter(e => null != e).join(" ")
        }(null !== (r = T[0]) && void 0 !== r ? r : {});
        switch (I.type) {
            case "line":
                if (null === (u = I.codeBlockState) || void 0 === u ? void 0 : u.isInCodeBlock) return (0, i.jsx)("div", {
                    className: l.codeLine,
                    spellCheck: null == I.codeBlockState || null == I.codeBlockState.lang,
                    ..._,
                    children: E
                });
                return (0, i.jsx)("div", {
                    ..._,
                    children: E
                });
            case "blockQuote": {
                let e = a()(d.blockquoteContainer, d.slateBlockquoteContainer);
                return (0, i.jsxs)("div", {
                    ..._,
                    className: e,
                    children: [(0, i.jsx)("span", {
                        contentEditable: !1,
                        className: d.blockquoteDivider
                    }), (0, i.jsx)("blockquote", {
                        children: E
                    })]
                })
            }
            case "emoji":
                return (0, i.jsxs)(c, {
                    attributes: _,
                    className: f,
                    children: [(0, i.jsx)(s.Emoji, {
                        emoji: I.emoji
                    }), E]
                });
            case "customEmoji":
                return (0, i.jsxs)(c, {
                    attributes: _,
                    className: f,
                    children: [(0, i.jsx)(s.CustomEmoji, {
                        emoji: I.emoji
                    }), E]
                });
            case "textMention":
                return (0, i.jsxs)(c, {
                    attributes: _,
                    className: f,
                    children: [(0, i.jsx)(s.TextMention, {
                        text: I.name,
                        channelId: n,
                        guildId: t
                    }), E]
                });
            case "userMention":
                return (0, i.jsxs)(c, {
                    attributes: _,
                    className: f,
                    children: [(0, i.jsx)(s.UserMention, {
                        id: I.userId,
                        channelId: n,
                        guildId: t
                    }), E]
                });
            case "roleMention":
                return (0, i.jsxs)(c, {
                    attributes: _,
                    className: f,
                    children: [(0, i.jsx)(s.RoleMention, {
                        id: I.roleId,
                        guildId: t
                    }), E]
                });
            case "channelMention":
                return (0, i.jsxs)(c, {
                    attributes: _,
                    className: f,
                    children: [(0, i.jsx)(s.ChannelMention, {
                        id: I.channelId
                    }), E]
                });
            case "staticRouteLink":
                return (0, i.jsxs)(c, {
                    attributes: _,
                    className: f,
                    children: [(0, i.jsx)(s.StaticRouteMention, {
                        id: I.channelId
                    }), E]
                });
            case "soundboard":
                return (0, i.jsxs)(c, {
                    attributes: _,
                    className: f,
                    children: [(0, i.jsx)(s.SoundboardMention, {
                        id: I.soundId
                    }), E]
                });
            case "commandMention":
                return (0, i.jsxs)(c, {
                    attributes: _,
                    className: f,
                    children: [(0, i.jsx)(s.CommandMention, {
                        text: I.commandName,
                        id: I.commandId
                    }), E]
                });
            case "timestamp":
                return (0, i.jsxs)(c, {
                    attributes: _,
                    className: f,
                    children: [(0, i.jsx)(s.Timestamp, {
                        timestamp: I.parsed
                    }), E]
                });
            default:
                return null
        }
    }
    let c = e => {
        let {
            className: t,
            attributes: n,
            children: r
        } = e, s = a()(u.inlineElement, u.inlineVoid, t);
        return (0, i.jsx)("span", {
            ...n,
            className: s,
            contentEditable: !1,
            children: r
        })
    }
}