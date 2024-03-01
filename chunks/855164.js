function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var s = n("37983");
    n("884691");
    var i = n("151426"),
        r = n("551042"),
        a = n("135230"),
        o = n("926994"),
        d = n("10641"),
        u = n("42887"),
        l = n("599110"),
        f = n("129978"),
        _ = n("171644"),
        c = n("49111"),
        g = n("782340"),
        m = n("86813");
    let h = "game_console_alert_modal",
        v = "game_console_ptt_alert_modal";
    var E = {
        maybeShowPTTAlert(e) {
            if (u.default.getMode() !== c.InputModes.PUSH_TO_TALK || (0, d.isDismissibleContentDismissed)(i.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
            let t = {
                    [c.PlatformTypes.XBOX]: g.default.Messages.PTT_NOT_SUPPORTED_XBOX,
                    [c.PlatformTypes.PLAYSTATION]: g.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION,
                    [c.PlatformTypes.PLAYSTATION_STAGING]: g.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION
                },
                n = t[e];
            return null == n ? Promise.resolve() : new Promise(e => {
                let t = () => {
                        (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT), e()
                    },
                    o = e => (0, s.jsx)(a.default, {
                        ...e,
                        title: n,
                        body: g.default.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
                        onConfirm: t,
                        titleClassName: m.title
                    });
                (0, r.hasModalOpen)(v) ? (0, r.updateModal)(v, o) : (0, r.openModal)(o, {
                    modalKey: v
                })
            })
        },
        showSelfDismissableAlert(e) {
            let {
                title: t,
                body: n,
                errorCodeMessage: i,
                reconnectPlatformType: d
            } = e, u = (0, s.jsx)(f.SelfDismissibleAlertBody, {
                body: n,
                errorCodeMessage: i,
                dismissCallback: () => (0, r.closeModal)(h)
            });

            function g() {
                null != d && ((0, o.default)(d), l.default.track(c.AnalyticEvents.ACCOUNT_LINK_STEP, {
                    previous_step: _.GAME_CONSOLE_ALERT_MODAL_LOCATION,
                    current_step: "desktop oauth",
                    platform_type: d
                }))
            }
            let m = e => (0, s.jsx)(a.default, {
                ...e,
                title: t,
                body: u,
                onConfirm: g
            });
            (0, r.hasModalOpen)(h) ? (0, r.updateModal)(h, m) : (0, r.openModal)(m, {
                modalKey: h
            })
        }
    }
}