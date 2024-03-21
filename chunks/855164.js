function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("151426"),
        r = n("551042"),
        a = n("135230"),
        o = n("926994"),
        l = n("10641"),
        u = n("42887"),
        d = n("599110"),
        c = n("129978"),
        _ = n("171644"),
        f = n("49111"),
        E = n("782340"),
        h = n("86813");
    let g = "game_console_alert_modal",
        m = "game_console_ptt_alert_modal";
    var p = {
        maybeShowPTTAlert(e) {
            if (u.default.getMode() !== f.InputModes.PUSH_TO_TALK || (0, l.isDismissibleContentDismissed)(s.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
            let t = {
                    [f.PlatformTypes.XBOX]: E.default.Messages.PTT_NOT_SUPPORTED_XBOX,
                    [f.PlatformTypes.PLAYSTATION]: E.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION,
                    [f.PlatformTypes.PLAYSTATION_STAGING]: E.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION
                },
                n = t[e];
            return null == n ? Promise.resolve() : new Promise(e => {
                let t = () => {
                        (0, l.markDismissibleContentAsDismissed)(s.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT), e()
                    },
                    o = e => (0, i.jsx)(a.default, {
                        ...e,
                        title: n,
                        body: E.default.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
                        onConfirm: t,
                        titleClassName: h.title
                    });
                (0, r.hasModalOpen)(m) ? (0, r.updateModal)(m, o) : (0, r.openModal)(o, {
                    modalKey: m
                })
            })
        },
        showSelfDismissableAlert(e) {
            let {
                title: t,
                body: n,
                errorCodeMessage: s,
                reconnectPlatformType: l
            } = e, u = (0, i.jsx)(c.SelfDismissibleAlertBody, {
                body: n,
                errorCodeMessage: s,
                dismissCallback: () => (0, r.closeModal)(g)
            });

            function E() {
                null != l && ((0, o.default)(l), d.default.track(f.AnalyticEvents.ACCOUNT_LINK_STEP, {
                    previous_step: _.GAME_CONSOLE_ALERT_MODAL_LOCATION,
                    current_step: "desktop oauth",
                    platform_type: l
                }))
            }
            let h = e => (0, i.jsx)(a.default, {
                ...e,
                title: t,
                body: u,
                onConfirm: E
            });
            (0, r.hasModalOpen)(g) ? (0, r.updateModal)(g, h) : (0, r.openModal)(h, {
                modalKey: g
            })
        }
    }
}