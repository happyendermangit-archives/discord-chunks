function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n("302937");

    function i(e) {
        var t = e.disabled,
            n = e.deviceId,
            i = e.width,
            a = e.height;
        return t ? r.createElement("div", {
            className: "media-engine-video",
            style: {
                width: i,
                height: a
            }
        }) : r.createElement(o.default, {
            streamId: n,
            style: {
                width: i,
                height: a
            }
        })
    }
    i.defaultProps = {
        disabled: !1,
        width: 320,
        height: 180
    }
}