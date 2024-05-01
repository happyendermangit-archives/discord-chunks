function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DevSettingsCategory: function() {
            return i
        }
    }), n("47120");
    var i, r, s, a = n("442837"),
        o = n("570140");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = i || (i = {}))[s.MESSAGING = 0] = "MESSAGING", s[s.OVERLAYS = 1] = "OVERLAYS", s[s.PREMIUM = 2] = "PREMIUM";
    let u = {
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
            },
            premium_roadblocks: {
                label: "Enable all new premium roadblocks",
                category: 2
            }
        },
        d = {};
    class _ extends(r = a.default.DeviceSettingsStore) {
        getUserAgnosticState() {
            return {
                toggleStates: d
            }
        }
        initialize(e) {
            for (var t in u) {
                var n, i;
                let r = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
                d[t] = r
            }
        }
        get(e) {
            var t;
            return null !== (t = d[e]) && void 0 !== t && t
        }
        set(e, t) {
            return d[e] = t, t
        }
        all() {
            return d
        }
        allByCategory(e) {
            return Object.entries(u).filter(t => {
                let [n, i] = t;
                return i.category === e
            }).map(e => {
                let [t, n] = e;
                return [t, d[t], n]
            })
        }
    }
    l(_, "displayName", "DevToolsDevSettingsStore"), l(_, "persistKey", "DevToolsDevSettingsStore"), t.default = new _(o.default, {
        DEV_TOOLS_DEV_SETTING_SET: function(e) {
            d[e.toggle] = e.value
        }
    })
}