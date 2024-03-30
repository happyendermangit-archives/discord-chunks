function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        daysSinceYouBarFirstSeen: function() {
            return E
        },
        getNavYouBarExperiment: function() {
            return _
        }
    }), n("470079"), n("252546");
    var r = n("242880"),
        o = n("561035"),
        i = n("652203"),
        a = n("139890"),
        u = n("388990"),
        s = n("895517"),
        l = {
            showYouBar: !1,
            showMessagesButton: !1
        },
        c = !1,
        f = l,
        d = (0, o.default)({
            kind: "user",
            id: "2024-02_navi_bar",
            label: "Mobile Redesign - Nav Experiment: You Bar",
            defaultConfig: l,
            treatments: [{
                id: 0,
                label: "Control",
                config: {
                    showYouBar: !1,
                    showMessagesButton: !1
                }
            }, {
                id: 1,
                label: "You Bar (2c)",
                config: {
                    showYouBar: !0,
                    showMessagesButton: !1
                }
            }, {
                id: 2,
                label: "You Bar (2c) with messages button",
                config: {
                    showYouBar: !0,
                    showMessagesButton: !0
                }
            }]
        });

    function _(e, t) {
        var n, o, u, _, E = !(0, s.isInMainTabsExperiment)(),
            p = !!E || (null == t ? void 0 : t.disable);
        if (!a.default.hasLoadedExperiments && !p) return !c && (f = null !== (u = r.Storage.get("--you-bar-experiment-cached-config")) && void 0 !== u ? u : l, c = !0), f;
        return (0, i.getMergedExperimentConfigs)(d.existingUsers, d.newUsers, e, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, t), o = (o = {
            disable: p,
            autoTrackExposure: !E && (null === (_ = null == t ? void 0 : t.autoTrackExposure) || void 0 === _ || _)
        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(o)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n))
    }

    function E() {
        var e = r.Storage.get("--you-bar-experiment-first-seen");
        return null == e ? -1 : Math.floor((Date.now() - e) / u.default.Millis.DAY)
    }
}