function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("870331"),
        o = n("630394"),
        i = n("281767");

    function a(e) {
        var t = e.summary,
            n = e.guildId,
            a = e.channelId,
            u = e.rating,
            s = void 0 === u ? null : u,
            l = e.problem,
            c = e.feedback,
            f = e.location;
        (0, o.setSummaryFeedback)(t, s), r.default.track(i.AnalyticEvents.SUMMARIES_REPORT_PROBLEM, {
            reason: void 0 === l ? null : l,
            location: f,
            rating: s,
            feedback: void 0 === c ? "" : c,
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