function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("29570"),
        u = n("140817"),
        s = n("471559"),
        l = n("158201"),
        c = n("443817"),
        f = n("120447"),
        d = n("494189"),
        _ = n("610045"),
        E = n("231907"),
        p = n("590401"),
        m = n("453197"),
        y = n("714196"),
        I = n("355268"),
        h = n("225236"),
        O = n("840606"),
        T = n("329175"),
        S = n("913569"),
        v = n("156570"),
        g = n("264218"),
        A = n("498683"),
        b = n("719977"),
        N = n("333622"),
        R = n("281767"),
        C = n("381293");
    t.default = r.forwardRef(function(e, t) {
        var n = e.value,
            o = e.type,
            P = e.channel,
            D = e.className,
            L = e.id,
            M = e.disabled,
            U = e.submitting,
            w = e.placeholder,
            k = e.required,
            G = e.textAreaPaddingClassName,
            B = e.onChange,
            j = e.onPaste,
            F = e.onResize,
            V = e.onFocus,
            H = e.onBlur,
            x = e.onKeyDown,
            Y = e.onKeyUp,
            W = e.onTab,
            K = e.onEnter,
            z = e.onSubmit,
            X = e.maybeShowAutocomplete,
            q = e.hideAutocomplete,
            Q = e.moveSelection,
            J = e.spellcheckEnabled,
            Z = e.canUseCommands,
            $ = e.canOnlyUseTextCommands,
            ee = e.disableAutoFocus,
            et = e.disableEnterToSubmit,
            en = e.allowNewLines,
            er = e["aria-owns"],
            eo = e["aria-expanded"],
            ei = e["aria-haspopup"],
            ea = e["aria-activedescendant"],
            eu = e["aria-controls"],
            es = e["aria-invalid"],
            el = e["aria-describedby"],
            ec = e["aria-labelledby"],
            ef = e["aria-autocomplete"],
            ed = r.useRef(null),
            e_ = r.useRef(null),
            eE = r.useRef(!0),
            ep = r.useRef(!0),
            em = M || U,
            ey = r.useCallback(function(e, t, n) {
                var r, o = n.value,
                    i = n.selection,
                    a = y.EditorUtils.richValue(e),
                    u = e.selection,
                    l = !1;
                if (void 0 !== o && o !== a) {
                    if (e.children = o, "parent" === t && !e.previewMarkdown) {
                        try {
                            e.previewMarkdown = !0, (0, A.run)(e, P.guild_id, P.id)
                        } finally {
                            e.previewMarkdown = !1
                        }(0, A.run)(e, P.guild_id, P.id), i = void 0
                    }
                    "undo" !== t && void 0 !== o && o !== a && _.HistoryUtils.insertEntry(e, "other", !1, a, u), l = !0
                }
                if (null != i && !y.SelectionUtils.isValid(e, i) && (i = void 0), (l || !y.SelectionUtils.isValid(e, u)) && void 0 === i) {
                    var c = y.EditorUtils.end(e, []);
                    i = {
                        anchor: c,
                        focus: c
                    }
                }
                if (null != i && !y.SelectionUtils.equals(i, u)) {
                    e.selection = i;
                    var f = _.HistoryUtils.currentEntry(e);
                    null != f && (f.selection = i), l = !0
                }
                var E = d.getCommandBlock(e);
                if (null != E && E[0].command.id !== (null === (r = s.default.getActiveCommand(P.id)) || void 0 === r ? void 0 : r.id) && _.HistoryUtils.withMergedEntry(e, function() {
                        (0, g.unsetCommand)(e, P.id, null, !0)
                    }), l) {
                    if (!ee && y.EditorUtils.focus(e), "parent" === t) try {
                        ep.current = !1, e.onChange()
                    } finally {
                        ep.current = !0
                    } else e.onChange()
                }
            }, [P.id, P.guild_id, ee]),
            eI = r.useCallback(function() {
                eE.current = !1
            }, []),
            eh = r.useCallback(function() {
                eE.current = !0
            }, []),
            eO = (0, h.default)({
                channel: P,
                chatInputType: o,
                canUseCommands: Z,
                canOnlyUseTextCommands: $,
                onChangeStart: eI,
                onChangeEnd: eh,
                updateState: ey
            }),
            eT = r.useCallback(function(e, t) {
                var n = d.getOptionValues(eO, e),
                    r = d.validateOptionValues(e, P.guild_id, P.id, n, t);
                return {
                    values: n,
                    results: r
                }
            }, [P.guild_id, P.id, eO]),
            eS = r.useCallback(function() {
                var e = Z ? s.default.getActiveCommand(P.id) : null;
                if (null != e && null != e.options) {
                    var t = eT(e, !1);
                    l = t.values;
                    var n = d.getOptionNames(eO).filter(function(e) {
                            return !t.results[e].success
                        }).map(function(t) {
                            var n;
                            return (null !== (n = e.options) && void 0 !== n ? n : []).find(function(e) {
                                return e.name === t
                            })
                        }),
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var l, c, _ = e.options[Symbol.iterator](); !(r = (c = _.next()).done); r = !0) {
                            var E = c.value;
                            E.required && !(E.name in t.values) && (m.SlateTransforms.insertCommandOption(eO, E), n.push(E))
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != _.return && _.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    if (n.length > 0) {
                        var I, h, O = n[0];
                        m.SlateTransforms.selectCommandOption(eO, O.name), f.ComponentDispatch.dispatch(R.ComponentActions.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }), (0, u.trackWithMetadata)(R.AnalyticEvents.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == e ? void 0 : e.applicationId,
                            command_id: null == e ? void 0 : null === (I = e.rootCommand) || void 0 === I ? void 0 : I.id,
                            argument_type: a.ApplicationCommandOptionType[null !== (h = null == O ? void 0 : O.type) && void 0 !== h ? h : 3],
                            is_required: null == O ? void 0 : O.required
                        });
                        return
                    }
                }
                null == z || z((0, p.toTextValue)(y.EditorUtils.richValue(eO), {
                    mode: "raw",
                    ignoreTrailingEmptyNodes: !0
                }), e, l)
            }, [P.id, eO, z, eT, Z]);
        (0, O.default)(t, eO, P, eS), (0, v.default)(eO, ed, F);
        var ev = (0, T.default)({
                editor: eO,
                channel: P,
                disableEnterToSubmit: et,
                onKeyDown: x,
                onKeyUp: Y,
                onTab: W,
                onEnter: K,
                allowNewLines: en,
                submit: eS,
                hideAutocomplete: q,
                moveSelection: Q
            }),
            eg = ev.handleKeyDown,
            eA = ev.handleKeyUp,
            eb = (0, S.default)(eO, em, j),
            eN = eb.handlePaste,
            eR = eb.handleGlobalPaste,
            eC = r.useCallback(function(e) {
                null == X || X()
            }, [X]),
            eP = r.useCallback(function(e) {
                e !== e_.current ? ep.current && (null == B || B(null, (0, p.toTextValue)(e, {
                    mode: "raw"
                }), e)) : ep.current && X()
            }, [X, B]);
        r.useLayoutEffect(function() {
            eE.current && (e_.current = n, ey(eO, "parent", {
                value: n
            }))
        }, [eO, n, ey]), r.useEffect(function() {
            var e = function() {
                var e, t = null !== (e = s.default.getActiveCommand(P.id)) && void 0 !== e ? e : null;
                null !== t && null != t.options && eT(t, !0)
            };
            return l.default.addChangeListener(e),
                function() {
                    return l.default.removeChangeListener(e)
                }
        }, [P, eO, eT]);
        var eD = r.useCallback(function(e, t) {
                return (0, I.default)(e, t)
            }, []),
            eL = r.useCallback(function(e) {
                return (0, b.default)(eO, e, P.id)
            }, [P.id, eO]),
            eM = r.useCallback(function(e) {
                return (0, N.default)(e)
            }, []);
        return r.createElement(r.Fragment, null, r.createElement(c.ComponentAction, {
            event: R.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
            handler: eR
        }), r.createElement("div", {
            ref: ed,
            className: i()(D, C.slateContainer)
        }, r.createElement(E.default, {
            id: L,
            editor: eO,
            channelId: P.id,
            guildId: P.guild_id,
            className: i()(C.slateTextArea, G),
            placeholder: w,
            readOnly: em,
            spellCheck: J,
            autoFocus: !ee,
            canFocus: !M,
            onChange: eP,
            onFocus: V,
            onBlur: H,
            onClick: eC,
            onPaste: eN,
            onKeyDown: eg,
            onKeyUp: eA,
            decorateExtra: eD,
            renderExtraElement: eL,
            renderExtraLeaf: eM,
            "aria-owns": er,
            "aria-haspopup": ei,
            "aria-expanded": eo,
            "aria-activedescendant": ea,
            "aria-controls": eu,
            "aria-labelledby": ec,
            "aria-describedby": el,
            "aria-invalid": es,
            "aria-autocomplete": ef,
            "aria-required": k
        })))
    })
}