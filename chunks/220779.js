function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReactionPickerButton: function() {
            return R
        },
        ReplyInput: function() {
            return O
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("685501"),
        l = n("481060"),
        u = n("410030"),
        d = n("541716"),
        _ = n("752305"),
        c = n("893718"),
        E = n("931651"),
        I = n("131704"),
        T = n("401227"),
        f = n("142550"),
        S = n("981631"),
        A = n("689938"),
        h = n("549671");
    let m = (0, I.createChannelRecord)({
            id: "1",
            type: S.ChannelTypes.DM
        }),
        N = r.forwardRef(function(e, t) {
            let {
                placeholder: n,
                headerText: r,
                onEnter: s,
                showPopout: o,
                children: d,
                hide: _
            } = e, c = (0, u.default)();
            return (0, i.jsx)(l.Popout, {
                align: "right",
                position: "bottom",
                shouldShow: o,
                disablePointerEvents: !1,
                renderPopout: () => (0, i.jsx)("div", {
                    className: a()([h.reply, "theme-".concat(c)]),
                    ref: t,
                    children: (0, i.jsx)(l.FocusLock, {
                        containerRef: t,
                        children: (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(l.Text, {
                                variant: "text-xs/bold",
                                className: h.replyHeader,
                                children: null != r ? r : A.default.Messages.CHAT
                            }), (0, i.jsx)(O, {
                                onEnter: e => {
                                    s(e), _()
                                },
                                placeholder: null != n ? n : A.default.Messages.CHAT
                            })]
                        })
                    })
                }),
                children: () => d
            })
        }),
        O = r.forwardRef(function(e, t) {
            let {
                placeholder: n,
                onEnter: s,
                setEditorRef: a,
                showEmojiButton: o = !1,
                autoCompletePosition: l,
                renderAttachButton: u,
                onFocus: E
            } = e, [I, T] = r.useState(""), [S, A] = r.useState((0, _.toRichValue)("")), N = () => {
                T(""), A((0, _.toRichValue)(""))
            }, O = d.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT;
            return o && (O.emojis = {
                button: !0
            }), (0, i.jsx)(c.default, {
                ref: t,
                placeholder: n,
                className: h.replyInput,
                showRemainingCharsAfterCount: -1,
                allowNewLines: !1,
                maxCharacterCount: f.MAX_CHAR_COUNT,
                channel: m,
                onChange: (e, t, n) => {
                    T(t), A(n)
                },
                type: O,
                textValue: I,
                richValue: S,
                onSubmit: e => {
                    let {
                        value: t
                    } = e;
                    return t.length > f.MAX_CHAR_COUNT ? Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    }) : (s(t), N(), Promise.resolve({
                        shouldClear: !0,
                        shouldRefocus: !1
                    }))
                },
                setEditorRef: a,
                focused: !1,
                onFocus: E,
                disableThemedBackground: !0,
                emojiPickerCloseOnModalOuterClick: !0,
                disabled: !1,
                autoCompletePosition: l,
                renderAttachButton: u
            })
        }),
        p = (e, t) => {
            r.useEffect(() => {
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
        R = e => {
            let {
                onSelectEmoji: t,
                onClick: n
            } = e, s = (0, u.default)(), [a, o] = r.useState(!1), d = r.useRef(null);
            return p(() => o(!1), d), (0, i.jsx)(l.Popout, {
                align: "right",
                position: "top",
                shouldShow: a,
                disablePointerEvents: !1,
                renderPopout: () => (0, i.jsx)("div", {
                    className: "theme-".concat(s),
                    ref: d,
                    children: (0, i.jsx)(E.ReactionPicker, {
                        messageId: S.EMPTY_STRING_SNOWFLAKE_ID,
                        channel: m,
                        closePopout: () => {
                            o(!1)
                        },
                        onSelectEmoji: (e, n, i) => {
                            null != e && (t(e, n, i), o(!1))
                        }
                    })
                }),
                children: () => (0, i.jsx)(l.Tooltip, {
                    text: A.default.Messages.ADD_REACTION,
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: h.reaction,
                        children: (0, i.jsx)(T.default, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                null == n || n(), o(!0)
                            }
                        })
                    })
                })
            })
        };
    t.default = e => {
        let {
            onInteraction: t,
            replyHeaderText: n,
            replyPlaceholder: s,
            showReact: u = !0,
            showReply: d = !0
        } = e, [_, c] = r.useState(!1), E = r.useRef(null);
        return p(() => c(!1), E), (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
                className: h.reactions,
                children: [u && (0, i.jsx)(R, {
                    onSelectEmoji: e => {
                        null != e && t({
                            interactionType: f.AtomicReactorInteractionTypes.ReactSubmit,
                            emoji: e,
                            reply: null
                        })
                    },
                    onClick: () => {
                        t({
                            interactionType: f.AtomicReactorInteractionTypes.ReactBegin,
                            emoji: null,
                            reply: null
                        }), c(!1)
                    }
                }), d && (0, i.jsx)(N, {
                    hide: () => c(!1),
                    ref: E,
                    headerText: n,
                    placeholder: s,
                    showPopout: _,
                    onEnter: e => {
                        t({
                            interactionType: f.AtomicReactorInteractionTypes.ReplySubmit,
                            emoji: null,
                            reply: e
                        })
                    },
                    children: (0, i.jsx)(l.Tooltip, {
                        text: A.default.Messages.MESSAGE_ACTION_REPLY,
                        children: e => (0, i.jsx)("button", {
                            ...e,
                            className: a()(h.reaction, h.emojiButton),
                            onClick: () => {
                                t({
                                    interactionType: f.AtomicReactorInteractionTypes.ReplyBegin,
                                    emoji: null,
                                    reply: null
                                }), c(!0)
                            },
                            children: (0, i.jsx)(o.ArrowAngleLeftUpIcon, {})
                        })
                    })
                })]
            })
        })
    }
}