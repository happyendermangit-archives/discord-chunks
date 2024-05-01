function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setFocusMode: function() {
            return I
        },
        useFocusModeEnabled: function() {
            return E
        }
    });
    var i = n("381499"),
        r = n("668781"),
        s = n("246133"),
        a = n("695346"),
        o = n("675478"),
        l = n("885110"),
        u = n("626135"),
        d = n("621600"),
        _ = n("981631"),
        c = n("689938");

    function E() {
        let e = a.FocusMode.useSetting(),
            t = a.FocusModeExpiresAtSetting.useSetting();
        return e && ("0" === t || new Date(Number(t)).getTime() - new Date().getTime() > 0)
    }

    function I(e, t) {
        let n = a.FocusMode.getSetting();
        o.PreloadedUserSettingsActionCreators.updateAsync("notifications", n => {
            n.quietMode = i.BoolValue.create({
                value: e
            }), n.focusModeExpiresAtMs = e && null != t ? "".concat(Date.now() + t) : "0"
        }, o.UserSettingsDelay.INFREQUENT_USER_ACTION), u.default.track(_.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: d.NotificationSettingsUpdateType.ACCOUNT,
            quiet_mode_enabled: e,
            quiet_mode_enabled_old: n
        }), l.default.getStatus() === _.StatusTypes.DND && e && null == t && r.default.show({
            title: c.default.Messages.QUIET_MODE_WHILE_DND_UPSELL_TITLE,
            body: c.default.Messages.QUIET_MODE_WHILE_DND_UPSELL_BODY,
            cancelText: c.default.Messages.NO_THANKS,
            confirmText: c.default.Messages.OKAY,
            onConfirm: () => {
                (0, s.default)(_.StatusTypes.ONLINE)
            }
        })
    }
}