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
            return h
        }
    }), n("47120"), n("653041");
    var i = n("512722"),
        r = n.n(i),
        a = n("911969"),
        s = n("998698"),
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
            onChange: a
        } = e;
        e.isVoid = e => !!I.has(e.type) || r(e), e.isInline = e => !!I.has(e.type) || i(e);
        let s = null,
            o = !0;
        return e.onChange = () => {
            let i = c.EditorUtils.richValue(e);
            (i !== s || e.previewMarkdown !== o) && (l.HistoryUtils.withMergedEntry(e, () => {
                c.EditorUtils.withoutNormalizing(e, () => h(e, t, n))
            }), s = i, o = e.previewMarkdown), a()
        }, e
    }

    function h(e, t, n) {
        let i = c.EditorUtils.areStylesDisabled(e);
        for (let r of c.EditorUtils.blocks(e))
            if (T.has(r[0].type)) i ? m(e, r, !0, null) : A(e, r, t, n);
            else {
                let [a, s] = r;
                for (let r = a.children.length - 1; r >= 0; r--) {
                    let o = a.children[r];
                    if (f.has(o.type)) {
                        let a = [o, c.PathUtils.child(s, r)];
                        i ? m(e, a, !0, null) : A(e, a, t, n)
                    }
                }
            }
    }

    function A(e, t, n, i) {
        var a;
        let s = "line" === t[0].type && (null === (a = t[0].codeBlockState) || void 0 === a ? void 0 : a.isInCodeBlock) === !0,
            l = c.ElementUtils.markdown(t[0], n);
        m(e, t, s, l) && (t = c.ElementUtils.updateElement(e, t), l = c.ElementUtils.markdown(t[0], n)), !s && (N(e, t, i, l) && (t = c.ElementUtils.updateElement(e, t), l = c.ElementUtils.markdown(t[0], n)), function(e, t, n, i, a) {
            let [s, l] = t, u = !1;
            for (let d = s.children.length - 1; d >= 0; d--) {
                let I;
                let T = s.children[d];
                if (!c.TextUtils.isText(T)) continue;
                let f = c.PathUtils.child(l, d),
                    S = [];
                for (E.lastIndex = 0; null != (I = E.exec(T.text));) {
                    if (0 !== I.index && null == T.text.charAt(I.index - 1).match(/(\t|\s)/)) {
                        E.lastIndex = I.index + 1;
                        continue
                    }
                    if (p(e, l, {
                            path: f,
                            offset: I.index
                        }, a)) continue;
                    let r = (0, o.resolvePlaintextInlineVoid)(I[0], n, i);
                    null != r && O(i, t[0], r) ? S.push({
                        index: I.index,
                        length: I[0].length,
                        node: r
                    }) : E.lastIndex = I.index + 1
                }
                for (let t of S.reverse())(function(e, t, n, i, a) {
                    let [s, o] = t, l = {
                        path: o,
                        offset: n
                    }, u = {
                        path: o,
                        offset: n + i
                    };
                    r()(l.offset >= 0 && l.offset <= s.text.length, "Failed to find valid start position for raw mention replace"), r()(u.offset >= 0 && u.offset <= s.text.length, "Failed to find valid end position for raw mention replace"), _.SlateTransforms.textToVoid(e, a, {
                        anchor: l,
                        focus: u
                    })
                })(e, [T, c.PathUtils.child(l, d)], t.index, t.length, t.node), u = !0
            };
        }(e, t, n, i, l))
    }

    function m(e, t, n, i) {
        let [r, a] = t, s = !1;
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
                    let n = c.PathUtils.child(a, t + 1);
                    _.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(l, {
                        mode: "plain",
                        preventEmojiSurrogates: !0
                    }), n), s = !0
                }
            } else if (e.isVoid(o)) {
                let r = c.PathUtils.child(a, t),
                    l = {
                        path: c.PathUtils.child(r, 0),
                        offset: 0
                    };
                (n || null != i && p(e, a, l, i)) && (_.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(o, {
                    mode: "plain",
                    preventEmojiSurrogates: !0
                }), r), s = !0)
            }
        }
        return s
    }

    function N(e, t, n, i) {
        let r = t[1],
            a = !1,
            s = [...i.entries].reverse();
        for (let o = 0; o < s.length; o++) {
            let l;
            let d = s[o],
                c = s[o + 1];
            if (null != c && c.text.endsWith("\\") && d.start === c.start + c.text.length) continue;
            switch (d.attributes[0]) {
                case "emoji":
                    l = {
                        type: "emoji",
                        emoji: {
                            name: d.data.name,
                            src: d.data.src,
                            surrogate: d.data.surrogate,
                            jumboable: !0 === d.data.jumboable
                        },
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "customEmoji":
                    l = {
                        type: "customEmoji",
                        emoji: {
                            emojiId: d.data.emojiId,
                            name: d.data.name,
                            animated: d.data.animated,
                            jumboable: !0 === d.data.jumboable
                        },
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "textMention":
                    l = {
                        type: "textMention",
                        name: d.data.text,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "mention":
                    l = {
                        type: "userMention",
                        userId: d.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "roleMention":
                    l = {
                        type: "roleMention",
                        roleId: d.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "channelMention":
                    l = {
                        type: "channelMention",
                        channelId: d.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "staticRouteLink":
                    l = {
                        type: "staticRouteLink",
                        channelId: d.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "soundboard":
                    l = {
                        type: "soundboard",
                        soundId: d.data.id,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                case "timestamp":
                    l = {
                        type: "timestamp",
                        parsed: d.data,
                        children: [{
                            text: ""
                        }]
                    };
                    break;
                default:
                    continue
            }
            if (!O(n, t[0], l)) continue;
            let E = (0, u.getPointFromPosition)(e, r, i.serializedChildren, d.start),
                I = (0, u.getPointFromPosition)(e, r, i.serializedChildren, d.start + d.text.length);
            _.SlateTransforms.textToVoid(e, l, {
                anchor: E,
                focus: I
            }), a = !0
        }
        return a
    }

    function p(e, t, n, i) {
        let r = 0;
        for (let [i, a] of c.EditorUtils.nodes(e, {
                at: {
                    anchor: c.EditorUtils.start(e, t),
                    focus: n
                },
                mode: "lowest"
            })) c.TextUtils.isText(i) ? c.PathUtils.equals(a, n.path) ? r += n.offset : r += i.text.length : r += 1;
        for (let e of i.entries) {
            if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
            let t = e.start,
                n = e.start + e.text.length;
            if (t <= r && n >= r) return !0
        }
        return !1
    }

    function O(e, t, n) {
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