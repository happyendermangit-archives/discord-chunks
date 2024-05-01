function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("386506"),
        o = n("304761"),
        l = n("865427"),
        u = n("478543"),
        d = n("366953");
    async function _(e) {
        if (200 !== (await (0, s.applyPublicBuildOverride)(e)).status) throw Error("Build override couldn't apply");
        window.location.reload(!0)
    }
    async function c(e) {
        if (200 !== (await (0, s.applyStaffBuildOverride)(e)).status) throw Error("Build override couldn't apply");
        window.location.reload(!0)
    }
    async function E() {
        await (0, s.clearBuildOverride)(), window.location.reload(!0)
    }
    t.default = r.memo(function(e) {
        let {
            url: t
        } = e, n = (0, a.useStateFromStoresObject)([o.default], () => o.default.getCurrentBuildOverride()), s = (0, a.useStateFromStores)([o.default], () => o.default.getBuildOverride(t)), {
            payload: I,
            validatedURL: T
        } = s, f = n.state === o.State.Resolving || s.state === o.State.Resolving, S = r.useCallback(() => {
            if ((0, l.isManualBuildOverrideLink)(s.url) && null != s.override) {
                var e;
                return c(null === (e = s.override) || void 0 === e ? void 0 : e.targetBuildOverride)
            }
            return null == I ? Promise.reject(Error("Invalid override payload")) : ((0, d.addRecentBuildOverride)(s.override, I), _(I))
        }, [I, s]);
        return null != T ? (0, i.jsx)(u.default, {
            loading: f,
            linkMeta: s.override,
            currentOverrides: n.overrides,
            applyBuildOverride: S,
            clearBuildOverride: E,
            url: T
        }) : null
    })
}