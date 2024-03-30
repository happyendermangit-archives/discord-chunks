function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("188104"),
        i = n("898511"),
        a = n("784184"),
        u = n("870331"),
        s = n("850168"),
        l = n("622780"),
        c = n("839582"),
        f = n("281767");

    function d(e) {
        var t;
        if (!(e.ctrlKey || e.altKey || e.metaKey) && e.keyCode === f.KeyboardKeys.TAB && null != e.target) {
            var n = e.target,
                r = null === (t = (0, s.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
            (0, o.isElement)(n) && u.default.track(f.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
                shortcut_name: "tab_navigation",
                source_class_list: null != r ? Array.from(r.classList) : [],
                location_object: n.tagName
            })
        }
    }

    function _(e) {
        var t = e.children,
            n = (0, i.useStateFromStoresObject)([l.default], function() {
                return {
                    enabled: l.default.useReducedMotion,
                    rawValue: l.default.rawPrefersReducedMotion
                }
            }),
            o = (0, i.useStateFromStoresObject)([l.default], function() {
                return {
                    enabled: l.default.useForcedColors,
                    rawValue: l.default.systemForcedColors
                }
            }),
            u = (0, i.useStateFromStores)([l.default], function() {
                return l.default.alwaysShowLinkDecorations
            }),
            s = r.useMemo(function() {
                return {
                    reducedMotion: n,
                    prefersCrossfades: !1,
                    forcedColors: o,
                    alwaysShowLinkDecorations: u
                }
            }, [n, o, u]);
        return r.useEffect(function() {
            return (0, c.insertAccessibilityLabelElements)(), window.addEventListener("keydown", d),
                function() {
                    return window.removeEventListener("keydown", d)
                }
        }, []), r.createElement(a.AccessibilityPreferencesContext.Provider, {
            value: s
        }, t)
    }
}