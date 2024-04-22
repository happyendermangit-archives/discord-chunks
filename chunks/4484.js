function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("911969"),
        l = n("367907"),
        u = n("998698"),
        d = n("117530"),
        _ = n("459273"),
        c = n("585483"),
        E = n("91313"),
        I = n("53529"),
        T = n("288897"),
        f = n("925994"),
        S = n("436660"),
        h = n("887490"),
        A = n("194625"),
        m = n("77188"),
        N = n("230554"),
        p = n("780748"),
        O = n("464581"),
        R = n("732659"),
        C = n("86724"),
        g = n("847302"),
        L = n("657198"),
        D = n("321127"),
        v = n("981631"),
        M = n("381293");
    t.default = r.forwardRef(function(e, t) {
        let {
            value: n,
            type: s,
            channel: y,
            className: P,
            id: U,
            disabled: b,
            submitting: G,
            placeholder: w,
            required: k,
            textAreaPaddingClassName: B,
            onChange: F,
            onPaste: V,
            onResize: x,
            onFocus: H,
            onBlur: Y,
            onKeyDown: j,
            onKeyUp: W,
            onTab: K,
            onEnter: z,
            onSubmit: X,
            maybeShowAutocomplete: Q,
            hideAutocomplete: q,
            moveSelection: Z,
            spellcheckEnabled: J,
            canUseCommands: $,
            canOnlyUseTextCommands: ee,
            disableAutoFocus: et,
            disableEnterToSubmit: en,
            allowNewLines: ei,
            "aria-owns": er,
            "aria-expanded": es,
            "aria-haspopup": ea,
            "aria-activedescendant": eo,
            "aria-controls": el,
            "aria-invalid": eu,
            "aria-describedby": ed,
            "aria-labelledby": e_,
            "aria-autocomplete": ec
        } = e, eE = r.useRef(null), eI = r.useRef(null), eT = r.useRef(!0), ef = r.useRef(!0), eS = b || G, eh = r.useCallback((e, t, n) => {
            var i;
            let {
                value: r,
                selection: s
            } = n, a = h.EditorUtils.richValue(e), o = e.selection, l = !1;
            if (void 0 !== r && r !== a) {
                if (e.children = r, "parent" === t && !e.previewMarkdown) {
                    try {
                        e.previewMarkdown = !0, (0, g.run)(e, y.guild_id, y.id)
                    } finally {
                        e.previewMarkdown = !1
                    }(0, g.run)(e, y.guild_id, y.id), s = void 0
                }
                "undo" !== t && void 0 !== r && r !== a && I.HistoryUtils.insertEntry(e, "other", !1, a, o), l = !0
            }
            if (null != s && !h.SelectionUtils.isValid(e, s) && (s = void 0), (l || !h.SelectionUtils.isValid(e, o)) && void 0 === s) {
                let t = h.EditorUtils.end(e, []);
                s = {
                    anchor: t,
                    focus: t
                }
            }
            if (null != s && !h.SelectionUtils.equals(s, o)) {
                e.selection = s;
                let t = I.HistoryUtils.currentEntry(e);
                null != t && (t.selection = s), l = !0
            }
            let d = E.getCommandBlock(e);
            if (null != d && d[0].command.id !== (null === (i = u.default.getActiveCommand(y.id)) || void 0 === i ? void 0 : i.id) && I.HistoryUtils.withMergedEntry(e, () => {
                    (0, C.unsetCommand)(e, y.id, null, !0)
                }), l) {
                if (!et && h.EditorUtils.focus(e), "parent" === t) try {
                    ef.current = !1, e.onChange()
                } finally {
                    ef.current = !0
                } else e.onChange()
            }
        }, [y.id, y.guild_id, et]), eA = r.useCallback(() => {
            eT.current = !1
        }, []), em = r.useCallback(() => {
            eT.current = !0
        }, []), eN = (0, m.default)({
            channel: y,
            chatInputType: s,
            canUseCommands: $,
            canOnlyUseTextCommands: ee,
            onChangeStart: eA,
            onChangeEnd: em,
            updateState: eh
        }), ep = r.useCallback((e, t) => {
            let n = E.getOptionValues(eN, e),
                i = E.validateOptionValues(e, y.guild_id, y.id, n, t);
            return {
                values: n,
                results: i
            }
        }, [y.guild_id, y.id, eN]), eO = r.useCallback(() => {
            let e;
            let t = $ ? u.default.getActiveCommand(y.id) : null;
            if (null != t && null != t.options) {
                let r = ep(t, !1);
                e = r.values;
                let s = E.getOptionNames(eN).filter(e => !r.results[e].success).map(e => {
                    var n;
                    return (null !== (n = t.options) && void 0 !== n ? n : []).find(t => t.name === e)
                });
                for (let e of t.options) e.required && !(e.name in r.values) && (S.SlateTransforms.insertCommandOption(eN, e), s.push(e));
                if (s.length > 0) {
                    var n, i;
                    let e = s[0];
                    S.SlateTransforms.selectCommandOption(eN, e.name), c.ComponentDispatch.dispatch(v.ComponentActions.SHAKE_APP, {
                        duration: 200,
                        intensity: 2
                    }), (0, l.trackWithMetadata)(v.AnalyticEvents.APPLICATION_COMMAND_VALIDATION_FAILED, {
                        application_id: null == t ? void 0 : t.applicationId,
                        command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
                        argument_type: o.ApplicationCommandOptionType[null !== (i = null == e ? void 0 : e.type) && void 0 !== i ? i : 3],
                        is_required: null == e ? void 0 : e.required
                    });
                    return
                }
            }
            null == X || X((0, f.toTextValue)(h.EditorUtils.richValue(eN), {
                mode: "raw",
                ignoreTrailingEmptyNodes: !0
            }), t, e)
        }, [y.id, eN, X, ep, $]);
        (0, N.default)(t, eN, y, eO), (0, R.default)(eN, eE, x);
        let {
            handleKeyDown: eR,
            handleKeyUp: eC
        } = (0, p.default)({
            editor: eN,
            channel: y,
            disableEnterToSubmit: en,
            onKeyDown: j,
            onKeyUp: W,
            onTab: K,
            onEnter: z,
            allowNewLines: ei,
            submit: eO,
            hideAutocomplete: q,
            moveSelection: Z
        }), {
            handlePaste: eg,
            handleGlobalPaste: eL
        } = (0, O.default)(eN, eS, V), eD = r.useCallback(e => {
            null == Q || Q()
        }, [Q]), ev = r.useCallback(e => {
            e !== eI.current ? ef.current && (null == F || F(null, (0, f.toTextValue)(e, {
                mode: "raw"
            }), e)) : ef.current && Q()
        }, [Q, F]);
        r.useLayoutEffect(() => {
            eT.current && (eI.current = n, eh(eN, "parent", {
                value: n
            }))
        }, [eN, n, eh]), r.useEffect(() => {
            let e = () => {
                var e;
                let t = null !== (e = u.default.getActiveCommand(y.id)) && void 0 !== e ? e : null;
                null !== t && null != t.options && ep(t, !0)
            };
            return d.default.addChangeListener(e), () => d.default.removeChangeListener(e)
        }, [y, eN, ep]);
        let eM = r.useCallback((e, t) => (0, A.default)(e, t), []),
            ey = r.useCallback(e => (0, L.default)(eN, e, y.id), [y.id, eN]),
            eP = r.useCallback(e => (0, D.default)(e), []);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(_.ComponentAction, {
                event: v.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
                handler: eL
            }), (0, i.jsx)("div", {
                ref: eE,
                className: a()(P, M.slateContainer),
                children: (0, i.jsx)(T.default, {
                    id: U,
                    editor: eN,
                    channelId: y.id,
                    guildId: y.guild_id,
                    className: a()(M.slateTextArea, B),
                    placeholder: w,
                    readOnly: eS,
                    spellCheck: J,
                    autoFocus: !et,
                    canFocus: !b,
                    onChange: ev,
                    onFocus: H,
                    onBlur: Y,
                    onClick: eD,
                    onPaste: eg,
                    onKeyDown: eR,
                    onKeyUp: eC,
                    decorateExtra: eM,
                    renderExtraElement: ey,
                    renderExtraLeaf: eP,
                    "aria-owns": er,
                    "aria-haspopup": ea,
                    "aria-expanded": es,
                    "aria-activedescendant": eo,
                    "aria-controls": el,
                    "aria-labelledby": e_,
                    "aria-describedby": ed,
                    "aria-invalid": eu,
                    "aria-autocomplete": ec,
                    "aria-required": k
                })
            })]
        })
    })
}