function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("917351"),
        r = n.n(i),
        s = n("446674"),
        a = n("95410"),
        o = n("913144"),
        l = n("353927");
    let u = "CertifiedDeviceStore",
        c = {},
        d = {},
        f = 0;

    function E(e, t, n) {
        let i = d[e];
        return null != i ? n(i) : t
    }

    function p(e, t) {
        let n = c[e];
        null != n && n.forEach(e => delete d[e.id]), c[e] = t, t.forEach(e => d[e.id] = e)
    }
    class h extends s.default.Store {
        initialize() {
            let e = a.default.get(u);
            null != e && r.forEach(e, (e, t) => {
                e.forEach(e => {
                    "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1)
                }), p(t, e)
            })
        }
        isCertified(e) {
            return null != d[e]
        }
        getCertifiedDevice(e) {
            return d[e]
        }
        getCertifiedDeviceName(e, t) {
            let n = this.getCertifiedDevice(e);
            return null != n ? "".concat(n.vendor.name, " ").concat(n.model.name) : t
        }
        getCertifiedDeviceByType(e) {
            return r.find(d, t => t.type === e)
        }
        isHardwareMute(e) {
            return E(e, !1, e => e.type === l.DeviceTypes.AUDIO_INPUT && e.hardwareMute)
        }
        hasEchoCancellation(e) {
            return E(e, !1, e => e.type === l.DeviceTypes.AUDIO_INPUT && e.echoCancellation)
        }
        hasNoiseSuppression(e) {
            return E(e, !1, e => e.type === l.DeviceTypes.AUDIO_INPUT && e.noiseSuppression)
        }
        hasAutomaticGainControl(e) {
            return E(e, !1, e => e.type === l.DeviceTypes.AUDIO_INPUT && e.automaticGainControl)
        }
        getVendor(e) {
            return E(e, null, e => e.vendor)
        }
        getModel(e) {
            return E(e, null, e => e.model)
        }
        getRevision() {
            return f
        }
    }
    h.displayName = "CertifiedDeviceStore";
    var _ = new h(o.default, {
        CERTIFIED_DEVICES_SET: function(e) {
            let {
                applicationId: t,
                devices: n
            } = e;
            p(t, n), a.default.set(u, c), f++
        }
    })
}