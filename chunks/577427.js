function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return j
        }
    }), n("222007");
    var l = n("448105"),
        r = n.n(l),
        a = n("917351"),
        i = n.n(a),
        u = n("866227"),
        o = n.n(u),
        s = n("446674"),
        c = n("913144"),
        d = n("299285"),
        f = n("161454"),
        p = n("860285"),
        h = n("915639"),
        m = n("86878"),
        g = n("546463"),
        E = n("686470"),
        C = n("102985"),
        y = n("251013"),
        L = n("946749"),
        A = n("535974"),
        S = n("352326"),
        _ = n("718517"),
        T = n("117362"),
        I = n("449008"),
        N = n("964889"),
        v = n("773336"),
        R = n("50885"),
        b = n("602043"),
        M = n("9377"),
        x = n("49111");
    let U = o().subtract(1, "week"),
        O = [],
        D = "",
        G = !1;

    function P(e, t) {
        return e.application.name.localeCompare(t.application.name, h.default.locale, {
            sensitivity: "base"
        })
    }
    let w = {
            [x.GameTableListKeys.NAME]: P,
            [x.GameTableListKeys.PLATFORM]: (e, t, n) => {
                let l = e.libraryApplication.getDistributor(),
                    r = t.libraryApplication.getDistributor();
                return l === r ? (n === x.TableSortDirections.DESCENDING ? -1 : 1) * P(e, t) : null == l ? 1 : null == r ? -1 : l.localeCompare(r)
            },
            [x.GameTableListKeys.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
            [x.GameTableListKeys.ACTIONS]: null
        },
        k = (0, T.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
        F = (0, T.cachedFunction)(e => e.filter(e => null != e.libraryApplication && A.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
        q = (0, T.cachedFunction)((e, t) => e.filter(e => r(t.toLowerCase(), e.application.name.toLowerCase()))),
        B = (0, T.cachedFunction)((e, t, n, l) => {
            let r = w[t];
            if (null == r) return e;
            let a = [...e],
                i = a.sort(r);
            return n === x.TableSortDirections.DESCENDING ? i.reverse() : i
        }),
        H = (0, T.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

    function V(e, t) {
        let n = y.default.getCurrentUserStatisticsForApplication(e.id);
        if (null != n) return new Date(n.last_played_at).getTime();
        let l = t[e.id];
        return null != l ? l : 0
    }

    function K() {
        let e = new Set(f.default.getRunningVerifiedApplicationIds()),
            t = {},
            n = new Set,
            l = f.default.getGamesSeen(!1, !1).map(e => {
                let n = g.default.getGameByGameData(e);
                return null != n ? (t[n.id] = e.lastFocused * _.default.Millis.SECOND, n.id) : null
            }),
            r = Object.values(E.default.getAllLibraryApplications()),
            a = r.map(l => (function(e, t, n, l, r) {
                var a, i;
                if (!r && t.has(e.id)) return null;
                let u = d.default.getApplication(e.id);
                if (null == u) return null;
                let s = V(u, n);
                if (t.add(e.id), !(0, N.isUserEntitledToLibraryApplication)(e) && !A.default.isInstalled(e.id, e.branchId)) return null;
                return {
                    key: "".concat(e.id, "-").concat(e.branchId),
                    application: u,
                    libraryApplication: e,
                    lastPlayed: s,
                    supportsCloudSync: null != e && A.default.supportsCloudSync(e.id, e.branchId),
                    isNew: (a = e, i = s, null != a && o(a.createdAt).isAfter(U) && 0 === i),
                    isLaunching: p.default.launchingGames.has(e.id),
                    isRunning: l.has(e.id),
                    isLaunchable: (0, b.isLaunchable)({
                        LibraryApplicationStore: E.default,
                        LaunchableGameStore: p.default,
                        DispatchApplicationStore: A.default,
                        ConnectedAppsStore: m.default,
                        applicationId: e.id,
                        branchId: e.branchId
                    }),
                    isUpdatingFlags: E.default.isUpdatingFlags(e.id, e.branchId),
                    shouldShowInLibrary: (0, N.shouldShowGameInLibrary)(u, e, C.default),
                    defaultAction: (0, M.getDefaultLibraryApplicationAction)(e, A.default, S.default)
                }
            })(l, n, t, e, !0)).filter(I.isNotNullish),
            u = l.map(l => (function(e, t, n, l) {
                let r = null != e ? d.default.getApplication(e) : null;
                if (null == r || null == e || t.has(e)) return null;
                let a = V(r, n);
                return t.add(e), {
                    key: e,
                    application: r,
                    lastPlayed: a,
                    supportsCloudSync: !1,
                    isNew: !1,
                    isLaunching: p.default.launchingGames.has(e),
                    isRunning: l.has(e),
                    isLaunchable: (0, b.isLaunchable)({
                        LibraryApplicationStore: E.default,
                        LaunchableGameStore: p.default,
                        DispatchApplicationStore: A.default,
                        ConnectedAppsStore: m.default,
                        applicationId: e,
                        branchId: null
                    }),
                    isUpdatingFlags: !1,
                    shouldShowInLibrary: !1,
                    libraryApplication: null,
                    defaultAction: null
                }
            })(l, n, t, e)).filter(I.isNotNullish),
            s = [...u, ...a].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
        return G = null != g.default.lastFetched && E.default.fetched, !i.isEqual(s, O) && (O = s, v.isPlatformEmbedded && R.default.setSystemTrayApplications(F(O).map(e => e.application).slice(0, 5)), !0)
    }
    class Y extends s.default.Store {
        initialize() {
            this.syncWith([d.default, g.default, p.default, f.default, A.default, S.default, E.default, y.default, C.default, m.default], K, 200), this.syncWith([L.default, h.default], () => !0)
        }
        get applicationFilterQuery() {
            return D
        }
        get applicationViewItems() {
            return O
        }
        get launchableApplicationViewItems() {
            return F(O)
        }
        get libraryApplicationViewItems() {
            return k(O)
        }
        get filteredLibraryApplicationViewItems() {
            return q(this.libraryApplicationViewItems, D)
        }
        get sortedFilteredLibraryApplicationViewItems() {
            return B(this.filteredLibraryApplicationViewItems, L.default.sortKey, L.default.sortDirection, h.default.locale)
        }
        get hiddenLibraryApplicationViewItems() {
            return H(O)
        }
        get hasFetchedApplications() {
            return G
        }
    }
    Y.displayName = "ApplicationViewStore";
    var j = new Y(c.default, {
        LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
            let {
                query: t
            } = e;
            D = t
        }
    })
}