function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReplyInput: function() {
            return I
        },
        ReactionPickerButton: function() {
            return _
        },
        default: function() {
            return v
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("273481"),
        o = n("77078"),
        u = n("841098"),
        d = n("850391"),
        c = n("149022"),
        f = n("681060"),
        p = n("219013"),
        m = n("233069"),
        h = n("882641"),
        x = n("964261"),
        E = n("49111"),
        y = n("782340"),
        g = n("789215");
    let S = (0, m.createChannelRecord)({
            id: "1",
            type: E.ChannelTypes.DM
        }),
        C = l.forwardRef(function(e, t) {
            let {
                placeholder: n,
                headerText: l,
                onEnter: a,
                showPopout: r,
                children: d,
                hide: c
            } = e, f = (0, u.default)();
            return (0, i.jsx)(o.Popout, {
                align: "right",
                position: "bottom",
                shouldShow: r,
                disablePointerEvents: !1,
                renderPopout: () => (0, i.jsx)("div", {
                    className: s([g.reply, "theme-".concat(f)]),
                    ref: t,
                    children: (0, i.jsx)(o.FocusLock, {
                        containerRef: t,
                        children: (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                className: g.replyHeader,
                                children: null != l ? l : y.default.Messages.CHAT
                            }), (0, i.jsx)(I, {
                                onEnter: e => {
                                    a(e), c()
                                },
                                placeholder: null != n ? n : y.default.Messages.CHAT
                            })]
                        })
                    })
                }),
                children: () => d
            })
        }),
        I = e => {
            let {
                placeholder: t,
                onEnter: n
            } = e, [a, s] = l.useState(""), [r, o] = l.useState((0, c.toRichValue)(""));
            return (0, i.jsx)(f.default, {
                placeholder: t,
                className: g.replyInput,
                showRemainingCharsAfterCount: -1,
                allowNewLines: !1,
                maxCharacterCount: x.MAX_CHAR_COUNT,
                channel: S,
                onChange: (e, t, n) => {
                    s(t), o(n)
                },
                type: d.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT,
                textValue: a,
                richValue: r,
                onSubmit: e => {
                    let {
                        value: t
                    } = e;
                    return t.length > x.MAX_CHAR_COUNT ? Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    }) : (n(t), Promise.resolve({
                        shouldClear: !0,
                        shouldRefocus: !1
                    }))
                },
                focused: !0,
                disableThemedBackground: !0,
                emojiPickerCloseOnModalOuterClick: !0,
                disabled: !1
            })
        },
        T = (e, t) => {
            l.useEffect(() => {
                let n = t => {
                        "Escape" === t.key && e()
                    },
                    i = n => {
                        var i;
                        null != n.target && !(null == t ? void 0 : null === (i = t.current) || void 0 === i ? void 0 : i.contains(null == n ? void 0 : n.target)) && e()
                    };
                return document.addEventListener("keydown", n), document.addEventListener("mousedown", i), () => {
                    document.removeEventListener("keydown", n), document.removeEventListener("mousedown", i)
                }
            }, [e, t])
        },
        _ = e => {
            let {
                onSelectEmoji: t,
                onClick: n
            } = e, a = (0, u.default)(), [s, r] = l.useState(!1), d = l.useRef(null);
            return T(() => r(!1), d), (0, i.jsx)(o.Popout, {
                align: "right",
                position: "top",
                shouldShow: s,
                disablePointerEvents: !1,
                renderPopout: () => (0, i.jsx)("div", {
                    className: "theme-".concat(a),
                    ref: d,
                    children: (0, i.jsx)(p.ReactionPicker, {
                        messageId: E.EMPTY_STRING_SNOWFLAKE_ID,
                        channel: S,
                        closePopout: () => {
                            r(!1)
                        },
                        onSelectEmoji: (e, n, i) => {
                            null != e && (t(e, n, i), r(!1))
                        }
                    })
                }),
                children: () => (0, i.jsx)(o.Tooltip, {
                    text: y.default.Messages.ADD_REACTION,
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: g.reaction,
                        children: (0, i.jsx)(h.default, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                null == n || n(), r(!0)
                            }
                        })
                    })
                })
            })
        };
    var v = e => {
        let {
            onInteraction: t,
            replyHeaderText: n,
            replyPlaceholder: a,
            showReact: u = !0,
            showReply: d = !0
        } = e, [c, f] = l.useState(!1), p = l.useRef(null);
        return T(() => f(!1), p), (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
                className: g.reactions,
                children: [u && (0, i.jsx)(_, {
                    onSelectEmoji: e => {
                        null != e && t({
                            interactionType: x.AtomicReactorInteractionTypes.ReactSubmit,
                            emoji: e,
                            reply: null
                        })
                    },
                    onClick: () => {
                        t({
                            interactionType: x.AtomicReactorInteractionTypes.ReactBegin,
                            emoji: null,
                            reply: null
                        }), f(!1)
                    }
                }), d && (0, i.jsx)(C, {
                    hide: () => f(!1),
                    ref: p,
                    headerText: n,
                    placeholder: a,
                    showPopout: c,
                    onEnter: e => {
                        t({
                            interactionType: x.AtomicReactorInteractionTypes.ReplySubmit,
                            emoji: null,
                            reply: e
                        })
                    },
                    children: (0, i.jsx)(o.Tooltip, {
                        text: y.default.Messages.MESSAGE_ACTION_REPLY,
                        children: e => (0, i.jsx)("button", {
                            ...e,
                            className: s(g.reaction, g.emojiButton),
                            onClick: () => {
                                t({
                                    interactionType: x.AtomicReactorInteractionTypes.ReplyBegin,
                                    emoji: null,
                                    reply: null
                                }), f(!0)
                            },
                            children: (0, i.jsx)(r.ArrowAngleLeftUpIcon, {})
                        })
                    })
                })]
            })
        })
    }
}