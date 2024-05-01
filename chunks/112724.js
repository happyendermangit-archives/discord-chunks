function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("971619");

    function s(e) {
        return r.forwardRef(function(t, n) {
            let s = r.useRef();
            return r.useImperativeHandle(n, () => ({
                triggerResize: () => {
                    var e;
                    null === (e = s.current) || void 0 === e || e.onResize()
                }
            })), (0, i.jsx)(a.default, {
                ref: s,
                children: n => {
                    let {
                        width: r,
                        height: a
                    } = n;
                    return (0, i.jsx)(e, {
                        ...t,
                        width: r,
                        height: a
                    })
                }
            })
        })
    }
}