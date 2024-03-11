function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QRCodeOverlaySizes: function() {
            return a
        },
        QRCodeWithOverlay: function() {
            return f
        },
        default: function() {
            return E
        }
    });
    var s, a, r = n("37983"),
        l = n("884691"),
        i = n("82697"),
        o = n("679001");
    (s = a || (a = {})).SIZE_40 = "SIZE_40", s.SIZE_60 = "SIZE_60";
    let u = Object.freeze({
            SIZE_40: "size-40",
            SIZE_60: "size-60"
        }),
        d = n("527826");
    class c extends l.PureComponent {
        render() {
            let {
                className: e,
                text: t,
                ...n
            } = this.props;
            return (0, r.jsx)("div", {
                style: {
                    padding: 8,
                    borderRadius: 4,
                    width: n.size,
                    height: n.size,
                    backgroundColor: n.bgColor
                },
                className: e,
                children: (0, r.jsx)(i.default, {
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
    class f extends l.PureComponent {
        render() {
            let {
                overlaySize: e
            } = this.props, t = u[null != e ? e : "SIZE_40"];
            return (0, r.jsxs)("div", {
                className: o.qrCodeContainer,
                children: [(0, r.jsx)(c, {
                    ...this.props
                }), (0, r.jsx)("div", {
                    className: o.qrCodeOverlay,
                    children: (0, r.jsx)("img", {
                        className: o[t],
                        src: d,
                        alt: ""
                    })
                })]
            })
        }
    }
    f.defaultProps = {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000"
    };
    var E = c
}