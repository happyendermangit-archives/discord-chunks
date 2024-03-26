function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144");
    let r = {
            use_topic_dividers_in_chat: "Use summary topics as divider content in chat instead of string formatted dates.",
            highlight_redesigned_icons: "Highlight redesigned icons",
            alt_clips_1: "Use alt clip icon 1",
            alt_clips_2: "Use alt clip icon 2",
            profile_effect_debug_controls: "Shop: Scrolls through profile effects with arrow up / down. Restart with R",
            shop_disable_cache: "Shop: Disable shop cache",
            shop_include_unpublished: "Shop: Show unpublished items in the shop",
            enable_avatar_decoration_uploads: "Shop: Enable avatar decoration uploads",
            lottie_hover_multiple_loop: "Lotties - continue playing the hover animation after mouse enter",
            activity_panel_iframe_fills_container: "Activity Panel: Iframe fills container"
        },
        a = {};
    class o extends i.default.DeviceSettingsStore {
        getUserAgnosticState() {
            return {
                toggleStates: a
            }
        }
        initialize(e) {
            for (var t in r) {
                var n, i;
                let s = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
                a[t] = s
            }
        }
        get(e) {
            var t;
            return null !== (t = a[e]) && void 0 !== t && t
        }
        set(e, t) {
            return a[e] = t, t
        }
        all() {
            return a
        }
        allWithDescriptions() {
            return Object.entries(a).map(e => {
                let [t, n] = e;
                return [t, n, r[t]]
            })
        }
    }
    o.displayName = "DevToolsDesignTogglesStore", o.persistKey = "DevToolsDesignTogglesStore";
    var l = new o(s.default, {
        DEV_TOOLS_DESIGN_TOGGLE_WEB_SET: function(e) {
            a[e.toggle] = e.value
        }
    })
}