function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        },
        useMutedUntilText: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("689938");

    function a(e) {
        return null == e || null == e.end_time ? null : s.default.Messages.MUTED_UNTIL_TIME.format({
            endTime: new Date(e.end_time).toLocaleString(s.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            })
        })
    }

    function o(e) {
        let {
            muteConfig: t,
            className: n
        } = e, s = a(t);
        return null != s ? (0, i.jsx)(r.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: n,
            children: s
        }) : null
    }
}