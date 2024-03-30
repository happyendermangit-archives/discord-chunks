function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("945816"),
        f = n("629815"),
        d = n("44301"),
        _ = n("609595"),
        E = n("848526"),
        p = n("342942"),
        m = n("620205"),
        y = n("262283"),
        I = n("27263"),
        h = n("388990"),
        O = n("367602"),
        T = n("671566");

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var A = new Set,
        b = {},
        N = new Set,
        R = {},
        C = new Set,
        P = {},
        D = 10 * h.default.Millis.MINUTE,
        L = 6 * h.default.Millis.HOUR,
        M = 10 * h.default.Millis.MINUTE,
        U = new c.Timeout;

    function w(e) {
        U.start(e + Math.random() * D, d.fetchBranches)
    }

    function k() {
        if (!(0, T.isSupportedPlatform)()) return !1;
        var e = m.default.entitledBranchIds,
            t = [],
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                !P.hasOwnProperty(u) && (P[u] = null, t.push(u))
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        if (0 === t.length) return !1;
        f.default.wait(function() {
            return d.fetchBranches(t)
        })
    }

    function G(e, t) {
        if (null != b[t] && I.default.shouldBeInstalled(e, t)) {
            var n = b[t],
                r = n.manifestIds,
                o = y.default.getState(e, t);
            null != o && o.shouldPatch && (o.buildId !== n.id || !s().isEqual(o.manifestIds, r)) && f.default.wait(function() {
                var o = p.default.getApplication(e);
                null != o ? (C.delete((0, O.getComboId)(e, t)), (0, E.updateApplication)(o, t, n.id, r, !0)) : C.add((0, O.getComboId)(e, t))
            })
        }
    }

    function B() {
        U.stop()
    }
    var j = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
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
            var e, r, o, i = v(t);
            if (n) {
                var a = v(this).constructor;
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
                this.syncWith([m.default], k), this.waitFor(y.default, m.default, p.default)
            }
        }, {
            key: "getTargetBuildId",
            value: function(e, t) {
                return null == b[t] ? null : b[t].id
            }
        }, {
            key: "getTargetManifests",
            value: function(e, t) {
                return null == b[t] ? null : b[t].manifestIds
            }
        }, {
            key: "hasNoBuild",
            value: function(e, t) {
                return N.has(t)
            }
        }, {
            key: "isFetching",
            value: function(e, t) {
                return A.has(t)
            }
        }, {
            key: "needsToFetchBuildSize",
            value: function(e) {
                return !R.hasOwnProperty(e)
            }
        }, {
            key: "getBuildSize",
            value: function(e) {
                return R[e]
            }
        }], S(r.prototype, o), i && S(r, i), u
    }(l.default.Store);
    i = "ApplicationBuildStore", (o = "displayName") in(r = j) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new j(f.default, {
        CONNECTION_OPEN: function() {
            return w(L), k()
        },
        GAMES_DATABASE_UPDATE: function() {
            if (!(0, T.isSupportedPlatform)()) return !1;
            var e = !0,
                t = !1,
                n = void 0;
            try {
                for (var r, o = C[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                    var i = r.value,
                        a = (0, O.convertComboId)(i),
                        u = a.applicationId,
                        s = a.branchId,
                        l = p.default.getApplication(u);
                    null != l && (C.delete(i), G(u, s))
                }
            } catch (e) {
                t = !0, n = e
            } finally {
                try {
                    !e && null != o.return && o.return()
                } finally {
                    if (t) throw n
                }
            }
        },
        APPLICATION_BUILD_FETCH_START: function(e) {
            var t = e.branchId;
            A.add(t)
        },
        APPLICATION_BUILD_FETCH_SUCCESS: function(e) {
            var t = e.applicationId,
                n = e.branchId,
                r = e.locale,
                o = e.build;
            A.delete(n);
            var i = o.manifests.map(function(e) {
                    return e.id
                }),
                a = o.id;
            N.delete(n), b[n] = {
                id: a,
                applicationId: t,
                branchId: n,
                locale: r,
                manifestIds: i
            }, G(t, n)
        },
        APPLICATION_BUILD_NOT_FOUND: function(e) {
            var t = e.branchId;
            A.delete(t), N.add(t)
        },
        APPLICATION_BUILD_SIZE_FETCH_START: function(e) {
            var t = e.buildId;
            !R.hasOwnProperty(t) && (R[t] = null)
        },
        APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function(e) {
            var t = e.buildId,
                n = e.sizeKB;
            R[t] = n
        },
        APPLICATION_BUILD_SIZE_FETCH_FAIL: function(e) {
            var t = e.buildId;
            null == R[t] && delete R[t]
        },
        APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
            var t = e.branches,
                n = {};
            for (var r in m.default.libraryApplications) {
                var o = m.default.libraryApplications[r];
                n[o.branchId] = o
            }
            var i = !0,
                a = !1,
                u = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) ! function() {
                    var e = s.value,
                        t = e.id,
                        r = e.liveBuildId,
                        o = P[t];
                    if (r !== o) {
                        var i = n[t];
                        null != i && f.default.wait(function() {
                            return _.fetchLiveBuild(i.id, i.branchId, !0)
                        })
                    }
                    P[t] = r
                }()
            } catch (e) {
                a = !0, u = e
            } finally {
                try {
                    !i && null != l.return && l.return()
                } finally {
                    if (a) throw u
                }
            }
            w(L)
        },
        APPLICATION_BRANCHES_FETCH_FAIL: function() {
            w(M)
        },
        CONNECTION_CLOSED: B,
        LOGOUT: B,
        SKU_PURCHASE_SUCCESS: function(e) {
            var t = e.entitlements;
            if (!(0, T.isSupportedPlatform)()) return !1;
            var n = new Set,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value;
                    n.add(s.application_id)
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && null != u.return && u.return()
                } finally {
                    if (o) throw i
                }
            }
            for (var l in m.default.libraryApplications) ! function(e) {
                var t = m.default.libraryApplications[e];
                n.has(t.id) && (0, O.isUserEntitledToLibraryApplication)(t) && f.default.wait(function() {
                    return _.fetchLiveBuild(t.id, t.branchId)
                })
            }(l)
        }
    })
}