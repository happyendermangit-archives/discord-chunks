function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("242880"),
        s = n("629815"),
        l = n("197197"),
        c = n("947248"),
        f = n("367602"),
        d = n("217014"),
        _ = n("281767");

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                p(e, t, n[t])
            })
        }
        return e
    }

    function I(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = "LibraryApplicationStore";

    function T() {
        var e;
        return null !== (e = u.Storage.get(O)) && void 0 !== e ? e : {}
    }
    var S = !1,
        v = {},
        g = {},
        A = new Set,
        b = {},
        N = {},
        R = !1;

    function C() {
        u.Storage.set(O, I(y({}, T()), {
            activeLaunchOptionIds: N
        }))
    }

    function P() {
        u.Storage.set(O, I(y({}, T()), {
            activeLibraryApplicationBranchIds: b
        }))
    }

    function D(e) {
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a = o.value,
                    u = l.default.createFromServer(a);
                v[(0, f.getComboId)(u.id, u.branchId)] = u
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
    }

    function L(e) {
        var t = e.libraryApplication,
            n = l.default.createFromServer(t),
            r = (0, f.getComboId)(n.id, n.branchId);
        v[r] = n, A.delete(r)
    }

    function M(e, t) {
        var n, r = (0, f.getComboId)(e, t);
        return null !== (n = v[r]) && void 0 !== n ? n : g[r]
    }

    function U() {
        return y({}, g, v)
    }
    var w = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }(l, e);
        var t, n, r, o, a, s = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), s.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(d.default);
                var e = u.Storage.get(O);
                null != e && (null == e.activeLaunchOptionIds ? C() : N = e.activeLaunchOptionIds, null == e.activeLibraryApplicationBranchIds ? P() : b = e.activeLibraryApplicationBranchIds)
            }
        }, {
            key: "libraryApplications",
            get: function() {
                var e, t;
                return e = function(e) {
                    return !e.isHidden()
                }, Object.keys(t = U()).forEach(function(n) {
                    !e(t[n]) && delete t[n]
                }), t
            }
        }, {
            key: "getAllLibraryApplications",
            value: function() {
                return U()
            }
        }, {
            key: "hasLibraryApplication",
            value: function() {
                return Object.keys(U()).length > 0
            }
        }, {
            key: "hasApplication",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = M(e, t);
                return !(null == r || !n && r.isHidden()) && (0, f.isUserEntitledToLibraryApplication)(r)
            }
        }, {
            key: "getLibraryApplication",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = M(e, t);
                return n && null != r ? (0, f.isUserEntitledToLibraryApplication)(r) ? r : null : r
            }
        }, {
            key: "getActiveLibraryApplication",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = b[e];
                if (null != n) {
                    var r, o = (0, f.getComboId)(e, n),
                        i = null !== (r = v[o]) && void 0 !== r ? r : g[o];
                    if (null != i && (0, f.isUserEntitledToLibraryApplication)(i) && (t || !i.isHidden())) return i
                }
                var a = U();
                for (var u in a)
                    if (a[u].id === e) {
                        var s = a[u];
                        if ((0, f.isUserEntitledToLibraryApplication)(s) && (t || !s.isHidden())) return s
                    }
            }
        }, {
            key: "isUpdatingFlags",
            value: function(e, t) {
                return A.has((0, f.getComboId)(e, t))
            }
        }, {
            key: "getActiveLaunchOptionId",
            value: function(e, t) {
                return N[(0, f.getComboId)(e, t)]
            }
        }, {
            key: "fetched",
            get: function() {
                return S
            }
        }, {
            key: "entitledBranchIds",
            get: function() {
                return i()(U()).values().filter(function(e) {
                    return (0, f.isUserEntitledToLibraryApplication)(e)
                }).map(function(e) {
                    return e.branchId
                }).value()
            }
        }, {
            key: "hasRemovedLibraryApplicationThisSession",
            get: function() {
                return R
            }
        }, {
            key: "whenInitialized",
            value: function(e) {
                this.addConditionalChangeListener(function() {
                    if (S) return setImmediate(e), !1
                })
            }
        }], E(r.prototype, o), a && E(r, a), l
    }(a.default.Store);
    p(w, "displayName", "LibraryApplicationStore"), t.default = new w(s.default, {
        LOGOUT: function() {
            S = !1
        },
        LIBRARY_FETCH_SUCCESS: function(e) {
            var t = e.libraryApplications;
            v = {}, D(t), S = !0
        },
        SKU_PURCHASE_SUCCESS: function(e) {
            D(e.libraryApplications)
        },
        LIBRARY_APPLICATION_FLAGS_UPDATE_START: function(e) {
            var t = e.applicationId,
                n = e.branchId,
                r = e.flags,
                o = (0, f.getComboId)(t, n),
                i = M(t, n);
            null != i && !i.isHidden() && c.hasFlag(r, _.LibraryApplicationFlags.HIDDEN) && (R = !0), A.add(o)
        },
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: L,
        LIBRARY_APPLICATION_UPDATE: L,
        LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function(e) {
            var t = e.applicationId,
                n = e.branchId,
                r = e.launchOptionId;
            N[(0, f.getComboId)(t, n)] = r, C()
        },
        LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function(e) {
            var t = e.applicationId,
                n = e.branchId;
            if (b[t] === n) return !1;
            b[t] = n, P()
        },
        LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function(e) {
            var t = e.libraryApplications,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    g[(0, f.getComboId)(u.id, u.branchId)] = u
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
        },
        DEVELOPER_TEST_MODE_RESET: function() {
            g = {}
        }
    })
}