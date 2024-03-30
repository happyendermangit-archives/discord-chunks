function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("481060"),
        o = n("315472");

    function l(e) {
        let {
            className: t,
            size: n,
            ...r
        } = e;
        return (0, i.jsx)(a.Button, {
            className: s()(o.button, t),
            size: s()(o.buttonSize, n),
            ...r
        })
    }
}