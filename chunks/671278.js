function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QRCodeOverlaySizes: function() {
            return a
        },
        QRCodeWithOverlay: function() {
            return E
        },
        default: function() {
            return f
        }
    });
    var s, a, l = n("37983"),
        r = n("884691"),
        i = n("82697"),
        o = n("679001");
    (s = a || (a = {})).SIZE_40 = "SIZE_40", s.SIZE_60 = "SIZE_60";
    let u = Object.freeze({
            SIZE_40: "size-40",
            SIZE_60: "size-60"
        }),
        d = n("527826");
    class c extends r.PureComponent {
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
                children: (0, l.jsx)(i.default, {
                    value: t,
                    level: "M",
                    ...n
                })
            })
        }
    }
    c.defaultProps = {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000"
    };
    class E extends r.PureComponent {
        render() {
            let {
                overlaySize: e
            } = this.props, t = u[null != e ? e : "SIZE_40"];
            return (0, l.jsxs)("div", {
                className: o.qrCodeContainer,
                children: [(0, l.jsx)(c, {
                    ...this.props
                }), (0, l.jsx)("div", {
                    className: o.qrCodeOverlay,
                    children: (0, l.jsx)("img", {
                        className: o[t],
                        src: d,
                        alt: ""
                    })
                })]
            })
        }
    }
    E.defaultProps = {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000"
    };
    var f = c
}