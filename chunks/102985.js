function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("599110"),
        a = n("271938"),
        o = n("49111");

    function l(e, t) {
        r.default.track(o.AnalyticEvents.STREAMER_MODE_TOGGLE, {
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
        d = {},
        c = {
            ...u
        };
    class f extends i.default.PersistedStore {
        initialize(e) {
            Object.assign(d, e), this.syncWith([a.default], () => {
                var e;
                let t, n = a.default.getId();
                c = null != n ? (null == (t = d[e = n]) && (t = d[e] = {
                    ...u
                }), t) : {
                    ...u
                }
            })
        }
        getState() {
            return d
        }
        getSettings() {
            return c
        }
        get enabled() {
            return c.enabled
        }
        get autoToggle() {
            return c.autoToggle
        }
        get hideInstantInvites() {
            return this.enabled && c.hideInstantInvites
        }
        get hidePersonalInformation() {
            return this.enabled && c.hidePersonalInformation
        }
        get disableSounds() {
            return this.enabled && c.disableSounds
        }
        get disableNotifications() {
            return this.enabled && c.disableNotifications
        }
        get enableContentProtection() {
            return this.enabled && c.enableContentProtection
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
    var _ = new f(s.default, {
        LOGOUT: function(e) {
            !e.isSwitchingAccount && (d = {})
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            e.userId in d && delete d[e.userId]
        },
        STREAMER_MODE_UPDATE: function(e) {
            let t = {
                ...c
            };
            return c[e.key] = e.value, "enabled" === e.key ? l(e.value, !1) : r.default.track(o.AnalyticEvents.UPDATE_STREAMER_MODE_SETTINGS, {
                enabled: c.enabled,
                automatic: c.autoToggle,
                disable_notifications: c.disableNotifications,
                disable_sounds: c.disableSounds,
                hide_instant_invites: c.hideInstantInvites,
                hide_personal_info: c.hidePersonalInformation,
                enable_content_protection: c.enableContentProtection,
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
            if (!c.autoToggle) return !1;
            {
                let t = e.count > 0;
                return c.enabled = t, l(t, !0), !0
            }
        }
    })
}