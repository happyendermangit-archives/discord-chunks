function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getVoiceAnalyticsMetadataAdditional: function() {
            return o
        }
    });
    var r = n("654370");

    function o() {
        var e = r.default.getCurrentGameForAnalytics();
        return {
            game_name: null != e ? e.name : null,
            game_id: null != e ? e.id : null
        }
    }
}