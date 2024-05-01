function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLastUsedVideoBackgroundOption: function() {
            return a
        }
    }), n("470079"), n("442837");
    var i = n("581883");
    n("594174");
    var r = n("74538"),
        s = n("647177");

    function a(e) {
        var t;
        return function(e, t) {
            let n = (0, s.getVideoBackgroundOptionFromProto)(e, t.id);
            return (0, s.isCustomBackgroundOption)(n) && !r.default.canUseCustomBackgrounds(t) ? null : "number" != typeof n || (0, s.isDefaultBackgroundOption)(n) ? n : null
        }(null === (t = i.default.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, e)
    }
}