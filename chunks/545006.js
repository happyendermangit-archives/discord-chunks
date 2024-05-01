function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("374470"),
        a = n("442837"),
        o = n("481060"),
        l = n("626135"),
        u = n("5967"),
        d = n("607070"),
        _ = n("446108"),
        c = n("981631");

    function E(e) {
        var t;
        if (e.ctrlKey || e.altKey || e.metaKey || e.keyCode !== c.KeyboardKeys.TAB || null == e.target) return;
        let {
            target: n
        } = e, i = null === (t = (0, u.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
        (0, s.isElement)(n) && l.default.track(c.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: "tab_navigation",
            source_class_list: null != i ? Array.from(i.classList) : [],
            location_object: n.tagName
        })
    }

    function I(e) {
        let {
            children: t
        } = e, n = (0, a.useStateFromStoresObject)([d.default], () => ({
            enabled: d.default.useReducedMotion,
            rawValue: d.default.rawPrefersReducedMotion
        })), s = (0, a.useStateFromStoresObject)([d.default], () => ({
            enabled: d.default.useForcedColors,
            rawValue: d.default.systemForcedColors
        })), l = (0, a.useStateFromStores)([d.default], () => d.default.alwaysShowLinkDecorations), u = r.useMemo(() => ({
            reducedMotion: n,
            prefersCrossfades: !1,
            forcedColors: s,
            alwaysShowLinkDecorations: l
        }), [n, s, l]);
        return r.useEffect(() => ((0, _.insertAccessibilityLabelElements)(), window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E)), []), (0, i.jsx)(o.AccessibilityPreferencesContext.Provider, {
            value: u,
            children: t
        })
    }
}