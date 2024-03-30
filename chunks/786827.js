function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLastUsedVideoBackgroundOption: function() {
            return a
        }
    }), n("470079"), n("898511");
    var r = n("851285");
    n("208454");
    var o = n("830721"),
        i = n("422003");

    function a(e) {
        var t, n, a, u;
        return n = null === (t = r.default.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, a = e, u = (0, i.getVideoBackgroundOptionFromProto)(n, a.id), (0, i.isCustomBackgroundOption)(u) && !o.default.canUseCustomBackgrounds(a) ? null : "number" != typeof u || (0, i.isDefaultBackgroundOption)(u) ? u : null
    }
}