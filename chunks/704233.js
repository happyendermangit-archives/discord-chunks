function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("14782"),
        i = n("67381"),
        a = n("264518"),
        u = n("331639"),
        s = n("510077"),
        l = n("335911"),
        c = n("870331"),
        f = n("873094"),
        d = n("698779"),
        _ = n("281767"),
        E = n("941504"),
        p = n("396080");

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                m(e, t, n[t])
            })
        }
        return e
    }

    function I(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }
    var h = "game_console_alert_modal",
        O = "game_console_ptt_alert_modal";
    t.default = {
        maybeShowPTTAlert: function(e) {
            if (l.default.getMode() !== _.InputModes.PUSH_TO_TALK || (0, s.isDismissibleContentDismissed)(o.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
            var t, n = (m(t = {}, _.PlatformTypes.XBOX, E.default.Messages.PTT_NOT_SUPPORTED_XBOX), m(t, _.PlatformTypes.PLAYSTATION, E.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION), m(t, _.PlatformTypes.PLAYSTATION_STAGING, E.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION), t)[e];
            return null == n ? Promise.resolve() : new Promise(function(e) {
                var t = function() {
                        (0, s.markDismissibleContentAsDismissed)(o.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT), e()
                    },
                    u = function(e) {
                        return r.createElement(a.default, I(y({}, e), {
                            title: n,
                            body: E.default.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
                            onConfirm: t,
                            titleClassName: p.title
                        }))
                    };
                (0, i.hasModalOpen)(O) ? (0, i.updateModal)(O, u) : (0, i.openModal)(u, {
                    modalKey: O
                })
            })
        },
        showSelfDismissableAlert: function(e) {
            var t = e.title,
                n = e.body,
                o = e.errorCodeMessage,
                s = e.reconnectPlatformType,
                l = r.createElement(f.SelfDismissibleAlertBody, {
                    body: n,
                    errorCodeMessage: o,
                    dismissCallback: function() {
                        return (0, i.closeModal)(h)
                    }
                });

            function E() {
                null != s && ((0, u.default)({
                    platformType: s
                }), c.default.track(_.AnalyticEvents.ACCOUNT_LINK_STEP, {
                    previous_step: d.GAME_CONSOLE_ALERT_MODAL_LOCATION,
                    current_step: "desktop oauth",
                    platform_type: s
                }))
            }
            var p = function(e) {
                return r.createElement(a.default, I(y({}, e), {
                    title: t,
                    body: l,
                    onConfirm: E
                }))
            };
            (0, i.hasModalOpen)(h) ? (0, i.updateModal)(h, p) : (0, i.openModal)(p, {
                modalKey: h
            })
        }
    }
}