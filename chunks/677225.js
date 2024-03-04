function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    }), n("222007"), n("424973");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("862337"),
        o = n("913144"),
        l = n("157552"),
        u = n("71313"),
        d = n("190017"),
        c = n("299285"),
        f = n("686470"),
        _ = n("535974"),
        h = n("98328"),
        E = n("718517"),
        g = n("964889"),
        m = n("602043");
    let p = new Set,
        S = {},
        v = new Set,
        T = {},
        I = new Set,
        C = {},
        A = 10 * E.default.Millis.MINUTE,
        y = 6 * E.default.Millis.HOUR,
        N = 10 * E.default.Millis.MINUTE,
        R = new a.Timeout;

    function O(e) {
        R.start(e + Math.random() * A, l.fetchBranches)
    }

    function D() {
        if (!(0, m.isSupportedPlatform)()) return !1;
        let e = f.default.entitledBranchIds,
            t = [];
        for (let n of e) !C.hasOwnProperty(n) && (C[n] = null, t.push(n));
        if (0 === t.length) return !1;
        o.default.wait(() => l.fetchBranches(t))
    }

    function P(e, t) {
        if (null != S[t] && h.default.shouldBeInstalled(e, t)) {
            let n = S[t],
                i = n.manifestIds,
                r = _.default.getState(e, t);
            null != r && r.shouldPatch && (r.buildId !== n.id || !s.isEqual(r.manifestIds, i)) && o.default.wait(() => {
                let s = c.default.getApplication(e);
                null != s ? (I.delete((0, g.getComboId)(e, t)), (0, d.updateApplication)(s, t, n.id, i, !0)) : I.add((0, g.getComboId)(e, t))
            })
        }
    }

    function L() {
        R.stop()
    }
    class M extends r.default.Store {
        initialize() {
            this.syncWith([f.default], D), this.waitFor(_.default, f.default, c.default)
        }
        getTargetBuildId(e, t) {
            return null == S[t] ? null : S[t].id
        }
        getTargetManifests(e, t) {
            return null == S[t] ? null : S[t].manifestIds
        }
        hasNoBuild(e, t) {
            return v.has(t)
        }
        isFetching(e, t) {
            return p.has(t)
        }
        needsToFetchBuildSize(e) {
            return !T.hasOwnProperty(e)
        }
        getBuildSize(e) {
            return T[e]
        }
    }
    M.displayName = "ApplicationBuildStore";
    var b = new M(o.default, {
        CONNECTION_OPEN: function() {
            return O(y), D()
        },
        GAMES_DATABASE_UPDATE: function() {
            if (!(0, m.isSupportedPlatform)()) return !1;
            for (let e of I) {
                let {
                    applicationId: t,
                    branchId: n
                } = (0, g.convertComboId)(e), i = c.default.getApplication(t);
                null != i && (I.delete(e), P(t, n))
            }
        },
        APPLICATION_BUILD_FETCH_START: function(e) {
            let {
                branchId: t
            } = e;
            p.add(t)
        },
        APPLICATION_BUILD_FETCH_SUCCESS: function(e) {
            let {
                applicationId: t,
                branchId: n,
                locale: i,
                build: s
            } = e;
            p.delete(n);
            let r = s.manifests.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }),
                a = s.id;
            v.delete(n), S[n] = {
                id: a,
                applicationId: t,
                branchId: n,
                locale: i,
                manifestIds: r
            }, P(t, n)
        },
        APPLICATION_BUILD_NOT_FOUND: function(e) {
            let {
                branchId: t
            } = e;
            p.delete(t), v.add(t)
        },
        APPLICATION_BUILD_SIZE_FETCH_START: function(e) {
            let {
                buildId: t
            } = e;
            !T.hasOwnProperty(t) && (T[t] = null)
        },
        APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function(e) {
            let {
                buildId: t,
                sizeKB: n
            } = e;
            T[t] = n
        },
        APPLICATION_BUILD_SIZE_FETCH_FAIL: function(e) {
            let {
                buildId: t
            } = e;
            null == T[t] && delete T[t]
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
                } = e, s = C[t];
                if (i !== s) {
                    let e = n[t];
                    null != e && o.default.wait(() => u.fetchLiveBuild(e.id, e.branchId, !0))
                }
                C[t] = i
            }
            O(y)
        },
        APPLICATION_BRANCHES_FETCH_FAIL: function() {
            O(N)
        },
        CONNECTION_CLOSED: L,
        LOGOUT: L,
        SKU_PURCHASE_SUCCESS: function(e) {
            let {
                entitlements: t
            } = e;
            if (!(0, m.isSupportedPlatform)()) return !1;
            let n = new Set;
            for (let e of t) n.add(e.application_id);
            for (let e in f.default.libraryApplications) {
                let t = f.default.libraryApplications[e];
                n.has(t.id) && (0, g.isUserEntitledToLibraryApplication)(t) && o.default.wait(() => u.fetchLiveBuild(t.id, t.branchId))
            }
        }
    })
}