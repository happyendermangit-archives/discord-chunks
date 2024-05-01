function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReactionPickerButton: function() {
            return R
        },
        ReplyInput: function() {
            return p
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
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
        h = n("689938"),
        A = n("181406");
    let m = (0, I.createChannelRecord)({
            id: "1",
            type: S.ChannelTypes.DM
        }),
        N = r.forwardRef(function(e, t) {
            let {
                placeholder: n,
                headerText: r,
                onEnter: a,
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
                    className: s()([A.reply, "theme-".concat(c)]),
                    ref: t,
                    children: (0, i.jsx)(l.FocusLock, {
                        containerRef: t,
                        children: (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(l.Text, {
                                variant: "text-xs/bold",
                                className: A.replyHeader,
                                children: null != r ? r : h.default.Messages.CHAT
                            }), (0, i.jsx)(p, {
                                onEnter: e => {
                                    a(e), _()
                                },
                                placeholder: null != n ? n : h.default.Messages.CHAT
                            })]
                        })
                    })
                }),
                children: () => d
            })
        });

    function p(e) {
        let {
            placeholder: t,
            onEnter: n,
            setEditorRef: a,
            showEmojiButton: o = !1,
            renderAttachButton: l,
            onFocus: u,
            channel: E,
            className: I
        } = e, [T, S] = r.useState(""), [h, N] = r.useState((0, _.toRichValue)("")), p = () => {
            S(""), N((0, _.toRichValue)(""))
        }, O = d.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT, R = r.useRef(null);
        return o && (O.emojis = {
            button: !0
        }), (0, i.jsx)(c.default, {
            ref: R,
            placeholder: t,
            className: s()(A.replyInput, I),
            showRemainingCharsAfterCount: -1,
            allowNewLines: !1,
            maxCharacterCount: f.MAX_CHAR_COUNT,
            channel: null != E ? E : m,
            onChange: (e, t, n) => {
                S(t), N(n)
            },
            type: O,
            textValue: T,
            richValue: h,
            onSubmit: e => {
                let {
                    value: t
                } = e;
                return t.length > f.MAX_CHAR_COUNT ? Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                }) : (n(t), p(), Promise.resolve({
                    shouldClear: !0,
                    shouldRefocus: !1
                }))
            },
            setEditorRef: a,
            focused: !0,
            onFocus: u,
            disableThemedBackground: !0,
            emojiPickerCloseOnModalOuterClick: !0,
            disabled: !1,
            autoCompletePosition: (() => {
                if (null == R.current) return "top";
                let e = R.current.getBoundingClientRect(),
                    t = window.innerHeight;
                return e.top < t / 2 ? "bottom" : "top"
            })(),
            renderAttachButton: l
        })
    }
    let O = (e, t) => {
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
            } = e, a = (0, u.default)(), [s, o] = r.useState(!1), d = r.useRef(null);
            return O(() => o(!1), d), (0, i.jsx)(l.Popout, {
                align: "right",
                position: "top",
                shouldShow: s,
                disablePointerEvents: !1,
                renderPopout: () => (0, i.jsx)("div", {
                    className: "theme-".concat(a),
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
                    text: h.default.Messages.ADD_REACTION,
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: A.reaction,
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
            replyPlaceholder: a,
            showReact: u = !0,
            showReply: d = !0
        } = e, [_, c] = r.useState(!1), E = r.useRef(null);
        return O(() => c(!1), E), (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
                className: A.reactions,
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
                    placeholder: a,
                    showPopout: _,
                    onEnter: e => {
                        t({
                            interactionType: f.AtomicReactorInteractionTypes.ReplySubmit,
                            emoji: null,
                            reply: e
                        })
                    },
                    children: (0, i.jsx)(l.Tooltip, {
                        text: h.default.Messages.MESSAGE_ACTION_REPLY,
                        children: e => (0, i.jsx)("button", {
                            ...e,
                            className: s()(A.reaction, A.emojiButton),
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