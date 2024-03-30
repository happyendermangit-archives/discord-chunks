function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        serializeDescendant: function() {
            return I
        },
        toTextValue: function() {
            return m
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("534965"),
        a = n("591234"),
        u = n("452700"),
        s = n("935741"),
        l = n("306912"),
        c = n("776982"),
        f = n("63116"),
        d = n("208454"),
        _ = n("830567"),
        E = n("714196");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        var n, r, o = null != t ? t : {},
            i = o.mode,
            a = o.ignoreTrailingEmptyNodes,
            u = o.preventEmojiSurrogates;
        var s = (n = (null == t ? void 0 : t.range) != null ? E.RangeUtils.edges(t.range) : [void 0, void 0], r = 2, function(e) {
            if (Array.isArray(e)) return e
        }(n) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(n, r) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
            }
        }(n, r) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }());
        return y(e, {
            mode: i,
            start: s[0],
            end: s[1],
            ignoreTrailingEmptyNodes: a,
            preventEmojiSurrogates: u
        })
    }

    function y(e, t) {
        var n, r, o = null != t ? t : {},
            i = o.mode,
            a = o.start,
            u = o.end,
            s = o.separator,
            l = o.ignoreEmptyNodes,
            c = o.ignoreTrailingEmptyNodes,
            f = o.preventEmojiSurrogates,
            d = e.length > 0 && !E.TextUtils.isText(e[0]);
        null == s && (s = d ? "\n" : "");
        var _ = null !== (n = null == a ? void 0 : a.path[0]) && void 0 !== n ? n : 0,
            p = null !== (r = null == u ? void 0 : u.path[0]) && void 0 !== r ? r : e.length - 1;
        if (c)
            for (var m = p; m >= _; m--) {
                var y = e[m];
                if (E.TextUtils.isText(y)) {
                    if (y.text.length > 0) {
                        p = m;
                        break
                    }
                } else if (!E.ElementUtils.isEmpty(y)) {
                    p = m;
                    break
                }
                if (m === _) return ""
            }
        for (var h = _ > 0 && E.NodeUtils.isType(e[_ - 1], "blockQuote"), O = E.NodeUtils.isType(e[_], "blockQuote"), T = E.NodeUtils.isType(e[p], "blockQuote"), S = [], v = _; v <= p; v++) {
            var g = e[v];
            if (!(l && E.TextUtils.isText(g)) || 0 !== g.text.length) {
                var A = I(g, {
                    mode: i,
                    start: null != a && v === _ ? {
                        path: a.path.slice(1),
                        offset: a.offset
                    } : void 0,
                    end: null != u && v === p ? {
                        path: u.path.slice(1),
                        offset: u.offset
                    } : void 0,
                    allowBlockQuotePrefix: null == a || null == u || !h && (!O || T),
                    preventEmojiSurrogates: f
                });
                (!l || A.length > 0) && S.push(A)
            }
        }
        return S.join(s)
    }

    function I(e, t) {
        var n, r, p = null != t ? t : {},
            m = p.mode,
            I = p.start,
            h = p.allowBlockQuotePrefix,
            O = p.preventEmojiSurrogates;
        if (E.TextUtils.isText(e)) return function(e, t) {
            var n, r, i = null != t ? t : {},
                a = i.start,
                u = i.end;
            return o()(null == a || 0 === a.path.length, "Invalid start provided to serializeText"), o()(null == u || 0 === u.path.length, "Invalid end provided to serializeText"), e.substring(null !== (n = null == a ? void 0 : a.offset) && void 0 !== n ? n : 0, null !== (r = null == u ? void 0 : u.offset) && void 0 !== r ? r : e.length)
        }(e.text, t);
        switch (e.type) {
            case "line":
            case "testInline":
                return y(e.children, t);
            case "testInlineVoid":
                return "";
            case "blockQuote":
                var T = y(e.children, t),
                    S = null != I && 1 === I.path.length && 0 === I.path[0] && 0 === I.offset;
                if (void 0 !== h && h && (null == I || S)) return "> ".concat(T);
                return T;
            case "emoji":
                var v = e.emoji;
                if (!(void 0 !== O && O) && null != v.surrogate) return v.surrogate;
                return v.name;
            case "customEmoji":
                var g = e.emoji;
                if ("raw" === m) {
                    var A = g.animated ? "a" : "",
                        b = g.name.replace(/:/g, "").split("~")[0];
                    return "<".concat(A, ":").concat(b, ":").concat(g.emojiId, ">")
                }
                return g.name;
            case "textMention":
                return e.name;
            case "channelMention":
                var N = "<#".concat(e.channelId, ">");
                if ("raw" === m) return N;
                var R = s.default.getChannel(e.channelId);
                if (null == R) return N;
                return (0, i.computeChannelName)(R, d.default, c.default, !0, !0);
            case "soundboard":
                var C = "<sound:".concat(e.soundId, ">");
                if ("raw" === m) return C;
                var P = u.default.getSoundById(e.soundId);
                if (null == P) return C;
                return P.name;
            case "staticRouteLink":
                var D = "<id:".concat(e.channelId, ">");
                if ("raw" === m) return D;
                var L = s.default.getChannel(e.channelId);
                if (null == L) return D;
                return (0, i.computeChannelName)(L, d.default, c.default, !0, !0);
            case "roleMention":
                var M = "<@&".concat(e.roleId, ">");
                if ("raw" === m) return M;
                var U = f.default.getGuildId(),
                    w = null != U ? l.default.getRole(U, e.roleId) : void 0;
                if (null == w) return M;
                return "@".concat(w.name);
            case "userMention":
                var k = "<@".concat(e.userId, ">");
                if ("raw" === m) return k;
                var G = d.default.getUser(e.userId);
                if (null == G) return k;
                return "@".concat(_.default.getUserTag(G, {
                    decoration: "never"
                }));
            case "commandMention":
                return "</".concat(e.commandName, ":").concat(e.commandId, ">");
            case "timestamp":
                return (0, a.unparseTimestamp)(e.parsed.timestamp, e.parsed.format);
            case "applicationCommand":
                ;
                return y(e.children, (n = function(e) {
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
                }({}, t), r = (r = {
                    separator: " ",
                    ignoreEmptyNodes: !0
                }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n));
            case "applicationCommandOption":
                var B = y(e.children, t);
                if (null == I) return "".concat(e.optionDisplayName, ":").concat(B);
                return B
        }
    }
}