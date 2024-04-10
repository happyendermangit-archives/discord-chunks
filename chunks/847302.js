function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertRawToInlineVoids: function() {
            return N
        },
        default: function() {
            return S
        },
        run: function() {
            return A
        }
    }), n("47120"), n("653041");
    var i = n("512722"),
        r = n.n(i),
        s = n("911969"),
        a = n("998698"),
        o = n("465343"),
        l = n("53529"),
        u = n("341702"),
        d = n("925994"),
        _ = n("436660"),
        c = n("887490");
    let E = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
        I = new Set(["emoji", "customEmoji", "textMention", "userMention", "roleMention", "channelMention", "staticRouteLink", "soundboard", "timestamp"]),
        T = new Set(["line", "blockQuote"]),
        f = new Set(["applicationCommandOption"]);

    function S(e, t, n) {
        let {
            isInline: i,
            isVoid: r,
            onChange: s
        } = e;
        e.isVoid = e => !!I.has(e.type) || r(e), e.isInline = e => !!I.has(e.type) || i(e);
        let a = null,
            o = !0;
        return e.onChange = () => {
            let i = c.EditorUtils.richValue(e);
            (i !== a || e.previewMarkdown !== o) && (l.HistoryUtils.withMergedEntry(e, () => {
                c.EditorUtils.withoutNormalizing(e, () => A(e, t, n))
            }), a = i, o = e.previewMarkdown), s()
        }, e
    }

    function A(e, t, n) {
        let i = c.EditorUtils.areStylesDisabled(e);
        for (let r of c.EditorUtils.blocks(e))
            if (T.has(r[0].type)) i ? m(e, r, !0, null) : h(e, r, t, n);
            else {
                let [s, a] = r;
                for (let r = s.children.length - 1; r >= 0; r--) {
                    let o = s.children[r];
                    if (f.has(o.type)) {
                        let s = [o, c.PathUtils.child(a, r)];
                        i ? m(e, s, !0, null) : h(e, s, t, n)
                    }
                }
            }
    }

    function h(e, t, n, i) {
        var s;
        let a = "line" === t[0].type && (null === (s = t[0].codeBlockState) || void 0 === s ? void 0 : s.isInCodeBlock) === !0,
            l = c.ElementUtils.markdown(t[0], n);
        m(e, t, a, l) && (t = c.ElementUtils.updateElement(e, t), l = c.ElementUtils.markdown(t[0], n)), !a && (N(e, t, i, l) && (t = c.ElementUtils.updateElement(e, t), l = c.ElementUtils.markdown(t[0], n)), function(e, t, n, i, s) {
            let [a, l] = t, u = !1;
            for (let d = a.children.length - 1; d >= 0; d--) {
                let I;
                let T = a.children[d];
                if (!c.TextUtils.isText(T)) continue;
                let f = c.PathUtils.child(l, d),
                    S = [];
                for (E.lastIndex = 0; null != (I = E.exec(T.text));) {
                    if (0 !== I.index && null == T.text.charAt(I.index - 1).match(/(\t|\s)/)) {
                        E.lastIndex = I.index + 1;
                        continue
                    }
                    if (O(e, l, {
                            path: f,
                            offset: I.index
                        }, s)) continue;
                    let r = (0, o.resolvePlaintextInlineVoid)(I[0], n, i);
                    null != r && p(i, t[0], r) ? S.push({
                        index: I.index,
                        length: I[0].length,
                        node: r
                    }) : E.lastIndex = I.index + 1
                }
                for (let t of S.reverse())(function(e, t, n, i, s) {
                    let [a, o] = t, l = {
                        path: o,
                        offset: n
                    }, u = {
                        path: o,
                        offset: n + i
                    };
                    r()(l.offset >= 0 && l.offset <= a.text.length, "Failed to find valid start position for raw mention replace"), r()(u.offset >= 0 && u.offset <= a.text.length, "Failed to find valid end position for raw mention replace"), _.SlateTransforms.textToVoid(e, s, {
                        anchor: l,
                        focus: u
                    })
                })(e, [T, c.PathUtils.child(l, d)], t.index, t.length, t.node), u = !0
            };
        }(e, t, n, i, l))
    }

    function m(e, t, n, i) {
        let [r, s] = t, a = !1;
        for (let t = r.children.length - 1; t >= 0; t--) {
            let o = r.children[t],
                l = t < r.children.length - 1 ? r.children[t + 1] : null;
            if (c.TextUtils.isText(o) && !n) {
                if (null == l || !e.isVoid(l)) continue;
                let n = !1,
                    i = 0;
                for (;;) {
                    let e = o.text.indexOf("\\", i);
                    if (-1 === e) break;
                    if (e === o.text.length - 1) {
                        n = !0;
                        break
                    }
                    i = e + 2
                }
                if (n) {
                    let n = c.PathUtils.child(s, t + 1);
                    _.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(l, {
                        mode: "plain",
                        preventEmojiSurrogates: !0
                    }), n), a = !0
                }
            } else if (e.isVoid(o)) {
                let r = c.PathUtils.child(s, t),
                    l = {
                        path: c.PathUtils.child(r, 0),
                        offset: 0
                    };
                (n || null != i && O(e, s, l, i)) && (_.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(o, {
                    mode: "plain",
                    preventEmojiSurrogates: !0
                }), r), a = !0)
            }
        }
        return a
    }

    function N(e, t, n, i) {
        let r = t[1],
            s = !1;
        for (let a of [...i.entries].reverse()) {
            let o;
            switch (a.attributes[0]) {
                case "emoji":
                    o = {
                        type: "emoji",
                        emoji: {
                            name: a.data.name,
                            src: a.data.src,
                            surrogate: a.data.surrogate,
                            jumboable: !0 === a.data.jumboable
                        },
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "customEmoji":
                    o = {
                        type: "customEmoji",
                        emoji: {
                            emojiId: a.data.emojiId,
                            name: a.data.name,
                            animated: a.data.animated,
                            jumboable: !0 === a.data.jumboable
                        },
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "textMention":
                    o = {
                        type: "textMention",
                        name: a.data.text,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "mention":
                    o = {
                        type: "userMention",
                        userId: a.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "roleMention":
                    o = {
                        type: "roleMention",
                        roleId: a.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "channelMention":
                    o = {
                        type: "channelMention",
                        channelId: a.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "staticRouteLink":
                    o = {
                        type: "staticRouteLink",
                        channelId: a.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "soundboard":
                    o = {
                        type: "soundboard",
                        soundId: a.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "timestamp":
                    o = {
                        type: "timestamp",
                        parsed: a.data,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                default:
                    continue
            }
            if (!p(n, t[0], o)) continue;
            let l = (0, u.getPointFromPosition)(e, r, i.serializedChildren, a.start),
                d = (0, u.getPointFromPosition)(e, r, i.serializedChildren, a.start + a.text.length);
            _.SlateTransforms.textToVoid(e, o, {
                anchor: l,
                focus: d
            }), s = !0
        }
        return s
    }

    function O(e, t, n, i) {
        let r = 0;
        for (let [i, s] of c.EditorUtils.nodes(e, {
                at: {
                    anchor: c.EditorUtils.start(e, t),
                    focus: n
                },
                mode: "lowest"
            })) c.TextUtils.isText(i) ? c.PathUtils.equals(s, n.path) ? r += n.offset : r += i.text.length : r += 1;
        for (let e of i.entries) {
            if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
            let t = e.start,
                n = e.start + e.text.length;
            if (t <= r && n >= r) return !0
        }
        return !1
    }

    function p(e, t, n) {
        if ("applicationCommandOption" !== t.type) return !0;
        switch (t.optionType) {
            case s.ApplicationCommandOptionType.CHANNEL:
                return "channelMention" === n.type;
            case s.ApplicationCommandOptionType.ROLE:
                return "roleMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
            case s.ApplicationCommandOptionType.USER:
                return "userMention" === n.type;
            case s.ApplicationCommandOptionType.MENTIONABLE:
                return "roleMention" === n.type || "userMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
            case s.ApplicationCommandOptionType.STRING: {
                let n = null != e ? a.default.getOption(e, t.optionName) : null;
                return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0
            }
            default:
                return !1
        }
    }
}