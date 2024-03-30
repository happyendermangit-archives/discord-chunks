function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EXPRESSION_TOOLTIP_PROPS: function() {
            return $
        },
        ErrorLoadingBar: function() {
            return el
        },
        JumpBarType: function() {
            return o
        },
        JumpToPresentBar: function() {
            return es
        },
        MessagePopoutContent: function() {
            return ep
        },
        NewMessagesBar: function() {
            return ec
        },
        NewTopicsBar: function() {
            return ef
        },
        PopoutLoadingAnimation: function() {
            return em
        },
        TopicsPill: function() {
            return e_
        },
        renderAudioComponent: function() {
            return er
        },
        renderClickableTooltipNode: function() {
            return eE
        },
        renderImageComponent: function() {
            return ei
        },
        renderMaskedLinkComponent: function() {
            return ea
        },
        renderPlaintextFilePreview: function() {
            return eu
        },
        renderVideoComponent: function() {
            return en
        },
        renderVoiceMessageAudioComponent: function() {
            return eo
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("392711"),
        l = n.n(s),
        c = n("188104"),
        f = n("898511"),
        d = n("784184"),
        _ = n("443458"),
        E = n("98660"),
        p = n("167168"),
        m = n("798481"),
        y = n("660939"),
        I = n("575748"),
        h = n("938752"),
        O = n("630394"),
        T = n("802957"),
        S = n("825554"),
        v = n("53867"),
        g = n("749762"),
        A = n("563920"),
        b = n("879547"),
        N = n("208454"),
        R = n("983190"),
        C = n("204315"),
        P = n("59585"),
        D = n("719328"),
        L = n("416801"),
        M = n("701958"),
        U = n("339223"),
        w = n("247164"),
        k = n("287885"),
        G = n("870331"),
        B = n("162677"),
        j = n("851094"),
        F = n("523018"),
        V = n("281767"),
        H = n("654546"),
        x = n("635277"),
        Y = n("766063"),
        W = n("941504"),
        K = n("179216");

    function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function X(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function q(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                X(e, t, n[t])
            })
        }
        return e
    }

    function Q(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function J(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function Z(e, t) {
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
                if ("string" == typeof e) return z(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return z(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var $ = {
            delay: 300,
            position: "top"
        },
        ee = function(e) {
            return function(t) {
                null == e || e(t), (0, j.setVolume)(t)
            }
        },
        et = function(e) {
            return function(t) {
                null == e || e(t), (0, j.setMuted)(t)
            }
        };

    function en(e) {
        var t = e.onVolumeChange,
            n = e.onMute,
            r = e.volume,
            o = e.autoMute,
            a = e.alt,
            u = e.renderAdjacentContent,
            s = e.renderOverlayContent,
            l = J(e, ["onVolumeChange", "onMute", "volume", "autoMute", "alt", "renderAdjacentContent", "renderOverlayContent"]),
            c = ee(t),
            f = et(n);
        return r = null == r ? j.getVolume : r, o = null == o ? j.getMuted : o, i.createElement(i.Fragment, null, i.createElement(C.default, Q(q({}, l), {
            alt: a,
            volume: r,
            autoMute: o,
            onVolumeChange: c,
            onMute: f,
            renderLinkComponent: ea,
            renderOverlayContent: s
        })), null != u && u())
    }

    function er(e) {
        var t = e.onVolumeChange,
            n = e.volume,
            r = e.onMute,
            o = e.onVolumeShow,
            a = e.onVolumeHide,
            u = e.renderAdjacentContent,
            s = J(e, ["onVolumeChange", "volume", "onMute", "onVolumeShow", "onVolumeHide", "renderAdjacentContent"]),
            l = ee(t),
            c = et(r);
        return n = null == n ? j.getVolume : n, i.createElement(i.Fragment, null, i.createElement(R.default, Q(q({}, s), {
            onVolumeChange: l,
            onMute: c,
            onVolumeShow: o,
            onVolumeHide: a,
            volume: n,
            autoMute: function() {
                return !1
            },
            renderLinkComponent: ea
        })), null != u && u())
    }

    function eo(e) {
        var t = e.onVolumeChange,
            n = e.volume,
            r = e.onMute,
            o = J(e, ["onVolumeChange", "volume", "onMute"]),
            a = ee(t),
            u = et(r);
        return n = null == n ? j.getVolume : n, i.createElement(A.default, Q(q({}, o), {
            onVolumeChange: a,
            onMute: u,
            volume: n
        }))
    }

    function ei(e) {
        var t = e.alt,
            n = e.hiddenSpoilers,
            r = e.renderAdjacentContent,
            o = e.containerClassName,
            a = e.imageContainerClassName,
            s = e.disableAltTextDisplay,
            l = e.mediaLayoutType,
            c = e.imageContainerStyle,
            f = l === Y.MediaLayoutType.MOSAIC,
            _ = !(void 0 !== s && s) && v.ViewImageDescriptions.getSetting() && null != t && "" !== t && !0 !== n,
            E = function(e) {
                var t = e.altText;
                return i.createElement(d.Dialog, {
                    "aria-label": W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                    className: K.mediaMosaicAltTextPopout,
                    onKeyDown: function(e) {
                        e.key === H.KeyboardEventKey.Escape && setTimeout(function() {
                            var e;
                            return null === (e = m.current) || void 0 === e ? void 0 : e.focus()
                        }, 0)
                    }
                }, i.createElement("span", {
                    className: K.mediaMosaicAltTextPopoutTitle
                }, W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE), i.createElement("span", {
                    className: K.mediaMosaicAltTextPopoutDescription
                }, t))
            },
            m = i.createRef();
        return i.createElement("div", {
            className: u()(K.imageContent, o)
        }, i.createElement("div", {
            className: u()(K.imageContainer, a),
            style: c
        }, i.createElement(p.default, Q(q({}, e), {
            renderLinkComponent: ea
        })), null != r && r()), f && _ && i.createElement("div", {
            className: K.mediaMosaicAltTextContainer
        }, i.createElement(d.Popout, {
            animation: d.Popout.Animation.FADE,
            renderPopout: function() {
                return i.createElement(E, {
                    altText: t
                })
            }
        }, function(e) {
            return i.createElement(d.FocusRing, {
                offset: 4
            }, i.createElement("button", Q(q({}, e), {
                type: "button",
                ref: m,
                "aria-label": W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_POPOUT_TITLE,
                className: K.mediaMosaicAltText
            }), W.default.Messages.MEDIA_MOSAIC_ALT_TEXT_CTA))
        })), !f && _ && i.createElement("span", {
            className: K.altText
        }, t))
    }

    function ea(e) {
        return i.createElement(m.default, e)
    }

    function eu(e) {
        var t = e.renderAdjacentContent,
            n = J(e, ["renderAdjacentContent"]);
        return i.createElement(i.Fragment, null, i.createElement(P.default, n), null != t && t())
    }(r = o || (o = {}))[r.OLD_MESSAGES = 0] = "OLD_MESSAGES", r[r.REPLY = 1] = "REPLY";
    var es = function(e) {
            var t = e.type,
                n = void 0 === t ? 0 : t,
                r = e.onClick;
            return i.createElement(L.MessagesInteractionContext.Consumer, null, function(e) {
                return e.disableInteractions ? null : i.createElement("div", {
                    className: K.jumpToPresentBar
                }, i.createElement(d.FocusRing, {
                    offset: 4
                }, i.createElement("button", {
                    type: "button",
                    onClick: r,
                    className: K.barButtonMain
                }, function(e) {
                    switch (e) {
                        case 0:
                            return W.default.Messages.YOURE_VIEWING_OLDER_MESSAGES;
                        case 1:
                            return W.default.Messages.JUMP_BAR_VIEWING_REPLY;
                        default:
                            return (0, B.assertNever)(e)
                    }
                }(n))), null != r ? i.createElement(d.FocusRing, {
                    offset: 4
                }, i.createElement("button", {
                    type: "button",
                    onClick: r,
                    className: K.barButtonAlt
                }, function(e) {
                    switch (e) {
                        case 0:
                            return W.default.Messages.JUMP_TO_PRESENT;
                        case 1:
                            return W.default.Messages.JUMP_TO_ORIGINAL_MESSAGE;
                        default:
                            return (0, B.assertNever)(e)
                    }
                }(n), i.createElement(M.default, {
                    className: K.barButtonIcon
                }))) : i.createElement(d.Spinner, {
                    type: d.Spinner.Type.PULSING_ELLIPSIS,
                    className: K.spinner,
                    itemClassName: K.spinnerItem
                }))
            })
        },
        el = function(e) {
            var t = e.onClick,
                n = e.loading;
            return i.createElement(L.MessagesInteractionContext.Consumer, null, function(e) {
                return e.disableInteractions ? null : i.createElement(d.Clickable, {
                    className: K.messagesErrorBar,
                    onClick: t,
                    focusProps: {
                        offset: {
                            top: 4,
                            right: 4,
                            bottom: 12,
                            left: 4
                        }
                    }
                }, i.createElement("div", {
                    className: K.barButtonMain
                }, W.default.Messages.MESSAGES_FAILED_TO_LOAD), n ? i.createElement(d.Spinner, {
                    type: d.Spinner.Type.PULSING_ELLIPSIS,
                    className: K.spinner,
                    itemClassName: K.spinnerItem
                }) : i.createElement("div", {
                    className: K.barButtonAlt
                }, W.default.Messages.MESSAGES_FAILED_TO_LOAD_TRY_AGAIN))
            })
        };

    function ec(e) {
        var t = e.content,
            n = e.channelId,
            r = Z(i.useState(function() {
                return (0, D.uid)("NewMessagesBarJumpToNewMessages_")
            }), 1)[0],
            o = i.useCallback(function() {
                var e = b.default.ackMessageId(n);
                null != e ? _.default.jumpToMessage({
                    channelId: n,
                    messageId: e,
                    offset: 1,
                    context: "Mark As Read"
                }) : _.default.jumpToMessage({
                    channelId: n,
                    messageId: F.default.castChannelIdAsMessageId(n),
                    offset: 1,
                    context: "Mark As Read"
                })
            }, [n]),
            a = i.useCallback(function() {
                (0, E.ack)(n)
            }, [n]),
            s = i.useContext(L.MessagesInteractionContext).disableInteractions;
        return s ? null : i.createElement("div", {
            className: u()(K.newMessagesBar, X({}, K.disableInteractions, s))
        }, i.createElement(d.FocusRing, {
            offset: 4
        }, i.createElement("button", {
            type: "button",
            className: K.barButtonMain,
            onClick: o,
            "aria-label": W.default.Messages.JUMP_TO_LAST_UNREAD_MESSAGE,
            "aria-describedby": r
        }, i.createElement("span", {
            id: r,
            className: K.span
        }, t))), i.createElement(d.FocusRing, {
            offset: 4
        }, i.createElement("button", {
            type: "button",
            onClick: a,
            className: K.barButtonAlt
        }, W.default.Messages.MARK_AS_READ, i.createElement(U.default, {
            className: K.barButtonIcon
        }))))
    }

    function ef(e) {
        var t, n, r, o, a = e.channel,
            s = e.content,
            p = e.scrollManager,
            m = i.useContext(L.MessagesInteractionContext).disableInteractions,
            v = Z(i.useState(null), 2),
            g = v[0],
            A = v[1],
            R = i.useRef(null),
            C = Z(i.useState(null), 2),
            P = C[0],
            D = C[1],
            j = i.useRef(null),
            H = (0, f.useStateFromStoresArray)([T.default], function() {
                var e;
                return null !== (e = T.default.summaries(a.id)) && void 0 !== e ? e : []
            }, [a]),
            Y = (0, I.default)(H);
        i.useEffect(function() {
            !l().isEqual(Y, H) && G.default.track(V.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: H.length,
                message_counts: H.map(function(e) {
                    return e.count
                }),
                start_message_ids: H.map(function(e) {
                    return e.startId
                }),
                end_message_ids: H.map(function(e) {
                    return e.endId
                }),
                num_participants: H.map(function(e) {
                    return e.people.length
                }),
                guild_id: a.guild_id,
                channel_id: a.id,
                channel_type: a.type
            })
        }, [H, Y, a.guild_id, a.id, a.type]);
        var z = (0, f.useStateFromStores)([N.default], function() {
                var e;
                return null !== (e = null == H ? void 0 : H.map(function(e) {
                    var t;
                    return null === (t = e.people) || void 0 === t ? void 0 : t.map(function(e) {
                        var t;
                        return null !== (t = N.default.getUser(e)) && void 0 !== t ? t : null
                    }).filter(B.isNotNullish)
                })) && void 0 !== e ? e : []
            }, [H], ed),
            q = null !== (n = (0, f.useStateFromStores)([T.default], function() {
                return T.default.visibleSummaryIndex()
            })) && void 0 !== n ? n : -1,
            Q = null == H ? void 0 : null === (t = H[q]) || void 0 === t ? void 0 : t.topic;
        null == Q && null == g && (null == H ? void 0 : H.length) >= 1 && (Q = null === (r = H[0]) || void 0 === r ? void 0 : r.topic);
        var J = i.useMemo(function() {
                return l().debounce(function(e) {
                    var t;
                    A(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
                }, 64)
            }, [A]),
            $ = i.useMemo(function() {
                return l().throttle(function() {
                    (0, O.setHighlightedSummary)(null)
                }, 1200, {
                    trailing: !1
                })
            }, []),
            ee = i.useCallback(function(e) {
                $(), J(e)
            }, [J, $]),
            et = Z(i.useState(!1), 2),
            en = et[0],
            er = et[1],
            eo = i.useCallback(function() {
                G.default.track(V.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                    topics_dropdown_open: !en,
                    num_summaries: H.length,
                    message_counts: H.map(function(e) {
                        return e.count
                    }),
                    start_message_ids: H.map(function(e) {
                        return e.startId
                    }),
                    end_message_ids: H.map(function(e) {
                        return e.endId
                    }),
                    num_participants: H.map(function(e) {
                        return e.people.length
                    }),
                    guild_id: a.guild_id,
                    channel_id: a.id,
                    channel_type: a.type
                }), er(!en)
            }, [en, H, er, a]),
            ei = i.useCallback(function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.SummariesTopicClickedSource.PILL_DROPDOWN,
                    n = H[e];
                if (null != n) {
                    (0, O.setSelectedSummary)(a.id, n.id), (0, O.setHighlightedSummary)(a.id, n.id);
                    var r = function() {
                        p.removeScrollCompleteCallback(r), setTimeout(function() {
                            p.addAutomaticAnchorCallback(ee, !1)
                        }, 100)
                    };
                    p.removeAutomaticAnchorCallback(ee), p.addScrollCompleteCallback(r), G.default.track(V.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    }), _.default.jumpToMessage({
                        channelId: a.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: y.JumpTypes.ANIMATED,
                        context: "Summary Jump"
                    })
                }
            }, [H, a, ee, p]),
            ea = i.useCallback(function(e) {
                er(e);
                var t, n = null === (t = j.current) || void 0 === t ? void 0 : t.scrollTop;
                null != n && D(n)
            }, []);
        i.useEffect(function() {
            if (null != P && en) {
                var e;
                null === (e = j.current) || void 0 === e || e.scrollTo({
                    top: P
                })
            }
        }, [P, en]);
        var eu = i.useCallback(function(e) {
            var t;
            !((0, c.isElement)(e.target) && (null === (t = R.current) || void 0 === t ? void 0 : t.contains(e.target))) && (en && G.default.track(V.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !1,
                num_summaries: H.length,
                message_counts: H.map(function(e) {
                    return e.count
                }),
                start_message_ids: H.map(function(e) {
                    return e.startId
                }),
                end_message_ids: H.map(function(e) {
                    return e.endId
                }),
                num_participants: H.map(function(e) {
                    return e.people.length
                }),
                guild_id: a.guild_id,
                channel_id: a.id,
                channel_type: a.type
            }), ea(!1))
        }, [en, H, a, ea]);
        i.useEffect(function() {
            return p.addAutomaticAnchorCallback(ee),
                function() {
                    p.removeAutomaticAnchorCallback(ee)
                }
        }, [p, ee]), i.useEffect(function() {
            (0, O.fetchSummaries)(a.id)
        }, [a.id]), i.useEffect(function() {
            return document.addEventListener("mousedown", eu),
                function() {
                    document.removeEventListener("mousedown", eu)
                }
        }, [eu]);
        var es = i.useMemo(function() {
                return i.createElement(S.default, {
                    channel: a,
                    summaries: H,
                    summariesMembers: z,
                    selectTopic: ei,
                    setOpen: ea
                })
            }, [H, z, ei, ea, a]),
            el = i.useCallback(function() {
                var e = b.default.ackMessageId(a.id);
                null != e ? _.default.jumpToMessage({
                    channelId: a.id,
                    messageId: e,
                    offset: 1,
                    context: "Mark As Read"
                }) : _.default.jumpToMessage({
                    channelId: a.id,
                    messageId: F.default.castChannelIdAsMessageId(a.id),
                    offset: 1,
                    context: "Mark As Read"
                })
            }, [a.id]),
            ec = i.useCallback(function() {
                (0, E.ack)(a.id)
            }, [a.id]),
            ef = W.default.Messages.SUMMARIES_NO_SUMMARIES;
        return H.length > 0 && (ef = "" === Q || null == Q ? W.default.Messages.SUMMARIES_VIEW_ALL : Q), m ? null : i.createElement("div", {
            ref: R,
            className: u()(K.newTopicsBarContainer, K.containerMarginTop)
        }, i.createElement("div", {
            className: u()(K.newTopicsBarTopicSection)
        }, i.createElement(d.Clickable, {
            className: K.newTopicsBarTextClickable,
            "aria-label": W.default.Messages.SUMMARY_PILL,
            onClick: eo
        }, i.createElement("div", {
            className: u()((X(o = {}, K.newTopicsBarTextUnselected, !en), X(o, K.newTopicsBarTextSelected, en), o))
        }, i.createElement(k.default, {
            className: K.newTopicsBarIcon,
            width: 16,
            height: 16
        }), i.createElement(d.Text, {
            variant: "text-sm/medium",
            className: u()(K.newTopicsBarCompact, K.newTopicsBarText)
        }, ef), i.createElement(M.default, {
            width: 16,
            height: 16,
            direction: M.default.Directions.DOWN,
            className: K.newTopicsBarCaret
        })))), i.createElement(d.Clickable, {
            onClick: el,
            className: u()(K.barButtonMain, K.newTopicsBarInitial)
        }, s), i.createElement(d.Clickable, {
            onClick: ec,
            className: u()(K.barButtonAlt, K.flexEnd)
        }, i.createElement("div", {
            className: K.newTopicsBarCompact
        }, W.default.Messages.MARK_AS_READ), i.createElement(U.default, {
            className: K.barButtonIcon
        })), en && i.createElement("div", {
            className: K.topicsDropdown
        }, i.createElement("div", {
            className: K.topicsDropdownHeading
        }, i.createElement("div", {
            className: K.topicsDropdownHeadingText
        }, i.createElement(k.default, {
            className: K.topicsPillHeadingIcon,
            width: 18,
            height: 20
        }), i.createElement(d.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1
        }, W.default.Messages.SUMMARIES), i.createElement(h.default, {
            className: K.summariesBetaTag
        })), i.createElement(d.Clickable, {
            "aria-label": W.default.Messages.CLOSE,
            onClick: eo,
            className: K.topicsDropdownClose
        }, i.createElement(w.default, null))), i.createElement(d.Scroller, {
            ref: j,
            className: K.topicsScroller,
            fade: !0
        }, es)))
    }

    function ed(e, t) {
        return null != t && e.length === t.length && !e.some(function(e, n) {
            var r, o;
            return r = e, null == (o = t[n]) || r.length !== o.length || !!r.some(function(e, t) {
                return o[t] !== e
            })
        })
    }

    function e_(e) {
        var t, n, r, o, a = e.channel,
            s = e.scrollManager,
            E = i.useContext(L.MessagesInteractionContext).disableInteractions,
            p = Z(i.useState(null), 2),
            m = p[0],
            v = p[1],
            g = i.useRef(null),
            A = Z(i.useState(null), 2),
            b = A[0],
            R = A[1],
            C = i.useRef(null),
            P = (0, f.useStateFromStoresArray)([T.default], function() {
                var e;
                return null !== (e = T.default.summaries(a.id)) && void 0 !== e ? e : []
            }, [a]),
            D = (0, I.default)(P);
        i.useEffect(function() {
            !l().isEqual(D, P) && G.default.track(V.AnalyticEvents.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: P.length,
                message_counts: P.map(function(e) {
                    return e.count
                }),
                start_message_ids: P.map(function(e) {
                    return e.startId
                }),
                end_message_ids: P.map(function(e) {
                    return e.endId
                }),
                num_participants: P.map(function(e) {
                    return e.people.length
                }),
                guild_id: a.guild_id,
                channel_id: a.id,
                channel_type: a.type
            })
        }, [P, D, a.guild_id, a.id, a.type]);
        var U = (0, f.useStateFromStores)([N.default], function() {
                var e;
                return null !== (e = null == P ? void 0 : P.map(function(e) {
                    var t;
                    return null === (t = e.people) || void 0 === t ? void 0 : t.map(function(e) {
                        var t;
                        return null !== (t = N.default.getUser(e)) && void 0 !== t ? t : null
                    }).filter(B.isNotNullish)
                })) && void 0 !== e ? e : []
            }, [P], ed),
            j = null !== (n = (0, f.useStateFromStores)([T.default], function() {
                return T.default.visibleSummaryIndex()
            })) && void 0 !== n ? n : -1,
            F = null == P ? void 0 : null === (t = P[j]) || void 0 === t ? void 0 : t.topic;
        null == F && null == m && (null == P ? void 0 : P.length) >= 1 && (F = null === (r = P[0]) || void 0 === r ? void 0 : r.topic);
        var H = i.useMemo(function() {
                return l().get(P, j - 1)
            }, [j, P]),
            Y = i.useMemo(function() {
                return l().get(P, j + 1)
            }, [j, P]),
            z = i.useMemo(function() {
                return l().debounce(function(e) {
                    var t;
                    v(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
                }, 64)
            }, [v]),
            q = i.useMemo(function() {
                return l().throttle(function() {
                    (0, O.setHighlightedSummary)(null)
                }, 1200, {
                    trailing: !1
                })
            }, []),
            Q = i.useCallback(function(e) {
                q(), z(e)
            }, [z, q]),
            J = Z(i.useState(!1), 2),
            $ = J[0],
            ee = J[1],
            et = i.useCallback(function() {
                G.default.track(V.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                    topics_dropdown_open: !$,
                    num_summaries: P.length,
                    message_counts: P.map(function(e) {
                        return e.count
                    }),
                    start_message_ids: P.map(function(e) {
                        return e.startId
                    }),
                    end_message_ids: P.map(function(e) {
                        return e.endId
                    }),
                    num_participants: P.map(function(e) {
                        return e.people.length
                    }),
                    guild_id: a.guild_id,
                    channel_id: a.id,
                    channel_type: a.type
                }), ee(!$)
            }, [$, P, ee, a]),
            en = i.useCallback(function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.SummariesTopicClickedSource.PILL_DROPDOWN,
                    n = P[e];
                if (null != n) {
                    (0, O.setSelectedSummary)(a.id, n.id), (0, O.setHighlightedSummary)(a.id, n.id);
                    var r = function() {
                        s.removeScrollCompleteCallback(r), setTimeout(function() {
                            s.addAutomaticAnchorCallback(Q, !1)
                        }, 100)
                    };
                    s.removeAutomaticAnchorCallback(Q), s.addScrollCompleteCallback(r), G.default.track(V.AnalyticEvents.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    }), _.default.jumpToMessage({
                        channelId: a.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: y.JumpTypes.ANIMATED,
                        context: "Summary Jump"
                    })
                }
            }, [P, a, Q, s]),
            er = i.useCallback(function() {
                en(j - 1, x.SummariesTopicClickedSource.PILL_NEXT_ARROW)
            }, [en, j]),
            eo = i.useCallback(function() {
                en(j + 1, x.SummariesTopicClickedSource.PILL_PREVIOUS_ARROW)
            }, [j, en]),
            ei = i.useCallback(function(e) {
                ee(e);
                var t, n = null === (t = C.current) || void 0 === t ? void 0 : t.scrollTop;
                null != n && R(n)
            }, []);
        i.useEffect(function() {
            if (null != b && $) {
                var e;
                null === (e = C.current) || void 0 === e || e.scrollTo({
                    top: b
                })
            }
        }, [b, $]);
        var ea = i.useCallback(function(e) {
            var t;
            !((0, c.isElement)(e.target) && (null === (t = g.current) || void 0 === t ? void 0 : t.contains(e.target))) && ($ && G.default.track(V.AnalyticEvents.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !1,
                num_summaries: P.length,
                message_counts: P.map(function(e) {
                    return e.count
                }),
                start_message_ids: P.map(function(e) {
                    return e.startId
                }),
                end_message_ids: P.map(function(e) {
                    return e.endId
                }),
                num_participants: P.map(function(e) {
                    return e.people.length
                }),
                guild_id: a.guild_id,
                channel_id: a.id,
                channel_type: a.type
            }), ei(!1))
        }, [$, P, a, ei]);
        i.useEffect(function() {
            return s.addAutomaticAnchorCallback(Q),
                function() {
                    s.removeAutomaticAnchorCallback(Q)
                }
        }, [s, Q]), i.useEffect(function() {
            (0, O.fetchSummaries)(a.id)
        }, [a.id]), i.useEffect(function() {
            return document.addEventListener("mousedown", ea),
                function() {
                    document.removeEventListener("mousedown", ea)
                }
        }, [ea]);
        var eu = i.useMemo(function() {
            return i.createElement(S.default, {
                channel: a,
                summaries: P,
                summariesMembers: U,
                selectTopic: en,
                setOpen: ei
            })
        }, [P, U, en, ei, a]);
        if (!(0, f.useStateFromStores)([T.default], function() {
                return T.default.shouldShowTopicsBar()
            })) return null;
        var es = W.default.Messages.SUMMARIES_NO_SUMMARIES;
        return P.length > 0 && (es = "" === F || null == F ? W.default.Messages.SUMMARIES_VIEW_ALL : F), E ? null : i.createElement("div", {
            ref: g,
            className: u()(K.topicsPillContainer, K.containerMarginTop)
        }, i.createElement("div", {
            className: K.topicsPill
        }, i.createElement(d.Clickable, {
            className: K.topicsPillText,
            "aria-label": W.default.Messages.SUMMARY_PILL,
            onClick: et
        }, i.createElement("div", {
            className: u()((X(o = {}, K.topicsPillTextUnselected, !$), X(o, K.topicsPillTextSelected, $), o))
        }, i.createElement(k.default, {
            className: K.topicsPillSummaryIcon,
            width: 16,
            height: 16
        }), i.createElement(d.Text, {
            className: K.topicsPillTextTitle,
            variant: "text-sm/medium"
        }, es), i.createElement(M.default, {
            width: 16,
            height: 16,
            direction: M.default.Directions.DOWN,
            className: K.topicsPillDropdownCaret
        }))), i.createElement("div", {
            className: K.topicsPillCarets
        }, i.createElement(d.Clickable, {
            "aria-label": W.default.Messages.SUMMARY_PILL_NEXT,
            onClick: eo,
            className: u()(K.topicsPillCaret, K.topicsCaretLeft, X({}, K.topicsPillCaretDisabled, null == Y))
        }, i.createElement(M.default, {
            width: 16,
            height: 16,
            direction: M.default.Directions.UP
        })), i.createElement(d.Clickable, {
            "aria-label": W.default.Messages.SUMMARY_PILL_PREVIOUS,
            onClick: er,
            className: u()(K.topicsPillCaret, K.topicsCaretRight, X({}, K.topicsPillCaretDisabled, null == H))
        }, i.createElement(M.default, {
            width: 16,
            height: 16,
            direction: M.default.Directions.DOWN
        })))), $ && i.createElement("div", {
            className: K.topicsDropdown
        }, i.createElement("div", {
            className: K.topicsDropdownHeading
        }, i.createElement("div", {
            className: K.topicsDropdownHeadingText
        }, i.createElement(k.default, {
            className: K.topicsPillHeadingIcon,
            width: 18,
            height: 20
        }), i.createElement(d.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1
        }, W.default.Messages.SUMMARIES), i.createElement(h.default, {
            className: K.summariesBetaTag
        })), i.createElement(d.Clickable, {
            "aria-label": W.default.Messages.CLOSE,
            onClick: et,
            className: K.topicsDropdownClose
        }, i.createElement(w.default, null))), i.createElement(d.Scroller, {
            ref: C,
            className: K.topicsScroller,
            fade: !0
        }, eu)))
    }
    var eE = function(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return i.createElement("div", {
                className: K.tooltip
            }, i.createElement(d.Text, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: K.tooltipEmojiName
            }, e), n && i.createElement("div", {
                className: K.tooltipPremiumContent
            }, i.createElement(g.default, {
                isSelected: !1
            }), i.createElement(d.Text, {
                className: K.clickCTA,
                color: "text-muted",
                variant: "text-sm/normal"
            }, W.default.Messages.EMBEDDED_ACTIVITIES_PREMIUM_TIER_CUSTOM_EMOJI)), t && i.createElement(d.Text, {
                className: K.clickCTA,
                color: "text-muted",
                variant: "text-sm/normal"
            }, W.default.Messages.EMOJI_TOOLTIP_CLICK_CTA))
        },
        ep = function(e) {
            var t = e.children,
                n = e.className;
            return i.createElement("div", {
                className: u()(K.popoutContainer, n)
            }, t)
        },
        em = function(e) {
            var t = e.className;
            return i.createElement(ep, {
                className: t
            }, i.createElement("div", {
                className: K.popoutLoadingBackground
            }, i.createElement("div", {
                className: K.popoutLoadingForeground
            })))
        }
}