function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c() {
        return {
            num_failed: 0,
            num_delta_installed: 0,
            num_full_installed: 0,
            foreground_bytes_total: 0,
            background_bytes_total: 0,
            foreground_download_ms_total: 0,
            background_download_ms_total: 0,
            foreground_install_ms_total: 0,
            background_install_ms_total: 0
        }
    }

    function o(e) {
        return "host" === e
    }(i = d || (d = {})).CHECKING_FOR_UPDATES = "checking-for-updates", i.INSTALLED_MODULE = "installed-module", i.UPDATE_CHECK_FINISHED = "update-check-finished", i.DOWNLOADING_MODULE = "downloading-module", i.DOWNLOADING_MODULE_PROGRESS = "downloading-module-progress", i.DOWNLOADING_MODULES_FINISHED = "downloading-modules-finished", i.UPDATE_MANUALLY = "update-manually", i.DOWNLOADED_MODULE = "downloaded-module", i.INSTALLING_MODULES_FINISHED = "installing-modules-finished", i.INSTALLING_MODULE = "installing-module", i.INSTALLING_MODULE_PROGRESS = "installing-module-progress", i.NO_PENDING_UPDATES = "no-pending-updates", (f = u || (u = {})).CLOUD_SYNC = "discord_cloudsync", f.DESKTOP_CORE = "discord_desktop_core", f.DISPATCH = "discord_dispatch", f.ERLPACK = "discord_erlpack", f.GAME_UTILS = "discord_game_utils", f.HOOK = "discord_hook", f.KRISP = "discord_krisp", f.MEDIA = "discord_media", f.MODULES = "discord_modules", f.OVERLAY2 = "discord_overlay2", f.RPC = "discord_rpc", f.SPELLCHECK = "discord_spellcheck", f.UPDATER_BOOTSTRAP = "discord_updater_bootstrap", f.UTILS = "discord_utils", f.VIGILANTE = "discord_vigilante", f.VOICE = "discord_voice", f.ZSTD = "discord_zstd";
    var i, f, d, u, l = function() {
        var e, t, n;

        function i() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), r(this, "_installingModules", {}), r(this, "_downloadingModules", {}), r(this, "_report", void 0), this._report = c()
        }
        return e = i, t = [{
            key: "handleDownloadingModule",
            value: function(e) {
                if (!o(e.name)) {
                    if (null != this._downloadingModules[e.name]) {
                        console.warn("Duplicate downloading-module event for module ", e.name);
                        return
                    }
                    this._downloadingModules[e.name] = {
                        startTime: BigInt(e.now),
                        foreground: e.foreground
                    }
                }
            }
        }, {
            key: "_updateReportField",
            value: function(e, t, n) {
                var a = this._report[e];
                null != a ? this._report[e] = n(a, t) : this._report[e] = t
            }
        }, {
            key: "incrementReportField",
            value: function(e, t) {
                this._updateReportField(e, t, function(e, t) {
                    return e + t
                })
            }
        }, {
            key: "setReportFieldMinimum",
            value: function(e, t) {
                this._updateReportField(e, t, Math.min)
            }
        }, {
            key: "setReportFieldMaximum",
            value: function(e, t) {
                this._updateReportField(e, t, Math.max)
            }
        }, {
            key: "handleDownloadedModule",
            value: function(e) {
                if (!o(e.name)) {
                    var t = this._downloadingModules[e.name];
                    if (null == t) {
                        console.warn("Downloaded complete without corresponding downloading event for module ", e.name);
                        return
                    }
                    var n = t.foreground ? "foreground" : "background",
                        a = "".concat(n, "_download_ms_").concat(e.name),
                        r = "".concat(n, "_bytes_").concat(e.name),
                        c = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6)),
                        i = !1 === e.receivedBytes ? 0 : e.receivedBytes;
                    t.foreground ? (this._report.foreground_download_ms_total += c, this._report.foreground_bytes_total += i) : (this._report.background_download_ms_total += c, this._report.background_bytes_total += i), this.incrementReportField(a, c), this.incrementReportField(r, i), delete this._downloadingModules[e.name]
                }
            }
        }, {
            key: "handleInstallingModule",
            value: function(e) {
                if (!o(e.name)) {
                    if (null != this._installingModules[e.name]) {
                        console.warn("Duplicate installing-module event for module ", e.name);
                        return
                    }
                    this._installingModules[e.name] = {
                        startTime: BigInt(e.now),
                        foreground: e.foreground,
                        oldVersion: e.oldVersion,
                        newVersion: e.newVersion
                    }
                }
            }
        }, {
            key: "handleInstalledModule",
            value: function(e) {
                if (!o(e.name)) {
                    var t = this._installingModules[e.name];
                    if (null != t) {
                        var n = t.foreground ? "foreground" : "background",
                            a = "".concat(n, "_install_ms_").concat(e.name),
                            r = "min_version_".concat(e.name),
                            c = "max_version_".concat(e.name),
                            i = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6));
                        t.foreground ? this._report.foreground_install_ms_total += i : this._report.background_install_ms_total += i, this.incrementReportField(a, i), this.setReportFieldMinimum(r, t.oldVersion), e.succeeded ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++, this.setReportFieldMaximum(c, t.newVersion)) : this._report.num_failed++, delete this._installingModules[e.name]
                    }
                }
            }
        }, {
            key: "trackEvent",
            value: function(e) {
                switch (e.type) {
                    case "installing-module":
                        this.handleInstallingModule(e);
                        break;
                    case "installed-module":
                        this.handleInstalledModule(e);
                        break;
                    case "downloading-module":
                        this.handleDownloadingModule(e);
                        break;
                    case "downloaded-module":
                        this.handleDownloadedModule(e)
                }
            }
        }, {
            key: "getStats",
            value: function() {
                return this._report
            }
        }, {
            key: "reset",
            value: function() {
                this._report = c()
            }
        }, {
            key: "submissionReady",
            value: function() {
                return this._report.num_full_installed + this._report.num_failed + this._report.num_delta_installed + this._report.foreground_bytes_total + this._report.background_bytes_total !== 0 && !(Object.keys(this._installingModules).length > 0) && !(Object.keys(this._downloadingModules).length > 0) && !0
            }
        }], a(e.prototype, t), n && a(e, n), i
    }()
}