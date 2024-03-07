function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return L
        }
    }), n("222007"), n("424973");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("798609"),
        o = n("716241"),
        u = n("383018"),
        d = n("585722"),
        c = n("378765"),
        f = n("659500"),
        m = n("640830"),
        p = n("83800"),
        h = n("776574"),
        E = n("970153"),
        g = n("939563"),
        S = n("385887"),
        C = n("755604"),
        T = n("664610"),
        v = n("688893"),
        I = n("684607"),
        _ = n("803322"),
        N = n("127875"),
        A = n("169694"),
        x = n("100576"),
        y = n("765446"),
        O = n("461593"),
        R = n("49111"),
        M = n("175543"),
        L = i.forwardRef(function(e, t) {
            let {
                value: n,
                type: a,
                channel: L,
                className: P,
                id: b,
                disabled: j,
                submitting: U,
                placeholder: D,
                required: k,
                textAreaPaddingClassName: w,
                onChange: F,
                onPaste: G,
                onResize: B,
                onFocus: H,
                onBlur: V,
                onKeyDown: K,
                onKeyUp: W,
                onTab: Y,
                onEnter: z,
                onSubmit: Z,
                maybeShowAutocomplete: J,
                hideAutocomplete: q,
                moveSelection: X,
                spellcheckEnabled: Q,
                canUseCommands: $,
                canOnlyUseTextCommands: ee,
                disableAutoFocus: et,
                disableEnterToSubmit: en,
                allowNewLines: el,
                "aria-owns": ei,
                "aria-expanded": ea,
                "aria-haspopup": es,
                "aria-activedescendant": er,
                "aria-controls": eo,
                "aria-invalid": eu,
                "aria-describedby": ed,
                "aria-labelledby": ec,
                "aria-autocomplete": ef
            } = e, em = i.useRef(null), ep = i.useRef(null), eh = i.useRef(!0), eE = i.useRef(!0), eg = j || U, eS = i.useCallback((e, t, n) => {
                var l;
                let {
                    value: i,
                    selection: a
                } = n, s = S.EditorUtils.richValue(e), r = e.selection, o = !1;
                if (void 0 !== i && i !== s) {
                    if (e.children = i, "parent" === t && !e.previewMarkdown) {
                        try {
                            e.previewMarkdown = !0, (0, x.run)(e, L.guild_id, L.id)
                        } finally {
                            e.previewMarkdown = !1
                        }(0, x.run)(e, L.guild_id, L.id), a = void 0
                    }
                    "undo" !== t && void 0 !== i && i !== s && p.HistoryUtils.insertEntry(e, "other", !1, s, r), o = !0
                }
                if (null != a && !S.SelectionUtils.isValid(e, a) && (a = void 0), (o || !S.SelectionUtils.isValid(e, r)) && void 0 === a) {
                    let t = S.EditorUtils.end(e, []);
                    a = {
                        anchor: t,
                        focus: t
                    }
                }
                if (null != a && !S.SelectionUtils.equals(a, r)) {
                    e.selection = a;
                    let t = p.HistoryUtils.currentEntry(e);
                    null != t && (t.selection = a), o = !0
                }
                let d = m.getCommandBlock(e);
                if (null != d && d[0].command.id !== (null === (l = u.default.getActiveCommand(L.id)) || void 0 === l ? void 0 : l.id) && p.HistoryUtils.withMergedEntry(e, () => {
                        (0, A.unsetCommand)(e, L.id, null, !0)
                    }), o) {
                    if (!et && S.EditorUtils.focus(e), "parent" === t) try {
                        eE.current = !1, e.onChange()
                    } finally {
                        eE.current = !0
                    } else e.onChange()
                }
            }, [L.id, L.guild_id, et]), eC = i.useCallback(() => {
                eh.current = !1
            }, []), eT = i.useCallback(() => {
                eh.current = !0
            }, []), ev = (0, T.default)({
                channel: L,
                chatInputType: a,
                canUseCommands: $,
                canOnlyUseTextCommands: ee,
                onChangeStart: eC,
                onChangeEnd: eT,
                updateState: eS
            }), eI = i.useCallback((e, t) => {
                let n = m.getOptionValues(ev, e),
                    l = m.validateOptionValues(e, L.guild_id, L.id, n, t);
                return {
                    values: n,
                    results: l
                }
            }, [L.guild_id, L.id, ev]), e_ = i.useCallback(() => {
                let e;
                let t = $ ? u.default.getActiveCommand(L.id) : null;
                if (null != t && null != t.options) {
                    let i = eI(t, !1);
                    e = i.values;
                    let a = m.getOptionNames(ev),
                        s = a.filter(e => !i.results[e].success).map(e => {
                            var n;
                            return (null !== (n = t.options) && void 0 !== n ? n : []).find(t => t.name === e)
                        });
                    for (let e of t.options) e.required && !(e.name in i.values) && (g.SlateTransforms.insertCommandOption(ev, e), s.push(e));
                    if (s.length > 0) {
                        var n, l;
                        let e = s[0];
                        g.SlateTransforms.selectCommandOption(ev, e.name), f.ComponentDispatch.dispatch(R.ComponentActions.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }), (0, o.trackWithMetadata)(R.AnalyticEvents.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == t ? void 0 : t.applicationId,
                            command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
                            argument_type: r.ApplicationCommandOptionType[null !== (l = null == e ? void 0 : e.type) && void 0 !== l ? l : 3],
                            is_required: null == e ? void 0 : e.required
                        });
                        return
                    }
                }
                null == Z || Z((0, E.toTextValue)(S.EditorUtils.richValue(ev), {
                    mode: "raw",
                    ignoreTrailingEmptyNodes: !0
                }), t, e)
            }, [L.id, ev, Z, eI, $]);
            (0, v.default)(t, ev, L, e_), (0, N.default)(ev, em, B);
            let {
                handleKeyDown: eN,
                handleKeyUp: eA
            } = (0, I.default)({
                editor: ev,
                channel: L,
                disableEnterToSubmit: en,
                onKeyDown: K,
                onKeyUp: W,
                onTab: Y,
                onEnter: z,
                allowNewLines: el,
                submit: e_,
                hideAutocomplete: q,
                moveSelection: X
            }), {
                handlePaste: ex,
                handleGlobalPaste: ey
            } = (0, _.default)(ev, eg, G), eO = i.useCallback(e => {
                null == J || J()
            }, [J]), eR = i.useCallback(e => {
                e !== ep.current ? eE.current && (null == F || F(null, (0, E.toTextValue)(e, {
                    mode: "raw"
                }), e)) : eE.current && J()
            }, [J, F]);
            i.useLayoutEffect(() => {
                eh.current && (ep.current = n, eS(ev, "parent", {
                    value: n
                }))
            }, [ev, n, eS]), i.useEffect(() => {
                let e = () => {
                    var e;
                    let t = null !== (e = u.default.getActiveCommand(L.id)) && void 0 !== e ? e : null;
                    null !== t && null != t.options && eI(t, !0)
                };
                return d.default.addChangeListener(e), () => d.default.removeChangeListener(e)
            }, [L, ev, eI]);
            let eM = i.useCallback((e, t) => (0, C.default)(e, t), []),
                eL = i.useCallback(e => (0, y.default)(ev, e, L.id), [L.id, ev]),
                eP = i.useCallback(e => (0, O.default)(e), []);
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(c.ComponentAction, {
                    event: R.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
                    handler: ey
                }), (0, l.jsx)("div", {
                    ref: em,
                    className: s(P, M.slateContainer),
                    children: (0, l.jsx)(h.default, {
                        id: b,
                        editor: ev,
                        channelId: L.id,
                        guildId: L.guild_id,
                        className: s(M.slateTextArea, w),
                        placeholder: D,
                        readOnly: eg,
                        spellCheck: Q,
                        autoFocus: !et,
                        canFocus: !j,
                        onChange: eR,
                        onFocus: H,
                        onBlur: V,
                        onClick: eO,
                        onPaste: ex,
                        onKeyDown: eN,
                        onKeyUp: eA,
                        decorateExtra: eM,
                        renderExtraElement: eL,
                        renderExtraLeaf: eP,
                        "aria-owns": ei,
                        "aria-haspopup": es,
                        "aria-expanded": ea,
                        "aria-activedescendant": er,
                        "aria-controls": eo,
                        "aria-labelledby": ec,
                        "aria-describedby": ed,
                        "aria-invalid": eu,
                        "aria-autocomplete": ef,
                        "aria-required": k
                    })
                })]
            })
        })
}