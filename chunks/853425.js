function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("386506"),
        o = n("304761"),
        l = n("865427"),
        u = n("478543"),
        d = n("366953");
    async function _(e) {
        if (200 !== (await (0, a.applyPublicBuildOverride)(e)).status) throw Error("Build override couldn't apply");
        window.location.reload(!0)
    }
    async function c(e) {
        if (200 !== (await (0, a.applyStaffBuildOverride)(e)).status) throw Error("Build override couldn't apply");
        window.location.reload(!0)
    }
    async function E() {
        await (0, a.clearBuildOverride)(), window.location.reload(!0)
    }
    t.default = r.memo(function(e) {
        let {
            url: t
        } = e, n = (0, s.useStateFromStoresObject)([o.default], () => o.default.getCurrentBuildOverride()), a = (0, s.useStateFromStores)([o.default], () => o.default.getBuildOverride(t)), {
            payload: I,
            validatedURL: T
        } = a, f = n.state === o.State.Resolving || a.state === o.State.Resolving, S = r.useCallback(() => {
            if ((0, l.isManualBuildOverrideLink)(a.url) && null != a.override) {
                var e;
                return c(null === (e = a.override) || void 0 === e ? void 0 : e.targetBuildOverride)
            }
            return null == I ? Promise.reject(Error("Invalid override payload")) : ((0, d.addRecentBuildOverride)(a.override, I), _(I))
        }, [I, a]);
        return null != T ? (0, i.jsx)(u.default, {
            loading: f,
            linkMeta: a.override,
            currentOverrides: n.overrides,
            applyBuildOverride: S,
            clearBuildOverride: E,
            url: T
        }) : null
    })
}