function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLastUsedVideoBackgroundOption: function() {
            return s
        }
    }), n("470079"), n("442837");
    var i = n("581883");
    n("594174");
    var r = n("74538"),
        a = n("647177");

    function s(e) {
        var t;
        return function(e, t) {
            let n = (0, a.getVideoBackgroundOptionFromProto)(e, t.id);
            return (0, a.isCustomBackgroundOption)(n) && !r.default.canUseCustomBackgrounds(t) ? null : "number" != typeof n || (0, a.isDefaultBackgroundOption)(n) ? n : null
        }(null === (t = i.default.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, e)
    }
}