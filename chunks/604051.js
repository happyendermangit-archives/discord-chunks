function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("140817"),
        l = n("970930"),
        c = n("30730"),
        f = n("163291"),
        d = n("838726"),
        _ = n("330863"),
        E = n("204394"),
        p = n("238470"),
        m = n("437404"),
        y = n("281767"),
        I = n("941504"),
        h = n("970999");

    function O(e) {
        var t = e.channel,
            n = e.message,
            o = e.replyChainLength;
        return r.useEffect(function() {
            (0, s.trackWithMetadata)(y.AnalyticEvents.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (".concat(3, ")"),
                reply_chain_length: o + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            })
        }, [t]), r.createElement(u.Clickable, {
            onClick: function() {
                (0, c.deletePendingReply)(t.id), (0, _.openThreadSidebarForCreating)(t, n, "Reply Chain Nudge")
            },
            className: h.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            }
        }, r.createElement(u.Text, {
            color: "header-secondary",
            className: h.text,
            variant: "text-sm/normal"
        }, I.default.Messages.THREAD_REPLY_SUGGESTION.format({
            count: Math.min(10, o + 1)
        })), r.createElement(u.Text, {
            color: "text-link",
            className: h.createThreadButton,
            variant: "text-sm/semibold"
        }, I.default.Messages.CREATE_THREAD))
    }

    function T(e) {
        var t, n, o, s, _ = e.reply,
            T = e.chatInputType,
            S = _.channel,
            v = _.message,
            g = _.shouldMention,
            A = _.showMentionToggle,
            b = (0, l.default)(v),
            N = b.nick,
            R = b.colorString,
            C = b.colorRoleName;
        var P = (t = S, n = v, o = t.id, s = n.id, (0, a.useStateFromStores)([E.default], function() {
                for (var e = s, t = 0; t < 10; t++) {
                    var n = E.default.getMessage(o, e);
                    if ((null == n ? void 0 : n.type) !== y.MessageTypes.REPLY || null == n.messageReference) return t;
                    e = n.messageReference.message_id
                }
                return 10
            }, [o, s])),
            D = (0, d.useCanStartPublicThread)(S, v),
            L = T.showThreadPromptOnReply && P >= 2 && D;

        function M(e) {
            e.stopPropagation(), (0, c.setPendingReplyShouldMention)(S.id, !g)
        }
        return r.createElement("div", {
            className: h.clipContainer
        }, r.createElement("div", {
            className: h.container
        }, r.createElement("div", {
            className: h.replyBar
        }, r.createElement(u.Clickable, {
            onClick: function() {
                return (0, f.transitionTo)(y.Routes.CHANNEL(S.getGuildId(), S.id, v.id))
            },
            focusProps: {
                offset: {
                    top: -8,
                    right: -4,
                    bottom: -8,
                    left: -4
                }
            }
        }, r.createElement(u.Text, {
            color: "header-secondary",
            className: i()(h.text, h.replyLabel),
            variant: "text-sm/normal"
        }, I.default.Messages.REPLYING_TO.format({
            userHook: function(e, t) {
                return r.createElement(u.NameWithRole, {
                    key: t,
                    className: h.name,
                    name: N,
                    color: R,
                    roleName: C
                })
            }
        }))), r.createElement("div", {
            className: h.actions
        }, A && r.createElement(r.Fragment, null, r.createElement(u.Tooltip, {
            text: g ? I.default.Messages.REPLY_MENTION_ON_TOOLTIP : I.default.Messages.REPLY_MENTION_OFF_TOOLTIP
        }, function(e) {
            var t = e.onMouseEnter,
                n = e.onMouseLeave,
                o = e.onFocus,
                i = e.onBlur;
            return r.createElement(u.Clickable, {
                role: "switch",
                "aria-checked": g,
                onClick: M,
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: o,
                onBlur: i
            }, r.createElement(u.Text, {
                variant: "text-sm/bold",
                color: g ? "text-link" : "text-muted",
                className: h.mentionButton
            }, r.createElement(p.default, {
                "aria-label": I.default.Messages.MENTION,
                className: h.mentionIcon
            }), g ? I.default.Messages.REPLY_MENTION_ON : I.default.Messages.REPLY_MENTION_OFF))
        }), r.createElement("div", {
            className: h.separator,
            "aria-hidden": !0
        })), r.createElement(u.Clickable, {
            className: h.closeButton,
            onClick: function(e) {
                e.stopPropagation(), (0, c.deletePendingReply)(S.id)
            }
        }, r.createElement(m.default, {
            className: h.closeIcon
        })))), L && r.createElement(O, {
            channel: S,
            message: v,
            replyChainLength: P
        })))
    }
}