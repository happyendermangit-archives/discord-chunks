function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return i
        }
    });
    var r = s("37983"),
        n = s("884691"),
        l = s("308723");

    function i(e) {
        return n.forwardRef(function(t, s) {
            let i = n.useRef();
            return n.useImperativeHandle(s, () => ({
                triggerResize: () => {
                    var e;
                    null === (e = i.current) || void 0 === e || e.onResize()
                }
            })), (0, r.jsx)(l.default, {
                ref: i,
                children: s => {
                    let {
                        width: n,
                        height: l
                    } = s;
                    return (0, r.jsx)(e, {
                        ...t,
                        width: n,
                        height: l
                    })
                }
            })
        })
    }
}