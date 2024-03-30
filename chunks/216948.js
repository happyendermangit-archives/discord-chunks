function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("658722"),
        a = n.n(i),
        u = n("392711"),
        s = n.n(u),
        l = n("913527"),
        c = n.n(l),
        f = n("898511"),
        d = n("629815"),
        _ = n("342942"),
        E = n("654370"),
        p = n("602799"),
        m = n("225098"),
        y = n("389749"),
        I = n("950520"),
        h = n("620205"),
        O = n("930949"),
        T = n("804434"),
        S = n("978456"),
        v = n("262283"),
        g = n("384464"),
        A = n("388990"),
        b = n("943959"),
        N = n("162677"),
        R = n("367602"),
        C = n("374550"),
        P = n("131900"),
        D = n("671566"),
        L = n("534169"),
        M = n("281767");

    function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function w(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function k(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function G(e) {
        return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function B(e, t) {
        return (B = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function j(e) {
        return function(e) {
            if (Array.isArray(e)) return U(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return U(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return U(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var F = c()().subtract(1, "week"),
        V = [],
        H = "",
        x = !1;

    function Y(e, t) {
        return e.application.name.localeCompare(t.application.name, m.default.locale, {
            sensitivity: "base"
        })
    }
    var W = (k(r = {}, M.GameTableListKeys.NAME, Y), k(r, M.GameTableListKeys.PLATFORM, function(e, t, n) {
            var r = e.libraryApplication.getDistributor(),
                o = t.libraryApplication.getDistributor();
            return r === o ? (n === M.TableSortDirections.DESCENDING ? -1 : 1) * Y(e, t) : null == r ? 1 : null == o ? -1 : r.localeCompare(o)
        }), k(r, M.GameTableListKeys.LAST_PLAYED, function(e, t) {
            return e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1
        }), k(r, M.GameTableListKeys.ACTIONS, null), r),
        K = (0, b.cachedFunction)(function(e) {
            return e.filter(function(e) {
                return null != e.libraryApplication && e.shouldShowInLibrary
            })
        }),
        z = (0, b.cachedFunction)(function(e) {
            return e.filter(function(e) {
                return null != e.libraryApplication && v.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId)
            })
        }),
        X = (0, b.cachedFunction)(function(e, t) {
            return e.filter(function(e) {
                return a()(t.toLowerCase(), e.application.name.toLowerCase())
            })
        }),
        q = (0, b.cachedFunction)(function(e, t, n, r) {
            var o = W[t];
            if (null == o) return e;
            var i = j(e).sort(o);
            return n === M.TableSortDirections.DESCENDING ? i.reverse() : i
        }),
        Q = (0, b.cachedFunction)(function(e) {
            return e.filter(function(e) {
                return null != e.libraryApplication && e.libraryApplication.isHidden()
            })
        });

    function J(e, t) {
        var n = T.default.getCurrentUserStatisticsForApplication(e.id);
        if (null != n) return new Date(n.last_played_at).getTime();
        var r = t[e.id];
        return null != r ? r : 0
    }

    function Z() {
        var e = new Set(E.default.getRunningVerifiedApplicationIds()),
            t = {},
            n = new Set,
            r = E.default.getGamesSeen(!1, !1).map(function(e) {
                var n = I.default.getGameByGameData(e);
                return null != n ? (t[n.id] = e.lastFocused * A.default.Millis.SECOND, n.id) : null
            }),
            o = Object.values(h.default.getAllLibraryApplications()).map(function(r) {
                return function(e, t, n, r, o) {
                    if (!o && t.has(e.id)) return null;
                    var i, a, u = _.default.getApplication(e.id);
                    if (null == u) return null;
                    var s = J(u, n);
                    if (t.add(e.id), !(0, R.isUserEntitledToLibraryApplication)(e) && !v.default.isInstalled(e.id, e.branchId)) return null;
                    return {
                        key: "".concat(e.id, "-").concat(e.branchId),
                        application: u,
                        libraryApplication: e,
                        lastPlayed: s,
                        supportsCloudSync: null != e && v.default.supportsCloudSync(e.id, e.branchId),
                        isNew: (i = e, a = s, null != i && c()(i.createdAt).isAfter(F) && 0 === a),
                        isLaunching: p.default.launchingGames.has(e.id),
                        isRunning: r.has(e.id),
                        isLaunchable: (0, D.isLaunchable)({
                            LibraryApplicationStore: h.default,
                            LaunchableGameStore: p.default,
                            DispatchApplicationStore: v.default,
                            ConnectedAppsStore: y.default,
                            applicationId: e.id,
                            branchId: e.branchId
                        }),
                        isUpdatingFlags: h.default.isUpdatingFlags(e.id, e.branchId),
                        shouldShowInLibrary: (0, R.shouldShowGameInLibrary)(u, e, O.default),
                        defaultAction: (0, L.getDefaultLibraryApplicationAction)(e, v.default, g.default)
                    }
                }(r, n, t, e, !0)
            }).filter(N.isNotNullish),
            i = j(r.map(function(r) {
                return function(e, t, n, r) {
                    var o = null != e ? _.default.getApplication(e) : null;
                    if (null == o || null == e || t.has(e)) return null;
                    var i = J(o, n);
                    return t.add(e), {
                        key: e,
                        application: o,
                        lastPlayed: i,
                        supportsCloudSync: !1,
                        isNew: !1,
                        isLaunching: p.default.launchingGames.has(e),
                        isRunning: r.has(e),
                        isLaunchable: (0, D.isLaunchable)({
                            LibraryApplicationStore: h.default,
                            LaunchableGameStore: p.default,
                            DispatchApplicationStore: v.default,
                            ConnectedAppsStore: y.default,
                            applicationId: e,
                            branchId: null
                        }),
                        isUpdatingFlags: !1,
                        shouldShowInLibrary: !1,
                        libraryApplication: null,
                        defaultAction: null
                    }
                }(r, n, t, e)
            }).filter(N.isNotNullish)).concat(j(o)).sort(function(e, t) {
                return e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1
            });
        return x = null != I.default.lastFetched && h.default.fetched, !s().isEqual(i, V) && (V = i, C.isPlatformEmbedded && P.default.setSystemTrayApplications(z(V).map(function(e) {
            return e.application
        }).slice(0, 5)), !0)
    }
    var $ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && B(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = G(t);
            if (n) {
                var a = G(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.syncWith([_.default, I.default, p.default, E.default, v.default, g.default, h.default, T.default, O.default, y.default], Z, 200), this.syncWith([S.default, m.default], function() {
                    return !0
                })
            }
        }, {
            key: "applicationFilterQuery",
            get: function() {
                return H
            }
        }, {
            key: "applicationViewItems",
            get: function() {
                return V
            }
        }, {
            key: "launchableApplicationViewItems",
            get: function() {
                return z(V)
            }
        }, {
            key: "libraryApplicationViewItems",
            get: function() {
                return K(V)
            }
        }, {
            key: "filteredLibraryApplicationViewItems",
            get: function() {
                return X(this.libraryApplicationViewItems, H)
            }
        }, {
            key: "sortedFilteredLibraryApplicationViewItems",
            get: function() {
                return q(this.filteredLibraryApplicationViewItems, S.default.sortKey, S.default.sortDirection, m.default.locale)
            }
        }, {
            key: "hiddenLibraryApplicationViewItems",
            get: function() {
                return Q(V)
            }
        }, {
            key: "hasFetchedApplications",
            get: function() {
                return x
            }
        }], w(r.prototype, o), i && w(r, i), u
    }(f.default.Store);
    k($, "displayName", "ApplicationViewStore"), t.default = new $(d.default, {
        LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
            H = e.query
        }
    })
}