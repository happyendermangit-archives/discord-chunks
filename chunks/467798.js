function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SILENT_RE: function() {
            return a
        },
        canSuppressNotifications: function() {
            return s
        },
        default: function() {
            return o
        }
    });
    var i = n("528151");
    let r = "@silent",
        a = new RegExp("^".concat(r, "(\\s|$)"));

    function s() {
        return i.SilentMessagesExperiment.getCurrentConfig({
            location: "456bd9_1"
        }, {
            autoTrackExposure: !1
        }).allowSending
    }

    function o(e) {
        return null == e ? [!1, ""] : s() && null != e.match(a) ? [!0, e.substring(r.length).trim()] : [!1, e]
    }
}