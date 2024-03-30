function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("314656"),
        o = n("61046"),
        i = n("941504"),
        a = n("671231"),
        u = n("647248"),
        s = n("912855"),
        l = n("320236"),
        c = n("502058"),
        f = n("794951"),
        d = n("655142"),
        _ = n("166453");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = function() {
        var e;
        return E(e = {}, r.DefaultVideoBackground.OPTION_1, {
            id: r.DefaultVideoBackground.OPTION_1,
            source: s,
            name: i.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_1
        }), E(e, r.DefaultVideoBackground.OPTION_2, {
            id: r.DefaultVideoBackground.OPTION_2,
            source: c,
            name: i.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_2
        }), E(e, r.DefaultVideoBackground.OPTION_3, {
            id: r.DefaultVideoBackground.OPTION_3,
            source: f,
            name: i.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_3
        }), E(e, r.DefaultVideoBackground.OPTION_4, {
            id: r.DefaultVideoBackground.OPTION_4,
            source: d,
            name: i.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_4
        }), E(e, r.DefaultVideoBackground.OPTION_7, {
            id: r.DefaultVideoBackground.OPTION_7,
            source: a,
            name: i.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_7,
            isVideo: !0,
            hotspotLocation: o.HotspotLocations.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW
        }), E(e, r.DefaultVideoBackground.OPTION_8, {
            id: r.DefaultVideoBackground.OPTION_8,
            source: u,
            name: i.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_8,
            isVideo: !0,
            hotspotLocation: o.HotspotLocations.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW
        }), E(e, r.DefaultVideoBackground.OPTION_9, {
            id: r.DefaultVideoBackground.OPTION_9,
            source: l,
            name: i.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_9,
            isVideo: !0,
            hotspotLocation: o.HotspotLocations.ANIMATED_VIDEO_BG_HACKER_DEN_NEW
        }), E(e, r.DefaultVideoBackground.OPTION_10, {
            id: r.DefaultVideoBackground.OPTION_10,
            source: _,
            name: i.default.Messages.VIDEO_BACKGROUND_DEFAULT_BACKGROUND_NAME_10,
            isVideo: !0,
            hotspotLocation: o.HotspotLocations.ANIMATED_VIDEO_BG_WUMPICE_NEW
        }), e
    }
}