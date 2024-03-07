function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("716241"),
        d = n("574073"),
        c = n("529805"),
        f = n("393414"),
        m = n("300322"),
        p = n("967241"),
        h = n("377253"),
        E = n("116320"),
        g = n("381546"),
        S = n("49111"),
        C = n("782340"),
        T = n("731851");

    function v(e) {
        let {
            channel: t,
            message: n,
            replyChainLength: a
        } = e;
        return i.useEffect(() => {
            (0, u.trackWithMetadata)(S.AnalyticEvents.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (".concat(3, ")"),
                reply_chain_length: a + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            })
        }, [t]), (0, l.jsxs)(o.Clickable, {
            onClick: function() {
                (0, c.deletePendingReply)(t.id), (0, p.openThreadSidebarForCreating)(t, n, "Reply Chain Nudge")
            },
            className: T.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [(0, l.jsx)(o.Text, {
                color: "header-secondary",
                className: T.text,
                variant: "text-sm/normal",
                children: C.default.Messages.THREAD_REPLY_SUGGESTION.format({
                    count: Math.min(10, a + 1)
                })
            }), (0, l.jsx)(o.Text, {
                color: "text-link",
                className: T.createThreadButton,
                variant: "text-sm/semibold",
                children: C.default.Messages.CREATE_THREAD
            })]
        })
    }

    function I(e) {
        let {
            reply: t,
            chatInputType: n
        } = e, {
            channel: i,
            message: a,
            shouldMention: u,
            showMentionToggle: p
        } = t, {
            nick: I,
            colorString: _,
            colorRoleName: N
        } = (0, d.default)(a), A = function(e, t) {
            let n = e.id,
                l = t.id;
            return (0, r.useStateFromStores)([h.default], () => {
                let e = l;
                for (let t = 0; t < 10; t++) {
                    let l = h.default.getMessage(n, e);
                    if ((null == l ? void 0 : l.type) !== S.MessageTypes.REPLY || null == l.messageReference) return t;
                    e = l.messageReference.message_id
                }
                return 10
            }, [n, l])
        }(i, a), x = (0, m.useCanStartPublicThread)(i, a), y = n.showThreadPromptOnReply && A >= 2 && x;

        function O(e) {
            e.stopPropagation(), (0, c.setPendingReplyShouldMention)(i.id, !u)
        }
        return (0, l.jsx)("div", {
            className: T.clipContainer,
            children: (0, l.jsxs)("div", {
                className: T.container,
                children: [(0, l.jsxs)("div", {
                    className: T.replyBar,
                    children: [(0, l.jsx)(o.Clickable, {
                        onClick: () => (0, f.transitionTo)(S.Routes.CHANNEL(i.getGuildId(), i.id, a.id)),
                        focusProps: {
                            offset: {
                                top: -8,
                                right: -4,
                                bottom: -8,
                                left: -4
                            }
                        },
                        children: (0, l.jsx)(o.Text, {
                            color: "header-secondary",
                            className: s(T.text, T.replyLabel),
                            variant: "text-sm/normal",
                            children: C.default.Messages.REPLYING_TO.format({
                                userHook: (e, t) => (0, l.jsx)(o.NameWithRole, {
                                    className: T.name,
                                    name: I,
                                    color: _,
                                    roleName: N
                                }, t)
                            })
                        })
                    }), (0, l.jsxs)("div", {
                        className: T.actions,
                        children: [p && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(o.Tooltip, {
                                text: u ? C.default.Messages.REPLY_MENTION_ON_TOOLTIP : C.default.Messages.REPLY_MENTION_OFF_TOOLTIP,
                                children: e => {
                                    let {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onFocus: i,
                                        onBlur: a
                                    } = e;
                                    return (0, l.jsx)(o.Clickable, {
                                        role: "switch",
                                        "aria-checked": u,
                                        onClick: O,
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onFocus: i,
                                        onBlur: a,
                                        children: (0, l.jsxs)(o.Text, {
                                            variant: "text-sm/bold",
                                            color: u ? "text-link" : "text-muted",
                                            className: T.mentionButton,
                                            children: [(0, l.jsx)(E.default, {
                                                "aria-label": C.default.Messages.MENTION,
                                                className: T.mentionIcon
                                            }), u ? C.default.Messages.REPLY_MENTION_ON : C.default.Messages.REPLY_MENTION_OFF]
                                        })
                                    })
                                }
                            }), (0, l.jsx)("div", {
                                className: T.separator,
                                "aria-hidden": !0
                            })]
                        }), (0, l.jsx)(o.Clickable, {
                            className: T.closeButton,
                            onClick: function(e) {
                                e.stopPropagation(), (0, c.deletePendingReply)(i.id)
                            },
                            children: (0, l.jsx)(g.default, {
                                className: T.closeIcon
                            })
                        })]
                    })]
                }), y && (0, l.jsx)(v, {
                    channel: i,
                    message: a,
                    replyChainLength: A
                })]
            })
        })
    }
}