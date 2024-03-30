function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OverlayStoredSettings: function() {
            return l
        }
    });
    var r, o, i = n("242880"),
        a = n("336734");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = o || (o = {})).Version1 = "OverlayStore", r.Version2 = "overlayEnabled", r.Version3 = "OverlayStore3";
    var l = function() {
        var e, t, n;

        function r(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), s(this, "enabled", void 0), s(this, "legacyEnabled", void 0), this.enabled = e, this.legacyEnabled = t
        }
        return e = r, t = [{
            key: "save",
            value: function() {
                var e = {
                    enabled: this.enabled,
                    legacyEnabled: this.legacyEnabled
                };
                i.Storage.set("OverlayStore3", e)
            }
        }], n = [{
            key: "enabled",
            get: function() {
                return r.load().enabled
            }
        }, {
            key: "legacyEnabled",
            get: function() {
                return r.load().legacyEnabled
            }
        }, {
            key: "update",
            value: function(e) {
                var t = r.load();
                "boolean" == typeof e.enabled && (t.enabled = e.enabled), "boolean" == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), t.save()
            }
        }, {
            key: "load",
            value: function() {
                return null == r._loaded && (r._loaded = r.loadInternal()), r._loaded
            }
        }, {
            key: "loadInternal",
            value: function() {
                var e, t, n = i.Storage.get("OverlayStore");
                if (null != n) {
                    var o = new r("boolean" == typeof n.enabled ? n.enabled : a.OVERLAY_SUPPORTED, !1);
                    return o.save(), i.Storage.remove("OverlayStore"), o
                }
                var u = i.Storage.get("overlayEnabled");
                if (null != u) {
                    var s = new r("boolean" == typeof u ? u : a.OVERLAY_SUPPORTED, !1);
                    return s.save(), i.Storage.remove("overlayEnabled"), s
                }
                var l = i.Storage.get("OverlayStore3");
                if (null != l) return new r(null !== (e = l.enabled) && void 0 !== e ? e : a.OVERLAY_SUPPORTED, null !== (t = l.legacyEnabled) && void 0 !== t && t);
                var c = new r(a.OVERLAY_SUPPORTED, !1);
                return c.save(), c
            }
        }], t && u(e.prototype, t), n && u(e, n), r
    }();
    s(l, "_loaded", null)
}