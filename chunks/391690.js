function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("47120"), n("757143");
    var r, a = n("442837"),
        s = n("570140"),
        o = n("579806"),
        l = n("358085"),
        u = n("417363"),
        d = n("689938");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let c = {},
        E = (0, l.isWindows)() ? "".concat(o.default.process.env.LOCALAPPDATA, "\\DiscordGames") : (0, l.isMac)() ? "/Applications/DiscordGames" : "/tmp";

    function I(e, t) {
        var n;
        c = {
            ...c,
            [e]: {
                ...null !== (n = c[e]) && void 0 !== n ? n : {},
                ...t
            }
        }
    }

    function T(e) {
        let {
            applicationId: t,
            branchId: n,
            installationPath: r
        } = e;
        null == i.installations[t] && (i.installations[t] = {}), i.installations[t][n] = {
            installationPath: r
        }, !i.installationPaths.has(r) && S({
            path: r,
            metadata: {}
        })
    }

    function f(e) {
        let {
            applicationId: t,
            branchId: n
        } = e;
        if (null == i.installations[t]) return !1;
        delete i.installations[t][n], 0 === Object.keys(i.installations[t]).length && delete i.installations[t]
    }

    function S(e) {
        if (i.installationPaths.has(e.path)) return !1;
        I(e.path, e.metadata);
        let t = new Set(i.installationPaths);
        t.add(e.path), i.installationPaths = t
    }
    class h extends(r = a.default.PersistedStore) {
        initialize(e) {
            let t = {
                ...e
            };
            null == t.installations && (t.installations = {}), null == t.defaultInstallationPath && (t.defaultInstallationPath = E), null == t.installationPaths ? t.installationPaths = new Set([t.defaultInstallationPath]) : t.installationPaths = new Set(Array.from(t.installationPaths)), null == t.pathLabels && (t.pathLabels = {}), i = t
        }
        getState() {
            return i
        }
        get defaultInstallationPath() {
            return i.defaultInstallationPath
        }
        get installationPaths() {
            return Array.from(i.installationPaths).map(e => ({
                path: e,
                label: i.pathLabels[e]
            }))
        }
        get installationPathsMetadata() {
            return c
        }
        hasGamesInstalledInPath(e) {
            let {
                installations: t
            } = i;
            for (let n in t)
                for (let i in t[n])
                    if (t[n][i].installationPath === e) return !0;
            return !1
        }
        shouldBeInstalled(e, t) {
            return null != i.installations[e] && null != i.installations[e][t]
        }
        getInstallationPath(e, t) {
            return null == i.installations[e] || null == i.installations[e][t] ? null : i.installations[e][t].installationPath
        }
        getLabelFromPath(e) {
            var t, n;
            return e === E ? d.default.Messages.INSTALL_LOCATION_MAIN : null !== (n = null !== (t = o.default.fileManager.basename(e)) && void 0 !== t ? t : e.replace(/[/\\]+$/, "").split(/[/\\]+/g).slice(-1)[0]) && void 0 !== n ? n : "?"
        }
    }
    _(h, "displayName", "InstallationManagerStore"), _(h, "persistKey", "InstallationManagerStore"), t.default = new h(s.default, {
        DISPATCH_APPLICATION_INSTALL: T,
        DISPATCH_APPLICATION_UNINSTALL: f,
        DISPATCH_APPLICATION_CANCEL: function(e) {
            let {
                applicationId: t,
                branchId: n
            } = e, i = u.default.getState(t, n);
            null != i && null == i.buildId && null == i.manifestIds && f({
                applicationId: t,
                branchId: n
            })
        },
        INSTALLATION_LOCATION_ADD: S,
        INSTALLATION_LOCATION_REMOVE: function(e) {
            var t;
            let {
                path: n
            } = e;
            if (!i.installationPaths.has(n) || i.defaultInstallationPath === n) return !1;
            let r = new Set(i.installationPaths);
            r.delete(n), i.installationPaths = r, t = n, c = {
                ...c
            }, delete c[t], ! function(e) {
                if (null == i.pathLabels[e]) return;
                i.pathLabels = {
                    ...i.pathLabels
                }, delete i.pathLabels[e]
            }(n)
        },
        INSTALLATION_LOCATION_UPDATE: function(e) {
            let {
                path: t,
                label: n,
                isDefault: r
            } = e;
            if (!i.installationPaths.has(t)) return !1;
            if (null != n && "" !== n && i.pathLabels[t] !== n) {
                var a, s;
                a = t, s = n, i.pathLabels = {
                    ...i.pathLabels,
                    [a]: s
                }
            }
            r && i.defaultInstallationPath !== t && (i.defaultInstallationPath = t)
        },
        INSTALLATION_LOCATION_FETCH_METADATA: function(e) {
            let {
                metadataPayload: t
            } = e;
            for (let e in t) I(e, t[e])
        },
        DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: T
    })
}