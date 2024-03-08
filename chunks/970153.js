function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        toTextValue: function() {
            return h
        },
        serializeDescendant: function() {
            return E
        }
    }), n("222007"), n("424973"), n("781738");
    var i = n("627445"),
        l = n.n(i),
        a = n("679653"),
        s = n("646630"),
        r = n("235004"),
        o = n("42203"),
        u = n("305961"),
        d = n("27618"),
        c = n("162771"),
        f = n("697218"),
        p = n("158998"),
        m = n("385887");

    function h(e, t) {
        let {
            mode: n,
            ignoreTrailingEmptyNodes: i,
            preventEmojiSurrogates: l
        } = null != t ? t : {}, [a, s] = (null == t ? void 0 : t.range) != null ? m.RangeUtils.edges(t.range) : [void 0, void 0];
        return x(e, {
            mode: n,
            start: a,
            end: s,
            ignoreTrailingEmptyNodes: i,
            preventEmojiSurrogates: l
        })
    }

    function x(e, t) {
        var n, i;
        let {
            mode: l,
            start: a,
            end: s,
            separator: r,
            ignoreEmptyNodes: o,
            ignoreTrailingEmptyNodes: u,
            preventEmojiSurrogates: d
        } = null != t ? t : {}, c = e.length > 0 && !m.TextUtils.isText(e[0]);
        null == r && (r = c ? "\n" : "");
        let f = null !== (n = null == a ? void 0 : a.path[0]) && void 0 !== n ? n : 0,
            p = null !== (i = null == s ? void 0 : s.path[0]) && void 0 !== i ? i : e.length - 1;
        if (u)
            for (let t = p; t >= f; t--) {
                let n = e[t];
                if (m.TextUtils.isText(n)) {
                    if (n.text.length > 0) {
                        p = t;
                        break
                    }
                } else if (!m.ElementUtils.isEmpty(n)) {
                    p = t;
                    break
                }
                if (t === f) return ""
            }
        let h = f > 0 && m.NodeUtils.isType(e[f - 1], "blockQuote"),
            x = m.NodeUtils.isType(e[f], "blockQuote"),
            y = m.NodeUtils.isType(e[p], "blockQuote"),
            g = [];
        for (let t = f; t <= p; t++) {
            let n = e[t];
            if (o && m.TextUtils.isText(n) && 0 === n.text.length) continue;
            let i = null != a && t === f ? {
                    path: a.path.slice(1),
                    offset: a.offset
                } : void 0,
                r = null != s && t === p ? {
                    path: s.path.slice(1),
                    offset: s.offset
                } : void 0,
                u = null == a || null == s || !h && (!x || y),
                c = E(n, {
                    mode: l,
                    start: i,
                    end: r,
                    allowBlockQuotePrefix: u,
                    preventEmojiSurrogates: d
                });
            (!o || c.length > 0) && g.push(c)
        }
        return g.join(r)
    }

    function E(e, t) {
        let {
            mode: n,
            start: i,
            allowBlockQuotePrefix: h = !1,
            preventEmojiSurrogates: E = !1
        } = null != t ? t : {};
        if (m.TextUtils.isText(e)) return function(e, t) {
            var n, i;
            let {
                start: a,
                end: s
            } = null != t ? t : {};
            return l(null == a || 0 === a.path.length, "Invalid start provided to serializeText"), l(null == s || 0 === s.path.length, "Invalid end provided to serializeText"), e.substring(null !== (n = null == a ? void 0 : a.offset) && void 0 !== n ? n : 0, null !== (i = null == s ? void 0 : s.offset) && void 0 !== i ? i : e.length)
        }(e.text, t);
        switch (e.type) {
            case "line":
            case "testInline":
                return x(e.children, t);
            case "testInlineVoid":
                return "";
            case "blockQuote": {
                let n = x(e.children, t),
                    l = null != i && 1 === i.path.length && 0 === i.path[0] && 0 === i.offset;
                if (h && (null == i || l)) return "> ".concat(n);
                return n
            }
            case "emoji": {
                let t = e.emoji;
                if (!E && null != t.surrogate) return t.surrogate;
                return t.name
            }
            case "customEmoji": {
                let t = e.emoji;
                if ("raw" === n) {
                    let e = t.animated ? "a" : "",
                        n = t.name.replace(/:/g, "").split("~")[0];
                    return "<".concat(e, ":").concat(n, ":").concat(t.emojiId, ">")
                }
                return t.name
            }
            case "textMention":
                return e.name;
            case "channelMention": {
                let t = "<#".concat(e.channelId, ">");
                if ("raw" === n) return t;
                let i = o.default.getChannel(e.channelId);
                if (null == i) return t;
                return (0, a.computeChannelName)(i, f.default, d.default, !0, !0)
            }
            case "soundboard": {
                let t = "<sound:".concat(e.soundId, ">");
                if ("raw" === n) return t;
                let i = r.default.getSoundById(e.soundId);
                if (null == i) return t;
                return i.name
            }
            case "staticRouteLink": {
                let t = "<id:".concat(e.channelId, ">");
                if ("raw" === n) return t;
                let i = o.default.getChannel(e.channelId);
                if (null == i) return t;
                return (0, a.computeChannelName)(i, f.default, d.default, !0, !0)
            }
            case "roleMention": {
                let t = "<@&".concat(e.roleId, ">");
                if ("raw" === n) return t;
                let i = c.default.getGuildId(),
                    l = null != i ? u.default.getRole(i, e.roleId) : void 0;
                if (null == l) return t;
                return "@".concat(l.name)
            }
            case "userMention": {
                let t = "<@".concat(e.userId, ">");
                if ("raw" === n) return t;
                let i = f.default.getUser(e.userId);
                if (null == i) return t;
                return "@".concat(p.default.getUserTag(i, {
                    decoration: "never"
                }))
            }
            case "commandMention":
                return "</".concat(e.commandName, ":").concat(e.commandId, ">");
            case "timestamp":
                return (0, s.unparseTimestamp)(e.parsed.timestamp, e.parsed.format);
            case "applicationCommand":
                return x(e.children, {
                    ...t,
                    separator: " ",
                    ignoreEmptyNodes: !0
                });
            case "applicationCommandOption": {
                let n = x(e.children, t);
                if (null == i) return "".concat(e.optionDisplayName, ":").concat(n);
                return n
            }
        }
    }
}