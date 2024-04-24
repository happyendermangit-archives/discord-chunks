function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("836560"),
        l = n("512722"),
        u = n.n(l),
        d = n("143927"),
        _ = n("873546"),
        c = n("149765"),
        E = n("442837"),
        I = n("481060"),
        T = n("430742"),
        f = n("607070"),
        S = n("100527"),
        h = n("906732"),
        A = n("424602"),
        m = n("541099"),
        N = n("663924"),
        p = n("998698"),
        O = n("271668"),
        R = n("931981"),
        C = n("326133"),
        g = n("570220"),
        L = n("28546"),
        D = n("805680"),
        v = n("151574"),
        M = n("368844"),
        y = n("41776"),
        P = n("849522"),
        U = n("780291"),
        b = n("913663"),
        G = n("268350"),
        w = n("378233"),
        B = n("665906"),
        k = n("695346"),
        V = n("271383"),
        x = n("496675"),
        F = n("944486"),
        H = n("398327"),
        Y = n("117530"),
        j = n("594174"),
        W = n("459273"),
        K = n("700785"),
        z = n("358085"),
        X = n("746877"),
        Q = n("541716"),
        q = n("667829"),
        Z = n("562267"),
        J = n("376918"),
        $ = n("760196"),
        ee = n("258696"),
        et = n("303628"),
        en = n("472243"),
        ei = n("872635"),
        er = n("676108"),
        es = n("981631"),
        ea = n("665692"),
        eo = n("957825"),
        el = n("23383");
    t.default = r.memo(r.forwardRef(function(e, t) {
        var s, l, eu, ed, e_, ec, eE, eI, eT, ef, eS, eh, eA, em;
        let {
            textValue: eN,
            richValue: ep,
            className: eO,
            innerClassName: eR,
            editorClassName: eC,
            id: eg,
            required: eL,
            disabled: eD,
            placeholder: ev,
            accessibilityLabel: eM,
            channel: ey,
            type: eP,
            focused: eU,
            renderAttachButton: eb,
            renderAppLauncherButton: eG,
            renderApplicationCommandIcon: ew,
            pendingReply: eB,
            onChange: ek,
            onResize: eV,
            onBlur: ex,
            onFocus: eF,
            onKeyDown: eH,
            onSubmit: eY,
            promptToUpload: ej,
            highlighted: eW,
            canMentionRoles: eK,
            canMentionChannels: ez,
            maxCharacterCount: eX,
            showRemainingCharsAfterCount: eQ,
            allowNewLines: eq = !0,
            characterCountClassName: eZ,
            "aria-describedby": eJ,
            "aria-labelledby": e$,
            setEditorRef: e0,
            autoCompletePosition: e1,
            children: e2,
            disableThemedBackground: e3 = !1,
            emojiPickerCloseOnModalOuterClick: e4,
            parentModalKey: e6
        } = e;
        u()(null != eP, "chat input type must be set");
        let {
            analyticsLocations: e7
        } = (0, h.default)(S.default.CHANNEL_TEXT_AREA), e5 = function(e) {
            let t = r.useRef(null);
            if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
            return null == e ? t : e
        }(t), e8 = r.useRef(null), e9 = r.useRef(null), te = r.useRef(null), tt = r.useRef(null);
        null == e0 || e0(e9.current);
        let {
            activeCommand: tn,
            activeCommandSection: ti
        } = (0, E.useStateFromStoresObject)([p.default], () => {
            var e, t;
            return {
                activeCommand: (null === (e = eP.commands) || void 0 === e ? void 0 : e.enabled) ? p.default.getActiveCommand(ey.id) : null,
                activeCommandSection: (null === (t = eP.commands) || void 0 === t ? void 0 : t.enabled) ? p.default.getActiveCommandSection(ey.id) : null
            }
        }), {
            isLurking: tr,
            isPendingMember: ts,
            disabled: ta,
            canAttachFiles: to,
            canCreateThreads: tl,
            canEveryoneSendMessages: tu
        } = function(e, t, n, i) {
            let r = e.getGuildId(),
                s = (0, E.useStateFromStores)([y.default], () => null != r && y.default.isLurking(r), [r]),
                a = (0, E.useStateFromStores)([V.default, j.default], () => {
                    var e, t;
                    let n = j.default.getCurrentUser();
                    return null !== (t = null != r && null != n ? null === (e = V.default.getMember(r, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
                }),
                o = (0, E.useStateFromStoresObject)([x.default], () => {
                    var r, s;
                    let o = e.isPrivate(),
                        l = x.default.computePermissions(e),
                        u = c.has(l, es.Permissions.CREATE_PUBLIC_THREADS) || c.has(l, es.Permissions.CREATE_PRIVATE_THREADS),
                        d = (!(null === (r = t.permissions) || void 0 === r ? void 0 : r.requireCreateTherads) || u) && (!(null === (s = t.permissions) || void 0 === s ? void 0 : s.requireSendMessages) || c.has(l, es.Permissions.SEND_MESSAGES)),
                        _ = d && c.has(l, es.Permissions.ATTACH_FILES),
                        E = null != n,
                        I = (0, B.computeIsReadOnlyThread)(e);
                    return {
                        disabled: i || a || !o && !d || I,
                        canAttachFiles: !0 === t.attachments && (o || a || _ || E),
                        canCreateThreads: u,
                        canEveryoneSendMessages: K.canEveryoneRole(es.Permissions.SEND_MESSAGES, e)
                    }
                }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, a]);
            return {
                isLurking: s,
                isPendingMember: a,
                ...o
            }
        }(ey, eP, tn, eD), td = eP.toolbarType === Q.SlateToolbarTypes.STATIC, t_ = !k.UseLegacyChatInput.useSetting() && !(0, z.isAndroidWeb)() && null != window.ResizeObserver, tc = !t_ || !(null === (s = eP.commands) || void 0 === s ? void 0 : s.enabled) || !eU || eN !== ea.COMMAND_SENTINEL, tE = (0, P.default)(), {
            isSubmitButtonEnabled: tI,
            fontSize: tT
        } = (0, E.useStateFromStoresObject)([f.default], () => ({
            fontSize: f.default.fontSize,
            isSubmitButtonEnabled: f.default.isSubmitButtonEnabled
        })), tf = (0, E.useStateFromStores)([H.default], () => H.default.isEnabled());
        ! function(e, t) {
            let n = r.useCallback(() => {
                    !t && (0, L.toggleExpressionPicker)(eo.ExpressionPickerViewType.EMOJI, e)
                }, [t, e]),
                i = r.useCallback(() => {
                    var n;
                    !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, L.toggleExpressionPicker)(eo.ExpressionPickerViewType.GIF, e)
                }, [t, e]),
                s = r.useCallback(() => {
                    var n;
                    !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, L.toggleExpressionPicker)(eo.ExpressionPickerViewType.STICKER, e)
                }, [t, e]);
            (0, W.useComponentAction)({
                event: es.ComponentActions.TOGGLE_EMOJI_POPOUT,
                handler: n
            }), (0, W.useComponentAction)({
                event: es.ComponentActions.TOGGLE_GIF_PICKER,
                handler: i
            }), (0, W.useComponentAction)({
                event: es.ComponentActions.TOGGLE_STICKER_PICKER,
                handler: s
            })
        }(eP, ta);
        let {
            eventEmitter: tS,
            handleEditorSelectionChanged: th
        } = function(e, t, n) {
            let [i] = r.useState(() => new o.EventEmitter);
            return r.useEffect(() => {
                i.emit("text-changed", t, n)
            }, [t, n, i]), {
                eventEmitter: i,
                handleEditorSelectionChanged: t => {
                    null != e.current && i.emit("selection-changed", t)
                }
            }
        }(e9, eN, ep), {
            submitting: tA,
            submit: tm,
            handleSubmit: tN
        } = function(e, t, s, a) {
            let [o, l] = r.useState(!1), u = r.useCallback((r, d, _, c, E) => {
                var f, S, h;
                if (o) return;
                l(!0);
                let A = null !== (S = null === (f = b.default.getStickerPreview(a, t.drafts.type)) || void 0 === f ? void 0 : f.map(e => e.id)) && void 0 !== S ? S : [],
                    m = null !== (h = Y.default.getUploads(a, t.drafts.type)) && void 0 !== h ? h : [];
                if (null == d && !c && !E && (0, M.shouldShowAddMediaToOriginalPostModal)(m, a)) {
                    l(!1), (0, I.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("99387"), n.e("23755"), n.e("90508"), n.e("41947"), n.e("95258")]).then(n.bind(n, "273602"));
                        return t => (0, i.jsx)(e, {
                            ...t,
                            threadId: a,
                            attachments: m,
                            sendMessage: () => u(r, void 0, void 0, void 0, !0)
                        })
                    });
                    return
                }
                e({
                    value: r,
                    uploads: m,
                    stickers: A,
                    command: d,
                    commandOptionValues: _,
                    isGif: c
                }).then(e => {
                    var n, i, r, o;
                    let {
                        shouldClear: u,
                        shouldRefocus: d
                    } = e;
                    let _ = (n = u, i = t, null !== (o = n && (null === (r = i.submit) || void 0 === r ? void 0 : r.clearOnSubmit)) && void 0 !== o && o),
                        c = null != s.current;
                    if (_) {
                        if (a !== F.default.getChannelId()) T.default.saveDraft(a, "", t.drafts.type);
                        else c && s.current.clearValue()
                    }
                    c && (l(!1), (0, L.closeExpressionPicker)(), d && s.current.focus())
                })
            }, [s, e, o, t, a]);
            return {
                submitting: o,
                submit: u,
                handleSubmit: r.useCallback(e => {
                    var t;
                    null == s || null === (t = s.current) || void 0 === t || t.submit(e)
                }, [])
            }
        }(eY, eP, e9, ey.id), {
            autocompleteRef: tp,
            handleMaybeShowAutocomplete: tO,
            handleHideAutocomplete: tR
        } = function() {
            let e = r.useRef(null),
                t = r.useCallback(() => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete()
                }, []),
                n = r.useCallback(() => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.onHideAutocomplete()
                }, []);
            return {
                autocompleteRef: e,
                handleMaybeShowAutocomplete: t,
                handleHideAutocomplete: n
            }
        }();
        let tC = (ef = tm, eS = eP, eh = e9, r.useCallback(e => {
            var t, n;
            eS === Q.ChatInputTypes.CREATE_FORUM_POST ? null === (n = eh.current) || void 0 === n || n.insertGIF(e) : ef(e.url, void 0, void 0, !0), (0, L.closeExpressionPicker)(), null === (t = eh.current) || void 0 === t || t.focus()
        }, [eh, ef, eS]));
        let tg = (eA = e9, r.useCallback(function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = eA.current;
                null != e && null != i && i.insertEmoji(e, t, n), t && (0, L.closeExpressionPicker)()
            }, [eA])),
            tL = function(e) {
                let {
                    editorRef: t,
                    disabled: n,
                    textValue: i,
                    channelId: s,
                    chatInputType: a,
                    submit: o
                } = e, {
                    analyticsLocations: l
                } = (0, h.default)();
                return r.useCallback((e, r) => {
                    var u, d;
                    !n && ((0, w.shouldAttachSticker)(r, i, s, a.drafts.type) ? ((0, J.trackStickerPreviewSelect)({
                        sticker: e,
                        stickerSelectLocation: r,
                        isReplacement: null != b.default.getStickerPreview(s, a.drafts.type),
                        analyticsLocations: l
                    }), (0, G.addStickerPreview)(s, e, a.drafts.type)) : (o({
                        value: "",
                        uploads: void 0,
                        stickers: [e.id]
                    }), null === (d = t.current) || void 0 === d || d.clearValue()), (0, L.closeExpressionPicker)(), null === (u = t.current) || void 0 === u || u.focus())
                }, [n, i, s, a.drafts.type, t, l, o])
            }({
                editorRef: e9,
                disabled: ta,
                textValue: eN,
                channelId: ey.id,
                chatInputType: eP,
                submit: eY
            });
        let tD = (em = e9, r.useCallback(e => {
                let t = em.current;
                null != e && null != t && t.insertSound(e), (0, L.closeExpressionPicker)()
            }, [em])),
            tv = r.useCallback(() => {
                var e;
                return null == tt ? void 0 : null === (e = tt.current) || void 0 === e ? void 0 : e.hide()
            }, []),
            {
                editorHeight: tM,
                handleResize: ty
            } = function(e) {
                let [t, n] = r.useState(0);
                return {
                    editorHeight: t,
                    handleResize: r.useCallback(t => {
                        n(null != t ? t : 0), null == e || e(t)
                    }, [e])
                }
            }(eV),
            {
                handleTab: tP,
                handleEnter: tU,
                handleMoveSelection: tb
            } = function(e, t, n) {
                let i = r.useCallback(() => {
                        var i, r;
                        return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1))) || (null === (r = e.current) || void 0 === r ? void 0 : r.onTabOrEnter(!1)) || !1
                    }, [n]),
                    s = r.useCallback(() => {
                        var i, r;
                        return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0))) || (null === (r = e.current) || void 0 === r ? void 0 : r.onTabOrEnter(!0)) || !1
                    }, [n]);
                return {
                    handleTab: i,
                    handleEnter: s,
                    handleMoveSelection: r.useCallback(i => {
                        var r, s;
                        return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onMoveSelection(i))) || (null === (s = e.current) || void 0 === s ? void 0 : s.onMoveSelection(i)) || !1
                    }, [n])
                }
            }(tp, e8, tc),
            {
                expressionPickerView: tG,
                shouldHideExpressionPicker: tw,
                handleAutocompleteVisibilityChange: tB,
                handleOuterClick: tk
            } = function(e, t, n) {
                let [i, s] = (0, L.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], d.default);
                r.useEffect(() => () => {
                    (0, L.closeExpressionPicker)(e)
                }, [e]);
                let a = r.useCallback(e => {
                        t.emit("autocomplete-visibility-change", e), e && (0, L.closeExpressionPicker)()
                    }, [t]),
                    o = r.useCallback(() => {
                        var e;
                        null == i && (null === (e = n.current) || void 0 === e || e.handleOuterClick())
                    }, [i]),
                    l = null == i || null == s || s !== e;
                return {
                    expressionPickerView: i,
                    shouldHideExpressionPicker: l,
                    handleAutocompleteVisibilityChange: a,
                    handleOuterClick: o
                }
            }(eP, tS, e9),
            tV = A.AppLauncherDesktopExperiment.useExperiment({
                location: "chat_input"
            }, {
                autoTrackExposure: !1
            }).enabled,
            tx = (0, E.useStateFromStores)([m.default], () => m.default.shouldShowPopup(), []);
        (0, X.useHereMentionCallback)(tS, ey.guild_id, ey.id);
        let tF = null != eB,
            tH = ta && !((tr || ts) && tu) || tA && (null === (l = eP.submit) || void 0 === l ? void 0 : l.useDisabledStylesOnSubmit),
            tY = null,
            tj = null;
        null != tn ? tY = null == ew ? void 0 : ew(tn, ti, el.attachButton) : (!ta || tl) && (tY = null == eb ? void 0 : eb(tF, el.attachButton), tV && (tj = null == eG ? void 0 : eG()));
        let tW = t_ && null != ep && !ta && eP.showCharacterCount && null == tn,
            tK = t_ && !__OVERLAY__ && null != ep && null == tn,
            tz = function(e, t, n, i) {
                var r, s;
                let a = k.ExpressionSuggestionsEnabled.useSetting(),
                    o = (0, E.useStateFromStores)([b.default], () => b.default.getStickerPreview(e.id, t.drafts.type)),
                    l = null != o && o.length > 0;
                return a && (null === (r = t.stickers) || void 0 === r ? void 0 : r.autoSuggest) && !l && (null === (s = i.current) || void 0 === s ? void 0 : s.isVisible()) !== !0 && !__OVERLAY__ && null != n
            }(ey, eP, ep, tp),
            tX = (0, R.useShouldShowPTONotice)(ey),
            tQ = null != tn || null != eB || tX,
            tq = !!(null === (eu = eP.emojis) || void 0 === eu ? void 0 : eu.button) && tM <= 44;
        return (0, i.jsx)(g.EventEmitterProvider, {
            value: tS,
            children: (0, i.jsxs)(h.AnalyticsLocationProvider, {
                value: e7,
                children: [tK && td ? (0, i.jsx)(er.default, {
                    editorRef: e9,
                    options: eP.markdown,
                    channel: ey
                }) : tK ? (0, i.jsx)(ei.default, {
                    ref: tt,
                    editorRef: e9,
                    containerRef: te,
                    options: eP.markdown
                }) : null, (0, i.jsxs)("div", {
                    ref: e5,
                    className: a()(eO, {
                        [el.channelTextArea]: !0,
                        [el.channelTextAreaDisabled]: tH,
                        [el.highlighted]: eW,
                        [el.textAreaMobileThemed]: _.isMobile
                    }),
                    onMouseDown: tk,
                    children: [(0, i.jsx)($.default, {
                        type: eP,
                        channel: ey,
                        activeCommand: tn,
                        pendingReply: eB
                    }), (0, i.jsxs)("div", {
                        ref: te,
                        onScroll: tv,
                        className: a()(eR, {
                            [el.scrollableContainer]: !0,
                            [el.themedBackground]: !e3,
                            [el.webkit]: "Blink" === platform.layout,
                            [el.hasConnectedBar]: tQ
                        }),
                        children: [(0, i.jsx)(Z.default, {
                            channelId: ey.id,
                            chatInputType: eP
                        }), eP.hideAttachmentArea ? null : (0, i.jsx)(et.default, {
                            channelId: ey.id,
                            type: eP,
                            canAttachFiles: to
                        }), (0, i.jsxs)("div", {
                            className: a()(el.inner, {
                                [el.innerDisabled]: tH,
                                [el.sansAttachButton]: eP !== Q.ChatInputTypes.EDIT && (null != tY || tH && null == tY || tr),
                                [el.sansAttachButtonCreateThread]: eP === Q.ChatInputTypes.THREAD_CREATION,
                                [el.sansAttachButtonCreatePost]: eP === Q.ChatInputTypes.CREATE_FORUM_POST
                            }),
                            children: [tY, tj, (0, i.jsx)(I.FocusRing, {
                                ringTarget: e5,
                                ringClassName: el.focusRing,
                                children: (0, i.jsx)(q.default, {
                                    ref: e9,
                                    id: eg,
                                    focused: eU,
                                    useSlate: t_,
                                    textValue: eN,
                                    richValue: ep,
                                    disabled: ta,
                                    placeholder: ev,
                                    required: eL,
                                    accessibilityLabel: eM,
                                    isPreviewing: (tr || ts) && tu,
                                    channel: ey,
                                    type: eP,
                                    canPasteFiles: to,
                                    uploadPromptCharacterCount: es.MAX_MESSAGE_LENGTH_PREMIUM,
                                    maxCharacterCount: null != eX ? eX : tE,
                                    allowNewLines: eq,
                                    "aria-describedby": eJ,
                                    onChange: ek,
                                    onResize: ty,
                                    onBlur: ex,
                                    onFocus: eF,
                                    onKeyDown: eH,
                                    onSubmit: tm,
                                    onTab: tP,
                                    onEnter: tU,
                                    onMoveSelection: tb,
                                    onSelectionChanged: th,
                                    onMaybeShowAutocomplete: tO,
                                    onHideAutocomplete: tR,
                                    promptToUpload: ej,
                                    fontSize: tT,
                                    spellcheckEnabled: tf,
                                    canOnlyUseTextCommands: tF,
                                    className: a()({
                                        [el.textAreaThreadCreation]: eP === Q.ChatInputTypes.THREAD_CREATION,
                                        [el.profileBioInput]: eP === Q.ChatInputTypes.PROFILE_BIO_INPUT
                                    }, eC),
                                    "aria-labelledby": e$
                                })
                            }), (0, i.jsx)(ee.default, {
                                type: eP,
                                disabled: ta,
                                channel: ey,
                                handleSubmit: tN,
                                isEmpty: 0 === eN.trim().length
                            })]
                        })]
                    }), tc ? null : (0, i.jsx)(O.default, {
                        ref: e8,
                        channel: ey,
                        canOnlyUseTextCommands: tF
                    }), (0, i.jsx)(C.default, {
                        ref: tp,
                        channel: ey,
                        canMentionRoles: eK,
                        canMentionChannels: ez,
                        useNewSlashCommands: t_,
                        canOnlyUseTextCommands: tF,
                        canSendStickers: null === (ed = eP.stickers) || void 0 === ed ? void 0 : ed.allowSending,
                        textValue: eN,
                        focused: eU,
                        expressionPickerView: tG,
                        type: eP,
                        editorRef: e9,
                        onSendMessage: tm,
                        onSendSticker: tL,
                        onVisibilityChange: tB,
                        editorHeight: tM,
                        setValue: (e, t) => null == ek ? void 0 : ek(null, e, t),
                        position: e1
                    }), (0, i.jsx)(U.default, {
                        textValue: eN,
                        editorHeight: tM
                    }), tW ? (0, i.jsx)(en.default, {
                        type: eP,
                        textValue: eN,
                        className: a()(eZ, {
                            [el.indentCharacterCount]: tq
                        }),
                        maxCharacterCount: eX,
                        showRemainingCharsAfterCount: eQ
                    }) : null, tz ? (0, i.jsx)(v.default, {
                        editorRef: e9,
                        channel: ey,
                        isEditorFocused: eU,
                        onSelectSticker: tL,
                        submitButtonVisible: (null === (e_ = eP.submit) || void 0 === e_ ? void 0 : e_.button) && (null !== (eI = null === (ec = eP.submit) || void 0 === ec ? void 0 : ec.ignorePreference) && void 0 !== eI ? eI : tI),
                        stickerIconVisible: null !== (eT = null === (eE = eP.stickers) || void 0 === eE ? void 0 : eE.button) && void 0 !== eT && eT
                    }) : null, e2]
                }), tw ? null : (0, i.jsx)(D.default, {
                    positionTargetRef: e5,
                    type: eP,
                    onSelectGIF: tC,
                    onSelectEmoji: tg,
                    onSelectSticker: tL,
                    onSelectSound: tD,
                    channel: ey,
                    closeOnModalOuterClick: e4,
                    parentModalKey: e6,
                    position: "top",
                    align: "right",
                    positionLayerClassName: el.expressionPickerPositionLayer
                }), tx ? (0, i.jsx)(N.default, {
                    positionTargetRef: e5,
                    channel: ey,
                    closeOnModalOuterClick: e4,
                    parentModalKey: e6
                }) : null]
            })
        })
    }))
}