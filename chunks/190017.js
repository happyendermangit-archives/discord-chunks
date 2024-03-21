function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        init: function() {
            return m
        },
        destroy: function() {
            return p
        },
        installApplication: function() {
            return S
        },
        repairApplication: function() {
            return v
        },
        updateApplication: function() {
            return T
        },
        uninstallApplication: function() {
            return I
        },
        resume: function() {
            return A
        },
        pause: function() {
            return C
        },
        moveUp: function() {
            return y
        },
        cancel: function() {
            return N
        },
        removeFinished: function() {
            return R
        },
        completeRepair: function() {
            return O
        },
        completeInstall: function() {
            return D
        }
    }), n("70102");
    var i = n("872717"),
        s = n("913144"),
        r = n("299285"),
        a = n("161454"),
        o = n("393414"),
        l = n("845579"),
        u = n("98328"),
        d = n("599110"),
        c = n("645672"),
        _ = n("269180"),
        f = n("152723"),
        E = n("71313"),
        h = n("49111"),
        g = n("782340");

    function m(e, t) {
        f.default.init({
            userToken: e,
            userId: t,
            installPaths: u.default.installationPaths,
            platform: (0, c.getBuildPlatform)(),
            stateCallback: e => {
                s.default.dispatch({
                    type: "DISPATCH_APPLICATION_STATE_UPDATE",
                    state: e
                })
            },
            errorCallback: e => {
                s.default.dispatch({
                    type: "DISPATCH_APPLICATION_ERROR",
                    error: e
                })
            }
        })
    }

    function p() {
        f.default.destroy()
    }

    function S(e) {
        let {
            application: t,
            branchId: n,
            buildId: i,
            manifestIds: r,
            installationPath: a,
            analyticsLocation: o
        } = e;
        f.default.setTargetManifest({
            applicationId: t.id,
            applicationName: t.name,
            applicationIcon: t.icon,
            branchId: n,
            buildId: i,
            manifestIds: r,
            installationPath: a
        }), s.default.dispatch({
            type: "DISPATCH_APPLICATION_INSTALL",
            applicationId: t.id,
            branchId: n,
            installationPath: a
        }), d.default.track(h.AnalyticEvents.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: o
        })
    }

    function v(e, t, n) {
        (0, E.fetchLiveBuild)(e.id, t).then(() => {
            s.default.dispatch({
                type: "DISPATCH_APPLICATION_REPAIR",
                applicationId: e.id,
                branchId: t
            })
        }), d.default.track(h.AnalyticEvents.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n
        })
    }

    function T(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        ! function(e, t, n, i) {
            if (a.default.getRunningDiscordApplicationIds().includes(e.id)) return;
            let s = u.default.getInstallationPath(e.id, t);
            if (null == s) throw Error("Missing installation path for application: ".concat(e.id, " ").concat(t));
            f.default.setTargetManifest({
                applicationId: e.id,
                applicationName: e.name,
                applicationIcon: e.icon,
                branchId: t,
                buildId: n,
                manifestIds: i,
                installationPath: s
            })
        }(e, t, n, i), s.default.dispatch({
            type: "DISPATCH_APPLICATION_UPDATE",
            applicationId: e.id,
            branchId: t,
            automatic: r
        })
    }

    function I(e, t, n) {
        let i = r.default.getApplication(e);
        null != i && (_.default.removeShortcuts(i.name), d.default.track(h.AnalyticEvents.LIBRARY_UNINSTALL_INITIATED, {
            application_id: i.id,
            application_name: i.name,
            sku_id: i.primarySkuId,
            location: n
        })), f.default.uninstall(e, t), s.default.dispatch({
            type: "DISPATCH_APPLICATION_UNINSTALL",
            applicationId: e,
            branchId: t
        })
    }

    function A() {
        f.default.resume()
    }

    function C() {
        f.default.pause()
    }

    function y(e, t) {
        s.default.dispatch({
            type: "DISPATCH_APPLICATION_MOVE_UP",
            applicationId: e,
            branchId: t
        })
    }

    function N(e, t) {
        f.default.cancel(e, t), s.default.dispatch({
            type: "DISPATCH_APPLICATION_CANCEL",
            applicationId: e,
            branchId: t
        })
    }

    function R(e, t) {
        s.default.dispatch({
            type: "DISPATCH_APPLICATION_REMOVE_FINISHED",
            applicationId: e,
            branchId: t
        })
    }

    function O(e, t) {
        let n = r.default.getApplication(e);
        null != n && _.default.createShortcuts(l.InstallShortcutDesktop.getSetting(), l.InstallShortcutStartMenu.getSetting(), n.name, n.id, t.installPath)
    }

    function D(e, t) {
        let s = r.default.getApplication(e);
        i.default.post({
            url: h.Endpoints.LIBRARY_APPLICATION_INSTALLED(e, e),
            oldFormErrors: !0
        }), null != s && (_.default.createShortcuts(l.InstallShortcutDesktop.getSetting(), l.InstallShortcutStartMenu.getSetting(), s.name, s.id, t.installPath), n.el("193990").then(n.bind(n, "193990")).then(e => {
            let {
                default: t
            } = e;
            t.showNotification(s.getIconURL(64), g.default.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_TITLE, g.default.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_BODY.format({
                name: s.name
            }), {
                notif_type: "Game Library Game Installed"
            }, {
                onClick: () => (0, o.transitionTo)(h.Routes.APPLICATION_LIBRARY),
                omitViewTracking: !0
            })
        }))
    }
}