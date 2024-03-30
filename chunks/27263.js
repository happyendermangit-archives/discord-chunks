function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("898511"),
        a = n("629815"),
        u = n("517727"),
        s = n("374550"),
        l = n("262283"),
        c = n("941504");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function p(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = {},
        I = (0, s.isWindows)() ? "".concat(u.default.process.env.LOCALAPPDATA, "\\DiscordGames") : (0, s.isMac)() ? "/Applications/DiscordGames" : "/tmp";

    function h(e, t) {
        var n;
        y = p(E({}, y), d({}, e, E({}, null !== (n = y[e]) && void 0 !== n ? n : {}, t)))
    }

    function O(e) {
        var t = e.applicationId,
            n = e.branchId,
            o = e.installationPath;
        null == r.installations[t] && (r.installations[t] = {}), r.installations[t][n] = {
            installationPath: o
        }, !r.installationPaths.has(o) && S({
            path: o,
            metadata: {}
        })
    }

    function T(e) {
        var t = e.applicationId,
            n = e.branchId;
        if (null == r.installations[t]) return !1;
        delete r.installations[t][n], 0 === Object.keys(r.installations[t]).length && delete r.installations[t]
    }

    function S(e) {
        if (r.installationPaths.has(e.path)) return !1;
        h(e.path, e.metadata);
        var t = new Set(r.installationPaths);
        t.add(e.path), r.installationPaths = t
    }
    var v = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(l, e);
        var t, n, o, i, a, s = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), s.apply(this, arguments)
        }
        return o = l, i = [{
            key: "initialize",
            value: function(e) {
                var t = E({}, e);
                null == t.installations && (t.installations = {}), null == t.defaultInstallationPath && (t.defaultInstallationPath = I), null == t.installationPaths ? t.installationPaths = new Set([t.defaultInstallationPath]) : t.installationPaths = new Set(Array.from(t.installationPaths)), null == t.pathLabels && (t.pathLabels = {}), r = t
            }
        }, {
            key: "getState",
            value: function() {
                return r
            }
        }, {
            key: "defaultInstallationPath",
            get: function() {
                return r.defaultInstallationPath
            }
        }, {
            key: "installationPaths",
            get: function() {
                return Array.from(r.installationPaths).map(function(e) {
                    return {
                        path: e,
                        label: r.pathLabels[e]
                    }
                })
            }
        }, {
            key: "installationPathsMetadata",
            get: function() {
                return y
            }
        }, {
            key: "hasGamesInstalledInPath",
            value: function(e) {
                var t = r.installations;
                for (var n in t)
                    for (var o in t[n])
                        if (t[n][o].installationPath === e) return !0;
                return !1
            }
        }, {
            key: "shouldBeInstalled",
            value: function(e, t) {
                return null != r.installations[e] && null != r.installations[e][t]
            }
        }, {
            key: "getInstallationPath",
            value: function(e, t) {
                return null == r.installations[e] || null == r.installations[e][t] ? null : r.installations[e][t].installationPath
            }
        }, {
            key: "getLabelFromPath",
            value: function(e) {
                var t, n;
                return e === I ? c.default.Messages.INSTALL_LOCATION_MAIN : null !== (n = null !== (t = u.default.fileManager.basename(e)) && void 0 !== t ? t : e.replace(/[/\\]+$/, "").split(/[/\\]+/g).slice(-1)[0]) && void 0 !== n ? n : "?"
            }
        }], f(o.prototype, i), a && f(o, a), l
    }(i.default.PersistedStore);
    d(v, "displayName", "InstallationManagerStore"), d(v, "persistKey", "InstallationManagerStore"), t.default = new v(a.default, {
        DISPATCH_APPLICATION_INSTALL: O,
        DISPATCH_APPLICATION_UNINSTALL: T,
        DISPATCH_APPLICATION_CANCEL: function(e) {
            var t = e.applicationId,
                n = e.branchId,
                r = l.default.getState(t, n);
            null != r && null == r.buildId && null == r.manifestIds && T({
                applicationId: t,
                branchId: n
            })
        },
        INSTALLATION_LOCATION_ADD: S,
        INSTALLATION_LOCATION_REMOVE: function(e) {
            var t, n = e.path;
            if (!r.installationPaths.has(n) || r.defaultInstallationPath === n) return !1;
            var o = new Set(r.installationPaths);
            o.delete(n), r.installationPaths = o, t = n, y = E({}, y), delete y[t], ! function(e) {
                if (null == r.pathLabels[e]) return;
                r.pathLabels = E({}, r.pathLabels), delete r.pathLabels[e]
            }(n)
        },
        INSTALLATION_LOCATION_UPDATE: function(e) {
            var t, n, o = e.path,
                i = e.label,
                a = e.isDefault;
            if (!r.installationPaths.has(o)) return !1;
            if (null != i && "" !== i && r.pathLabels[o] !== i) {
                ;
                t = o, n = i, r.pathLabels = p(E({}, r.pathLabels), d({}, t, n))
            }
            a && r.defaultInstallationPath !== o && (r.defaultInstallationPath = o)
        },
        INSTALLATION_LOCATION_FETCH_METADATA: function(e) {
            var t = e.metadataPayload;
            for (var n in t) h(n, t[n])
        },
        DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: O
    })
}