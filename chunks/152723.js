function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007"), n("70102");
    var r = n("913144"),
        a = n("846071"),
        o = n("605250"),
        l = n("697218"),
        u = n("316661"),
        d = n("599110"),
        c = n("773336"),
        f = n("50885"),
        _ = n("49111"),
        E = n("492249");
    let h = new o.default("NativeDispatchUtils");

    function g() {
        return null == s && h.warn("Tried getting Dispatch instance before instantiated"), s
    }

    function m(e) {
        let t = JSON.parse(e);
        return h.log("Native Dispatch error", t), new a.default(t)
    }

    function p(e, t) {
        "" !== e && m(e)
    }
    var S = {
        init(e) {
            let {
                userToken: t,
                userId: n,
                installPaths: r,
                platform: a,
                stateCallback: o,
                errorCallback: u
            } = e;
            null == s && (null != i ? Promise.resolve(i) : (0, c.isDesktop)() ? Promise.all([f.default.ensureModule("discord_dispatch"), f.default.ensureModule("discord_modules")]).then(() => {
                f.default.requireModule("discord_modules");
                let e = f.default.getDispatch();
                return null != e ? (i = e, e) : Promise.reject(Error("dispatch not found"))
            }) : Promise.reject(Error("not desktop client"))).then(e => {
                var i;
                let c = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: "276541"
                    },
                    f = l.default.getCurrentUser();
                null != f && (c.user_id = f.id, c.user_name = f.tag, null != f.email && (c.email = f.email));
                let E = {
                    user_token: t,
                    user_id: n,
                    install_paths: r.map(e => {
                        let {
                            path: t
                        } = e;
                        return t
                    }),
                    api_endpoint: "".concat((i = "https:", "https:")).concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: c,
                    platform: a
                };
                s = new e.Dispatch(JSON.stringify(E), e => {
                    let t = JSON.parse(e);
                    o({
                        applications: t.applications,
                        paused: t.paused,
                        currentTask: null != t.current_task ? {
                            applicationId: t.current_task.application_id,
                            branchId: t.current_task.branch_id
                        } : null,
                        nextTask: null != t.next_task ? {
                            applicationId: t.next_task.application_id,
                            branchId: t.next_task.branch_id
                        } : null
                    })
                }, e => {
                    let t = m(e);
                    u(t)
                }, e => {
                    let t = JSON.parse(e);
                    ! function(e) {
                        let {
                            properties: t
                        } = e;
                        switch (null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name) {
                            case _.AnalyticEvents.DISPATCH_PATCH_STARTED:
                            case _.AnalyticEvents.DISPATCH_PATCH_PAUSED:
                            case _.AnalyticEvents.DISPATCH_PATCH_FAILED:
                            case _.AnalyticEvents.DISPATCH_PATCH_VERIFICATION_FAILED:
                            case _.AnalyticEvents.DISPATCH_PATCH_COMPLETE:
                            case _.AnalyticEvents.DISPATCH_PATCH_CANCELLED:
                            case _.AnalyticEvents.DISPATCH_APPLICATION_UNINSTALLED:
                                d.default.track(e.event_name, t)
                        }
                    }(t)
                })
            })
        },
        destroy() {
            let e = g();
            null != e && void 0 !== e.destroy && (e.destroy(), s = null)
        },
        setTargetManifest(e) {
            let {
                applicationId: t,
                applicationName: n,
                applicationIcon: i,
                branchId: s,
                buildId: r,
                manifestIds: a,
                installationPath: o
            } = e, l = g();
            null != l && l.command(JSON.stringify({
                command: "SetTargetManifest",
                application_id: t,
                application_name: n,
                application_icon: i,
                branch_id: s,
                build_id: r,
                manifest_ids: a,
                install_path: o
            }), p)
        },
        setCurrentTask(e, t, n, i, s) {
            let r = g();
            return null != r && (r.command(JSON.stringify({
                command: "SetCurrentTask",
                application_id: e,
                branch_id: t,
                action: n,
                user_id: i,
                user_token: s
            }), p), !0)
        },
        setCredentials(e, t) {
            let n = g();
            null != n && n.command(JSON.stringify({
                command: "SetCredentials",
                user_id: e,
                user_token: t
            }), p)
        },
        cancel(e, t) {
            let n = g();
            null != n && n.command(JSON.stringify({
                command: "Cancel",
                application_id: e,
                branch_id: t
            }), p)
        },
        uninstall(e, t) {
            let n = g();
            null != n && n.command(JSON.stringify({
                command: "Uninstall",
                application_id: e,
                branch_id: t
            }), p)
        },
        pause() {
            let e = g();
            null != e && e.command(JSON.stringify({
                command: "Pause"
            }), p)
        },
        resume() {
            let e = g();
            null != e && e.command(JSON.stringify({
                command: "Resume"
            }), p)
        },
        queryDirectory(e, t) {
            let n = g();
            null != n && n.command(JSON.stringify({
                command: "QueryDirectory",
                path: e
            }), (e, n) => {
                if ("" !== e) t(JSON.parse(e));
                else if (null != n) {
                    let e = JSON.parse(n);
                    t(null, {
                        hasPermission: e.has_permission,
                        availableKB: parseInt(e.available_kb),
                        totalKB: parseInt(e.total_kb)
                    })
                }
            })
        },
        runLaunchSetup: (e, t) => u.default.isRunning() ? Promise.reject(Error("Already running launch setup.")) : (r.default.dispatch({
            type: "DISPATCH_APPLICATION_LAUNCH_SETUP_START"
        }), new Promise((n, i) => {
            let s = g();
            if (null == s) {
                i(Error("native dispatch instance not found"));
                return
            }
            s.command(JSON.stringify({
                command: "RunLaunchSetup",
                application_id: e,
                branch_id: t
            }), (e, t, s) => {
                if ("" !== e) {
                    r.default.dispatch({
                        type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
                    });
                    let t = m(e);
                    r.default.dispatch({
                        type: "DISPATCH_APPLICATION_ERROR",
                        error: t
                    }), null != t.code && t.code === E.DispatchErrorCodes.POST_INSTALL_CANCELLED ? i(t) : n();
                    return
                }
                if ("" !== t) {
                    r.default.dispatch({
                        type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
                    }), n();
                    return
                }
                if ("" !== s) {
                    let e = JSON.parse(s);
                    r.default.dispatch({
                        type: "DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE",
                        progress: e.progress,
                        total: e.total,
                        name: e.name
                    })
                }
            })
        })),
        launch: (e, t, n, i) => new Promise((s, r) => {
            let a = g();
            if (null == a) {
                r(Error("native dispatch instance not found"));
                return
            }
            a.command(JSON.stringify({
                command: "Launch",
                application_id: e,
                branch_id: t,
                option_name: n,
                environment: i
            }), function(e, t) {
                if ("" !== e) r(m(e));
                else {
                    let e = JSON.parse(t);
                    s([e.pid])
                }
            })
        })
    }
}