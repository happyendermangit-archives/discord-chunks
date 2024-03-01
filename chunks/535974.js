function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    }), n("222007"), n("70102"), n("860677");
    var i, r = n("917351"),
        s = n.n(r),
        a = n("446674"),
        o = n("913144"),
        l = n("49671"),
        u = n("70513"),
        c = n("271938"),
        d = n("686470"),
        f = n("645672"),
        E = n("718517"),
        p = n("964889"),
        h = n("773336"),
        _ = n("602043"),
        S = n("352326"),
        m = n("98328"),
        T = n("49111");
    let g = 1 * E.default.Millis.MINUTE;
    (i || (i = {})).DISPATCH_APPLICATION_PROGRESS = "dispatch_application_progress";
    let I = {},
        C = "file://",
        v = !1,
        A = 0,
        R = 0,
        N = 0,
        O = [],
        D = [],
        y = [],
        P = !1;

    function L(e) {
        return e.type === T.LocalDispatchApplicationStates.INSTALLING || e.type === T.LocalDispatchApplicationStates.UPDATING || e.type === T.LocalDispatchApplicationStates.REPAIRING ? e.networkProgress : null
    }

    function b(e) {
        return e.type === T.LocalDispatchApplicationStates.INSTALLING || e.type === T.LocalDispatchApplicationStates.UPDATING || e.type === T.LocalDispatchApplicationStates.REPAIRING ? e.diskProgress : null
    }

    function M(e) {
        return e.type === T.LocalDispatchApplicationStates.INSTALLING || e.type === T.LocalDispatchApplicationStates.UPDATING || e.type === T.LocalDispatchApplicationStates.REPAIRING ? e.readerProgress : null
    }
    let U = s.throttle(function(e) {
            D = (D = [{
                bytes: e,
                timestamp: Date.now()
            }, ...D]).slice(0, 200)
        }, 200),
        G = s.throttle(function(e) {
            let t = Date.now(),
                n = t - g;
            O = (O = [{
                bytes: e,
                timestamp: t
            }, ...O]).slice(0, 200).filter(e => {
                let {
                    timestamp: t
                } = e;
                return t >= n
            })
        }, 200),
        w = s.throttle(function(e) {
            y = (y = [{
                bytes: e,
                timestamp: Date.now()
            }, ...y]).slice(0, 200)
        }, 200);

    function k(e, t, n) {
        let i = n(I[t]),
            r = n(e[t]);
        return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0
    }
    class x extends a.default.Store {
        initialize() {
            this.waitFor(c.default)
        }
        getState(e, t) {
            let n = (0, p.getComboId)(e, t);
            return I[n]
        }
        isUpToDate(e, t) {
            let n = I[(0, p.getComboId)(e, t)];
            return null != n && n.type === T.LocalDispatchApplicationStates.UP_TO_DATE
        }
        shouldPatch(e, t) {
            let n = I[(0, p.getComboId)(e, t)];
            return null != n && !0 === n.shouldPatch
        }
        isInstalled(e, t) {
            let n = I[(0, p.getComboId)(e, t)];
            return null != n ? n.type !== T.LocalDispatchApplicationStates.UNINSTALLING : m.default.shouldBeInstalled(e, t)
        }
        supportsCloudSync(e, t) {
            null == t && (t = e);
            let n = I[(0, p.getComboId)(e, t)];
            return null != n && null != n.storage && !!n.storage.sync
        }
        isLaunchable(e, t) {
            if (!(0, _.isSupportedPlatform)()) return !1;
            let n = I[(0, p.getComboId)(e, t)];
            return null != n && n.type === T.LocalDispatchApplicationStates.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length
        }
        getDefaultLaunchOption(e, t) {
            let n = I[(0, p.getComboId)(e, t)];
            if (null == n) return null;
            let {
                defaultLaunchOptionId: i,
                launchOptions: r
            } = n;
            return null == i || null == r ? null : r[i]
        }
        getLaunchOptions(e, t) {
            let n = I[(0, p.getComboId)(e, t)];
            return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions)
        }
        getHistoricalTotalBytesRead() {
            return O
        }
        getHistoricalTotalBytesDownloaded() {
            return D
        }
        getHistoricalTotalBytesWritten() {
            return y
        }
        whenInitialized(e) {
            this.addConditionalChangeListener(() => {
                if (v) return setImmediate(e), !1
            })
        }
    }
    x.displayName = "DispatchApplicationStore";
    var F = new x(o.default, {
        CONNECTION_OPEN: function() {
            v = !1
        },
        DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e;
            v = !0;
            let n = {},
                i = t.applications,
                r = null != t.currentTask ? t.currentTask.branchId : null,
                a = !1;
            for (let e in i)
                for (let t in i[e]) {
                    let c = (0, p.getComboId)(e, t);
                    if (n[c] = function(e) {
                            let {
                                build_id: t,
                                target_build_id: n,
                                manifest_ids: i,
                                target_manifest_ids: r,
                                application_id: a,
                                branch_id: o,
                                launch_commands: u,
                                launch_options: c,
                                storage: d,
                                install_path: E,
                                installed_size: p,
                                repairing: _
                            } = e, {
                                should_patch: S
                            } = e;
                            switch (null == S && (S = !0), e.state.type) {
                                case T.DispatchApplicationStates.COMPLETE: {
                                    let e;
                                    let g = {},
                                        I = null;
                                    if (_) e = T.LocalDispatchApplicationStates.REPAIRING;
                                    else if (null == t) e = T.LocalDispatchApplicationStates.INSTALL_REQUIRED;
                                    else if (S && (t !== n || null != i && 0 !== s.difference(i, r).length)) e = T.LocalDispatchApplicationStates.UPDATE_REQUIRED;
                                    else if (e = T.LocalDispatchApplicationStates.UP_TO_DATE, null != E) {
                                        let e = l.default.fileManager.join(E, "content"),
                                            t = (0, f.getBuildPlatform)();
                                        if (null != c && 0 !== c.length) {
                                            var m;
                                            if (t === T.BuildPlatformTypes.WIN64 && (m = t, !c.some(e => e.platforms.includes(m)))) t = T.BuildPlatformTypes.WIN32;
                                            for (let n of c)
                                                if (n.platforms.includes(t)) {
                                                    let t;
                                                    let {
                                                        executable: i,
                                                        name: r,
                                                        working_dir: s
                                                    } = n, a = l.default.fileManager.join(e, i);
                                                    (0, h.isMac)() && !a.startsWith(C) && (a = "".concat(C).concat(a)), t = null != s ? l.default.fileManager.join(e, s) : l.default.fileManager.dirname(a), g[r] = {
                                                        ...n,
                                                        id: r,
                                                        fullExecutablePath: a,
                                                        fullWorkingDir: t
                                                    }, null == I && (I = r)
                                                }
                                        } else if (null != u) {
                                            t === T.BuildPlatformTypes.WIN64 && null == u[t] && (t = T.BuildPlatformTypes.WIN32);
                                            let n = u[t];
                                            if (null != n) {
                                                let {
                                                    executable: i
                                                } = n, r = "Default";
                                                g[r] = {
                                                    ...n,
                                                    name: r,
                                                    id: r,
                                                    fullExecutablePath: l.default.fileManager.join(e, i),
                                                    fullWorkingDir: e,
                                                    platforms: [t]
                                                }, I = r
                                            }
                                        }
                                    }
                                    return {
                                        type: e,
                                        applicationId: a,
                                        branchId: o,
                                        buildId: t,
                                        manifestIds: i,
                                        targetBuildId: n,
                                        targetManifestIds: r,
                                        installPath: E,
                                        installedSize: p,
                                        launchOptions: g,
                                        defaultLaunchOptionId: I,
                                        shouldPatch: S,
                                        storage: d
                                    }
                                }
                                case T.DispatchApplicationStates.TRANSITION: {
                                    let s;
                                    let {
                                        stage: l,
                                        disk_progress: u,
                                        network_progress: c,
                                        reader_progress: d,
                                        progress: f,
                                        total: h,
                                        paused: m
                                    } = e.state, g = l.type;
                                    return {
                                        type: s = g === T.DispatchApplicationStages.UNINSTALLING ? T.LocalDispatchApplicationStates.UNINSTALLING : _ ? T.LocalDispatchApplicationStates.REPAIRING : null == t ? T.LocalDispatchApplicationStates.INSTALLING : T.LocalDispatchApplicationStates.UPDATING,
                                        stage: g,
                                        applicationId: a,
                                        branchId: o,
                                        buildId: t,
                                        manifestIds: i,
                                        targetBuildId: n,
                                        targetManifestIds: r,
                                        installPath: E,
                                        installedSize: p,
                                        diskProgress: u,
                                        networkProgress: c,
                                        readerProgress: d,
                                        progress: f,
                                        total: h,
                                        paused: m,
                                        shouldPatch: S
                                    }
                                }
                            }
                            throw Error("Invalid Dispatch State. state=".concat(e.state.type))
                        }(i[e][t]), null != I[c]) {
                        let e = k(n, c, L);
                        e > 0 && U(A += e);
                        let i = k(n, c, b);
                        i > 0 && w(R += i);
                        let s = k(n, c, M);
                        if (s > 0 && G(N += s), r === t) {
                            let e = n[c];
                            if (!0 !== e.paused && (e.type === T.LocalDispatchApplicationStates.UNINSTALLING || e.type === T.LocalDispatchApplicationStates.INSTALLING || e.type === T.LocalDispatchApplicationStates.UPDATING)) switch (e.stage) {
                                case T.DispatchApplicationStages.PATCHING:
                                case T.DispatchApplicationStages.FINALIZING:
                                case T.DispatchApplicationStages.VERIFYING:
                                case T.DispatchApplicationStages.REPAIRING:
                                case T.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
                                    u.default.setProgress("dispatch_application_progress", (0, p.calculateProgressPercentage)(e.progress, e.total) / 100), a = !0
                            }
                        }
                    }
                    if (!P) {
                        let i = l.default.fileManager.dirname(n[c].installPath);
                        m.default.getInstallationPath(e, t) !== i && o.default.wait(() => {
                            o.default.dispatch({
                                type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                                applicationId: e,
                                branchId: t,
                                installationPath: i
                            })
                        }), -1 === S.default.getQueuePosition(e, t) && (n[c].type === T.LocalDispatchApplicationStates.INSTALLING || n[c].type === T.LocalDispatchApplicationStates.UPDATING) && d.default.hasApplication(e, t) && m.default.shouldBeInstalled(e, t) && o.default.wait(() => {
                            o.default.dispatch({
                                type: "DISPATCH_APPLICATION_UPDATE",
                                applicationId: e,
                                branchId: t,
                                automatic: !0
                            })
                        })
                    }
                }!a && "dispatch_application_progress" === u.default.taskID && u.default.clearProgress("dispatch_application_progress"), I = n, P = !0
        }
    })
}