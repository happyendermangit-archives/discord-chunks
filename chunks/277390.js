function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QRCodeOverlaySizes: function() {
            return a
        },
        QRCodeWithOverlay: function() {
            return E
        }
    });
    var s, a, i, r, l = n("735250"),
        o = n("470079"),
        u = n("108773"),
        d = n("880244");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = a || (a = {})).SIZE_40 = "SIZE_40", s.SIZE_60 = "SIZE_60";
    let f = Object.freeze({
            SIZE_40: "size-40",
            SIZE_60: "size-60"
        }),
        h = n("515695");
    class g extends(i = o.PureComponent) {
        render() {
            let {
                className: e,
                text: t,
                ...n
            } = this.props;
            return (0, l.jsx)("div", {
                style: {
                    padding: 8,
                    borderRadius: 4,
                    width: n.size,
                    height: n.size,
                    backgroundColor: n.bgColor
                },
                className: e,
                children: (0, l.jsx)(u.default, {
                    value: t,
                    level: "M",
                    ...n
                })
            })
        }
    }
    c(g, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000"
    });
    class E extends(r = o.PureComponent) {
        render() {
            let {
                overlaySize: e
            } = this.props, t = f[null != e ? e : "SIZE_40"];
            return (0, l.jsxs)("div", {
                className: d.qrCodeContainer,
                children: [(0, l.jsx)(g, {
                    ...this.props
                }), (0, l.jsx)("div", {
                    className: d.qrCodeOverlay,
                    children: (0, l.jsx)("img", {
                        className: d[t],
                        src: h,
                        alt: ""
                    })
                })]
            })
        }
    }
    c(E, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000"
    }), t.default = g
}