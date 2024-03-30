function(e, t, n) {
    "use strict";
    var r, o, i, a;

    function u(e, t) {
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
            return u
        }
    }), (i = r || (r = {}))[i.SOURCE_0 = 0] = "SOURCE_0", i[i.SOURCE_1 = 1] = "SOURCE_1", (a = o || (o = {}))[a.UNSET = 0] = "UNSET", a[a.SOURCE_1 = 1] = "SOURCE_1", a[a.SOURCE_2 = 2] = "SOURCE_2"
}