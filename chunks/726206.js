function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("446674"),
        u = n("437822"),
        o = n("457108"),
        d = n("724038"),
        c = n("970366"),
        f = n("271938"),
        E = n("124969"),
        _ = n("599110"),
        I = n("49111"),
        h = n("782340"),
        p = n("180688"),
        T = n("890957");
    r.default.initialize();
    class m extends a.PureComponent {
        componentDidMount() {
            this.handleVerify(), (0, c.trackAppUIViewed)("verify_email")
        }
        renderVerifyFailed() {
            return (0, s.jsxs)(E.default, {
                children: [(0, s.jsx)(E.Image, {
                    src: n("768025"),
                    className: i(p.image, T.marginBottom20)
                }), (0, s.jsx)(E.Title, {
                    className: T.marginBottom8,
                    children: h.default.Messages.VERFICATION_EXPIRED
                }), (0, s.jsx)(E.SubTitle, {
                    className: T.marginBottom40,
                    children: h.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
                }), (0, s.jsx)(E.Button, {
                    onClick: this.handleLogin,
                    children: h.default.Messages._LOGIN
                })]
            })
        }
        renderVerifySucceeded() {
            return (0, s.jsxs)(E.default, {
                children: [(0, s.jsx)(E.Image, {
                    src: n("176872"),
                    className: i(p.image, T.marginBottom20)
                }), (0, s.jsx)(E.Title, {
                    className: T.marginBottom40,
                    children: h.default.Messages.VERIFICATION_VERIFIED
                }), (0, s.jsx)(E.Button, {
                    onClick: this.handleOpenApp,
                    children: h.default.Messages.VERIFICATION_OPEN_DISCORD
                })]
            })
        }
        renderVerifying() {
            return (0, s.jsxs)(E.default, {
                children: [(0, s.jsx)(E.Image, {
                    src: n("951536"),
                    className: i(p.image, T.marginBottom20)
                }), (0, s.jsx)(E.Title, {
                    className: T.marginBottom8,
                    children: h.default.Messages.VERIFICATION_VERIFYING
                }), (0, s.jsx)(E.SubTitle, {
                    className: T.marginBottom40,
                    children: h.default.Messages.ACTION_MAY_TAKE_A_MOMENT
                }), (0, s.jsx)(E.Button, {
                    submitting: !0,
                    color: E.Button.Colors.PRIMARY
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
            super(...e), this.handleVerify = () => {
                let e = (0, o.default)(this.props.location);
                null != e && u.default.verify(e)
            }, this.handleLogin = () => {
                let {
                    transitionTo: e
                } = this.props;
                e(I.Routes.LOGIN)
            }, this.handleOpenApp = () => {
                let {
                    verifyingUserId: e
                } = this.props;
                _.default.track(I.AnalyticEvents.VERIFY_ACCOUNT_APP_OPENED, {
                    verifying_user_id: e
                }), (0, d.default)("verify_email")
            }
        }
    }
    m.defaultProps = {
        transitionTo: e => n.g.location.assign(e)
    };
    var N = r.default.connectStores([f.default], () => ({
        verifyFailed: f.default.didVerifyFail(),
        verifyErrors: f.default.getVerifyErrors(),
        verifySucceeded: f.default.didVerifySucceed(),
        fingerprint: f.default.getFingerprint(),
        verifyingUserId: f.default.getVerifyingUserId()
    }))(m)
}