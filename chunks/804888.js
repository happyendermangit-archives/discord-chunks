function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SILENT_RE: function() {
            return a
        },
        canSuppressNotifications: function() {
            return i
        },
        default: function() {
            return u
        }
    });
    var l = n("729912");
    let r = "@silent",
        a = new RegExp("^".concat(r, "(\\s|$)"));

    function i() {
        let e = l.SilentMessagesExperiment.getCurrentConfig({
            location: "456bd9_1"
        }, {
            autoTrackExposure: !1
        });
        return e.allowSending
    }

    function u(e) {
        return i() && null != e.match(a) ? [!0, e.substring(r.length).trim()] : [!1, e]
    }
}