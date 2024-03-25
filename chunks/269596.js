function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return c
        }
    }), i("222007");
    var r = i("446674"),
        n = i("913144"),
        u = i("197881"),
        s = i("492397");
    let o = new Set,
        l = {};
    class a extends r.default.PersistedStore {
        initialize(e) {
            null != e && (Array.isArray(e.hiddenHotspots) && (o = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (l = e.hotspotOverrides))
        }
        hasHotspot(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = !t && l[e];
            return !(s.CONFERENCE_MODE_ENABLED || u.ProcessArgs.isDisallowPopupsSet()) && (i || !o.has(e))
        }
        hasHiddenHotspot(e) {
            return o.has(e)
        }
        getHotspotOverride(e) {
            return l[e]
        }
        getState() {
            return {
                hiddenHotspots: o,
                hotspotOverrides: l
            }
        }
    }
    a.displayName = "HotspotStore", a.persistKey = "hotspots", a.migrations = [e => ({
        hiddenHotspots: null != e ? e : [],
        hotspotOverrides: {}
    })];
    var c = new a(n.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                hiddenHotspots: t
            } = e;
            o = new Set(t)
        },
        HOTSPOT_HIDE: function(e) {
            let {
                location: t
            } = e;
            if (o.has(t)) return !1;
            o.add(t)
        },
        HOTSPOT_OVERRIDE_SET: function(e) {
            let {
                location: t,
                enabled: i
            } = e;
            l[t] = i
        },
        HOTSPOT_OVERRIDE_CLEAR: function(e) {
            let {
                location: t
            } = e;
            if (null == l[t]) return !1;
            delete l[t]
        }
    })
}