function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("446674"),
        r = n("913144"),
        s = n("599110"),
        a = n("271938"),
        o = n("49111");

    function l(e, t) {
        s.default.track(o.AnalyticEvents.STREAMER_MODE_TOGGLE, {
            enabled: e,
            automatic: t
        })
    }
    let u = {
            enabled: !1,
            autoToggle: !0,
            hideInstantInvites: !0,
            hidePersonalInformation: !0,
            disableSounds: !0,
            disableNotifications: !0,
            enableContentProtection: !1
        },
        c = {},
        d = {
            ...u
        };
    class f extends i.default.PersistedStore {
        initialize(e) {
            Object.assign(c, e), this.syncWith([a.default], () => {
                var e;
                let t, n = a.default.getId();
                d = null != n ? (null == (t = c[e = n]) && (t = c[e] = {
                    ...u
                }), t) : {
                    ...u
                }
            })
        }
        getState() {
            return c
        }
        getSettings() {
            return d
        }
        get enabled() {
            return d.enabled
        }
        get autoToggle() {
            return d.autoToggle
        }
        get hideInstantInvites() {
            return this.enabled && d.hideInstantInvites
        }
        get hidePersonalInformation() {
            return this.enabled && d.hidePersonalInformation
        }
        get disableSounds() {
            return this.enabled && d.disableSounds
        }
        get disableNotifications() {
            return this.enabled && d.disableNotifications
        }
        get enableContentProtection() {
            return this.enabled && d.enableContentProtection
        }
    }
    f.displayName = "StreamerModeStore", f.persistKey = "StreamerModeStore", f.migrations = [e => {
        let t = a.default.getId();
        if (null == e || null == t) return {};
        let n = {
            [t]: {
                ...e
            }
        };
        return n
    }];
    var E = new f(r.default, {
        LOGOUT: function(e) {
            !e.isSwitchingAccount && (c = {})
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            e.userId in c && delete c[e.userId]
        },
        STREAMER_MODE_UPDATE: function(e) {
            let t = {
                ...d
            };
            return d[e.key] = e.value, "enabled" === e.key ? l(e.value, !1) : s.default.track(o.AnalyticEvents.UPDATE_STREAMER_MODE_SETTINGS, {
                enabled: d.enabled,
                automatic: d.autoToggle,
                disable_notifications: d.disableNotifications,
                disable_sounds: d.disableSounds,
                hide_instant_invites: d.hideInstantInvites,
                hide_personal_info: d.hidePersonalInformation,
                enable_content_protection: d.enableContentProtection,
                old_enabled: t.enabled,
                old_automatic: t.autoToggle,
                old_disable_notifications: t.disableNotifications,
                old_disable_sounds: t.disableSounds,
                old_hide_instant_invites: t.hideInstantInvites,
                old_hide_personal_info: t.hidePersonalInformation,
                old_enable_content_protection: t.enableContentProtection
            }), !0
        },
        RUNNING_STREAMER_TOOLS_CHANGE: function(e) {
            if (!d.autoToggle) return !1;
            {
                let t = e.count > 0;
                return d.enabled = t, l(t, !0), !0
            }
        }
    })
}