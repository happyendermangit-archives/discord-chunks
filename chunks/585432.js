function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("629815"),
        a = n("504376"),
        u = n("35523"),
        s = n("208454"),
        l = n("30141"),
        c = n("870331"),
        f = n("374550"),
        d = n("131900"),
        _ = n("281767"),
        E = n("902735"),
        p = new u.default("NativeDispatchUtils");

    function m() {
        return null == o && p.warn("Tried getting Dispatch instance before instantiated"), o
    }

    function y(e) {
        var t = JSON.parse(e);
        return p.log("Native Dispatch error", t), new a.default(t)
    }

    function I(e, t) {
        "" !== e && y(e)
    }
    t.default = {
        init: function(e) {
            var t = e.userToken,
                n = e.userId,
                i = e.installPaths,
                a = e.platform,
                u = e.stateCallback,
                l = e.errorCallback;
            null == o && (null != r ? Promise.resolve(r) : (0, f.isDesktop)() ? Promise.all([d.default.ensureModule("discord_dispatch"), d.default.ensureModule("discord_modules")]).then(function() {
                d.default.requireModule("discord_modules");
                var e = d.default.getDispatch();
                return null != e ? (r = e, e) : Promise.reject(Error("dispatch not found"))
            }) : Promise.reject(Error("not desktop client"))).then(function(e) {
                var r, f = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: "280219"
                    },
                    d = s.default.getCurrentUser();
                null != d && (f.user_id = d.id, f.user_name = d.tag, null != d.email && (f.email = d.email));
                var E = {
                    user_token: t,
                    user_id: n,
                    install_paths: i.map(function(e) {
                        return e.path
                    }),
                    api_endpoint: "".concat((r = "https:", "https:")).concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: f,
                    platform: a
                };
                o = new e.Dispatch(JSON.stringify(E), function(e) {
                    var t = JSON.parse(e);
                    u({
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
                }, function(e) {
                    l(y(e))
                }, function(e) {
                    ! function(e) {
                        var t = e.properties;
                        switch (null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name) {
                            case _.AnalyticEvents.DISPATCH_PATCH_STARTED:
                            case _.AnalyticEvents.DISPATCH_PATCH_PAUSED:
                            case _.AnalyticEvents.DISPATCH_PATCH_FAILED:
                            case _.AnalyticEvents.DISPATCH_PATCH_VERIFICATION_FAILED:
                            case _.AnalyticEvents.DISPATCH_PATCH_COMPLETE:
                            case _.AnalyticEvents.DISPATCH_PATCH_CANCELLED:
                            case _.AnalyticEvents.DISPATCH_APPLICATION_UNINSTALLED:
                                c.default.track(e.event_name, t)
                        }
                    }(JSON.parse(e))
                })
            })
        },
        destroy: function() {
            var e = m();
            null != e && void 0 !== e.destroy && (e.destroy(), o = null)
        },
        setTargetManifest: function(e) {
            var t = e.applicationId,
                n = e.applicationName,
                r = e.applicationIcon,
                o = e.branchId,
                i = e.buildId,
                a = e.manifestIds,
                u = e.installationPath,
                s = m();
            null != s && s.command(JSON.stringify({
                command: "SetTargetManifest",
                application_id: t,
                application_name: n,
                application_icon: r,
                branch_id: o,
                build_id: i,
                manifest_ids: a,
                install_path: u
            }), I)
        },
        setCurrentTask: function(e, t, n, r, o) {
            var i = m();
            return null != i && (i.command(JSON.stringify({
                command: "SetCurrentTask",
                application_id: e,
                branch_id: t,
                action: n,
                user_id: r,
                user_token: o
            }), I), !0)
        },
        setCredentials: function(e, t) {
            var n = m();
            null != n && n.command(JSON.stringify({
                command: "SetCredentials",
                user_id: e,
                user_token: t
            }), I)
        },
        cancel: function(e, t) {
            var n = m();
            null != n && n.command(JSON.stringify({
                command: "Cancel",
                application_id: e,
                branch_id: t
            }), I)
        },
        uninstall: function(e, t) {
            var n = m();
            null != n && n.command(JSON.stringify({
                command: "Uninstall",
                application_id: e,
                branch_id: t
            }), I)
        },
        pause: function() {
            var e = m();
            null != e && e.command(JSON.stringify({
                command: "Pause"
            }), I)
        },
        resume: function() {
            var e = m();
            null != e && e.command(JSON.stringify({
                command: "Resume"
            }), I)
        },
        queryDirectory: function(e, t) {
            var n = m();
            null != n && n.command(JSON.stringify({
                command: "QueryDirectory",
                path: e
            }), function(e, n) {
                if ("" !== e) t(JSON.parse(e));
                else if (null != n) {
                    var r = JSON.parse(n);
                    t(null, {
                        hasPermission: r.has_permission,
                        availableKB: parseInt(r.available_kb),
                        totalKB: parseInt(r.total_kb)
                    })
                }
            })
        },
        runLaunchSetup: function(e, t) {
            return l.default.isRunning() ? Promise.reject(Error("Already running launch setup.")) : (i.default.dispatch({
                type: "DISPATCH_APPLICATION_LAUNCH_SETUP_START"
            }), new Promise(function(n, r) {
                var o = m();
                if (null == o) {
                    r(Error("native dispatch instance not found"));
                    return
                }
                o.command(JSON.stringify({
                    command: "RunLaunchSetup",
                    application_id: e,
                    branch_id: t
                }), function(e, t, o) {
                    if ("" !== e) {
                        i.default.dispatch({
                            type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
                        });
                        var a = y(e);
                        i.default.dispatch({
                            type: "DISPATCH_APPLICATION_ERROR",
                            error: a
                        }), null != a.code && a.code === E.DispatchErrorCodes.POST_INSTALL_CANCELLED ? r(a) : n();
                        return
                    }
                    if ("" !== t) {
                        i.default.dispatch({
                            type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE"
                        }), n();
                        return
                    }
                    if ("" !== o) {
                        var u = JSON.parse(o);
                        i.default.dispatch({
                            type: "DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE",
                            progress: u.progress,
                            total: u.total,
                            name: u.name
                        })
                    }
                })
            }))
        },
        launch: function(e, t, n, r) {
            return new Promise(function(o, i) {
                var a = m();
                if (null == a) {
                    i(Error("native dispatch instance not found"));
                    return
                }
                a.command(JSON.stringify({
                    command: "Launch",
                    application_id: e,
                    branch_id: t,
                    option_name: n,
                    environment: r
                }), function(e, t) {
                    "" !== e ? i(y(e)) : o([JSON.parse(t).pid])
                })
            })
        }
    }
}