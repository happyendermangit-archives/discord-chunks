function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("386506"),
        o = n("304761"),
        l = n("478543"),
        u = n("366953");
    async function d(e) {
        if (200 !== (await (0, a.applyPublicBuildOverride)(e)).status) throw Error("Build override couldn't apply");
        window.location.reload(!0)
    }
    async function _() {
        await (0, a.clearBuildOverride)(), window.location.reload(!0)
    }
    t.default = r.memo(function(e) {
        let {
            url: t
        } = e, n = (0, s.useStateFromStoresObject)([o.default], () => o.default.getCurrentBuildOverride()), a = (0, s.useStateFromStores)([o.default], () => o.default.getBuildOverride(t)), {
            payload: c,
            validatedURL: E
        } = a, I = n.state === o.State.Resolving || a.state === o.State.Resolving, T = r.useCallback(() => null == c ? Promise.reject(Error("Invalid override payload")) : ((0, u.addRecentBuildOverride)(a.override, c), d(c)), [c, a]);
        return null != E ? (0, i.jsx)(l.default, {
            loading: I,
            linkMeta: a.override,
            currentOverrides: n.overrides,
            applyBuildOverride: T,
            clearBuildOverride: _,
            url: E
        }) : null
    })
}