function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("846519"),
        _ = n("570140"),
        c = n("274616"),
        E = n("57513"),
        I = n("51025"),
        T = n("812206"),
        f = n("283595"),
        S = n("417363"),
        A = n("391690"),
        h = n("70956"),
        m = n("780570"),
        N = n("804739");
    let O = new Set,
        p = {},
        R = new Set,
        C = {},
        g = new Set,
        L = {},
        D = 10 * h.default.Millis.MINUTE,
        v = 6 * h.default.Millis.HOUR,
        M = 10 * h.default.Millis.MINUTE,
        y = new d.Timeout;

    function P(e) {
        y.start(e + Math.random() * D, c.fetchBranches)
    }

    function U() {
        if (!(0, N.isSupportedPlatform)()) return !1;
        let e = f.default.entitledBranchIds,
            t = [];
        for (let n of e) !L.hasOwnProperty(n) && (L[n] = null, t.push(n));
        if (0 === t.length) return !1;
        _.default.wait(() => c.fetchBranches(t))
    }

    function b(e, t) {
        if (null != p[t] && A.default.shouldBeInstalled(e, t)) {
            let n = p[t],
                i = n.manifestIds,
                r = S.default.getState(e, t);
            null != r && r.shouldPatch && (r.buildId !== n.id || !l().isEqual(r.manifestIds, i)) && _.default.wait(() => {
                let r = T.default.getApplication(e);
                null != r ? (g.delete((0, m.getComboId)(e, t)), (0, I.updateApplication)(r, t, n.id, i, !0)) : g.add((0, m.getComboId)(e, t))
            })
        }
    }

    function G() {
        y.stop()
    }
    class w extends(i = u.default.Store) {
        initialize() {
            this.syncWith([f.default], U), this.waitFor(S.default, f.default, T.default)
        }
        getTargetBuildId(e, t) {
            return null == p[t] ? null : p[t].id
        }
        getTargetManifests(e, t) {
            return null == p[t] ? null : p[t].manifestIds
        }
        hasNoBuild(e, t) {
            return R.has(t)
        }
        isFetching(e, t) {
            return O.has(t)
        }
        needsToFetchBuildSize(e) {
            return !C.hasOwnProperty(e)
        }
        getBuildSize(e) {
            return C[e]
        }
    }
    a = "ApplicationBuildStore", (s = "displayName") in(r = w) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new w(_.default, {
        CONNECTION_OPEN: function() {
            return P(v), U()
        },
        GAMES_DATABASE_UPDATE: function() {
            if (!(0, N.isSupportedPlatform)()) return !1;
            for (let e of g) {
                let {
                    applicationId: t,
                    branchId: n
                } = (0, m.convertComboId)(e);
                null != T.default.getApplication(t) && (g.delete(e), b(t, n))
            }
        },
        APPLICATION_BUILD_FETCH_START: function(e) {
            let {
                branchId: t
            } = e;
            O.add(t)
        },
        APPLICATION_BUILD_FETCH_SUCCESS: function(e) {
            let {
                applicationId: t,
                branchId: n,
                locale: i,
                build: r
            } = e;
            O.delete(n);
            let s = r.manifests.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }),
                a = r.id;
            R.delete(n), p[n] = {
                id: a,
                applicationId: t,
                branchId: n,
                locale: i,
                manifestIds: s
            }, b(t, n)
        },
        APPLICATION_BUILD_NOT_FOUND: function(e) {
            let {
                branchId: t
            } = e;
            O.delete(t), R.add(t)
        },
        APPLICATION_BUILD_SIZE_FETCH_START: function(e) {
            let {
                buildId: t
            } = e;
            !C.hasOwnProperty(t) && (C[t] = null)
        },
        APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function(e) {
            let {
                buildId: t,
                sizeKB: n
            } = e;
            C[t] = n
        },
        APPLICATION_BUILD_SIZE_FETCH_FAIL: function(e) {
            let {
                buildId: t
            } = e;
            null == C[t] && delete C[t]
        },
        APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
            let {
                branches: t
            } = e, n = {};
            for (let e in f.default.libraryApplications) {
                let t = f.default.libraryApplications[e];
                n[t.branchId] = t
            }
            for (let e of t) {
                let {
                    id: t,
                    liveBuildId: i
                } = e;
                if (i !== L[t]) {
                    let e = n[t];
                    null != e && _.default.wait(() => E.fetchLiveBuild(e.id, e.branchId, !0))
                }
                L[t] = i
            }
            P(v)
        },
        APPLICATION_BRANCHES_FETCH_FAIL: function() {
            P(M)
        },
        CONNECTION_CLOSED: G,
        LOGOUT: G,
        SKU_PURCHASE_SUCCESS: function(e) {
            let {
                entitlements: t
            } = e;
            if (!(0, N.isSupportedPlatform)()) return !1;
            let n = new Set;
            for (let e of t) n.add(e.application_id);
            for (let e in f.default.libraryApplications) {
                let t = f.default.libraryApplications[e];
                n.has(t.id) && (0, m.isUserEntitledToLibraryApplication)(t) && _.default.wait(() => E.fetchLiveBuild(t.id, t.branchId))
            }
        }
    })
}