function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("784712"),
        a = n("531578"),
        o = n("689938");

    function l(e, t, n) {
        let {
            rating: i,
            problem: a,
            feedback: l
        } = n;
        (0, s.default)({
            problem: a,
            summary: e,
            feedback: l,
            guildId: t.guild_id,
            channelId: t.id,
            location: "Summary divider",
            rating: i
        }), (0, r.showToast)((0, r.createToast)(o.default.Messages.CALL_FEEDBACK_CONFIRMATION, r.ToastType.SUCCESS))
    }

    function u(e) {
        let {
            summary: t,
            channel: s,
            rating: o
        } = e;
        null != t && (o === a.FeedbackRating.BAD ? (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("22377")]).then(n.bind(n, "580584"));
            return n => (0, i.jsx)(e, {
                ...n,
                onSubmit: e => l(t, s, e),
                startRating: o
            })
        }) : l(t, s, {
            rating: o,
            problem: null,
            feedback: "",
            dontShowAgain: !1
        }))
    }
}