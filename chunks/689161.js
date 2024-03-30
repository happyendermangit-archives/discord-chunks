function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("384532"),
        u = n("97931"),
        s = n("500813"),
        l = n("931093");

    function c(e) {
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

    function f(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function d(e, t, n) {
        var o, s = e.attributes,
            d = e.children,
            E = e.element;
        switch (E.type) {
            case "line":
                if (null === (o = E.codeBlockState) || void 0 === o ? void 0 : o.isInCodeBlock) return r.createElement("div", c({
                    className: u.codeLine,
                    spellCheck: null == E.codeBlockState || null == E.codeBlockState.lang
                }, s), d);
                return r.createElement("div", s, d);
            case "blockQuote":
                var p = i()(l.blockquoteContainer, l.slateBlockquoteContainer);
                return r.createElement("div", f(c({}, s), {
                    className: p
                }), r.createElement("span", {
                    contentEditable: !1,
                    className: l.blockquoteDivider
                }), r.createElement("blockquote", null, d));
            case "emoji":
                return r.createElement(_, {
                    attributes: s
                }, r.createElement(a.Emoji, {
                    emoji: E.emoji
                }), d);
            case "customEmoji":
                return r.createElement(_, {
                    attributes: s
                }, r.createElement(a.CustomEmoji, {
                    emoji: E.emoji
                }), d);
            case "textMention":
                return r.createElement(_, {
                    attributes: s
                }, r.createElement(a.TextMention, {
                    text: E.name,
                    channelId: n,
                    guildId: t
                }), d);
            case "userMention":
                return r.createElement(_, {
                    attributes: s
                }, r.createElement(a.UserMention, {
                    id: E.userId,
                    channelId: n,
                    guildId: t
                }), d);
            case "roleMention":
                return r.createElement(_, {
                    attributes: s
                }, r.createElement(a.RoleMention, {
                    id: E.roleId,
                    guildId: t
                }), d);
            case "channelMention":
                return r.createElement(_, {
                    attributes: s
                }, r.createElement(a.ChannelMention, {
                    id: E.channelId
                }), d);
            case "staticRouteLink":
                return r.createElement(_, {
                    attributes: s
                }, r.createElement(a.StaticRouteMention, {
                    id: E.channelId
                }), d);
            case "soundboard":
                return r.createElement(_, {
                    attributes: s
                }, r.createElement(a.SoundboardMention, {
                    id: E.soundId
                }), d);
            case "commandMention":
                return r.createElement(_, {
                    attributes: s
                }, r.createElement(a.CommandMention, {
                    text: E.commandName,
                    id: E.commandId
                }), d);
            case "timestamp":
                return r.createElement(_, {
                    attributes: s
                }, r.createElement(a.Timestamp, {
                    timestamp: E.parsed
                }), d);
            default:
                return null
        }
    }
    var _ = function(e) {
        var t = e.className,
            n = e.attributes,
            o = e.children,
            a = i()(s.inlineElement, s.inlineVoid, t);
        return r.createElement("span", f(c({}, n), {
            className: a,
            contentEditable: !1
        }), o)
    }
}