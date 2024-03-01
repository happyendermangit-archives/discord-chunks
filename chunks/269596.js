function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var l = n("446674"),
        i = n("913144"),
        a = n("197881"),
        s = n("492397");
    let r = new Set,
        o = {};
    class u extends l.default.PersistedStore {
        initialize(e) {
            null != e && (Array.isArray(e.hiddenHotspots) && (r = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
        }
        hasHotspot(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = !t && o[e];
            return !(s.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !r.has(e))
        }
        hasHiddenHotspot(e) {
            return r.has(e)
        }
        getHotspotOverride(e) {
            return o[e]
        }
        getState() {
            return {
                hiddenHotspots: r,
                hotspotOverrides: o
            }
        }
    }
    u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
        hiddenHotspots: null != e ? e : [],
        hotspotOverrides: {}
    })];
    var d = new u(i.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                hiddenHotspots: t
            } = e;
            r = new Set(t)
        },
        HOTSPOT_HIDE: function(e) {
            let {
                location: t
            } = e;
            if (r.has(t)) return !1;
            r.add(t)
        },
        HOTSPOT_OVERRIDE_SET: function(e) {
            let {
                location: t,
                enabled: n
            } = e;
            o[t] = n
        },
        HOTSPOT_OVERRIDE_CLEAR: function(e) {
            let {
                location: t
            } = e;
            if (null == o[t]) return !1;
            delete o[t]
        }
    })
}