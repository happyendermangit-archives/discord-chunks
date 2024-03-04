function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getVoiceAnalyticsMetadataAdditional: function() {
            return s
        }
    });
    var i = n("161454");

    function s() {
        let e = i.default.getCurrentGameForAnalytics();
        return {
            game_name: null != e ? e.name : null,
            game_id: null != e ? e.id : null
        }
    }
}