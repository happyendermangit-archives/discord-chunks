function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("47120"), n("757143");
    var i = n("470079"),
        r = n("207470"),
        a = n("911969"),
        s = n("998698"),
        o = n("91313"),
        l = n("53529"),
        u = n("436660"),
        d = n("887490"),
        _ = n("515270"),
        c = n("847302"),
        E = n("42530");
    let I = (e, t, n) => ({
        getSlateEditor: () => e,
        submit(e) {
            e.preventDefault(), n()
        },
        focus() {
            d.EditorUtils.focus(e)
        },
        blur() {
            r.ReactEditor.blur(e)
        },
        getCurrentWord() {
            let t = e.selection;
            if (null == t || !d.SelectionUtils.isValid(e, t) || d.RangeUtils.isExpanded(t) || (0, _.hasOpenPlainTextCodeBlock)(e)) return {
                word: null,
                isAtStart: !1
            };
            let [n, i] = d.EditorUtils.node(e, d.PathUtils.parent(t.anchor.path)), [r, a] = d.EditorUtils.node(e, t.anchor.path), s = t.anchor.offset;
            if (!d.PathUtils.hasPrevious(a) && d.TextUtils.isText(r)) {
                let e = r.text.substring(0, s);
                if (d.NodeUtils.isType(n, "applicationCommand") && s < n.command.displayName.length + 2) return {
                    word: e,
                    isAtStart: !0
                }
            }
            let o = "",
                l = !1;
            for (;;) {
                if (--s < 0) {
                    if (!d.PathUtils.hasPrevious(a)) {
                        l = !0;
                        break
                    } [r, a] = d.EditorUtils.node(e, d.PathUtils.previous(a))
                }
                if (!d.TextUtils.isText(r)) break;
                let t = r.text[s];
                if (E.WHITESPACE_RE.test(t)) break;
                o = t + o
            }
            return {
                word: o,
                isAtStart: l && d.PathUtils.isFirstEditorBlock(i)
            }
        },
        getFirstText() {
            var t, n;
            return null !== (n = null === (t = d.EditorUtils.getFirstText(e)) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : ""
        },
        getCurrentCommandOption() {
            let t = o.getCurrentCommandOption(e);
            return null == t ? null : t[0].optionName
        },
        getCurrentCommandOptionValue() {
            var n;
            let i = o.getCurrentCommandOption(e);
            if (null == i) return [];
            let r = s.default.getActiveCommand(t.id),
                a = null == r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find(e => e.name === i[0].optionName);
            return null == a ? [] : o.optionToValues(e, a, i[0])
        },
        getCommandOptionValues() {
            let n = s.default.getActiveCommand(t.id);
            return null == n ? {} : o.getOptionValues(e, n)
        },
        insertText(n) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            l.HistoryUtils.withSingleEntry(e, () => {
                let a = o.getCurrentCommandOption(e),
                    s = null != a && T(t, a[0]);
                if (null != i && s && (u.SlateTransforms.removeInlineChildren(e, a), r = !1), f(e, n, i, r), null != i && s) {
                    let n = o.getCommandBlock(e);
                    if (a = d.ElementUtils.updateElement(e, a), null != n) {
                        let i = d.ElementUtils.markdown(n[0], t.guild_id);
                        (0, c.convertRawToInlineVoids)(e, a, t.id, i) && (a = d.ElementUtils.updateElement(e, a))
                    }
                    o.validateOption(e, t.guild_id, t.id, d.ElementUtils.updateElement(e, a), !1), u.SlateTransforms.selectNextCommandOption(e)
                }
            })
        },
        insertAutocomplete(n) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            l.HistoryUtils.withSingleEntry(e, () => {
                let a = o.getCurrentCommandOption(e),
                    s = null != a && T(t, a[0]);
                if (s) u.SlateTransforms.removeInlineChildren(e, a), r = !1;
                else {
                    let {
                        word: t
                    } = this.getCurrentWord();
                    null != t && t.length > 0 && u.SlateTransforms.delete(e, {
                        distance: t.length,
                        unit: "character",
                        reverse: !0
                    })
                }
                f(e, n, i, r), s && u.SlateTransforms.selectNextCommandOption(e)
            })
        },
        insertEmoji(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            l.HistoryUtils.withSingleEntry(e, () => {
                var i, r;
                let a = t.animated ? "a" : "",
                    s = null !== (r = null !== (i = t.originalName) && void 0 !== i ? i : t.name) && void 0 !== r ? r : "",
                    o = ":".concat(t.name, ":");
                f(e, o, null != t.id ? "<".concat(a, ":").concat(s.replace(/:/g, ""), ":").concat(t.id, ">") : null, n)
            })
        }
    });

    function T(e, t) {
        var n;
        let i = s.default.getActiveCommand(e.id),
            r = null == i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === t.optionName);
        return null != r && (r.type !== a.ApplicationCommandOptionType.STRING || (null == r ? void 0 : r.choices) != null || (null == r ? void 0 : r.autocomplete))
    }

    function f(e, t, n, i) {
        let r = d.EditorUtils.areStylesDisabled(e) || null == n ? t : n;
        l.HistoryUtils.withSingleEntry(e, () => {
            u.SlateTransforms.insertText(e, i ? r + " " : r)
        })
    }

    function S(e, t, n, r) {
        i.useImperativeHandle(e, () => I(t, n, r), [t, n, r])
    }
}