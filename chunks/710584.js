function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("595432");

    function r(e) {
        let {
            disabled: t,
            deviceId: n,
            width: r,
            height: a
        } = e;
        return t ? (0, i.jsx)("div", {
            className: "media-engine-video",
            style: {
                width: r,
                height: a
            }
        }) : (0, i.jsx)(s.default, {
            streamId: n,
            style: {
                width: r,
                height: a
            }
        })
    }
    r.defaultProps = {
        disabled: !1,
        width: 320,
        height: 180
    }
}