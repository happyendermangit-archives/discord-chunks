function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    }), n("222007");
    var a = n("37983"),
        r = n("884691"),
        s = n("917351"),
        i = n.n(s),
        l = n("88807"),
        u = n("558062"),
        o = n("432710"),
        d = n("446674"),
        c = n("77078"),
        f = n("960460"),
        h = n("489740"),
        E = n("355025"),
        p = n("51545"),
        C = n("155084"),
        m = n("393414"),
        S = n("90404"),
        g = n("599110"),
        _ = n("286235"),
        T = n("50885"),
        v = n("49111"),
        I = n("782340"),
        A = n("966585");

    function M() {
        let [e, t] = r.useState(!1), n = (0, d.useStateFromStores)([h.default], () => {
            var e;
            return (0, E.probablyHasBuildOverride)() ? null === (e = h.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
        });
        if (null == n) return null;
        let s = async () => {
            try {
                t(!0), await (0, f.clearBuildOverride)(), window.location.reload(!0)
            } catch (e) {
                t(!1)
            }
        };
        return (0, a.jsx)(c.Button, {
            size: c.ButtonSizes.LARGE,
            onClick: s,
            submitting: e,
            className: A.clearOverrideButton,
            children: I.default.Messages.CLEAR_BUILD_OVERRIDE
        })
    }
    let R = i.throttle(() => {
        C.default.increment({
            name: o.MetricEvents.APP_CRASHED,
            tags: ["reason:".concat(l.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(u.ErrorLevels.FATAL)]
        }, !0)
    }, 100, {
        trailing: !1
    });
    class N extends r.PureComponent {
        componentDidCatch(e, t) {
            this.triggerSoftCrash(e, t)
        }
        triggerSoftCrash(e, t) {
            let n = (0, m.getHistory)().location;
            this.setState({
                error: e,
                info: t
            });
            let a = _.default.captureCrash(e, {
                extra: t
            });
            g.default.track(v.AnalyticEvents.APP_CRASHED, {
                path: n.pathname,
                extra: t,
                error_message: e.message,
                error_stack: e.stack,
                sentry_issue_id: a,
                uses_client_mods: (0, p.usesClientMods)()
            }), R(), T.default.cleanupDisplaySleep()
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
                let e = (0, a.jsxs)("div", {
                        children: [(0, a.jsx)("p", {
                            children: I.default.Messages.ERRORS_UNEXPECTED_CRASH
                        }), (0, a.jsx)("p", {
                            children: I.default.Messages.ERRORS_ACTION_TO_TAKE
                        })]
                    }),
                    n = (0, a.jsxs)("div", {
                        className: A.buttons,
                        children: [(0, a.jsx)(c.Button, {
                            size: c.ButtonSizes.LARGE,
                            onClick: this._handleSubmitReport,
                            children: I.default.Messages.ERRORS_RELOAD
                        }), (0, a.jsx)(M, {})]
                    });
                return (0, a.jsx)(S.default, {
                    title: I.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                    note: null != t ? t() : e,
                    action: n,
                    className: A.errorPage
                })
            }
            return e
        }
        constructor(...e) {
            super(...e), this.state = {
                error: null,
                info: null
            }, this.discordErrorsSet = !1
        }
    }
    var x = N
}