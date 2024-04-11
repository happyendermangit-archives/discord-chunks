function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104"), n("177593");
    var i, r, s, a, o, l = n("392711"),
        u = n.n(l),
        d = n("442837"),
        _ = n("570140"),
        c = n("579806"),
        E = n("632243"),
        I = n("314897"),
        T = n("283595"),
        f = n("129542"),
        S = n("70956"),
        A = n("780570"),
        h = n("358085"),
        m = n("804739"),
        N = n("941128"),
        O = n("391690"),
        p = n("981631");
    let R = 1 * S.default.Millis.MINUTE;
    (i || (i = {})).DISPATCH_APPLICATION_PROGRESS = "dispatch_application_progress";
    let C = {},
        g = "file://",
        L = !1,
        D = 0,
        v = 0,
        M = 0,
        y = [],
        P = [],
        U = [],
        b = !1;

    function G(e) {
        return e.type === p.LocalDispatchApplicationStates.INSTALLING || e.type === p.LocalDispatchApplicationStates.UPDATING || e.type === p.LocalDispatchApplicationStates.REPAIRING ? e.networkProgress : null
    }

    function w(e) {
        return e.type === p.LocalDispatchApplicationStates.INSTALLING || e.type === p.LocalDispatchApplicationStates.UPDATING || e.type === p.LocalDispatchApplicationStates.REPAIRING ? e.diskProgress : null
    }

    function k(e) {
        return e.type === p.LocalDispatchApplicationStates.INSTALLING || e.type === p.LocalDispatchApplicationStates.UPDATING || e.type === p.LocalDispatchApplicationStates.REPAIRING ? e.readerProgress : null
    }
    let B = u().throttle(function(e) {
            P = (P = [{
                bytes: e,
                timestamp: Date.now()
            }, ...P]).slice(0, 200)
        }, 200),
        F = u().throttle(function(e) {
            let t = Date.now(),
                n = t - R;
            y = (y = [{
                bytes: e,
                timestamp: t
            }, ...y]).slice(0, 200).filter(e => {
                let {
                    timestamp: t
                } = e;
                return t >= n
            })
        }, 200),
        V = u().throttle(function(e) {
            U = (U = [{
                bytes: e,
                timestamp: Date.now()
            }, ...U]).slice(0, 200)
        }, 200);

    function x(e, t, n) {
        let i = n(C[t]),
            r = n(e[t]);
        return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0
    }
    class H extends(r = d.default.Store) {
        initialize() {
            this.waitFor(I.default)
        }
        getState(e, t) {
            return C[(0, A.getComboId)(e, t)]
        }
        isUpToDate(e, t) {
            let n = C[(0, A.getComboId)(e, t)];
            return null != n && n.type === p.LocalDispatchApplicationStates.UP_TO_DATE
        }
        shouldPatch(e, t) {
            let n = C[(0, A.getComboId)(e, t)];
            return null != n && !0 === n.shouldPatch
        }
        isInstalled(e, t) {
            let n = C[(0, A.getComboId)(e, t)];
            return null != n ? n.type !== p.LocalDispatchApplicationStates.UNINSTALLING : O.default.shouldBeInstalled(e, t)
        }
        supportsCloudSync(e, t) {
            null == t && (t = e);
            let n = C[(0, A.getComboId)(e, t)];
            return null != n && null != n.storage && !!n.storage.sync
        }
        isLaunchable(e, t) {
            if (!(0, m.isSupportedPlatform)()) return !1;
            let n = C[(0, A.getComboId)(e, t)];
            return null != n && n.type === p.LocalDispatchApplicationStates.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length
        }
        getDefaultLaunchOption(e, t) {
            let n = C[(0, A.getComboId)(e, t)];
            if (null == n) return null;
            let {
                defaultLaunchOptionId: i,
                launchOptions: r
            } = n;
            return null == i || null == r ? null : r[i]
        }
        getLaunchOptions(e, t) {
            let n = C[(0, A.getComboId)(e, t)];
            return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions)
        }
        getHistoricalTotalBytesRead() {
            return y
        }
        getHistoricalTotalBytesDownloaded() {
            return P
        }
        getHistoricalTotalBytesWritten() {
            return U
        }
        whenInitialized(e) {
            this.addConditionalChangeListener(() => {
                if (L) return setImmediate(e), !1
            })
        }
    }
    o = "DispatchApplicationStore", (a = "displayName") in(s = H) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new H(_.default, {
        CONNECTION_OPEN: function() {
            L = !1
        },
        DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e;
            L = !0;
            let n = {},
                i = t.applications,
                r = null != t.currentTask ? t.currentTask.branchId : null,
                s = !1;
            for (let e in i)
                for (let t in i[e]) {
                    let a = (0, A.getComboId)(e, t);
                    if (n[a] = function(e) {
                            let {
                                build_id: t,
                                target_build_id: n,
                                manifest_ids: i,
                                target_manifest_ids: r,
                                application_id: s,
                                branch_id: a,
                                launch_commands: o,
                                launch_options: l,
                                storage: d,
                                install_path: _,
                                installed_size: E,
                                repairing: I
                            } = e, {
                                should_patch: T
                            } = e;
                            switch (null == T && (T = !0), e.state.type) {
                                case p.DispatchApplicationStates.COMPLETE: {
                                    let e;
                                    let A = {},
                                        m = null;
                                    if (I) e = p.LocalDispatchApplicationStates.REPAIRING;
                                    else if (null == t) e = p.LocalDispatchApplicationStates.INSTALL_REQUIRED;
                                    else if (T && (t !== n || null != i && 0 !== u().difference(i, r).length)) e = p.LocalDispatchApplicationStates.UPDATE_REQUIRED;
                                    else if (e = p.LocalDispatchApplicationStates.UP_TO_DATE, null != _) {
                                        let e = c.default.fileManager.join(_, "content"),
                                            t = (0, f.getBuildPlatform)();
                                        if (null != l && 0 !== l.length) {
                                            var S;
                                            if (t === p.BuildPlatformTypes.WIN64 && (S = t, !l.some(e => e.platforms.includes(S)))) t = p.BuildPlatformTypes.WIN32;
                                            for (let n of l)
                                                if (n.platforms.includes(t)) {
                                                    let t;
                                                    let {
                                                        executable: i,
                                                        name: r,
                                                        working_dir: s
                                                    } = n, a = c.default.fileManager.join(e, i);
                                                    (0, h.isMac)() && !a.startsWith(g) && (a = "".concat(g).concat(a)), t = null != s ? c.default.fileManager.join(e, s) : c.default.fileManager.dirname(a), A[r] = {
                                                        ...n,
                                                        id: r,
                                                        fullExecutablePath: a,
                                                        fullWorkingDir: t
                                                    }, null == m && (m = r)
                                                }
                                        } else if (null != o) {
                                            t === p.BuildPlatformTypes.WIN64 && null == o[t] && (t = p.BuildPlatformTypes.WIN32);
                                            let n = o[t];
                                            if (null != n) {
                                                let {
                                                    executable: i
                                                } = n, r = "Default";
                                                A[r] = {
                                                    ...n,
                                                    name: r,
                                                    id: r,
                                                    fullExecutablePath: c.default.fileManager.join(e, i),
                                                    fullWorkingDir: e,
                                                    platforms: [t]
                                                }, m = r
                                            }
                                        }
                                    }
                                    return {
                                        type: e,
                                        applicationId: s,
                                        branchId: a,
                                        buildId: t,
                                        manifestIds: i,
                                        targetBuildId: n,
                                        targetManifestIds: r,
                                        installPath: _,
                                        installedSize: E,
                                        launchOptions: A,
                                        defaultLaunchOptionId: m,
                                        shouldPatch: T,
                                        storage: d
                                    }
                                }
                                case p.DispatchApplicationStates.TRANSITION: {
                                    let o;
                                    let {
                                        stage: l,
                                        disk_progress: u,
                                        network_progress: d,
                                        reader_progress: c,
                                        progress: f,
                                        total: S,
                                        paused: A
                                    } = e.state, h = l.type;
                                    return {
                                        type: o = h === p.DispatchApplicationStages.UNINSTALLING ? p.LocalDispatchApplicationStates.UNINSTALLING : I ? p.LocalDispatchApplicationStates.REPAIRING : null == t ? p.LocalDispatchApplicationStates.INSTALLING : p.LocalDispatchApplicationStates.UPDATING,
                                        stage: h,
                                        applicationId: s,
                                        branchId: a,
                                        buildId: t,
                                        manifestIds: i,
                                        targetBuildId: n,
                                        targetManifestIds: r,
                                        installPath: _,
                                        installedSize: E,
                                        diskProgress: u,
                                        networkProgress: d,
                                        readerProgress: c,
                                        progress: f,
                                        total: S,
                                        paused: A,
                                        shouldPatch: T
                                    }
                                }
                            }
                            throw Error("Invalid Dispatch State. state=".concat(e.state.type))
                        }(i[e][t]), null != C[a]) {
                        let e = x(n, a, G);
                        e > 0 && B(D += e);
                        let i = x(n, a, w);
                        i > 0 && V(v += i);
                        let o = x(n, a, k);
                        if (o > 0 && F(M += o), r === t) {
                            let e = n[a];
                            if (!0 !== e.paused && (e.type === p.LocalDispatchApplicationStates.UNINSTALLING || e.type === p.LocalDispatchApplicationStates.INSTALLING || e.type === p.LocalDispatchApplicationStates.UPDATING)) switch (e.stage) {
                                case p.DispatchApplicationStages.PATCHING:
                                case p.DispatchApplicationStages.FINALIZING:
                                case p.DispatchApplicationStages.VERIFYING:
                                case p.DispatchApplicationStages.REPAIRING:
                                case p.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
                                    E.default.setProgress("dispatch_application_progress", (0, A.calculateProgressPercentage)(e.progress, e.total) / 100), s = !0
                            }
                        }
                    }
                    if (!b) {
                        let i = c.default.fileManager.dirname(n[a].installPath);
                        O.default.getInstallationPath(e, t) !== i && _.default.wait(() => {
                            _.default.dispatch({
                                type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                                applicationId: e,
                                branchId: t,
                                installationPath: i
                            })
                        }), -1 === N.default.getQueuePosition(e, t) && (n[a].type === p.LocalDispatchApplicationStates.INSTALLING || n[a].type === p.LocalDispatchApplicationStates.UPDATING) && T.default.hasApplication(e, t) && O.default.shouldBeInstalled(e, t) && _.default.wait(() => {
                            _.default.dispatch({
                                type: "DISPATCH_APPLICATION_UPDATE",
                                applicationId: e,
                                branchId: t,
                                automatic: !0
                            })
                        })
                    }
                }!s && "dispatch_application_progress" === E.default.taskID && E.default.clearProgress("dispatch_application_progress"), C = n, b = !0
        }
    })
}