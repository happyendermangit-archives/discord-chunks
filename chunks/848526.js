function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        cancel: function() {
            return b
        },
        completeInstall: function() {
            return C
        },
        completeRepair: function() {
            return R
        },
        destroy: function() {
            return I
        },
        init: function() {
            return y
        },
        installApplication: function() {
            return h
        },
        moveUp: function() {
            return A
        },
        pause: function() {
            return g
        },
        removeFinished: function() {
            return N
        },
        repairApplication: function() {
            return O
        },
        resume: function() {
            return v
        },
        uninstallApplication: function() {
            return S
        },
        updateApplication: function() {
            return T
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("342942"),
        a = n("654370"),
        u = n("163291"),
        s = n("53867"),
        l = n("27263"),
        c = n("870331"),
        f = n("783522"),
        d = n("173862"),
        _ = n("585432"),
        E = n("609595"),
        p = n("281767"),
        m = n("941504");

    function y(e, t) {
        _.default.init({
            userToken: e,
            userId: t,
            installPaths: l.default.installationPaths,
            platform: (0, f.getBuildPlatform)(),
            stateCallback: function(e) {
                o.default.dispatch({
                    type: "DISPATCH_APPLICATION_STATE_UPDATE",
                    state: e
                })
            },
            errorCallback: function(e) {
                o.default.dispatch({
                    type: "DISPATCH_APPLICATION_ERROR",
                    error: e
                })
            }
        })
    }

    function I() {
        _.default.destroy()
    }

    function h(e) {
        var t = e.application,
            n = e.branchId,
            r = e.buildId,
            i = e.manifestIds,
            a = e.installationPath,
            u = e.analyticsLocation;
        _.default.setTargetManifest({
            applicationId: t.id,
            applicationName: t.name,
            applicationIcon: t.icon,
            branchId: n,
            buildId: r,
            manifestIds: i,
            installationPath: a
        }), o.default.dispatch({
            type: "DISPATCH_APPLICATION_INSTALL",
            applicationId: t.id,
            branchId: n,
            installationPath: a
        }), c.default.track(p.AnalyticEvents.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: u
        })
    }

    function O(e, t, n) {
        (0, E.fetchLiveBuild)(e.id, t).then(function() {
            o.default.dispatch({
                type: "DISPATCH_APPLICATION_REPAIR",
                applicationId: e.id,
                branchId: t
            })
        }), c.default.track(p.AnalyticEvents.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n
        })
    }

    function T(e, t, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        ! function(e, t, n, r) {
            if (!a.default.getRunningDiscordApplicationIds().includes(e.id)) {
                var o = l.default.getInstallationPath(e.id, t);
                if (null == o) throw Error("Missing installation path for application: ".concat(e.id, " ").concat(t));
                _.default.setTargetManifest({
                    applicationId: e.id,
                    applicationName: e.name,
                    applicationIcon: e.icon,
                    branchId: t,
                    buildId: n,
                    manifestIds: r,
                    installationPath: o
                })
            }
        }(e, t, n, r), o.default.dispatch({
            type: "DISPATCH_APPLICATION_UPDATE",
            applicationId: e.id,
            branchId: t,
            automatic: i
        })
    }

    function S(e, t, n) {
        var r = i.default.getApplication(e);
        null != r && (d.default.removeShortcuts(r.name), c.default.track(p.AnalyticEvents.LIBRARY_UNINSTALL_INITIATED, {
            application_id: r.id,
            application_name: r.name,
            sku_id: r.primarySkuId,
            location: n
        })), _.default.uninstall(e, t), o.default.dispatch({
            type: "DISPATCH_APPLICATION_UNINSTALL",
            applicationId: e,
            branchId: t
        })
    }

    function v() {
        _.default.resume()
    }

    function g() {
        _.default.pause()
    }

    function A(e, t) {
        o.default.dispatch({
            type: "DISPATCH_APPLICATION_MOVE_UP",
            applicationId: e,
            branchId: t
        })
    }

    function b(e, t) {
        _.default.cancel(e, t), o.default.dispatch({
            type: "DISPATCH_APPLICATION_CANCEL",
            applicationId: e,
            branchId: t
        })
    }

    function N(e, t) {
        o.default.dispatch({
            type: "DISPATCH_APPLICATION_REMOVE_FINISHED",
            applicationId: e,
            branchId: t
        })
    }

    function R(e, t) {
        var n = i.default.getApplication(e);
        null != n && d.default.createShortcuts(s.InstallShortcutDesktop.getSetting(), s.InstallShortcutStartMenu.getSetting(), n.name, n.id, t.installPath)
    }

    function C(e, t) {
        var o = i.default.getApplication(e);
        r.HTTP.post({
            url: p.Endpoints.LIBRARY_APPLICATION_INSTALLED(e, e),
            oldFormErrors: !0
        }), null != o && (d.default.createShortcuts(s.InstallShortcutDesktop.getSetting(), s.InstallShortcutStartMenu.getSetting(), o.name, o.id, t.installPath), Promise.resolve().then(n.bind(n, "572088")).then(function(e) {
            e.default.showNotification(o.getIconURL(64), m.default.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_TITLE, m.default.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_BODY.format({
                name: o.name
            }), {
                notif_type: "Game Library Game Installed"
            }, {
                onClick: function() {
                    return (0, u.transitionTo)(p.Routes.APPLICATION_LIBRARY)
                },
                omitViewTracking: !0
            })
        }))
    }
}