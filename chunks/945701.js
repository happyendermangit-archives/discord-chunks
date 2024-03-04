function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReplyInput: function() {
            return I
        },
        ReactionPickerButton: function() {
            return N
        },
        default: function() {
            return A
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("273481"),
        o = n("77078"),
        u = n("841098"),
        d = n("850391"),
        c = n("149022"),
        f = n("681060"),
        m = n("219013"),
        p = n("233069"),
        h = n("882641"),
        E = n("964261"),
        g = n("49111"),
        C = n("782340"),
        S = n("789215");
    let T = (0, p.createChannelRecord)({
            id: "1",
            type: g.ChannelTypes.DM
        }),
        v = i.forwardRef(function(e, t) {
            let {
                placeholder: n,
                headerText: i,
                onEnter: a,
                showPopout: r,
                children: d,
                hide: c
            } = e, f = (0, u.default)();
            return (0, l.jsx)(o.Popout, {
                align: "right",
                position: "bottom",
                shouldShow: r,
                disablePointerEvents: !1,
                renderPopout: () => (0, l.jsx)("div", {
                    className: s([S.reply, "theme-".concat(f)]),
                    ref: t,
                    children: (0, l.jsx)(o.FocusLock, {
                        containerRef: t,
                        children: (0, l.jsxs)("div", {
                            children: [(0, l.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                className: S.replyHeader,
                                children: null != i ? i : C.default.Messages.CHAT
                            }), (0, l.jsx)(I, {
                                onEnter: e => {
                                    a(e), c()
                                },
                                placeholder: null != n ? n : C.default.Messages.CHAT
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
            } = e, [a, s] = i.useState(""), [r, o] = i.useState((0, c.toRichValue)(""));
            return (0, l.jsx)(f.default, {
                placeholder: t,
                className: S.replyInput,
                showRemainingCharsAfterCount: -1,
                allowNewLines: !1,
                maxCharacterCount: E.MAX_CHAR_COUNT,
                channel: T,
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
                    return t.length > E.MAX_CHAR_COUNT ? Promise.resolve({
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
        _ = (e, t) => {
            i.useEffect(() => {
                let n = t => {
                        "Escape" === t.key && e()
                    },
                    l = n => {
                        var l;
                        null != n.target && !(null == t ? void 0 : null === (l = t.current) || void 0 === l ? void 0 : l.contains(null == n ? void 0 : n.target)) && e()
                    };
                return document.addEventListener("keydown", n), document.addEventListener("mousedown", l), () => {
                    document.removeEventListener("keydown", n), document.removeEventListener("mousedown", l)
                }
            }, [e, t])
        },
        N = e => {
            let {
                onSelectEmoji: t,
                onClick: n
            } = e, a = (0, u.default)(), [s, r] = i.useState(!1), d = i.useRef(null);
            return _(() => r(!1), d), (0, l.jsx)(o.Popout, {
                align: "right",
                position: "top",
                shouldShow: s,
                disablePointerEvents: !1,
                renderPopout: () => (0, l.jsx)("div", {
                    className: "theme-".concat(a),
                    ref: d,
                    children: (0, l.jsx)(m.ReactionPicker, {
                        messageId: g.EMPTY_STRING_SNOWFLAKE_ID,
                        channel: T,
                        closePopout: () => {
                            r(!1)
                        },
                        onSelectEmoji: (e, n, l) => {
                            null != e && (t(e, n, l), r(!1))
                        }
                    })
                }),
                children: () => (0, l.jsx)(o.Tooltip, {
                    text: C.default.Messages.ADD_REACTION,
                    children: e => (0, l.jsx)("div", {
                        ...e,
                        className: S.reaction,
                        children: (0, l.jsx)(h.default, {
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
    var A = e => {
        let {
            onInteraction: t,
            replyHeaderText: n,
            replyPlaceholder: a,
            showReact: u = !0,
            showReply: d = !0
        } = e, [c, f] = i.useState(!1), m = i.useRef(null);
        return _(() => f(!1), m), (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("div", {
                className: S.reactions,
                children: [u && (0, l.jsx)(N, {
                    onSelectEmoji: e => {
                        null != e && t({
                            interactionType: E.AtomicReactorInteractionTypes.ReactSubmit,
                            emoji: e,
                            reply: null
                        })
                    },
                    onClick: () => {
                        t({
                            interactionType: E.AtomicReactorInteractionTypes.ReactBegin,
                            emoji: null,
                            reply: null
                        }), f(!1)
                    }
                }), d && (0, l.jsx)(v, {
                    hide: () => f(!1),
                    ref: m,
                    headerText: n,
                    placeholder: a,
                    showPopout: c,
                    onEnter: e => {
                        t({
                            interactionType: E.AtomicReactorInteractionTypes.ReplySubmit,
                            emoji: null,
                            reply: e
                        })
                    },
                    children: (0, l.jsx)(o.Tooltip, {
                        text: C.default.Messages.MESSAGE_ACTION_REPLY,
                        children: e => (0, l.jsx)("button", {
                            ...e,
                            className: s(S.reaction, S.emojiButton),
                            onClick: () => {
                                t({
                                    interactionType: E.AtomicReactorInteractionTypes.ReplyBegin,
                                    emoji: null,
                                    reply: null
                                }), f(!0)
                            },
                            children: (0, l.jsx)(r.ArrowAngleLeftUpIcon, {})
                        })
                    })
                })]
            })
        })
    }
}