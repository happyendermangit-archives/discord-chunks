function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReactionPickerButton: function() {
            return N
        },
        ReplyInput: function() {
            return A
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("575867"),
        u = n("784184"),
        s = n("523263"),
        l = n("398975"),
        c = n("941055"),
        f = n("135783"),
        d = n("7860"),
        _ = n("569492"),
        E = n("754250"),
        p = n("568406"),
        m = n("281767"),
        y = n("941504"),
        I = n("549671");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function T(e, t) {
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

    function S(e, t) {
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
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var v = (0, _.createChannelRecord)({
            id: "1",
            type: m.ChannelTypes.DM
        }),
        g = r.forwardRef(function(e, t) {
            var n = e.placeholder,
                o = e.headerText,
                a = e.onEnter,
                l = e.showPopout,
                c = e.children,
                f = e.hide,
                d = (0, s.default)();
            return r.createElement(u.Popout, {
                align: "right",
                position: "bottom",
                shouldShow: l,
                disablePointerEvents: !1,
                renderPopout: function() {
                    return r.createElement("div", {
                        className: i()([I.reply, "theme-".concat(d)]),
                        ref: t
                    }, r.createElement(u.FocusLock, {
                        containerRef: t
                    }, r.createElement("div", null, r.createElement(u.Text, {
                        variant: "text-xs/bold",
                        className: I.replyHeader
                    }, null != o ? o : y.default.Messages.CHAT), r.createElement(A, {
                        onEnter: function(e) {
                            a(e), f()
                        },
                        placeholder: null != n ? n : y.default.Messages.CHAT
                    }))))
                }
            }, function() {
                return c
            })
        }),
        A = r.forwardRef(function(e, t) {
            var n = e.placeholder,
                o = e.onEnter,
                i = e.setEditorRef,
                a = e.showEmojiButton,
                u = e.autoCompletePosition,
                s = S(r.useState(""), 2),
                d = s[0],
                _ = s[1],
                E = S(r.useState((0, c.toRichValue)("")), 2),
                m = E[0],
                y = E[1],
                h = l.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT;
            return void 0 !== a && a && (h.emojis = {
                button: !0
            }), r.createElement(f.default, {
                ref: t,
                placeholder: n,
                className: I.replyInput,
                showRemainingCharsAfterCount: -1,
                allowNewLines: !1,
                maxCharacterCount: p.MAX_CHAR_COUNT,
                channel: v,
                onChange: function(e, t, n) {
                    _(t), y(n)
                },
                type: h,
                textValue: d,
                richValue: m,
                onSubmit: function(e) {
                    var t = e.value;
                    return t.length > p.MAX_CHAR_COUNT ? Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    }) : (o(t), Promise.resolve({
                        shouldClear: !0,
                        shouldRefocus: !1
                    }))
                },
                setEditorRef: i,
                focused: !0,
                disableThemedBackground: !0,
                emojiPickerCloseOnModalOuterClick: !0,
                disabled: !1,
                autoCompletePosition: u
            })
        }),
        b = function(e, t) {
            r.useEffect(function() {
                var n = function(t) {
                        "Escape" === t.key && e()
                    },
                    r = function(n) {
                        var r;
                        null != n.target && !(null == t ? void 0 : null === (r = t.current) || void 0 === r ? void 0 : r.contains(null == n ? void 0 : n.target)) && e()
                    };
                return document.addEventListener("keydown", n), document.addEventListener("mousedown", r),
                    function() {
                        document.removeEventListener("keydown", n), document.removeEventListener("mousedown", r)
                    }
            }, [e, t])
        },
        N = function(e) {
            var t = e.onSelectEmoji,
                n = e.onClick,
                o = (0, s.default)(),
                i = S(r.useState(!1), 2),
                a = i[0],
                l = i[1],
                c = r.useRef(null);
            return b(function() {
                return l(!1)
            }, c), r.createElement(u.Popout, {
                align: "right",
                position: "top",
                shouldShow: a,
                disablePointerEvents: !1,
                renderPopout: function() {
                    return r.createElement("div", {
                        className: "theme-".concat(o),
                        ref: c
                    }, r.createElement(d.ReactionPicker, {
                        messageId: m.EMPTY_STRING_SNOWFLAKE_ID,
                        channel: v,
                        closePopout: function() {
                            l(!1)
                        },
                        onSelectEmoji: function(e, n, r) {
                            null != e && (t(e, n, r), l(!1))
                        }
                    }))
                }
            }, function() {
                return r.createElement(u.Tooltip, {
                    text: y.default.Messages.ADD_REACTION
                }, function(e) {
                    return r.createElement("div", T(O({}, e), {
                        className: I.reaction
                    }), r.createElement(E.default, {
                        active: !1,
                        tabIndex: 0,
                        onClick: function() {
                            null == n || n(), l(!0)
                        }
                    }))
                })
            })
        };
    t.default = function(e) {
        var t = e.onInteraction,
            n = e.replyHeaderText,
            o = e.replyPlaceholder,
            s = e.showReact,
            l = e.showReply,
            c = S(r.useState(!1), 2),
            f = c[0],
            d = c[1],
            _ = r.useRef(null);
        return b(function() {
            return d(!1)
        }, _), r.createElement(r.Fragment, null, r.createElement("div", {
            className: I.reactions
        }, (void 0 === s || s) && r.createElement(N, {
            onSelectEmoji: function(e) {
                null != e && t({
                    interactionType: p.AtomicReactorInteractionTypes.ReactSubmit,
                    emoji: e,
                    reply: null
                })
            },
            onClick: function() {
                t({
                    interactionType: p.AtomicReactorInteractionTypes.ReactBegin,
                    emoji: null,
                    reply: null
                }), d(!1)
            }
        }), (void 0 === l || l) && r.createElement(g, {
            hide: function() {
                return d(!1)
            },
            ref: _,
            headerText: n,
            placeholder: o,
            showPopout: f,
            onEnter: function(e) {
                t({
                    interactionType: p.AtomicReactorInteractionTypes.ReplySubmit,
                    emoji: null,
                    reply: e
                })
            }
        }, r.createElement(u.Tooltip, {
            text: y.default.Messages.MESSAGE_ACTION_REPLY
        }, function(e) {
            return r.createElement("button", T(O({}, e), {
                className: i()(I.reaction, I.emojiButton),
                onClick: function() {
                    t({
                        interactionType: p.AtomicReactorInteractionTypes.ReplyBegin,
                        emoji: null,
                        reply: null
                    }), d(!0)
                }
            }), r.createElement(a.ArrowAngleLeftUpIcon, null))
        }))))
    }
}