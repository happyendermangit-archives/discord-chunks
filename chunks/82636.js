function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("748820"),
        s = n("469563"),
        r = n("975411"),
        o = n("75196"),
        u = (0, s.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: s = "currentColor",
                foreground: r,
                ...u
            } = e, d = i.useRef((0, a.v4)());
            return (0, l.jsxs)("svg", {
                ...(0, o.default)(u),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: [(0, l.jsxs)("g", {
                    clipPath: "url(#".concat(d.current, ")"),
                    children: [(0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.92871 13.4149L10.5857 19.0709L18.3639 11.2927C19.7781 9.87859 22.6066 6.48376 21.1923 2.80748C17.5153 1.3932 14.1213 4.22173 12.7074 5.63625L4.92871 13.4149ZM16.064 9.93309C17.1686 9.93309 18.064 9.03766 18.064 7.93309C18.064 6.82852 17.1686 5.93309 16.064 5.93309C14.9594 5.93309 14.064 6.82852 14.064 7.93309C14.064 9.03766 14.9594 9.93309 16.064 9.93309Z",
                        fill: s,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M3.41357 16.7844C2.34946 17.8496 2.00004 22 2.00004 22C2.00004 22 6.15125 21.6521 7.21627 20.5869C7.71243 20.0915 7.96638 19.4494 8 18.8004L5.21285 18.7866L5.19829 16C4.54947 16.0336 3.90973 16.2881 3.41357 16.7844Z",
                        fill: s,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M9.17144 9.17151H3.51459L1.74684 10.9393L6.34302 11.9999L9.17144 9.17151Z",
                        fill: s,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M14.8283 14.8283V20.4852L13.0606 22.2529L11.9999 17.6568L14.8283 14.8283Z",
                        fill: s,
                        className: r
                    })]
                }), (0, l.jsx)("defs", {
                    children: (0, l.jsx)("clipPath", {
                        id: d.current,
                        children: (0, l.jsx)("rect", {
                            width: "24",
                            height: "24",
                            fill: r
                        })
                    })
                })]
            })
        }, r.ActivitiesIcon, void 0, {
            size: 24
        })
}