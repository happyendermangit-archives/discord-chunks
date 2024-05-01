function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("626135"),
        r = n("479313"),
        s = n("981631");

    function a(e) {
        let {
            summary: t,
            guildId: n,
            channelId: a,
            rating: o = null,
            problem: l = null,
            feedback: u = "",
            location: d
        } = e;
        (0, r.setSummaryFeedback)(t, o), i.default.track(s.AnalyticEvents.SUMMARIES_REPORT_PROBLEM, {
            reason: l,
            location: d,
            rating: o,
            feedback: u,
            participant_count: t.people.length,
            message_count: t.count,
            start_message_id: t.startId,
            guild_id: n,
            channel_id: a,
            summary_id: t.id,
            summary_source: t.source,
            summary_type: t.type
        })
    }
}