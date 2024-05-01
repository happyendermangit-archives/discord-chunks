function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        s = n("570140"),
        a = n("626135"),
        o = n("314897"),
        l = n("981631");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e, t) {
        a.default.track(l.AnalyticEvents.STREAMER_MODE_TOGGLE, {
            enabled: e,
            automatic: t
        })
    }
    let _ = {
            enabled: !1,
            autoToggle: !0,
            hideInstantInvites: !0,
            hidePersonalInformation: !0,
            disableSounds: !0,
            disableNotifications: !0,
            enableContentProtection: !1
        },
        c = {},
        E = {
            ..._
        };
    class I extends(i = r.default.PersistedStore) {
        initialize(e) {
            Object.assign(c, e), this.syncWith([o.default], () => {
                var e;
                let t, n = o.default.getId();
                E = null != n ? (null == (t = c[e = n]) && (t = c[e] = {
                    ..._
                }), t) : {
                    ..._
                }
            })
        }
        getState() {
            return c
        }
        getSettings() {
            return E
        }
        get enabled() {
            return E.enabled
        }
        get autoToggle() {
            return E.autoToggle
        }
        get hideInstantInvites() {
            return this.enabled && E.hideInstantInvites
        }
        get hidePersonalInformation() {
            return this.enabled && E.hidePersonalInformation
        }
        get disableSounds() {
            return this.enabled && E.disableSounds
        }
        get disableNotifications() {
            return this.enabled && E.disableNotifications
        }
        get enableContentProtection() {
            return this.enabled && E.enableContentProtection
        }
    }
    u(I, "displayName", "StreamerModeStore"), u(I, "persistKey", "StreamerModeStore"), u(I, "migrations", [e => {
        let t = o.default.getId();
        return null == e || null == t ? {} : {
            [t]: {
                ...e
            }
        }
    }]), t.default = new I(s.default, {
        LOGOUT: function(e) {
            !e.isSwitchingAccount && (c = {})
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            e.userId in c && delete c[e.userId]
        },
        STREAMER_MODE_UPDATE: function(e) {
            let t = {
                ...E
            };
            return E[e.key] = e.value, "enabled" === e.key ? d(e.value, !1) : a.default.track(l.AnalyticEvents.UPDATE_STREAMER_MODE_SETTINGS, {
                enabled: E.enabled,
                automatic: E.autoToggle,
                disable_notifications: E.disableNotifications,
                disable_sounds: E.disableSounds,
                hide_instant_invites: E.hideInstantInvites,
                hide_personal_info: E.hidePersonalInformation,
                enable_content_protection: E.enableContentProtection,
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
            if (!E.autoToggle) return !1;
            {
                let t = e.count > 0;
                return E.enabled = t, d(t, !0), !0
            }
        }
    })
}