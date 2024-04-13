function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104");
    var s, a, i = n("735250"),
        l = n("470079"),
        r = n("803997"),
        u = n.n(r),
        o = n("442837"),
        d = n("570140"),
        c = n("893776"),
        f = n("533307"),
        E = n("978085"),
        I = n("232567"),
        h = n("362762"),
        _ = n("108427"),
        p = n("314897"),
        T = n("896797"),
        m = n("82142"),
        N = n("283595"),
        g = n("55563"),
        A = n("819570"),
        S = n("669079"),
        v = n("63063"),
        O = n("51144"),
        C = n("481153"),
        R = n("781428"),
        x = n("109894"),
        D = n("981631"),
        P = n("689938"),
        L = n("794711");

    function M(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    o.default.initialize(), (a = s || (s = {})).REGISTER = "register", a.LOGIN = "login";
    class b extends l.PureComponent {
        componentDidMount() {
            let {
                authenticated: e,
                isResolved: t
            } = this.props;
            e && this.handleAuthenticated(), !t && this.resolveGiftCode(), (0, _.trackAppUIViewed)("gift_code")
        }
        componentDidUpdate(e) {
            let {
                authenticated: t,
                isResolved: n
            } = this.props;
            !n && d.default.wait(() => {
                this.resolveGiftCode()
            }), t && !e.authenticated && this.handleAuthenticated(), !t && e.authenticated && this.setState({
                currentUser: null
            })
        }
        handleAuthenticated() {
            let {
                currentUser: e
            } = this.state;
            E.fetchLibrary(), null == e && this.refreshUser()
        }
        get requiresVerification() {
            let {
                currentUser: e
            } = this.state;
            return null != e && !e.verified
        }
        getCode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
            return e.match.params.giftCode
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
            return e.login ? "login" : "register"
        }
        getErrorMessage(e) {
            let {
                libraryApplication: t,
                sku: n
            } = this.props, {
                error: s
            } = this.state, a = null != s ? s.code : null;
            return a === D.AbortCodes.INVALID_GIFT_SELF_REDEMPTION ? P.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT : a === D.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === D.SKUProductLines.COLLECTIBLES ? P.default.Messages.GIFT_ERROR_OWNED : null != t || a === D.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED ? P.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({
                libraryLink: D.Routes.APPLICATION_LIBRARY
            }) : e.isClaimed || a === D.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED ? P.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED : a === D.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? P.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT : void 0
        }
        renderSpinner(e) {
            return (0, i.jsxs)(A.default, {
                children: [(0, i.jsx)(A.Title, {
                    children: e
                }), (0, i.jsx)(A.AuthSpinner, {})]
            })
        }
        renderExpiredInvite() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props;
            return (0, i.jsxs)(A.default, {
                children: [(0, i.jsx)(A.Image, {
                    src: n("167969"),
                    className: L.marginBottom8
                }), (0, i.jsx)(A.Title, {
                    className: u()(L.marginTop8, L.marginBottom8),
                    children: P.default.Messages.GIFT_CODE_AUTH_INVALID_TITLE
                }), (0, i.jsx)(A.SubTitle, {
                    children: P.default.Messages.GIFT_CODE_AUTH_INVALID_BODY
                }), (0, i.jsx)(A.Button, {
                    className: u()(L.marginTop40, L.marginBottom8),
                    onClick: () => t(e),
                    children: P.default.Messages.CONTINUE_TO_WEBAPP
                }), (0, i.jsx)(A.Button, {
                    onClick: () => window.open(v.default.getArticleURL(D.HelpdeskArticles.GIFTING), "_blank"),
                    look: A.Button.Looks.LINK,
                    color: A.Button.Colors.LINK,
                    children: P.default.Messages.GIFT_CODE_AUTH_INVALID_TIP
                })]
            })
        }
        renderAppOpened() {
            return (0, i.jsxs)(A.default, {
                children: [(0, i.jsx)(A.Title, {
                    className: L.marginBottom8,
                    children: P.default.Messages.APP_OPENED_TITLE
                }), (0, i.jsx)(A.SubTitle, {
                    children: P.default.Messages.APP_OPENED_BODY
                }), (0, i.jsx)(A.Button, {
                    className: L.marginTop40,
                    onClick: () => this.setState({
                        continueOnWeb: !0
                    }),
                    children: P.default.Messages.GIFT_CODE_AUTH_CONTINUE_IN_BROWSER
                })]
            })
        }
        renderVerification(e) {
            let {
                sentVerification: t
            } = this.state;
            return (0, i.jsxs)(A.default, {
                children: [(0, i.jsx)(A.Image, {
                    src: n("892235"),
                    className: L.marginBottom8
                }), (0, i.jsx)(A.Title, {
                    children: P.default.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format({
                        username: e.username
                    })
                }), (0, i.jsx)(A.SubTitle, {
                    className: L.marginTop20,
                    children: P.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED
                }), (0, i.jsx)(A.Button, {
                    disabled: t,
                    className: L.marginTop40,
                    onClick: this.handleResendVerification,
                    children: t ? P.default.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT : P.default.Messages.RESEND_VERIFICATION_EMAIL
                }), (0, i.jsx)(A.Button, {
                    look: A.Button.Looks.LINK,
                    color: A.Button.Colors.LINK,
                    onClick: this.refreshUser,
                    className: L.marginTop8,
                    children: P.default.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN
                })]
            })
        }
        renderAuthenticated(e, t) {
            let n = this.getErrorMessage(e);
            return (0, i.jsxs)(A.default, {
                children: [(0, i.jsx)(C.default, {
                    giftCode: e
                }), (0, i.jsx)(A.Button, {
                    disabled: null != n,
                    className: L.marginTop40,
                    onClick: this.handleAccept,
                    children: P.default.Messages.GIFT_CODE_AUTH_ACCEPT
                }), null != n ? (0, i.jsx)(A.SubTitle, {
                    className: L.marginTop20,
                    children: n
                }) : (0, i.jsx)(A.SubText, {
                    className: L.marginTop20,
                    children: P.default.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
                        userTag: O.default.getUserTag(t),
                        onLogoutClick: this.handleLogout
                    })
                })]
            })
        }
        render() {
            let {
                nativeAppState: e,
                sku: t,
                authenticated: n,
                giftCode: s,
                isResolved: a,
                isAccepting: l,
                transitionTo: r,
                location: u
            } = this.props, {
                fetchingUser: o,
                continueOnWeb: d
            } = this.state;
            if (e === D.NativeAppStates.OPEN && !d) return this.renderAppOpened();
            if (e === D.NativeAppStates.OPENING) return this.renderSpinner(P.default.Messages.APP_OPENING);
            if (l) return this.renderSpinner(P.default.Messages.GIFT_CODE_AUTH_ACCEPTING);
            if (null == s) return a ? this.renderExpiredInvite() : this.renderSpinner(P.default.Messages.GIFT_CODE_AUTH_RESOLVING);
            if (a) {
                if (n) {
                    let e = this.state.currentUser;
                    return o || null == e ? this.renderSpinner(P.default.Messages.GIFT_CODE_AUTH_FETCHING_USER) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(s, e)
                }
                return "login" === this.getMode() ? (0, i.jsx)(R.default, {
                    giftCodeSKU: t,
                    giftCode: s,
                    transitionTo: r,
                    location: u
                }) : (0, i.jsx)(x.default, {
                    giftCodeSKU: t,
                    giftCode: s,
                    transitionTo: r,
                    location: u
                })
            }
            return null
        }
        constructor(...e) {
            super(...e), M(this, "state", {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1
            }), M(this, "refreshUser", () => {
                this.setState({
                    fetchingUser: !0
                }), I.fetchCurrentUser({
                    withAnalyticsToken: !0
                }).then(e => this.setState({
                    currentUser: e,
                    fetchingUser: !1
                })).catch(() => this.setState({
                    fetchingUser: !1
                }))
            }), M(this, "handleLogout", () => {
                let e = this.props.match.params.giftCode;
                c.default.logout(D.Routes.GIFT_CODE_LOGIN(e))
            }), M(this, "handleResendVerification", () => {
                c.default.verifyResend(), this.setState({
                    sentVerification: !0
                })
            }), M(this, "handleAccept", async () => {
                let {
                    transitionTo: e,
                    giftCode: t
                } = this.props;
                if (null == t) throw Error("Trying to accept gift before resolve");
                let n = this.getCode();
                try {
                    this.setState({
                        error: null
                    }), await f.default.redeemGiftCode({
                        code: n
                    }), e(D.Routes.APP)
                } catch (e) {
                    this.setState({
                        error: e
                    })
                }
            }), M(this, "resolveGiftCode", () => {
                let {
                    transitionTo: e
                } = this.props, t = this.getCode();
                f.default.resolveGiftCode(t, !0, !0).then(n => {
                    null != n && null != n.giftCode.promotion && e(D.Routes.BILLING_PROMOTION_REDEMPTION(t))
                })
            })
        }
    }
    t.default = o.default.connectStores([m.default, N.default, p.default, g.default, T.default, h.default], e => {
        let t = e.match.params.giftCode,
            n = m.default.get(t),
            s = null != n ? g.default.get(n.skuId) : null;
        return {
            giftCode: n,
            sku: s,
            libraryApplication: null != s && (null == n ? void 0 : n.entitlementBranches) != null ? S.firstLibraryApplicationForGiftCode(n.entitlementBranches, s, N.default) : null,
            authenticated: p.default.isAuthenticated(),
            defaultRoute: T.default.defaultRoute,
            isResolved: m.default.getIsResolved(t),
            isAccepting: m.default.getIsAccepting(t),
            libraryApplicationsFetched: N.default.fetched,
            nativeAppState: h.default.getState(t)
        }
    })(b)
}