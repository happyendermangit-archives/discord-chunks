function(e, t, n) {
    "use strict";
    var i, r, s, a;

    function o(e, t) {
        return {
            id: e.id,
            topic: e.topic,
            summShort: e.summ_short,
            people: Array.from(new Set(e.people)),
            startId: e.start_id,
            endId: e.end_id,
            count: e.count,
            channelId: t,
            source: e.source,
            type: e.type
        }
    }
    n.r(t), n.d(t, {
        createSummaryFromServer: function() {
            return o
        }
    }), n("47120"), (s = i || (i = {}))[s.SOURCE_0 = 0] = "SOURCE_0", s[s.SOURCE_1 = 1] = "SOURCE_1", (a = r || (r = {}))[a.UNSET = 0] = "UNSET", a[a.SOURCE_1 = 1] = "SOURCE_1", a[a.SOURCE_2 = 2] = "SOURCE_2"
}