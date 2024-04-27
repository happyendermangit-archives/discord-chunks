function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        MFAModal: function() {
            return y
        },
        MFASlides: function() {
            return b
        },
        openMFAModal: function() {
            return O
        }
    }), s("47120"), s("757143"), s("773603"), s("411104");
    var n = s("735250"),
        a = s("470079"),
        l = s("849055"),
        r = s("658550"),
        i = s("544891"),
        o = s("481060"),
        u = s("285952"),
        d = s("692437"),
        c = s("358085"),
        f = s("960048"),
        h = s("998502"),
        _ = s("48550"),
        m = s("981631"),
        E = s("689938"),
        p = s("824256");

    function g(e) {
        let {
            subtitle: t,
            onClose: s
        } = e;
        return (0, n.jsxs)(o.ModalHeader, {
            direction: u.default.Direction.VERTICAL,
            className: p.header,
            separator: !1,
            children: [(0, n.jsx)(o.Heading, {
                variant: "heading-xl/semibold",
                children: E.default.Messages.MFA_V2_HEADER
            }), null != t && (0, n.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-md/normal",
                className: p.subtitle,
                children: t
            }), (0, n.jsx)(o.ModalCloseButton, {
                className: p.closeButton,
                onClick: s
            })]
        })
    }

    function x(e) {
        let {
            children: t
        } = e;
        return (0, n.jsx)(o.ModalContent, {
            className: p.content,
            children: t
        })
    }

    function S(e) {
        let {
            error: t
        } = e;
        return null == t ? null : (0, n.jsx)(o.Text, {
            className: p.error,
            variant: "text-sm/normal",
            color: "text-danger",
            children: t
        })
    }

    function C(e) {
        let {
            request: t,
            setSlide: s,
            showConfirm: a = !1,
            ...l
        } = e, r = t.methods.length > 1;
        return r || a ? (0, n.jsxs)(o.ModalFooter, {
            className: p.footer,
            direction: a && !r ? u.default.Direction.HORIZONTAL_REVERSE : u.default.Direction.HORIZONTAL,
            children: [r && (0, n.jsx)(o.Button, {
                look: o.Button.Looks.LINK,
                onClick: () => s("select"),
                color: o.Button.Colors.PRIMARY,
                children: E.default.Messages.MFA_V2_GO_TO_SELECT
            }), a && (0, n.jsx)(o.Button, {
                type: "submit",
                ...l,
                children: E.default.Messages.CONFIRM
            })]
        }) : null
    }

    function A(e) {
        let {
            request: t,
            setSlide: s,
            onClose: a
        } = e;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(g, {
                subtitle: E.default.Messages.MFA_V2_SELECT_HEADER,
                onClose: a
            }), (0, n.jsx)(x, {
                children: t.methods.map(e => (0, n.jsxs)(o.Clickable, {
                    className: p.listItemContainer,
                    onClick: () => {
                        s(e.type)
                    },
                    children: [(0, n.jsx)(o.Text, {
                        className: p.listItemText,
                        variant: "text-md/semibold",
                        children: _.SELECT_NAMES[e.type]
                    }), (0, n.jsx)(d.default, {
                        width: 20,
                        height: 20,
                        className: p.listItemArrow
                    })]
                }, e.type))
            })]
        })
    }

    function M(e) {
        let {
            request: t,
            finish: s,
            setSlide: r,
            onClose: i
        } = e, [u, d] = a.useState(!1), [_, p] = a.useState(null), {
            challenge: A
        } = t.methods.find(e => "webauthn" === e.type), M = async () => {
            d(!0), p(null);
            let e = c.isPlatformEmbedded && h.default.supportsFeature(m.NativeFeatures.WEBAUTHN) ? h.default.webAuthnAuthenticate(A) : l.get(JSON.parse(A)).then(e => JSON.stringify(e)),
                t = async e => {
                    try {
                        await s({
                            mfaType: "webauthn",
                            data: e
                        })
                    } catch (e) {
                        var t;
                        p(null !== (t = e.message) && void 0 !== t ? t : E.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
                    }
                };
            try {
                let s = await e;
                await t(s)
            } catch (e) {
                f.default.captureException(e), p(E.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
            } finally {
                d(!1)
            }
        };
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(g, {
                onClose: i
            }), (0, n.jsxs)(x, {
                children: [(0, n.jsx)(o.Button, {
                    submitting: u,
                    onClick: M,
                    children: E.default.Messages.MFA_V2_WEBAUTHN_CTA
                }), (0, n.jsx)(S, {
                    error: _
                })]
            }), (0, n.jsx)(C, {
                request: t,
                setSlide: r
            })]
        })
    }

    function T(e) {
        let {
            request: t,
            finish: s,
            setSlide: l,
            onClose: i,
            isSlideReady: u
        } = e, [d, c] = a.useState(!1), [f, h] = a.useState(null), [_, m] = a.useState(""), p = a.useRef(null), A = E.default.Messages.TWO_FA_ENTER_BACKUP_LABEL, M = E.default.Messages.TWO_FA_BACKUP_CODE, T = a.useCallback(e => {
            m(e), h(null)
        }, [m, h]);
        return a.useEffect(() => {
            if (u) {
                var e;
                null === (e = p.current) || void 0 === e || e.focus()
            }
        }, [u]), (0, n.jsxs)("form", {
            onSubmit: e => {
                e.preventDefault(), c(!0), s({
                    mfaType: "backup",
                    data: _.replace(/-/g, "")
                }).catch(e => {
                    var t, s;
                    h(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                }).finally(() => {
                    c(!1)
                })
            },
            children: [(0, n.jsx)(g, {
                onClose: i
            }), (0, n.jsx)(x, {
                children: (0, n.jsxs)(o.FormItem, {
                    title: A,
                    children: [(0, n.jsx)(o.TextInput, {
                        inputRef: p,
                        onChange: T,
                        placeholder: M,
                        maxLength: r.BACKUP_CODE_MAX_LENGTH,
                        minLength: r.BACKUP_CODE_MIN_LENGTH,
                        value: _,
                        spellCheck: "false",
                        disabled: d
                    }), (0, n.jsx)(S, {
                        error: f
                    })]
                })
            }), (0, n.jsx)(C, {
                request: t,
                setSlide: l,
                showConfirm: !0,
                disabled: _.length < 8,
                submitting: d
            })]
        })
    }

    function v(e) {
        let {
            request: t,
            finish: s,
            setSlide: l,
            onClose: i,
            isSlideReady: u
        } = e, [d, c] = a.useState(!1), [f, h] = a.useState(null), [_, m] = a.useState(""), p = a.useRef(null);
        return a.useEffect(() => {
            if (u) {
                var e;
                null === (e = p.current) || void 0 === e || e.focus()
            }
        }, [u]), (0, n.jsxs)("form", {
            onSubmit: e => {
                e.preventDefault(), c(!0), s({
                    mfaType: "totp",
                    data: _
                }).catch(e => {
                    var t, s;
                    h(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                }).finally(() => {
                    c(!1)
                })
            },
            children: [(0, n.jsx)(g, {
                onClose: i
            }), (0, n.jsx)(x, {
                children: (0, n.jsxs)(o.FormItem, {
                    title: E.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                    children: [(0, n.jsx)(o.TextInput, {
                        inputRef: p,
                        onChange: m,
                        placeholder: E.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                        maxLength: r.TOTP_CODE_LENGTH,
                        minLength: r.TOTP_CODE_LENGTH,
                        value: _,
                        autoComplete: "one-time-code",
                        spellCheck: "false",
                        disabled: d
                    }), (0, n.jsx)(S, {
                        error: f
                    })]
                })
            }), (0, n.jsx)(C, {
                request: t,
                setSlide: l,
                showConfirm: !0,
                disabled: _.length !== r.TOTP_CODE_LENGTH,
                submitting: d
            })]
        })
    }

    function j(e) {
        let {
            request: t,
            finish: s,
            setSlide: l,
            onClose: u,
            isSlideReady: d
        } = e, [c, f] = a.useState(!1), [h, _] = a.useState(null), [A, M] = a.useState(!1), [T, v] = a.useState(null), [j, N] = a.useState(""), y = a.useRef(null);
        a.useEffect(() => {
            f(!0), i.HTTP.post({
                url: m.Endpoints.LOGIN_SMS_SEND,
                body: {
                    ticket: t.ticket
                },
                oldFormErrors: !0
            }).then(e => {
                _(e.body.phone)
            }).catch(e => {
                var t;
                v(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
            }).finally(() => {
                f(!1)
            })
        }, [t.ticket]), a.useEffect(() => {
            if (d) {
                var e;
                null === (e = y.current) || void 0 === e || e.focus()
            }
        }, [d]);
        let b = null == h ? E.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : E.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
            phoneNumber: h
        });
        return (0, n.jsxs)("form", {
            onSubmit: e => {
                e.preventDefault(), M(!0), s({
                    mfaType: "sms",
                    data: j
                }).catch(e => {
                    var t, s;
                    v(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                }).finally(() => {
                    M(!1)
                })
            },
            children: [(0, n.jsx)(g, {
                subtitle: b,
                onClose: u
            }), (0, n.jsx)(x, {
                children: (0, n.jsxs)(o.FormItem, {
                    title: E.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                    children: [(0, n.jsxs)("div", {
                        className: p.smsInputContainer,
                        children: [(0, n.jsx)(o.TextInput, {
                            className: p.smsInput,
                            inputRef: y,
                            onChange: N,
                            placeholder: E.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                            maxLength: 10,
                            value: j,
                            autoComplete: "one-time-code",
                            spellCheck: "false",
                            disabled: A
                        }), (0, n.jsx)(o.Button, {
                            size: o.Button.Sizes.MEDIUM,
                            submitting: c,
                            onClick: () => {
                                i.HTTP.post({
                                    url: m.Endpoints.LOGIN_SMS_SEND,
                                    body: {
                                        ticket: t.ticket
                                    },
                                    oldFormErrors: !0
                                }).then(e => {
                                    _(e.body.phone)
                                }).catch(e => {
                                    var t;
                                    v(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                                })
                            },
                            children: E.default.Messages.MFA_SMS_RESEND
                        })]
                    }), (0, n.jsx)(S, {
                        error: T
                    })]
                })
            }), (0, n.jsx)(C, {
                request: t,
                setSlide: l,
                showConfirm: !0,
                disabled: j.length !== r.SMS_CODE_LENGTH,
                submitting: A
            })]
        })
    }

    function N(e) {
        let {
            request: t,
            finish: s,
            setSlide: l,
            onClose: r,
            isSlideReady: i
        } = e, [u, d] = a.useState(!1), [c, f] = a.useState(null), [h, _] = a.useState(""), m = a.useRef(null);
        return a.useEffect(() => {
            if (i) {
                var e;
                null === (e = m.current) || void 0 === e || e.focus()
            }
        }, [i]), (0, n.jsxs)("form", {
            onSubmit: e => {
                e.preventDefault(), d(!0), s({
                    mfaType: "password",
                    data: h
                }).catch(e => {
                    var t, s;
                    f(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                }).finally(() => {
                    d(!1)
                })
            },
            children: [(0, n.jsx)(g, {
                onClose: r
            }), (0, n.jsx)(x, {
                children: (0, n.jsxs)(o.FormItem, {
                    title: E.default.Messages.FORM_LABEL_PASSWORD,
                    children: [(0, n.jsx)(o.TextInput, {
                        inputRef: m,
                        onChange: _,
                        value: h,
                        type: "password",
                        autoComplete: "password",
                        spellCheck: "false",
                        disabled: u
                    }), (0, n.jsx)(S, {
                        error: c
                    })]
                })
            }), (0, n.jsx)(C, {
                request: t,
                setSlide: l,
                showConfirm: !0,
                disabled: 0 === h.length,
                submitting: u
            })]
        })
    }

    function y(e) {
        let {
            transitionState: t,
            request: s,
            finish: a,
            onClose: l
        } = e;
        return (0, n.jsx)(o.ModalRoot, {
            transitionState: t,
            size: o.ModalSize.SMALL,
            "aria-label": E.default.Messages.MFA_V2_HEADER,
            children: (0, n.jsx)(b, {
                request: s,
                mfaFinish: a,
                onClose: l,
                onEarlyClose: l
            })
        })
    }

    function b(e) {
        var t, s;
        let {
            request: l,
            mfaFinish: r,
            onEarlyClose: i,
            onClose: u,
            width: d = 440
        } = e, [c, f] = a.useState(null !== (s = null === (t = l.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== s ? s : "select"), [h, _] = a.useState(c), m = async e => {
            let {
                mfaType: t,
                data: s
            } = e;
            await r({
                mfaType: t,
                data: s,
                ticket: l.ticket
            }), null != u && u()
        }, E = {
            request: l,
            finish: m,
            setSlide: f,
            onClose: i
        };
        return (0, n.jsxs)(o.Slides, {
            activeSlide: c,
            width: d,
            onSlideReady: _,
            children: [(0, n.jsx)(o.Slide, {
                id: "select",
                children: (0, n.jsx)(A, {
                    ...E
                })
            }), (0, n.jsx)(o.Slide, {
                id: "webauthn",
                children: (0, n.jsx)(M, {
                    ...E
                })
            }), (0, n.jsx)(o.Slide, {
                id: "totp",
                children: (0, n.jsx)(v, {
                    ...E,
                    isSlideReady: "totp" === h
                })
            }), (0, n.jsx)(o.Slide, {
                id: "sms",
                children: (0, n.jsx)(j, {
                    ...E,
                    isSlideReady: "sms" === h
                })
            }), (0, n.jsx)(o.Slide, {
                id: "backup",
                children: (0, n.jsx)(T, {
                    ...E,
                    isSlideReady: "backup" === h
                })
            }), (0, n.jsx)(o.Slide, {
                id: "password",
                children: (0, n.jsx)(N, {
                    ...E,
                    isSlideReady: "password" === h
                })
            })]
        })
    }

    function O(e, t, s) {
        (0, o.openModal)(s => (0, n.jsx)(y, {
            finish: t,
            request: e,
            ...s
        }), {
            onCloseCallback: () => {
                s(Error(E.default.Messages.MFA_V2_CANCELED))
            }
        })
    }
}