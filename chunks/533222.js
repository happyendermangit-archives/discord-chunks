function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("95410"),
        o = n("913144"),
        l = n("353927");
    let u = "CertifiedDeviceStore",
        d = {},
        c = {},
        f = 0;

    function _(e, t, n) {
        let i = c[e];
        return null != i ? n(i) : t
    }

    function E(e, t) {
        let n = d[e];
        null != n && n.forEach(e => delete c[e.id]), d[e] = t, t.forEach(e => c[e.id] = e)
    }
    class h extends r.default.Store {
        initialize() {
            let e = a.default.get(u);
            null != e && s.forEach(e, (e, t) => {
                e.forEach(e => {
                    "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1)
                }), E(t, e)
            })
        }
        isCertified(e) {
            return null != c[e]
        }
        getCertifiedDevice(e) {
            return c[e]
        }
        getCertifiedDeviceName(e, t) {
            let n = this.getCertifiedDevice(e);
            return null != n ? "".concat(n.vendor.name, " ").concat(n.model.name) : t
        }
        getCertifiedDeviceByType(e) {
            return s.find(c, t => t.type === e)
        }
        isHardwareMute(e) {
            return _(e, !1, e => e.type === l.DeviceTypes.AUDIO_INPUT && e.hardwareMute)
        }
        hasEchoCancellation(e) {
            return _(e, !1, e => e.type === l.DeviceTypes.AUDIO_INPUT && e.echoCancellation)
        }
        hasNoiseSuppression(e) {
            return _(e, !1, e => e.type === l.DeviceTypes.AUDIO_INPUT && e.noiseSuppression)
        }
        hasAutomaticGainControl(e) {
            return _(e, !1, e => e.type === l.DeviceTypes.AUDIO_INPUT && e.automaticGainControl)
        }
        getVendor(e) {
            return _(e, null, e => e.vendor)
        }
        getModel(e) {
            return _(e, null, e => e.model)
        }
        getRevision() {
            return f
        }
    }
    h.displayName = "CertifiedDeviceStore";
    var g = new h(o.default, {
        CERTIFIED_DEVICES_SET: function(e) {
            let {
                applicationId: t,
                devices: n
            } = e;
            E(t, n), a.default.set(u, d), f++
        }
    })
}