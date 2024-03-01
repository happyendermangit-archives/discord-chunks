function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("595432");

    function s(e) {
        let {
            disabled: t,
            deviceId: n,
            width: s,
            height: a
        } = e;
        return t ? (0, i.jsx)("div", {
            className: "media-engine-video",
            style: {
                width: s,
                height: a
            }
        }) : (0, i.jsx)(r.default, {
            streamId: n,
            style: {
                width: s,
                height: a
            }
        })
    }
    s.defaultProps = {
        disabled: !1,
        width: 320,
        height: 180
    }
}