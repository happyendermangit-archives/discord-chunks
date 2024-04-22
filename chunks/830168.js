function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120"), n("411104");
    var s = n("570140"),
        a = n("330516"),
        o = n("710845"),
        l = n("594174"),
        u = n("436181"),
        d = n("626135"),
        _ = n("358085"),
        c = n("998502"),
        E = n("981631"),
        I = n("186901");
    let T = new o.default("NativeDispatchUtils");

    function f() {
        return null == r && T.warn("Tried getting Dispatch instance before instantiated"), r
    }

    function S(e) {
        let t = JSON.parse(e);
        return T.log("Native Dispatch error", t), new a.default(t)
    }

    function h(e, t) {
        "" !== e && S(e)
    }
    t.default = {
        init(e) {
            let {
                userToken: t,
                userId: n,
                installPaths: s,
                platform: a,
                stateCallback: o,
                errorCallback: u
            } = e;
            null == r && (null != i ? Promise.resolve(i) : (0, _.isDesktop)() ? Promise.all([c.default.ensureModule("discord_dispatch"), c.default.ensureModule("discord_modules")]).then(() => {
                c.default.requireModule("discord_modules");
                let e = c.default.getDispatch();
                return null != e ? (i = e, e) : Promise.reject(Error("dispatch not found"))
            }) : Promise.reject(Error("not desktop client"))).then(e => {
                var i;
                let _ = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: "286802"
                    },
                    c = l.default.getCurrentUser();
                null != c && (_.user_id = c.id, _.user_name = c.tag, null != c.email && (_.email = c.email));
                let I = {
                    user_token: t,
                    user_id: n,
                    install_paths: s.map(e => {
                        let {
                            path: t
                        } = e;
                        return t
                    }),
                    api_endpoint: "".concat((i = "https:", "https:")).concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: _,
                    platform: a
                };
                r = new e.Dispatch(JSON.stringify(I), e => {
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
                    u(S(e))
                }, e => {
                    ! function(e) {
                        let {
                            properties: t
                        } = e;
                        switch (null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name) {
                            case E.AnalyticEvents.DISPATCH_PATCH_STARTED:
                            case E.AnalyticEvents.DISPATCH_PATCH_PAUSED:
                            case E.AnalyticEvents.DISPATCH_PATCH_FAILED:
                            case E.AnalyticEvents.DISPATCH_PATCH_VERIFICATION_FAILED:
                            case E.AnalyticEvents.DISPATCH_PATCH_COMPLETE:
                            case E.AnalyticEvents.DISPATCH_PATCH_CANCELLED:
                            case E.AnalyticEvents.DISPATCH_APPLICATION_UNINSTALLED:
                                d.default.track(e.event_name, t)
                        }
                    }(JSON.parse(e))
                })
            })
        },
        destroy() {
            let e = f();
            null != e && void 0 !== e.destroy && (e.destroy(), r = null)
        },
        setTargetManifest(e) {
            let {
                applicationId: t,
                applicationName: n,
                applicationIcon: i,
                branchId: r,
                buildId: s,
                manifestIds: a,
                installationPath: o
            } = e, l = f();
            null != l && l.command(JSON.stringify({
                command: "SetTargetManifest",
                application_id: t,
                application_name: n,
                application_icon: i,
                branch_id: r,
                build_id: s,
                manifest_ids: a,
                install_path: o
            }), h)
        },
        setCurrentTask(e, t, n, i, r) {
            let s = f();
            return null != s && (s.command(JSON.stringify({
                command: "SetCurrentTask",
                application_id: e,
                branch_id: t,
                action: n,
                user_id: i,
                user_token: r
            }), h), !0)
        },
        setCredentials(e, t) {
            let n = f();
            null != n && n.command(JSON.stringify({
                command: "SetCredentials",
                user_id: e,
                user_token: t
            }), h)
        },
        cancel(e, t) {
            let n = f();
            null != n && n.command(JSON.stringify({
                command: "Cancel",
                application_id: e,
                branch_id: t
            }), h)
        },
        uninstall(e, t) {
            let n = f();
            null != n && n.command(JSON.stringify({
                command: "Uninstall",
                application_id: e,
                branch_id: t
            }), h)
        },
        pause() {
            let e = f();
            null != e && e.command(JSON.stringify({
                command: "Pause"
            }), h)
        },
        resume() {
            let e = f();
            null != e && e.command(JSON.stringify({
                command: "Resume"
            }), h)
        },
        queryDirectory(e, t) {
            let n = f();
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
        runLaunchSetup: (e, t) => u.default.isRunning() ? Promise.reject(Error("Already running launch setup.")) : (s.default.dispatch({
            type: "DISPATCH_APPLICATION_LAUNCH_SETUP_START"
        }), new Promise((n, i) => {
            let r = f();
            if (null == r) {
                i(Error("native dispatch instance not found"));
                return
            }
            r.command(JSON.stringify({
                command: "RunLaunchSetup",
                application_id: e,
                branch_id: t
            }), (e, t, r) => {
                if ("" !== e) {
                    s.default.dispatch({
                        type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
                    });
                    let t = S(e);
                    s.default.dispatch({
                        type: "DISPATCH_APPLICATION_ERROR",
                        error: t
                    }), null != t.code && t.code === I.DispatchErrorCodes.POST_INSTALL_CANCELLED ? i(t) : n();
                    return
                }
                if ("" !== t) {
                    s.default.dispatch({
                        type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
                    }), n();
                    return
                }
                if ("" !== r) {
                    let e = JSON.parse(r);
                    s.default.dispatch({
                        type: "DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE",
                        progress: e.progress,
                        total: e.total,
                        name: e.name
                    })
                }
            })
        })),
        launch: (e, t, n, i) => new Promise((r, s) => {
            let a = f();
            if (null == a) {
                s(Error("native dispatch instance not found"));
                return
            }
            a.command(JSON.stringify({
                command: "Launch",
                application_id: e,
                branch_id: t,
                option_name: n,
                environment: i
            }), function(e, t) {
                "" !== e ? s(S(e)) : r([JSON.parse(t).pid])
            })
        })
    }
}