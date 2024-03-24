function(e, a, t) {
    "use strict";
    var s, d, n, c, i;

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
    }), (c = s || (s = {})).CHECKING_FOR_UPDATES = "checking-for-updates", c.INSTALLED_MODULE = "installed-module", c.UPDATE_CHECK_FINISHED = "update-check-finished", c.DOWNLOADING_MODULE = "downloading-module", c.DOWNLOADING_MODULE_PROGRESS = "downloading-module-progress", c.DOWNLOADING_MODULES_FINISHED = "downloading-modules-finished", c.UPDATE_MANUALLY = "update-manually", c.DOWNLOADED_MODULE = "downloaded-module", c.INSTALLING_MODULES_FINISHED = "installing-modules-finished", c.INSTALLING_MODULE = "installing-module", c.INSTALLING_MODULE_PROGRESS = "installing-module-progress", c.NO_PENDING_UPDATES = "no-pending-updates", (i = d || (d = {})).CLOUD_SYNC = "discord_cloudsync", i.DESKTOP_CORE = "discord_desktop_core", i.DISPATCH = "discord_dispatch", i.ERLPACK = "discord_erlpack", i.GAME_UTILS = "discord_game_utils", i.HOOK = "discord_hook", i.KRISP = "discord_krisp", i.MEDIA = "discord_media", i.MODULES = "discord_modules", i.OVERLAY2 = "discord_overlay2", i.RPC = "discord_rpc", i.SPELLCHECK = "discord_spellcheck", i.UPDATER_BOOTSTRAP = "discord_updater_bootstrap", i.UTILS = "discord_utils", i.VIGILANTE = "discord_vigilante", i.VOICE = "discord_voice", i.ZSTD = "discord_zstd", n = class {
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
            let s = this._report[e];
            null != s ? this._report[e] = t(s, a) : this._report[e] = a
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
                s = "".concat(t, "_download_ms_").concat(e.name),
                d = "".concat(t, "_bytes_").concat(e.name),
                n = Number((BigInt(e.now) - a.startTime + BigInt(999999)) / BigInt(1e6)),
                c = !1 === e.receivedBytes ? 0 : e.receivedBytes;
            a.foreground ? (this._report.foreground_download_ms_total += n, this._report.foreground_bytes_total += c) : (this._report.background_download_ms_total += n, this._report.background_bytes_total += c), this.incrementReportField(s, n), this.incrementReportField(d, c), delete this._downloadingModules[e.name]
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
                s = "".concat(t, "_install_ms_").concat(e.name),
                d = "min_version_".concat(e.name),
                n = "max_version_".concat(e.name),
                c = Number((BigInt(e.now) - a.startTime + BigInt(999999)) / BigInt(1e6));
            a.foreground ? this._report.foreground_install_ms_total += c : this._report.background_install_ms_total += c, this.incrementReportField(s, c), this.setReportFieldMinimum(d, a.oldVersion), e.succeeded ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++, this.setReportFieldMaximum(n, a.newVersion)) : this._report.num_failed++, delete this._installingModules[e.name]
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