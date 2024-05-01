function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SILENT_RE: function() {
            return s
        },
        canSuppressNotifications: function() {
            return a
        },
        default: function() {
            return o
        }
    });
    var i = n("528151");
    let r = "@silent",
        s = new RegExp("^".concat(r, "(\\s|$)"));

    function a() {
        return i.SilentMessagesExperiment.getCurrentConfig({
            location: "456bd9_1"
        }, {
            autoTrackExposure: !1
        }).allowSending
    }

    function o(e) {
        return null == e ? [!1, ""] : a() && null != e.match(s) ? [!0, e.substring(r.length).trim()] : [!1, e]
    }
}