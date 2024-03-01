function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("446674"),
        r = n("913144");
    let s = {
            use_topic_dividers_in_chat: "Use summary topics as divider content in chat instead of string formatted dates.",
            highlight_redesigned_icons: "Highlight redesigned icons",
            alt_clips_1: "Use alt clip icon 1",
            alt_clips_2: "Use alt clip icon 2",
            profile_effect_debug_controls: "Scrolls through profile effects with arrow up / down. Restart with R",
            shop_disable_cache: "Disable shop cache",
            shop_include_unpublished: "Show unpublished items in the shop",
            lottie_hover_multiple_loop: "Lotties - continue playing the hover animation after mouse enter"
        },
        a = {};
    class o extends i.default.DeviceSettingsStore {
        getUserAgnosticState() {
            return {
                toggleStates: a
            }
        }
        initialize(e) {
            for (var t in s) {
                var n, i;
                let r = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
                a[t] = r
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
                return [t, n, s[t]]
            })
        }
    }
    o.displayName = "DevToolsDesignTogglesStore", o.persistKey = "DevToolsDesignTogglesStore";
    var l = new o(r.default, {
        DEV_TOOLS_DESIGN_TOGGLE_WEB_SET: function(e) {
            a[e.toggle] = e.value
        }
    })
}