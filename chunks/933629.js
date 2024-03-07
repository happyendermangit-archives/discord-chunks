function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EXPRESSION_TOOLTIP_PROPS: function() {
            return Z
        },
        renderVideoComponent: function() {
            return X
        },
        renderAudioComponent: function() {
            return Q
        },
        renderVoiceMessageAudioComponent: function() {
            return $
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
        JumpBarType: function() {
            return l
        },
        JumpToPresentBar: function() {
            return el
        },
        ErrorLoadingBar: function() {
            return ei
        },
        NewMessagesBar: function() {
            return ea
        },
        NewTopicsBar: function() {
            return es
        },
        TopicsPill: function() {
            return eo
        },
        renderClickableTooltipNode: function() {
            return eu
        },
        MessagePopoutContent: function() {
            return ed
        },
        PopoutLoadingAnimation: function() {
            return ec
        }
    }), n("222007");
    var l, i, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("917351"),
        d = n.n(u),
        c = n("118810"),
        f = n("446674"),
        m = n("77078"),
        p = n("819689"),
        h = n("267363"),
        E = n("817480"),
        g = n("340616"),
        S = n("115718"),
        C = n("84339"),
        T = n("298878"),
        v = n("793237"),
        I = n("347738"),
        _ = n("584998"),
        N = n("845579"),
        A = n("324929"),
        x = n("876308"),
        y = n("660478"),
        O = n("697218"),
        R = n("663175"),
        M = n("888673"),
        L = n("839952"),
        P = n("476765"),
        b = n("62843"),
        j = n("461380"),
        U = n("171710"),
        D = n("945330"),
        k = n("909004"),
        w = n("599110"),
        F = n("449008"),
        G = n("874276"),
        B = n("299039"),
        H = n("49111"),
        V = n("894282"),
        K = n("995307"),
        W = n("719347"),
        Y = n("782340"),
        z = n("464354");
    let Z = {
            delay: 300,
            position: "top"
        },
        J = e => t => {
            null == e || e(t), (0, G.setVolume)(t)
        },
        q = e => t => {
            null == e || e(t), (0, G.setMuted)(t)
        };

    function X(e) {
        let {
            onVolumeChange: t,
            onMute: n,
            volume: l,
            autoMute: i,
            alt: r,
            renderAdjacentContent: o,
            renderOverlayContent: u,
            ...d
        } = e, c = J(t), f = q(n);
        return l = null == l ? G.getVolume : l, i = null == i ? G.getMuted : i, (0, a.jsxs)(s.Fragment, {
            children: [(0, a.jsx)(M.default, {
                ...d,
                alt: r,
                volume: l,
                autoMute: i,
                onVolumeChange: c,
                onMute: f,
                renderLinkComponent: et,
                renderOverlayContent: u
            }), null != o && o()]
        })
    }

    function Q(e) {
        let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: i,
            onVolumeHide: r,
            renderAdjacentContent: o,
            ...u
        } = e, d = J(t), c = q(l);
        return n = null == n ? G.getVolume : n, (0, a.jsxs)(s.Fragment, {
            children: [(0, a.jsx)(R.default, {
                ...u,
                onVolumeChange: d,
                onMute: c,
                onVolumeShow: i,
                onVolumeHide: r,
                volume: n,
                autoMute: () => !1,
                renderLinkComponent: et
            }), null != o && o()]
        })
    }

    function $(e) {
        let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            ...i
        } = e, s = J(t), r = q(l);
        return n = null == n ? G.getVolume : n, (0, a.jsx)(x.default, {
            ...i,
            onVolumeChange: s,
            onMute: r,
            volume: n
        })
    }

    function ee(e) {
        let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: l,
            containerClassName: i,
            imageContainerClassName: r,
            disableAltTextDisplay: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: c
        } = e, f = d === W.MediaLayoutType.MOSAIC, p = !u && N.ViewImageDescriptions.getSetting() && null != t && "" !== t && !0 !== n, h = e => {
            let {
                altText: t
            } = e;
            return (0, a.jsxs)(m.Dialog, {
                "aria-label": Y.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                className: z.mediaMosaicAltTextPopout,
                onKeyDown: e => {
                    e.key === V.KeyboardEventKey.Escape && setTimeout(() => {
                        var e;
                        return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
                    }, 0)
                },
                children: [(0, a.jsx)("span", {
                    className: z.mediaMosaicAltTextPopoutTitle,
                    children: Y.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE
                }), (0, a.jsx)("span", {
                    className: z.mediaMosaicAltTextPopoutDescription,
                    children: t
                })]
            })
        }, g = s.createRef();
        return (0, a.jsxs)("div", {
            className: o(z.imageContent, i),
            children: [(0, a.jsxs)("div", {
                className: o(z.imageContainer, r),
                style: c,
                children: [(0, a.jsx)(E.default, {
                    ...e,
                    renderLinkComponent: et
                }), null != l && l()]
            }), f && p && (0, a.jsx)("div", {
                className: z.mediaMosaicAltTextContainer,
                children: (0, a.jsx)(m.Popout, {
                    animation: m.Popout.Animation.FADE,
                    renderPopout: () => (0, a.jsx)(h, {
                        altText: t
                    }),
                    children: e => (0, a.jsx)(m.FocusRing, {
                        offset: 4,
                        children: (0, a.jsx)("button", {
                            ...e,
                            type: "button",
                            ref: g,
                            "aria-label": Y.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                            className: z.mediaMosaicAltText,
                            children: Y.default.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
                        })
                    })
                })
            }), !f && p && (0, a.jsx)("span", {
                className: z.altText,
                children: t
            })]
        })
    }

    function et(e) {
        return (0, a.jsx)(g.default, {
            ...e
        })
    }

    function en(e) {
        let {
            renderAdjacentContent: t,
            ...n
        } = e;
        return (0, a.jsxs)(s.Fragment, {
            children: [(0, a.jsx)(L.default, {
                ...n
            }), null != t && t()]
        })
    }(i = l || (l = {}))[i.OLD_MESSAGES = 0] = "OLD_MESSAGES", i[i.REPLY = 1] = "REPLY";
    let el = e => {
            let {
                type: t = 0,
                onClick: n
            } = e;
            return (0, a.jsx)(b.MessagesInteractionContext.Consumer, {
                children: e => e.disableInteractions ? null : (0, a.jsxs)("div", {
                    className: z.jumpToPresentBar,
                    children: [(0, a.jsx)(m.FocusRing, {
                        offset: 4,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            onClick: n,
                            className: z.barButtonMain,
                            children: function(e) {
                                switch (e) {
                                    case 0:
                                        return Y.default.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                                    case 1:
                                        return Y.default.Messages.JUMP_BAR_VIEWING_REPLY;
                                    default:
                                        return (0, F.assertNever)(e)
                                }
                            }(t)
                        })
                    }), null != n ? (0, a.jsx)(m.FocusRing, {
                        offset: 4,
                        children: (0, a.jsxs)("button", {
                            type: "button",
                            onClick: n,
                            className: z.barButtonAlt,
                            children: [function(e) {
                                switch (e) {
                                    case 0:
                                        return Y.default.Messages.JUMP_TO_PRESENT;
                                    case 1:
                                        return Y.default.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                                    default:
                                        return (0, F.assertNever)(e)
                                }
                            }(t), (0, a.jsx)(j.default, {
                                className: z.barButtonIcon
                            })]
                        })
                    }) : (0, a.jsx)(m.Spinner, {
                        type: m.Spinner.Type.PULSING_ELLIPSIS,
                        className: z.spinner,
                        itemClassName: z.spinnerItem
                    })]
                })
            })
        },
        ei = e => {
            let {
                onClick: t,
                loading: n
            } = e;
            return (0, a.jsx)(b.MessagesInteractionContext.Consumer, {
                children: e => e.disableInteractions ? null : (0, a.jsxs)(m.Clickable, {
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
                    children: [(0, a.jsx)("div", {
                        className: z.barButtonMain,
                        children: Y.default.Messages.MESSAGES_FAILED_TO_LOAD
                    }), n ? (0, a.jsx)(m.Spinner, {
                        type: m.Spinner.Type.PULSING_ELLIPSIS,
                        className: z.spinner,
                        itemClassName: z.spinnerItem
                    }) : (0, a.jsx)("div", {
                        className: z.barButtonAlt,
                        children: Y.default.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN
                    })]
                })
            })
        };

    function ea(e) {
        let {
            content: t,
            channelId: n
        } = e, [l] = s.useState(() => (0, P.uid)("NewMessagesBarJumpToNewMessages_")), i = s.useCallback(() => {
            let e = y.default.ackMessageId(n);
            null != e ? p.default.jumpToMessage({
                channelId: n,
                messageId: e,
                offset: 1,
                context: "Mark As Read"
            }) : p.default.jumpToMessage({
                channelId: n,
                messageId: B.default.castChannelIdAsMessageId(n),
                offset: 1,
                context: "Mark As Read"
            })
        }, [n]), r = s.useCallback(() => {
            (0, h.ack)(n)
        }, [n]), {
            disableInteractions: u
        } = s.useContext(b.MessagesInteractionContext);
        return u ? null : (0, a.jsxs)("div", {
            className: o(z.newMessagesBar, {
                [z.disableInteractions]: u
            }),
            children: [(0, a.jsx)(m.FocusRing, {
                offset: 4,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: z.barButtonMain,
                    onClick: i,
                    "aria-label": Y.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
                    "aria-describedby": l,
                    children: (0, a.jsx)("span", {
                        id: l,
                        className: z.span,
                        children: t
                    })
                })
            }), (0, a.jsx)(m.FocusRing, {
                offset: 4,
                children: (0, a.jsxs)("button", {
                    type: "button",
                    onClick: r,
                    className: z.barButtonAlt,
                    children: [Y.default.Messages.MARK_AS_READ, (0, a.jsx)(U.default, {
                        className: z.barButtonIcon
                    })]
                })
            })]
        })
    }

    function es(e) {
        var t, n, l;
        let {
            channel: i,
            content: r,
            scrollManager: u
        } = e, {
            disableInteractions: E
        } = s.useContext(b.MessagesInteractionContext), [g, N] = s.useState(null), A = s.useRef(null), [x, R] = s.useState(null), M = s.useRef(null), L = (0, f.useStateFromStoresArray)([I.default], () => {
            var e;
            return null !== (e = I.default.summaries(i.id)) && void 0 !== e ? e : []
        }, [i]), P = (0, C.default)(L);
        s.useEffect(() => {
            !d.isEqual(P, L) && w.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: L.length,
                message_counts: L.map(e => e.count),
                start_message_ids: L.map(e => e.startId),
                end_message_ids: L.map(e => e.endId),
                num_participants: L.map(e => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            })
        }, [L, P, i.guild_id, i.id, i.type]);
        let G = (0, f.useStateFromStores)([O.default], () => {
                var e;
                return null !== (e = null == L ? void 0 : L.map(e => {
                    var t;
                    return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
                        var t;
                        return null !== (t = O.default.getUser(e)) && void 0 !== t ? t : null
                    }).filter(F.isNotNullish)
                })) && void 0 !== e ? e : []
            }, [L], er),
            V = null !== (n = (0, f.useStateFromStores)([I.default], () => I.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
            W = null == L ? void 0 : null === (t = L[V]) || void 0 === t ? void 0 : t.topic;
        null == W && null == g && (null == L ? void 0 : L.length) >= 1 && (W = null === (l = L[0]) || void 0 === l ? void 0 : l.topic);
        let Z = s.useMemo(() => d.debounce(e => {
                var t;
                N(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
            }, 64), [N]),
            J = s.useMemo(() => d.throttle(() => {
                (0, v.setHighlightedSummary)(null)
            }, 1200, {
                trailing: !1
            }), []),
            q = s.useCallback(e => {
                J(), Z(e)
            }, [Z, J]),
            [X, Q] = s.useState(!1),
            $ = s.useCallback(() => {
                w.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                    topics_dropdown_open: !X,
                    num_summaries: L.length,
                    message_counts: L.map(e => e.count),
                    start_message_ids: L.map(e => e.startId),
                    end_message_ids: L.map(e => e.endId),
                    num_participants: L.map(e => e.people.length),
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    channel_type: i.type
                }), Q(!X)
            }, [X, L, Q, i]),
            ee = s.useCallback(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K.SummariesTopicClickedSource.PILL_DROPDOWN,
                    n = L[e];
                if (null == n) return;
                (0, v.setSelectedSummary)(i.id, n.id), (0, v.setHighlightedSummary)(i.id, n.id);
                let l = () => {
                    u.removeScrollCompleteCallback(l), setTimeout(() => {
                        u.addAutomaticAnchorCallback(q, !1)
                    }, 100)
                };
                u.removeAutomaticAnchorCallback(q), u.addScrollCompleteCallback(l), w.default.track(H.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                    source: t,
                    message_id: n.startId,
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    channel_type: i.type
                }), p.default.jumpToMessage({
                    channelId: i.id,
                    messageId: n.startId,
                    flash: !0,
                    offset: 0,
                    jumpType: S.JumpTypes.ANIMATED,
                    context: "Summary Jump"
                })
            }, [L, i, q, u]),
            et = s.useCallback(e => {
                var t;
                Q(e);
                let n = null === (t = M.current) || void 0 === t ? void 0 : t.scrollTop;
                null != n && R(n)
            }, []);
        s.useEffect(() => {
            if (null != x && X) {
                var e;
                null === (e = M.current) || void 0 === e || e.scrollTo({
                    top: x
                })
            }
        }, [x, X]);
        let en = s.useCallback(e => {
            var t;
            !((0, c.isElement)(e.target) && (null === (t = A.current) || void 0 === t ? void 0 : t.contains(e.target))) && (X && w.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !1,
                num_summaries: L.length,
                message_counts: L.map(e => e.count),
                start_message_ids: L.map(e => e.startId),
                end_message_ids: L.map(e => e.endId),
                num_participants: L.map(e => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }), et(!1))
        }, [X, L, i, et]);
        s.useEffect(() => (u.addAutomaticAnchorCallback(q), () => {
            u.removeAutomaticAnchorCallback(q)
        }), [u, q]), (0, v.useSummaryPolling)(i.id, !0), s.useEffect(() => (document.addEventListener("mousedown", en), () => {
            document.removeEventListener("mousedown", en)
        }), [en]);
        let el = s.useMemo(() => (0, a.jsx)(_.default, {
                channel: i,
                summaries: L,
                summariesMembers: G,
                selectTopic: ee,
                setOpen: et
            }), [L, G, ee, et, i]),
            ei = s.useCallback(() => {
                let e = y.default.ackMessageId(i.id);
                null != e ? p.default.jumpToMessage({
                    channelId: i.id,
                    messageId: e,
                    offset: 1,
                    context: "Mark As Read"
                }) : p.default.jumpToMessage({
                    channelId: i.id,
                    messageId: B.default.castChannelIdAsMessageId(i.id),
                    offset: 1,
                    context: "Mark As Read"
                })
            }, [i.id]),
            ea = s.useCallback(() => {
                (0, h.ack)(i.id)
            }, [i.id]),
            es = Y.default.Messages.SUMMARIES_NO_SUMMARIES;
        return L.length > 0 && (es = "" === W || null == W ? Y.default.Messages.SUMMARIES_VIEW_ALL : W), E ? null : (0, a.jsxs)("div", {
            ref: A,
            className: o(z.newTopicsBarContainer, z.containerMarginTop),
            children: [(0, a.jsx)("div", {
                className: o(z.newTopicsBarTopicSection),
                children: (0, a.jsx)(m.Clickable, {
                    className: z.newTopicsBarTextClickable,
                    "aria-label": Y.default.Messages.SUMMARY_PILL,
                    onClick: $,
                    children: (0, a.jsxs)("div", {
                        className: o({
                            [z.newTopicsBarTextUnselected]: !X,
                            [z.newTopicsBarTextSelected]: X
                        }),
                        children: [(0, a.jsx)(k.default, {
                            className: z.newTopicsBarIcon,
                            width: 16,
                            height: 16
                        }), (0, a.jsx)(m.Text, {
                            variant: "text-sm/medium",
                            className: o(z.newTopicsBarCompact, z.newTopicsBarText),
                            children: es
                        }), (0, a.jsx)(j.default, {
                            width: 16,
                            height: 16,
                            direction: j.default.Directions.DOWN,
                            className: z.newTopicsBarCaret
                        })]
                    })
                })
            }), (0, a.jsx)(m.Clickable, {
                onClick: ei,
                className: o(z.barButtonMain, z.newTopicsBarInitial),
                children: r
            }), (0, a.jsxs)(m.Clickable, {
                onClick: ea,
                className: o(z.barButtonAlt, z.flexEnd),
                children: [(0, a.jsx)("div", {
                    className: z.newTopicsBarCompact,
                    children: Y.default.Messages.MARK_AS_READ
                }), (0, a.jsx)(U.default, {
                    className: z.barButtonIcon
                })]
            }), X && (0, a.jsxs)("div", {
                className: z.topicsDropdown,
                children: [(0, a.jsxs)("div", {
                    className: z.topicsDropdownHeading,
                    children: [(0, a.jsxs)("div", {
                        className: z.topicsDropdownHeadingText,
                        children: [(0, a.jsx)(k.default, {
                            className: z.topicsPillHeadingIcon,
                            width: 18,
                            height: 20
                        }), (0, a.jsx)(m.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: Y.default.Messages.SUMMARIES
                        }), (0, a.jsx)(T.default, {
                            className: z.summariesBetaTag
                        })]
                    }), (0, a.jsx)(m.Clickable, {
                        "aria-label": Y.default.Messages.CLOSE,
                        onClick: $,
                        className: z.topicsDropdownClose,
                        children: (0, a.jsx)(D.default, {})
                    })]
                }), (0, a.jsx)(m.Scroller, {
                    ref: M,
                    className: z.topicsScroller,
                    fade: !0,
                    children: el
                })]
            })]
        })
    }

    function er(e, t) {
        return null != t && e.length === t.length && !e.some((e, n) => {
            var l, i;
            return l = e, null == (i = t[n]) || l.length !== i.length || !!l.some((e, t) => i[t] !== e)
        })
    }

    function eo(e) {
        var t, n, l;
        let {
            channel: i,
            scrollManager: r
        } = e, {
            disableInteractions: u
        } = s.useContext(b.MessagesInteractionContext), [h, E] = s.useState(null), g = s.useRef(null), [N, A] = s.useState(null), x = s.useRef(null), y = (0, f.useStateFromStoresArray)([I.default], () => {
            var e;
            return null !== (e = I.default.summaries(i.id)) && void 0 !== e ? e : []
        }, [i]), R = (0, C.default)(y);
        s.useEffect(() => {
            !d.isEqual(R, y) && w.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: y.length,
                message_counts: y.map(e => e.count),
                start_message_ids: y.map(e => e.startId),
                end_message_ids: y.map(e => e.endId),
                num_participants: y.map(e => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            })
        }, [y, R, i.guild_id, i.id, i.type]);
        let M = (0, f.useStateFromStores)([O.default], () => {
                var e;
                return null !== (e = null == y ? void 0 : y.map(e => {
                    var t;
                    return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
                        var t;
                        return null !== (t = O.default.getUser(e)) && void 0 !== t ? t : null
                    }).filter(F.isNotNullish)
                })) && void 0 !== e ? e : []
            }, [y], er),
            L = null !== (n = (0, f.useStateFromStores)([I.default], () => I.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
            P = null == y ? void 0 : null === (t = y[L]) || void 0 === t ? void 0 : t.topic;
        null == P && null == h && (null == y ? void 0 : y.length) >= 1 && (P = null === (l = y[0]) || void 0 === l ? void 0 : l.topic);
        let U = s.useMemo(() => d.get(y, L - 1), [L, y]),
            G = s.useMemo(() => d.get(y, L + 1), [L, y]),
            B = s.useMemo(() => d.debounce(e => {
                var t;
                E(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
            }, 64), [E]),
            V = s.useMemo(() => d.throttle(() => {
                (0, v.setHighlightedSummary)(null)
            }, 1200, {
                trailing: !1
            }), []),
            W = s.useCallback(e => {
                V(), B(e)
            }, [B, V]),
            [Z, J] = s.useState(!1),
            q = s.useCallback(() => {
                w.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                    topics_dropdown_open: !Z,
                    num_summaries: y.length,
                    message_counts: y.map(e => e.count),
                    start_message_ids: y.map(e => e.startId),
                    end_message_ids: y.map(e => e.endId),
                    num_participants: y.map(e => e.people.length),
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    channel_type: i.type
                }), J(!Z)
            }, [Z, y, J, i]),
            X = s.useCallback(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K.SummariesTopicClickedSource.PILL_DROPDOWN,
                    n = y[e];
                if (null == n) return;
                (0, v.setSelectedSummary)(i.id, n.id), (0, v.setHighlightedSummary)(i.id, n.id);
                let l = () => {
                    r.removeScrollCompleteCallback(l), setTimeout(() => {
                        r.addAutomaticAnchorCallback(W, !1)
                    }, 100)
                };
                r.removeAutomaticAnchorCallback(W), r.addScrollCompleteCallback(l), w.default.track(H.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                    source: t,
                    message_id: n.startId,
                    guild_id: i.guild_id,
                    channel_id: i.id,
                    channel_type: i.type
                }), p.default.jumpToMessage({
                    channelId: i.id,
                    messageId: n.startId,
                    flash: !0,
                    offset: 0,
                    jumpType: S.JumpTypes.ANIMATED,
                    context: "Summary Jump"
                })
            }, [y, i, W, r]),
            Q = s.useCallback(() => {
                X(L - 1, K.SummariesTopicClickedSource.PILL_NEXT_ARROW)
            }, [X, L]),
            $ = s.useCallback(() => {
                X(L + 1, K.SummariesTopicClickedSource.PILL_PREVIOUS_ARROW)
            }, [L, X]),
            ee = s.useCallback(e => {
                var t;
                J(e);
                let n = null === (t = x.current) || void 0 === t ? void 0 : t.scrollTop;
                null != n && A(n)
            }, []);
        s.useEffect(() => {
            if (null != N && Z) {
                var e;
                null === (e = x.current) || void 0 === e || e.scrollTo({
                    top: N
                })
            }
        }, [N, Z]);
        let et = s.useCallback(e => {
            var t;
            !((0, c.isElement)(e.target) && (null === (t = g.current) || void 0 === t ? void 0 : t.contains(e.target))) && (Z && w.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !1,
                num_summaries: y.length,
                message_counts: y.map(e => e.count),
                start_message_ids: y.map(e => e.startId),
                end_message_ids: y.map(e => e.endId),
                num_participants: y.map(e => e.people.length),
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }), ee(!1))
        }, [Z, y, i, ee]);
        s.useEffect(() => (r.addAutomaticAnchorCallback(W), () => {
            r.removeAutomaticAnchorCallback(W)
        }), [r, W]), (0, v.useSummaryPolling)(i.id, !0), s.useEffect(() => (document.addEventListener("mousedown", et), () => {
            document.removeEventListener("mousedown", et)
        }), [et]);
        let en = s.useMemo(() => (0, a.jsx)(_.default, {
                channel: i,
                summaries: y,
                summariesMembers: M,
                selectTopic: X,
                setOpen: ee
            }), [y, M, X, ee, i]),
            el = (0, f.useStateFromStores)([I.default], () => I.default.shouldShowTopicsBar());
        if (!el) return null;
        let ei = Y.default.Messages.SUMMARIES_NO_SUMMARIES;
        return y.length > 0 && (ei = "" === P || null == P ? Y.default.Messages.SUMMARIES_VIEW_ALL : P), u ? null : (0, a.jsxs)("div", {
            ref: g,
            className: o(z.topicsPillContainer, z.containerMarginTop),
            children: [(0, a.jsxs)("div", {
                className: z.topicsPill,
                children: [(0, a.jsx)(m.Clickable, {
                    className: z.topicsPillText,
                    "aria-label": Y.default.Messages.SUMMARY_PILL,
                    onClick: q,
                    children: (0, a.jsxs)("div", {
                        className: o({
                            [z.topicsPillTextUnselected]: !Z,
                            [z.topicsPillTextSelected]: Z
                        }),
                        children: [(0, a.jsx)(k.default, {
                            className: z.topicsPillSummaryIcon,
                            width: 16,
                            height: 16
                        }), (0, a.jsx)(m.Text, {
                            className: z.topicsPillTextTitle,
                            variant: "text-sm/medium",
                            children: ei
                        }), (0, a.jsx)(j.default, {
                            width: 16,
                            height: 16,
                            direction: j.default.Directions.DOWN,
                            className: z.topicsPillDropdownCaret
                        })]
                    })
                }), (0, a.jsxs)("div", {
                    className: z.topicsPillCarets,
                    children: [(0, a.jsx)(m.Clickable, {
                        "aria-label": Y.default.Messages.SUMMARY_PILL_NEXT,
                        onClick: $,
                        className: o(z.topicsPillCaret, z.topicsCaretLeft, {
                            [z.topicsPillCaretDisabled]: null == G
                        }),
                        children: (0, a.jsx)(j.default, {
                            width: 16,
                            height: 16,
                            direction: j.default.Directions.UP
                        })
                    }), (0, a.jsx)(m.Clickable, {
                        "aria-label": Y.default.Messages.SUMMARY_PILL_PREVIOUS,
                        onClick: Q,
                        className: o(z.topicsPillCaret, z.topicsCaretRight, {
                            [z.topicsPillCaretDisabled]: null == U
                        }),
                        children: (0, a.jsx)(j.default, {
                            width: 16,
                            height: 16,
                            direction: j.default.Directions.DOWN
                        })
                    })]
                })]
            }), Z && (0, a.jsxs)("div", {
                className: z.topicsDropdown,
                children: [(0, a.jsxs)("div", {
                    className: z.topicsDropdownHeading,
                    children: [(0, a.jsxs)("div", {
                        className: z.topicsDropdownHeadingText,
                        children: [(0, a.jsx)(k.default, {
                            className: z.topicsPillHeadingIcon,
                            width: 18,
                            height: 20
                        }), (0, a.jsx)(m.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: Y.default.Messages.SUMMARIES
                        }), (0, a.jsx)(T.default, {
                            className: z.summariesBetaTag
                        })]
                    }), (0, a.jsx)(m.Clickable, {
                        "aria-label": Y.default.Messages.CLOSE,
                        onClick: q,
                        className: z.topicsDropdownClose,
                        children: (0, a.jsx)(D.default, {})
                    })]
                }), (0, a.jsx)(m.Scroller, {
                    ref: x,
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
            return (0, a.jsxs)("div", {
                className: z.tooltip,
                children: [(0, a.jsx)(m.Text, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: z.tooltipEmojiName,
                    children: e
                }), n && (0, a.jsxs)("div", {
                    className: z.tooltipPremiumContent,
                    children: [(0, a.jsx)(A.default, {
                        isSelected: !1
                    }), (0, a.jsx)(m.Text, {
                        className: z.clickCTA,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: Y.default.Messages.EMBEDDED_ACTIVITIES_PREMIUM_TIER_CUSTOM_EMOJI
                    })]
                }), t && (0, a.jsx)(m.Text, {
                    className: z.clickCTA,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: Y.default.Messages.EMOJI_TOOLTIP_CLICK_CTA
                })]
            })
        },
        ed = e => {
            let {
                children: t,
                className: n
            } = e;
            return (0, a.jsx)("div", {
                className: o(z.popoutContainer, n),
                children: t
            })
        },
        ec = e => {
            let {
                className: t
            } = e;
            return (0, a.jsx)(ed, {
                className: t,
                children: (0, a.jsx)("div", {
                    className: z.popoutLoadingBackground,
                    children: (0, a.jsx)("div", {
                        className: z.popoutLoadingForeground
                    })
                })
            })
        }
}