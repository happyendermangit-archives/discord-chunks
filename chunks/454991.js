function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OverlayStoredSettings: function() {
            return l
        }
    });
    var i, r, a = n("433517"),
        s = n("987650");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(i = r || (r = {})).Version1 = "OverlayStore", i.Version2 = "overlayEnabled", i.Version3 = "OverlayStore3";
    class l {
        static get enabled() {
            return l.load().enabled
        }
        static get legacyEnabled() {
            return l.load().legacyEnabled
        }
        static update(e) {
            let t = l.load();
            "boolean" == typeof e.enabled && (t.enabled = e.enabled), "boolean" == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), t.save()
        }
        save() {
            let e = {
                enabled: this.enabled,
                legacyEnabled: this.legacyEnabled
            };
            a.Storage.set("OverlayStore3", e)
        }
        static load() {
            return null == l._loaded && (l._loaded = l.loadInternal()), l._loaded
        }
        static loadInternal() {
            let e = a.Storage.get("OverlayStore");
            if (null != e) {
                let t = new l("boolean" == typeof e.enabled ? e.enabled : s.OVERLAY_SUPPORTED, !1);
                return t.save(), a.Storage.remove("OverlayStore"), t
            }
            let t = a.Storage.get("overlayEnabled");
            if (null != t) {
                let e = new l("boolean" == typeof t ? t : s.OVERLAY_SUPPORTED, !1);
                return e.save(), a.Storage.remove("overlayEnabled"), e
            }
            let n = a.Storage.get("OverlayStore3");
            if (null != n) {
                var i, r;
                return new l(null !== (i = n.enabled) && void 0 !== i ? i : s.OVERLAY_SUPPORTED, null !== (r = n.legacyEnabled) && void 0 !== r && r)
            }
            let o = new l(s.OVERLAY_SUPPORTED, !1);
            return o.save(), o
        }
        constructor(e, t) {
            o(this, "enabled", void 0), o(this, "legacyEnabled", void 0), this.enabled = e, this.legacyEnabled = t
        }
    }
    o(l, "_loaded", null)
}