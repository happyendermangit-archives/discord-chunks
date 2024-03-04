function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DevSettingsCategory: function() {
            return i
        },
        default: function() {
            return d
        }
    }), n("222007");
    var i, s, r = n("446674"),
        a = n("913144");
    (s = i || (i = {}))[s.MESSAGING = 0] = "MESSAGING", s[s.OVERLAYS = 1] = "OVERLAYS";
    let o = {
            visual_effect_view_overrides: {
                label: "Blur view overrides for designers to test with",
                category: 1
            },
            obscure_blur_effect_enabled: {
                label: "Force obscure blur effect on for message media and embeds",
                category: 1
            },
            explicit_media_redaction_ignore_pending_scan: {
                label: "Ignore pending scan on explicit media",
                category: 1
            },
            upload_fail_50: {
                label: "Uploads: Fail 50% of uploads with 500 status after a 1 second delay",
                category: 0
            },
            send_fail_100: {
                label: "Send: Fail with 500 status",
                category: 0
            }
        },
        l = {};
    class u extends r.default.DeviceSettingsStore {
        getUserAgnosticState() {
            return {
                toggleStates: l
            }
        }
        initialize(e) {
            for (var t in o) {
                var n, i;
                let s = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
                l[t] = s
            }
        }
        get(e) {
            var t;
            return null !== (t = l[e]) && void 0 !== t && t
        }
        set(e, t) {
            return l[e] = t, t
        }
        all() {
            return l
        }
        allByCategory(e) {
            return Object.entries(o).filter(t => {
                let [n, i] = t;
                return i.category === e
            }).map(e => {
                let [t, n] = e;
                return [t, l[t], n]
            })
        }
    }
    u.displayName = "DevToolsDevSettingsStore", u.persistKey = "DevToolsDevSettingsStore";
    var d = new u(a.default, {
        DEV_TOOLS_DEV_SETTING_SET: function(e) {
            l[e.toggle] = e.value
        }
    })
}