function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        cancel: function() {
            return g
        },
        completeInstall: function() {
            return D
        },
        completeRepair: function() {
            return v
        },
        destroy: function() {
            return h
        },
        init: function() {
            return S
        },
        installApplication: function() {
            return A
        },
        moveUp: function() {
            return C
        },
        pause: function() {
            return R
        },
        removeFinished: function() {
            return L
        },
        repairApplication: function() {
            return m
        },
        resume: function() {
            return O
        },
        uninstallApplication: function() {
            return p
        },
        updateApplication: function() {
            return N
        }
    }), n("411104");
    var i = n("544891"),
        r = n("570140"),
        s = n("812206"),
        a = n("594190"),
        o = n("703656"),
        l = n("695346"),
        u = n("391690"),
        d = n("626135"),
        _ = n("129542"),
        c = n("877481"),
        E = n("830168"),
        I = n("57513"),
        T = n("981631"),
        f = n("689938");

    function S(e, t) {
        E.default.init({
            userToken: e,
            userId: t,
            installPaths: u.default.installationPaths,
            platform: (0, _.getBuildPlatform)(),
            stateCallback: e => {
                r.default.dispatch({
                    type: "DISPATCH_APPLICATION_STATE_UPDATE",
                    state: e
                })
            },
            errorCallback: e => {
                r.default.dispatch({
                    type: "DISPATCH_APPLICATION_ERROR",
                    error: e
                })
            }
        })
    }

    function h() {
        E.default.destroy()
    }

    function A(e) {
        let {
            application: t,
            branchId: n,
            buildId: i,
            manifestIds: s,
            installationPath: a,
            analyticsLocation: o
        } = e;
        E.default.setTargetManifest({
            applicationId: t.id,
            applicationName: t.name,
            applicationIcon: t.icon,
            branchId: n,
            buildId: i,
            manifestIds: s,
            installationPath: a
        }), r.default.dispatch({
            type: "DISPATCH_APPLICATION_INSTALL",
            applicationId: t.id,
            branchId: n,
            installationPath: a
        }), d.default.track(T.AnalyticEvents.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: o
        })
    }

    function m(e, t, n) {
        (0, I.fetchLiveBuild)(e.id, t).then(() => {
            r.default.dispatch({
                type: "DISPATCH_APPLICATION_REPAIR",
                applicationId: e.id,
                branchId: t
            })
        }), d.default.track(T.AnalyticEvents.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n
        })
    }

    function N(e, t, n, i) {
        let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        ! function(e, t, n, i) {
            if (a.default.getRunningDiscordApplicationIds().includes(e.id)) return;
            let r = u.default.getInstallationPath(e.id, t);
            if (null == r) throw Error("Missing installation path for application: ".concat(e.id, " ").concat(t));
            E.default.setTargetManifest({
                applicationId: e.id,
                applicationName: e.name,
                applicationIcon: e.icon,
                branchId: t,
                buildId: n,
                manifestIds: i,
                installationPath: r
            })
        }(e, t, n, i), r.default.dispatch({
            type: "DISPATCH_APPLICATION_UPDATE",
            applicationId: e.id,
            branchId: t,
            automatic: s
        })
    }

    function p(e, t, n) {
        let i = s.default.getApplication(e);
        null != i && (c.default.removeShortcuts(i.name), d.default.track(T.AnalyticEvents.LIBRARY_UNINSTALL_INITIATED, {
            application_id: i.id,
            application_name: i.name,
            sku_id: i.primarySkuId,
            location: n
        })), E.default.uninstall(e, t), r.default.dispatch({
            type: "DISPATCH_APPLICATION_UNINSTALL",
            applicationId: e,
            branchId: t
        })
    }

    function O() {
        E.default.resume()
    }

    function R() {
        E.default.pause()
    }

    function C(e, t) {
        r.default.dispatch({
            type: "DISPATCH_APPLICATION_MOVE_UP",
            applicationId: e,
            branchId: t
        })
    }

    function g(e, t) {
        E.default.cancel(e, t), r.default.dispatch({
            type: "DISPATCH_APPLICATION_CANCEL",
            applicationId: e,
            branchId: t
        })
    }

    function L(e, t) {
        r.default.dispatch({
            type: "DISPATCH_APPLICATION_REMOVE_FINISHED",
            applicationId: e,
            branchId: t
        })
    }

    function v(e, t) {
        let n = s.default.getApplication(e);
        null != n && c.default.createShortcuts(l.InstallShortcutDesktop.getSetting(), l.InstallShortcutStartMenu.getSetting(), n.name, n.id, t.installPath)
    }

    function D(e, t) {
        let r = s.default.getApplication(e);
        i.HTTP.post({
            url: T.Endpoints.LIBRARY_APPLICATION_INSTALLED(e, e),
            oldFormErrors: !0
        }), null != r && (c.default.createShortcuts(l.InstallShortcutDesktop.getSetting(), l.InstallShortcutStartMenu.getSetting(), r.name, r.id, t.installPath), Promise.resolve().then(n.bind(n, "292556")).then(e => {
            let {
                default: t
            } = e;
            t.showNotification(r.getIconURL(64), f.default.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_TITLE, f.default.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_BODY.format({
                name: r.name
            }), {
                notif_type: "Game Library Game Installed"
            }, {
                onClick: () => (0, o.transitionTo)(T.Routes.APPLICATION_LIBRARY),
                omitViewTracking: !0
            })
        }))
    }
}