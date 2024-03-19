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
            return i
        },
        JumpToPresentBar: function() {
            return ei
        },
        ErrorLoadingBar: function() {
            return el
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
    var i, l, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("917351"),
        d = n.n(u),
        c = n("118810"),
        f = n("446674"),
        p = n("77078"),
        m = n("819689"),
        h = n("267363"),
        x = n("817480"),
        E = n("340616"),
        y = n("115718"),
        g = n("84339"),
        S = n("298878"),
        C = n("793237"),
        I = n("347738"),
        _ = n("584998"),
        T = n("845579"),
        v = n("324929"),
        N = n("876308"),
        A = n("660478"),
        O = n("697218"),
        R = n("663175"),
        M = n("888673"),
        k = n("839952"),
        L = n("476765"),
        b = n("62843"),
        P = n("461380"),
        j = n("171710"),
        U = n("945330"),
        D = n("909004"),
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
            volume: i,
            autoMute: l,
            alt: r,
            renderAdjacentContent: o,
            renderOverlayContent: u,
            ...d
        } = e, c = J(t), f = q(n);
        return i = null == i ? G.getVolume : i, l = null == l ? G.getMuted : l, (0, a.jsxs)(s.Fragment, {
            children: [(0, a.jsx)(M.default, {
                ...d,
                alt: r,
                volume: i,
                autoMute: l,
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
            onMute: i,
            onVolumeShow: l,
            onVolumeHide: r,
            renderAdjacentContent: o,
            ...u
        } = e, d = J(t), c = q(i);
        return n = null == n ? G.getVolume : n, (0, a.jsxs)(s.Fragment, {
            children: [(0, a.jsx)(R.default, {
                ...u,
                onVolumeChange: d,
                onMute: c,
                onVolumeShow: l,
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
            onMute: i,
            ...l
        } = e, s = J(t), r = q(i);
        return n = null == n ? G.getVolume : n, (0, a.jsx)(N.default, {
            ...l,
            onVolumeChange: s,
            onMute: r,
            volume: n
        })
    }

    function ee(e) {
        let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: i,
            containerClassName: l,
            imageContainerClassName: r,
            disableAltTextDisplay: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: c
        } = e, f = d === W.MediaLayoutType.MOSAIC, m = !u && T.ViewImageDescriptions.getSetting() && null != t && "" !== t && !0 !== n, h = e => {
            let {
                altText: t
            } = e;
            return (0, a.jsxs)(p.Dialog, {
                "aria-label": Y.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                className: z.mediaMosaicAltTextPopout,
                onKeyDown: e => {
                    e.key === V.KeyboardEventKey.Escape && setTimeout(() => {
                        var e;
                        return null === (e = E.current) || void 0 === e ? void 0 : e.focus()
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
        }, E = s.createRef();
        return (0, a.jsxs)("div", {
            className: o(z.imageContent, l),
            children: [(0, a.jsxs)("div", {
                className: o(z.imageContainer, r),
                style: c,
                children: [(0, a.jsx)(x.default, {
                    ...e,
                    renderLinkComponent: et
                }), null != i && i()]
            }), f && m && (0, a.jsx)("div", {
                className: z.mediaMosaicAltTextContainer,
                children: (0, a.jsx)(p.Popout, {
                    animation: p.Popout.Animation.FADE,
                    renderPopout: () => (0, a.jsx)(h, {
                        altText: t
                    }),
                    children: e => (0, a.jsx)(p.FocusRing, {
                        offset: 4,
                        children: (0, a.jsx)("button", {
                            ...e,
                            type: "button",
                            ref: E,
                            "aria-label": Y.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                            className: z.mediaMosaicAltText,
                            children: Y.default.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA
                        })
                    })
                })
            }), !f && m && (0, a.jsx)("span", {
                className: z.altText,
                children: t
            })]
        })
    }

    function et(e) {
        return (0, a.jsx)(E.default, {
            ...e
        })
    }

    function en(e) {
        let {
            renderAdjacentContent: t,
            ...n
        } = e;
        return (0, a.jsxs)(s.Fragment, {
            children: [(0, a.jsx)(k.default, {
                ...n
            }), null != t && t()]
        })
    }(l = i || (i = {}))[l.OLD_MESSAGES = 0] = "OLD_MESSAGES", l[l.REPLY = 1] = "REPLY";
    let ei = e => {
            let {
                type: t = 0,
                onClick: n
            } = e;
            return (0, a.jsx)(b.MessagesInteractionContext.Consumer, {
                children: e => e.disableInteractions ? null : (0, a.jsxs)("div", {
                    className: z.jumpToPresentBar,
                    children: [(0, a.jsx)(p.FocusRing, {
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
                    }), null != n ? (0, a.jsx)(p.FocusRing, {
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
                            }(t), (0, a.jsx)(P.default, {
                                className: z.barButtonIcon
                            })]
                        })
                    }) : (0, a.jsx)(p.Spinner, {
                        type: p.Spinner.Type.PULSING_ELLIPSIS,
                        className: z.spinner,
                        itemClassName: z.spinnerItem
                    })]
                })
            })
        },
        el = e => {
            let {
                onClick: t,
                loading: n
            } = e;
            return (0, a.jsx)(b.MessagesInteractionContext.Consumer, {
                children: e => e.disableInteractions ? null : (0, a.jsxs)(p.Clickable, {
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
                    }), n ? (0, a.jsx)(p.Spinner, {
                        type: p.Spinner.Type.PULSING_ELLIPSIS,
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
        } = e, [i] = s.useState(() => (0, L.uid)("NewMessagesBarJumpToNewMessages_")), l = s.useCallback(() => {
            let e = A.default.ackMessageId(n);
            null != e ? m.default.jumpToMessage({
                channelId: n,
                messageId: e,
                offset: 1,
                context: "Mark As Read"
            }) : m.default.jumpToMessage({
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
            children: [(0, a.jsx)(p.FocusRing, {
                offset: 4,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: z.barButtonMain,
                    onClick: l,
                    "aria-label": Y.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
                    "aria-describedby": i,
                    children: (0, a.jsx)("span", {
                        id: i,
                        className: z.span,
                        children: t
                    })
                })
            }), (0, a.jsx)(p.FocusRing, {
                offset: 4,
                children: (0, a.jsxs)("button", {
                    type: "button",
                    onClick: r,
                    className: z.barButtonAlt,
                    children: [Y.default.Messages.MARK_AS_READ, (0, a.jsx)(j.default, {
                        className: z.barButtonIcon
                    })]
                })
            })]
        })
    }

    function es(e) {
        var t, n, i;
        let {
            channel: l,
            content: r,
            scrollManager: u
        } = e, {
            disableInteractions: x
        } = s.useContext(b.MessagesInteractionContext), [E, T] = s.useState(null), v = s.useRef(null), [N, R] = s.useState(null), M = s.useRef(null), k = (0, f.useStateFromStoresArray)([I.default], () => {
            var e;
            return null !== (e = I.default.summaries(l.id)) && void 0 !== e ? e : []
        }, [l]), L = (0, g.default)(k);
        s.useEffect(() => {
            !d.isEqual(L, k) && w.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: k.length,
                message_counts: k.map(e => e.count),
                start_message_ids: k.map(e => e.startId),
                end_message_ids: k.map(e => e.endId),
                num_participants: k.map(e => e.people.length),
                guild_id: l.guild_id,
                channel_id: l.id,
                channel_type: l.type
            })
        }, [k, L, l.guild_id, l.id, l.type]);
        let G = (0, f.useStateFromStores)([O.default], () => {
                var e;
                return null !== (e = null == k ? void 0 : k.map(e => {
                    var t;
                    return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
                        var t;
                        return null !== (t = O.default.getUser(e)) && void 0 !== t ? t : null
                    }).filter(F.isNotNullish)
                })) && void 0 !== e ? e : []
            }, [k], er),
            V = null !== (n = (0, f.useStateFromStores)([I.default], () => I.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
            W = null == k ? void 0 : null === (t = k[V]) || void 0 === t ? void 0 : t.topic;
        null == W && null == E && (null == k ? void 0 : k.length) >= 1 && (W = null === (i = k[0]) || void 0 === i ? void 0 : i.topic);
        let Z = s.useMemo(() => d.debounce(e => {
                var t;
                T(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
            }, 64), [T]),
            J = s.useMemo(() => d.throttle(() => {
                (0, C.setHighlightedSummary)(null)
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
                    num_summaries: k.length,
                    message_counts: k.map(e => e.count),
                    start_message_ids: k.map(e => e.startId),
                    end_message_ids: k.map(e => e.endId),
                    num_participants: k.map(e => e.people.length),
                    guild_id: l.guild_id,
                    channel_id: l.id,
                    channel_type: l.type
                }), Q(!X)
            }, [X, k, Q, l]),
            ee = s.useCallback(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K.SummariesTopicClickedSource.PILL_DROPDOWN,
                    n = k[e];
                if (null == n) return;
                (0, C.setSelectedSummary)(l.id, n.id), (0, C.setHighlightedSummary)(l.id, n.id);
                let i = () => {
                    u.removeScrollCompleteCallback(i), setTimeout(() => {
                        u.addAutomaticAnchorCallback(q, !1)
                    }, 100)
                };
                u.removeAutomaticAnchorCallback(q), u.addScrollCompleteCallback(i), w.default.track(H.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                    source: t,
                    message_id: n.startId,
                    guild_id: l.guild_id,
                    channel_id: l.id,
                    channel_type: l.type
                }), m.default.jumpToMessage({
                    channelId: l.id,
                    messageId: n.startId,
                    flash: !0,
                    offset: 0,
                    jumpType: y.JumpTypes.ANIMATED,
                    context: "Summary Jump"
                })
            }, [k, l, q, u]),
            et = s.useCallback(e => {
                var t;
                Q(e);
                let n = null === (t = M.current) || void 0 === t ? void 0 : t.scrollTop;
                null != n && R(n)
            }, []);
        s.useEffect(() => {
            if (null != N && X) {
                var e;
                null === (e = M.current) || void 0 === e || e.scrollTo({
                    top: N
                })
            }
        }, [N, X]);
        let en = s.useCallback(e => {
            var t;
            !((0, c.isElement)(e.target) && (null === (t = v.current) || void 0 === t ? void 0 : t.contains(e.target))) && (X && w.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !1,
                num_summaries: k.length,
                message_counts: k.map(e => e.count),
                start_message_ids: k.map(e => e.startId),
                end_message_ids: k.map(e => e.endId),
                num_participants: k.map(e => e.people.length),
                guild_id: l.guild_id,
                channel_id: l.id,
                channel_type: l.type
            }), et(!1))
        }, [X, k, l, et]);
        s.useEffect(() => (u.addAutomaticAnchorCallback(q), () => {
            u.removeAutomaticAnchorCallback(q)
        }), [u, q]), s.useEffect(() => {
            (0, C.fetchSummaries)(l.id)
        }, [l.id]), s.useEffect(() => (document.addEventListener("mousedown", en), () => {
            document.removeEventListener("mousedown", en)
        }), [en]);
        let ei = s.useMemo(() => (0, a.jsx)(_.default, {
                channel: l,
                summaries: k,
                summariesMembers: G,
                selectTopic: ee,
                setOpen: et
            }), [k, G, ee, et, l]),
            el = s.useCallback(() => {
                let e = A.default.ackMessageId(l.id);
                null != e ? m.default.jumpToMessage({
                    channelId: l.id,
                    messageId: e,
                    offset: 1,
                    context: "Mark As Read"
                }) : m.default.jumpToMessage({
                    channelId: l.id,
                    messageId: B.default.castChannelIdAsMessageId(l.id),
                    offset: 1,
                    context: "Mark As Read"
                })
            }, [l.id]),
            ea = s.useCallback(() => {
                (0, h.ack)(l.id)
            }, [l.id]),
            es = Y.default.Messages.SUMMARIES_NO_SUMMARIES;
        return k.length > 0 && (es = "" === W || null == W ? Y.default.Messages.SUMMARIES_VIEW_ALL : W), x ? null : (0, a.jsxs)("div", {
            ref: v,
            className: o(z.newTopicsBarContainer, z.containerMarginTop),
            children: [(0, a.jsx)("div", {
                className: o(z.newTopicsBarTopicSection),
                children: (0, a.jsx)(p.Clickable, {
                    className: z.newTopicsBarTextClickable,
                    "aria-label": Y.default.Messages.SUMMARY_PILL,
                    onClick: $,
                    children: (0, a.jsxs)("div", {
                        className: o({
                            [z.newTopicsBarTextUnselected]: !X,
                            [z.newTopicsBarTextSelected]: X
                        }),
                        children: [(0, a.jsx)(D.default, {
                            className: z.newTopicsBarIcon,
                            width: 16,
                            height: 16
                        }), (0, a.jsx)(p.Text, {
                            variant: "text-sm/medium",
                            className: o(z.newTopicsBarCompact, z.newTopicsBarText),
                            children: es
                        }), (0, a.jsx)(P.default, {
                            width: 16,
                            height: 16,
                            direction: P.default.Directions.DOWN,
                            className: z.newTopicsBarCaret
                        })]
                    })
                })
            }), (0, a.jsx)(p.Clickable, {
                onClick: el,
                className: o(z.barButtonMain, z.newTopicsBarInitial),
                children: r
            }), (0, a.jsxs)(p.Clickable, {
                onClick: ea,
                className: o(z.barButtonAlt, z.flexEnd),
                children: [(0, a.jsx)("div", {
                    className: z.newTopicsBarCompact,
                    children: Y.default.Messages.MARK_AS_READ
                }), (0, a.jsx)(j.default, {
                    className: z.barButtonIcon
                })]
            }), X && (0, a.jsxs)("div", {
                className: z.topicsDropdown,
                children: [(0, a.jsxs)("div", {
                    className: z.topicsDropdownHeading,
                    children: [(0, a.jsxs)("div", {
                        className: z.topicsDropdownHeadingText,
                        children: [(0, a.jsx)(D.default, {
                            className: z.topicsPillHeadingIcon,
                            width: 18,
                            height: 20
                        }), (0, a.jsx)(p.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: Y.default.Messages.SUMMARIES
                        }), (0, a.jsx)(S.default, {
                            className: z.summariesBetaTag
                        })]
                    }), (0, a.jsx)(p.Clickable, {
                        "aria-label": Y.default.Messages.CLOSE,
                        onClick: $,
                        className: z.topicsDropdownClose,
                        children: (0, a.jsx)(U.default, {})
                    })]
                }), (0, a.jsx)(p.Scroller, {
                    ref: M,
                    className: z.topicsScroller,
                    fade: !0,
                    children: ei
                })]
            })]
        })
    }

    function er(e, t) {
        return null != t && e.length === t.length && !e.some((e, n) => {
            var i, l;
            return i = e, null == (l = t[n]) || i.length !== l.length || !!i.some((e, t) => l[t] !== e)
        })
    }

    function eo(e) {
        var t, n, i;
        let {
            channel: l,
            scrollManager: r
        } = e, {
            disableInteractions: u
        } = s.useContext(b.MessagesInteractionContext), [h, x] = s.useState(null), E = s.useRef(null), [T, v] = s.useState(null), N = s.useRef(null), A = (0, f.useStateFromStoresArray)([I.default], () => {
            var e;
            return null !== (e = I.default.summaries(l.id)) && void 0 !== e ? e : []
        }, [l]), R = (0, g.default)(A);
        s.useEffect(() => {
            !d.isEqual(R, A) && w.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: A.length,
                message_counts: A.map(e => e.count),
                start_message_ids: A.map(e => e.startId),
                end_message_ids: A.map(e => e.endId),
                num_participants: A.map(e => e.people.length),
                guild_id: l.guild_id,
                channel_id: l.id,
                channel_type: l.type
            })
        }, [A, R, l.guild_id, l.id, l.type]);
        let M = (0, f.useStateFromStores)([O.default], () => {
                var e;
                return null !== (e = null == A ? void 0 : A.map(e => {
                    var t;
                    return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
                        var t;
                        return null !== (t = O.default.getUser(e)) && void 0 !== t ? t : null
                    }).filter(F.isNotNullish)
                })) && void 0 !== e ? e : []
            }, [A], er),
            k = null !== (n = (0, f.useStateFromStores)([I.default], () => I.default.visibleSummaryIndex())) && void 0 !== n ? n : -1,
            L = null == A ? void 0 : null === (t = A[k]) || void 0 === t ? void 0 : t.topic;
        null == L && null == h && (null == A ? void 0 : A.length) >= 1 && (L = null === (i = A[0]) || void 0 === i ? void 0 : i.topic);
        let j = s.useMemo(() => d.get(A, k - 1), [k, A]),
            G = s.useMemo(() => d.get(A, k + 1), [k, A]),
            B = s.useMemo(() => d.debounce(e => {
                var t;
                x(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
            }, 64), [x]),
            V = s.useMemo(() => d.throttle(() => {
                (0, C.setHighlightedSummary)(null)
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
                    num_summaries: A.length,
                    message_counts: A.map(e => e.count),
                    start_message_ids: A.map(e => e.startId),
                    end_message_ids: A.map(e => e.endId),
                    num_participants: A.map(e => e.people.length),
                    guild_id: l.guild_id,
                    channel_id: l.id,
                    channel_type: l.type
                }), J(!Z)
            }, [Z, A, J, l]),
            X = s.useCallback(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K.SummariesTopicClickedSource.PILL_DROPDOWN,
                    n = A[e];
                if (null == n) return;
                (0, C.setSelectedSummary)(l.id, n.id), (0, C.setHighlightedSummary)(l.id, n.id);
                let i = () => {
                    r.removeScrollCompleteCallback(i), setTimeout(() => {
                        r.addAutomaticAnchorCallback(W, !1)
                    }, 100)
                };
                r.removeAutomaticAnchorCallback(W), r.addScrollCompleteCallback(i), w.default.track(H.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                    source: t,
                    message_id: n.startId,
                    guild_id: l.guild_id,
                    channel_id: l.id,
                    channel_type: l.type
                }), m.default.jumpToMessage({
                    channelId: l.id,
                    messageId: n.startId,
                    flash: !0,
                    offset: 0,
                    jumpType: y.JumpTypes.ANIMATED,
                    context: "Summary Jump"
                })
            }, [A, l, W, r]),
            Q = s.useCallback(() => {
                X(k - 1, K.SummariesTopicClickedSource.PILL_NEXT_ARROW)
            }, [X, k]),
            $ = s.useCallback(() => {
                X(k + 1, K.SummariesTopicClickedSource.PILL_PREVIOUS_ARROW)
            }, [k, X]),
            ee = s.useCallback(e => {
                var t;
                J(e);
                let n = null === (t = N.current) || void 0 === t ? void 0 : t.scrollTop;
                null != n && v(n)
            }, []);
        s.useEffect(() => {
            if (null != T && Z) {
                var e;
                null === (e = N.current) || void 0 === e || e.scrollTo({
                    top: T
                })
            }
        }, [T, Z]);
        let et = s.useCallback(e => {
            var t;
            !((0, c.isElement)(e.target) && (null === (t = E.current) || void 0 === t ? void 0 : t.contains(e.target))) && (Z && w.default.track(H.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !1,
                num_summaries: A.length,
                message_counts: A.map(e => e.count),
                start_message_ids: A.map(e => e.startId),
                end_message_ids: A.map(e => e.endId),
                num_participants: A.map(e => e.people.length),
                guild_id: l.guild_id,
                channel_id: l.id,
                channel_type: l.type
            }), ee(!1))
        }, [Z, A, l, ee]);
        s.useEffect(() => (r.addAutomaticAnchorCallback(W), () => {
            r.removeAutomaticAnchorCallback(W)
        }), [r, W]), s.useEffect(() => {
            (0, C.fetchSummaries)(l.id)
        }, [l.id]), s.useEffect(() => (document.addEventListener("mousedown", et), () => {
            document.removeEventListener("mousedown", et)
        }), [et]);
        let en = s.useMemo(() => (0, a.jsx)(_.default, {
                channel: l,
                summaries: A,
                summariesMembers: M,
                selectTopic: X,
                setOpen: ee
            }), [A, M, X, ee, l]),
            ei = (0, f.useStateFromStores)([I.default], () => I.default.shouldShowTopicsBar());
        if (!ei) return null;
        let el = Y.default.Messages.SUMMARIES_NO_SUMMARIES;
        return A.length > 0 && (el = "" === L || null == L ? Y.default.Messages.SUMMARIES_VIEW_ALL : L), u ? null : (0, a.jsxs)("div", {
            ref: E,
            className: o(z.topicsPillContainer, z.containerMarginTop),
            children: [(0, a.jsxs)("div", {
                className: z.topicsPill,
                children: [(0, a.jsx)(p.Clickable, {
                    className: z.topicsPillText,
                    "aria-label": Y.default.Messages.SUMMARY_PILL,
                    onClick: q,
                    children: (0, a.jsxs)("div", {
                        className: o({
                            [z.topicsPillTextUnselected]: !Z,
                            [z.topicsPillTextSelected]: Z
                        }),
                        children: [(0, a.jsx)(D.default, {
                            className: z.topicsPillSummaryIcon,
                            width: 16,
                            height: 16
                        }), (0, a.jsx)(p.Text, {
                            className: z.topicsPillTextTitle,
                            variant: "text-sm/medium",
                            children: el
                        }), (0, a.jsx)(P.default, {
                            width: 16,
                            height: 16,
                            direction: P.default.Directions.DOWN,
                            className: z.topicsPillDropdownCaret
                        })]
                    })
                }), (0, a.jsxs)("div", {
                    className: z.topicsPillCarets,
                    children: [(0, a.jsx)(p.Clickable, {
                        "aria-label": Y.default.Messages.SUMMARY_PILL_NEXT,
                        onClick: $,
                        className: o(z.topicsPillCaret, z.topicsCaretLeft, {
                            [z.topicsPillCaretDisabled]: null == G
                        }),
                        children: (0, a.jsx)(P.default, {
                            width: 16,
                            height: 16,
                            direction: P.default.Directions.UP
                        })
                    }), (0, a.jsx)(p.Clickable, {
                        "aria-label": Y.default.Messages.SUMMARY_PILL_PREVIOUS,
                        onClick: Q,
                        className: o(z.topicsPillCaret, z.topicsCaretRight, {
                            [z.topicsPillCaretDisabled]: null == j
                        }),
                        children: (0, a.jsx)(P.default, {
                            width: 16,
                            height: 16,
                            direction: P.default.Directions.DOWN
                        })
                    })]
                })]
            }), Z && (0, a.jsxs)("div", {
                className: z.topicsDropdown,
                children: [(0, a.jsxs)("div", {
                    className: z.topicsDropdownHeading,
                    children: [(0, a.jsxs)("div", {
                        className: z.topicsDropdownHeadingText,
                        children: [(0, a.jsx)(D.default, {
                            className: z.topicsPillHeadingIcon,
                            width: 18,
                            height: 20
                        }), (0, a.jsx)(p.Heading, {
                            variant: "heading-md/bold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: Y.default.Messages.SUMMARIES
                        }), (0, a.jsx)(S.default, {
                            className: z.summariesBetaTag
                        })]
                    }), (0, a.jsx)(p.Clickable, {
                        "aria-label": Y.default.Messages.CLOSE,
                        onClick: q,
                        className: z.topicsDropdownClose,
                        children: (0, a.jsx)(U.default, {})
                    })]
                }), (0, a.jsx)(p.Scroller, {
                    ref: N,
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
                children: [(0, a.jsx)(p.Text, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: z.tooltipEmojiName,
                    children: e
                }), n && (0, a.jsxs)("div", {
                    className: z.tooltipPremiumContent,
                    children: [(0, a.jsx)(v.default, {
                        isSelected: !1
                    }), (0, a.jsx)(p.Text, {
                        className: z.clickCTA,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: Y.default.Messages.EMBEDDED_ACTIVITIES_PREMIUM_TIER_CUSTOM_EMOJI
                    })]
                }), t && (0, a.jsx)(p.Text, {
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