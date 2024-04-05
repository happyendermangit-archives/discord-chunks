function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        serializeDescendant: function() {
            return S
        },
        toTextValue: function() {
            return T
        }
    }), n("47120"), n("653041"), n("757143");
    var i = n("512722"),
        r = n.n(i),
        s = n("933557"),
        a = n("660199"),
        o = n("763296"),
        l = n("592125"),
        u = n("430824"),
        d = n("699516"),
        _ = n("914010"),
        c = n("594174"),
        E = n("51144"),
        I = n("887490");

    function T(e, t) {
        let {
            mode: n,
            ignoreTrailingEmptyNodes: i,
            preventEmojiSurrogates: r
        } = null != t ? t : {}, [s, a] = (null == t ? void 0 : t.range) != null ? I.RangeUtils.edges(t.range) : [void 0, void 0];
        return f(e, {
            mode: n,
            start: s,
            end: a,
            ignoreTrailingEmptyNodes: i,
            preventEmojiSurrogates: r
        })
    }

    function f(e, t) {
        var n, i;
        let {
            mode: r,
            start: s,
            end: a,
            separator: o,
            ignoreEmptyNodes: l,
            ignoreTrailingEmptyNodes: u,
            preventEmojiSurrogates: d
        } = null != t ? t : {}, _ = e.length > 0 && !I.TextUtils.isText(e[0]);
        null == o && (o = _ ? "\n" : "");
        let c = null !== (n = null == s ? void 0 : s.path[0]) && void 0 !== n ? n : 0,
            E = null !== (i = null == a ? void 0 : a.path[0]) && void 0 !== i ? i : e.length - 1;
        if (u)
            for (let t = E; t >= c; t--) {
                let n = e[t];
                if (I.TextUtils.isText(n)) {
                    if (n.text.length > 0) {
                        E = t;
                        break
                    }
                } else if (!I.ElementUtils.isEmpty(n)) {
                    E = t;
                    break
                }
                if (t === c) return ""
            }
        let T = c > 0 && I.NodeUtils.isType(e[c - 1], "blockQuote"),
            f = I.NodeUtils.isType(e[c], "blockQuote"),
            A = I.NodeUtils.isType(e[E], "blockQuote"),
            h = [];
        for (let t = c; t <= E; t++) {
            let n = e[t];
            if (l && I.TextUtils.isText(n) && 0 === n.text.length) continue;
            let i = null != s && t === c ? {
                    path: s.path.slice(1),
                    offset: s.offset
                } : void 0,
                o = null != a && t === E ? {
                    path: a.path.slice(1),
                    offset: a.offset
                } : void 0,
                u = S(n, {
                    mode: r,
                    start: i,
                    end: o,
                    allowBlockQuotePrefix: null == s || null == a || !T && (!f || A),
                    preventEmojiSurrogates: d
                });
            (!l || u.length > 0) && h.push(u)
        }
        return h.join(o)
    }

    function S(e, t) {
        let {
            mode: n,
            start: i,
            allowBlockQuotePrefix: T = !1,
            preventEmojiSurrogates: S = !1
        } = null != t ? t : {};
        if (I.TextUtils.isText(e)) return function(e, t) {
            var n, i;
            let {
                start: s,
                end: a
            } = null != t ? t : {};
            return r()(null == s || 0 === s.path.length, "Invalid start provided to serializeText"), r()(null == a || 0 === a.path.length, "Invalid end provided to serializeText"), e.substring(null !== (n = null == s ? void 0 : s.offset) && void 0 !== n ? n : 0, null !== (i = null == a ? void 0 : a.offset) && void 0 !== i ? i : e.length)
        }(e.text, t);
        switch (e.type) {
            case "line":
            case "testInline":
                return f(e.children, t);
            case "testInlineVoid":
                return "";
            case "blockQuote": {
                let n = f(e.children, t),
                    r = null != i && 1 === i.path.length && 0 === i.path[0] && 0 === i.offset;
                if (T && (null == i || r)) return "> ".concat(n);
                return n
            }
            case "emoji": {
                let t = e.emoji;
                if (!S && null != t.surrogate) return t.surrogate;
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
                let i = l.default.getChannel(e.channelId);
                if (null == i) return t;
                return (0, s.computeChannelName)(i, c.default, d.default, !0, !0)
            }
            case "soundboard": {
                let t = "<sound:".concat(e.soundId, ">");
                if ("raw" === n) return t;
                let i = o.default.getSoundById(e.soundId);
                if (null == i) return t;
                return i.name
            }
            case "staticRouteLink": {
                let t = "<id:".concat(e.channelId, ">");
                if ("raw" === n) return t;
                let i = l.default.getChannel(e.channelId);
                if (null == i) return t;
                return (0, s.computeChannelName)(i, c.default, d.default, !0, !0)
            }
            case "roleMention": {
                let t = "<@&".concat(e.roleId, ">");
                if ("raw" === n) return t;
                let i = _.default.getGuildId(),
                    r = null != i ? u.default.getRole(i, e.roleId) : void 0;
                if (null == r) return t;
                return "@".concat(r.name)
            }
            case "userMention": {
                let t = "<@".concat(e.userId, ">");
                if ("raw" === n) return t;
                let i = c.default.getUser(e.userId);
                if (null == i) return t;
                return "@".concat(E.default.getUserTag(i, {
                    decoration: "never"
                }))
            }
            case "commandMention":
                return "</".concat(e.commandName, ":").concat(e.commandId, ">");
            case "timestamp":
                return (0, a.unparseTimestamp)(e.parsed.timestamp, e.parsed.format);
            case "applicationCommand":
                return f(e.children, {
                    ...t,
                    separator: " ",
                    ignoreEmptyNodes: !0
                });
            case "applicationCommandOption": {
                let n = f(e.children, t);
                if (null == i) return "".concat(e.optionDisplayName, ":").concat(n);
                return n
            }
        }
    }
}