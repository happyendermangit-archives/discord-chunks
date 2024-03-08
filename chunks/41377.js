function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return A
        }
    }), E("424973"), E("222007");
    var t = E("689988"),
        o = E("49671"),
        n = E("862205"),
        r = E("50885");
    let a = [0, 0];

    function i(e) {
        let _ = e.toString(16);
        for (; _.length < 4;) _ = "0" + _;
        return _
    }

    function I(e) {
        return [4098, e]
    }
    let s = [function(e, _, E, t) {
        let o = [],
            r = E.map(e => e.map(i).join(":")).join(", ");
        for (let e = 0; e < t.length; e++) {
            let _ = {};
            _[t[e]] = "1", o.push({
                id: e + 1,
                label: t[e],
                config: _
            })
        }
        let a = (0, n.createExperiment)({
            kind: "user",
            id: e,
            label: "GPU Workarounds: ".concat(_, " (").concat(r, ")"),
            defaultConfig: {},
            treatments: o
        });
        return {
            gpus: E,
            experiment: a
        }
    }("2024-03_amd_vdec_tests_1", "AMD video decode tests 1", [
        [4098, 5686],
        [4098, 5688]
    ], ["disable_media_foundation_clear_playback", "disable_d3d11_video_decoder"])];

    function T(e) {
        for (let _ of e)
            if (_[0] === a[0] && _[1] === a[1]) return !0;
        return !1
    }
    let S = !1;

    function N() {
        let e = {};
        for (let _ of s)
            if (T(_.gpus)) {
                let E = _.experiment.getCurrentConfig({
                    location: "updateFlags"
                });
                e = {
                    ...e,
                    ...E
                }
            } r.default.setChromiumSwitches(e)
    }
    class O extends t.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: async () => {
                    try {
                        var e, _, E, t;
                        if (S || (null === (_ = window.DiscordNative) || void 0 === _ ? void 0 : null === (e = _.gpuSettings) || void 0 === e ? void 0 : e.setChromiumSwitches) == null) return;
                        let n = await o.default.processUtils.getSystemInfo();
                        for (let e of null !== (t = null === (E = n.electronGPUInfo) || void 0 === E ? void 0 : E.gpuDevice) && void 0 !== t ? t : []) !0 === e.active && (a = [e.vendorId, e.deviceId]);
                        for (let e of (S = !0, s)) T(e.gpus) && e.experiment.subscribe({
                            location: "GPU experiment subscription"
                        }, N);
                        N()
                    } catch (e) {}
                }
            }
        }
    }
    var A = new O
}