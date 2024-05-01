function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104"), n("177593");
    var i, r, a, s, o, l = n("392711"),
        u = n.n(l),
        d = n("442837"),
        _ = n("570140"),
        c = n("579806"),
        E = n("632243"),
        I = n("314897"),
        T = n("283595"),
        f = n("129542"),
        S = n("70956"),
        h = n("780570"),
        A = n("358085"),
        m = n("804739"),
        N = n("941128"),
        p = n("391690"),
        O = n("981631");
    let R = 1 * S.default.Millis.MINUTE;
    (i || (i = {})).DISPATCH_APPLICATION_PROGRESS = "dispatch_application_progress";
    let C = {},
        g = "file://",
        L = !1,
        v = 0,
        D = 0,
        M = 0,
        y = [],
        P = [],
        U = [],
        b = !1;

    function G(e) {
        return e.type === O.LocalDispatchApplicationStates.INSTALLING || e.type === O.LocalDispatchApplicationStates.UPDATING || e.type === O.LocalDispatchApplicationStates.REPAIRING ? e.networkProgress : null
    }

    function w(e) {
        return e.type === O.LocalDispatchApplicationStates.INSTALLING || e.type === O.LocalDispatchApplicationStates.UPDATING || e.type === O.LocalDispatchApplicationStates.REPAIRING ? e.diskProgress : null
    }

    function B(e) {
        return e.type === O.LocalDispatchApplicationStates.INSTALLING || e.type === O.LocalDispatchApplicationStates.UPDATING || e.type === O.LocalDispatchApplicationStates.REPAIRING ? e.readerProgress : null
    }
    let k = u().throttle(function(e) {
            P = (P = [{
                bytes: e,
                timestamp: Date.now()
            }, ...P]).slice(0, 200)
        }, 200),
        V = u().throttle(function(e) {
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
        x = u().throttle(function(e) {
            U = (U = [{
                bytes: e,
                timestamp: Date.now()
            }, ...U]).slice(0, 200)
        }, 200);

    function F(e, t, n) {
        let i = n(C[t]),
            r = n(e[t]);
        return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0
    }
    class H extends(r = d.default.Store) {
        initialize() {
            this.waitFor(I.default)
        }
        getState(e, t) {
            return C[(0, h.getComboId)(e, t)]
        }
        isUpToDate(e, t) {
            let n = C[(0, h.getComboId)(e, t)];
            return null != n && n.type === O.LocalDispatchApplicationStates.UP_TO_DATE
        }
        shouldPatch(e, t) {
            let n = C[(0, h.getComboId)(e, t)];
            return null != n && !0 === n.shouldPatch
        }
        isInstalled(e, t) {
            let n = C[(0, h.getComboId)(e, t)];
            return null != n ? n.type !== O.LocalDispatchApplicationStates.UNINSTALLING : p.default.shouldBeInstalled(e, t)
        }
        supportsCloudSync(e, t) {
            null == t && (t = e);
            let n = C[(0, h.getComboId)(e, t)];
            return null != n && null != n.storage && !!n.storage.sync
        }
        isLaunchable(e, t) {
            if (!(0, m.isSupportedPlatform)()) return !1;
            let n = C[(0, h.getComboId)(e, t)];
            return null != n && n.type === O.LocalDispatchApplicationStates.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length
        }
        getDefaultLaunchOption(e, t) {
            let n = C[(0, h.getComboId)(e, t)];
            if (null == n) return null;
            let {
                defaultLaunchOptionId: i,
                launchOptions: r
            } = n;
            return null == i || null == r ? null : r[i]
        }
        getLaunchOptions(e, t) {
            let n = C[(0, h.getComboId)(e, t)];
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
    o = "DispatchApplicationStore", (s = "displayName") in(a = H) ? Object.defineProperty(a, s, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[s] = o, t.default = new H(_.default, {
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
                a = !1;
            for (let e in i)
                for (let t in i[e]) {
                    let s = (0, h.getComboId)(e, t);
                    if (n[s] = function(e) {
                            let {
                                build_id: t,
                                target_build_id: n,
                                manifest_ids: i,
                                target_manifest_ids: r,
                                application_id: a,
                                branch_id: s,
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
                                case O.DispatchApplicationStates.COMPLETE: {
                                    let e;
                                    let h = {},
                                        m = null;
                                    if (I) e = O.LocalDispatchApplicationStates.REPAIRING;
                                    else if (null == t) e = O.LocalDispatchApplicationStates.INSTALL_REQUIRED;
                                    else if (T && (t !== n || null != i && 0 !== u().difference(i, r).length)) e = O.LocalDispatchApplicationStates.UPDATE_REQUIRED;
                                    else if (e = O.LocalDispatchApplicationStates.UP_TO_DATE, null != _) {
                                        let e = c.default.fileManager.join(_, "content"),
                                            t = (0, f.getBuildPlatform)();
                                        if (null != l && 0 !== l.length) {
                                            var S;
                                            if (t === O.BuildPlatformTypes.WIN64 && (S = t, !l.some(e => e.platforms.includes(S)))) t = O.BuildPlatformTypes.WIN32;
                                            for (let n of l)
                                                if (n.platforms.includes(t)) {
                                                    let t;
                                                    let {
                                                        executable: i,
                                                        name: r,
                                                        working_dir: a
                                                    } = n, s = c.default.fileManager.join(e, i);
                                                    (0, A.isMac)() && !s.startsWith(g) && (s = "".concat(g).concat(s)), t = null != a ? c.default.fileManager.join(e, a) : c.default.fileManager.dirname(s), h[r] = {
                                                        ...n,
                                                        id: r,
                                                        fullExecutablePath: s,
                                                        fullWorkingDir: t
                                                    }, null == m && (m = r)
                                                }
                                        } else if (null != o) {
                                            t === O.BuildPlatformTypes.WIN64 && null == o[t] && (t = O.BuildPlatformTypes.WIN32);
                                            let n = o[t];
                                            if (null != n) {
                                                let {
                                                    executable: i
                                                } = n, r = "Default";
                                                h[r] = {
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
                                        applicationId: a,
                                        branchId: s,
                                        buildId: t,
                                        manifestIds: i,
                                        targetBuildId: n,
                                        targetManifestIds: r,
                                        installPath: _,
                                        installedSize: E,
                                        launchOptions: h,
                                        defaultLaunchOptionId: m,
                                        shouldPatch: T,
                                        storage: d
                                    }
                                }
                                case O.DispatchApplicationStates.TRANSITION: {
                                    let o;
                                    let {
                                        stage: l,
                                        disk_progress: u,
                                        network_progress: d,
                                        reader_progress: c,
                                        progress: f,
                                        total: S,
                                        paused: h
                                    } = e.state, A = l.type;
                                    return {
                                        type: o = A === O.DispatchApplicationStages.UNINSTALLING ? O.LocalDispatchApplicationStates.UNINSTALLING : I ? O.LocalDispatchApplicationStates.REPAIRING : null == t ? O.LocalDispatchApplicationStates.INSTALLING : O.LocalDispatchApplicationStates.UPDATING,
                                        stage: A,
                                        applicationId: a,
                                        branchId: s,
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
                                        paused: h,
                                        shouldPatch: T
                                    }
                                }
                            }
                            throw Error("Invalid Dispatch State. state=".concat(e.state.type))
                        }(i[e][t]), null != C[s]) {
                        let e = F(n, s, G);
                        e > 0 && k(v += e);
                        let i = F(n, s, w);
                        i > 0 && x(D += i);
                        let o = F(n, s, B);
                        if (o > 0 && V(M += o), r === t) {
                            let e = n[s];
                            if (!0 !== e.paused && (e.type === O.LocalDispatchApplicationStates.UNINSTALLING || e.type === O.LocalDispatchApplicationStates.INSTALLING || e.type === O.LocalDispatchApplicationStates.UPDATING)) switch (e.stage) {
                                case O.DispatchApplicationStages.PATCHING:
                                case O.DispatchApplicationStages.FINALIZING:
                                case O.DispatchApplicationStages.VERIFYING:
                                case O.DispatchApplicationStages.REPAIRING:
                                case O.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
                                    E.default.setProgress("dispatch_application_progress", (0, h.calculateProgressPercentage)(e.progress, e.total) / 100), a = !0
                            }
                        }
                    }
                    if (!b) {
                        let i = c.default.fileManager.dirname(n[s].installPath);
                        p.default.getInstallationPath(e, t) !== i && _.default.wait(() => {
                            _.default.dispatch({
                                type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                                applicationId: e,
                                branchId: t,
                                installationPath: i
                            })
                        }), -1 === N.default.getQueuePosition(e, t) && (n[s].type === O.LocalDispatchApplicationStates.INSTALLING || n[s].type === O.LocalDispatchApplicationStates.UPDATING) && T.default.hasApplication(e, t) && p.default.shouldBeInstalled(e, t) && _.default.wait(() => {
                            _.default.dispatch({
                                type: "DISPATCH_APPLICATION_UPDATE",
                                applicationId: e,
                                branchId: t,
                                automatic: !0
                            })
                        })
                    }
                }!a && "dispatch_application_progress" === E.default.taskID && E.default.clearProgress("dispatch_application_progress"), C = n, b = !0
        }
    })
}