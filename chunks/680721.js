function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        useMutedUntilText: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("941504");

    function a(e) {
        return null == e || null == e.end_time ? null : i.default.Messages.MUTED_UNTIL_TIME.format({
            endTime: new Date(e.end_time).toLocaleString(i.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            })
        })
    }

    function u(e) {
        var t = e.muteConfig,
            n = e.className,
            i = a(t);
        return null != i ? r.createElement(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: n
        }, i) : null
    }
}