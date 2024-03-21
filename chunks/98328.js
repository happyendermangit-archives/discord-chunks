function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007"), n("781738");
    var s = n("446674"),
        r = n("913144"),
        a = n("49671"),
        o = n("773336"),
        l = n("535974"),
        u = n("782340");
    let d = {},
        c = (0, o.isWindows)() ? "".concat(a.default.process.env.LOCALAPPDATA, "\\DiscordGames") : (0, o.isMac)() ? "/Applications/DiscordGames" : "/tmp";

    function _(e, t) {
        var n;
        d = {
            ...d,
            [e]: {
                ...null !== (n = d[e]) && void 0 !== n ? n : {},
                ...t
            }
        }
    }

    function f(e) {
        let {
            applicationId: t,
            branchId: n,
            installationPath: s
        } = e;
        null == i.installations[t] && (i.installations[t] = {}), i.installations[t][n] = {
            installationPath: s
        }, !i.installationPaths.has(s) && h({
            path: s,
            metadata: {}
        })
    }

    function E(e) {
        let {
            applicationId: t,
            branchId: n
        } = e;
        if (null == i.installations[t]) return !1;
        delete i.installations[t][n], 0 === Object.keys(i.installations[t]).length && delete i.installations[t]
    }

    function h(e) {
        if (i.installationPaths.has(e.path)) return !1;
        _(e.path, e.metadata);
        let t = new Set(i.installationPaths);
        t.add(e.path), i.installationPaths = t
    }
    class g extends s.default.PersistedStore {
        initialize(e) {
            let t = {
                ...e
            };
            null == t.installations && (t.installations = {}), null == t.defaultInstallationPath && (t.defaultInstallationPath = c), null == t.installationPaths ? t.installationPaths = new Set([t.defaultInstallationPath]) : t.installationPaths = new Set(Array.from(t.installationPaths)), null == t.pathLabels && (t.pathLabels = {}), i = t
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
            return d
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
            return e === c ? u.default.Messages.INSTALL_LOCATION_MAIN : null !== (n = null !== (t = a.default.fileManager.basename(e)) && void 0 !== t ? t : e.replace(/[/\\]+$/, "").split(/[/\\]+/g).slice(-1)[0]) && void 0 !== n ? n : "?"
        }
    }
    g.displayName = "InstallationManagerStore", g.persistKey = "InstallationManagerStore";
    var m = new g(r.default, {
        DISPATCH_APPLICATION_INSTALL: f,
        DISPATCH_APPLICATION_UNINSTALL: E,
        DISPATCH_APPLICATION_CANCEL: function(e) {
            let {
                applicationId: t,
                branchId: n
            } = e, i = l.default.getState(t, n);
            null != i && null == i.buildId && null == i.manifestIds && E({
                applicationId: t,
                branchId: n
            })
        },
        INSTALLATION_LOCATION_ADD: h,
        INSTALLATION_LOCATION_REMOVE: function(e) {
            var t;
            let {
                path: n
            } = e;
            if (!i.installationPaths.has(n) || i.defaultInstallationPath === n) return !1;
            let s = new Set(i.installationPaths);
            s.delete(n), i.installationPaths = s, t = n, d = {
                ...d
            }, delete d[t], ! function(e) {
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
                isDefault: s
            } = e;
            if (!i.installationPaths.has(t)) return !1;
            if (null != n && "" !== n && i.pathLabels[t] !== n) {
                var r, a;
                r = t, a = n, i.pathLabels = {
                    ...i.pathLabels,
                    [r]: a
                }
            }
            s && i.defaultInstallationPath !== t && (i.defaultInstallationPath = t)
        },
        INSTALLATION_LOCATION_FETCH_METADATA: function(e) {
            let {
                metadataPayload: t
            } = e;
            for (let e in t) _(e, t[e])
        },
        DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: f
    })
}