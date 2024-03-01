function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        init: function() {
            return S
        },
        destroy: function() {
            return m
        },
        installApplication: function() {
            return T
        },
        repairApplication: function() {
            return g
        },
        updateApplication: function() {
            return I
        },
        uninstallApplication: function() {
            return C
        },
        resume: function() {
            return v
        },
        pause: function() {
            return A
        },
        moveUp: function() {
            return R
        },
        cancel: function() {
            return N
        },
        removeFinished: function() {
            return O
        },
        completeRepair: function() {
            return D
        },
        completeInstall: function() {
            return y
        }
    }), n("70102");
    var i = n("872717"),
        r = n("913144"),
        s = n("299285"),
        a = n("161454"),
        o = n("393414"),
        l = n("845579"),
        u = n("98328"),
        c = n("599110"),
        d = n("645672"),
        f = n("269180"),
        E = n("152723"),
        p = n("71313"),
        h = n("49111"),
        _ = n("782340");

    function S(e, t) {
        E.default.init({
            userToken: e,
            userId: t,
            installPaths: u.default.installationPaths,
            platform: (0, d.getBuildPlatform)(),
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

    function m() {
        E.default.destroy()
    }

    function T(e) {
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
        }), c.default.track(h.AnalyticEvents.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: o
        })
    }

    function g(e, t, n) {
        (0, p.fetchLiveBuild)(e.id, t).then(() => {
            r.default.dispatch({
                type: "DISPATCH_APPLICATION_REPAIR",
                applicationId: e.id,
                branchId: t
            })
        }), c.default.track(h.AnalyticEvents.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n
        })
    }

    function I(e, t, n, i) {
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

    function C(e, t, n) {
        let i = s.default.getApplication(e);
        null != i && (f.default.removeShortcuts(i.name), c.default.track(h.AnalyticEvents.LIBRARY_UNINSTALL_INITIATED, {
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

    function v() {
        E.default.resume()
    }

    function A() {
        E.default.pause()
    }

    function R(e, t) {
        r.default.dispatch({
            type: "DISPATCH_APPLICATION_MOVE_UP",
            applicationId: e,
            branchId: t
        })
    }

    function N(e, t) {
        E.default.cancel(e, t), r.default.dispatch({
            type: "DISPATCH_APPLICATION_CANCEL",
            applicationId: e,
            branchId: t
        })
    }

    function O(e, t) {
        r.default.dispatch({
            type: "DISPATCH_APPLICATION_REMOVE_FINISHED",
            applicationId: e,
            branchId: t
        })
    }

    function D(e, t) {
        let n = s.default.getApplication(e);
        null != n && f.default.createShortcuts(l.InstallShortcutDesktop.getSetting(), l.InstallShortcutStartMenu.getSetting(), n.name, n.id, t.installPath)
    }

    function y(e, t) {
        let r = s.default.getApplication(e);
        i.default.post({
            url: h.Endpoints.LIBRARY_APPLICATION_INSTALLED(e, e),
            oldFormErrors: !0
        }), null != r && (f.default.createShortcuts(l.InstallShortcutDesktop.getSetting(), l.InstallShortcutStartMenu.getSetting(), r.name, r.id, t.installPath), n.el("193990").then(n.bind(n, "193990")).then(e => {
            let {
                default: t
            } = e;
            t.showNotification(r.getIconURL(64), _.default.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_TITLE, _.default.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_BODY.format({
                name: r.name
            }), {
                notif_type: "Game Library Game Installed"
            }, {
                onClick: () => (0, o.transitionTo)(h.Routes.APPLICATION_LIBRARY),
                omitViewTracking: !0
            })
        }))
    }
}