function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("392711"),
        a = n.n(i),
        u = n("898511"),
        s = n("629815"),
        l = n("517727"),
        c = n("813293"),
        f = n("217014"),
        d = n("620205"),
        _ = n("783522"),
        E = n("388990"),
        p = n("367602"),
        m = n("374550"),
        y = n("671566"),
        I = n("384464"),
        h = n("27263"),
        O = n("281767");

    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function A(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                v(e, t, n[t])
            })
        }
        return e
    }

    function b(e, t) {
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

    function N(e, t) {
        return (N = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function R(e) {
        return function(e) {
            if (Array.isArray(e)) return T(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return T(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var C = 1 * E.default.Millis.MINUTE;
    (r || (r = {})).DISPATCH_APPLICATION_PROGRESS = "dispatch_application_progress";
    var P = {},
        D = "file://",
        L = !1,
        M = 0,
        U = 0,
        w = 0,
        k = [],
        G = [],
        B = [],
        j = !1;

    function F(e) {
        return e.type === O.LocalDispatchApplicationStates.INSTALLING || e.type === O.LocalDispatchApplicationStates.UPDATING || e.type === O.LocalDispatchApplicationStates.REPAIRING ? e.networkProgress : null
    }

    function V(e) {
        return e.type === O.LocalDispatchApplicationStates.INSTALLING || e.type === O.LocalDispatchApplicationStates.UPDATING || e.type === O.LocalDispatchApplicationStates.REPAIRING ? e.diskProgress : null
    }

    function H(e) {
        return e.type === O.LocalDispatchApplicationStates.INSTALLING || e.type === O.LocalDispatchApplicationStates.UPDATING || e.type === O.LocalDispatchApplicationStates.REPAIRING ? e.readerProgress : null
    }
    var x = a().throttle(function(e) {
            G = (G = [{
                bytes: e,
                timestamp: Date.now()
            }].concat(R(G))).slice(0, 200)
        }, 200),
        Y = a().throttle(function(e) {
            var t = Date.now(),
                n = t - C;
            k = (k = [{
                bytes: e,
                timestamp: t
            }].concat(R(k))).slice(0, 200).filter(function(e) {
                return e.timestamp >= n
            })
        }, 200),
        W = a().throttle(function(e) {
            B = (B = [{
                bytes: e,
                timestamp: Date.now()
            }].concat(R(B))).slice(0, 200)
        }, 200);

    function K(e, t, n) {
        var r = n(P[t]),
            o = n(e[t]);
        return null != r && null != o && 0 !== r ? Math.max(o - r, 0) : 0
    }
    var z = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && N(e, t)
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
            var e, r, o, i = g(t);
            if (n) {
                var a = g(this).constructor;
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
                this.waitFor(f.default)
            }
        }, {
            key: "getState",
            value: function(e, t) {
                return P[(0, p.getComboId)(e, t)]
            }
        }, {
            key: "isUpToDate",
            value: function(e, t) {
                var n = P[(0, p.getComboId)(e, t)];
                return null != n && n.type === O.LocalDispatchApplicationStates.UP_TO_DATE
            }
        }, {
            key: "shouldPatch",
            value: function(e, t) {
                var n = P[(0, p.getComboId)(e, t)];
                return null != n && !0 === n.shouldPatch
            }
        }, {
            key: "isInstalled",
            value: function(e, t) {
                var n = P[(0, p.getComboId)(e, t)];
                return null != n ? n.type !== O.LocalDispatchApplicationStates.UNINSTALLING : h.default.shouldBeInstalled(e, t)
            }
        }, {
            key: "supportsCloudSync",
            value: function(e, t) {
                null == t && (t = e);
                var n = P[(0, p.getComboId)(e, t)];
                return null != n && null != n.storage && !!n.storage.sync
            }
        }, {
            key: "isLaunchable",
            value: function(e, t) {
                if (!(0, y.isSupportedPlatform)()) return !1;
                var n = P[(0, p.getComboId)(e, t)];
                return null != n && n.type === O.LocalDispatchApplicationStates.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length
            }
        }, {
            key: "getDefaultLaunchOption",
            value: function(e, t) {
                var n = P[(0, p.getComboId)(e, t)];
                if (null == n) return null;
                var r = n.defaultLaunchOptionId,
                    o = n.launchOptions;
                return null == r || null == o ? null : o[r]
            }
        }, {
            key: "getLaunchOptions",
            value: function(e, t) {
                var n = P[(0, p.getComboId)(e, t)];
                return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions)
            }
        }, {
            key: "getHistoricalTotalBytesRead",
            value: function() {
                return k
            }
        }, {
            key: "getHistoricalTotalBytesDownloaded",
            value: function() {
                return G
            }
        }, {
            key: "getHistoricalTotalBytesWritten",
            value: function() {
                return B
            }
        }, {
            key: "whenInitialized",
            value: function(e) {
                this.addConditionalChangeListener(function() {
                    if (L) return setImmediate(e), !1
                })
            }
        }], S(r.prototype, o), i && S(r, i), u
    }(u.default.Store);
    v(z, "displayName", "DispatchApplicationStore"), t.default = new z(s.default, {
        CONNECTION_OPEN: function() {
            L = !1
        },
        DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
            var t = function(e) {
                    var t = function(t) {
                        var n = (0, p.getComboId)(e, t);
                        if (r[n] = function(e) {
                                var t = e.build_id,
                                    n = e.target_build_id,
                                    r = e.manifest_ids,
                                    o = e.target_manifest_ids,
                                    i = e.application_id,
                                    u = e.branch_id,
                                    s = e.launch_commands,
                                    c = e.launch_options,
                                    f = e.storage,
                                    d = e.install_path,
                                    E = e.installed_size,
                                    p = e.repairing,
                                    y = e.should_patch;
                                switch (null == y && (y = !0), e.state.type) {
                                    case O.DispatchApplicationStates.COMPLETE:
                                        var I = {},
                                            h = null;
                                        if (p) C = O.LocalDispatchApplicationStates.REPAIRING;
                                        else if (null == t) C = O.LocalDispatchApplicationStates.INSTALL_REQUIRED;
                                        else if (y && (t !== n || null != r && 0 !== a().difference(r, o).length)) C = O.LocalDispatchApplicationStates.UPDATE_REQUIRED;
                                        else if (C = O.LocalDispatchApplicationStates.UP_TO_DATE, null != d) {
                                            var T = l.default.fileManager.join(d, "content"),
                                                S = (0, _.getBuildPlatform)();
                                            if (null != c && 0 !== c.length) {
                                                if (S === O.BuildPlatformTypes.WIN64 && (R = S, !c.some(function(e) {
                                                        return e.platforms.includes(R)
                                                    }))) S = O.BuildPlatformTypes.WIN32;
                                                var v = !0,
                                                    g = !1,
                                                    N = void 0;
                                                try {
                                                    for (var R, C, P, L = c[Symbol.iterator](); !(v = (P = L.next()).done); v = !0) {
                                                        var M = P.value;
                                                        if (M.platforms.includes(S)) {
                                                            var U = M.executable,
                                                                w = M.name,
                                                                k = M.working_dir,
                                                                G = l.default.fileManager.join(T, U);
                                                            (0, m.isMac)() && !G.startsWith(D) && (G = "".concat(D).concat(G));
                                                            var B = void 0;
                                                            B = null != k ? l.default.fileManager.join(T, k) : l.default.fileManager.dirname(G), I[w] = b(A({}, M), {
                                                                id: w,
                                                                fullExecutablePath: G,
                                                                fullWorkingDir: B
                                                            }), null == h && (h = w)
                                                        }
                                                    }
                                                } catch (e) {
                                                    g = !0, N = e
                                                } finally {
                                                    try {
                                                        !v && null != L.return && L.return()
                                                    } finally {
                                                        if (g) throw N
                                                    }
                                                }
                                            } else if (null != s) {
                                                S === O.BuildPlatformTypes.WIN64 && null == s[S] && (S = O.BuildPlatformTypes.WIN32);
                                                var j = s[S];
                                                if (null != j) {
                                                    var F = j.executable,
                                                        V = "Default";
                                                    I[V] = b(A({}, j), {
                                                        name: V,
                                                        id: V,
                                                        fullExecutablePath: l.default.fileManager.join(T, F),
                                                        fullWorkingDir: T,
                                                        platforms: [S]
                                                    }), h = V
                                                }
                                            }
                                        }
                                        return {
                                            type: C, applicationId: i, branchId: u, buildId: t, manifestIds: r, targetBuildId: n, targetManifestIds: o, installPath: d, installedSize: E, launchOptions: I, defaultLaunchOptionId: h, shouldPatch: y, storage: f
                                        };
                                    case O.DispatchApplicationStates.TRANSITION:
                                        var H, x = e.state,
                                            Y = x.stage,
                                            W = x.disk_progress,
                                            K = x.network_progress,
                                            z = x.reader_progress,
                                            X = x.progress,
                                            q = x.total,
                                            Q = x.paused,
                                            J = Y.type;
                                        return {
                                            type: H = J === O.DispatchApplicationStages.UNINSTALLING ? O.LocalDispatchApplicationStates.UNINSTALLING : p ? O.LocalDispatchApplicationStates.REPAIRING : null == t ? O.LocalDispatchApplicationStates.INSTALLING : O.LocalDispatchApplicationStates.UPDATING, stage: J, applicationId: i, branchId: u, buildId: t, manifestIds: r, targetBuildId: n, targetManifestIds: o, installPath: d, installedSize: E, diskProgress: W, networkProgress: K, readerProgress: z, progress: X, total: q, paused: Q, shouldPatch: y
                                        }
                                }
                                throw Error("Invalid Dispatch State. state=".concat(e.state.type))
                            }(o[e][t]), null != P[n]) {
                            var f = K(r, n, F);
                            f > 0 && x(M += f);
                            var E = K(r, n, V);
                            E > 0 && W(U += E);
                            var y = K(r, n, H);
                            if (y > 0 && Y(w += y), i === t) {
                                var T = r[n];
                                if (!0 !== T.paused && (T.type === O.LocalDispatchApplicationStates.UNINSTALLING || T.type === O.LocalDispatchApplicationStates.INSTALLING || T.type === O.LocalDispatchApplicationStates.UPDATING)) switch (T.stage) {
                                    case O.DispatchApplicationStages.PATCHING:
                                    case O.DispatchApplicationStages.FINALIZING:
                                    case O.DispatchApplicationStages.VERIFYING:
                                    case O.DispatchApplicationStages.REPAIRING:
                                    case O.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
                                        c.default.setProgress("dispatch_application_progress", (0, p.calculateProgressPercentage)(T.progress, T.total) / 100), u = !0
                                }
                            }
                        }
                        if (!j) {
                            var S = l.default.fileManager.dirname(r[n].installPath);
                            h.default.getInstallationPath(e, t) !== S && s.default.wait(function() {
                                s.default.dispatch({
                                    type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                                    applicationId: e,
                                    branchId: t,
                                    installationPath: S
                                })
                            }), -1 === I.default.getQueuePosition(e, t) && (r[n].type === O.LocalDispatchApplicationStates.INSTALLING || r[n].type === O.LocalDispatchApplicationStates.UPDATING) && d.default.hasApplication(e, t) && h.default.shouldBeInstalled(e, t) && s.default.wait(function() {
                                s.default.dispatch({
                                    type: "DISPATCH_APPLICATION_UPDATE",
                                    applicationId: e,
                                    branchId: t,
                                    automatic: !0
                                })
                            })
                        }
                    };
                    for (var n in o[e]) t(n)
                },
                n = e.state;
            L = !0;
            var r = {},
                o = n.applications,
                i = null != n.currentTask ? n.currentTask.branchId : null,
                u = !1;
            for (var f in o) t(f);
            !u && "dispatch_application_progress" === c.default.taskID && c.default.clearProgress("dispatch_application_progress"), P = r, j = !0
        }
    })
}