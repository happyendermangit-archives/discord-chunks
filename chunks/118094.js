function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("77078"),
        a = n("979975"),
        s = n("200521"),
        r = n("782340");

    function o(e, t, n) {
        let {
            rating: l,
            problem: s,
            feedback: o
        } = n;
        (0, a.default)({
            problem: s,
            summary: e,
            feedback: o,
            guildId: t.guild_id,
            channelId: t.id,
            location: "Summary divider",
            rating: l
        }), (0, i.showToast)((0, i.createToast)(r.default.Messages.CALL_FEEDBACK_CONFIRMATION, i.ToastType.SUCCESS))
    }

    function u(e) {
        let {
            summary: t,
            channel: a,
            rating: r
        } = e;
        null != t && (r === s.FeedbackRating.BAD ? (0, i.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("747194").then(n.bind(n, "747194"));
            return n => (0, l.jsx)(e, {
                ...n,
                onSubmit: e => o(t, a, e),
                startRating: r
            })
        }) : o(t, a, {
            rating: r,
            problem: null,
            feedback: "",
            dontShowAgain: !1
        }))
    }
}