function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007"), n("781738");
    var i = n("884691"),
        l = n("371621"),
        a = n("798609"),
        s = n("383018"),
        r = n("640830"),
        o = n("83800"),
        u = n("939563"),
        d = n("385887"),
        c = n("467123"),
        f = n("100576"),
        p = n("566819");
    let m = (e, t, n) => ({
        getSlateEditor: () => e,
        submit(e) {
            e.preventDefault(), n()
        },
        focus() {
            d.EditorUtils.focus(e)
        },
        blur() {
            l.ReactEditor.blur(e)
        },
        getCurrentWord() {
            let t = e.selection;
            if (null == t || !d.SelectionUtils.isValid(e, t) || d.RangeUtils.isExpanded(t) || (0, c.hasOpenPlainTextCodeBlock)(e)) return {
                word: null,
                isAtStart: !1
            };
            let [n, i] = d.EditorUtils.node(e, d.PathUtils.parent(t.anchor.path)), [l, a] = d.EditorUtils.node(e, t.anchor.path), s = t.anchor.offset;
            if (!d.PathUtils.hasPrevious(a) && d.TextUtils.isText(l)) {
                let e = l.text.substring(0, s);
                if (d.NodeUtils.isType(n, "applicationCommand") && s < n.command.displayName.length + 2) return {
                    word: e,
                    isAtStart: !0
                }
            }
            let r = "",
                o = !1;
            for (;;) {
                if (--s < 0) {
                    if (!d.PathUtils.hasPrevious(a)) {
                        o = !0;
                        break
                    } [l, a] = d.EditorUtils.node(e, d.PathUtils.previous(a))
                }
                if (!d.TextUtils.isText(l)) break;
                let t = l.text[s];
                if (p.WHITESPACE_RE.test(t)) break;
                r = t + r
            }
            return {
                word: r,
                isAtStart: o && d.PathUtils.isFirstEditorBlock(i)
            }
        },
        getFirstText() {
            var t, n;
            return null !== (n = null === (t = d.EditorUtils.getFirstText(e)) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : ""
        },
        getCurrentCommandOption() {
            let t = r.getCurrentCommandOption(e);
            return null == t ? null : t[0].optionName
        },
        getCurrentCommandOptionValue() {
            var n;
            let i = r.getCurrentCommandOption(e);
            if (null == i) return [];
            let l = s.default.getActiveCommand(t.id),
                a = null == l ? void 0 : null === (n = l.options) || void 0 === n ? void 0 : n.find(e => e.name === i[0].optionName);
            return null == a ? [] : r.optionToValues(e, a, i[0])
        },
        getCommandOptionValues() {
            let n = s.default.getActiveCommand(t.id);
            return null == n ? {} : r.getOptionValues(e, n)
        },
        insertText(n) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            o.HistoryUtils.withSingleEntry(e, () => {
                let a = r.getCurrentCommandOption(e),
                    s = null != a && h(t, a[0]);
                if (null != i && s && (u.SlateTransforms.removeInlineChildren(e, a), l = !1), x(e, n, i, l), null != i && s) {
                    let n = r.getCommandBlock(e);
                    if (a = d.ElementUtils.updateElement(e, a), null != n) {
                        let i = d.ElementUtils.markdown(n[0], t.guild_id);
                        (0, f.convertRawToInlineVoids)(e, a, t.id, i) && (a = d.ElementUtils.updateElement(e, a))
                    }
                    r.validateOption(e, t.guild_id, t.id, d.ElementUtils.updateElement(e, a), !1), u.SlateTransforms.selectNextCommandOption(e)
                }
            })
        },
        insertAutocomplete(n) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            o.HistoryUtils.withSingleEntry(e, () => {
                let a = r.getCurrentCommandOption(e),
                    s = null != a && h(t, a[0]);
                if (s) u.SlateTransforms.removeInlineChildren(e, a), l = !1;
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
                x(e, n, i, l), s && u.SlateTransforms.selectNextCommandOption(e)
            })
        },
        insertEmoji(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            o.HistoryUtils.withSingleEntry(e, () => {
                var i, l;
                let a = t.animated ? "a" : "",
                    s = null !== (l = null !== (i = t.originalName) && void 0 !== i ? i : t.name) && void 0 !== l ? l : "",
                    r = ":".concat(t.name, ":"),
                    o = null != t.id ? "<".concat(a, ":").concat(s.replace(/:/g, ""), ":").concat(t.id, ">") : null;
                x(e, r, o, n)
            })
        }
    });

    function h(e, t) {
        var n;
        let i = s.default.getActiveCommand(e.id),
            l = null == i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === t.optionName);
        return null != l && (l.type !== a.ApplicationCommandOptionType.STRING || (null == l ? void 0 : l.choices) != null || (null == l ? void 0 : l.autocomplete))
    }

    function x(e, t, n, i) {
        let l = d.EditorUtils.areStylesDisabled(e) || null == n ? t : n;
        o.HistoryUtils.withSingleEntry(e, () => {
            u.SlateTransforms.insertText(e, i ? l + " " : l)
        })
    }

    function E(e, t, n, l) {
        i.useImperativeHandle(e, () => m(t, n, l), [t, n, l])
    }
}