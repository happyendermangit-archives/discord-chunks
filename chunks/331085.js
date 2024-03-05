function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    }), n("70102"), n("222007");
    var s, a, r, l, i = n("37983"),
        o = n("884691"),
        u = n("981980"),
        d = n("872717"),
        c = n("77078"),
        f = n("308289"),
        E = n("905949"),
        h = n("605250"),
        _ = n("671278"),
        g = n("124969"),
        m = n("659500"),
        p = n("274515"),
        I = n("158998"),
        T = n("49111"),
        N = n("843455"),
        A = n("782340"),
        S = n("858623"),
        R = n("890957");
    (r = s || (s = {}))[r.INITIALIZING = 0] = "INITIALIZING", r[r.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", r[r.PENDING_FINISH = 2] = "PENDING_FINISH", r[r.PENDING_TICKET = 3] = "PENDING_TICKET", r[r.PENDING_LOGIN = 4] = "PENDING_LOGIN", r[r.FINISH = 5] = "FINISH", (l = a || (a = {}))[l.QR_CODE = 0] = "QR_CODE", l[l.CONFIRM = 1] = "CONFIRM";
    let C = n("527826"),
        O = new h.default("LoginQRSocket");

    function v(e) {
        let {
            text: t = ""
        } = e, [n, s] = o.useState(!1);
        return o.useEffect(() => {
            let e = new Image;
            e.src = C, e.onload = () => s(!0), e.onerror = () => s(!0)
        }, [C]), o.useEffect(() => {
            n && c.AccessibilityAnnouncer.announce(A.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
        }, [n]), (0, i.jsx)("div", {
            className: S.qrCodeContainer,
            children: "" !== t && n ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(_.default, {
                    className: S.qrCode,
                    size: 160,
                    text: t
                }), (0, i.jsx)("div", {
                    className: S.qrCodeOverlay,
                    children: (0, i.jsx)("img", {
                        src: C,
                        alt: ""
                    })
                })]
            }) : (0, i.jsx)("div", {
                className: S.qrCodeOverlay,
                "aria-label": A.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                "aria-busy": !0,
                children: (0, i.jsx)(c.Spinner, {
                    className: S.qrCode,
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
        return (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-danger",
            className: t,
            children: n
        })
    };

    function M(e) {
        let {
            state: t,
            cancel: n,
            errorMessage: s
        } = e;
        switch (t.step) {
            case 0:
            case 1:
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(v, {
                        text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
                    }), (0, i.jsx)(g.Title, {
                        className: R.marginBottom8,
                        children: A.default.Messages.LOGIN_WITH_QR
                    }), null != s ? (0, i.jsx)(L, {
                        children: s
                    }) : (0, i.jsx)(g.SubTitle, {
                        children: A.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
                    })]
                });
            case 3:
            case 2: {
                let {
                    user: e
                } = t;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(f.default, {
                        className: S.qrAvatar,
                        user: e,
                        size: c.AvatarSizes.SIZE_120,
                        isMobile: !0,
                        status: N.StatusTypes.ONLINE
                    }), (0, i.jsx)(g.Title, {
                        className: R.marginBottom8,
                        children: A.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
                    }), (0, i.jsx)(g.SubTitle, {
                        children: A.default.Messages.LOGIN_AS.format({
                            username: "".concat(I.default.getUserTag(e))
                        })
                    }), (0, i.jsx)(c.Button, {
                        look: c.Button.Looks.BLANK,
                        color: c.Button.Colors.LINK,
                        size: c.Button.Sizes.MIN,
                        onClick: n,
                        className: S.startOverButton,
                        children: A.default.Messages.QR_CODE_LOGIN_START_OVER
                    })]
                })
            }
            case 4:
            case 5:
                return (0, i.jsx)(c.Spinner, {
                    type: c.Spinner.Type.WANDERING_CUBES
                })
        }
    }

    function x(e) {
        let {
            authTokenCallback: t
        } = e, {
            state: n,
            rsaKeyPair: s,
            cancel: a,
            handleFailure: r
        } = function(e) {
            let [t, n] = o.useState(0), [s, a] = o.useState(!1), [r, l] = o.useState({
                step: 0
            }), [i, d] = o.useState(null), c = (0, E.default)(), f = o.useMemo(() => new u.default(1500, 3e4), []), h = o.useRef();
            h.current = o.useCallback(() => {
                l({
                    step: 0
                }), c ? n(e => e + 1) : (O.info("document is not visible, will defer reconnection when document becomes visible."), a(!0))
            }, [c]);
            let _ = o.useCallback(() => {
                    (function(e) {
                        let {
                            current: t
                        } = e;
                        if (void 0 === t) throw Error("tried to unwrap an undefined value.");
                        return t
                    })(h)()
                }, [h]),
                g = o.useCallback(() => {
                    O.error("Could not complete QR code login, trying to restart with a new QR code."), l({
                        step: 0
                    }), !f.pending && f.fail(_)
                }, [_, f]);
            return o.useEffect(() => {
                c && s && 0 === r.step && (O.info("reconnecting, now that document is visible"), a(!1), n(e => e + 1))
            }, [r, c, s, a]), o.useEffect(() => {
                let t = Date.now(),
                    n = () => "".concat(Date.now() - t, "ms"),
                    s = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
                    a = new WebSocket(s);
                O.info("[0ms] connecting to ".concat(s));
                let r = e => O.info("[".concat(n(), "] ").concat(e)),
                    i = null,
                    o = null,
                    u = null,
                    c = null,
                    E = !0;

                function h() {
                    if (null != i) return i;
                    throw Error("No key pair set")
                }
                let I = () => {
                    E ? (E = !1, a.send(JSON.stringify({
                        op: "heartbeat"
                    }))) : (r("heartbeat timeout, reconnecting."), a.close(), g())
                };
                return a.onmessage = async t => {
                    let {
                        data: n
                    } = t, s = JSON.parse(n);
                    switch (s.op) {
                        case "nonce_proof": {
                            let e = s.encrypted_nonce,
                                t = await (0, p.decryptNonce)(h(), e);
                            r("computed nonce proof"), a.send(JSON.stringify({
                                op: "nonce_proof",
                                nonce: t
                            }));
                            return
                        }
                        case "pending_remote_init": {
                            f.succeed(), m.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE);
                            let e = await (0, p.publicKeyFingerprint)(h());
                            if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
                            r("handshake complete awaiting remote auth."), l({
                                step: 1,
                                fingerprint: e
                            });
                            return
                        }
                        case "pending_login": {
                            let e = s.ticket;
                            null == e && g(), l({
                                step: 4,
                                ticket: e
                            });
                            return
                        }
                        case "pending_ticket": {
                            m.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE), r("remote auth handshake started, awaiting ticket/cancel.");
                            let e = s.encrypted_user_payload,
                                t = await (0, p.decodeEncodedUserRecord)(h(), e);
                            l({
                                step: 3,
                                user: t
                            });
                            return
                        }
                        case "pending_finish": {
                            m.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE), r("remote auth handshake started, awaiting finish/cancel.");
                            let e = s.encrypted_user_payload,
                                t = await (0, p.decodeEncodedUserRecord)(h(), e);
                            l({
                                step: 2,
                                user: t
                            });
                            return
                        }
                        case "finish": {
                            m.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE), r("remote auth handshake finished.");
                            let t = s.encrypted_token;
                            l({
                                step: 5
                            });
                            let n = await (0, p.decryptEncodedCiphertext)(h(), t);
                            e(n);
                            return
                        }
                        case "cancel":
                            r("remote auth handshake cancelled."), _();
                            return;
                        case "hello": {
                            r("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
                            let e = s.heartbeat_interval;
                            c = setTimeout(() => {
                                c = null, I(), u = setInterval(I, e)
                            }, Math.floor(e * Math.random()));
                            return
                        }
                        case "heartbeat_ack":
                            E = !0
                    }
                }, a.onopen = async () => {
                    i = await (0, p.generateRsaKeyPair)(), o = await (0, p.serializePublicKey)(i);
                    let e = await (0, p.publicKeyFingerprint)(i);
                    r("connected, handshaking with fingerprint: ".concat(e)), a.send(JSON.stringify({
                        op: "init",
                        encoded_public_key: o
                    })), d(i)
                }, a.onclose = e => {
                    r("disconnected, code: ".concat(e.code, " ").concat(e.reason)), g()
                }, a.onerror = e => {
                    r("disconnected, error: ".concat(JSON.stringify(e))), g()
                }, () => {
                    r("cleaning up"), a.onopen = () => null, a.onmessage = () => null, a.onclose = () => null, a.onerror = () => null, a.close(1e3), f.cancel(), null != c && clearTimeout(c), null != u && clearInterval(u)
                }
            }, [_, e, t, f, g]), {
                state: r,
                rsaKeyPair: i,
                cancel: _,
                handleFailure: g
            }
        }(t), l = function(e) {
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
                url: T.Endpoints.REMOTE_AUTH_LOGIN,
                body: {
                    ticket: n.ticket
                },
                oldFormErrors: !0
            }).then(async e => {
                if (null != s) try {
                    let n = await (0, p.decryptEncodedCiphertext)(s, e.body.encrypted_token);
                    t(n)
                } catch (e) {
                    r()
                } else r()
            }).catch(() => {
                r()
            })
        }, [n, t, s, r]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                className: S.verticalSeparator
            }), (0, i.jsx)(c.Sequencer, {
                fillParent: !0,
                className: S.qrLogin,
                step: l,
                steps: [0, 1],
                children: (0, i.jsx)("div", {
                    className: S.qrLoginInner,
                    children: (0, i.jsx)(M, {
                        state: n,
                        cancel: a
                    })
                })
            })]
        })
    }
}