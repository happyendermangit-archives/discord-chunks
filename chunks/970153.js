function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        toTextValue: function() {
            return h
        },
        serializeDescendant: function() {
            return g
        }
    }), n("222007"), n("424973"), n("781738");
    var l = n("627445"),
        i = n.n(l),
        a = n("679653"),
        s = n("646630"),
        r = n("235004"),
        o = n("42203"),
        u = n("305961"),
        d = n("27618"),
        c = n("162771"),
        f = n("697218"),
        m = n("158998"),
        p = n("385887");

    function h(e, t) {
        let {
            mode: n,
            ignoreTrailingEmptyNodes: l,
            preventEmojiSurrogates: i
        } = null != t ? t : {}, [a, s] = (null == t ? void 0 : t.range) != null ? p.RangeUtils.edges(t.range) : [void 0, void 0];
        return E(e, {
            mode: n,
            start: a,
            end: s,
            ignoreTrailingEmptyNodes: l,
            preventEmojiSurrogates: i
        })
    }

    function E(e, t) {
        var n, l;
        let {
            mode: i,
            start: a,
            end: s,
            separator: r,
            ignoreEmptyNodes: o,
            ignoreTrailingEmptyNodes: u,
            preventEmojiSurrogates: d
        } = null != t ? t : {}, c = e.length > 0 && !p.TextUtils.isText(e[0]);
        null == r && (r = c ? "\n" : "");
        let f = null !== (n = null == a ? void 0 : a.path[0]) && void 0 !== n ? n : 0,
            m = null !== (l = null == s ? void 0 : s.path[0]) && void 0 !== l ? l : e.length - 1;
        if (u)
            for (let t = m; t >= f; t--) {
                let n = e[t];
                if (p.TextUtils.isText(n)) {
                    if (n.text.length > 0) {
                        m = t;
                        break
                    }
                } else if (!p.ElementUtils.isEmpty(n)) {
                    m = t;
                    break
                }
                if (t === f) return ""
            }
        let h = f > 0 && p.NodeUtils.isType(e[f - 1], "blockQuote"),
            E = p.NodeUtils.isType(e[f], "blockQuote"),
            C = p.NodeUtils.isType(e[m], "blockQuote"),
            S = [];
        for (let t = f; t <= m; t++) {
            let n = e[t];
            if (o && p.TextUtils.isText(n) && 0 === n.text.length) continue;
            let l = null != a && t === f ? {
                    path: a.path.slice(1),
                    offset: a.offset
                } : void 0,
                r = null != s && t === m ? {
                    path: s.path.slice(1),
                    offset: s.offset
                } : void 0,
                u = null == a || null == s || !h && (!E || C),
                c = g(n, {
                    mode: i,
                    start: l,
                    end: r,
                    allowBlockQuotePrefix: u,
                    preventEmojiSurrogates: d
                });
            (!o || c.length > 0) && S.push(c)
        }
        return S.join(r)
    }

    function g(e, t) {
        let {
            mode: n,
            start: l,
            allowBlockQuotePrefix: h = !1,
            preventEmojiSurrogates: g = !1
        } = null != t ? t : {};
        if (p.TextUtils.isText(e)) return function(e, t) {
            var n, l;
            let {
                start: a,
                end: s
            } = null != t ? t : {};
            return i(null == a || 0 === a.path.length, "Invalid start provided to serializeText"), i(null == s || 0 === s.path.length, "Invalid end provided to serializeText"), e.substring(null !== (n = null == a ? void 0 : a.offset) && void 0 !== n ? n : 0, null !== (l = null == s ? void 0 : s.offset) && void 0 !== l ? l : e.length)
        }(e.text, t);
        switch (e.type) {
            case "line":
            case "testInline":
                return E(e.children, t);
            case "testInlineVoid":
                return "";
            case "blockQuote": {
                let n = E(e.children, t),
                    i = null != l && 1 === l.path.length && 0 === l.path[0] && 0 === l.offset;
                if (h && (null == l || i)) return "> ".concat(n);
                return n
            }
            case "emoji": {
                let t = e.emoji;
                if (!g && null != t.surrogate) return t.surrogate;
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
                let l = o.default.getChannel(e.channelId);
                if (null == l) return t;
                return (0, a.computeChannelName)(l, f.default, d.default, !0, !0)
            }
            case "soundboard": {
                let t = "<sound:".concat(e.soundId, ">");
                if ("raw" === n) return t;
                let l = r.default.getSoundById(e.soundId);
                if (null == l) return t;
                return l.name
            }
            case "staticRouteLink": {
                let t = "<id:".concat(e.channelId, ">");
                if ("raw" === n) return t;
                let l = o.default.getChannel(e.channelId);
                if (null == l) return t;
                return (0, a.computeChannelName)(l, f.default, d.default, !0, !0)
            }
            case "roleMention": {
                let t = "<@&".concat(e.roleId, ">");
                if ("raw" === n) return t;
                let l = u.default.getGuild(c.default.getGuildId()),
                    i = null == l ? void 0 : l.roles[e.roleId];
                if (null == i) return t;
                return "@".concat(i.name)
            }
            case "userMention": {
                let t = "<@".concat(e.userId, ">");
                if ("raw" === n) return t;
                let l = f.default.getUser(e.userId);
                if (null == l) return t;
                return "@".concat(m.default.getUserTag(l, {
                    decoration: "never"
                }))
            }
            case "commandMention":
                return "</".concat(e.commandName, ":").concat(e.commandId, ">");
            case "timestamp":
                return (0, s.unparseTimestamp)(e.parsed.timestamp, e.parsed.format);
            case "applicationCommand":
                return E(e.children, {
                    ...t,
                    separator: " ",
                    ignoreEmptyNodes: !0
                });
            case "applicationCommandOption": {
                let n = E(e.children, t);
                if (null == l) return "".concat(e.optionDisplayName, ":").concat(n);
                return n
            }
        }
    }
}