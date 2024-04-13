function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s, a = n("735250"),
        i = n("470079"),
        l = n("803997"),
        r = n.n(l),
        u = n("442837"),
        o = n("893776"),
        d = n("129293"),
        c = n("17894"),
        f = n("108427"),
        E = n("314897"),
        I = n("819570"),
        h = n("626135"),
        _ = n("981631"),
        p = n("689938"),
        T = n("828381"),
        m = n("794711");

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    u.default.initialize();
    class g extends(s = i.PureComponent) {
        componentDidMount() {
            this.handleVerify(), (0, f.trackAppUIViewed)("verify_email")
        }
        renderVerifyFailed() {
            return (0, a.jsxs)(I.default, {
                children: [(0, a.jsx)(I.Image, {
                    src: n("375673"),
                    className: r()(T.image, m.marginBottom20)
                }), (0, a.jsx)(I.Title, {
                    className: m.marginBottom8,
                    children: p.default.Messages.VERFICATION_EXPIRED
                }), (0, a.jsx)(I.SubTitle, {
                    className: m.marginBottom40,
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
                    src: n("73962"),
                    className: r()(T.image, m.marginBottom20)
                }), (0, a.jsx)(I.Title, {
                    className: m.marginBottom40,
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
                    src: n("892235"),
                    className: r()(T.image, m.marginBottom20)
                }), (0, a.jsx)(I.Title, {
                    className: m.marginBottom8,
                    children: p.default.Messages.VERIFICATION_VERIFYING
                }), (0, a.jsx)(I.SubTitle, {
                    className: m.marginBottom40,
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
            super(...e), N(this, "handleVerify", () => {
                let e = (0, d.default)(this.props.location);
                null != e && o.default.verify(e)
            }), N(this, "handleLogin", () => {
                let {
                    transitionTo: e
                } = this.props;
                e(_.Routes.LOGIN)
            }), N(this, "handleOpenApp", () => {
                let {
                    verifyingUserId: e
                } = this.props;
                h.default.track(_.AnalyticEvents.VERIFY_ACCOUNT_APP_OPENED, {
                    verifying_user_id: e
                }), (0, c.default)("verify_email")
            })
        }
    }
    N(g, "defaultProps", {
        transitionTo: e => n.g.location.assign(e)
    }), t.default = u.default.connectStores([E.default], () => ({
        verifyFailed: E.default.didVerifyFail(),
        verifyErrors: E.default.getVerifyErrors(),
        verifySucceeded: E.default.didVerifySucceed(),
        fingerprint: E.default.getFingerprint(),
        verifyingUserId: E.default.getVerifyingUserId()
    }))(g)
}