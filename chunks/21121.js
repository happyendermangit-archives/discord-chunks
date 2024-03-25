function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRootNavigationRefIfInExperiment: function() {
            return g
        },
        isInMainTabsExperiment: function() {
            return m
        },
        useInMainTabsExperiment: function() {
            return p
        }
    }), n("70102"), n("884691");
    var i, s, r = n("308503"),
        a = n("95410");
    n("789563");
    var o = n("132522");
    n("99317");
    var l = n("693051"),
        u = n("139404"),
        d = n("61796"),
        c = n("264325"),
        _ = n("18108");
    (s = i || (i = {}))[s.EXISTING_USERS = 0] = "EXISTING_USERS", s[s.NEW_USERS = 1] = "NEW_USERS";
    let f = "tabs-v2-experiment-key",
        E = (0, r.default)((e, t) => ({
            _experimentCacheInitialized: !1,
            _experimentEnabled: !1,
            getExperimentEnabled() {
                if (!(0, d.isMainTabsExperimentPlatformSupported)()) return !1;
                let {
                    _experimentCacheInitialized: e,
                    _experimentEnabled: n
                } = t();
                if (!e) throw Error("MainTabsV2ExperimentStore: Experiment cache not initialized");
                return n
            },
            setExperimentEnabled: t => {
                e({
                    _experimentEnabled: t
                }), a.Storage.set(f, t)
            },
            setInitialized: () => {
                e(e => e._experimentCacheInitialized ? e : {
                    _experimentCacheInitialized: !0,
                    _experimentEnabled: !0 === a.Storage.get(f)
                })
            }
        }));

    function h() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.isMobileRedesignDisabled)(),
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.getState().getExperimentEnabled(),
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, c.isTabsUIEnabledManually)(),
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, o.isRedesignToggleIgnored)();
        if (!(0, d.isMainTabsExperimentPlatformSupported)()) return !1;
        if (!s) {
            if (!t && e) return (0, _.updateIsInTabsUI)(!1), !1;
            if (i) return (0, _.updateIsInTabsUI)(!0), !0
        }
        return !t && (0, _.updateIsInTabsUI)(n), n
    }

    function g() {
        return m() ? (0, l.getRootNavigationRef)() : void 0
    }

    function m() {
        return h()
    }

    function p() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, u.useMobileRedesignDisabled)(),
            n = E(e => e.getExperimentEnabled()),
            i = (0, c.useIsTabsUIEnabledManually)(),
            s = (0, o.useRedesignToggleIgnored)();
        return h(t, e, n, i, s)
    }
}