function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("392711"),
        a = n.n(s),
        o = n("818405"),
        l = n("587158"),
        u = n("286379"),
        d = n("442837"),
        _ = n("481060"),
        c = n("386506"),
        E = n("304761"),
        I = n("865427"),
        T = n("25779"),
        f = n("797614"),
        S = n("703656"),
        h = n("586576"),
        A = n("626135"),
        m = n("960048"),
        N = n("998502"),
        p = n("981631"),
        O = n("689938"),
        R = n("898816");

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g() {
        let [e, t] = r.useState(!1);
        if (null == (0, d.useStateFromStores)([E.default], () => {
                var e;
                return (0, I.probablyHasBuildOverride)() ? null === (e = E.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
            })) return null;
        let n = async () => {
            try {
                t(!0), await (0, c.clearBuildOverride)(), window.location.reload(!0)
            } catch (e) {
                t(!1)
            }
        };
        return (0, i.jsx)(_.Button, {
            size: _.ButtonSizes.LARGE,
            onClick: n,
            submitting: e,
            className: R.clearOverrideButton,
            children: O.default.Messages.CLEAR_BUILD_OVERRIDE
        })
    }
    let L = a().throttle(e => {
        f.default.increment({
            name: u.MetricEvents.APP_CRASHED,
            tags: ["reason:".concat(o.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(l.ErrorLevels.FATAL), "modded_client:".concat(e)]
        }, !0)
    }, 100, {
        trailing: !1
    });
    class D extends r.PureComponent {
        componentDidCatch(e, t) {
            this.triggerSoftCrash(e, t)
        }
        triggerSoftCrash(e, t) {
            let n = (0, S.getHistory)().location;
            this.setState({
                error: e,
                info: t
            });
            let i = (0, T.usesClientMods)(),
                r = m.default.captureCrash(e, {
                    extra: t
                });
            A.default.track(p.AnalyticEvents.APP_CRASHED, {
                path: n.pathname,
                extra: t,
                error_message: e.message,
                error_stack: e.stack,
                sentry_issue_id: r,
                uses_client_mods: i
            }), L(i), N.default.cleanupDisplaySleep()
        }
        _handleSubmitReport() {
            location.reload(!0)
        }
        componentDidMount() {
            null == window.DiscordErrors && (window.DiscordErrors = {
                softCrash: e => {
                    this.triggerSoftCrash(e)
                }
            }, this.discordErrorsSet = !0)
        }
        componentWillUnmount() {
            this.discordErrorsSet && (window.DiscordErrors = null, this.discordErrorsSet = !1)
        }
        render() {
            let {
                children: e,
                renderCustomMessage: t
            } = this.props;
            if (null !== this.state.error) {
                let e = (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("p", {
                            children: O.default.Messages.ERRORS_UNEXPECTED_CRASH
                        }), (0, i.jsx)("p", {
                            children: O.default.Messages.ERRORS_ACTION_TO_TAKE
                        })]
                    }),
                    n = (0, i.jsxs)("div", {
                        className: R.buttons,
                        children: [(0, i.jsx)(_.Button, {
                            size: _.ButtonSizes.LARGE,
                            onClick: this._handleSubmitReport,
                            children: O.default.Messages.ERRORS_RELOAD
                        }), (0, i.jsx)(g, {})]
                    });
                return (0, i.jsx)(h.default, {
                    title: O.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                    note: null != t ? t() : e,
                    action: n,
                    className: R.errorPage
                })
            }
            return e
        }
        constructor(...e) {
            super(...e), C(this, "state", {
                error: null,
                info: null
            }), C(this, "discordErrorsSet", !1)
        }
    }
    t.default = D
}