function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s, a = n("735250"),
        i = n("470079"),
        l = n("593473"),
        r = n("442837"),
        u = n("544891"),
        o = n("481060"),
        d = n("129293"),
        c = n("108427"),
        f = n("598077"),
        E = n("896797"),
        I = n("819570"),
        h = n("981631"),
        _ = n("930441"),
        p = n("689938"),
        T = n("794711");

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    r.default.initialize();
    class N extends(s = i.PureComponent) {
        componentDidMount() {
            let e = (0, d.default)(this.props.location),
                t = (0, l.parse)(this.props.location.search);
            u.HTTP.post({
                url: h.Endpoints.DISABLE_EMAIL_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    category: t.category,
                    email_type: t.email_type
                },
                oldFormErrors: !0
            }).then(e => {
                let {
                    body: {
                        user: n
                    }
                } = e, s = new f.default(n);
                this.setState({
                    success: !0,
                    busy: !1,
                    user: s,
                    category: t.category
                })
            }, () => this.setState({
                success: !1,
                busy: !1
            })), (0, c.trackAppUIViewed)("disable_email_notifications")
        }
        renderBusy() {
            return (0, a.jsx)(I.default, {
                children: (0, a.jsx)(I.AuthSpinner, {})
            })
        }
        renderCategorySuccess(e, t) {
            let {
                defaultRoute: n,
                transitionTo: s
            } = this.props, i = p.default.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_EMAIL_BODY.format({
                category: t
            });
            return (0, a.jsxs)(I.default, {
                children: [(0, a.jsx)(I.Title, {
                    className: T.marginBottom8,
                    children: p.default.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_HEADER
                }), (0, a.jsx)(I.SubTitle, {
                    children: i
                }), (0, a.jsx)(I.Button, {
                    className: T.marginTop20,
                    onClick: () => s(n),
                    children: p.default.Messages.CONTINUE_TO_WEBAPP
                }), (0, a.jsx)(I.Button, {
                    className: T.marginTop8,
                    color: I.Button.Colors.LINK,
                    look: I.Button.Looks.LINK,
                    onClick: () => s(h.Routes.SETTINGS("notifications", _.EMAILS_SUBSECTION)),
                    children: p.default.Messages.EMAIL_CATEGORY_MANAGE_SETTING_LABEL
                })]
            })
        }
        renderSuccess() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props, {
                user: n,
                category: s
            } = this.state;
            if (null != s) {
                let e = _.EmailCategoriesList.find(e => e.category === s);
                if (null != e) return this.renderCategorySuccess(s, e.label())
            }
            return (0, a.jsxs)(I.default, {
                children: [(0, a.jsx)(I.Avatar, {
                    src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                    size: o.AvatarSizes.DEPRECATED_SIZE_100,
                    className: T.marginBottom20
                }), (0, a.jsx)(I.Title, {
                    className: T.marginBottom8,
                    children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER
                }), (0, a.jsx)(I.SubTitle, {
                    children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY
                }), (0, a.jsx)(I.Button, {
                    className: T.marginTop40,
                    onClick: () => t(e),
                    children: p.default.Messages.CONTINUE_TO_WEBAPP
                })]
            })
        }
        renderError() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props;
            return (0, a.jsxs)(I.default, {
                children: [(0, a.jsx)(I.Image, {
                    src: n("105020"),
                    className: T.marginBottom20
                }), (0, a.jsx)(I.Title, {
                    className: T.marginBottom8,
                    children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                }), (0, a.jsx)(I.SubTitle, {
                    children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                }), (0, a.jsx)(I.Button, {
                    className: T.marginTop40,
                    onClick: () => t(e),
                    children: p.default.Messages.CONTINUE_TO_WEBAPP
                })]
            })
        }
        render() {
            let {
                busy: e,
                success: t
            } = this.state;
            return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError()
        }
        constructor(...e) {
            super(...e), m(this, "state", {
                busy: !0,
                success: !1,
                user: null,
                category: null
            })
        }
    }
    m(N, "defaultProps", {
        transitionTo: e => n.g.location.assign(e)
    }), t.default = r.default.connectStores([E.default], () => ({
        defaultRoute: E.default.defaultRoute
    }))(N)
}