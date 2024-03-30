function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertRawToInlineVoids: function() {
            return g
        },
        default: function() {
            return O
        },
        run: function() {
            return T
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("29570"),
        a = n("471559"),
        u = n("119578"),
        s = n("610045"),
        l = n("840918"),
        c = n("590401"),
        f = n("453197"),
        d = n("714196");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || p(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function p(e, t) {
        if (e) {
            if ("string" == typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
        }
    }
    var m = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
        y = new Set(["emoji", "customEmoji", "textMention", "userMention", "roleMention", "channelMention", "staticRouteLink", "soundboard", "timestamp"]),
        I = new Set(["line", "blockQuote"]),
        h = new Set(["applicationCommandOption"]);

    function O(e, t, n) {
        var r = e.isInline,
            o = e.isVoid,
            i = e.onChange;
        e.isVoid = function(e) {
            return !!y.has(e.type) || o(e)
        }, e.isInline = function(e) {
            return !!y.has(e.type) || r(e)
        };
        var a = null,
            u = !0;
        return e.onChange = function() {
            var r = d.EditorUtils.richValue(e);
            (r !== a || e.previewMarkdown !== u) && (s.HistoryUtils.withMergedEntry(e, function() {
                d.EditorUtils.withoutNormalizing(e, function() {
                    return T(e, t, n)
                })
            }), a = r, u = e.previewMarkdown), i()
        }, e
    }

    function T(e, t, n) {
        var r = d.EditorUtils.areStylesDisabled(e),
            o = d.EditorUtils.blocks(e),
            i = !0,
            a = !1,
            u = void 0;
        try {
            for (var s, l = o[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                var c = s.value;
                if (I.has(c[0].type)) r ? v(e, c, !0, null) : S(e, c, t, n);
                else {
                    for (var f = E(c, 2), _ = f[0], p = f[1], m = _.children.length - 1; m >= 0; m--) {
                        var y = _.children[m];
                        if (h.has(y.type)) {
                            var O = [y, d.PathUtils.child(p, m)];
                            r ? v(e, O, !0, null) : S(e, O, t, n)
                        }
                    }
                }
            }
        } catch (e) {
            a = !0, u = e
        } finally {
            try {
                !i && null != l.return && l.return()
            } finally {
                if (a) throw u
            }
        }
    }

    function S(e, t, n, r) {
        var i, a = "line" === t[0].type && (null === (i = t[0].codeBlockState) || void 0 === i ? void 0 : i.isInCodeBlock) === !0,
            s = d.ElementUtils.markdown(t[0], n);
        v(e, t, a, s) && (t = d.ElementUtils.updateElement(e, t), s = d.ElementUtils.markdown(t[0], n)), !a && (g(e, t, r, s) && (t = d.ElementUtils.updateElement(e, t), s = d.ElementUtils.markdown(t[0], n)), function(e, t, n, r, i) {
            for (var a = E(t, 2), s = a[0], l = a[1], c = !1, _ = s.children.length - 1; _ >= 0; _--) {
                var p = s.children[_];
                if (d.TextUtils.isText(p)) {
                    var y = d.PathUtils.child(l, _),
                        I = [];
                    m.lastIndex = 0;
                    for (var h = void 0; null != (h = m.exec(p.text));) {
                        if (0 !== h.index && null == p.text.charAt(h.index - 1).match(/(\t|\s)/)) {
                            m.lastIndex = h.index + 1;
                            continue
                        }
                        if (!A(e, l, {
                                path: y,
                                offset: h.index
                            }, i)) {
                            var O = (0, u.resolvePlaintextInlineVoid)(h[0], n, r);
                            null != O && b(r, t[0], O) ? I.push({
                                index: h.index,
                                length: h[0].length,
                                node: O
                            }) : m.lastIndex = h.index + 1
                        }
                    }
                    var T = !0,
                        S = !1,
                        v = void 0;
                    try {
                        for (var g, N = I.reverse()[Symbol.iterator](); !(T = (g = N.next()).done); T = !0) {
                            var R = g.value,
                                C = [p, d.PathUtils.child(l, _)];
                            (function(e, t, n, r, i) {
                                var a = E(t, 2),
                                    u = a[0],
                                    s = a[1],
                                    l = {
                                        path: s,
                                        offset: n
                                    },
                                    c = {
                                        path: s,
                                        offset: n + r
                                    };
                                o()(l.offset >= 0 && l.offset <= u.text.length, "Failed to find valid start position for raw mention replace"), o()(c.offset >= 0 && c.offset <= u.text.length, "Failed to find valid end position for raw mention replace"), f.SlateTransforms.textToVoid(e, i, {
                                    anchor: l,
                                    focus: c
                                })
                            })(e, C, R.index, R.length, R.node), c = !0
                        }
                    } catch (e) {
                        S = !0, v = e
                    } finally {
                        try {
                            !T && null != N.return && N.return()
                        } finally {
                            if (S) throw v
                        }
                    }
                }
            };
        }(e, t, n, r, s))
    }

    function v(e, t, n, r) {
        for (var o = E(t, 2), i = o[0], a = o[1], u = !1, s = i.children.length - 1; s >= 0; s--) {
            var l = i.children[s],
                _ = s < i.children.length - 1 ? i.children[s + 1] : null;
            if (d.TextUtils.isText(l) && !n) {
                if (null == _ || !e.isVoid(_)) continue;
                for (var p = !1, m = 0;;) {
                    var y = l.text.indexOf("\\", m);
                    if (-1 === y) break;
                    if (y === l.text.length - 1) {
                        p = !0;
                        break
                    }
                    m = y + 2
                }
                if (p) {
                    var I = d.PathUtils.child(a, s + 1);
                    f.SlateTransforms.voidToText(e, (0, c.serializeDescendant)(_, {
                        mode: "plain",
                        preventEmojiSurrogates: !0
                    }), I), u = !0
                }
            } else if (e.isVoid(l)) {
                var h = d.PathUtils.child(a, s),
                    O = {
                        path: d.PathUtils.child(h, 0),
                        offset: 0
                    };
                (n || null != r && A(e, a, O, r)) && (f.SlateTransforms.voidToText(e, (0, c.serializeDescendant)(l, {
                    mode: "plain",
                    preventEmojiSurrogates: !0
                }), h), u = !0)
            }
        }
        return u
    }

    function g(e, t, n, r) {
        var o = t[1],
            i = !1;
        var a = ((function(e) {
                if (Array.isArray(e)) return _(e)
            })(d = r.entries) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(d) || p(d) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).reverse(),
            u = !0,
            s = !1,
            c = void 0;
        try {
            for (var d, E, m = a[Symbol.iterator](); !(u = (E = m.next()).done); u = !0) {
                var y = E.value,
                    I = void 0;
                switch (y.attributes[0]) {
                    case "emoji":
                        I = {
                            type: "emoji",
                            emoji: {
                                name: y.data.name,
                                src: y.data.src,
                                surrogate: y.data.surrogate,
                                jumboable: !0 === y.data.jumboable
                            },
                            children: [{
                                text: ""
                            }]
                        };
                        break;
                    case "customEmoji":
                        I = {
                            type: "customEmoji",
                            emoji: {
                                emojiId: y.data.emojiId,
                                name: y.data.name,
                                animated: y.data.animated,
                                jumboable: !0 === y.data.jumboable
                            },
                            children: [{
                                text: ""
                            }]
                        };
                        break;
                    case "textMention":
                        I = {
                            type: "textMention",
                            name: y.data.text,
                            children: [{
                                text: ""
                            }]
                        };
                        break;
                    case "mention":
                        I = {
                            type: "userMention",
                            userId: y.data.id,
                            children: [{
                                text: ""
                            }]
                        };
                        break;
                    case "roleMention":
                        I = {
                            type: "roleMention",
                            roleId: y.data.id,
                            children: [{
                                text: ""
                            }]
                        };
                        break;
                    case "channelMention":
                        I = {
                            type: "channelMention",
                            channelId: y.data.id,
                            children: [{
                                text: ""
                            }]
                        };
                        break;
                    case "staticRouteLink":
                        I = {
                            type: "staticRouteLink",
                            channelId: y.data.id,
                            children: [{
                                text: ""
                            }]
                        };
                        break;
                    case "soundboard":
                        I = {
                            type: "soundboard",
                            soundId: y.data.id,
                            children: [{
                                text: ""
                            }]
                        };
                        break;
                    case "timestamp":
                        I = {
                            type: "timestamp",
                            parsed: y.data,
                            children: [{
                                text: ""
                            }]
                        };
                        break;
                    default:
                        continue
                }
                if (b(n, t[0], I)) {
                    var h = (0, l.getPointFromPosition)(e, o, r.serializedChildren, y.start),
                        O = (0, l.getPointFromPosition)(e, o, r.serializedChildren, y.start + y.text.length);
                    f.SlateTransforms.textToVoid(e, I, {
                        anchor: h,
                        focus: O
                    }), i = !0
                }
            }
        } catch (e) {
            s = !0, c = e
        } finally {
            try {
                !u && null != m.return && m.return()
            } finally {
                if (s) throw c
            }
        }
        return i
    }

    function A(e, t, n, r) {
        var o = 0,
            i = !0,
            a = !1,
            u = void 0;
        try {
            for (var s, l = d.EditorUtils.nodes(e, {
                    at: {
                        anchor: d.EditorUtils.start(e, t),
                        focus: n
                    },
                    mode: "lowest"
                })[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                var c = E(s.value, 2),
                    f = c[0],
                    _ = c[1];
                d.TextUtils.isText(f) ? d.PathUtils.equals(_, n.path) ? o += n.offset : o += f.text.length : o += 1
            }
        } catch (e) {
            a = !0, u = e
        } finally {
            try {
                !i && null != l.return && l.return()
            } finally {
                if (a) throw u
            }
        }
        var p = !0,
            m = !1,
            y = void 0;
        try {
            for (var I, h = r.entries[Symbol.iterator](); !(p = (I = h.next()).done); p = !0) {
                var O = I.value;
                if (O.attributes.includes("codeBlockText") || O.attributes.includes("inlineCode")) {
                    var T = O.start,
                        S = O.start + O.text.length;
                    if (T <= o && S >= o) return !0
                }
            }
        } catch (e) {
            m = !0, y = e
        } finally {
            try {
                !p && null != h.return && h.return()
            } finally {
                if (m) throw y
            }
        }
        return !1
    }

    function b(e, t, n) {
        if ("applicationCommandOption" !== t.type) return !0;
        switch (t.optionType) {
            case i.ApplicationCommandOptionType.CHANNEL:
                return "channelMention" === n.type;
            case i.ApplicationCommandOptionType.ROLE:
                return "roleMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
            case i.ApplicationCommandOptionType.USER:
                return "userMention" === n.type;
            case i.ApplicationCommandOptionType.MENTIONABLE:
                return "roleMention" === n.type || "userMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
            case i.ApplicationCommandOptionType.STRING:
                var r = null != e ? a.default.getOption(e, t.optionName) : null;
                return (null == r ? void 0 : r.choices) == null && (null == r ? void 0 : r.autocomplete) !== !0;
            default:
                return !1
        }
    }
}