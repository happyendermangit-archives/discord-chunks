function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("524437"),
        s = n("952265"),
        a = n("468026"),
        o = n("202120"),
        l = n("605236"),
        u = n("131951"),
        d = n("626135"),
        _ = n("542238"),
        c = n("927923"),
        E = n("981631"),
        I = n("689938"),
        T = n("396080");
    let f = "game_console_alert_modal",
        S = "game_console_ptt_alert_modal";
    t.default = {
        maybeShowPTTAlert(e) {
            if (u.default.getMode() !== E.InputModes.PUSH_TO_TALK || (0, l.isDismissibleContentDismissed)(r.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
            let t = {
                [E.PlatformTypes.XBOX]: I.default.Messages.PTT_NOT_SUPPORTED_XBOX,
                [E.PlatformTypes.PLAYSTATION]: I.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION,
                [E.PlatformTypes.PLAYSTATION_STAGING]: I.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION
            } [e];
            return null == t ? Promise.resolve() : new Promise(e => {
                let n = () => {
                        (0, l.markDismissibleContentAsDismissed)(r.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT), e()
                    },
                    o = e => (0, i.jsx)(a.default, {
                        ...e,
                        title: t,
                        body: I.default.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
                        onConfirm: n,
                        titleClassName: T.title
                    });
                (0, s.hasModalOpen)(S) ? (0, s.updateModal)(S, o) : (0, s.openModal)(o, {
                    modalKey: S
                })
            })
        },
        showSelfDismissableAlert(e) {
            let {
                title: t,
                body: n,
                errorCodeMessage: r,
                reconnectPlatformType: l
            } = e, u = (0, i.jsx)(_.SelfDismissibleAlertBody, {
                body: n,
                errorCodeMessage: r,
                dismissCallback: () => (0, s.closeModal)(f)
            });

            function I() {
                null != l && ((0, o.default)(l), d.default.track(E.AnalyticEvents.ACCOUNT_LINK_STEP, {
                    previous_step: c.GAME_CONSOLE_ALERT_MODAL_LOCATION,
                    current_step: "desktop oauth",
                    platform_type: l
                }))
            }
            let T = e => (0, i.jsx)(a.default, {
                ...e,
                title: t,
                body: u,
                onConfirm: I
            });
            (0, s.hasModalOpen)(f) ? (0, s.updateModal)(f, T) : (0, s.openModal)(T, {
                modalKey: f
            })
        }
    }
}