function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EXPRESSION_TOOLTIP_PROPS: function() {
            return X
        },
        ErrorLoadingBar: function() {
            return er
        },
        JumpBarType: function() {
            return i
        },
        JumpToPresentBar: function() {
            return ei
        },
        MessagePopoutContent: function() {
            return ed
        },
        NewMessagesBar: function() {
            return es
        },
        NewTopicsBar: function() {
            return ea
        },
        PopoutLoadingAnimation: function() {
            return e_
        },
        TopicsPill: function() {
            return el
        },
        renderAudioComponent: function() {
            return J
        },
        renderClickableTooltipNode: function() {
            return eu
        },
        renderImageComponent: function() {
            return ee
        },
        renderMaskedLinkComponent: function() {
            return et
        },
        renderPlaintextFilePreview: function() {
            return en
        },
        renderVideoComponent: function() {
            return Z
        },
        renderVoiceMessageAudioComponent: function() {
            return $
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
        A = n("593472"),
        h = n("110924"),
        m = n("688465"),
        N = n("479313"),
        O = n("765104"),
        p = n("505953"),
        R = n("695346"),
        C = n("170671"),
        g = n("201542"),
        L = n("306680"),
        D = n("594174"),
        v = n("992665"),
        M = n("133910"),
        y = n("145196"),
        P = n("153124"),
        U = n("278297"),
        b = n("259580"),
        G = n("386103"),
        w = n("465670"),
        B = n("839523"),
        k = n("626135"),
        V = n("823379"),
        F = n("589530"),
        x = n("709054"),
        H = n("981631"),
        Y = n("420212"),
        j = n("814249"),
        W = n("768760"),
        K = n("689938"),
        z = n("179216");
    let X = {
            delay: 300,
            position: "top"
        },
        Q = e => t => {
            null == e || e(t), (0, F.setVolume)(t)
        },
        q = e => t => {
            null == e || e(t), (0, F.setMuted)(t)
        };

    function Z(e) {
        let {
            onVolumeChange: t,
            onMute: n,
            volume: i,
            autoMute: r,
            alt: o,
            renderAdjacentContent: l,
            renderOverlayContent: u,
            ...d
        } = e, _ = Q(t), c = q(n);
        return i = null == i ? F.getVolume : i, r = null == r ? F.getMuted : r, (0, s.jsxs)(a.Fragment, {
            children: [(0, s.jsx)(M.default, {
                ...d,
                alt: o,
                volume: i,
                autoMute: r,
                onVolumeChange: _,
                onMute: c,
                renderLinkComponent: et,
                renderOverlayContent: u
            }), null != l && l()]
        })
    }

    function J(e) {
        let {
            onVolumeChange: t,
            volume: n,
            onMute: i,
            onVolumeShow: r,
            onVolumeHide: o,
            renderAdjacentContent: l,
            ...u
        } = e, d = Q(t), _ = q(i);
        return n = null == n ? F.getVolume : n, (0, s.jsxs)(a.Fragment, {
            children: [(0, s.jsx)(v.default, {
                ...u,
                onVolumeChange: d,
                onMute: _,
                onVolumeShow: r,
                onVolumeHide: o,
                volume: n,
                autoMute: () => !1,
                renderLinkComponent: et
            }), null != l && l()]
        })
    }

    function $(e) {
        let {
            onVolumeChange: t,
            volume: n,
            onMute: i,
            ...r
        } = e, a = Q(t), o = q(i);
        return n = null == n ? F.getVolume : n, (0, s.jsx)(g.default, {
            ...r,
            onVolumeChange: a,
            onMute: o,
            volume: n
        })
    }

    function ee(e) {
        let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: i,
            containerClassName: r,
            imageContainerClassName: o,
            disableAltTextDisplay: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: _
        } = e, c = d === W.MediaLayoutType.MOSAIC, I = !u && R.ViewImageDescriptions.getSetting() && null != t && "" !== t && !0 !== n, T = e => {
            let {
                altText: t
            } = e;
            return (0, s.jsxs)(E.Dialog, {
                "aria-label": K.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                className: z.mediaMosaicAltTextPopout,
                onKeyDown: e => {
                    e.key === Y.KeyboardEventKey.Escape && setTimeout(() => {
                        var e;
                        return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
                    }, 0)
                },
                children: [(0, s.jsx)("span", {
                    className: z.mediaMosaicAltTextPopoutTitle,
                    children: K.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
                }), (0, s.jsx)("span", {
                    className: z.mediaMosaicAltTextPopoutDescription,
                    children: t
                })]
            })
        }, S = a.createRef();
        return (0, s.jsxs)("div", {
            className: l()(z.imageContent, r),
            children: [(0, s.jsxs)("div", {
                className: l()(z.imageContainer, o),
                style: _,
                children: [(0, s.jsx)(f.default, {
                    ...e,
                    renderLinkComponent: et
                }), null != i && i()]
            }), c && I && (0, s.jsx)("div", {
                className: z.mediaMosaicAltTextContainer,
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
                            "aria-label": K.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                            className: z.mediaMosaicAltText,
                            children: K.default.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
                        })
                    })
                })
            }), !c && I && (0, s.jsx)("span", {
                className: z.altText,
                children: t
            })]
        })
    }

    function et(e) {
        return (0, s.jsx)(S.default, {
            ...e
        })
    }

    function en(e) {
        let {
            renderAdjacentContent: t,
            ...n
        } = e;
        return (0, s.jsxs)(a.Fragment, {
            children: [(0, s.jsx)(y.default, {
                ...n
            }), null != t && t()]
        })
    }(r = i || (i = {}))[r.OLD_MESSAGES = 0] = "OLD_MESSAGES", r[r.REPLY = 1] = "REPLY";
    let ei = e => {
            let {
                type: t = 0,
                onClick: n
            } = e;
            return (0, s.jsx)(U.MessagesInteractionContext.Consumer, {
                children: e => e.disableInteractions ? null : (0, s.jsxs)("div", {
                    className: z.jumpToPresentBar,
                    children: [(0, s.jsx)(E.FocusRing, {
                        offset: 4,
                        children: (0, s.jsx)("button", {
                            type: "button",
                            onClick: n,
                            className: z.barButtonMain,
                            children: function(e) {
                                switch (e) {
                                    case 0:
                                        return K.default.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                                    case 1:
                                        return K.default.Messages.JUMP_BAR_VIEWING_REPLY;
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
                            className: z.barButtonAlt,
                            children: [function(e) {
                                switch (e) {
                                    case 0:
                                        return K.default.Messages.JUMP_TO_PRESENT;
                                    case 1:
                                        return K.default.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                                    default:
                                        return (0, V.assertNever)(e)
                                }
                            }(t), (0, s.jsx)(b.default, {
                                className: z.barButtonIcon
                            })]
                        })
                    }) : (0, s.jsx)(E.Spinner, {
                        type: E.Spinner.Type.PULSING_ELLIPSIS,
                        className: z.spinner,
                        itemClassName: z.spinnerItem
                    })]
                })
            })
        },
        er = e => {
            let {
                onClick: t,
                loading: n
            } = e;
            return (0, s.jsx)(U.MessagesInteractionContext.Consumer, {
                children: e => e.disableInteractions ? null : (0, s.jsxs)(E.Clickable, {
                    className: z.messagesErrorBar,
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
                        className: z.barButtonMain,
                        children: K.default.Messages.MESSAGES_FAILED_TO_LOAD
                    }), n ? (0, s.jsx)(E.Spinner, {
                        type: E.Spinner.Type.PULSING_ELLIPSIS,
                        className: z.spinner,
                        itemClassName: z.spinnerItem
                    }) : (0, s.jsx)("div", {
                        className: z.barButtonAlt,
                        children: K.default.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
                    })]
                })
            })
        };

    function es(e) {
        let {
            content: t,
            channelId: n
        } = e, [i] = a.useState(() => (0, P.uid)("NewMessagesBarJumpToNewMessages_")), r = a.useCallback(() => {
            let e = L.default.ackMessageId(n);
            null != e ? I.default.jumpToMessage({
                channelId: n,
                messageId: e,
                offset: 1,
                context: "Mark As Read"
            }) : I.default.jumpToMessage({
                channelId: n,
                messageId: x.default.castChannelIdAsMessageId(n),
                offset: 1,
                context: "Mark As Read"
            })
        }, [n]), o = a.useCallback(() => {
            (0, T.ack)(n)
        }, [n]), {
            disableInteractions: u
        } = a.useContext(U.MessagesInteractionContext);
        return u ? null : (0, s.jsxs)("div", {
            className: l()(z.newMessagesBar, {
                [z.disableInteractions]: u
            }),
            children: [(0, s.jsx)(E.FocusRing, {
                offset: 4,
                children: (0, s.jsx)("button", {
                    type: "button",
                    className: z.barButtonMain,
                    onClick: r,
                    "aria-label": K.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
                    "aria-describedby": i,
                    children: (0, s.jsx)("span", {
                        id: i,
                        className: z.span,
                        children: t
                    })
                })
            }), (0, s.jsx)(E.FocusRing, {
                offset: 4,
                children: (0, s.jsxs)("button", {
                    type: "button",
                    onClick: o,
                    className: z.barButtonAlt,
                    children: [K.default.Messages.MARK_AS_READ, (0, s.jsx)(G.default, {
                        className: z.barButtonIcon
                    })]
                })
            })]
        })
    }

    function ea(e) {
        var t, n, i;
        let {
            channel: r,
            content: o,
            scrollManager: u
        } = e, {
            disableInteractions: f
        } = a.useContext(U.MessagesInteractionContext), [S, R] = a.useState(null), C = a.useRef(null), [g, v] = a.useState(null), M = a.useRef(null), y = (0, c.useStateFromStoresArray)([O.default], () => {
            var e;
            return null !== (e = O.default.summaries(r.id)) && void 0 !== e ? e : []
        }, [r]), P = (0, h.default)(y);
        a.useEffect(() => {
            !d().isEqual(P, y) && k.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
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
        let F = (0, c.useStateFromStores)([D.default], () => {
                var e;
                return null !== (e = null == y ? void 0 : y.map(e => {
                    var t;
                    return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
                        var t;
                        return null !== (t = D.default.getUser(e)) && void 0 !== t ? t : null
                    }).filter(V.isNotNullish)
                })) && void 0 !== e ? e : []
            }, [y], eo),
            Y = null !== (n = (0, c.useStateFromStores)([O.default], () => O.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
            W = null == y ? void 0 : null === (t = y[Y]) || void 0 === t ? void 0 : t.topic;
        null == W && null == S && (null == y ? void 0 : y.length) >= 1 && (W = null === (i = y[0]) || void 0 === i ? void 0 : i.topic);
        let X = a.useMemo(() => d().debounce(e => {
                var t;
                R(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
            }, 64), [R]),
            Q = a.useMemo(() => d().throttle(() => {
                (0, N.setHighlightedSummary)(null)
            }, 1200, {
                trailing: !1
            }), []),
            q = a.useCallback(e => {
                Q(), X(e)
            }, [X, Q]),
            [Z, J] = a.useState(!1),
            $ = a.useCallback(() => {
                k.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j.SummariesTopicClickedSource.PILL_DROPDOWN,
                    n = y[e];
                if (null == n) return;
                (0, N.setSelectedSummary)(r.id, n.id), (0, N.setHighlightedSummary)(r.id, n.id);
                let i = () => {
                    u.removeScrollCompleteCallback(i), setTimeout(() => {
                        u.addAutomaticAnchorCallback(q, !1)
                    }, 100)
                };
                u.removeAutomaticAnchorCallback(q), u.addScrollCompleteCallback(i), k.default.track(H.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
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
                    jumpType: A.JumpTypes.ANIMATED,
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
            !((0, _.isElement)(e.target) && (null === (t = C.current) || void 0 === t ? void 0 : t.contains(e.target))) && (Z && k.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
        let ei = a.useMemo(() => (0, s.jsx)(p.default, {
                channel: r,
                summaries: y,
                summariesMembers: F,
                selectTopic: ee,
                setOpen: et
            }), [y, F, ee, et, r]),
            er = a.useCallback(() => {
                let e = L.default.ackMessageId(r.id);
                null != e ? I.default.jumpToMessage({
                    channelId: r.id,
                    messageId: e,
                    offset: 1,
                    context: "Mark As Read"
                }) : I.default.jumpToMessage({
                    channelId: r.id,
                    messageId: x.default.castChannelIdAsMessageId(r.id),
                    offset: 1,
                    context: "Mark As Read"
                })
            }, [r.id]),
            es = a.useCallback(() => {
                (0, T.ack)(r.id)
            }, [r.id]),
            ea = K.default.Messages.SUMMARIES_NO_SUMMARIES;
        return y.length > 0 && (ea = "" === W || null == W ? K.default.Messages.SUMMARIES_VIEW_ALL : W), f ? null : (0, s.jsxs)("div", {
            ref: C,
            className: l()(z.newTopicsBarContainer, z.containerMarginTop),
            children: [(0, s.jsx)("div", {
                className: l()(z.newTopicsBarTopicSection),
                children: (0, s.jsx)(E.Clickable, {
                    className: z.newTopicsBarTextClickable,
                    "aria-label": K.default.Messages.SUMMARY_PILL,
                    onClick: $,
                    children: (0, s.jsxs)("div", {
                        className: l()({
                            [z.newTopicsBarTextUnselected]: !Z,
                            [z.newTopicsBarTextSelected]: Z
                        }),
                        children: [(0, s.jsx)(B.default, {
                            className: z.newTopicsBarIcon,
                            width: 16,
                            height: 16
                        }), (0, s.jsx)(E.Text, {
                            variant: "text-sm/medium",
                            className: l()(z.newTopicsBarCompact, z.newTopicsBarText),
                            children: ea
                        }), (0, s.jsx)(b.default, {
                            width: 16,
                            height: 16,
                            direction: b.default.Directions.DOWN,
                            className: z.newTopicsBarCaret
                        })]
                    })
                })
            }), (0, s.jsx)(E.Clickable, {
                onClick: er,
                className: l()(z.barButtonMain, z.newTopicsBarInitial),
                children: o
            }), (0, s.jsxs)(E.Clickable, {
                onClick: es,
                className: l()(z.barButtonAlt, z.flexEnd),
                children: [(0, s.jsx)("div", {
                    className: z.newTopicsBarCompact,
                    children: K.default.Messages.MARK_AS_READ
                }), (0, s.jsx)(G.default, {
                    className: z.barButtonIcon
                })]
            }), Z && (0, s.jsxs)("div", {
                className: z.topicsDropdown,
                children: [(0, s.jsxs)("div", {
                    className: z.topicsDropdownHeading,
                    children: [(0, s.jsxs)("div", {
                        className: z.topicsDropdownHeadingText,
                        children: [(0, s.jsx)(B.default, {
                            className: z.topicsPillHeadingIcon,
                            width: 18,
                            height: 20
                        }), (0, s.jsx)(E.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: K.default.Messages.SUMMARIES
                        }), (0, s.jsx)(m.default, {
                            className: z.summariesBetaTag
                        })]
                    }), (0, s.jsx)(E.Clickable, {
                        "aria-label": K.default.Messages.CLOSE,
                        onClick: $,
                        className: z.topicsDropdownClose,
                        children: (0, s.jsx)(w.default, {})
                    })]
                }), (0, s.jsx)(E.Scroller, {
                    ref: M,
                    className: z.topicsScroller,
                    fade: !0,
                    children: ei
                })]
            })]
        })
    }

    function eo(e, t) {
        return null != t && e.length === t.length && !e.some((e, n) => {
            var i, r;
            return i = e, null == (r = t[n]) || i.length !== r.length || !!i.some((e, t) => r[t] !== e)
        })
    }

    function el(e) {
        var t, n, i;
        let {
            channel: r,
            scrollManager: o
        } = e, {
            disableInteractions: u
        } = a.useContext(U.MessagesInteractionContext), [T, f] = a.useState(null), S = a.useRef(null), [R, C] = a.useState(null), g = a.useRef(null), L = (0, c.useStateFromStoresArray)([O.default], () => {
            var e;
            return null !== (e = O.default.summaries(r.id)) && void 0 !== e ? e : []
        }, [r]), v = (0, h.default)(L);
        a.useEffect(() => {
            !d().isEqual(v, L) && k.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
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
            }, [L], eo),
            y = null !== (n = (0, c.useStateFromStores)([O.default], () => O.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
            P = null == L ? void 0 : null === (t = L[y]) || void 0 === t ? void 0 : t.topic;
        null == P && null == T && (null == L ? void 0 : L.length) >= 1 && (P = null === (i = L[0]) || void 0 === i ? void 0 : i.topic);
        let G = a.useMemo(() => d().get(L, y - 1), [y, L]),
            F = a.useMemo(() => d().get(L, y + 1), [y, L]),
            x = a.useMemo(() => d().debounce(e => {
                var t;
                f(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
            }, 64), [f]),
            Y = a.useMemo(() => d().throttle(() => {
                (0, N.setHighlightedSummary)(null)
            }, 1200, {
                trailing: !1
            }), []),
            W = a.useCallback(e => {
                Y(), x(e)
            }, [x, Y]),
            [X, Q] = a.useState(!1),
            q = a.useCallback(() => {
                k.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                    topics_dropdown_open: !X,
                    num_summaries: L.length,
                    message_counts: L.map(e => e.count),
                    start_message_ids: L.map(e => e.startId),
                    end_message_ids: L.map(e => e.endId),
                    num_participants: L.map(e => e.people.length),
                    guild_id: r.guild_id,
                    channel_id: r.id,
                    channel_type: r.type
                }), Q(!X)
            }, [X, L, Q, r]),
            Z = a.useCallback(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j.SummariesTopicClickedSource.PILL_DROPDOWN,
                    n = L[e];
                if (null == n) return;
                (0, N.setSelectedSummary)(r.id, n.id), (0, N.setHighlightedSummary)(r.id, n.id);
                let i = () => {
                    o.removeScrollCompleteCallback(i), setTimeout(() => {
                        o.addAutomaticAnchorCallback(W, !1)
                    }, 100)
                };
                o.removeAutomaticAnchorCallback(W), o.addScrollCompleteCallback(i), k.default.track(H.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
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
                    jumpType: A.JumpTypes.ANIMATED,
                    context: "Summary Jump"
                })
            }, [L, r, W, o]),
            J = a.useCallback(() => {
                Z(y - 1, j.SummariesTopicClickedSource.PILL_NEXT_ARROW)
            }, [Z, y]),
            $ = a.useCallback(() => {
                Z(y + 1, j.SummariesTopicClickedSource.PILL_PREVIOUS_ARROW)
            }, [y, Z]),
            ee = a.useCallback(e => {
                var t;
                Q(e);
                let n = null === (t = g.current) || void 0 === t ? void 0 : t.scrollTop;
                null != n && C(n)
            }, []);
        a.useEffect(() => {
            if (null != R && X) {
                var e;
                null === (e = g.current) || void 0 === e || e.scrollTo({
                    top: R
                })
            }
        }, [R, X]);
        let et = a.useCallback(e => {
            var t;
            !((0, _.isElement)(e.target) && (null === (t = S.current) || void 0 === t ? void 0 : t.contains(e.target))) && (X && k.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
        }, [X, L, r, ee]);
        a.useEffect(() => (o.addAutomaticAnchorCallback(W), () => {
            o.removeAutomaticAnchorCallback(W)
        }), [o, W]), a.useEffect(() => {
            (0, N.fetchSummaries)(r.id)
        }, [r.id]), a.useEffect(() => (document.addEventListener("mousedown", et), () => {
            document.removeEventListener("mousedown", et)
        }), [et]);
        let en = a.useMemo(() => (0, s.jsx)(p.default, {
            channel: r,
            summaries: L,
            summariesMembers: M,
            selectTopic: Z,
            setOpen: ee
        }), [L, M, Z, ee, r]);
        if (!(0, c.useStateFromStores)([O.default], () => O.default.shouldShowTopicsBar())) return null;
        let ei = K.default.Messages.SUMMARIES_NO_SUMMARIES;
        return L.length > 0 && (ei = "" === P || null == P ? K.default.Messages.SUMMARIES_VIEW_ALL : P), u ? null : (0, s.jsxs)("div", {
            ref: S,
            className: l()(z.topicsPillContainer, z.containerMarginTop),
            children: [(0, s.jsxs)("div", {
                className: z.topicsPill,
                children: [(0, s.jsx)(E.Clickable, {
                    className: z.topicsPillText,
                    "aria-label": K.default.Messages.SUMMARY_PILL,
                    onClick: q,
                    children: (0, s.jsxs)("div", {
                        className: l()({
                            [z.topicsPillTextUnselected]: !X,
                            [z.topicsPillTextSelected]: X
                        }),
                        children: [(0, s.jsx)(B.default, {
                            className: z.topicsPillSummaryIcon,
                            width: 16,
                            height: 16
                        }), (0, s.jsx)(E.Text, {
                            className: z.topicsPillTextTitle,
                            variant: "text-sm/medium",
                            children: ei
                        }), (0, s.jsx)(b.default, {
                            width: 16,
                            height: 16,
                            direction: b.default.Directions.DOWN,
                            className: z.topicsPillDropdownCaret
                        })]
                    })
                }), (0, s.jsxs)("div", {
                    className: z.topicsPillCarets,
                    children: [(0, s.jsx)(E.Clickable, {
                        "aria-label": K.default.Messages.SUMMARY_PILL_NEXT,
                        onClick: $,
                        className: l()(z.topicsPillCaret, z.topicsCaretLeft, {
                            [z.topicsPillCaretDisabled]: null == F
                        }),
                        children: (0, s.jsx)(b.default, {
                            width: 16,
                            height: 16,
                            direction: b.default.Directions.UP
                        })
                    }), (0, s.jsx)(E.Clickable, {
                        "aria-label": K.default.Messages.SUMMARY_PILL_PREVIOUS,
                        onClick: J,
                        className: l()(z.topicsPillCaret, z.topicsCaretRight, {
                            [z.topicsPillCaretDisabled]: null == G
                        }),
                        children: (0, s.jsx)(b.default, {
                            width: 16,
                            height: 16,
                            direction: b.default.Directions.DOWN
                        })
                    })]
                })]
            }), X && (0, s.jsxs)("div", {
                className: z.topicsDropdown,
                children: [(0, s.jsxs)("div", {
                    className: z.topicsDropdownHeading,
                    children: [(0, s.jsxs)("div", {
                        className: z.topicsDropdownHeadingText,
                        children: [(0, s.jsx)(B.default, {
                            className: z.topicsPillHeadingIcon,
                            width: 18,
                            height: 20
                        }), (0, s.jsx)(E.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: K.default.Messages.SUMMARIES
                        }), (0, s.jsx)(m.default, {
                            className: z.summariesBetaTag
                        })]
                    }), (0, s.jsx)(E.Clickable, {
                        "aria-label": K.default.Messages.CLOSE,
                        onClick: q,
                        className: z.topicsDropdownClose,
                        children: (0, s.jsx)(w.default, {})
                    })]
                }), (0, s.jsx)(E.Scroller, {
                    ref: g,
                    className: z.topicsScroller,
                    fade: !0,
                    children: en
                })]
            })]
        })
    }
    let eu = function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (0, s.jsxs)("div", {
                className: z.tooltip,
                children: [(0, s.jsx)(E.Text, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: z.tooltipEmojiName,
                    children: e
                }), n && (0, s.jsxs)("div", {
                    className: z.tooltipPremiumContent,
                    children: [(0, s.jsx)(C.default, {
                        isSelected: !1
                    }), (0, s.jsx)(E.Text, {
                        className: z.clickCTA,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: K.default.Messages.EMBEDDED_ACTIVITIES_PREMIUM_TIER_CUSTOM_EMOJI
                    })]
                }), t && (0, s.jsx)(E.Text, {
                    className: z.clickCTA,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: K.default.Messages.EMOJI_TOOLTIP_CLICK_CTA
                })]
            })
        },
        ed = e => {
            let {
                children: t,
                className: n
            } = e;
            return (0, s.jsx)("div", {
                className: l()(z.popoutContainer, n),
                children: t
            })
        },
        e_ = e => {
            let {
                className: t
            } = e;
            return (0, s.jsx)(ed, {
                className: t,
                children: (0, s.jsx)("div", {
                    className: z.popoutLoadingBackground,
                    children: (0, s.jsx)("div", {
                        className: z.popoutLoadingForeground
                    })
                })
            })
        }
}