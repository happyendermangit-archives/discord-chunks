function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SILENT_RE: function() {
            return r
        },
        canSuppressNotifications: function() {
            return a
        },
        default: function() {
            return o
        }
    });
    var i = n("729912");
    let s = "@silent",
        r = new RegExp("^".concat(s, "(\\s|$)"));

    function a() {
        let e = i.SilentMessagesExperiment.getCurrentConfig({
            location: "456bd9_1"
        }, {
            autoTrackExposure: !1
        });
        return e.allowSending
    }

    function o(e) {
        return null == e ? [!1, ""] : a() && null != e.match(r) ? [!0, e.substring(s.length).trim()] : [!1, e]
    }
}