function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("917351"),
        r = n.n(i),
        o = n("446674"),
        s = n("95410"),
        l = n("913144"),
        a = n("49111");
    let u = {};
    class c extends o.default.PersistedStore {
        initialize(e) {
            u = null != e ? e : {}
        }
        getState() {
            return u
        }
        shouldSync(e) {
            var t;
            return (null === (t = u[e]) || void 0 === t ? void 0 : t.shouldSync) !== !1
        }
        getTextSettings() {
            var e;
            return null === (e = u.text) || void 0 === e ? void 0 : e.settings
        }
        getAppearanceSettings() {
            var e;
            return null === (e = u.appearance) || void 0 === e ? void 0 : e.settings
        }
    }
    c.displayName = "SelectivelySyncedUserSettingsStore", c.persistKey = "SelectivelySyncedUserSettingsStore", c.migrations = [() => {
        var e, t;
        let n = null !== (e = s.Storage.get("UserSettingsSync")) && void 0 !== e ? e : {},
            i = null !== (t = s.Storage.get("UserSettingsStore")) && void 0 !== t ? t : {};
        s.Storage.remove("UserSettingsSync");
        let o = {};
        return !1 === n[a.UserSettingsSections.TEXT] && (o.text = {
            shouldSync: !1,
            settings: r.pick(i, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay"])
        }), !1 === n[a.UserSettingsSections.APPEARANCE] && (o.appearance = {
            shouldSync: !1,
            settings: r.pick(i, ["theme", "clientThemeSettings", "developerMode"])
        }), o
    }, e => {
        var t, n;
        if ((null == e ? void 0 : null === (n = e.appearance) || void 0 === n ? void 0 : null === (t = n.settings) || void 0 === t ? void 0 : t.theme) === "amoled") return {
            ...e,
            appearance: {
                ...e.appearance,
                settings: {
                    ...e.appearance.settings,
                    theme: "midnight"
                }
            }
        }
    }];
    var d = new c(l.default, {
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function(e) {
            let {
                changes: t
            } = e;
            for (let e in t) {
                var n;
                let {
                    shouldSync: i,
                    settings: r
                } = t[e];
                if (!0 === i) {
                    delete u[e];
                    continue
                }!1 === i && (u[e] = {
                    shouldSync: i,
                    settings: {}
                });
                if ((null === (n = u[e]) || void 0 === n ? void 0 : n.shouldSync) === !1)
                    for (let t in r) u[e].settings[t] = r[t]
            }
        },
        LOGOUT: function() {
            u = {}
        }
    })
}