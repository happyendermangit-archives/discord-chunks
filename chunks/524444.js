function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EXPRESSION_TOOLTIP_PROPS: function() {
            return Q
        },
        ErrorLoadingBar: function() {
            return ea
        },
        JumpBarType: function() {
            return i
        },
        JumpToPresentBar: function() {
            return es
        },
        MessagePopoutContent: function() {
            return ec
        },
        NewMessagesBar: function() {
            return eo
        },
        NewTopicsBar: function() {
            return el
        },
        PopoutLoadingAnimation: function() {
            return eE
        },
        TopicsPill: function() {
            return ed
        },
        renderAudioComponent: function() {
            return $
        },
        renderClickableTooltipNode: function() {
            return e_
        },
        renderGenericFileComponent: function() {
            return er
        },
        renderImageComponent: function() {
            return et
        },
        renderMaskedLinkComponent: function() {
            return en
        },
        renderPlaintextFilePreview: function() {
            return ei
        },
        renderVideoComponent: function() {
            return J
        },
        renderVoiceMessageAudioComponent: function() {
            return ee
        }
    }), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("392711"),
        d = n.n(u),
        _ = n("374470"),
        c = n("442837"),
        E = n("481060"),
        I = n("904245"),
        T = n("45114"),
        f = n("431279"),
        S = n("794295"),
        h = n("593472"),
        A = n("110924"),
        m = n("688465"),
        N = n("479313"),
        p = n("765104"),
        O = n("505953"),
        R = n("695346"),
        C = n("170671"),
        g = n("201542"),
        L = n("306680"),
        D = n("594174"),
        v = n("130208"),
        M = n("992665"),
        y = n("133910"),
        P = n("145196"),
        U = n("153124"),
        b = n("278297"),
        G = n("259580"),
        w = n("386103"),
        B = n("465670"),
        k = n("839523"),
        F = n("626135"),
        V = n("823379"),
        x = n("589530"),
        H = n("709054"),
        Y = n("981631"),
        j = n("420212"),
        W = n("814249"),
        K = n("768760"),
        z = n("689938"),
        X = n("179216");
    let Q = {
            delay: 300,
            position: "top"
        },
        q = e => t => {
            null == e || e(t), (0, x.setVolume)(t)
        },
        Z = e => t => {
            null == e || e(t), (0, x.setMuted)(t)
        };

    function J(e) {
        let {
            onVolumeChange: t,
            onMute: n,
            volume: i,
            autoMute: r,
            alt: o,
            renderAdjacentContent: l,
            renderOverlayContent: u,
            ...d
        } = e, _ = q(t), c = Z(n);
        return i = null == i ? x.getVolume : i, r = null == r ? x.getMuted : r, (0, s.jsxs)(a.Fragment, {
            children: [(0, s.jsx)(y.default, {
                ...d,
                alt: o,
                volume: i,
                autoMute: r,
                onVolumeChange: _,
                onMute: c,
                renderLinkComponent: en,
                renderOverlayContent: u
            }), null != l && l()]
        })
    }

    function $(e) {
        let {
            onVolumeChange: t,
            volume: n,
            onMute: i,
            onVolumeShow: r,
            onVolumeHide: o,
            renderAdjacentContent: l,
            ...u
        } = e, d = q(t), _ = Z(i);
        return n = null == n ? x.getVolume : n, (0, s.jsxs)(a.Fragment, {
            children: [(0, s.jsx)(M.default, {
                ...u,
                onVolumeChange: d,
                onMute: _,
                onVolumeShow: r,
                onVolumeHide: o,
                volume: n,
                autoMute: () => !1,
                renderLinkComponent: en
            }), null != l && l()]
        })
    }

    function ee(e) {
        let {
            onVolumeChange: t,
            volume: n,
            onMute: i,
            ...r
        } = e, a = q(t), o = Z(i);
        return n = null == n ? x.getVolume : n, (0, s.jsx)(g.default, {
            ...r,
            onVolumeChange: a,
            onMute: o,
            volume: n
        })
    }

    function et(e) {
        let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: i,
            containerClassName: r,
            imageContainerClassName: o,
            disableAltTextDisplay: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: _
        } = e, c = d === K.MediaLayoutType.MOSAIC, I = !u && R.ViewImageDescriptions.getSetting() && null != t && "" !== t && !0 !== n, T = e => {
            let {
                altText: t
            } = e;
            return (0, s.jsxs)(E.Dialog, {
                "aria-label": z.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                className: X.mediaMosaicAltTextPopout,
                onKeyDown: e => {
                    e.key === j.KeyboardEventKey.Escape && setTimeout(() => {
                        var e;
                        return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
                    }, 0)
                },
                children: [(0, s.jsx)("span", {
                    className: X.mediaMosaicAltTextPopoutTitle,
                    children: z.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
                }), (0, s.jsx)("span", {
                    className: X.mediaMosaicAltTextPopoutDescription,
                    children: t
                })]
            })
        }, S = a.createRef();
        return (0, s.jsxs)("div", {
            className: l()(X.imageContent, r),
            children: [(0, s.jsxs)("div", {
                className: l()(X.imageContainer, o),
                style: _,
                children: [(0, s.jsx)(f.default, {
                    ...e,
                    renderLinkComponent: en
                }), null != i && i()]
            }), c && I && (0, s.jsx)("div", {
                className: X.mediaMosaicAltTextContainer,
                children: (0, s.jsx)(E.Popout, {
                    animation: E.Popout.Animation.FADE,
                    renderPopout: () => (0, s.jsx)(T, {
                        altText: t
                    }),
                    children: e => (0, s.jsx)(E.FocusRing, {
                        offset: 4,
                        children: (0, s.jsx)("button", {
                            ...e,
                            type: "button",
                            ref: S,
                            "aria-label": z.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                            className: X.mediaMosaicAltText,
                            children: z.default.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
                        })
                    })
                })
            }), !c && I && (0, s.jsx)("span", {
                className: X.altText,
                children: t
            })]
        })
    }

    function en(e) {
        return (0, s.jsx)(S.default, {
            ...e
        })
    }

    function ei(e) {
        let {
            renderAdjacentContent: t,
            ...n
        } = e;
        return (0, s.jsxs)(a.Fragment, {
            children: [(0, s.jsx)(P.default, {
                ...n
            }), null != t && t()]
        })
    }

    function er(e) {
        return (0, s.jsx)(v.default, {
            ...e
        })
    }(r = i || (i = {}))[r.OLD_MESSAGES = 0] = "OLD_MESSAGES", r[r.REPLY = 1] = "REPLY";
    let es = e => {
            let {
                type: t = 0,
                onClick: n
            } = e;
            return (0, s.jsx)(b.MessagesInteractionContext.Consumer, {
                children: e => e.disableInteractions ? null : (0, s.jsxs)("div", {
                    className: X.jumpToPresentBar,
                    children: [(0, s.jsx)(E.FocusRing, {
                        offset: 4,
                        children: (0, s.jsx)("button", {
                            type: "button",
                            onClick: n,
                            className: X.barButtonMain,
                            children: function(e) {
                                switch (e) {
                                    case 0:
                                        return z.default.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                                    case 1:
                                        return z.default.Messages.JUMP_BAR_VIEWING_REPLY;
                                    default:
                                        return (0, V.assertNever)(e)
                                }
                            }(t)
                        })
                    }), null != n ? (0, s.jsx)(E.FocusRing, {
                        offset: 4,
                        children: (0, s.jsxs)("button", {
                            type: "button",
                            onClick: n,
                            className: X.barButtonAlt,
                            children: [function(e) {
                                switch (e) {
                                    case 0:
                                        return z.default.Messages.JUMP_TO_PRESENT;
                                    case 1:
                                        return z.default.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                                    default:
                                        return (0, V.assertNever)(e)
                                }
                            }(t), (0, s.jsx)(G.default, {
                                className: X.barButtonIcon
                            })]
                        })
                    }) : (0, s.jsx)(E.Spinner, {
                        type: E.Spinner.Type.PULSING_ELLIPSIS,
                        className: X.spinner,
                        itemClassName: X.spinnerItem
                    })]
                })
            })
        },
        ea = e => {
            let {
                onClick: t,
                loading: n
            } = e;
            return (0, s.jsx)(b.MessagesInteractionContext.Consumer, {
                children: e => e.disableInteractions ? null : (0, s.jsxs)(E.Clickable, {
                    className: X.messagesErrorBar,
                    onClick: t,
                    focusProps: {
                        offset: {
                            top: 4,
                            right: 4,
                            bottom: 12,
                            left: 4
                        }
                    },
                    children: [(0, s.jsx)("div", {
                        className: X.barButtonMain,
                        children: z.default.Messages.MESSAGES_FAILED_TO_LOAD
                    }), n ? (0, s.jsx)(E.Spinner, {
                        type: E.Spinner.Type.PULSING_ELLIPSIS,
                        className: X.spinner,
                        itemClassName: X.spinnerItem
                    }) : (0, s.jsx)("div", {
                        className: X.barButtonAlt,
                        children: z.default.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
                    })]
                })
            })
        };

    function eo(e) {
        let {
            content: t,
            channelId: n
        } = e, [i] = a.useState(() => (0, U.uid)("NewMessagesBarJumpToNewMessages_")), r = a.useCallback(() => {
            let e = L.default.ackMessageId(n);
            null != e ? I.default.jumpToMessage({
                channelId: n,
                messageId: e,
                offset: 1,
                context: "Mark As Read"
            }) : I.default.jumpToMessage({
                channelId: n,
                messageId: H.default.castChannelIdAsMessageId(n),
                offset: 1,
                context: "Mark As Read"
            })
        }, [n]), o = a.useCallback(() => {
            (0, T.ack)(n)
        }, [n]), {
            disableInteractions: u
        } = a.useContext(b.MessagesInteractionContext);
        return u ? null : (0, s.jsxs)("div", {
            className: l()(X.newMessagesBar, {
                [X.disableInteractions]: u
            }),
            children: [(0, s.jsx)(E.FocusRing, {
                offset: 4,
                children: (0, s.jsx)("button", {
                    type: "button",
                    className: X.barButtonMain,
                    onClick: r,
                    "aria-label": z.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
                    "aria-describedby": i,
                    children: (0, s.jsx)("span", {
                        id: i,
                        className: X.span,
                        children: t
                    })
                })
            }), (0, s.jsx)(E.FocusRing, {
                offset: 4,
                children: (0, s.jsxs)("button", {
                    type: "button",
                    onClick: o,
                    className: X.barButtonAlt,
                    children: [z.default.Messages.MARK_AS_READ, (0, s.jsx)(w.default, {
                        className: X.barButtonIcon
                    })]
                })
            })]
        })
    }

    function el(e) {
        var t, n, i;
        let {
            channel: r,
            content: o,
            scrollManager: u
        } = e, {
            disableInteractions: f
        } = a.useContext(b.MessagesInteractionContext), [S, R] = a.useState(null), C = a.useRef(null), [g, v] = a.useState(null), M = a.useRef(null), y = (0, c.useStateFromStoresArray)([p.default], () => {
            var e;
            return null !== (e = p.default.summaries(r.id)) && void 0 !== e ? e : []
        }, [r]), P = (0, A.default)(y);
        a.useEffect(() => {
            !d().isEqual(P, y) && F.default.track(Y.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: y.length,
                message_counts: y.map(e => e.count),
                start_message_ids: y.map(e => e.startId),
                end_message_ids: y.map(e => e.endId),
                num_participants: y.map(e => e.people.length),
                guild_id: r.guild_id,
                channel_id: r.id,
                channel_type: r.type
            })
        }, [y, P, r.guild_id, r.id, r.type]);
        let U = (0, c.useStateFromStores)([D.default], () => {
                var e;
                return null !== (e = null == y ? void 0 : y.map(e => {
                    var t;
                    return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
                        var t;
                        return null !== (t = D.default.getUser(e)) && void 0 !== t ? t : null
                    }).filter(V.isNotNullish)
                })) && void 0 !== e ? e : []
            }, [y], eu),
            x = null !== (n = (0, c.useStateFromStores)([p.default], () => p.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
            j = null == y ? void 0 : null === (t = y[x]) || void 0 === t ? void 0 : t.topic;
        null == j && null == S && (null == y ? void 0 : y.length) >= 1 && (j = null === (i = y[0]) || void 0 === i ? void 0 : i.topic);
        let K = a.useMemo(() => d().debounce(e => {
                var t;
                R(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
            }, 64), [R]),
            Q = a.useMemo(() => d().throttle(() => {
                (0, N.setHighlightedSummary)(null)
            }, 1200, {
                trailing: !1
            }), []),
            q = a.useCallback(e => {
                Q(), K(e)
            }, [K, Q]),
            [Z, J] = a.useState(!1),
            $ = a.useCallback(() => {
                F.default.track(Y.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                    topics_dropdown_open: !Z,
                    num_summaries: y.length,
                    message_counts: y.map(e => e.count),
                    start_message_ids: y.map(e => e.startId),
                    end_message_ids: y.map(e => e.endId),
                    num_participants: y.map(e => e.people.length),
                    guild_id: r.guild_id,
                    channel_id: r.id,
                    channel_type: r.type
                }), J(!Z)
            }, [Z, y, J, r]),
            ee = a.useCallback(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W.SummariesTopicClickedSource.PILL_DROPDOWN,
                    n = y[e];
                if (null == n) return;
                (0, N.setSelectedSummary)(r.id, n.id), (0, N.setHighlightedSummary)(r.id, n.id);
                let i = () => {
                    u.removeScrollCompleteCallback(i), setTimeout(() => {
                        u.addAutomaticAnchorCallback(q, !1)
                    }, 100)
                };
                u.removeAutomaticAnchorCallback(q), u.addScrollCompleteCallback(i), F.default.track(Y.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                    source: t,
                    message_id: n.startId,
                    guild_id: r.guild_id,
                    channel_id: r.id,
                    channel_type: r.type
                }), I.default.jumpToMessage({
                    channelId: r.id,
                    messageId: n.startId,
                    flash: !0,
                    offset: 0,
                    jumpType: h.JumpTypes.ANIMATED,
                    context: "Summary Jump"
                })
            }, [y, r, q, u]),
            et = a.useCallback(e => {
                var t;
                J(e);
                let n = null === (t = M.current) || void 0 === t ? void 0 : t.scrollTop;
                null != n && v(n)
            }, []);
        a.useEffect(() => {
            if (null != g && Z) {
                var e;
                null === (e = M.current) || void 0 === e || e.scrollTo({
                    top: g
                })
            }
        }, [g, Z]);
        let en = a.useCallback(e => {
            var t;
            !((0, _.isElement)(e.target) && (null === (t = C.current) || void 0 === t ? void 0 : t.contains(e.target))) && (Z && F.default.track(Y.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !1,
                num_summaries: y.length,
                message_counts: y.map(e => e.count),
                start_message_ids: y.map(e => e.startId),
                end_message_ids: y.map(e => e.endId),
                num_participants: y.map(e => e.people.length),
                guild_id: r.guild_id,
                channel_id: r.id,
                channel_type: r.type
            }), et(!1))
        }, [Z, y, r, et]);
        a.useEffect(() => (u.addAutomaticAnchorCallback(q), () => {
            u.removeAutomaticAnchorCallback(q)
        }), [u, q]), a.useEffect(() => {
            (0, N.fetchSummaries)(r.id)
        }, [r.id]), a.useEffect(() => (document.addEventListener("mousedown", en), () => {
            document.removeEventListener("mousedown", en)
        }), [en]);
        let ei = a.useMemo(() => (0, s.jsx)(O.default, {
                channel: r,
                summaries: y,
                summariesMembers: U,
                selectTopic: ee,
                setOpen: et
            }), [y, U, ee, et, r]),
            er = a.useCallback(() => {
                let e = L.default.ackMessageId(r.id);
                null != e ? I.default.jumpToMessage({
                    channelId: r.id,
                    messageId: e,
                    offset: 1,
                    context: "Mark As Read"
                }) : I.default.jumpToMessage({
                    channelId: r.id,
                    messageId: H.default.castChannelIdAsMessageId(r.id),
                    offset: 1,
                    context: "Mark As Read"
                })
            }, [r.id]),
            es = a.useCallback(() => {
                (0, T.ack)(r.id)
            }, [r.id]),
            ea = z.default.Messages.SUMMARIES_NO_SUMMARIES;
        return y.length > 0 && (ea = "" === j || null == j ? z.default.Messages.SUMMARIES_VIEW_ALL : j), f ? null : (0, s.jsxs)("div", {
            ref: C,
            className: l()(X.newTopicsBarContainer, X.containerMarginTop),
            children: [(0, s.jsx)("div", {
                className: l()(X.newTopicsBarTopicSection),
                children: (0, s.jsx)(E.Clickable, {
                    className: X.newTopicsBarTextClickable,
                    "aria-label": z.default.Messages.SUMMARY_PILL,
                    onClick: $,
                    children: (0, s.jsxs)("div", {
                        className: l()({
                            [X.newTopicsBarTextUnselected]: !Z,
                            [X.newTopicsBarTextSelected]: Z
                        }),
                        children: [(0, s.jsx)(k.default, {
                            className: X.newTopicsBarIcon,
                            width: 16,
                            height: 16
                        }), (0, s.jsx)(E.Text, {
                            variant: "text-sm/medium",
                            className: l()(X.newTopicsBarCompact, X.newTopicsBarText),
                            children: ea
                        }), (0, s.jsx)(G.default, {
                            width: 16,
                            height: 16,
                            direction: G.default.Directions.DOWN,
                            className: X.newTopicsBarCaret
                        })]
                    })
                })
            }), (0, s.jsx)(E.Clickable, {
                onClick: er,
                className: l()(X.barButtonMain, X.newTopicsBarInitial),
                children: o
            }), (0, s.jsxs)(E.Clickable, {
                onClick: es,
                className: l()(X.barButtonAlt, X.flexEnd),
                children: [(0, s.jsx)("div", {
                    className: X.newTopicsBarCompact,
                    children: z.default.Messages.MARK_AS_READ
                }), (0, s.jsx)(w.default, {
                    className: X.barButtonIcon
                })]
            }), Z && (0, s.jsxs)("div", {
                className: X.topicsDropdown,
                children: [(0, s.jsxs)("div", {
                    className: X.topicsDropdownHeading,
                    children: [(0, s.jsxs)("div", {
                        className: X.topicsDropdownHeadingText,
                        children: [(0, s.jsx)(k.default, {
                            className: X.topicsPillHeadingIcon,
                            width: 18,
                            height: 20
                        }), (0, s.jsx)(E.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: z.default.Messages.SUMMARIES
                        }), (0, s.jsx)(m.default, {
                            className: X.summariesBetaTag
                        })]
                    }), (0, s.jsx)(E.Clickable, {
                        "aria-label": z.default.Messages.CLOSE,
                        onClick: $,
                        className: X.topicsDropdownClose,
                        children: (0, s.jsx)(B.default, {})
                    })]
                }), (0, s.jsx)(E.Scroller, {
                    ref: M,
                    className: X.topicsScroller,
                    fade: !0,
                    children: ei
                })]
            })]
        })
    }

    function eu(e, t) {
        return null != t && e.length === t.length && !e.some((e, n) => {
            var i, r;
            return i = e, null == (r = t[n]) || i.length !== r.length || !!i.some((e, t) => r[t] !== e)
        })
    }

    function ed(e) {
        var t, n, i;
        let {
            channel: r,
            scrollManager: o
        } = e, {
            disableInteractions: u
        } = a.useContext(b.MessagesInteractionContext), [T, f] = a.useState(null), S = a.useRef(null), [R, C] = a.useState(null), g = a.useRef(null), L = (0, c.useStateFromStoresArray)([p.default], () => {
            var e;
            return null !== (e = p.default.summaries(r.id)) && void 0 !== e ? e : []
        }, [r]), v = (0, A.default)(L);
        a.useEffect(() => {
            !d().isEqual(v, L) && F.default.track(Y.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: L.length,
                message_counts: L.map(e => e.count),
                start_message_ids: L.map(e => e.startId),
                end_message_ids: L.map(e => e.endId),
                num_participants: L.map(e => e.people.length),
                guild_id: r.guild_id,
                channel_id: r.id,
                channel_type: r.type
            })
        }, [L, v, r.guild_id, r.id, r.type]);
        let M = (0, c.useStateFromStores)([D.default], () => {
                var e;
                return null !== (e = null == L ? void 0 : L.map(e => {
                    var t;
                    return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
                        var t;
                        return null !== (t = D.default.getUser(e)) && void 0 !== t ? t : null
                    }).filter(V.isNotNullish)
                })) && void 0 !== e ? e : []
            }, [L], eu),
            y = null !== (n = (0, c.useStateFromStores)([p.default], () => p.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
            P = null == L ? void 0 : null === (t = L[y]) || void 0 === t ? void 0 : t.topic;
        null == P && null == T && (null == L ? void 0 : L.length) >= 1 && (P = null === (i = L[0]) || void 0 === i ? void 0 : i.topic);
        let U = a.useMemo(() => d().get(L, y - 1), [y, L]),
            w = a.useMemo(() => d().get(L, y + 1), [y, L]),
            x = a.useMemo(() => d().debounce(e => {
                var t;
                f(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
            }, 64), [f]),
            H = a.useMemo(() => d().throttle(() => {
                (0, N.setHighlightedSummary)(null)
            }, 1200, {
                trailing: !1
            }), []),
            j = a.useCallback(e => {
                H(), x(e)
            }, [x, H]),
            [K, Q] = a.useState(!1),
            q = a.useCallback(() => {
                F.default.track(Y.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                    topics_dropdown_open: !K,
                    num_summaries: L.length,
                    message_counts: L.map(e => e.count),
                    start_message_ids: L.map(e => e.startId),
                    end_message_ids: L.map(e => e.endId),
                    num_participants: L.map(e => e.people.length),
                    guild_id: r.guild_id,
                    channel_id: r.id,
                    channel_type: r.type
                }), Q(!K)
            }, [K, L, Q, r]),
            Z = a.useCallback(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W.SummariesTopicClickedSource.PILL_DROPDOWN,
                    n = L[e];
                if (null == n) return;
                (0, N.setSelectedSummary)(r.id, n.id), (0, N.setHighlightedSummary)(r.id, n.id);
                let i = () => {
                    o.removeScrollCompleteCallback(i), setTimeout(() => {
                        o.addAutomaticAnchorCallback(j, !1)
                    }, 100)
                };
                o.removeAutomaticAnchorCallback(j), o.addScrollCompleteCallback(i), F.default.track(Y.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                    source: t,
                    message_id: n.startId,
                    guild_id: r.guild_id,
                    channel_id: r.id,
                    channel_type: r.type
                }), I.default.jumpToMessage({
                    channelId: r.id,
                    messageId: n.startId,
                    flash: !0,
                    offset: 0,
                    jumpType: h.JumpTypes.ANIMATED,
                    context: "Summary Jump"
                })
            }, [L, r, j, o]),
            J = a.useCallback(() => {
                Z(y - 1, W.SummariesTopicClickedSource.PILL_NEXT_ARROW)
            }, [Z, y]),
            $ = a.useCallback(() => {
                Z(y + 1, W.SummariesTopicClickedSource.PILL_PREVIOUS_ARROW)
            }, [y, Z]),
            ee = a.useCallback(e => {
                var t;
                Q(e);
                let n = null === (t = g.current) || void 0 === t ? void 0 : t.scrollTop;
                null != n && C(n)
            }, []);
        a.useEffect(() => {
            if (null != R && K) {
                var e;
                null === (e = g.current) || void 0 === e || e.scrollTo({
                    top: R
                })
            }
        }, [R, K]);
        let et = a.useCallback(e => {
            var t;
            !((0, _.isElement)(e.target) && (null === (t = S.current) || void 0 === t ? void 0 : t.contains(e.target))) && (K && F.default.track(Y.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !1,
                num_summaries: L.length,
                message_counts: L.map(e => e.count),
                start_message_ids: L.map(e => e.startId),
                end_message_ids: L.map(e => e.endId),
                num_participants: L.map(e => e.people.length),
                guild_id: r.guild_id,
                channel_id: r.id,
                channel_type: r.type
            }), ee(!1))
        }, [K, L, r, ee]);
        a.useEffect(() => (o.addAutomaticAnchorCallback(j), () => {
            o.removeAutomaticAnchorCallback(j)
        }), [o, j]), a.useEffect(() => {
            (0, N.fetchSummaries)(r.id)
        }, [r.id]), a.useEffect(() => (document.addEventListener("mousedown", et), () => {
            document.removeEventListener("mousedown", et)
        }), [et]);
        let en = a.useMemo(() => (0, s.jsx)(O.default, {
            channel: r,
            summaries: L,
            summariesMembers: M,
            selectTopic: Z,
            setOpen: ee
        }), [L, M, Z, ee, r]);
        if (!(0, c.useStateFromStores)([p.default], () => p.default.shouldShowTopicsBar())) return null;
        let ei = z.default.Messages.SUMMARIES_NO_SUMMARIES;
        return L.length > 0 && (ei = "" === P || null == P ? z.default.Messages.SUMMARIES_VIEW_ALL : P), u ? null : (0, s.jsxs)("div", {
            ref: S,
            className: l()(X.topicsPillContainer, X.containerMarginTop),
            children: [(0, s.jsxs)("div", {
                className: X.topicsPill,
                children: [(0, s.jsx)(E.Clickable, {
                    className: X.topicsPillText,
                    "aria-label": z.default.Messages.SUMMARY_PILL,
                    onClick: q,
                    children: (0, s.jsxs)("div", {
                        className: l()({
                            [X.topicsPillTextUnselected]: !K,
                            [X.topicsPillTextSelected]: K
                        }),
                        children: [(0, s.jsx)(k.default, {
                            className: X.topicsPillSummaryIcon,
                            width: 16,
                            height: 16
                        }), (0, s.jsx)(E.Text, {
                            className: X.topicsPillTextTitle,
                            variant: "text-sm/medium",
                            children: ei
                        }), (0, s.jsx)(G.default, {
                            width: 16,
                            height: 16,
                            direction: G.default.Directions.DOWN,
                            className: X.topicsPillDropdownCaret
                        })]
                    })
                }), (0, s.jsxs)("div", {
                    className: X.topicsPillCarets,
                    children: [(0, s.jsx)(E.Clickable, {
                        "aria-label": z.default.Messages.SUMMARY_PILL_NEXT,
                        onClick: $,
                        className: l()(X.topicsPillCaret, X.topicsCaretLeft, {
                            [X.topicsPillCaretDisabled]: null == w
                        }),
                        children: (0, s.jsx)(G.default, {
                            width: 16,
                            height: 16,
                            direction: G.default.Directions.UP
                        })
                    }), (0, s.jsx)(E.Clickable, {
                        "aria-label": z.default.Messages.SUMMARY_PILL_PREVIOUS,
                        onClick: J,
                        className: l()(X.topicsPillCaret, X.topicsCaretRight, {
                            [X.topicsPillCaretDisabled]: null == U
                        }),
                        children: (0, s.jsx)(G.default, {
                            width: 16,
                            height: 16,
                            direction: G.default.Directions.DOWN
                        })
                    })]
                })]
            }), K && (0, s.jsxs)("div", {
                className: X.topicsDropdown,
                children: [(0, s.jsxs)("div", {
                    className: X.topicsDropdownHeading,
                    children: [(0, s.jsxs)("div", {
                        className: X.topicsDropdownHeadingText,
                        children: [(0, s.jsx)(k.default, {
                            className: X.topicsPillHeadingIcon,
                            width: 18,
                            height: 20
                        }), (0, s.jsx)(E.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: z.default.Messages.SUMMARIES
                        }), (0, s.jsx)(m.default, {
                            className: X.summariesBetaTag
                        })]
                    }), (0, s.jsx)(E.Clickable, {
                        "aria-label": z.default.Messages.CLOSE,
                        onClick: q,
                        className: X.topicsDropdownClose,
                        children: (0, s.jsx)(B.default, {})
                    })]
                }), (0, s.jsx)(E.Scroller, {
                    ref: g,
                    className: X.topicsScroller,
                    fade: !0,
                    children: en
                })]
            })]
        })
    }
    let e_ = function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (0, s.jsxs)("div", {
                className: X.tooltip,
                children: [(0, s.jsx)(E.Text, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: X.tooltipEmojiName,
                    children: e
                }), n && (0, s.jsxs)("div", {
                    className: X.tooltipPremiumContent,
                    children: [(0, s.jsx)(C.default, {
                        isSelected: !1
                    }), (0, s.jsx)(E.Text, {
                        className: X.clickCTA,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: z.default.Messages.EMBEDDED_ACTIVITIES_PREMIUM_TIER_CUSTOM_EMOJI
                    })]
                }), t && (0, s.jsx)(E.Text, {
                    className: X.clickCTA,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: z.default.Messages.EMOJI_TOOLTIP_CLICK_CTA
                })]
            })
        },
        ec = e => {
            let {
                children: t,
                className: n
            } = e;
            return (0, s.jsx)("div", {
                className: l()(X.popoutContainer, n),
                children: t
            })
        },
        eE = e => {
            let {
                className: t
            } = e;
            return (0, s.jsx)(ec, {
                className: t,
                children: (0, s.jsx)("div", {
                    className: X.popoutLoadingBackground,
                    children: (0, s.jsx)("div", {
                        className: X.popoutLoadingForeground
                    })
                })
            })
        }
}