function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("47120");
    var i = n("147913"),
        r = n("579806"),
        a = n("818083"),
        s = n("998502");
    let o = [0, 0];

    function l(e) {
        let t = e.toString(16);
        for (; t.length < 4;) t = "0" + t;
        return t
    }

    function u(e) {
        return [4098, e]
    }
    let d = [function(e, t, n, i) {
        let r = [],
            s = n.map(e => e.map(l).join(":")).join(", ");
        for (let e = 0; e < i.length; e++) {
            let t = {};
            t[i[e]] = "1", r.push({
                id: e + 1,
                label: i[e],
                config: t
            })
        }
        return {
            gpus: n,
            experiment: (0, a.createExperiment)({
                kind: "user",
                id: e,
                label: "GPU Workarounds: ".concat(t, " (").concat(s, ")"),
                defaultConfig: {},
                treatments: r
            })
        }
    }("2024-03_amd_vdec_tests_1", "AMD video decode tests 1", [u(5592), u(5597), u(5686), u(5688), u(5708), u(5761), u(26607), u(26591), u(29471), u(29504), u(29631), u(29679), u(29663), u(29695), u(29759), u(29772), u(29822), u(29824)], ["disable_media_foundation_clear_playback", "disable_d3d11_video_decoder"])];

    function _(e) {
        for (let t of e)
            if (t[0] === o[0] && t[1] === o[1]) return !0;
        return !1
    }
    let c = !1;

    function E() {
        let e = {};
        for (let t of d)
            if (_(t.gpus)) {
                let n = t.experiment.getCurrentConfig({
                    location: "updateFlags"
                });
                e = {
                    ...e,
                    ...n
                }
            } s.default.setChromiumSwitches(e)
    }
    class I extends i.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: async () => {
                    try {
                        var e, t, n, i;
                        if (c || (null === (t = window.DiscordNative) || void 0 === t ? void 0 : null === (e = t.gpuSettings) || void 0 === e ? void 0 : e.setChromiumSwitches) == null) return;
                        let a = await r.default.processUtils.getSystemInfo();
                        for (let e of null !== (i = null === (n = a.electronGPUInfo) || void 0 === n ? void 0 : n.gpuDevice) && void 0 !== i ? i : []) !0 === e.active && (o = [e.vendorId, e.deviceId]);
                        for (let e of (c = !0, d)) _(e.gpus) && e.experiment.subscribe({
                            location: "GPU experiment subscription"
                        }, E);
                        E()
                    } catch (e) {}
                }
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new I
}