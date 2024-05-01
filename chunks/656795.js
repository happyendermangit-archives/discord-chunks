function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("650886");

    function a(e) {
        let {
            disabled: t,
            deviceId: n,
            width: a,
            height: s
        } = e;
        return t ? (0, i.jsx)("div", {
            className: "media-engine-video",
            style: {
                width: a,
                height: s
            }
        }) : (0, i.jsx)(r.default, {
            streamId: n,
            style: {
                width: a,
                height: s
            }
        })
    }
    a.defaultProps = {
        disabled: !1,
        width: 320,
        height: 180
    }
}