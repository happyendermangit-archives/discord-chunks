function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var r = n("470079"),
        o = n("136035"),
        i = n("29570"),
        a = n("471559"),
        u = n("494189"),
        s = n("610045"),
        l = n("453197"),
        c = n("714196"),
        f = n("384139"),
        d = n("498683"),
        _ = n("188629");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e, t) {
        var n, r = a.default.getActiveCommand(e.id),
            o = null == r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find(function(e) {
                return e.name === t.optionName
            });
        return null != o && (o.type !== i.ApplicationCommandOptionType.STRING || (null == o ? void 0 : o.choices) != null || (null == o ? void 0 : o.autocomplete))
    }

    function y(e, t, n, r) {
        var o = c.EditorUtils.areStylesDisabled(e) || null == n ? t : n;
        s.HistoryUtils.withSingleEntry(e, function() {
            l.SlateTransforms.insertText(e, r ? o + " " : o)
        })
    }

    function I(e, t, n, i) {
        r.useImperativeHandle(e, function() {
            var e, r, E;
            return e = t, r = n, E = i, {
                getSlateEditor: function() {
                    return e
                },
                submit: function(e) {
                    e.preventDefault(), E()
                },
                focus: function() {
                    c.EditorUtils.focus(e)
                },
                blur: function() {
                    o.ReactEditor.blur(e)
                },
                getCurrentWord: function() {
                    var t, n = e.selection;
                    if (null == n || !c.SelectionUtils.isValid(e, n) || c.RangeUtils.isExpanded(n) || (0, f.hasOpenPlainTextCodeBlock)(e)) return {
                        word: null,
                        isAtStart: !1
                    };
                    var r = p(c.EditorUtils.node(e, c.PathUtils.parent(n.anchor.path)), 2),
                        o = r[0],
                        i = r[1],
                        a = p(c.EditorUtils.node(e, n.anchor.path), 2),
                        u = a[0],
                        s = a[1],
                        l = n.anchor.offset;
                    if (!c.PathUtils.hasPrevious(s) && c.TextUtils.isText(u)) {
                        var d = u.text.substring(0, l);
                        if (c.NodeUtils.isType(o, "applicationCommand") && l < o.command.displayName.length + 2) return {
                            word: d,
                            isAtStart: !0
                        }
                    }
                    for (var E = "", m = !1;;) {
                        if (--l < 0) {
                            if (!c.PathUtils.hasPrevious(s)) {
                                m = !0;
                                break
                            }
                            u = (t = p(c.EditorUtils.node(e, c.PathUtils.previous(s)), 2))[0], s = t[1]
                        }
                        if (!c.TextUtils.isText(u)) break;
                        var y = u.text[l];
                        if (_.WHITESPACE_RE.test(y)) break;
                        E = y + E
                    }
                    return {
                        word: E,
                        isAtStart: m && c.PathUtils.isFirstEditorBlock(i)
                    }
                },
                getFirstText: function() {
                    var t, n;
                    return null !== (n = null === (t = c.EditorUtils.getFirstText(e)) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : ""
                },
                getCurrentCommandOption: function() {
                    var t = u.getCurrentCommandOption(e);
                    return null == t ? null : t[0].optionName
                },
                getCurrentCommandOptionValue: function() {
                    var t, n = u.getCurrentCommandOption(e);
                    if (null == n) return [];
                    var o = a.default.getActiveCommand(r.id),
                        i = null == o ? void 0 : null === (t = o.options) || void 0 === t ? void 0 : t.find(function(e) {
                            return e.name === n[0].optionName
                        });
                    return null == i ? [] : u.optionToValues(e, i, n[0])
                },
                getCommandOptionValues: function() {
                    var t = a.default.getActiveCommand(r.id);
                    return null == t ? {} : u.getOptionValues(e, t)
                },
                insertText: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    s.HistoryUtils.withSingleEntry(e, function() {
                        var i = u.getCurrentCommandOption(e),
                            a = null != i && m(r, i[0]);
                        if (null != n && a && (l.SlateTransforms.removeInlineChildren(e, i), o = !1), y(e, t, n, o), null != n && a) {
                            var s = u.getCommandBlock(e);
                            if (i = c.ElementUtils.updateElement(e, i), null != s) {
                                var f = c.ElementUtils.markdown(s[0], r.guild_id);
                                (0, d.convertRawToInlineVoids)(e, i, r.id, f) && (i = c.ElementUtils.updateElement(e, i))
                            }
                            u.validateOption(e, r.guild_id, r.id, c.ElementUtils.updateElement(e, i), !1), l.SlateTransforms.selectNextCommandOption(e)
                        }
                    })
                },
                insertAutocomplete: function(t) {
                    var n = this,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    s.HistoryUtils.withSingleEntry(e, function() {
                        var a = u.getCurrentCommandOption(e),
                            s = null != a && m(r, a[0]);
                        if (s) l.SlateTransforms.removeInlineChildren(e, a), i = !1;
                        else {
                            var c = n.getCurrentWord().word;
                            null != c && c.length > 0 && l.SlateTransforms.delete(e, {
                                distance: c.length,
                                unit: "character",
                                reverse: !0
                            })
                        }
                        y(e, t, o, i), s && l.SlateTransforms.selectNextCommandOption(e)
                    })
                },
                insertEmoji: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    s.HistoryUtils.withSingleEntry(e, function() {
                        var r, o, i = t.animated ? "a" : "",
                            a = null !== (o = null !== (r = t.originalName) && void 0 !== r ? r : t.name) && void 0 !== o ? o : "";
                        y(e, ":".concat(t.name, ":"), null != t.id ? "<".concat(i, ":").concat(a.replace(/:/g, ""), ":").concat(t.id, ">") : null, n)
                    })
                }
            }
        }, [t, n, i])
    }
}