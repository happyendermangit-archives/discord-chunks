function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("716241"),
        d = n("574073"),
        c = n("529805"),
        f = n("393414"),
        p = n("300322"),
        m = n("967241"),
        h = n("377253"),
        x = n("116320"),
        E = n("381546"),
        y = n("49111"),
        g = n("782340"),
        S = n("731851");

    function C(e) {
        let {
            channel: t,
            message: n,
            replyChainLength: a
        } = e;
        return l.useEffect(() => {
            (0, u.trackWithMetadata)(y.AnalyticEvents.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (".concat(3, ")"),
                reply_chain_length: a + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            })
        }, [t]), (0, i.jsxs)(o.Clickable, {
            onClick: function() {
                (0, c.deletePendingReply)(t.id), (0, m.openThreadSidebarForCreating)(t, n, "Reply Chain Nudge")
            },
            className: S.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [(0, i.jsx)(o.Text, {
                color: "header-secondary",
                className: S.text,
                variant: "text-sm/normal",
                children: g.default.Messages.THREAD_REPLY_SUGGESTION.format({
                    count: Math.min(10, a + 1)
                })
            }), (0, i.jsx)(o.Text, {
                color: "text-link",
                className: S.createThreadButton,
                variant: "text-sm/semibold",
                children: g.default.Messages.CREATE_THREAD
            })]
        })
    }

    function I(e) {
        let {
            reply: t,
            chatInputType: n
        } = e, {
            channel: l,
            message: a,
            shouldMention: u,
            showMentionToggle: m
        } = t, {
            nick: I,
            colorString: _,
            colorRoleName: T
        } = (0, d.default)(a), v = function(e, t) {
            let n = e.id,
                i = t.id;
            return (0, r.useStateFromStores)([h.default], () => {
                let e = i;
                for (let t = 0; t < 10; t++) {
                    let i = h.default.getMessage(n, e);
                    if ((null == i ? void 0 : i.type) !== y.MessageTypes.REPLY || null == i.messageReference) return t;
                    e = i.messageReference.message_id
                }
                return 10
            }, [n, i])
        }(l, a), N = (0, p.useCanStartPublicThread)(l, a), A = n.showThreadPromptOnReply && v >= 2 && N;

        function O(e) {
            e.stopPropagation(), (0, c.setPendingReplyShouldMention)(l.id, !u)
        }
        return (0, i.jsx)("div", {
            className: S.clipContainer,
            children: (0, i.jsxs)("div", {
                className: S.container,
                children: [(0, i.jsxs)("div", {
                    className: S.replyBar,
                    children: [(0, i.jsx)(o.Clickable, {
                        onClick: () => (0, f.transitionTo)(y.Routes.CHANNEL(l.getGuildId(), l.id, a.id)),
                        focusProps: {
                            offset: {
                                top: -8,
                                right: -4,
                                bottom: -8,
                                left: -4
                            }
                        },
                        children: (0, i.jsx)(o.Text, {
                            color: "header-secondary",
                            className: s(S.text, S.replyLabel),
                            variant: "text-sm/normal",
                            children: g.default.Messages.REPLYING_TO.format({
                                userHook: (e, t) => (0, i.jsx)(o.NameWithRole, {
                                    className: S.name,
                                    name: I,
                                    color: _,
                                    roleName: T
                                }, t)
                            })
                        })
                    }), (0, i.jsxs)("div", {
                        className: S.actions,
                        children: [m && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(o.Tooltip, {
                                text: u ? g.default.Messages.REPLY_MENTION_ON_TOOLTIP : g.default.Messages.REPLY_MENTION_OFF_TOOLTIP,
                                children: e => {
                                    let {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onFocus: l,
                                        onBlur: a
                                    } = e;
                                    return (0, i.jsx)(o.Clickable, {
                                        role: "switch",
                                        "aria-checked": u,
                                        onClick: O,
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onFocus: l,
                                        onBlur: a,
                                        children: (0, i.jsxs)(o.Text, {
                                            variant: "text-sm/bold",
                                            color: u ? "text-link" : "text-muted",
                                            className: S.mentionButton,
                                            children: [(0, i.jsx)(x.default, {
                                                "aria-label": g.default.Messages.MENTION,
                                                className: S.mentionIcon
                                            }), u ? g.default.Messages.REPLY_MENTION_ON : g.default.Messages.REPLY_MENTION_OFF]
                                        })
                                    })
                                }
                            }), (0, i.jsx)("div", {
                                className: S.separator,
                                "aria-hidden": !0
                            })]
                        }), (0, i.jsx)(o.Clickable, {
                            className: S.closeButton,
                            onClick: function(e) {
                                e.stopPropagation(), (0, c.deletePendingReply)(l.id)
                            },
                            children: (0, i.jsx)(E.default, {
                                className: S.closeIcon
                            })
                        })]
                    })]
                }), A && (0, i.jsx)(C, {
                    channel: l,
                    message: a,
                    replyChainLength: v
                })]
            })
        })
    }
}