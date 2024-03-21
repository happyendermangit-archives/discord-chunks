function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        },
        run: function() {
            return y
        },
        convertRawToInlineVoids: function() {
            return C
        }
    }), n("222007"), n("424973");
    var i = n("627445"),
        l = n.n(i),
        a = n("798609"),
        s = n("383018"),
        r = n("118851"),
        o = n("83800"),
        u = n("135038"),
        d = n("970153"),
        c = n("939563"),
        f = n("385887");
    let p = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
        m = new Set(["emoji", "customEmoji", "textMention", "userMention", "roleMention", "channelMention", "staticRouteLink", "soundboard", "timestamp"]),
        h = new Set(["line", "blockQuote"]),
        x = new Set(["applicationCommandOption"]);

    function E(e, t, n) {
        let {
            isInline: i,
            isVoid: l,
            onChange: a
        } = e;
        e.isVoid = e => !!m.has(e.type) || l(e), e.isInline = e => !!m.has(e.type) || i(e);
        let s = null,
            r = !0;
        return e.onChange = () => {
            let i = f.EditorUtils.richValue(e);
            (i !== s || e.previewMarkdown !== r) && (o.HistoryUtils.withMergedEntry(e, () => {
                f.EditorUtils.withoutNormalizing(e, () => y(e, t, n))
            }), s = i, r = e.previewMarkdown), a()
        }, e
    }

    function y(e, t, n) {
        let i = f.EditorUtils.areStylesDisabled(e),
            l = f.EditorUtils.blocks(e);
        for (let a of l)
            if (h.has(a[0].type)) i ? S(e, a, !0, null) : g(e, a, t, n);
            else {
                let [l, s] = a;
                for (let a = l.children.length - 1; a >= 0; a--) {
                    let r = l.children[a];
                    if (x.has(r.type)) {
                        let l = [r, f.PathUtils.child(s, a)];
                        i ? S(e, l, !0, null) : g(e, l, t, n)
                    }
                }
            }
    }

    function g(e, t, n, i) {
        var a;
        let s = "line" === t[0].type && (null === (a = t[0].codeBlockState) || void 0 === a ? void 0 : a.isInCodeBlock) === !0,
            o = f.ElementUtils.markdown(t[0], n);
        S(e, t, s, o) && (t = f.ElementUtils.updateElement(e, t), o = f.ElementUtils.markdown(t[0], n)), !s && (C(e, t, i, o) && (t = f.ElementUtils.updateElement(e, t), o = f.ElementUtils.markdown(t[0], n)), function(e, t, n, i, a) {
            let [s, o] = t, u = !1;
            for (let d = s.children.length - 1; d >= 0; d--) {
                let m;
                let h = s.children[d];
                if (!f.TextUtils.isText(h)) continue;
                let x = f.PathUtils.child(o, d),
                    E = [];
                for (p.lastIndex = 0; null != (m = p.exec(h.text));) {
                    if (0 !== m.index && null == h.text.charAt(m.index - 1).match(/(\t|\s)/)) {
                        p.lastIndex = m.index + 1;
                        continue
                    }
                    let l = {
                        path: x,
                        offset: m.index
                    };
                    if (T(e, o, l, a)) continue;
                    let s = (0, r.resolvePlaintextInlineVoid)(m[0], n, i);
                    null != s && _(i, t[0], s) ? E.push({
                        index: m.index,
                        length: m[0].length,
                        node: s
                    }) : p.lastIndex = m.index + 1
                }
                for (let t of E.reverse()) {
                    let n = [h, f.PathUtils.child(o, d)];
                    (function(e, t, n, i, a) {
                        let [s, r] = t, o = {
                            path: r,
                            offset: n
                        }, u = {
                            path: r,
                            offset: n + i
                        };
                        l(o.offset >= 0 && o.offset <= s.text.length, "Failed to find valid start position for raw mention replace"), l(u.offset >= 0 && u.offset <= s.text.length, "Failed to find valid end position for raw mention replace"), c.SlateTransforms.textToVoid(e, a, {
                            anchor: o,
                            focus: u
                        })
                    })(e, n, t.index, t.length, t.node), u = !0
                }
            };
        }(e, t, n, i, o))
    }

    function S(e, t, n, i) {
        let [l, a] = t, s = !1;
        for (let t = l.children.length - 1; t >= 0; t--) {
            let r = l.children[t],
                o = t < l.children.length - 1 ? l.children[t + 1] : null;
            if (f.TextUtils.isText(r) && !n) {
                if (null == o || !e.isVoid(o)) continue;
                let n = !1,
                    i = 0;
                for (;;) {
                    let e = r.text.indexOf("\\", i);
                    if (-1 === e) break;
                    if (e === r.text.length - 1) {
                        n = !0;
                        break
                    }
                    i = e + 2
                }
                if (n) {
                    let n = f.PathUtils.child(a, t + 1);
                    c.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(o, {
                        mode: "plain",
                        preventEmojiSurrogates: !0
                    }), n), s = !0
                }
            } else if (e.isVoid(r)) {
                let l = f.PathUtils.child(a, t),
                    o = {
                        path: f.PathUtils.child(l, 0),
                        offset: 0
                    };
                (n || null != i && T(e, a, o, i)) && (c.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(r, {
                    mode: "plain",
                    preventEmojiSurrogates: !0
                }), l), s = !0)
            }
        }
        return s
    }

    function C(e, t, n, i) {
        let l = t[1],
            a = !1,
            s = [...i.entries].reverse();
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
            let o = (0, u.getPointFromPosition)(e, l, i.serializedChildren, r.start),
                d = (0, u.getPointFromPosition)(e, l, i.serializedChildren, r.start + r.text.length);
            c.SlateTransforms.textToVoid(e, s, {
                anchor: o,
                focus: d
            }), a = !0
        }
        return a
    }

    function T(e, t, n, i) {
        let l = 0;
        for (let [i, a] of f.EditorUtils.nodes(e, {
                at: {
                    anchor: f.EditorUtils.start(e, t),
                    focus: n
                },
                mode: "lowest"
            })) f.TextUtils.isText(i) ? f.PathUtils.equals(a, n.path) ? l += n.offset : l += i.text.length : l += 1;
        for (let e of i.entries) {
            if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
            let t = e.start,
                n = e.start + e.text.length;
            if (t <= l && n >= l) return !0
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