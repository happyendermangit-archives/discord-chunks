function(e, t, s) {
    "use strict";
    s.r(t), s("47120");
    var n, a = s("735250"),
        l = s("470079"),
        i = s("803997"),
        r = s.n(i),
        u = s("442837"),
        o = s("893776"),
        d = s("129293"),
        c = s("17894"),
        f = s("108427"),
        E = s("314897"),
        I = s("819570"),
        _ = s("626135"),
        h = s("981631"),
        p = s("689938"),
        T = s("828381"),
        N = s("794711");

    function g(e, t, s) {
        return t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s, e
    }
    u.default.initialize();
    class m extends(n = l.PureComponent) {
        componentDidMount() {
            this.handleVerify(), (0, f.trackAppUIViewed)("verify_email")
        }
        renderVerifyFailed() {
            return (0, a.jsxs)(I.default, {
                children: [(0, a.jsx)(I.Image, {
                    src: s("375673"),
                    className: r()(T.image, N.marginBottom20)
                }), (0, a.jsx)(I.Title, {
                    className: N.marginBottom8,
                    children: p.default.Messages.VERFICATION_EXPIRED
                }), (0, a.jsx)(I.SubTitle, {
                    className: N.marginBottom40,
                    children: p.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
                }), (0, a.jsx)(I.Button, {
                    onClick: this.handleLogin,
                    children: p.default.Messages._LOGIN
                })]
            })
        }
        renderVerifySucceeded() {
            return (0, a.jsxs)(I.default, {
                children: [(0, a.jsx)(I.Image, {
                    src: s("73962"),
                    className: r()(T.image, N.marginBottom20)
                }), (0, a.jsx)(I.Title, {
                    className: N.marginBottom40,
                    children: p.default.Messages.VERIFICATION_VERIFIED
                }), (0, a.jsx)(I.Button, {
                    onClick: this.handleOpenApp,
                    children: p.default.Messages.VERIFICATION_OPEN_DISCORD
                })]
            })
        }
        renderVerifying() {
            return (0, a.jsxs)(I.default, {
                children: [(0, a.jsx)(I.Image, {
                    src: s("892235"),
                    className: r()(T.image, N.marginBottom20)
                }), (0, a.jsx)(I.Title, {
                    className: N.marginBottom8,
                    children: p.default.Messages.VERIFICATION_VERIFYING
                }), (0, a.jsx)(I.SubTitle, {
                    className: N.marginBottom40,
                    children: p.default.Messages.ACTION_MAY_TAKE_A_MOMENT
                }), (0, a.jsx)(I.Button, {
                    submitting: !0,
                    color: I.Button.Colors.PRIMARY
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
                e(h.Routes.LOGIN)
            }), g(this, "handleOpenApp", () => {
                let {
                    verifyingUserId: e
                } = this.props;
                _.default.track(h.AnalyticEvents.VERIFY_ACCOUNT_APP_OPENED, {
                    verifying_user_id: e
                }), (0, c.default)("verify_email")
            })
        }
    }
    g(m, "defaultProps", {
        transitionTo: e => s.g.location.assign(e)
    }), t.default = u.default.connectStores([E.default], () => ({
        verifyFailed: E.default.didVerifyFail(),
        verifyErrors: E.default.getVerifyErrors(),
        verifySucceeded: E.default.didVerifySucceed(),
        fingerprint: E.default.getFingerprint(),
        verifyingUserId: E.default.getVerifyingUserId()
    }))(m)
}