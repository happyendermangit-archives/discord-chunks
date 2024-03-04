function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OverlayStoredSettings: function() {
            return o
        }
    });
    var i, s, r = n("95410"),
        a = n("6791");
    (i = s || (s = {})).Version1 = "OverlayStore", i.Version2 = "overlayEnabled", i.Version3 = "OverlayStore3";
    class o {
        static get enabled() {
            return o.load().enabled
        }
        static get methodOverride() {
            return o.load().methodOverride
        }
        static update(e) {
            let t = o.load();
            "boolean" == typeof e.enabled && (t.enabled = e.enabled), "methodOverride" in e && (t.methodOverride = e.methodOverride), t.save()
        }
        save() {
            let e = {
                enabled: this.enabled,
                methodOverride: this.methodOverride
            };
            r.default.set("OverlayStore3", e)
        }
        static load() {
            return null == o._loaded && (o._loaded = o.loadInternal()), o._loaded
        }
        static loadInternal() {
            let e = void 0,
                t = r.default.get("OverlayStore");
            if (null != t) {
                let n = "boolean" == typeof t.enabled ? t.enabled : a.OVERLAY_SUPPORTED,
                    i = new o(n, e);
                return i.save(), r.default.remove("OverlayStore"), i
            }
            let n = r.default.get("overlayEnabled");
            if (null != n) {
                let t = "boolean" == typeof n ? n : a.OVERLAY_SUPPORTED,
                    i = new o(t, e);
                return i.save(), r.default.remove("overlayEnabled"), i
            }
            let i = r.default.get("OverlayStore3");
            if (null != i) {
                var s, l;
                return new o(null !== (s = i.enabled) && void 0 !== s ? s : a.OVERLAY_SUPPORTED, null !== (l = i.methodOverride) && void 0 !== l ? l : e)
            }
            let u = new o(a.OVERLAY_SUPPORTED, e);
            return u.save(), u
        }
        constructor(e, t) {
            this.enabled = e, this.methodOverride = t
        }
    }
    o._loaded = null
}