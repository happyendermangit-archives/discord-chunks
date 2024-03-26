function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return eu
        }
    }), n("222007"), n("70102");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("44170"),
        o = n("627445"),
        u = n.n(o),
        d = n("16470"),
        c = n("394846"),
        f = n("316693"),
        p = n("446674"),
        m = n("77078"),
        h = n("295426"),
        x = n("206230"),
        E = n("812204"),
        y = n("685665"),
        g = n("996554"),
        S = n("426969"),
        C = n("847352"),
        _ = n("383018"),
        T = n("529190"),
        I = n("829290"),
        v = n("842343"),
        N = n("200197"),
        A = n("538282"),
        O = n("241488"),
        R = n("292936"),
        M = n("791234"),
        k = n("267567"),
        L = n("217535"),
        P = n("558901"),
        b = n("328511"),
        j = n("467094"),
        U = n("24373"),
        D = n("300322"),
        w = n("845579"),
        F = n("26989"),
        G = n("957255"),
        H = n("18494"),
        B = n("769264"),
        V = n("585722"),
        K = n("697218"),
        W = n("378765"),
        Y = n("991170"),
        z = n("773336"),
        Z = n("545054"),
        J = n("850391"),
        Q = n("743825"),
        q = n("231868"),
        X = n("834725"),
        $ = n("537566"),
        ee = n("912823"),
        et = n("376215"),
        en = n("830618"),
        ei = n("848471"),
        el = n("153213"),
        ea = n("49111"),
        es = n("406291"),
        er = n("13030"),
        eo = n("350583"),
        eu = l.memo(l.forwardRef(function(e, t) {
            var a, o, eu, ed, ec, ef, ep, em, eh, ex, eE, ey, eg, eS;
            let {
                textValue: eC,
                richValue: e_,
                className: eT,
                innerClassName: eI,
                editorClassName: ev,
                id: eN,
                required: eA,
                disabled: eO,
                placeholder: eR,
                accessibilityLabel: eM,
                channel: ek,
                type: eL,
                focused: eP,
                renderAttachButton: eb,
                renderAppLauncherButton: ej,
                renderApplicationCommandIcon: eU,
                pendingReply: eD,
                onChange: ew,
                onResize: eF,
                onBlur: eG,
                onFocus: eH,
                onKeyDown: eB,
                onSubmit: eV,
                promptToUpload: eK,
                highlighted: eW,
                canMentionRoles: eY,
                canMentionChannels: ez,
                maxCharacterCount: eZ,
                showRemainingCharsAfterCount: eJ,
                allowNewLines: eQ = !0,
                characterCountClassName: eq,
                "aria-describedby": eX,
                "aria-labelledby": e$,
                setEditorRef: e0,
                autoCompletePosition: e1,
                children: e3,
                disableThemedBackground: e7 = !1,
                emojiPickerCloseOnModalOuterClick: e6,
                parentModalKey: e2
            } = e;
            u(null != eL, "chat input type must be set");
            let {
                analyticsLocations: e8
            } = (0, y.default)(E.default.CHANNEL_TEXT_AREA), e4 = function(e) {
                let t = l.useRef(null);
                if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
                return null == e ? t : e
            }(t), e5 = l.useRef(null), e9 = l.useRef(null), te = l.useRef(null), tt = l.useRef(null);
            null == e0 || e0(e9.current);
            let {
                activeCommand: tn,
                activeCommandSection: ti
            } = (0, p.useStateFromStoresObject)([_.default], () => {
                var e, t;
                return {
                    activeCommand: (null === (e = eL.commands) || void 0 === e ? void 0 : e.enabled) ? _.default.getActiveCommand(ek.id) : null,
                    activeCommandSection: (null === (t = eL.commands) || void 0 === t ? void 0 : t.enabled) ? _.default.getActiveCommandSection(ek.id) : null
                }
            }), {
                isLurking: tl,
                isPendingMember: ta,
                disabled: ts,
                canAttachFiles: tr,
                canCreateThreads: to,
                canEveryoneSendMessages: tu
            } = function(e, t, n, i) {
                let l = e.getGuildId(),
                    a = (0, p.useStateFromStores)([k.default], () => null != l && k.default.isLurking(l), [l]),
                    s = (0, p.useStateFromStores)([F.default, K.default], () => {
                        var e, t;
                        let n = K.default.getCurrentUser();
                        return null !== (t = null != l && null != n ? null === (e = F.default.getMember(l, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
                    }),
                    r = (0, p.useStateFromStoresObject)([G.default], () => {
                        var l, a;
                        let r = e.isPrivate(),
                            o = G.default.computePermissions(e),
                            u = f.has(o, ea.Permissions.CREATE_PUBLIC_THREADS) || f.has(o, ea.Permissions.CREATE_PRIVATE_THREADS),
                            d = (!(null === (l = t.permissions) || void 0 === l ? void 0 : l.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || f.has(o, ea.Permissions.SEND_MESSAGES)),
                            c = d && f.has(o, ea.Permissions.ATTACH_FILES),
                            p = null != n,
                            m = (0, D.computeIsReadOnlyThread)(e);
                        return {
                            disabled: i || s || !r && !d || m,
                            canAttachFiles: !0 === t.attachments && (r || s || c || p),
                            canCreateThreads: u,
                            canEveryoneSendMessages: Y.canEveryoneRole(ea.Permissions.SEND_MESSAGES, e)
                        }
                    }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, s]);
                return {
                    isLurking: a,
                    isPendingMember: s,
                    ...r
                }
            }(ek, eL, tn, eO), td = eL.toolbarType === J.SlateToolbarTypes.STATIC, tc = !w.UseLegacyChatInput.useSetting() && !(0, z.isAndroidWeb)() && null != window.ResizeObserver, tf = !tc || !(null === (a = eL.commands) || void 0 === a ? void 0 : a.enabled) || !eP || eC !== es.COMMAND_SENTINEL, tp = (0, L.default)(), {
                isSubmitButtonEnabled: tm,
                fontSize: th
            } = (0, p.useStateFromStoresObject)([x.default], () => ({
                fontSize: x.default.fontSize,
                isSubmitButtonEnabled: x.default.isSubmitButtonEnabled
            })), tx = (0, p.useStateFromStores)([B.default], () => B.default.isEnabled());
            ! function(e, t) {
                let n = l.useCallback(() => {
                        !t && (0, A.toggleExpressionPicker)(er.ExpressionPickerViewType.EMOJI, e)
                    }, [t, e]),
                    i = l.useCallback(() => {
                        var n;
                        !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, A.toggleExpressionPicker)(er.ExpressionPickerViewType.GIF, e)
                    }, [t, e]),
                    a = l.useCallback(() => {
                        var n;
                        !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, A.toggleExpressionPicker)(er.ExpressionPickerViewType.STICKER, e)
                    }, [t, e]);
                (0, W.useComponentAction)({
                    event: ea.ComponentActions.TOGGLE_EMOJI_POPOUT,
                    handler: n
                }), (0, W.useComponentAction)({
                    event: ea.ComponentActions.TOGGLE_GIF_PICKER,
                    handler: i
                }), (0, W.useComponentAction)({
                    event: ea.ComponentActions.TOGGLE_STICKER_PICKER,
                    handler: a
                })
            }(eL, ts);
            let {
                eventEmitter: tE,
                handleEditorSelectionChanged: ty
            } = function(e, t, n) {
                let [i] = l.useState(() => new r.EventEmitter);
                return l.useEffect(() => {
                    i.emit("text-changed", t, n)
                }, [t, n, i]), {
                    eventEmitter: i,
                    handleEditorSelectionChanged: t => {
                        null != e.current && i.emit("selection-changed", t)
                    }
                }
            }(e9, eC, e_), {
                submitting: tg,
                submit: tS,
                handleSubmit: tC
            } = function(e, t, a, s) {
                let [r, o] = l.useState(!1), u = l.useCallback((l, d, c, f, p) => {
                    var x, E, y;
                    if (r) return;
                    o(!0);
                    let g = null !== (E = null === (x = b.default.getStickerPreview(s, t.drafts.type)) || void 0 === x ? void 0 : x.map(e => e.id)) && void 0 !== E ? E : [],
                        S = null !== (y = V.default.getUploads(s, t.drafts.type)) && void 0 !== y ? y : [];
                    if (null == d && !f && !p && (0, M.shouldShowAddMediaToOriginalPostModal)(S, s)) {
                        o(!1), (0, m.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("67994").then(n.bind(n, "67994"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                threadId: s,
                                attachments: S,
                                sendMessage: () => u(l, void 0, void 0, void 0, !0)
                            })
                        });
                        return
                    }
                    e({
                        value: l,
                        uploads: S,
                        stickers: g,
                        command: d,
                        commandOptionValues: c,
                        isGif: f
                    }).then(e => {
                        var n, i, l, r;
                        let {
                            shouldClear: u,
                            shouldRefocus: d
                        } = e;
                        let c = (n = u, i = t, null !== (r = n && (null === (l = i.submit) || void 0 === l ? void 0 : l.clearOnSubmit)) && void 0 !== r && r),
                            f = null != a.current;
                        if (c) {
                            if (s !== H.default.getChannelId()) h.default.saveDraft(s, "", t.drafts.type);
                            else f && a.current.clearValue()
                        }
                        f && (o(!1), (0, A.closeExpressionPicker)(), d && a.current.focus())
                    })
                }, [a, e, r, t, s]), d = l.useCallback(e => {
                    var t;
                    null == a || null === (t = a.current) || void 0 === t || t.submit(e)
                }, []);
                return {
                    submitting: r,
                    submit: u,
                    handleSubmit: d
                }
            }(eV, eL, e9, ek.id), {
                autocompleteRef: t_,
                handleMaybeShowAutocomplete: tT,
                handleHideAutocomplete: tI
            } = function() {
                let e = l.useRef(null),
                    t = l.useCallback(() => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete()
                    }, []),
                    n = l.useCallback(() => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.onHideAutocomplete()
                    }, []);
                return {
                    autocompleteRef: e,
                    handleMaybeShowAutocomplete: t,
                    handleHideAutocomplete: n
                }
            }();
            let tv = (ex = tS, eE = eL, ey = e9, l.useCallback(e => {
                var t, n;
                eE === J.ChatInputTypes.CREATE_FORUM_POST ? null === (n = ey.current) || void 0 === n || n.insertGIF(e) : ex(e.url, void 0, void 0, !0), (0, A.closeExpressionPicker)(), null === (t = ey.current) || void 0 === t || t.focus()
            }, [ey, ex, eE]));
            let tN = (eg = e9, l.useCallback(function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = eg.current;
                    null != e && null != i && i.insertEmoji(e, t, n), t && (0, A.closeExpressionPicker)()
                }, [eg])),
                tA = function(e) {
                    let {
                        editorRef: t,
                        disabled: n,
                        textValue: i,
                        channelId: a,
                        chatInputType: s,
                        submit: r
                    } = e, {
                        analyticsLocations: o
                    } = (0, y.default)();
                    return l.useCallback((e, l) => {
                        var u, d;
                        !n && ((0, U.shouldAttachSticker)(l, i, a, s.drafts.type) ? ((0, X.trackStickerPreviewSelect)({
                            sticker: e,
                            stickerSelectLocation: l,
                            isReplacement: null != b.default.getStickerPreview(a, s.drafts.type),
                            analyticsLocations: o
                        }), (0, j.addStickerPreview)(a, e, s.drafts.type)) : (r({
                            value: "",
                            uploads: void 0,
                            stickers: [e.id]
                        }), null === (d = t.current) || void 0 === d || d.clearValue()), (0, A.closeExpressionPicker)(), null === (u = t.current) || void 0 === u || u.focus())
                    }, [n, i, a, s.drafts.type, t, o, r])
                }({
                    editorRef: e9,
                    disabled: ts,
                    textValue: eC,
                    channelId: ek.id,
                    chatInputType: eL,
                    submit: eV
                });
            let tO = (eS = e9, l.useCallback(e => {
                    let t = eS.current;
                    null != e && null != t && t.insertSound(e), (0, A.closeExpressionPicker)()
                }, [eS])),
                tR = l.useCallback(() => {
                    var e;
                    return null == tt ? void 0 : null === (e = tt.current) || void 0 === e ? void 0 : e.hide()
                }, []),
                {
                    editorHeight: tM,
                    handleResize: tk
                } = function(e) {
                    let [t, n] = l.useState(0), i = l.useCallback(t => {
                        n(null != t ? t : 0), null == e || e(t)
                    }, [e]);
                    return {
                        editorHeight: t,
                        handleResize: i
                    }
                }(eF),
                {
                    handleTab: tL,
                    handleEnter: tP,
                    handleMoveSelection: tb
                } = function(e, t, n) {
                    let i = l.useCallback(() => {
                            var i, l;
                            return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1))) || (null === (l = e.current) || void 0 === l ? void 0 : l.onTabOrEnter(!1)) || !1
                        }, [n]),
                        a = l.useCallback(() => {
                            var i, l;
                            return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0))) || (null === (l = e.current) || void 0 === l ? void 0 : l.onTabOrEnter(!0)) || !1
                        }, [n]),
                        s = l.useCallback(i => {
                            var l, a;
                            return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onMoveSelection(i))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onMoveSelection(i)) || !1
                        }, [n]);
                    return {
                        handleTab: i,
                        handleEnter: a,
                        handleMoveSelection: s
                    }
                }(t_, e5, tf),
                {
                    expressionPickerView: tj,
                    shouldHideExpressionPicker: tU,
                    handleAutocompleteVisibilityChange: tD,
                    handleOuterClick: tw
                } = function(e, t, n) {
                    let [i, a] = (0, A.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], d.default);
                    l.useEffect(() => () => {
                        (0, A.closeExpressionPicker)(e)
                    }, [e]);
                    let s = l.useCallback(e => {
                            t.emit("autocomplete-visibility-change", e), e && (0, A.closeExpressionPicker)()
                        }, [t]),
                        r = l.useCallback(() => {
                            var e;
                            null == i && (null === (e = n.current) || void 0 === e || e.handleOuterClick())
                        }, [i]),
                        o = null == i || null == a || a !== e;
                    return {
                        expressionPickerView: i,
                        shouldHideExpressionPicker: o,
                        handleAutocompleteVisibilityChange: s,
                        handleOuterClick: r
                    }
                }(eL, tE, e9),
                tF = g.AppLauncherDesktopExperiment.useExperiment({
                    location: "chat_input"
                }, {
                    autoTrackExposure: !1
                }).enabled,
                tG = (0, p.useStateFromStores)([S.default], () => S.default.shouldShowPopup(), []);
            (0, Z.useHereMentionCallback)(tE, ek.guild_id, ek.id);
            let tH = null != eD,
                tB = ts && !((tl || ta) && tu) || tg && (null === (o = eL.submit) || void 0 === o ? void 0 : o.useDisabledStylesOnSubmit),
                tV = null,
                tK = null;
            null != tn ? tV = null == eU ? void 0 : eU(tn, ti, eo.attachButton) : (!ts || to) && (tV = null == eb ? void 0 : eb(tH, eo.attachButton), tF && (tK = null == ej ? void 0 : ej()));
            let tW = tc && null != e_ && !ts && eL.showCharacterCount && null == tn,
                tY = tc && !__OVERLAY__ && null != e_ && null == tn,
                tz = function(e, t, n, i) {
                    var l, a;
                    let s = w.ExpressionSuggestionsEnabled.useSetting(),
                        r = (0, p.useStateFromStores)([b.default], () => b.default.getStickerPreview(e.id, t.drafts.type)),
                        o = null != r && r.length > 0;
                    return s && (null === (l = t.stickers) || void 0 === l ? void 0 : l.autoSuggest) && !o && (null === (a = i.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n
                }(ek, eL, e_, t_),
                tZ = (0, I.useShouldShowPTONotice)(ek),
                tJ = null != tn || null != eD || tZ,
                tQ = !!(null === (eu = eL.emojis) || void 0 === eu ? void 0 : eu.button) && tM <= 44;
            return (0, i.jsx)(N.EventEmitterProvider, {
                value: tE,
                children: (0, i.jsxs)(y.AnalyticsLocationProvider, {
                    value: e8,
                    children: [tY && td ? (0, i.jsx)(el.default, {
                        editorRef: e9,
                        options: eL.markdown,
                        channel: ek
                    }) : tY ? (0, i.jsx)(ei.default, {
                        ref: tt,
                        editorRef: e9,
                        containerRef: te,
                        options: eL.markdown
                    }) : null, (0, i.jsxs)("div", {
                        ref: e4,
                        className: s(eT, {
                            [eo.channelTextArea]: !0,
                            [eo.channelTextAreaDisabled]: tB,
                            [eo.highlighted]: eW,
                            [eo.textAreaMobileThemed]: c.isMobile
                        }),
                        onMouseDown: tw,
                        children: [(0, i.jsx)($.default, {
                            type: eL,
                            channel: ek,
                            activeCommand: tn,
                            pendingReply: eD
                        }), (0, i.jsxs)("div", {
                            ref: te,
                            onScroll: tR,
                            className: s(eI, {
                                [eo.scrollableContainer]: !0,
                                [eo.themedBackground]: !e7,
                                [eo.webkit]: "Blink" === platform.layout,
                                [eo.hasConnectedBar]: tJ
                            }),
                            children: [(0, i.jsx)(q.default, {
                                channelId: ek.id,
                                chatInputType: eL
                            }), eL.hideAttachmentArea ? null : (0, i.jsx)(et.default, {
                                channelId: ek.id,
                                type: eL,
                                canAttachFiles: tr
                            }), (0, i.jsxs)("div", {
                                className: s(eo.inner, {
                                    [eo.innerDisabled]: tB,
                                    [eo.sansAttachButton]: eL !== J.ChatInputTypes.EDIT && (null != tV || tB && null == tV || tl),
                                    [eo.sansAttachButtonCreateThread]: eL === J.ChatInputTypes.THREAD_CREATION,
                                    [eo.sansAttachButtonCreatePost]: eL === J.ChatInputTypes.CREATE_FORUM_POST
                                }),
                                children: [tV, tK, (0, i.jsx)(m.FocusRing, {
                                    ringTarget: e4,
                                    ringClassName: eo.focusRing,
                                    children: (0, i.jsx)(Q.default, {
                                        ref: e9,
                                        id: eN,
                                        focused: eP,
                                        useSlate: tc,
                                        textValue: eC,
                                        richValue: e_,
                                        disabled: ts,
                                        placeholder: eR,
                                        required: eA,
                                        accessibilityLabel: eM,
                                        isPreviewing: (tl || ta) && tu,
                                        channel: ek,
                                        type: eL,
                                        canPasteFiles: tr,
                                        uploadPromptCharacterCount: ea.MAX_MESSAGE_LENGTH_PREMIUM,
                                        maxCharacterCount: null != eZ ? eZ : tp,
                                        allowNewLines: eQ,
                                        "aria-describedby": eX,
                                        onChange: ew,
                                        onResize: tk,
                                        onBlur: eG,
                                        onFocus: eH,
                                        onKeyDown: eB,
                                        onSubmit: tS,
                                        onTab: tL,
                                        onEnter: tP,
                                        onMoveSelection: tb,
                                        onSelectionChanged: ty,
                                        onMaybeShowAutocomplete: tT,
                                        onHideAutocomplete: tI,
                                        promptToUpload: eK,
                                        fontSize: th,
                                        spellcheckEnabled: tx,
                                        canOnlyUseTextCommands: tH,
                                        className: s({
                                            [eo.textAreaThreadCreation]: eL === J.ChatInputTypes.THREAD_CREATION,
                                            [eo.profileBioInput]: eL === J.ChatInputTypes.PROFILE_BIO_INPUT
                                        }, ev),
                                        "aria-labelledby": e$
                                    })
                                }), (0, i.jsx)(ee.default, {
                                    type: eL,
                                    disabled: ts,
                                    channel: ek,
                                    handleSubmit: tC,
                                    isEmpty: 0 === eC.trim().length
                                })]
                            })]
                        }), tf ? null : (0, i.jsx)(T.default, {
                            ref: e5,
                            channel: ek,
                            canOnlyUseTextCommands: tH
                        }), (0, i.jsx)(v.default, {
                            ref: t_,
                            channel: ek,
                            canMentionRoles: eY,
                            canMentionChannels: ez,
                            useNewSlashCommands: tc,
                            canOnlyUseTextCommands: tH,
                            canSendStickers: null === (ed = eL.stickers) || void 0 === ed ? void 0 : ed.allowSending,
                            textValue: eC,
                            focused: eP,
                            expressionPickerView: tj,
                            type: eL,
                            editorRef: e9,
                            onSendMessage: tS,
                            onSendSticker: tA,
                            onVisibilityChange: tD,
                            editorHeight: tM,
                            setValue: (e, t) => null == ew ? void 0 : ew(null, e, t),
                            position: e1
                        }), (0, i.jsx)(P.default, {
                            textValue: eC,
                            editorHeight: tM
                        }), tW ? (0, i.jsx)(en.default, {
                            type: eL,
                            textValue: eC,
                            className: s(eq, {
                                [eo.indentCharacterCount]: tQ
                            }),
                            maxCharacterCount: eZ,
                            showRemainingCharsAfterCount: eJ
                        }) : null, tz ? (0, i.jsx)(R.default, {
                            editorRef: e9,
                            channel: ek,
                            isEditorFocused: eP,
                            onSelectSticker: tA,
                            submitButtonVisible: (null === (ec = eL.submit) || void 0 === ec ? void 0 : ec.button) && (null !== (em = null === (ef = eL.submit) || void 0 === ef ? void 0 : ef.ignorePreference) && void 0 !== em ? em : tm),
                            stickerIconVisible: null !== (eh = null === (ep = eL.stickers) || void 0 === ep ? void 0 : ep.button) && void 0 !== eh && eh
                        }) : null, e3]
                    }), tU ? null : (0, i.jsx)(O.default, {
                        positionTargetRef: e4,
                        type: eL,
                        onSelectGIF: tv,
                        onSelectEmoji: tN,
                        onSelectSticker: tA,
                        onSelectSound: tO,
                        channel: ek,
                        closeOnModalOuterClick: e6,
                        parentModalKey: e2,
                        position: "top",
                        align: "right",
                        positionLayerClassName: eo.expressionPickerPositionLayer
                    }), tG ? (0, i.jsx)(C.default, {
                        positionTargetRef: e4,
                        channel: ek,
                        closeOnModalOuterClick: e6,
                        parentModalKey: e2
                    }) : null]
                })
            })
        }))
}