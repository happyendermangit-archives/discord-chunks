function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        s = n("570140"),
        a = n("374023"),
        o = n("188785");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = new Set,
        d = {};
    class _ extends(i = r.default.PersistedStore) {
        initialize(e) {
            null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (d = e.hotspotOverrides))
        }
        hasHotspot(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = !t && d[e];
            return !(o.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !u.has(e))
        }
        hasHiddenHotspot(e) {
            return u.has(e)
        }
        getHotspotOverride(e) {
            return d[e]
        }
        getState() {
            return {
                hiddenHotspots: u,
                hotspotOverrides: d
            }
        }
    }
    l(_, "displayName", "HotspotStore"), l(_, "persistKey", "hotspots"), l(_, "migrations", [e => ({
        hiddenHotspots: null != e ? e : [],
        hotspotOverrides: {}
    })]), t.default = new _(s.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                hiddenHotspots: t
            } = e;
            u = new Set(t)
        },
        HOTSPOT_HIDE: function(e) {
            let {
                location: t
            } = e;
            if (u.has(t)) return !1;
            u.add(t)
        },
        HOTSPOT_OVERRIDE_SET: function(e) {
            let {
                location: t,
                enabled: n
            } = e;
            d[t] = n
        },
        HOTSPOT_OVERRIDE_CLEAR: function(e) {
            let {
                location: t
            } = e;
            if (null == d[t]) return !1;
            delete d[t]
        }
    })
}