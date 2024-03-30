function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MFAModal: function() {
            return D
        },
        MFASlides: function() {
            return x
        },
        openMFAModal: function() {
            return L
        }
    });
    var r = n("470079"),
        a = n("849055"),
        l = n("915742"),
        o = n("967888"),
        i = n("784184"),
        u = n("143953"),
        s = n("379698"),
        c = n("374550"),
        f = n("285910"),
        d = n("131900"),
        m = n("345649"),
        p = n("281767"),
        E = n("941504"),
        h = n("945919");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function b(e, t, n, r, a, l, o) {
        try {
            var i = e[l](o),
                u = i.value
        } catch (e) {
            n(e);
            return
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a)
    }

    function v(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, a) {
                var l = e.apply(t, n);

                function o(e) {
                    b(l, r, a, o, i, "next", e)
                }

                function i(e) {
                    b(l, r, a, o, i, "throw", e)
                }
                o(void 0)
            })
        }
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, a, l;
                r = e, a = t, l = n[t], a in r ? Object.defineProperty(r, a, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[a] = l
            })
        }
        return e
    }

    function _(e, t) {
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
            var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != a) {
                var l = [],
                    o = !0,
                    i = !1;
                try {
                    for (a = a.call(e); !(o = (n = a.next()).done) && (l.push(n.value), !t || l.length !== t); o = !0);
                } catch (e) {
                    i = !0, r = e
                } finally {
                    try {
                        !o && null != a.return && a.return()
                    } finally {
                        if (i) throw r
                    }
                }
                return l
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function C(e, t) {
        var n, r, a, l, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return l = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
            return this
        }), l;

        function i(l) {
            return function(i) {
                return function(l) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                        switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) {
                            case 0:
                            case 1:
                                a = l;
                                break;
                            case 4:
                                return o.label++, {
                                    value: l[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, r = l[1], l = [0];
                                continue;
                            case 7:
                                l = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                    o.label = l[1];
                                    break
                                }
                                if (6 === l[0] && o.label < a[1]) {
                                    o.label = a[1], a = l;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(l);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        l = t.call(e, o)
                    } catch (e) {
                        l = [6, e], r = 0
                    } finally {
                        n = a = 0
                    }
                    if (5 & l[0]) throw l[1];
                    return {
                        value: l[0] ? l[1] : void 0,
                        done: !0
                    }
                }([l, i])
            }
        }
    }

    function O(e) {
        var t = e.subtitle,
            n = e.onClose;
        return r.createElement(i.ModalHeader, {
            direction: u.default.Direction.VERTICAL,
            className: h.header,
            separator: !1
        }, r.createElement(i.Heading, {
            variant: "heading-xl/semibold"
        }, E.default.Messages.MFA_V2_HEADER), null != t && r.createElement(i.Text, {
            color: "header-secondary",
            variant: "text-md/normal",
            className: h.subtitle
        }, t), r.createElement(i.ModalCloseButton, {
            className: h.closeButton,
            onClick: n
        }))
    }

    function A(e) {
        var t = e.children;
        return r.createElement(i.ModalContent, {
            className: h.content
        }, t)
    }

    function T(e) {
        var t = e.error;
        return null == t ? null : r.createElement(i.Text, {
            className: h.error,
            variant: "text-sm/normal",
            color: "text-danger"
        }, t)
    }

    function M(e) {
        var t = e.request,
            n = e.setSlide,
            a = e.showConfirm,
            l = void 0 !== a && a,
            o = function(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        if (n = l[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                }
                return a
            }(e, ["request", "setSlide", "showConfirm"]),
            s = t.methods.length > 1;
        return s || l ? r.createElement(i.ModalFooter, {
            className: h.footer,
            direction: l && !s ? u.default.Direction.HORIZONTAL_REVERSE : u.default.Direction.HORIZONTAL
        }, s && r.createElement(i.Button, {
            look: i.Button.Looks.LINK,
            onClick: function() {
                return n("select")
            },
            color: i.Button.Colors.PRIMARY
        }, E.default.Messages.MFA_V2_GO_TO_SELECT), l && r.createElement(i.Button, g({
            type: "submit"
        }, o), E.default.Messages.CONFIRM)) : null
    }

    function N(e) {
        var t = e.request,
            n = e.setSlide,
            a = e.onClose;
        return r.createElement(r.Fragment, null, r.createElement(O, {
            subtitle: E.default.Messages.MFA_V2_SELECT_HEADER,
            onClose: a
        }), r.createElement(A, null, t.methods.map(function(e) {
            return r.createElement(i.Clickable, {
                key: e.type,
                className: h.listItemContainer,
                onClick: function() {
                    n(e.type)
                }
            }, r.createElement(i.Text, {
                className: h.listItemText,
                variant: "text-md/semibold"
            }, m.SELECT_NAMES[e.type]), r.createElement(s.default, {
                width: 20,
                height: 20,
                className: h.listItemArrow
            }))
        })))
    }

    function w(e) {
        var t, n = e.request,
            l = e.finish,
            o = e.setSlide,
            u = e.onClose,
            s = S(r.useState(!1), 2),
            m = s[0],
            h = s[1],
            y = S(r.useState(null), 2),
            b = y[0],
            g = y[1],
            _ = n.methods.find(function(e) {
                return "webauthn" === e.type
            }).challenge;
        var N = (t = v(function() {
            var e, t, n, r;
            return C(this, function(o) {
                switch (o.label) {
                    case 0:
                        var i;
                        h(!0), g(null), e = c.isPlatformEmbedded && d.default.supportsFeature(p.NativeFeatures.WEBAUTHN) ? d.default.webAuthnAuthenticate(_) : a.get(JSON.parse(_)).then(function(e) {
                            return JSON.stringify(e)
                        }), i = v(function(e) {
                            var t;
                            return C(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, l({
                                            mfaType: "webauthn",
                                            data: e
                                        })];
                                    case 1:
                                        return n.sent(), [3, 3];
                                    case 2:
                                        return g(null !== (t = n.sent().message) && void 0 !== t ? t : E.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        }), t = function(e) {
                            return i.apply(this, arguments)
                        }, o.label = 1;
                    case 1:
                        return o.trys.push([1, 4, 5, 6]), [4, e];
                    case 2:
                        return n = o.sent(), [4, t(n)];
                    case 3:
                        return o.sent(), [3, 6];
                    case 4:
                        return r = o.sent(), f.default.captureException(r), g(E.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), [3, 6];
                    case 5:
                        return h(!1), [7];
                    case 6:
                        return [2]
                }
            })
        }), function() {
            return t.apply(this, arguments)
        });
        return r.createElement(r.Fragment, null, r.createElement(O, {
            onClose: u
        }), r.createElement(A, null, r.createElement(i.Button, {
            submitting: m,
            onClick: N
        }, E.default.Messages.MFA_V2_WEBAUTHN_CTA), r.createElement(T, {
            error: b
        })), r.createElement(M, {
            request: n,
            setSlide: o
        }))
    }

    function R(e) {
        var t = e.request,
            n = e.finish,
            a = e.setSlide,
            o = e.onClose,
            u = e.isSlideReady,
            s = S(r.useState(!1), 2),
            c = s[0],
            f = s[1],
            d = S(r.useState(null), 2),
            m = d[0],
            p = d[1],
            h = S(r.useState(""), 2),
            y = h[0],
            b = h[1],
            v = r.useRef(null),
            g = E.default.Messages.TWO_FA_ENTER_BACKUP_LABEL,
            _ = E.default.Messages.TWO_FA_BACKUP_CODE,
            C = r.useCallback(function(e) {
                b(e), p(null)
            }, [b, p]);
        return r.useEffect(function() {
            if (u) {
                var e;
                null === (e = v.current) || void 0 === e || e.focus()
            }
        }, [u]), r.createElement("form", {
            onSubmit: function(e) {
                e.preventDefault(), f(!0), n({
                    mfaType: "backup",
                    data: y.replace(/-/g, "")
                }).catch(function(e) {
                    var t, n;
                    p(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                }).finally(function() {
                    f(!1)
                })
            }
        }, r.createElement(O, {
            onClose: o
        }), r.createElement(A, null, r.createElement(i.FormItem, {
            title: g
        }, r.createElement(i.TextInput, {
            inputRef: v,
            onChange: C,
            placeholder: _,
            maxLength: l.BACKUP_CODE_MAX_LENGTH,
            minLength: l.BACKUP_CODE_MIN_LENGTH,
            value: y,
            spellCheck: "false",
            disabled: c
        }), r.createElement(T, {
            error: m
        }))), r.createElement(M, {
            request: t,
            setSlide: a,
            showConfirm: !0,
            disabled: y.length < 8,
            submitting: c
        }))
    }

    function k(e) {
        var t = e.request,
            n = e.finish,
            a = e.setSlide,
            o = e.onClose,
            u = e.isSlideReady,
            s = S(r.useState(!1), 2),
            c = s[0],
            f = s[1],
            d = S(r.useState(null), 2),
            m = d[0],
            p = d[1],
            h = S(r.useState(""), 2),
            y = h[0],
            b = h[1],
            v = r.useRef(null);
        return r.useEffect(function() {
            if (u) {
                var e;
                null === (e = v.current) || void 0 === e || e.focus()
            }
        }, [u]), r.createElement("form", {
            onSubmit: function(e) {
                e.preventDefault(), f(!0), n({
                    mfaType: "totp",
                    data: y
                }).catch(function(e) {
                    var t, n;
                    p(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                }).finally(function() {
                    f(!1)
                })
            }
        }, r.createElement(O, {
            onClose: o
        }), r.createElement(A, null, r.createElement(i.FormItem, {
            title: E.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL
        }, r.createElement(i.TextInput, {
            inputRef: v,
            onChange: b,
            placeholder: E.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
            maxLength: l.TOTP_CODE_LENGTH,
            minLength: l.TOTP_CODE_LENGTH,
            value: y,
            autoComplete: "one-time-code",
            spellCheck: "false",
            disabled: c
        }), r.createElement(T, {
            error: m
        }))), r.createElement(M, {
            request: t,
            setSlide: a,
            showConfirm: !0,
            disabled: y.length !== l.TOTP_CODE_LENGTH,
            submitting: c
        }))
    }

    function P(e) {
        var t = e.request,
            n = e.finish,
            a = e.setSlide,
            u = e.onClose,
            s = e.isSlideReady,
            c = S(r.useState(!1), 2),
            f = c[0],
            d = c[1],
            m = S(r.useState(null), 2),
            y = m[0],
            b = m[1],
            v = S(r.useState(!1), 2),
            g = v[0],
            _ = v[1],
            C = S(r.useState(null), 2),
            N = C[0],
            w = C[1],
            R = S(r.useState(""), 2),
            k = R[0],
            P = R[1],
            F = r.useRef(null);
        r.useEffect(function() {
            d(!0), o.HTTP.post({
                url: p.Endpoints.LOGIN_SMS_SEND,
                body: {
                    ticket: t.ticket
                },
                oldFormErrors: !0
            }).then(function(e) {
                b(e.body.phone)
            }).catch(function(e) {
                var t;
                w(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
            }).finally(function() {
                d(!1)
            })
        }, [t.ticket]), r.useEffect(function() {
            if (s) {
                var e;
                null === (e = F.current) || void 0 === e || e.focus()
            }
        }, [s]);
        var D = null == y ? E.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : E.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
            phoneNumber: y
        });
        return r.createElement("form", {
            onSubmit: function(e) {
                e.preventDefault(), _(!0), n({
                    mfaType: "sms",
                    data: k
                }).catch(function(e) {
                    var t, n;
                    w(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                }).finally(function() {
                    _(!1)
                })
            }
        }, r.createElement(O, {
            subtitle: D,
            onClose: u
        }), r.createElement(A, null, r.createElement(i.FormItem, {
            title: E.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL
        }, r.createElement("div", {
            className: h.smsInputContainer
        }, r.createElement(i.TextInput, {
            className: h.smsInput,
            inputRef: F,
            onChange: P,
            placeholder: E.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
            maxLength: 10,
            value: k,
            autoComplete: "one-time-code",
            spellCheck: "false",
            disabled: g
        }), r.createElement(i.Button, {
            size: i.Button.Sizes.MEDIUM,
            submitting: f,
            onClick: function() {
                o.HTTP.post({
                    url: p.Endpoints.LOGIN_SMS_SEND,
                    body: {
                        ticket: t.ticket
                    },
                    oldFormErrors: !0
                }).then(function(e) {
                    b(e.body.phone)
                }).catch(function(e) {
                    var t;
                    w(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                })
            }
        }, E.default.Messages.MFA_SMS_RESEND)), r.createElement(T, {
            error: N
        }))), r.createElement(M, {
            request: t,
            setSlide: a,
            showConfirm: !0,
            disabled: k.length !== l.SMS_CODE_LENGTH,
            submitting: g
        }))
    }

    function F(e) {
        var t = e.request,
            n = e.finish,
            a = e.setSlide,
            l = e.onClose,
            o = e.isSlideReady,
            u = S(r.useState(!1), 2),
            s = u[0],
            c = u[1],
            f = S(r.useState(null), 2),
            d = f[0],
            m = f[1],
            p = S(r.useState(""), 2),
            h = p[0],
            y = p[1],
            b = r.useRef(null);
        return r.useEffect(function() {
            if (o) {
                var e;
                null === (e = b.current) || void 0 === e || e.focus()
            }
        }, [o]), r.createElement("form", {
            onSubmit: function(e) {
                e.preventDefault(), c(!0), n({
                    mfaType: "password",
                    data: h
                }).catch(function(e) {
                    var t, n;
                    m(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                }).finally(function() {
                    c(!1)
                })
            }
        }, r.createElement(O, {
            onClose: l
        }), r.createElement(A, null, r.createElement(i.FormItem, {
            title: E.default.Messages.FORM_LABEL_PASSWORD
        }, r.createElement(i.TextInput, {
            inputRef: b,
            onChange: y,
            value: h,
            type: "password",
            autoComplete: "password",
            spellCheck: "false",
            disabled: s
        }), r.createElement(T, {
            error: d
        }))), r.createElement(M, {
            request: t,
            setSlide: a,
            showConfirm: !0,
            disabled: 0 === h.length,
            submitting: s
        }))
    }

    function D(e) {
        var t = e.transitionState,
            n = e.request,
            a = e.finish,
            l = e.onClose;
        return r.createElement(i.ModalRoot, {
            transitionState: t,
            size: i.ModalSize.SMALL,
            "aria-label": E.default.Messages.MFA_V2_HEADER
        }, r.createElement(x, {
            request: n,
            mfaFinish: a,
            onClose: l,
            onEarlyClose: l
        }))
    }

    function x(e) {
        var t, n, a, l = e.request,
            o = e.mfaFinish,
            u = e.onEarlyClose,
            s = e.onClose,
            c = e.width,
            f = S(r.useState(null !== (a = null === (n = l.methods[0]) || void 0 === n ? void 0 : n.type) && void 0 !== a ? a : "select"), 2),
            d = f[0],
            m = f[1],
            p = S(r.useState(d), 2),
            E = p[0],
            h = p[1];
        var y = (t = v(function(e) {
                var t;
                return C(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return t = e.mfaType, [4, o({
                                mfaType: t,
                                data: e.data,
                                ticket: l.ticket
                            })];
                        case 1:
                            return n.sent(), null != s && s(), [2]
                    }
                })
            }), function(e) {
                return t.apply(this, arguments)
            }),
            b = {
                request: l,
                finish: y,
                setSlide: m,
                onClose: u
            };
        return r.createElement(i.Slides, {
            activeSlide: d,
            width: void 0 === c ? 440 : c,
            onSlideReady: h
        }, r.createElement(i.Slide, {
            id: "select"
        }, r.createElement(N, b)), r.createElement(i.Slide, {
            id: "webauthn"
        }, r.createElement(w, b)), r.createElement(i.Slide, {
            id: "totp"
        }, r.createElement(k, _(g({}, b), {
            isSlideReady: "totp" === E
        }))), r.createElement(i.Slide, {
            id: "sms"
        }, r.createElement(P, _(g({}, b), {
            isSlideReady: "sms" === E
        }))), r.createElement(i.Slide, {
            id: "backup"
        }, r.createElement(R, _(g({}, b), {
            isSlideReady: "backup" === E
        }))), r.createElement(i.Slide, {
            id: "password"
        }, r.createElement(F, _(g({}, b), {
            isSlideReady: "password" === E
        }))))
    }

    function L(e, t, n) {
        (0, i.openModal)(function(n) {
            return r.createElement(D, g({
                finish: t,
                request: e
            }, n))
        }, {
            onCloseCallback: function() {
                n(Error(E.default.Messages.MFA_V2_CANCELED))
            }
        })
    }
}