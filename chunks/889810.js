function(e, a, t) {
    "use strict";
    var d, s, n, i, c;

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

    function o(e) {
        return "host" === e
    }
    t.r(a), t.d(a, {
        default: function() {
            return n
        }
    }), (i = d || (d = {})).CHECKING_FOR_UPDATES = "checking-for-updates", i.INSTALLED_MODULE = "installed-module", i.UPDATE_CHECK_FINISHED = "update-check-finished", i.DOWNLOADING_MODULE = "downloading-module", i.DOWNLOADING_MODULE_PROGRESS = "downloading-module-progress", i.DOWNLOADING_MODULES_FINISHED = "downloading-modules-finished", i.UPDATE_MANUALLY = "update-manually", i.DOWNLOADED_MODULE = "downloaded-module", i.INSTALLING_MODULES_FINISHED = "installing-modules-finished", i.INSTALLING_MODULE = "installing-module", i.INSTALLING_MODULE_PROGRESS = "installing-module-progress", i.NO_PENDING_UPDATES = "no-pending-updates", (c = s || (s = {})).CLOUD_SYNC = "discord_cloudsync", c.DESKTOP_CORE = "discord_desktop_core", c.DISPATCH = "discord_dispatch", c.ERLPACK = "discord_erlpack", c.GAME_UTILS = "discord_game_utils", c.HOOK = "discord_hook", c.KRISP = "discord_krisp", c.MEDIA = "discord_media", c.MODULES = "discord_modules", c.OVERLAY2 = "discord_overlay2", c.RPC = "discord_rpc", c.SPELLCHECK = "discord_spellcheck", c.UPDATER_BOOTSTRAP = "discord_updater_bootstrap", c.UTILS = "discord_utils", c.VIGILANTE = "discord_vigilante", c.VOICE = "discord_voice", c.ZSTD = "discord_zstd", n = class {
        handleDownloadingModule(e) {
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
        _updateReportField(e, a, t) {
            let d = this._report[e];
            null != d ? this._report[e] = t(d, a) : this._report[e] = a
        }
        incrementReportField(e, a) {
            this._updateReportField(e, a, (e, a) => e + a)
        }
        setReportFieldMinimum(e, a) {
            this._updateReportField(e, a, Math.min)
        }
        setReportFieldMaximum(e, a) {
            this._updateReportField(e, a, Math.max)
        }
        handleDownloadedModule(e) {
            if (o(e.name)) return;
            let a = this._downloadingModules[e.name];
            if (null == a) {
                console.warn("Downloaded complete without corresponding downloading event for module ", e.name);
                return
            }
            let t = a.foreground ? "foreground" : "background",
                d = "".concat(t, "_download_ms_").concat(e.name),
                s = "".concat(t, "_bytes_").concat(e.name),
                n = Number((BigInt(e.now) - a.startTime + BigInt(999999)) / BigInt(1e6)),
                i = !1 === e.receivedBytes ? 0 : e.receivedBytes;
            a.foreground ? (this._report.foreground_download_ms_total += n, this._report.foreground_bytes_total += i) : (this._report.background_download_ms_total += n, this._report.background_bytes_total += i), this.incrementReportField(d, n), this.incrementReportField(s, i), delete this._downloadingModules[e.name]
        }
        handleInstallingModule(e) {
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
        handleInstalledModule(e) {
            if (o(e.name)) return;
            let a = this._installingModules[e.name];
            if (null == a) return;
            let t = a.foreground ? "foreground" : "background",
                d = "".concat(t, "_install_ms_").concat(e.name),
                s = "min_version_".concat(e.name),
                n = "max_version_".concat(e.name),
                i = Number((BigInt(e.now) - a.startTime + BigInt(999999)) / BigInt(1e6));
            a.foreground ? this._report.foreground_install_ms_total += i : this._report.background_install_ms_total += i, this.incrementReportField(d, i), this.setReportFieldMinimum(s, a.oldVersion), e.succeeded ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++, this.setReportFieldMaximum(n, a.newVersion)) : this._report.num_failed++, delete this._installingModules[e.name]
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
            this._installingModules = {}, this._downloadingModules = {}, this._report = r()
        }
    }
}