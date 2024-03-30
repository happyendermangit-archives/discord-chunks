function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SILENT_RE: function() {
            return i
        },
        canSuppressNotifications: function() {
            return a
        },
        default: function() {
            return u
        }
    });
    var r = n("152739"),
        o = "@silent",
        i = new RegExp("^".concat(o, "(\\s|$)"));

    function a() {
        return r.SilentMessagesExperiment.getCurrentConfig({
            location: "456bd9_1"
        }, {
            autoTrackExposure: !1
        }).allowSending
    }

    function u(e) {
        return null == e ? [!1, ""] : a() && null != e.match(i) ? [!0, e.substring(o.length).trim()] : [!1, e]
    }
}