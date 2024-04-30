function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020"), n("177593");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("433517"),
        _ = n("570140"),
        c = n("85521"),
        E = n("630388"),
        I = n("780570"),
        T = n("314897"),
        f = n("981631");
    let S = "LibraryApplicationStore";

    function h() {
        var e;
        return null !== (e = d.Storage.get(S)) && void 0 !== e ? e : {}
    }
    let A = !1,
        m = {},
        N = {},
        p = new Set,
        O = {},
        R = {},
        C = !1;

    function g() {
        d.Storage.set(S, {
            ...h(),
            activeLaunchOptionIds: R
        })
    }

    function L() {
        d.Storage.set(S, {
            ...h(),
            activeLibraryApplicationBranchIds: O
        })
    }

    function v(e) {
        for (let t of e) {
            let e = c.default.createFromServer(t);
            m[(0, I.getComboId)(e.id, e.branchId)] = e
        }
    }

    function D(e) {
        let {
            libraryApplication: t
        } = e, n = c.default.createFromServer(t), i = (0, I.getComboId)(n.id, n.branchId);
        m[i] = n, p.delete(i)
    }

    function M(e, t) {
        var n;
        let i = (0, I.getComboId)(e, t);
        return null !== (n = m[i]) && void 0 !== n ? n : N[i]
    }

    function y() {
        return {
            ...N,
            ...m
        }
    }
    class P extends(i = u.default.Store) {
        initialize() {
            this.waitFor(T.default);
            let e = d.Storage.get(S);
            null != e && (null == e.activeLaunchOptionIds ? g() : R = e.activeLaunchOptionIds, null == e.activeLibraryApplicationBranchIds ? L() : O = e.activeLibraryApplicationBranchIds)
        }
        get libraryApplications() {
            return function(e) {
                let t = y();
                return Object.keys(t).forEach(n => {
                    !e(t[n]) && delete t[n]
                }), t
            }(e => !e.isHidden())
        }
        getAllLibraryApplications() {
            return y()
        }
        hasLibraryApplication() {
            return Object.keys(y()).length > 0
        }
        hasApplication(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = M(e, t);
            return !(null == i || !n && i.isHidden()) && (0, I.isUserEntitledToLibraryApplication)(i)
        }
        getLibraryApplication(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = M(e, t);
            return n && null != i ? (0, I.isUserEntitledToLibraryApplication)(i) ? i : null : i
        }
        getActiveLibraryApplication(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = O[e];
            if (null != n) {
                var i;
                let r = (0, I.getComboId)(e, n),
                    s = null !== (i = m[r]) && void 0 !== i ? i : N[r];
                if (null != s && (0, I.isUserEntitledToLibraryApplication)(s) && (t || !s.isHidden())) return s
            }
            let r = y();
            for (let n in r)
                if (r[n].id === e) {
                    let e = r[n];
                    if ((0, I.isUserEntitledToLibraryApplication)(e) && (t || !e.isHidden())) return e
                }
        }
        isUpdatingFlags(e, t) {
            return p.has((0, I.getComboId)(e, t))
        }
        getActiveLaunchOptionId(e, t) {
            return R[(0, I.getComboId)(e, t)]
        }
        get fetched() {
            return A
        }
        get entitledBranchIds() {
            return l()(y()).values().filter(e => (0, I.isUserEntitledToLibraryApplication)(e)).map(e => e.branchId).value()
        }
        get hasRemovedLibraryApplicationThisSession() {
            return C
        }
        whenInitialized(e) {
            this.addConditionalChangeListener(() => {
                if (A) return setImmediate(e), !1
            })
        }
    }
    a = "LibraryApplicationStore", (s = "displayName") in(r = P) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new P(_.default, {
        LOGOUT: function() {
            A = !1
        },
        LIBRARY_FETCH_SUCCESS: function(e) {
            let {
                libraryApplications: t
            } = e;
            m = {}, v(t), A = !0
        },
        SKU_PURCHASE_SUCCESS: function(e) {
            let {
                libraryApplications: t
            } = e;
            v(t)
        },
        LIBRARY_APPLICATION_FLAGS_UPDATE_START: function(e) {
            let {
                applicationId: t,
                branchId: n,
                flags: i
            } = e, r = (0, I.getComboId)(t, n), s = M(t, n);
            null != s && !s.isHidden() && E.hasFlag(i, f.LibraryApplicationFlags.HIDDEN) && (C = !0), p.add(r)
        },
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: D,
        LIBRARY_APPLICATION_UPDATE: D,
        LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function(e) {
            let {
                applicationId: t,
                branchId: n,
                launchOptionId: i
            } = e;
            R[(0, I.getComboId)(t, n)] = i, g()
        },
        LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function(e) {
            let {
                applicationId: t,
                branchId: n
            } = e;
            if (O[t] === n) return !1;
            O[t] = n, L()
        },
        LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function(e) {
            let {
                libraryApplications: t
            } = e;
            for (let e of t) N[(0, I.getComboId)(e.id, e.branchId)] = e
        },
        DEVELOPER_TEST_MODE_RESET: function() {
            N = {}
        }
    })
}