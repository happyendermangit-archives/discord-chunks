function(e, t, a) {
    "use strict";
    var d, n, c, i;

    function o(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }

    function r() {
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

    function f(e) {
        return "host" === e
    }
    a.r(t), a.d(t, {
        default: function() {
            return s
        }
    }), (c = d || (d = {})).CHECKING_FOR_UPDATES = "checking-for-updates", c.INSTALLED_MODULE = "installed-module", c.UPDATE_CHECK_FINISHED = "update-check-finished", c.DOWNLOADING_MODULE = "downloading-module", c.DOWNLOADING_MODULE_PROGRESS = "downloading-module-progress", c.DOWNLOADING_MODULES_FINISHED = "downloading-modules-finished", c.UPDATE_MANUALLY = "update-manually", c.DOWNLOADED_MODULE = "downloaded-module", c.INSTALLING_MODULES_FINISHED = "installing-modules-finished", c.INSTALLING_MODULE = "installing-module", c.INSTALLING_MODULE_PROGRESS = "installing-module-progress", c.NO_PENDING_UPDATES = "no-pending-updates", (i = n || (n = {})).CLOUD_SYNC = "discord_cloudsync", i.DESKTOP_CORE = "discord_desktop_core", i.DISPATCH = "discord_dispatch", i.ERLPACK = "discord_erlpack", i.GAME_UTILS = "discord_game_utils", i.HOOK = "discord_hook", i.KRISP = "discord_krisp", i.MEDIA = "discord_media", i.MODULES = "discord_modules", i.OVERLAY2 = "discord_overlay2", i.RPC = "discord_rpc", i.SPELLCHECK = "discord_spellcheck", i.UPDATER_BOOTSTRAP = "discord_updater_bootstrap", i.UTILS = "discord_utils", i.VIGILANTE = "discord_vigilante", i.VOICE = "discord_voice", i.ZSTD = "discord_zstd";
    class s {
        handleDownloadingModule(e) {
            if (!f(e.name)) {
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
        _updateReportField(e, t, a) {
            let d = this._report[e];
            null != d ? this._report[e] = a(d, t) : this._report[e] = t
        }
        incrementReportField(e, t) {
            this._updateReportField(e, t, (e, t) => e + t)
        }
        setReportFieldMinimum(e, t) {
            this._updateReportField(e, t, Math.min)
        }
        setReportFieldMaximum(e, t) {
            this._updateReportField(e, t, Math.max)
        }
        handleDownloadedModule(e) {
            if (f(e.name)) return;
            let t = this._downloadingModules[e.name];
            if (null == t) {
                console.warn("Downloaded complete without corresponding downloading event for module ", e.name);
                return
            }
            let a = t.foreground ? "foreground" : "background",
                d = "".concat(a, "_download_ms_").concat(e.name),
                n = "".concat(a, "_bytes_").concat(e.name),
                c = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6)),
                i = !1 === e.receivedBytes ? 0 : e.receivedBytes;
            t.foreground ? (this._report.foreground_download_ms_total += c, this._report.foreground_bytes_total += i) : (this._report.background_download_ms_total += c, this._report.background_bytes_total += i), this.incrementReportField(d, c), this.incrementReportField(n, i), delete this._downloadingModules[e.name]
        }
        handleInstallingModule(e) {
            if (!f(e.name)) {
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
        handleInstalledModule(e) {
            if (f(e.name)) return;
            let t = this._installingModules[e.name];
            if (null == t) return;
            let a = t.foreground ? "foreground" : "background",
                d = "".concat(a, "_install_ms_").concat(e.name),
                n = "min_version_".concat(e.name),
                c = "max_version_".concat(e.name),
                i = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6));
            t.foreground ? this._report.foreground_install_ms_total += i : this._report.background_install_ms_total += i, this.incrementReportField(d, i), this.setReportFieldMinimum(n, t.oldVersion), e.succeeded ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++, this.setReportFieldMaximum(c, t.newVersion)) : this._report.num_failed++, delete this._installingModules[e.name]
        }
        trackEvent(e) {
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
        getStats() {
            return this._report
        }
        reset() {
            this._report = r()
        }
        submissionReady() {
            return this._report.num_full_installed + this._report.num_failed + this._report.num_delta_installed + this._report.foreground_bytes_total + this._report.background_bytes_total !== 0 && !(Object.keys(this._installingModules).length > 0) && !(Object.keys(this._downloadingModules).length > 0) && !0
        }
        constructor() {
            o(this, "_installingModules", {}), o(this, "_downloadingModules", {}), o(this, "_report", void 0), this._report = r()
        }
    }
}