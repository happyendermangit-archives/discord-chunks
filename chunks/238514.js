function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("392711"),
        a = n.n(r),
        s = n("442837"),
        o = n("433517"),
        l = n("570140"),
        u = n("981631");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = {};
    class c extends(i = s.default.PersistedStore) {
        initialize(e) {
            _ = null != e ? e : {}
        }
        getState() {
            return _
        }
        shouldSync(e) {
            var t;
            return (null === (t = _[e]) || void 0 === t ? void 0 : t.shouldSync) !== !1
        }
        getTextSettings() {
            var e;
            return null === (e = _.text) || void 0 === e ? void 0 : e.settings
        }
        getAppearanceSettings() {
            var e;
            return null === (e = _.appearance) || void 0 === e ? void 0 : e.settings
        }
    }
    d(c, "displayName", "SelectivelySyncedUserSettingsStore"), d(c, "persistKey", "SelectivelySyncedUserSettingsStore"), d(c, "migrations", [() => {
        var e, t;
        let n = null !== (e = o.Storage.get("UserSettingsSync")) && void 0 !== e ? e : {},
            i = null !== (t = o.Storage.get("UserSettingsStore")) && void 0 !== t ? t : {};
        o.Storage.remove("UserSettingsSync");
        let r = {};
        return !1 === n[u.UserSettingsSections.TEXT] && (r.text = {
            shouldSync: !1,
            settings: a().pick(i, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay"])
        }), !1 === n[u.UserSettingsSections.APPEARANCE] && (r.appearance = {
            shouldSync: !1,
            settings: a().pick(i, ["theme", "clientThemeSettings", "developerMode"])
        }), r
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
    }]), t.default = new c(l.default, {
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
                    delete _[e];
                    continue
                }!1 === i && (_[e] = {
                    shouldSync: i,
                    settings: {}
                });
                if ((null === (n = _[e]) || void 0 === n ? void 0 : n.shouldSync) === !1)
                    for (let t in r) _[e].settings[t] = r[t]
            }
        },
        LOGOUT: function() {
            _ = {}
        }
    })
}