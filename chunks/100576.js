function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        },
        run: function() {
            return C
        },
        convertRawToInlineVoids: function() {
            return I
        }
    }), n("222007"), n("424973");
    var l = n("627445"),
        i = n.n(l),
        a = n("798609"),
        s = n("383018"),
        r = n("118851"),
        o = n("83800"),
        u = n("135038"),
        d = n("970153"),
        c = n("939563"),
        f = n("385887");
    let m = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
        p = new Set(["emoji", "customEmoji", "textMention", "userMention", "roleMention", "channelMention", "staticRouteLink", "soundboard", "timestamp"]),
        h = new Set(["line", "blockQuote"]),
        E = new Set(["applicationCommandOption"]);

    function g(e, t, n) {
        let {
            isInline: l,
            isVoid: i,
            onChange: a
        } = e;
        e.isVoid = e => !!p.has(e.type) || i(e), e.isInline = e => !!p.has(e.type) || l(e);
        let s = null,
            r = !0;
        return e.onChange = () => {
            let l = f.EditorUtils.richValue(e);
            (l !== s || e.previewMarkdown !== r) && (o.HistoryUtils.withMergedEntry(e, () => {
                f.EditorUtils.withoutNormalizing(e, () => C(e, t, n))
            }), s = l, r = e.previewMarkdown), a()
        }, e
    }

    function C(e, t, n) {
        let l = f.EditorUtils.areStylesDisabled(e),
            i = f.EditorUtils.blocks(e);
        for (let a of i)
            if (h.has(a[0].type)) l ? T(e, a, !0, null) : S(e, a, t, n);
            else {
                let [i, s] = a;
                for (let a = i.children.length - 1; a >= 0; a--) {
                    let r = i.children[a];
                    if (E.has(r.type)) {
                        let i = [r, f.PathUtils.child(s, a)];
                        l ? T(e, i, !0, null) : S(e, i, t, n)
                    }
                }
            }
    }

    function S(e, t, n, l) {
        var a;
        let s = "line" === t[0].type && (null === (a = t[0].codeBlockState) || void 0 === a ? void 0 : a.isInCodeBlock) === !0,
            o = f.ElementUtils.markdown(t[0], n);
        T(e, t, s, o) && (t = f.ElementUtils.updateElement(e, t), o = f.ElementUtils.markdown(t[0], n)), !s && (I(e, t, l, o) && (t = f.ElementUtils.updateElement(e, t), o = f.ElementUtils.markdown(t[0], n)), function(e, t, n, l, a) {
            let [s, o] = t, u = !1;
            for (let d = s.children.length - 1; d >= 0; d--) {
                let p;
                let h = s.children[d];
                if (!f.TextUtils.isText(h)) continue;
                let E = f.PathUtils.child(o, d),
                    g = [];
                for (m.lastIndex = 0; null != (p = m.exec(h.text));) {
                    if (0 !== p.index && null == h.text.charAt(p.index - 1).match(/(\t|\s)/)) {
                        m.lastIndex = p.index + 1;
                        continue
                    }
                    let i = {
                        path: E,
                        offset: p.index
                    };
                    if (v(e, o, i, a)) continue;
                    let s = (0, r.resolvePlaintextInlineVoid)(p[0], n, l);
                    null != s && _(l, t[0], s) ? g.push({
                        index: p.index,
                        length: p[0].length,
                        node: s
                    }) : m.lastIndex = p.index + 1
                }
                for (let t of g.reverse()) {
                    let n = [h, f.PathUtils.child(o, d)];
                    (function(e, t, n, l, a) {
                        let [s, r] = t, o = {
                            path: r,
                            offset: n
                        }, u = {
                            path: r,
                            offset: n + l
                        };
                        i(o.offset >= 0 && o.offset <= s.text.length, "Failed to find valid start position for raw mention replace"), i(u.offset >= 0 && u.offset <= s.text.length, "Failed to find valid end position for raw mention replace"), c.SlateTransforms.textToVoid(e, a, {
                            anchor: o,
                            focus: u
                        })
                    })(e, n, t.index, t.length, t.node), u = !0
                }
            };
        }(e, t, n, l, o))
    }

    function T(e, t, n, l) {
        let [i, a] = t, s = !1;
        for (let t = i.children.length - 1; t >= 0; t--) {
            let r = i.children[t],
                o = t < i.children.length - 1 ? i.children[t + 1] : null;
            if (f.TextUtils.isText(r) && !n) {
                if (null == o || !e.isVoid(o)) continue;
                let n = !1,
                    l = 0;
                for (;;) {
                    let e = r.text.indexOf("\\", l);
                    if (-1 === e) break;
                    if (e === r.text.length - 1) {
                        n = !0;
                        break
                    }
                    l = e + 2
                }
                if (n) {
                    let n = f.PathUtils.child(a, t + 1);
                    c.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(o, {
                        mode: "plain",
                        preventEmojiSurrogates: !0
                    }), n), s = !0
                }
            } else if (e.isVoid(r)) {
                let i = f.PathUtils.child(a, t),
                    o = {
                        path: f.PathUtils.child(i, 0),
                        offset: 0
                    };
                (n || null != l && v(e, a, o, l)) && (c.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(r, {
                    mode: "plain",
                    preventEmojiSurrogates: !0
                }), i), s = !0)
            }
        }
        return s
    }

    function I(e, t, n, l) {
        let i = t[1],
            a = !1,
            s = [...l.entries].reverse();
        for (let r of s) {
            let s;
            switch (r.attributes[0]) {
                case "emoji":
                    s = {
                        type: "emoji",
                        emoji: {
                            name: r.data.name,
                            src: r.data.src,
                            surrogate: r.data.surrogate,
                            jumboable: !0 === r.data.jumboable
                        },
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "customEmoji":
                    s = {
                        type: "customEmoji",
                        emoji: {
                            emojiId: r.data.emojiId,
                            name: r.data.name,
                            animated: r.data.animated,
                            jumboable: !0 === r.data.jumboable
                        },
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "textMention":
                    s = {
                        type: "textMention",
                        name: r.data.text,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "mention":
                    s = {
                        type: "userMention",
                        userId: r.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "roleMention":
                    s = {
                        type: "roleMention",
                        roleId: r.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "channelMention":
                    s = {
                        type: "channelMention",
                        channelId: r.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "staticRouteLink":
                    s = {
                        type: "staticRouteLink",
                        channelId: r.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "soundboard":
                    s = {
                        type: "soundboard",
                        soundId: r.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "timestamp":
                    s = {
                        type: "timestamp",
                        parsed: r.data,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                default:
                    continue
            }
            if (!_(n, t[0], s)) continue;
            let o = (0, u.getPointFromPosition)(e, i, l.serializedChildren, r.start),
                d = (0, u.getPointFromPosition)(e, i, l.serializedChildren, r.start + r.text.length);
            c.SlateTransforms.textToVoid(e, s, {
                anchor: o,
                focus: d
            }), a = !0
        }
        return a
    }

    function v(e, t, n, l) {
        let i = 0;
        for (let [l, a] of f.EditorUtils.nodes(e, {
                at: {
                    anchor: f.EditorUtils.start(e, t),
                    focus: n
                },
                mode: "lowest"
            })) f.TextUtils.isText(l) ? f.PathUtils.equals(a, n.path) ? i += n.offset : i += l.text.length : i += 1;
        for (let e of l.entries) {
            if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
            let t = e.start,
                n = e.start + e.text.length;
            if (t <= i && n >= i) return !0
        }
        return !1
    }

    function _(e, t, n) {
        if ("applicationCommandOption" !== t.type) return !0;
        switch (t.optionType) {
            case a.ApplicationCommandOptionType.CHANNEL:
                return "channelMention" === n.type;
            case a.ApplicationCommandOptionType.ROLE:
                return "roleMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
            case a.ApplicationCommandOptionType.USER:
                return "userMention" === n.type;
            case a.ApplicationCommandOptionType.MENTIONABLE:
                return "roleMention" === n.type || "userMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
            case a.ApplicationCommandOptionType.STRING: {
                let n = null != e ? s.default.getOption(e, t.optionName) : null;
                return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0
            }
            default:
                return !1
        }
    }
}