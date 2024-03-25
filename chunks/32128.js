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
        static get legacyEnabled() {
            return o.load().legacyEnabled
        }
        static update(e) {
            let t = o.load();
            "boolean" == typeof e.enabled && (t.enabled = e.enabled), "boolean" == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), t.save()
        }
        save() {
            let e = {
                enabled: this.enabled,
                legacyEnabled: this.legacyEnabled
            };
            r.Storage.set("OverlayStore3", e)
        }
        static load() {
            return null == o._loaded && (o._loaded = o.loadInternal()), o._loaded
        }
        static loadInternal() {
            let e = r.Storage.get("OverlayStore");
            if (null != e) {
                let t = "boolean" == typeof e.enabled ? e.enabled : a.OVERLAY_SUPPORTED,
                    n = new o(t, !1);
                return n.save(), r.Storage.remove("OverlayStore"), n
            }
            let t = r.Storage.get("overlayEnabled");
            if (null != t) {
                let e = "boolean" == typeof t ? t : a.OVERLAY_SUPPORTED,
                    n = new o(e, !1);
                return n.save(), r.Storage.remove("overlayEnabled"), n
            }
            let n = r.Storage.get("OverlayStore3");
            if (null != n) {
                var i, s;
                return new o(null !== (i = n.enabled) && void 0 !== i ? i : a.OVERLAY_SUPPORTED, null !== (s = n.legacyEnabled) && void 0 !== s && s)
            }
            let l = new o(a.OVERLAY_SUPPORTED, !1);
            return l.save(), l
        }
        constructor(e, t) {
            this.enabled = e, this.legacyEnabled = t
        }
    }
    o._loaded = null
}