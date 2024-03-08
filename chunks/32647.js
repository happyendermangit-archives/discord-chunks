function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("222007"), n("424973");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("798609"),
        o = n("716241"),
        u = n("383018"),
        d = n("585722"),
        c = n("378765"),
        f = n("659500"),
        p = n("640830"),
        m = n("83800"),
        h = n("776574"),
        x = n("970153"),
        E = n("939563"),
        y = n("385887"),
        g = n("755604"),
        S = n("664610"),
        C = n("688893"),
        I = n("684607"),
        T = n("803322"),
        _ = n("127875"),
        v = n("169694"),
        N = n("100576"),
        A = n("765446"),
        O = n("461593"),
        k = n("49111"),
        M = n("175543"),
        R = l.forwardRef(function(e, t) {
            let {
                value: n,
                type: a,
                channel: R,
                className: L,
                id: b,
                disabled: P,
                submitting: j,
                placeholder: U,
                required: D,
                textAreaPaddingClassName: w,
                onChange: F,
                onPaste: B,
                onResize: G,
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
                allowNewLines: ei,
                "aria-owns": el,
                "aria-expanded": ea,
                "aria-haspopup": es,
                "aria-activedescendant": er,
                "aria-controls": eo,
                "aria-invalid": eu,
                "aria-describedby": ed,
                "aria-labelledby": ec,
                "aria-autocomplete": ef
            } = e, ep = l.useRef(null), em = l.useRef(null), eh = l.useRef(!0), ex = l.useRef(!0), eE = P || j, ey = l.useCallback((e, t, n) => {
                var i;
                let {
                    value: l,
                    selection: a
                } = n, s = y.EditorUtils.richValue(e), r = e.selection, o = !1;
                if (void 0 !== l && l !== s) {
                    if (e.children = l, "parent" === t && !e.previewMarkdown) {
                        try {
                            e.previewMarkdown = !0, (0, N.run)(e, R.guild_id, R.id)
                        } finally {
                            e.previewMarkdown = !1
                        }(0, N.run)(e, R.guild_id, R.id), a = void 0
                    }
                    "undo" !== t && void 0 !== l && l !== s && m.HistoryUtils.insertEntry(e, "other", !1, s, r), o = !0
                }
                if (null != a && !y.SelectionUtils.isValid(e, a) && (a = void 0), (o || !y.SelectionUtils.isValid(e, r)) && void 0 === a) {
                    let t = y.EditorUtils.end(e, []);
                    a = {
                        anchor: t,
                        focus: t
                    }
                }
                if (null != a && !y.SelectionUtils.equals(a, r)) {
                    e.selection = a;
                    let t = m.HistoryUtils.currentEntry(e);
                    null != t && (t.selection = a), o = !0
                }
                let d = p.getCommandBlock(e);
                if (null != d && d[0].command.id !== (null === (i = u.default.getActiveCommand(R.id)) || void 0 === i ? void 0 : i.id) && m.HistoryUtils.withMergedEntry(e, () => {
                        (0, v.unsetCommand)(e, R.id, null, !0)
                    }), o) {
                    if (!et && y.EditorUtils.focus(e), "parent" === t) try {
                        ex.current = !1, e.onChange()
                    } finally {
                        ex.current = !0
                    } else e.onChange()
                }
            }, [R.id, R.guild_id, et]), eg = l.useCallback(() => {
                eh.current = !1
            }, []), eS = l.useCallback(() => {
                eh.current = !0
            }, []), eC = (0, S.default)({
                channel: R,
                chatInputType: a,
                canUseCommands: $,
                canOnlyUseTextCommands: ee,
                onChangeStart: eg,
                onChangeEnd: eS,
                updateState: ey
            }), eI = l.useCallback((e, t) => {
                let n = p.getOptionValues(eC, e),
                    i = p.validateOptionValues(e, R.guild_id, R.id, n, t);
                return {
                    values: n,
                    results: i
                }
            }, [R.guild_id, R.id, eC]), eT = l.useCallback(() => {
                let e;
                let t = $ ? u.default.getActiveCommand(R.id) : null;
                if (null != t && null != t.options) {
                    let l = eI(t, !1);
                    e = l.values;
                    let a = p.getOptionNames(eC),
                        s = a.filter(e => !l.results[e].success).map(e => {
                            var n;
                            return (null !== (n = t.options) && void 0 !== n ? n : []).find(t => t.name === e)
                        });
                    for (let e of t.options) e.required && !(e.name in l.values) && (E.SlateTransforms.insertCommandOption(eC, e), s.push(e));
                    if (s.length > 0) {
                        var n, i;
                        let e = s[0];
                        E.SlateTransforms.selectCommandOption(eC, e.name), f.ComponentDispatch.dispatch(k.ComponentActions.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }), (0, o.trackWithMetadata)(k.AnalyticEvents.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == t ? void 0 : t.applicationId,
                            command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
                            argument_type: r.ApplicationCommandOptionType[null !== (i = null == e ? void 0 : e.type) && void 0 !== i ? i : 3],
                            is_required: null == e ? void 0 : e.required
                        });
                        return
                    }
                }
                null == Z || Z((0, x.toTextValue)(y.EditorUtils.richValue(eC), {
                    mode: "raw",
                    ignoreTrailingEmptyNodes: !0
                }), t, e)
            }, [R.id, eC, Z, eI, $]);
            (0, C.default)(t, eC, R, eT), (0, _.default)(eC, ep, G);
            let {
                handleKeyDown: e_,
                handleKeyUp: ev
            } = (0, I.default)({
                editor: eC,
                channel: R,
                disableEnterToSubmit: en,
                onKeyDown: K,
                onKeyUp: W,
                onTab: Y,
                onEnter: z,
                allowNewLines: ei,
                submit: eT,
                hideAutocomplete: q,
                moveSelection: X
            }), {
                handlePaste: eN,
                handleGlobalPaste: eA
            } = (0, T.default)(eC, eE, B), eO = l.useCallback(e => {
                null == J || J()
            }, [J]), ek = l.useCallback(e => {
                e !== em.current ? ex.current && (null == F || F(null, (0, x.toTextValue)(e, {
                    mode: "raw"
                }), e)) : ex.current && J()
            }, [J, F]);
            l.useLayoutEffect(() => {
                eh.current && (em.current = n, ey(eC, "parent", {
                    value: n
                }))
            }, [eC, n, ey]), l.useEffect(() => {
                let e = () => {
                    var e;
                    let t = null !== (e = u.default.getActiveCommand(R.id)) && void 0 !== e ? e : null;
                    null !== t && null != t.options && eI(t, !0)
                };
                return d.default.addChangeListener(e), () => d.default.removeChangeListener(e)
            }, [R, eC, eI]);
            let eM = l.useCallback((e, t) => (0, g.default)(e, t), []),
                eR = l.useCallback(e => (0, A.default)(eC, e, R.id), [R.id, eC]),
                eL = l.useCallback(e => (0, O.default)(e), []);
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(c.ComponentAction, {
                    event: k.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
                    handler: eA
                }), (0, i.jsx)("div", {
                    ref: ep,
                    className: s(L, M.slateContainer),
                    children: (0, i.jsx)(h.default, {
                        id: b,
                        editor: eC,
                        channelId: R.id,
                        guildId: R.guild_id,
                        className: s(M.slateTextArea, w),
                        placeholder: U,
                        readOnly: eE,
                        spellCheck: Q,
                        autoFocus: !et,
                        canFocus: !P,
                        onChange: ek,
                        onFocus: H,
                        onBlur: V,
                        onClick: eO,
                        onPaste: eN,
                        onKeyDown: e_,
                        onKeyUp: ev,
                        decorateExtra: eM,
                        renderExtraElement: eR,
                        renderExtraLeaf: eL,
                        "aria-owns": el,
                        "aria-haspopup": es,
                        "aria-expanded": ea,
                        "aria-activedescendant": er,
                        "aria-controls": eo,
                        "aria-labelledby": ec,
                        "aria-describedby": ed,
                        "aria-invalid": eu,
                        "aria-autocomplete": ef,
                        "aria-required": D
                    })
                })]
            })
        })
}