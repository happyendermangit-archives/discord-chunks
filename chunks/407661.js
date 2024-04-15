function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("367907"),
        d = n("739566"),
        _ = n("623292"),
        c = n("703656"),
        E = n("665906"),
        I = n("488131"),
        T = n("375954"),
        f = n("36082"),
        S = n("696202"),
        A = n("981631"),
        h = n("689938"),
        m = n("970999");

    function N(e) {
        let {
            channel: t,
            message: n,
            replyChainLength: s
        } = e;
        return r.useEffect(() => {
            (0, u.trackWithMetadata)(A.AnalyticEvents.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (".concat(3, ")"),
                reply_chain_length: s + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            })
        }, [t]), (0, i.jsxs)(l.Clickable, {
            onClick: function() {
                (0, _.deletePendingReply)(t.id), (0, I.openThreadSidebarForCreating)(t, n, "Reply Chain Nudge")
            },
            className: m.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [(0, i.jsx)(l.Text, {
                color: "header-secondary",
                className: m.text,
                variant: "text-sm/normal",
                children: h.default.Messages.THREAD_REPLY_SUGGESTION.format({
                    count: Math.min(10, s + 1)
                })
            }), (0, i.jsx)(l.Text, {
                color: "text-link",
                className: m.createThreadButton,
                variant: "text-sm/semibold",
                children: h.default.Messages.CREATE_THREAD
            })]
        })
    }

    function O(e) {
        let {
            reply: t,
            chatInputType: n
        } = e, {
            channel: r,
            message: s,
            shouldMention: u,
            showMentionToggle: I
        } = t, {
            nick: O,
            colorString: p,
            colorRoleName: R
        } = (0, d.default)(s), C = function(e, t) {
            let n = e.id,
                i = t.id;
            return (0, o.useStateFromStores)([T.default], () => {
                let e = i;
                for (let t = 0; t < 10; t++) {
                    let i = T.default.getMessage(n, e);
                    if ((null == i ? void 0 : i.type) !== A.MessageTypes.REPLY || null == i.messageReference) return t;
                    e = i.messageReference.message_id
                }
                return 10
            }, [n, i])
        }(r, s), g = (0, E.useCanStartPublicThread)(r, s), L = n.showThreadPromptOnReply && C >= 2 && g;

        function D(e) {
            e.stopPropagation(), (0, _.setPendingReplyShouldMention)(r.id, !u)
        }
        return (0, i.jsx)("div", {
            className: m.clipContainer,
            children: (0, i.jsxs)("div", {
                className: m.container,
                children: [(0, i.jsxs)("div", {
                    className: m.replyBar,
                    children: [(0, i.jsx)(l.Clickable, {
                        onClick: () => (0, c.transitionTo)(A.Routes.CHANNEL(r.getGuildId(), r.id, s.id)),
                        focusProps: {
                            offset: {
                                top: -8,
                                right: -4,
                                bottom: -8,
                                left: -4
                            }
                        },
                        children: (0, i.jsx)(l.Text, {
                            color: "header-secondary",
                            className: a()(m.text, m.replyLabel),
                            variant: "text-sm/normal",
                            children: h.default.Messages.REPLYING_TO.format({
                                userHook: (e, t) => (0, i.jsx)(l.NameWithRole, {
                                    className: m.name,
                                    name: O,
                                    color: p,
                                    roleName: R
                                }, t)
                            })
                        })
                    }), (0, i.jsxs)("div", {
                        className: m.actions,
                        children: [I && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.Tooltip, {
                                text: u ? h.default.Messages.REPLY_MENTION_ON_TOOLTIP : h.default.Messages.REPLY_MENTION_OFF_TOOLTIP,
                                children: e => {
                                    let {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onFocus: r,
                                        onBlur: s
                                    } = e;
                                    return (0, i.jsx)(l.Clickable, {
                                        role: "switch",
                                        "aria-checked": u,
                                        onClick: D,
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        onFocus: r,
                                        onBlur: s,
                                        children: (0, i.jsxs)(l.Text, {
                                            variant: "text-sm/bold",
                                            color: u ? "text-link" : "text-muted",
                                            className: m.mentionButton,
                                            children: [(0, i.jsx)(f.default, {
                                                "aria-label": h.default.Messages.MENTION,
                                                className: m.mentionIcon
                                            }), u ? h.default.Messages.REPLY_MENTION_ON : h.default.Messages.REPLY_MENTION_OFF]
                                        })
                                    })
                                }
                            }), (0, i.jsx)("div", {
                                className: m.separator,
                                "aria-hidden": !0
                            })]
                        }), (0, i.jsx)(l.Clickable, {
                            className: m.closeButton,
                            onClick: function(e) {
                                e.stopPropagation(), (0, _.deletePendingReply)(r.id)
                            },
                            children: (0, i.jsx)(S.default, {
                                className: m.closeIcon
                            })
                        })]
                    })]
                }), L && (0, i.jsx)(N, {
                    channel: r,
                    message: s,
                    replyChainLength: C
                })]
            })
        })
    }
}