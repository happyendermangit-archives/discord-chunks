function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return G
        }
    }), n("70102"), n("222007");
    var s, a, r, l, i = n("37983"),
        o = n("884691"),
        u = n("837291"),
        d = n("981980"),
        c = n("872717"),
        E = n("77078"),
        f = n("913144"),
        _ = n("437822"),
        h = n("308289"),
        g = n("905949"),
        m = n("605250"),
        p = n("425922"),
        T = n("671278"),
        I = n("124969"),
        A = n("659500"),
        S = n("773336"),
        R = n("274515"),
        N = n("158998"),
        C = n("49111"),
        O = n("843455"),
        L = n("782340"),
        M = n("858623"),
        v = n("890957");
    (r = s || (s = {}))[r.INITIALIZING = 0] = "INITIALIZING", r[r.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", r[r.PENDING_FINISH = 2] = "PENDING_FINISH", r[r.PENDING_TICKET = 3] = "PENDING_TICKET", r[r.PENDING_LOGIN = 4] = "PENDING_LOGIN", r[r.FINISH = 5] = "FINISH", (l = a || (a = {}))[l.QR_CODE = 0] = "QR_CODE", l[l.CONFIRM = 1] = "CONFIRM";
    let D = n("527826"),
        x = new m.default("LoginQRSocket");

    function U(e) {
        let {
            text: t = ""
        } = e, [n, s] = o.useState(!1);
        return o.useEffect(() => {
            let e = new Image;
            e.src = D, e.onload = () => s(!0), e.onerror = () => s(!0)
        }, [D]), o.useEffect(() => {
            n && E.AccessibilityAnnouncer.announce(L.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
        }, [n]), (0, i.jsx)("div", {
            className: M.qrCodeContainer,
            children: "" !== t && n ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(T.default, {
                    className: M.qrCode,
                    size: 160,
                    text: t
                }), (0, i.jsx)("div", {
                    className: M.qrCodeOverlay,
                    children: (0, i.jsx)("img", {
                        src: D,
                        alt: ""
                    })
                })]
            }) : (0, i.jsx)("div", {
                className: M.qrCodeOverlay,
                "aria-label": L.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                "aria-busy": !0,
                children: (0, i.jsx)(E.Spinner, {
                    className: M.qrCode,
                    type: E.Spinner.Type.WANDERING_CUBES,
                    "aria-hidden": !0
                })
            })
        })
    }
    let b = e => {
        let {
            className: t,
            children: n
        } = e;
        return (0, i.jsx)(E.Text, {
            variant: "text-md/normal",
            color: "text-danger",
            className: t,
            children: n
        })
    };
    async function y(e) {
        e.abort("Starting non-conditional mediation");
        let {
            challenge: t,
            ticket: n
        } = await (0, p.fetchWebAuthnPasswordlessChallenge)(), s = JSON.parse(t), a = await (0, u.get)((0, u.parseRequestOptionsFromJSON)(s)), r = await _.default.loginWebAuthn({
            ticket: n,
            credential: JSON.stringify(a)
        });
        f.default.dispatch({
            type: "LOGIN_SUCCESS",
            token: r
        })
    }

    function P(e) {
        let {
            state: t,
            cancel: n,
            errorMessage: s,
            hasPasswordlessExperiment: a,
            conditionalMediationAbortController: r
        } = e;
        switch (t.step) {
            case 0:
            case 1:
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(U, {
                        text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
                    }), (0, i.jsx)(I.Title, {
                        className: v.marginBottom8,
                        children: L.default.Messages.LOGIN_WITH_QR
                    }), null != s ? (0, i.jsx)(b, {
                        children: s
                    }) : (0, i.jsx)(I.SubTitle, {
                        children: L.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
                    }), a && (0, S.getPlatform)() !== S.PlatformTypes.OSX && (0, i.jsx)(E.Button, {
                        size: E.ButtonSizes.XLARGE,
                        look: E.ButtonLooks.LINK,
                        color: E.ButtonColors.LINK,
                        onClick: () => y(r),
                        children: L.default.Messages.SIGN_IN_WITH_PASSKEY
                    })]
                });
            case 3:
            case 2: {
                let {
                    user: e
                } = t;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(h.default, {
                        className: M.qrAvatar,
                        user: e,
                        size: E.AvatarSizes.SIZE_120,
                        isMobile: !0,
                        status: O.StatusTypes.ONLINE
                    }), (0, i.jsx)(I.Title, {
                        className: v.marginBottom8,
                        children: L.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
                    }), (0, i.jsx)(I.SubTitle, {
                        children: L.default.Messages.LOGIN_AS.format({
                            username: "".concat(N.default.getUserTag(e))
                        })
                    }), (0, i.jsx)(E.Button, {
                        look: E.Button.Looks.BLANK,
                        color: E.Button.Colors.LINK,
                        size: E.Button.Sizes.MIN,
                        onClick: n,
                        className: M.startOverButton,
                        children: L.default.Messages.QR_CODE_LOGIN_START_OVER
                    })]
                })
            }
            case 4:
            case 5:
                return (0, i.jsx)(E.Spinner, {
                    type: E.Spinner.Type.WANDERING_CUBES
                })
        }
    }

    function G(e) {
        let {
            authTokenCallback: t,
            hasPasswordlessExperiment: n,
            conditionalMediationAbortController: s
        } = e, {
            state: a,
            rsaKeyPair: r,
            cancel: l,
            handleFailure: u
        } = function(e) {
            let [t, n] = o.useState(0), [s, a] = o.useState(!1), [r, l] = o.useState({
                step: 0
            }), [i, u] = o.useState(null), c = (0, g.default)(), E = o.useMemo(() => new d.default(1500, 3e4), []), f = o.useRef();
            f.current = o.useCallback(() => {
                l({
                    step: 0
                }), c ? n(e => e + 1) : (x.info("document is not visible, will defer reconnection when document becomes visible."), a(!0))
            }, [c]);
            let _ = o.useCallback(() => {
                    (function(e) {
                        let {
                            current: t
                        } = e;
                        if (void 0 === t) throw Error("tried to unwrap an undefined value.");
                        return t
                    })(f)()
                }, [f]),
                h = o.useCallback(() => {
                    x.error("Could not complete QR code login, trying to restart with a new QR code."), l({
                        step: 0
                    }), !E.pending && E.fail(_)
                }, [_, E]);
            return o.useEffect(() => {
                c && s && 0 === r.step && (x.info("reconnecting, now that document is visible"), a(!1), n(e => e + 1))
            }, [r, c, s, a]), o.useEffect(() => {
                let t = Date.now(),
                    n = () => "".concat(Date.now() - t, "ms"),
                    s = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
                    a = new WebSocket(s);
                x.info("[0ms] connecting to ".concat(s));
                let r = e => x.info("[".concat(n(), "] ").concat(e)),
                    i = null,
                    o = null,
                    d = null,
                    c = null,
                    f = !0;

                function g() {
                    if (null != i) return i;
                    throw Error("No key pair set")
                }
                let m = () => {
                    f ? (f = !1, a.send(JSON.stringify({
                        op: "heartbeat"
                    }))) : (r("heartbeat timeout, reconnecting."), a.close(), h())
                };
                return a.onmessage = async t => {
                    let {
                        data: n
                    } = t, s = JSON.parse(n);
                    switch (s.op) {
                        case "nonce_proof": {
                            let e = s.encrypted_nonce,
                                t = await (0, R.decryptNonce)(g(), e);
                            r("computed nonce proof"), a.send(JSON.stringify({
                                op: "nonce_proof",
                                nonce: t
                            }));
                            return
                        }
                        case "pending_remote_init": {
                            E.succeed(), A.ComponentDispatch.dispatch(C.ComponentActions.WAVE_EMPHASIZE);
                            let e = await (0, R.publicKeyFingerprint)(g());
                            if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
                            r("handshake complete awaiting remote auth."), l({
                                step: 1,
                                fingerprint: e
                            });
                            return
                        }
                        case "pending_login": {
                            let e = s.ticket;
                            null == e && h(), l({
                                step: 4,
                                ticket: e
                            });
                            return
                        }
                        case "pending_ticket": {
                            A.ComponentDispatch.dispatch(C.ComponentActions.WAVE_EMPHASIZE), r("remote auth handshake started, awaiting ticket/cancel.");
                            let e = s.encrypted_user_payload,
                                t = await (0, R.decodeEncodedUserRecord)(g(), e);
                            l({
                                step: 3,
                                user: t
                            });
                            return
                        }
                        case "pending_finish": {
                            A.ComponentDispatch.dispatch(C.ComponentActions.WAVE_EMPHASIZE), r("remote auth handshake started, awaiting finish/cancel.");
                            let e = s.encrypted_user_payload,
                                t = await (0, R.decodeEncodedUserRecord)(g(), e);
                            l({
                                step: 2,
                                user: t
                            });
                            return
                        }
                        case "finish": {
                            A.ComponentDispatch.dispatch(C.ComponentActions.WAVE_EMPHASIZE), r("remote auth handshake finished.");
                            let t = s.encrypted_token;
                            l({
                                step: 5
                            });
                            let n = await (0, R.decryptEncodedCiphertext)(g(), t);
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
                                c = null, m(), d = setInterval(m, e)
                            }, Math.floor(e * Math.random()));
                            return
                        }
                        case "heartbeat_ack":
                            f = !0
                    }
                }, a.onopen = async () => {
                    i = await (0, R.generateRsaKeyPair)(), o = await (0, R.serializePublicKey)(i);
                    let e = await (0, R.publicKeyFingerprint)(i);
                    r("connected, handshaking with fingerprint: ".concat(e)), a.send(JSON.stringify({
                        op: "init",
                        encoded_public_key: o
                    })), u(i)
                }, a.onclose = e => {
                    r("disconnected, code: ".concat(e.code, " ").concat(e.reason)), h()
                }, a.onerror = e => {
                    r("disconnected, error: ".concat(JSON.stringify(e))), h()
                }, () => {
                    r("cleaning up"), a.onopen = () => null, a.onmessage = () => null, a.onclose = () => null, a.onerror = () => null, a.close(1e3), E.cancel(), null != c && clearTimeout(c), null != d && clearInterval(d)
                }
            }, [_, e, t, E, h]), {
                state: r,
                rsaKeyPair: i,
                cancel: _,
                handleFailure: h
            }
        }(t), f = function(e) {
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
        }(a.step);
        return o.useEffect(() => {
            4 === a.step && null != a.ticket && c.HTTP.post({
                url: C.Endpoints.REMOTE_AUTH_LOGIN,
                body: {
                    ticket: a.ticket
                },
                oldFormErrors: !0
            }).then(async e => {
                if (null != r) try {
                    let n = await (0, R.decryptEncodedCiphertext)(r, e.body.encrypted_token);
                    t(n)
                } catch (e) {
                    u()
                } else u()
            }).catch(() => {
                u()
            })
        }, [a, t, r, u]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                className: M.verticalSeparator
            }), (0, i.jsx)(E.Sequencer, {
                fillParent: !0,
                className: M.qrLogin,
                step: f,
                steps: [0, 1],
                children: (0, i.jsx)("div", {
                    className: M.qrLoginInner,
                    children: (0, i.jsx)(P, {
                        state: a,
                        cancel: l,
                        hasPasswordlessExperiment: n,
                        conditionalMediationAbortController: s
                    })
                })
            })]
        })
    }
}