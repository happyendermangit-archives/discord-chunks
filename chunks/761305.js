function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s, a = n("735250"),
        i = n("470079"),
        l = n("593473"),
        r = n("442837"),
        u = n("544891"),
        o = n("108427"),
        d = n("601964"),
        c = n("896797"),
        f = n("819570"),
        E = n("129293"),
        I = n("981631"),
        h = n("689938"),
        _ = n("794711");

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    r.default.initialize();
    class T extends(s = i.PureComponent) {
        componentDidMount() {
            let e = (0, E.default)(this.props.location),
                t = (0, l.parse)(this.props.location.search);
            u.HTTP.post({
                url: I.Endpoints.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    guild_id: t.guild_id
                },
                oldFormErrors: !0
            }).then(e => {
                let {
                    body: {
                        guild: t
                    }
                } = e, n = new d.default(t);
                this.setState({
                    success: !0,
                    busy: !1,
                    guild: n
                })
            }, () => this.setState({
                success: !1,
                busy: !1
            })), (0, o.trackAppUIViewed)("disable_server_highlight_notifications")
        }
        renderBusy() {
            return (0, a.jsx)(f.default, {
                children: (0, a.jsx)(f.AuthSpinner, {})
            })
        }
        renderSuccess() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props, {
                guild: n
            } = this.state;
            return (0, a.jsxs)(f.default, {
                children: [(0, a.jsx)(f.Title, {
                    className: _.marginBottom8,
                    children: h.default.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_HEADER
                }), (0, a.jsx)(f.SubTitle, {
                    children: h.default.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_BODY.format({
                        guildName: n.name
                    })
                }), (0, a.jsx)(f.Button, {
                    className: _.marginTop40,
                    onClick: () => t(e),
                    children: h.default.Messages.CONTINUE_TO_WEBAPP
                }), (0, a.jsx)(f.Button, {
                    className: _.marginTop8,
                    color: f.Button.Colors.LINK,
                    look: f.Button.Looks.LINK,
                    onClick: () => {
                        t(I.Routes.USER_GUILD_NOTIFICATION_SETTINGS(n.id))
                    },
                    children: h.default.Messages.SERVER_HIGHLIGHT_MANAGE_SETTINGS
                })]
            })
        }
        renderError() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props;
            return (0, a.jsxs)(f.default, {
                children: [(0, a.jsx)(f.Image, {
                    src: n("105020"),
                    className: _.marginBottom20
                }), (0, a.jsx)(f.Title, {
                    className: _.marginBottom8,
                    children: h.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                }), (0, a.jsx)(f.SubTitle, {
                    children: h.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                }), (0, a.jsx)(f.Button, {
                    className: _.marginTop40,
                    onClick: () => t(e),
                    children: h.default.Messages.CONTINUE_TO_WEBAPP
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
            super(...e), p(this, "state", {
                busy: !0,
                success: !1,
                guild: null
            })
        }
    }
    p(T, "defaultProps", {
        transitionTo: e => n.g.location.assign(e)
    }), t.default = r.default.connectStores([c.default], () => ({
        defaultRoute: c.default.defaultRoute
    }))(T)
}