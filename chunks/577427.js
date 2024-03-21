function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return W
        }
    }), n("222007");
    var i = n("448105"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("866227"),
        l = n.n(o),
        u = n("446674"),
        d = n("913144"),
        c = n("299285"),
        _ = n("161454"),
        f = n("860285"),
        E = n("915639"),
        h = n("86878"),
        g = n("546463"),
        m = n("686470"),
        p = n("102985"),
        S = n("251013"),
        T = n("946749"),
        v = n("535974"),
        I = n("352326"),
        A = n("718517"),
        C = n("117362"),
        y = n("449008"),
        N = n("964889"),
        R = n("773336"),
        O = n("50885"),
        D = n("602043"),
        P = n("9377"),
        L = n("49111");
    let M = l().subtract(1, "week"),
        b = [],
        U = "",
        w = !1;

    function k(e, t) {
        return e.application.name.localeCompare(t.application.name, E.default.locale, {
            sensitivity: "base"
        })
    }
    let V = {
            [L.GameTableListKeys.NAME]: k,
            [L.GameTableListKeys.PLATFORM]: (e, t, n) => {
                let i = e.libraryApplication.getDistributor(),
                    s = t.libraryApplication.getDistributor();
                return i === s ? (n === L.TableSortDirections.DESCENDING ? -1 : 1) * k(e, t) : null == i ? 1 : null == s ? -1 : i.localeCompare(s)
            },
            [L.GameTableListKeys.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
            [L.GameTableListKeys.ACTIONS]: null
        },
        G = (0, C.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
        F = (0, C.cachedFunction)(e => e.filter(e => null != e.libraryApplication && v.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
        x = (0, C.cachedFunction)((e, t) => e.filter(e => s(t.toLowerCase(), e.application.name.toLowerCase()))),
        B = (0, C.cachedFunction)((e, t, n, i) => {
            let s = V[t];
            if (null == s) return e;
            let r = [...e],
                a = r.sort(s);
            return n === L.TableSortDirections.DESCENDING ? a.reverse() : a
        }),
        H = (0, C.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

    function Y(e, t) {
        let n = S.default.getCurrentUserStatisticsForApplication(e.id);
        if (null != n) return new Date(n.last_played_at).getTime();
        let i = t[e.id];
        return null != i ? i : 0
    }

    function K() {
        let e = new Set(_.default.getRunningVerifiedApplicationIds()),
            t = {},
            n = new Set,
            i = _.default.getGamesSeen(!1, !1).map(e => {
                let n = g.default.getGameByGameData(e);
                return null != n ? (t[n.id] = e.lastFocused * A.default.Millis.SECOND, n.id) : null
            }),
            s = Object.values(m.default.getAllLibraryApplications()),
            r = s.map(i => (function(e, t, n, i, s) {
                var r, a;
                if (!s && t.has(e.id)) return null;
                let o = c.default.getApplication(e.id);
                if (null == o) return null;
                let u = Y(o, n);
                if (t.add(e.id), !(0, N.isUserEntitledToLibraryApplication)(e) && !v.default.isInstalled(e.id, e.branchId)) return null;
                return {
                    key: "".concat(e.id, "-").concat(e.branchId),
                    application: o,
                    libraryApplication: e,
                    lastPlayed: u,
                    supportsCloudSync: null != e && v.default.supportsCloudSync(e.id, e.branchId),
                    isNew: (r = e, a = u, null != r && l(r.createdAt).isAfter(M) && 0 === a),
                    isLaunching: f.default.launchingGames.has(e.id),
                    isRunning: i.has(e.id),
                    isLaunchable: (0, D.isLaunchable)({
                        LibraryApplicationStore: m.default,
                        LaunchableGameStore: f.default,
                        DispatchApplicationStore: v.default,
                        ConnectedAppsStore: h.default,
                        applicationId: e.id,
                        branchId: e.branchId
                    }),
                    isUpdatingFlags: m.default.isUpdatingFlags(e.id, e.branchId),
                    shouldShowInLibrary: (0, N.shouldShowGameInLibrary)(o, e, p.default),
                    defaultAction: (0, P.getDefaultLibraryApplicationAction)(e, v.default, I.default)
                }
            })(i, n, t, e, !0)).filter(y.isNotNullish),
            o = i.map(i => (function(e, t, n, i) {
                let s = null != e ? c.default.getApplication(e) : null;
                if (null == s || null == e || t.has(e)) return null;
                let r = Y(s, n);
                return t.add(e), {
                    key: e,
                    application: s,
                    lastPlayed: r,
                    supportsCloudSync: !1,
                    isNew: !1,
                    isLaunching: f.default.launchingGames.has(e),
                    isRunning: i.has(e),
                    isLaunchable: (0, D.isLaunchable)({
                        LibraryApplicationStore: m.default,
                        LaunchableGameStore: f.default,
                        DispatchApplicationStore: v.default,
                        ConnectedAppsStore: h.default,
                        applicationId: e,
                        branchId: null
                    }),
                    isUpdatingFlags: !1,
                    shouldShowInLibrary: !1,
                    libraryApplication: null,
                    defaultAction: null
                }
            })(i, n, t, e)).filter(y.isNotNullish),
            u = [...o, ...r].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
        return w = null != g.default.lastFetched && m.default.fetched, !a.isEqual(u, b) && (b = u, R.isPlatformEmbedded && O.default.setSystemTrayApplications(F(b).map(e => e.application).slice(0, 5)), !0)
    }
    class j extends u.default.Store {
        initialize() {
            this.syncWith([c.default, g.default, f.default, _.default, v.default, I.default, m.default, S.default, p.default, h.default], K, 200), this.syncWith([T.default, E.default], () => !0)
        }
        get applicationFilterQuery() {
            return U
        }
        get applicationViewItems() {
            return b
        }
        get launchableApplicationViewItems() {
            return F(b)
        }
        get libraryApplicationViewItems() {
            return G(b)
        }
        get filteredLibraryApplicationViewItems() {
            return x(this.libraryApplicationViewItems, U)
        }
        get sortedFilteredLibraryApplicationViewItems() {
            return B(this.filteredLibraryApplicationViewItems, T.default.sortKey, T.default.sortDirection, E.default.locale)
        }
        get hiddenLibraryApplicationViewItems() {
            return H(b)
        }
        get hasFetchedApplications() {
            return w
        }
    }
    j.displayName = "ApplicationViewStore";
    var W = new j(d.default, {
        LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
            let {
                query: t
            } = e;
            U = t
        }
    })
}