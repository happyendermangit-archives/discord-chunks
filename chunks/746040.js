function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var s = n("37983"),
        a = n("884691"),
        r = n("414456"),
        l = n.n(r),
        i = n("394846"),
        o = n("77078"),
        u = n("2021"),
        d = n("393414"),
        c = n("725484"),
        E = n("554054"),
        f = n("159885"),
        _ = n("528502"),
        h = n("49111"),
        g = n("513680");
    let m = (0, f.cssValueToNumber)(g.responsiveWidthMobile),
        p = [h.Routes.LOGIN, h.Routes.LOGIN_HANDOFF, h.Routes.REGISTER, h.Routes.INVITE(""), h.Routes.GIFT_CODE(""), h.Routes.GUILD_TEMPLATE_LOGIN(""), h.Routes.GUILD_TEMPLATE(""), h.Routes.DISABLE_EMAIL_NOTIFICATIONS, h.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, h.Routes.BILLING_PREMIUM_SUBSCRIBE, h.Routes.BILLING_PAYMENT_SOURCES_CREATE, h.Routes.BILLING_PAYMENTS, h.Routes.BILLING_PREMIUM_SWITCH_PLAN, h.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, h.Routes.VERIFY, h.Routes.VERIFY_HUB_EMAIL, h.Routes.REJECT_IP, h.Routes.REJECT_MFA, h.Routes.AUTHORIZE_IP, h.Routes.AUTHORIZE_PAYMENT, h.Routes.RESET, h.Routes.HANDOFF, h.Routes.REPORT, h.Routes.REPORT_SECOND_LOOK];

    function T(e) {
        return p.some(t => e.startsWith(t))
    }
    class I extends a.Component {
        componentDidMount() {
            window.addEventListener("resize", this.handleResize)
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.handleResize)
        }
        mobileTransitionTo(e, t) {
            if (T(e))(0, d.transitionTo)(e, t);
            else {
                let n = null != t && null != t.search ? t.search : null;
                window.location = null == n ? e : "".concat(e, "?").concat(n)
            }
        }
        mobileReplaceWith(e) {
            T(e) ? (0, d.replaceWith)(e) : window.location = e
        }
        renderDefault() {
            let {
                splash: e
            } = this.props, t = (0, s.jsx)(u.default, {
                component: a.Fragment,
                children: a.Children.map(this.props.children, e => a.cloneElement(e, {
                    transitionTo: d.transitionTo,
                    replaceWith: d.replaceWith
                }))
            });
            return (0, s.jsx)("div", {
                className: g.characterBackground,
                children: (0, s.jsx)(o.HeadingLevel, {
                    forceLevel: 1,
                    children: null != e ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(c.default, {
                            show: !0,
                            className: l(g.logo)
                        }), (0, s.jsx)(E.Splash, {
                            splash: e,
                            children: t
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(_.default, {
                            className: g.artwork,
                            preserveAspectRatio: "xMinYMin slice"
                        }), t]
                    })
                })
            })
        }
        renderMobile() {
            return (0, s.jsx)(u.default, {
                component: a.Fragment,
                children: a.Children.map(this.props.children, e => a.cloneElement(e, {
                    transitionTo: this.mobileTransitionTo,
                    replaceWith: this.mobileReplaceWith
                }))
            })
        }
        render() {
            let {
                isMobileWidth: e
            } = this.state, t = navigator.userAgent.includes("GameLauncher");
            return e || i.isMobile || i.isTablet || t ? this.renderMobile() : this.renderDefault()
        }
        constructor(e) {
            super(e), this.handleResize = () => {
                this.setState({
                    isMobileWidth: window.innerWidth <= m
                })
            }, this.state = {
                isMobileWidth: window.innerWidth <= m
            }
        }
    }
    var A = I
}