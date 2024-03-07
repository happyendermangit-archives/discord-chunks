function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        useFocusModeEnabled: function() {
            return N
        },
        setFocusMode: function() {
            return O
        }
    });
    var t = E("750028"),
        o = E("404118"),
        n = E("583232"),
        r = E("845579"),
        a = E("872173"),
        i = E("101125"),
        I = E("599110"),
        s = E("34676"),
        T = E("49111"),
        S = E("782340");

    function N() {
        let e = r.FocusMode.useSetting(),
            _ = r.FocusModeExpiresAtSetting.useSetting();
        return e && ("0" === _ || new Date(Number(_)).getTime() - new Date().getTime() > 0)
    }

    function O(e, _) {
        let E = r.FocusMode.getSetting();
        a.PreloadedUserSettingsActionCreators.updateAsync("notifications", E => {
            E.quietMode = t.BoolValue.create({
                value: e
            }), E.focusModeExpiresAtMs = e && null != _ ? "".concat(Date.now() + _) : "0"
        }, a.UserSettingsDelay.INFREQUENT_USER_ACTION), I.default.track(T.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: s.NotificationSettingsUpdateType.ACCOUNT,
            quiet_mode_enabled: e,
            quiet_mode_enabled_old: E
        }), i.default.getStatus() === T.StatusTypes.DND && e && null == _ && o.default.show({
            title: S.default.Messages.QUIET_MODE_WHILE_DND_UPSELL_TITLE,
            body: S.default.Messages.QUIET_MODE_WHILE_DND_UPSELL_BODY,
            cancelText: S.default.Messages.NO_THANKS,
            confirmText: S.default.Messages.OKAY,
            onConfirm: () => {
                (0, n.default)(T.StatusTypes.ONLINE)
            }
        })
    }
}