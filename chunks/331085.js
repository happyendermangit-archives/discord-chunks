function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("70102"), n("222007");
    var s, a, i, r, l = n("37983"),
        o = n("884691"),
        u = n("981980"),
        d = n("872717"),
        c = n("77078"),
        f = n("308289"),
        h = n("905949"),
        E = n("605250"),
        g = n("671278"),
        m = n("124969"),
        _ = n("659500"),
        p = n("274515"),
        R = n("158998"),
        S = n("49111"),
        A = n("843455"),
        T = n("782340"),
        N = n("858623"),
        I = n("890957");
    (i = s || (s = {}))[i.INITIALIZING = 0] = "INITIALIZING", i[i.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", i[i.PENDING_FINISH = 2] = "PENDING_FINISH", i[i.PENDING_TICKET = 3] = "PENDING_TICKET", i[i.PENDING_LOGIN = 4] = "PENDING_LOGIN", i[i.FINISH = 5] = "FINISH", (r = a || (a = {}))[r.QR_CODE = 0] = "QR_CODE", r[r.CONFIRM = 1] = "CONFIRM";
    let C = n("527826"),
        O = new E.default("LoginQRSocket");

    function v(e) {
        let {
            text: t = ""
        } = e, [n, s] = o.useState(!1);
        return o.useEffect(() => {
            let e = new Image;
            e.src = C, e.onload = () => s(!0), e.onerror = () => s(!0)
        }, [C]), o.useEffect(() => {
            n && c.AccessibilityAnnouncer.announce(T.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
        }, [n]), (0, l.jsx)("div", {
            className: N.qrCodeContainer,
            children: "" !== t && n ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(g.default, {
                    className: N.qrCode,
                    size: 160,
                    text: t
                }), (0, l.jsx)("div", {
                    className: N.qrCodeOverlay,
                    children: (0, l.jsx)("img", {
                        src: C,
                        alt: ""
                    })
                })]
            }) : (0, l.jsx)("div", {
                className: N.qrCodeOverlay,
                "aria-label": T.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                "aria-busy": !0,
                children: (0, l.jsx)(c.Spinner, {
                    className: N.qrCode,
                    type: c.Spinner.Type.WANDERING_CUBES,
                    "aria-hidden": !0
                })
            })
        })
    }
    let L = e => {
        let {
            className: t,
            children: n
        } = e;
        return (0, l.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-danger",
            className: t,
            children: n
        })
    };

    function x(e) {
        let {
            state: t,
            cancel: n,
            errorMessage: s
        } = e;
        switch (t.step) {
            case 0:
            case 1:
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(v, {
                        text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
                    }), (0, l.jsx)(m.Title, {
                        className: I.marginBottom8,
                        children: T.default.Messages.LOGIN_WITH_QR
                    }), null != s ? (0, l.jsx)(L, {
                        children: s
                    }) : (0, l.jsx)(m.SubTitle, {
                        children: T.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
                    })]
                });
            case 3:
            case 2: {
                let {
                    user: e
                } = t;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(f.default, {
                        className: N.qrAvatar,
                        user: e,
                        size: c.AvatarSizes.SIZE_120,
                        isMobile: !0,
                        status: A.StatusTypes.ONLINE
                    }), (0, l.jsx)(m.Title, {
                        className: I.marginBottom8,
                        children: T.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
                    }), (0, l.jsx)(m.SubTitle, {
                        children: T.default.Messages.LOGIN_AS.format({
                            username: "".concat(R.default.getUserTag(e))
                        })
                    }), (0, l.jsx)(c.Button, {
                        look: c.Button.Looks.BLANK,
                        color: c.Button.Colors.LINK,
                        size: c.Button.Sizes.MIN,
                        onClick: n,
                        className: N.startOverButton,
                        children: T.default.Messages.QR_CODE_LOGIN_START_OVER
                    })]
                })
            }
            case 4:
            case 5:
                return (0, l.jsx)(c.Spinner, {
                    type: c.Spinner.Type.WANDERING_CUBES
                })
        }
    }

    function M(e) {
        let {
            authTokenCallback: t
        } = e, {
            state: n,
            rsaKeyPair: s,
            cancel: a,
            handleFailure: i
        } = function(e) {
            let [t, n] = o.useState(0), [s, a] = o.useState(!1), [i, r] = o.useState({
                step: 0
            }), [l, d] = o.useState(null), c = (0, h.default)(), f = o.useMemo(() => new u.default(1500, 3e4), []), E = o.useRef();
            E.current = o.useCallback(() => {
                r({
                    step: 0
                }), c ? n(e => e + 1) : (O.info("document is not visible, will defer reconnection when document becomes visible."), a(!0))
            }, [c]);
            let g = o.useCallback(() => {
                    (function(e) {
                        let {
                            current: t
                        } = e;
                        if (void 0 === t) throw Error("tried to unwrap an undefined value.");
                        return t
                    })(E)()
                }, [E]),
                m = o.useCallback(() => {
                    O.error("Could not complete QR code login, trying to restart with a new QR code."), r({
                        step: 0
                    }), !f.pending && f.fail(g)
                }, [g, f]);
            return o.useEffect(() => {
                c && s && 0 === i.step && (O.info("reconnecting, now that document is visible"), a(!1), n(e => e + 1))
            }, [i, c, s, a]), o.useEffect(() => {
                let t = Date.now(),
                    n = () => "".concat(Date.now() - t, "ms"),
                    s = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
                    a = new WebSocket(s);
                O.info("[0ms] connecting to ".concat(s));
                let i = e => O.info("[".concat(n(), "] ").concat(e)),
                    l = null,
                    o = null,
                    u = null,
                    c = null,
                    h = !0;

                function E() {
                    if (null != l) return l;
                    throw Error("No key pair set")
                }
                let R = () => {
                    h ? (h = !1, a.send(JSON.stringify({
                        op: "heartbeat"
                    }))) : (i("heartbeat timeout, reconnecting."), a.close(), m())
                };
                return a.onmessage = async t => {
                    let {
                        data: n
                    } = t, s = JSON.parse(n);
                    switch (s.op) {
                        case "nonce_proof": {
                            let e = s.encrypted_nonce,
                                t = await (0, p.decryptNonce)(E(), e);
                            i("computed nonce proof"), a.send(JSON.stringify({
                                op: "nonce_proof",
                                nonce: t
                            }));
                            return
                        }
                        case "pending_remote_init": {
                            f.succeed(), _.ComponentDispatch.dispatch(S.ComponentActions.WAVE_EMPHASIZE);
                            let e = await (0, p.publicKeyFingerprint)(E());
                            if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
                            i("handshake complete awaiting remote auth."), r({
                                step: 1,
                                fingerprint: e
                            });
                            return
                        }
                        case "pending_login": {
                            let e = s.ticket;
                            null == e && m(), r({
                                step: 4,
                                ticket: e
                            });
                            return
                        }
                        case "pending_ticket": {
                            _.ComponentDispatch.dispatch(S.ComponentActions.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting ticket/cancel.");
                            let e = s.encrypted_user_payload,
                                t = await (0, p.decodeEncodedUserRecord)(E(), e);
                            r({
                                step: 3,
                                user: t
                            });
                            return
                        }
                        case "pending_finish": {
                            _.ComponentDispatch.dispatch(S.ComponentActions.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting finish/cancel.");
                            let e = s.encrypted_user_payload,
                                t = await (0, p.decodeEncodedUserRecord)(E(), e);
                            r({
                                step: 2,
                                user: t
                            });
                            return
                        }
                        case "finish": {
                            _.ComponentDispatch.dispatch(S.ComponentActions.WAVE_EMPHASIZE), i("remote auth handshake finished.");
                            let t = s.encrypted_token;
                            r({
                                step: 5
                            });
                            let n = await (0, p.decryptEncodedCiphertext)(E(), t);
                            e(n);
                            return
                        }
                        case "cancel":
                            i("remote auth handshake cancelled."), g();
                            return;
                        case "hello": {
                            i("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
                            let e = s.heartbeat_interval;
                            c = setTimeout(() => {
                                c = null, R(), u = setInterval(R, e)
                            }, Math.floor(e * Math.random()));
                            return
                        }
                        case "heartbeat_ack":
                            h = !0
                    }
                }, a.onopen = async () => {
                    l = await (0, p.generateRsaKeyPair)(), o = await (0, p.serializePublicKey)(l);
                    let e = await (0, p.publicKeyFingerprint)(l);
                    i("connected, handshaking with fingerprint: ".concat(e)), a.send(JSON.stringify({
                        op: "init",
                        encoded_public_key: o
                    })), d(l)
                }, a.onclose = e => {
                    i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), m()
                }, a.onerror = e => {
                    i("disconnected, error: ".concat(JSON.stringify(e))), m()
                }, () => {
                    i("cleaning up"), a.onopen = () => null, a.onmessage = () => null, a.onclose = () => null, a.onerror = () => null, a.close(1e3), f.cancel(), null != c && clearTimeout(c), null != u && clearInterval(u)
                }
            }, [g, e, t, f, m]), {
                state: i,
                rsaKeyPair: l,
                cancel: g,
                handleFailure: m
            }
        }(t), r = function(e) {
            switch (e) {
                case 0:
                case 1:
                    return 0;
                case 3:
                case 2:
                case 4:
                case 5:
                    return 1
            }
        }(n.step);
        return o.useEffect(() => {
            4 === n.step && null != n.ticket && d.default.post({
                url: S.Endpoints.REMOTE_AUTH_LOGIN,
                body: {
                    ticket: n.ticket
                },
                oldFormErrors: !0
            }).then(async e => {
                if (null != s) try {
                    let n = await (0, p.decryptEncodedCiphertext)(s, e.body.encrypted_token);
                    t(n)
                } catch (e) {
                    i()
                } else i()
            }).catch(() => {
                i()
            })
        }, [n, t, s, i]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
                className: N.verticalSeparator
            }), (0, l.jsx)(c.Sequencer, {
                fillParent: !0,
                className: N.qrLogin,
                step: r,
                steps: [0, 1],
                children: (0, l.jsx)("div", {
                    className: N.qrLoginInner,
                    children: (0, l.jsx)(x, {
                        state: n,
                        cancel: a
                    })
                })
            })]
        })
    }
}