function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setFocusMode: function() {
            return E
        },
        useFocusModeEnabled: function() {
            return _
        }
    });
    var r = n("700449"),
        o = n("483587"),
        i = n("389723"),
        a = n("53867"),
        u = n("968574"),
        s = n("575098"),
        l = n("870331"),
        c = n("744542"),
        f = n("281767"),
        d = n("941504");

    function _() {
        var e = a.FocusMode.useSetting(),
            t = a.FocusModeExpiresAtSetting.useSetting();
        return e && ("0" === t || new Date(Number(t)).getTime() - new Date().getTime() > 0)
    }

    function E(e, t) {
        var n = a.FocusMode.getSetting();
        u.PreloadedUserSettingsActionCreators.updateAsync("notifications", function(n) {
            n.quietMode = r.BoolValue.create({
                value: e
            }), n.focusModeExpiresAtMs = e && null != t ? "".concat(Date.now() + t) : "0"
        }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), l.default.track(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: c.NotificationSettingsUpdateType.ACCOUNT,
            quiet_mode_enabled: e,
            quiet_mode_enabled_old: n
        }), s.default.getStatus() === f.StatusTypes.DND && e && null == t && o.default.show({
            title: d.default.Messages.QUIET_MODE_WHILE_DND_UPSELL_TITLE,
            body: d.default.Messages.QUIET_MODE_WHILE_DND_UPSELL_BODY,
            cancelText: d.default.Messages.NO_THANKS,
            confirmText: d.default.Messages.OKAY,
            onConfirm: function() {
                (0, i.default)(f.StatusTypes.ONLINE)
            }
        })
    }
}