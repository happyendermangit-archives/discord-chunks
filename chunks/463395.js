function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("433517"),
        _ = n("570140"),
        c = n("65154");
    let E = "CertifiedDeviceStore",
        I = {},
        T = {},
        f = 0;

    function S(e, t, n) {
        let i = T[e];
        return null != i ? n(i) : t
    }

    function A(e, t) {
        let n = I[e];
        null != n && n.forEach(e => delete T[e.id]), I[e] = t, t.forEach(e => T[e.id] = e)
    }
    class h extends(a = u.default.Store) {
        initialize() {
            let e = d.Storage.get(E);
            null != e && l().forEach(e, (e, t) => {
                e.forEach(e => {
                    "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1)
                }), A(t, e)
            })
        }
        isCertified(e) {
            return null != T[e]
        }
        getCertifiedDevice(e) {
            return T[e]
        }
        getCertifiedDeviceName(e, t) {
            let n = this.getCertifiedDevice(e);
            return null != n ? "".concat(n.vendor.name, " ").concat(n.model.name) : t
        }
        getCertifiedDeviceByType(e) {
            return l().find(T, t => t.type === e)
        }
        isHardwareMute(e) {
            return S(e, !1, e => e.type === c.DeviceTypes.AUDIO_INPUT && e.hardwareMute)
        }
        hasEchoCancellation(e) {
            return S(e, !1, e => e.type === c.DeviceTypes.AUDIO_INPUT && e.echoCancellation)
        }
        hasNoiseSuppression(e) {
            return S(e, !1, e => e.type === c.DeviceTypes.AUDIO_INPUT && e.noiseSuppression)
        }
        hasAutomaticGainControl(e) {
            return S(e, !1, e => e.type === c.DeviceTypes.AUDIO_INPUT && e.automaticGainControl)
        }
        getVendor(e) {
            return S(e, null, e => e.vendor)
        }
        getModel(e) {
            return S(e, null, e => e.model)
        }
        getRevision() {
            return f
        }
    }
    s = "CertifiedDeviceStore", (r = "displayName") in(i = h) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new h(_.default, {
        CERTIFIED_DEVICES_SET: function(e) {
            let {
                applicationId: t,
                devices: n
            } = e;
            A(t, n), d.Storage.set(E, I), f++
        }
    })
}