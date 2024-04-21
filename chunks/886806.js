function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s, a = n("735250"),
        l = n("470079"),
        i = n("120356"),
        r = n.n(i),
        u = n("442837"),
        o = n("893776"),
        d = n("129293"),
        c = n("17894"),
        f = n("108427"),
        E = n("314897"),
        _ = n("819570"),
        I = n("626135"),
        p = n("981631"),
        h = n("689938"),
        T = n("828381"),
        N = n("794711");

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    u.default.initialize();
    class m extends(s = l.PureComponent) {
        componentDidMount() {
            this.handleVerify(), (0, f.trackAppUIViewed)("verify_email")
        }
        renderVerifyFailed() {
            return (0, a.jsxs)(_.default, {
                children: [(0, a.jsx)(_.Image, {
                    src: n("375673"),
                    className: r()(T.image, N.marginBottom20)
                }), (0, a.jsx)(_.Title, {
                    className: N.marginBottom8,
                    children: h.default.Messages.VERFICATION_EXPIRED
                }), (0, a.jsx)(_.SubTitle, {
                    className: N.marginBottom40,
                    children: h.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
                }), (0, a.jsx)(_.Button, {
                    onClick: this.handleLogin,
                    children: h.default.Messages._LOGIN
                })]
            })
        }
        renderVerifySucceeded() {
            return (0, a.jsxs)(_.default, {
                children: [(0, a.jsx)(_.Image, {
                    src: n("73962"),
                    className: r()(T.image, N.marginBottom20)
                }), (0, a.jsx)(_.Title, {
                    className: N.marginBottom40,
                    children: h.default.Messages.VERIFICATION_VERIFIED
                }), (0, a.jsx)(_.Button, {
                    onClick: this.handleOpenApp,
                    children: h.default.Messages.VERIFICATION_OPEN_DISCORD
                })]
            })
        }
        renderVerifying() {
            return (0, a.jsxs)(_.default, {
                children: [(0, a.jsx)(_.Image, {
                    src: n("892235"),
                    className: r()(T.image, N.marginBottom20)
                }), (0, a.jsx)(_.Title, {
                    className: N.marginBottom8,
                    children: h.default.Messages.VERIFICATION_VERIFYING
                }), (0, a.jsx)(_.SubTitle, {
                    className: N.marginBottom40,
                    children: h.default.Messages.ACTION_MAY_TAKE_A_MOMENT
                }), (0, a.jsx)(_.Button, {
                    submitting: !0,
                    color: _.Button.Colors.PRIMARY
                })]
            })
        }
        render() {
            let {
                verifyFailed: e,
                verifySucceeded: t
            } = this.props;
            return e ? this.renderVerifyFailed() : t ? this.renderVerifySucceeded() : this.renderVerifying()
        }
        constructor(...e) {
            super(...e), g(this, "handleVerify", () => {
                let e = (0, d.default)(this.props.location);
                null != e && o.default.verify(e)
            }), g(this, "handleLogin", () => {
                let {
                    transitionTo: e
                } = this.props;
                e(p.Routes.LOGIN)
            }), g(this, "handleOpenApp", () => {
                let {
                    verifyingUserId: e
                } = this.props;
                I.default.track(p.AnalyticEvents.VERIFY_ACCOUNT_APP_OPENED, {
                    verifying_user_id: e
                }), (0, c.default)("verify_email")
            })
        }
    }
    g(m, "defaultProps", {
        transitionTo: e => n.g.location.assign(e)
    }), t.default = u.default.connectStores([E.default], () => ({
        verifyFailed: E.default.didVerifyFail(),
        verifyErrors: E.default.getVerifyErrors(),
        verifySucceeded: E.default.didVerifySucceed(),
        fingerprint: E.default.getFingerprint(),
        verifyingUserId: E.default.getVerifyingUserId()
    }))(m)
}