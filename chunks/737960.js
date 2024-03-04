function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return i
        }
    });
    var s = r("37983"),
        n = r("884691"),
        l = r("308723");

    function i(e) {
        return n.forwardRef(function(t, r) {
            let i = n.useRef();
            return n.useImperativeHandle(r, () => ({
                triggerResize: () => {
                    var e;
                    null === (e = i.current) || void 0 === e || e.onResize()
                }
            })), (0, s.jsx)(l.default, {
                ref: i,
                children: r => {
                    let {
                        width: n,
                        height: l
                    } = r;
                    return (0, s.jsx)(e, {
                        ...t,
                        width: n,
                        height: l
                    })
                }
            })
        })
    }
}