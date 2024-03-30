function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("836560"),
        u = n("512722"),
        s = n.n(u),
        l = n("143927"),
        c = n("56300"),
        f = n("22287"),
        d = n("898511"),
        _ = n("784184"),
        E = n("771382"),
        p = n("622780"),
        m = n("649455"),
        y = n("396586"),
        I = n("996116"),
        h = n("884916"),
        O = n("747560"),
        T = n("471559"),
        S = n("87679"),
        v = n("276395"),
        g = n("53949"),
        A = n("860897"),
        b = n("251384"),
        N = n("440694"),
        R = n("719474"),
        C = n("106359"),
        P = n("368995"),
        D = n("197351"),
        L = n("395039"),
        M = n("51181"),
        U = n("13075"),
        w = n("443699"),
        k = n("838726"),
        G = n("53867"),
        B = n("957808"),
        j = n("29884"),
        F = n("894288"),
        V = n("979654"),
        H = n("158201"),
        x = n("208454"),
        Y = n("443817"),
        W = n("359017"),
        K = n("374550"),
        z = n("520245"),
        X = n("398975"),
        q = n("260943"),
        Q = n("301635"),
        J = n("531759"),
        Z = n("968286"),
        $ = n("892790"),
        ee = n("472042"),
        et = n("249"),
        en = n("769098"),
        er = n("455342"),
        eo = n("281767"),
        ei = n("407048"),
        ea = n("980671"),
        eu = n("23383");

    function es(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function el(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function ec(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ef(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                ec(e, t, n[t])
            })
        }
        return e
    }

    function ed(e, t) {
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
                if ("string" == typeof e) return es(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return es(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    t.default = r.memo(r.forwardRef(function(e, t) {
        var o, u, es, e_, eE, ep, em, ey, eI, eh, eO, eT, eS, ev, eg, eA, eb, eN, eR, eC, eP, eD, eL, eM, eU, ew, ek, eG, eB, ej, eF, eV, eH, ex, eY, eW, eK, ez, eX, eq, eQ, eJ, eZ, e$, e0, e1, e2, e3, e4, e6, e8, e7, e9, e5, te, tt, tn, tr, to, ti, ta, tu, ts, tl, tc, tf, td, t_, tE, tp, tm, ty, tI, th, tO, tT, tS, tv, tg, tA = e.textValue,
            tb = e.richValue,
            tN = e.className,
            tR = e.innerClassName,
            tC = e.editorClassName,
            tP = e.id,
            tD = e.required,
            tL = e.disabled,
            tM = e.placeholder,
            tU = e.accessibilityLabel,
            tw = e.channel,
            tk = e.type,
            tG = e.focused,
            tB = e.renderAttachButton,
            tj = e.renderAppLauncherButton,
            tF = e.renderApplicationCommandIcon,
            tV = e.pendingReply,
            tH = e.onChange,
            tx = e.onResize,
            tY = e.onBlur,
            tW = e.onFocus,
            tK = e.onKeyDown,
            tz = e.onSubmit,
            tX = e.promptToUpload,
            tq = e.highlighted,
            tQ = e.canMentionRoles,
            tJ = e.canMentionChannels,
            tZ = e.maxCharacterCount,
            t$ = e.showRemainingCharsAfterCount,
            t0 = e.allowNewLines,
            t1 = e.characterCountClassName,
            t2 = e["aria-describedby"],
            t3 = e["aria-labelledby"],
            t4 = e.setEditorRef,
            t6 = e.autoCompletePosition,
            t8 = e.children,
            t7 = e.disableThemedBackground,
            t9 = e.emojiPickerCloseOnModalOuterClick,
            t5 = e.parentModalKey;
        s()(null != tk, "chat input type must be set");
        var ne = (0, y.default)(m.default.CHANNEL_TEXT_AREA).analyticsLocations,
            nt = function(e) {
                var t = r.useRef(null);
                if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
                return null == e ? t : e
            }(t),
            nn = r.useRef(null),
            nr = r.useRef(null),
            no = r.useRef(null),
            ni = r.useRef(null);
        null == t4 || t4(nr.current);
        var na = (0, d.useStateFromStoresObject)([T.default], function() {
                var e, t;
                return {
                    activeCommand: (null === (e = tk.commands) || void 0 === e ? void 0 : e.enabled) ? T.default.getActiveCommand(tw.id) : null,
                    activeCommandSection: (null === (t = tk.commands) || void 0 === t ? void 0 : t.enabled) ? T.default.getActiveCommandSection(tw.id) : null
                }
            }),
            nu = na.activeCommand,
            ns = na.activeCommandSection;
        var nl = (o = tw, u = tk, es = nu, e_ = tL, eE = o.getGuildId(), ep = (0, d.useStateFromStores)([P.default], function() {
                return null != eE && P.default.isLurking(eE)
            }, [eE]), em = (0, d.useStateFromStores)([B.default, x.default], function() {
                var e, t, n = x.default.getCurrentUser();
                return null !== (t = null != eE && null != n ? null === (e = B.default.getMember(eE, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
            }), ey = (0, d.useStateFromStoresObject)([j.default], function() {
                var e, t, n = o.isPrivate(),
                    r = j.default.computePermissions(o),
                    i = f.has(r, eo.Permissions.CREATE_PUBLIC_THREADS) || f.has(r, eo.Permissions.CREATE_PRIVATE_THREADS),
                    a = (!(null === (e = u.permissions) || void 0 === e ? void 0 : e.requireCreateTherads) || i) && (!(null === (t = u.permissions) || void 0 === t ? void 0 : t.requireSendMessages) || f.has(r, eo.Permissions.SEND_MESSAGES)),
                    s = a && f.has(r, eo.Permissions.ATTACH_FILES),
                    l = null != es,
                    c = (0, k.computeIsReadOnlyThread)(o);
                return {
                    disabled: e_ || em || !n && !a || c,
                    canAttachFiles: !0 === u.attachments && (n || em || s || l),
                    canCreateThreads: i,
                    canEveryoneSendMessages: W.canEveryoneRole(eo.Permissions.SEND_MESSAGES, o)
                }
            }, [o, u.permissions.requireCreateTherads, u.permissions.requireSendMessages, u.attachments, es, e_, em]), ef({
                isLurking: ep,
                isPendingMember: em
            }, ey)),
            nc = nl.isLurking,
            nf = nl.isPendingMember,
            nd = nl.disabled,
            n_ = nl.canAttachFiles,
            nE = nl.canCreateThreads,
            np = nl.canEveryoneSendMessages,
            nm = tk.toolbarType === X.SlateToolbarTypes.STATIC,
            ny = !G.UseLegacyChatInput.useSetting() && !(0, K.isAndroidWeb)() && null != window.ResizeObserver,
            nI = !ny || !(null === (td = tk.commands) || void 0 === td ? void 0 : td.enabled) || !tG || tA !== ei.COMMAND_SENTINEL,
            nh = (0, D.default)(),
            nO = (0, d.useStateFromStoresObject)([p.default], function() {
                return {
                    fontSize: p.default.fontSize,
                    isSubmitButtonEnabled: p.default.isSubmitButtonEnabled
                }
            }),
            nT = nO.isSubmitButtonEnabled,
            nS = nO.fontSize,
            nv = (0, d.useStateFromStores)([V.default], function() {
                return V.default.isEnabled()
            });
        eI = tk, eh = nd, eO = r.useCallback(function() {
            !eh && (0, b.toggleExpressionPicker)(ea.ExpressionPickerViewType.EMOJI, eI)
        }, [eh, eI]), eT = r.useCallback(function() {
            var e;
            !eh && (null === (e = eI.gifs) || void 0 === e ? void 0 : e.allowSending) && (0, b.toggleExpressionPicker)(ea.ExpressionPickerViewType.GIF, eI)
        }, [eh, eI]), eS = r.useCallback(function() {
            var e;
            !eh && (null === (e = eI.stickers) || void 0 === e ? void 0 : e.allowSending) && (0, b.toggleExpressionPicker)(ea.ExpressionPickerViewType.STICKER, eI)
        }, [eh, eI]), (0, Y.useComponentAction)({
            event: eo.ComponentActions.TOGGLE_EMOJI_POPOUT,
            handler: eO
        }), (0, Y.useComponentAction)({
            event: eo.ComponentActions.TOGGLE_GIF_PICKER,
            handler: eT
        }), (0, Y.useComponentAction)({
            event: eo.ComponentActions.TOGGLE_STICKER_PICKER,
            handler: eS
        });
        var ng = (ev = nr, eg = tA, eA = tb, eb = ed(r.useState(function() {
                return new a.EventEmitter
            }), 1)[0], r.useEffect(function() {
                eb.emit("text-changed", eg, eA)
            }, [eg, eA, eb]), {
                eventEmitter: eb,
                handleEditorSelectionChanged: function(e) {
                    null != ev.current && eb.emit("selection-changed", e)
                }
            }),
            nA = ng.eventEmitter,
            nb = ng.handleEditorSelectionChanged;
        var nN = (eN = tz, eR = tk, eC = nr, eP = tw.id, eL = (eD = ed(r.useState(!1), 2))[0], eM = eD[1], eU = r.useCallback(function(e, t, o, i, a) {
                if (!eL) {
                    eM(!0);
                    var u, s, l, c, f = null !== (l = null === (s = M.default.getStickerPreview(eP, eR.drafts.type)) || void 0 === s ? void 0 : s.map(function(e) {
                            return e.id
                        })) && void 0 !== l ? l : [],
                        d = null !== (c = H.default.getUploads(eP, eR.drafts.type)) && void 0 !== c ? c : [];
                    if (null == t && !i && !a && (0, C.shouldShowAddMediaToOriginalPostModal)(d, eP)) {
                        ;
                        eM(!1), (0, _.openModalLazy)((u = function() {
                            var t;
                            return function(e, t) {
                                var n, r, o, i, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return i = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                    return this
                                }), i;

                                function u(i) {
                                    return function(u) {
                                        return function(i) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; a;) try {
                                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = i;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: i[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, r = i[1], i = [0];
                                                        continue;
                                                    case 7:
                                                        i = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                            a.label = i[1];
                                                            break
                                                        }
                                                        if (6 === i[0] && a.label < o[1]) {
                                                            a.label = o[1], o = i;
                                                            break
                                                        }
                                                        if (o && a.label < o[2]) {
                                                            a.label = o[2], a.ops.push(i);
                                                            break
                                                        }
                                                        o[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                i = t.call(e, a)
                                            } catch (e) {
                                                i = [6, e], r = 0
                                            } finally {
                                                n = o = 0
                                            }
                                            if (5 & i[0]) throw i[1];
                                            return {
                                                value: i[0] ? i[1] : void 0,
                                                done: !0
                                            }
                                        }([i, u])
                                    }
                                }
                            }(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("23755"), n.e("55060"), n.e("22999"), n.e("57036"), n.e("81744"), n.e("98208"), n.e("9468")]).then(n.bind(n, "440438"))];
                                    case 1:
                                        return t = o.sent().default, [2, function(n) {
                                            var o, i;
                                            return r.createElement(t, (o = ef({}, n), i = (i = {
                                                threadId: eP,
                                                attachments: d,
                                                sendMessage: function() {
                                                    return eU(e, void 0, void 0, void 0, !0)
                                                }
                                            }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r)
                                                }
                                                return n
                                            })(Object(i)).forEach(function(e) {
                                                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                                            }), o))
                                        }]
                                }
                            })
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise(function(n, r) {
                                var o = u.apply(e, t);

                                function i(e) {
                                    el(o, n, r, i, a, "next", e)
                                }

                                function a(e) {
                                    el(o, n, r, i, a, "throw", e)
                                }
                                i(void 0)
                            })
                        }));
                        return
                    }
                    eN({
                        value: e,
                        uploads: d,
                        stickers: f,
                        command: t,
                        commandOptionValues: o,
                        isGif: i
                    }).then(function(e) {
                        var t, n, r, o, i = e.shouldClear,
                            a = e.shouldRefocus;
                        var u = (t = i, n = eR, null !== (o = t && (null === (r = n.submit) || void 0 === r ? void 0 : r.clearOnSubmit)) && void 0 !== o && o),
                            s = null != eC.current;
                        if (u) {
                            if (eP !== F.default.getChannelId()) E.default.saveDraft(eP, "", eR.drafts.type);
                            else s && eC.current.clearValue()
                        }
                        s && (eM(!1), (0, b.closeExpressionPicker)(), a && eC.current.focus())
                    })
                }
            }, [eC, eN, eL, eR, eP]), {
                submitting: eL,
                submit: eU,
                handleSubmit: r.useCallback(function(e) {
                    var t;
                    null == eC || null === (t = eC.current) || void 0 === t || t.submit(e)
                }, [])
            }),
            nR = nN.submitting,
            nC = nN.submit,
            nP = nN.handleSubmit;
        var nD = (ew = r.useRef(null), ek = r.useCallback(function() {
                var e;
                null === (e = ew.current) || void 0 === e || e.onMaybeShowAutocomplete()
            }, []), eG = r.useCallback(function() {
                var e;
                null === (e = ew.current) || void 0 === e || e.onHideAutocomplete()
            }, []), {
                autocompleteRef: ew,
                handleMaybeShowAutocomplete: ek,
                handleHideAutocomplete: eG
            }),
            nL = nD.autocompleteRef,
            nM = nD.handleMaybeShowAutocomplete,
            nU = nD.handleHideAutocomplete;
        var nw = (eB = nC, ej = tk, eF = nr, r.useCallback(function(e) {
            var t, n;
            ej === X.ChatInputTypes.CREATE_FORUM_POST ? null === (n = eF.current) || void 0 === n || n.insertGIF(e) : eB(e.url, void 0, void 0, !0), (0, b.closeExpressionPicker)(), null === (t = eF.current) || void 0 === t || t.focus()
        }, [eF, eB, ej]));
        var nk = (eV = nr, r.useCallback(function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = eV.current;
            null != e && null != r && r.insertEmoji(e, t, n), t && (0, b.closeExpressionPicker)()
        }, [eV]));
        var nG = (ex = (eH = {
            editorRef: nr,
            disabled: nd,
            textValue: tA,
            channelId: tw.id,
            chatInputType: tk,
            submit: tz
        }).editorRef, eY = eH.disabled, eW = eH.textValue, eK = eH.channelId, ez = eH.chatInputType, eX = eH.submit, eq = (0, y.default)().analyticsLocations, r.useCallback(function(e, t) {
            var n, r;
            !eY && ((0, w.shouldAttachSticker)(t, eW, eK, ez.drafts.type) ? ((0, J.trackStickerPreviewSelect)({
                sticker: e,
                stickerSelectLocation: t,
                isReplacement: null != M.default.getStickerPreview(eK, ez.drafts.type),
                analyticsLocations: eq
            }), (0, U.addStickerPreview)(eK, e, ez.drafts.type)) : (eX({
                value: "",
                uploads: void 0,
                stickers: [e.id]
            }), null === (r = ex.current) || void 0 === r || r.clearValue()), (0, b.closeExpressionPicker)(), null === (n = ex.current) || void 0 === n || n.focus())
        }, [eY, eW, eK, ez.drafts.type, ex, eq, eX]));
        var nB = (eQ = nr, r.useCallback(function(e) {
                var t = eQ.current;
                null != e && null != t && t.insertSound(e), (0, b.closeExpressionPicker)()
            }, [eQ])),
            nj = r.useCallback(function() {
                var e;
                return null == ni ? void 0 : null === (e = ni.current) || void 0 === e ? void 0 : e.hide()
            }, []);
        var nF = (eJ = tx, e$ = (eZ = ed(r.useState(0), 2))[0], e0 = eZ[1], {
                editorHeight: e$,
                handleResize: r.useCallback(function(e) {
                    e0(null != e ? e : 0), null == eJ || eJ(e)
                }, [eJ])
            }),
            nV = nF.editorHeight,
            nH = nF.handleResize;
        var nx = (e1 = nL, e2 = nn, e3 = nI, {
                handleTab: r.useCallback(function() {
                    var e, t;
                    return !!(!e3 && (null === (e = e2.current) || void 0 === e ? void 0 : e.onTabOrEnter(!1))) || (null === (t = e1.current) || void 0 === t ? void 0 : t.onTabOrEnter(!1)) || !1
                }, [e3]),
                handleEnter: r.useCallback(function() {
                    var e, t;
                    return !!(!e3 && (null === (e = e2.current) || void 0 === e ? void 0 : e.onTabOrEnter(!0))) || (null === (t = e1.current) || void 0 === t ? void 0 : t.onTabOrEnter(!0)) || !1
                }, [e3]),
                handleMoveSelection: r.useCallback(function(e) {
                    var t, n;
                    return !!(!e3 && (null === (t = e2.current) || void 0 === t ? void 0 : t.onMoveSelection(e))) || (null === (n = e1.current) || void 0 === n ? void 0 : n.onMoveSelection(e)) || !1
                }, [e3])
            }),
            nY = nx.handleTab,
            nW = nx.handleEnter,
            nK = nx.handleMoveSelection;
        var nz = (e4 = tk, e6 = nA, e8 = nr, e9 = (e7 = ed((0, b.useExpressionPickerStore)(function(e) {
                return [e.activeView, e.activeViewType]
            }, l.default), 2))[0], e5 = e7[1], r.useEffect(function() {
                return function() {
                    (0, b.closeExpressionPicker)(e4)
                }
            }, [e4]), te = r.useCallback(function(e) {
                e6.emit("autocomplete-visibility-change", e), e && (0, b.closeExpressionPicker)()
            }, [e6]), tt = r.useCallback(function() {
                var e;
                null == e9 && (null === (e = e8.current) || void 0 === e || e.handleOuterClick())
            }, [e9]), tn = null == e9 || null == e5 || e5 !== e4, {
                expressionPickerView: e9,
                shouldHideExpressionPicker: tn,
                handleAutocompleteVisibilityChange: te,
                handleOuterClick: tt
            }),
            nX = nz.expressionPickerView,
            nq = nz.shouldHideExpressionPicker,
            nQ = nz.handleAutocompleteVisibilityChange,
            nJ = nz.handleOuterClick,
            nZ = I.AppLauncherDesktopExperiment.useExperiment({
                location: "chat_input"
            }, {
                autoTrackExposure: !1
            }).enabled,
            n$ = (0, d.useStateFromStores)([h.default], function() {
                return h.default.shouldShowPopup()
            }, []);
        (0, z.useHereMentionCallback)(nA, tw.guild_id, tw.id);
        var n0 = null != tV,
            n1 = nd && !((nc || nf) && np) || nR && (null === (t_ = tk.submit) || void 0 === t_ ? void 0 : t_.useDisabledStylesOnSubmit),
            n2 = null,
            n3 = null;
        null != nu ? n2 = null == tF ? void 0 : tF(nu, ns, eu.attachButton) : (!nd || nE) && (n2 = null == tB ? void 0 : tB(n0, eu.attachButton), nZ && (n3 = null == tj ? void 0 : tj()));
        var n4 = ny && null != tb && !nd && tk.showCharacterCount && null == nu,
            n6 = ny && !__OVERLAY__ && null != tb && null == nu;
        var n8 = (tr = tw, to = tk, ti = tb, ta = nL, tl = G.ExpressionSuggestionsEnabled.useSetting(), tf = null != (tc = (0, d.useStateFromStores)([M.default], function() {
                return M.default.getStickerPreview(tr.id, to.drafts.type)
            })) && tc.length > 0, tl && (null === (tu = to.stickers) || void 0 === tu ? void 0 : tu.autoSuggest) && !tf && (null === (ts = ta.current) || void 0 === ts ? void 0 : ts.isVisible()) !== !0 && !__OVERLAY__ && null != ti),
            n7 = (0, v.useShouldShowPTONotice)(tw),
            n9 = null != nu || null != tV || n7,
            n5 = !!(null === (tE = tk.emojis) || void 0 === tE ? void 0 : tE.button) && nV <= 44;
        return r.createElement(A.EventEmitterProvider, {
            value: nA
        }, r.createElement(y.AnalyticsLocationProvider, {
            value: ne
        }, n6 && nm ? r.createElement(er.default, {
            editorRef: nr,
            options: tk.markdown,
            channel: tw
        }) : n6 ? r.createElement(en.default, {
            ref: ni,
            editorRef: nr,
            containerRef: no,
            options: tk.markdown
        }) : null, r.createElement("div", {
            ref: nt,
            className: i()(tN, (ec(tT = {}, eu.channelTextArea, !0), ec(tT, eu.channelTextAreaDisabled, n1), ec(tT, eu.highlighted, tq), ec(tT, eu.textAreaMobileThemed, c.isMobile), tT)),
            onMouseDown: nJ
        }, r.createElement(Z.default, {
            type: tk,
            channel: tw,
            activeCommand: nu,
            pendingReply: tV
        }), r.createElement("div", {
            ref: no,
            onScroll: nj,
            className: i()(tR, (ec(tS = {}, eu.scrollableContainer, !0), ec(tS, eu.themedBackground, !(void 0 !== t7 && t7)), ec(tS, eu.webkit, "Blink" === platform.layout), ec(tS, eu.hasConnectedBar, n9), tS))
        }, r.createElement(Q.default, {
            channelId: tw.id,
            chatInputType: tk
        }), tk.hideAttachmentArea ? null : r.createElement(ee.default, {
            channelId: tw.id,
            type: tk,
            canAttachFiles: n_
        }), r.createElement("div", {
            className: i()(eu.inner, (ec(tv = {}, eu.innerDisabled, n1), ec(tv, eu.sansAttachButton, tk !== X.ChatInputTypes.EDIT && (null != n2 || n1 && null == n2 || nc)), ec(tv, eu.sansAttachButtonCreateThread, tk === X.ChatInputTypes.THREAD_CREATION), ec(tv, eu.sansAttachButtonCreatePost, tk === X.ChatInputTypes.CREATE_FORUM_POST), tv))
        }, n2, n3, r.createElement(_.FocusRing, {
            ringTarget: nt,
            ringClassName: eu.focusRing
        }, r.createElement(q.default, {
            ref: nr,
            id: tP,
            focused: tG,
            useSlate: ny,
            textValue: tA,
            richValue: tb,
            disabled: nd,
            placeholder: tM,
            required: tD,
            accessibilityLabel: tU,
            isPreviewing: (nc || nf) && np,
            channel: tw,
            type: tk,
            canPasteFiles: n_,
            uploadPromptCharacterCount: eo.MAX_MESSAGE_LENGTH_PREMIUM,
            maxCharacterCount: null != tZ ? tZ : nh,
            allowNewLines: void 0 === t0 || t0,
            "aria-describedby": t2,
            onChange: tH,
            onResize: nH,
            onBlur: tY,
            onFocus: tW,
            onKeyDown: tK,
            onSubmit: nC,
            onTab: nY,
            onEnter: nW,
            onMoveSelection: nK,
            onSelectionChanged: nb,
            onMaybeShowAutocomplete: nM,
            onHideAutocomplete: nU,
            promptToUpload: tX,
            fontSize: nS,
            spellcheckEnabled: nv,
            canOnlyUseTextCommands: n0,
            className: i()((ec(tg = {}, eu.textAreaThreadCreation, tk === X.ChatInputTypes.THREAD_CREATION), ec(tg, eu.profileBioInput, tk === X.ChatInputTypes.PROFILE_BIO_INPUT), tg), tC),
            "aria-labelledby": t3
        })), r.createElement($.default, {
            type: tk,
            disabled: nd,
            channel: tw,
            handleSubmit: nP,
            isEmpty: 0 === tA.trim().length
        }))), nI ? null : r.createElement(S.default, {
            ref: nn,
            channel: tw,
            canOnlyUseTextCommands: n0
        }), r.createElement(g.default, {
            ref: nL,
            channel: tw,
            canMentionRoles: tQ,
            canMentionChannels: tJ,
            useNewSlashCommands: ny,
            canOnlyUseTextCommands: n0,
            canSendStickers: null === (tp = tk.stickers) || void 0 === tp ? void 0 : tp.allowSending,
            textValue: tA,
            focused: tG,
            expressionPickerView: nX,
            type: tk,
            editorRef: nr,
            onSendMessage: nC,
            onSendSticker: nG,
            onVisibilityChange: nQ,
            editorHeight: nV,
            setValue: function(e, t) {
                return null == tH ? void 0 : tH(null, e, t)
            },
            position: t6
        }), r.createElement(L.default, {
            textValue: tA,
            editorHeight: nV
        }), n4 ? r.createElement(et.default, {
            type: tk,
            textValue: tA,
            className: i()(t1, ec({}, eu.indentCharacterCount, n5)),
            maxCharacterCount: tZ,
            showRemainingCharsAfterCount: t$
        }) : null, n8 ? r.createElement(R.default, {
            editorRef: nr,
            channel: tw,
            isEditorFocused: tG,
            onSelectSticker: nG,
            submitButtonVisible: (null === (tm = tk.submit) || void 0 === tm ? void 0 : tm.button) && (null !== (th = null === (ty = tk.submit) || void 0 === ty ? void 0 : ty.ignorePreference) && void 0 !== th ? th : nT),
            stickerIconVisible: null !== (tO = null === (tI = tk.stickers) || void 0 === tI ? void 0 : tI.button) && void 0 !== tO && tO
        }) : null, t8), nq ? null : r.createElement(N.default, {
            positionTargetRef: nt,
            type: tk,
            onSelectGIF: nw,
            onSelectEmoji: nk,
            onSelectSticker: nG,
            onSelectSound: nB,
            channel: tw,
            closeOnModalOuterClick: t9,
            parentModalKey: t5,
            position: "top",
            align: "right",
            positionLayerClassName: eu.expressionPickerPositionLayer
        }), n$ ? r.createElement(O.default, {
            positionTargetRef: nt,
            channel: tw,
            closeOnModalOuterClick: t9,
            parentModalKey: t5
        }) : null))
    }))
}