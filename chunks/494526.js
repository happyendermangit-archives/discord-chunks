function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
        }
    }), n("411104"), n("47120");
    var s, a, i, r, l = n("735250"),
        o = n("470079"),
        u = n("615231"),
        d = n("261470"),
        c = n("544891"),
        f = n("481060"),
        h = n("570140"),
        E = n("893776"),
        g = n("99690"),
        _ = n("937154"),
        m = n("710845"),
        p = n("365007"),
        T = n("277390"),
        A = n("819570"),
        I = n("585483"),
        S = n("358085"),
        N = n("172517"),
        R = n("51144"),
        C = n("998502"),
        O = n("981631"),
        L = n("231338"),
        v = n("689938"),
        M = n("531690"),
        x = n("611273");
    (i = s || (s = {}))[i.INITIALIZING = 0] = "INITIALIZING", i[i.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", i[i.PENDING_FINISH = 2] = "PENDING_FINISH", i[i.PENDING_TICKET = 3] = "PENDING_TICKET", i[i.PENDING_LOGIN = 4] = "PENDING_LOGIN", i[i.FINISH = 5] = "FINISH", (r = a || (a = {}))[r.QR_CODE = 0] = "QR_CODE", r[r.CONFIRM = 1] = "CONFIRM";
    let b = n("515695"),
        y = new m.default("LoginQRSocket");

    function U(e) {
        let {
            text: t = ""
        } = e, [n, s] = o.useState(!1);
        return o.useEffect(() => {
            let e = new Image;
            e.src = b, e.onload = () => s(!0), e.onerror = () => s(!0)
        }, [b]), o.useEffect(() => {
            n && f.AccessibilityAnnouncer.announce(v.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
        }, [n]), (0, l.jsx)("div", {
            className: M.qrCodeContainer,
            children: "" !== t && n ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(T.default, {
                    className: M.qrCode,
                    size: 160,
                    text: t
                }), (0, l.jsx)("div", {
                    className: M.qrCodeOverlay,
                    children: (0, l.jsx)("img", {
                        src: b,
                        alt: ""
                    })
                })]
            }) : (0, l.jsx)("div", {
                className: M.qrCodeOverlay,
                "aria-label": v.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                "aria-busy": !0,
                children: (0, l.jsx)(f.Spinner, {
                    className: M.qrCode,
                    type: f.Spinner.Type.WANDERING_CUBES,
                    "aria-hidden": !0
                })
            })
        })
    }
    let D = e => {
        let {
            className: t,
            children: n
        } = e;
        return (0, l.jsx)(f.Text, {
            variant: "text-md/normal",
            color: "text-danger",
            className: t,
            children: n
        })
    };
    async function P(e) {
        let t;
        e.abort("Starting non-conditional mediation");
        let {
            challenge: n,
            ticket: s
        } = await (0, p.fetchWebAuthnPasswordlessChallenge)(), a = JSON.parse(n);
        t = S.isPlatformEmbedded && C.default.supportsFeature(O.NativeFeatures.WEBAUTHN) ? await C.default.webAuthnAuthenticate(n) : JSON.stringify(await (0, u.get)((0, u.parseRequestOptionsFromJSON)(a)));
        let i = await E.default.loginWebAuthn({
            ticket: s,
            credential: t
        });
        h.default.dispatch({
            type: "LOGIN_SUCCESS",
            token: i
        })
    }

    function G(e) {
        let {
            state: t,
            cancel: n,
            errorMessage: s,
            hasPasswordlessExperiment: a,
            conditionalMediationAbortController: i
        } = e;
        switch (t.step) {
            case 0:
            case 1:
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(U, {
                        text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
                    }), (0, l.jsx)(A.Title, {
                        className: x.marginBottom8,
                        children: v.default.Messages.LOGIN_WITH_QR
                    }), null != s ? (0, l.jsx)(D, {
                        children: s
                    }) : (0, l.jsx)(A.SubTitle, {
                        children: v.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
                    }), a && (0, l.jsx)(f.Button, {
                        size: f.ButtonSizes.XLARGE,
                        look: f.ButtonLooks.LINK,
                        color: f.ButtonColors.LINK,
                        onClick: () => P(i),
                        children: v.default.Messages.SIGN_IN_WITH_PASSKEY
                    })]
                });
            case 3:
            case 2: {
                let {
                    user: e
                } = t;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(g.default, {
                        className: M.qrAvatar,
                        user: e,
                        size: f.AvatarSizes.SIZE_120,
                        isMobile: !0,
                        status: L.StatusTypes.ONLINE
                    }), (0, l.jsx)(A.Title, {
                        className: x.marginBottom8,
                        children: v.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
                    }), (0, l.jsx)(A.SubTitle, {
                        children: v.default.Messages.LOGIN_AS.format({
                            username: "".concat(R.default.getUserTag(e))
                        })
                    }), (0, l.jsx)(f.Button, {
                        look: f.Button.Looks.BLANK,
                        color: f.Button.Colors.LINK,
                        size: f.Button.Sizes.MIN,
                        onClick: n,
                        className: M.startOverButton,
                        children: v.default.Messages.QR_CODE_LOGIN_START_OVER
                    })]
                })
            }
            case 4:
            case 5:
                return (0, l.jsx)(f.Spinner, {
                    type: f.Spinner.Type.WANDERING_CUBES
                })
        }
    }

    function w(e) {
        let {
            authTokenCallback: t,
            hasPasswordlessExperiment: n,
            conditionalMediationAbortController: s
        } = e, {
            state: a,
            rsaKeyPair: i,
            cancel: r,
            handleFailure: u
        } = function(e) {
            let [t, n] = o.useState(0), [s, a] = o.useState(!1), [i, r] = o.useState({
                step: 0
            }), [l, u] = o.useState(null), c = (0, _.default)(), f = o.useMemo(() => new d.default(1500, 3e4), []), h = o.useRef();
            h.current = o.useCallback(() => {
                r({
                    step: 0
                }), c ? n(e => e + 1) : (y.info("document is not visible, will defer reconnection when document becomes visible."), a(!0))
            }, [c]);
            let E = o.useCallback(() => {
                    (function(e) {
                        let {
                            current: t
                        } = e;
                        if (void 0 === t) throw Error("tried to unwrap an undefined value.");
                        return t
                    })(h)()
                }, [h]),
                g = o.useCallback(() => {
                    y.error("Could not complete QR code login, trying to restart with a new QR code."), r({
                        step: 0
                    }), !f.pending && f.fail(E)
                }, [E, f]);
            return o.useEffect(() => {
                c && s && 0 === i.step && (y.info("reconnecting, now that document is visible"), a(!1), n(e => e + 1))
            }, [i, c, s, a]), o.useEffect(() => {
                let t = Date.now(),
                    n = () => "".concat(Date.now() - t, "ms"),
                    s = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
                    a = new WebSocket(s);
                y.info("[0ms] connecting to ".concat(s));
                let i = e => y.info("[".concat(n(), "] ").concat(e)),
                    l = null,
                    o = null,
                    d = null,
                    c = null,
                    h = !0;

                function _() {
                    if (null != l) return l;
                    throw Error("No key pair set")
                }
                let m = () => {
                    h ? (h = !1, a.send(JSON.stringify({
                        op: "heartbeat"
                    }))) : (i("heartbeat timeout, reconnecting."), a.close(), g())
                };
                return a.onmessage = async t => {
                    let {
                        data: n
                    } = t, s = JSON.parse(n);
                    switch (s.op) {
                        case "nonce_proof": {
                            let e = s.encrypted_nonce,
                                t = await (0, N.decryptNonce)(_(), e);
                            i("computed nonce proof"), a.send(JSON.stringify({
                                op: "nonce_proof",
                                nonce: t
                            }));
                            return
                        }
                        case "pending_remote_init": {
                            f.succeed(), I.ComponentDispatch.dispatch(O.ComponentActions.WAVE_EMPHASIZE);
                            let e = await (0, N.publicKeyFingerprint)(_());
                            if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
                            i("handshake complete awaiting remote auth."), r({
                                step: 1,
                                fingerprint: e
                            });
                            return
                        }
                        case "pending_login": {
                            let e = s.ticket;
                            null == e && g(), r({
                                step: 4,
                                ticket: e
                            });
                            return
                        }
                        case "pending_ticket": {
                            I.ComponentDispatch.dispatch(O.ComponentActions.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting ticket/cancel.");
                            let e = s.encrypted_user_payload;
                            r({
                                step: 3,
                                user: await (0, N.decodeEncodedUserRecord)(_(), e)
                            });
                            return
                        }
                        case "pending_finish": {
                            I.ComponentDispatch.dispatch(O.ComponentActions.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting finish/cancel.");
                            let e = s.encrypted_user_payload;
                            r({
                                step: 2,
                                user: await (0, N.decodeEncodedUserRecord)(_(), e)
                            });
                            return
                        }
                        case "finish": {
                            I.ComponentDispatch.dispatch(O.ComponentActions.WAVE_EMPHASIZE), i("remote auth handshake finished.");
                            let t = s.encrypted_token;
                            r({
                                step: 5
                            }), e(await (0, N.decryptEncodedCiphertext)(_(), t));
                            return
                        }
                        case "cancel":
                            i("remote auth handshake cancelled."), E();
                            return;
                        case "hello": {
                            i("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
                            let e = s.heartbeat_interval;
                            c = setTimeout(() => {
                                c = null, m(), d = setInterval(m, e)
                            }, Math.floor(e * Math.random()));
                            return
                        }
                        case "heartbeat_ack":
                            h = !0
                    }
                }, a.onopen = async () => {
                    l = await (0, N.generateRsaKeyPair)(), o = await (0, N.serializePublicKey)(l);
                    let e = await (0, N.publicKeyFingerprint)(l);
                    i("connected, handshaking with fingerprint: ".concat(e)), a.send(JSON.stringify({
                        op: "init",
                        encoded_public_key: o
                    })), u(l)
                }, a.onclose = e => {
                    i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), g()
                }, a.onerror = e => {
                    i("disconnected, error: ".concat(JSON.stringify(e))), g()
                }, () => {
                    i("cleaning up"), a.onopen = () => null, a.onmessage = () => null, a.onclose = () => null, a.onerror = () => null, a.close(1e3), f.cancel(), null != c && clearTimeout(c), null != d && clearInterval(d)
                }
            }, [E, e, t, f, g]), {
                state: i,
                rsaKeyPair: l,
                cancel: E,
                handleFailure: g
            }
        }(t), h = function(e) {
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
                url: O.Endpoints.REMOTE_AUTH_LOGIN,
                body: {
                    ticket: a.ticket
                },
                oldFormErrors: !0
            }).then(async e => {
                if (null != i) try {
                    let n = await (0, N.decryptEncodedCiphertext)(i, e.body.encrypted_token);
                    t(n)
                } catch (e) {
                    u()
                } else u()
            }).catch(() => {
                u()
            })
        }, [a, t, i, u]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
                className: M.verticalSeparator
            }), (0, l.jsx)(f.Sequencer, {
                fillParent: !0,
                className: M.qrLogin,
                step: h,
                steps: [0, 1],
                children: (0, l.jsx)("div", {
                    className: M.qrLoginInner,
                    children: (0, l.jsx)(G, {
                        state: a,
                        cancel: r,
                        hasPasswordlessExperiment: n,
                        conditionalMediationAbortController: s
                    })
                })
            })]
        })
    }
}