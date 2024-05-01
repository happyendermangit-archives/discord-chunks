function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("971619");

    function a(e) {
        return r.forwardRef(function(t, n) {
            let a = r.useRef();
            return r.useImperativeHandle(n, () => ({
                triggerResize: () => {
                    var e;
                    null === (e = a.current) || void 0 === e || e.onResize()
                }
            })), (0, i.jsx)(s.default, {
                ref: a,
                children: n => {
                    let {
                        width: r,
                        height: s
                    } = n;
                    return (0, i.jsx)(e, {
                        ...t,
                        width: r,
                        height: s
                    })
                }
            })
        })
    }
}