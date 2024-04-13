function(e, t, n) {
    "use strict";
    n.r(t);
    var s = n("735250"),
        a = n("470079"),
        i = n("803997"),
        r = n.n(i),
        l = n("873546"),
        o = n("481060"),
        u = n("605782"),
        d = n("703656"),
        c = n("980483"),
        f = n("612744"),
        h = n("624138"),
        g = n("830064"),
        E = n("981631"),
        m = n("747916");
    let p = (0, h.cssValueToNumber)(m.responsiveWidthMobile),
        _ = [E.Routes.LOGIN, E.Routes.LOGIN_HANDOFF, E.Routes.REGISTER, E.Routes.INVITE(""), E.Routes.GIFT_CODE(""), E.Routes.GUILD_TEMPLATE_LOGIN(""), E.Routes.GUILD_TEMPLATE(""), E.Routes.DISABLE_EMAIL_NOTIFICATIONS, E.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, E.Routes.BILLING_PREMIUM_SUBSCRIBE, E.Routes.BILLING_PAYMENT_SOURCES_CREATE, E.Routes.BILLING_PAYMENTS, E.Routes.BILLING_PREMIUM_SWITCH_PLAN, E.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, E.Routes.VERIFY, E.Routes.VERIFY_HUB_EMAIL, E.Routes.REJECT_IP, E.Routes.REJECT_MFA, E.Routes.AUTHORIZE_IP, E.Routes.AUTHORIZE_PAYMENT, E.Routes.RESET, E.Routes.HANDOFF, E.Routes.REPORT, E.Routes.REPORT_SECOND_LOOK];

    function S(e) {
        return _.some(t => e.startsWith(t))
    }
    class R extends a.Component {
        componentDidMount() {
            window.addEventListener("resize", this.handleResize)
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.handleResize)
        }
        mobileTransitionTo(e, t) {
            if (S(e))(0, d.transitionTo)(e, t);
            else {
                let n = null != t && null != t.search ? t.search : null;
                window.location = null == n ? e : "".concat(e, "?").concat(n)
            }
        }
        mobileReplaceWith(e) {
            S(e) ? (0, d.replaceWith)(e) : window.location = e
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
                className: m.characterBackground,
                children: (0, s.jsx)(o.HeadingLevel, {
                    forceLevel: 1,
                    children: null != e ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(c.default, {
                            show: !0,
                            className: r()(m.logo)
                        }), (0, s.jsx)(f.Splash, {
                            splash: e,
                            children: t
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(g.default, {
                            className: m.artwork,
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
            return e || l.isMobile || l.isTablet || t ? this.renderMobile() : this.renderDefault()
        }
        constructor(e) {
            var t, n, s;
            super(e), t = this, n = "handleResize", s = () => {
                this.setState({
                    isMobileWidth: window.innerWidth <= p
                })
            }, n in t ? Object.defineProperty(t, n, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = s, this.state = {
                isMobileWidth: window.innerWidth <= p
            }
        }
    }
    t.default = R
}