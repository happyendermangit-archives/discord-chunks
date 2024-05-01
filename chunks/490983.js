function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("658722"),
        l = n.n(o),
        u = n("392711"),
        d = n.n(u),
        _ = n("913527"),
        c = n.n(_),
        E = n("442837"),
        I = n("570140"),
        T = n("812206"),
        f = n("594190"),
        S = n("592745"),
        h = n("706454"),
        A = n("757266"),
        m = n("77498"),
        N = n("283595"),
        p = n("246946"),
        O = n("230307"),
        R = n("799777"),
        C = n("417363"),
        g = n("941128"),
        L = n("70956"),
        v = n("251625"),
        D = n("823379"),
        M = n("780570"),
        y = n("358085"),
        P = n("998502"),
        U = n("804739"),
        b = n("7956"),
        G = n("981631");
    let w = c()().subtract(1, "week"),
        B = [],
        k = "",
        V = !1;

    function x(e, t) {
        return e.application.name.localeCompare(t.application.name, h.default.locale, {
            sensitivity: "base"
        })
    }
    let F = {
            [G.GameTableListKeys.NAME]: x,
            [G.GameTableListKeys.PLATFORM]: (e, t, n) => {
                let i = e.libraryApplication.getDistributor(),
                    r = t.libraryApplication.getDistributor();
                return i === r ? (n === G.TableSortDirections.DESCENDING ? -1 : 1) * x(e, t) : null == i ? 1 : null == r ? -1 : i.localeCompare(r)
            },
            [G.GameTableListKeys.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
            [G.GameTableListKeys.ACTIONS]: null
        },
        H = (0, v.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
        Y = (0, v.cachedFunction)(e => e.filter(e => null != e.libraryApplication && C.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
        j = (0, v.cachedFunction)((e, t) => e.filter(e => l()(t.toLowerCase(), e.application.name.toLowerCase()))),
        W = (0, v.cachedFunction)((e, t, n, i) => {
            let r = F[t];
            if (null == r) return e;
            let a = [...e].sort(r);
            return n === G.TableSortDirections.DESCENDING ? a.reverse() : a
        }),
        K = (0, v.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

    function z(e, t) {
        let n = O.default.getCurrentUserStatisticsForApplication(e.id);
        if (null != n) return new Date(n.last_played_at).getTime();
        let i = t[e.id];
        return null != i ? i : 0
    }

    function Z() {
        let e = new Set(f.default.getRunningVerifiedApplicationIds()),
            t = {},
            n = new Set,
            i = f.default.getGamesSeen(!1, !1).map(e => {
                let n = m.default.getGameByGameData(e);
                return null != n ? (t[n.id] = e.lastFocused * L.default.Millis.SECOND, n.id) : null
            }),
            r = Object.values(N.default.getAllLibraryApplications()).map(i => (function(e, t, n, i, r) {
                var a, s;
                if (!r && t.has(e.id)) return null;
                let o = T.default.getApplication(e.id);
                if (null == o) return null;
                let l = z(o, n);
                if (t.add(e.id), !(0, M.isUserEntitledToLibraryApplication)(e) && !C.default.isInstalled(e.id, e.branchId)) return null;
                return {
                    key: "".concat(e.id, "-").concat(e.branchId),
                    application: o,
                    libraryApplication: e,
                    lastPlayed: l,
                    supportsCloudSync: null != e && C.default.supportsCloudSync(e.id, e.branchId),
                    isNew: (a = e, s = l, null != a && c()(a.createdAt).isAfter(w) && 0 === s),
                    isLaunching: S.default.launchingGames.has(e.id),
                    isRunning: i.has(e.id),
                    isLaunchable: (0, U.isLaunchable)({
                        LibraryApplicationStore: N.default,
                        LaunchableGameStore: S.default,
                        DispatchApplicationStore: C.default,
                        ConnectedAppsStore: A.default,
                        applicationId: e.id,
                        branchId: e.branchId
                    }),
                    isUpdatingFlags: N.default.isUpdatingFlags(e.id, e.branchId),
                    shouldShowInLibrary: (0, M.shouldShowGameInLibrary)(o, e, p.default),
                    defaultAction: (0, b.getDefaultLibraryApplicationAction)(e, C.default, g.default)
                }
            })(i, n, t, e, !0)).filter(D.isNotNullish),
            a = [...i.map(i => (function(e, t, n, i) {
                let r = null != e ? T.default.getApplication(e) : null;
                if (null == r || null == e || t.has(e)) return null;
                let a = z(r, n);
                return t.add(e), {
                    key: e,
                    application: r,
                    lastPlayed: a,
                    supportsCloudSync: !1,
                    isNew: !1,
                    isLaunching: S.default.launchingGames.has(e),
                    isRunning: i.has(e),
                    isLaunchable: (0, U.isLaunchable)({
                        LibraryApplicationStore: N.default,
                        LaunchableGameStore: S.default,
                        DispatchApplicationStore: C.default,
                        ConnectedAppsStore: A.default,
                        applicationId: e,
                        branchId: null
                    }),
                    isUpdatingFlags: !1,
                    shouldShowInLibrary: !1,
                    libraryApplication: null,
                    defaultAction: null
                }
            })(i, n, t, e)).filter(D.isNotNullish), ...r].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
        return V = null != m.default.lastFetched && N.default.fetched, !d().isEqual(a, B) && (B = a, y.isPlatformEmbedded && P.default.setSystemTrayApplications(Y(B).map(e => e.application).slice(0, 5)), !0)
    }
    class X extends(i = E.default.Store) {
        initialize() {
            this.syncWith([T.default, m.default, S.default, f.default, C.default, g.default, N.default, O.default, p.default, A.default], Z, 200), this.syncWith([R.default, h.default], () => !0)
        }
        get applicationFilterQuery() {
            return k
        }
        get applicationViewItems() {
            return B
        }
        get launchableApplicationViewItems() {
            return Y(B)
        }
        get libraryApplicationViewItems() {
            return H(B)
        }
        get filteredLibraryApplicationViewItems() {
            return j(this.libraryApplicationViewItems, k)
        }
        get sortedFilteredLibraryApplicationViewItems() {
            return W(this.filteredLibraryApplicationViewItems, R.default.sortKey, R.default.sortDirection, h.default.locale)
        }
        get hiddenLibraryApplicationViewItems() {
            return K(B)
        }
        get hasFetchedApplications() {
            return V
        }
    }
    s = "ApplicationViewStore", (a = "displayName") in(r = X) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new X(I.default, {
        LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
            let {
                query: t
            } = e;
            k = t
        }
    })
}