function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("650886");

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