function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        State: function() {
            return o
        }
    });
    var i, r, s, a, o, l, u = n("442837"),
        d = n("570140"),
        _ = n("865427");
    (i = o || (o = {}))[i.NotResolved = 0] = "NotResolved", i[i.Resolving = 1] = "Resolving", i[i.Resolved = 2] = "Resolved", i[i.Invalid = 3] = "Invalid";
    let c = 0,
        E = null,
        I = {};
    class T extends(l = u.default.Store) {
        getCurrentBuildOverride() {
            return 0 === c && (c = 1, (0, _.getBuildOverride)().then(e => {
                d.default.dispatch({
                    type: "CURRENT_BUILD_OVERRIDE_RESOLVED",
                    overrides: e
                })
            })), {
                state: c,
                overrides: E
            }
        }
        getBuildOverride(e) {
            return ! function(e) {
                if (e in I) return;
                let t = (0, _.validateURL)(e);
                if (null == t) {
                    I = {
                        ...I,
                        [e]: {
                            url: e,
                            state: 3
                        }
                    };
                    return
                }
                I = {
                    ...I,
                    [e]: {
                        url: e,
                        validatedURL: t.url,
                        payload: String(t.payload),
                        state: 1
                    }
                };
                (0, _.getBuildOverrideMeta)(t.url).then(t => {
                    d.default.dispatch({
                        type: "BUILD_OVERRIDE_RESOLVED",
                        url: e,
                        override: t
                    })
                })
            }(e), I[e]
        }
        getBuildOverrides() {
            return I
        }
    }
    a = "BuildOverrideStore", (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new T(d.default, {
        BUILD_OVERRIDE_RESOLVED: function(e) {
            let {
                url: t,
                override: n
            } = e;
            I = {
                ...I,
                [t]: {
                    ...I[t],
                    state: null == n ? 3 : 2,
                    override: n
                }
            }
        },
        CURRENT_BUILD_OVERRIDE_RESOLVED: function(e) {
            let {
                overrides: t
            } = e;
            c = 2, E = t
        }
    })
}