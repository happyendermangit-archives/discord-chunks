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
            return h
        }
    });
    var s, a, i = n("37983"),
        r = n("884691"),
        l = n("82697"),
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
            return (0, i.jsx)("div", {
                style: {
                    padding: 8,
                    borderRadius: 4,
                    width: n.size,
                    height: n.size,
                    backgroundColor: n.bgColor
                },
                className: e,
                children: (0, i.jsx)(l.default, {
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
    class f extends r.PureComponent {
        render() {
            let {
                overlaySize: e
            } = this.props, t = u[null != e ? e : "SIZE_40"];
            return (0, i.jsxs)("div", {
                className: o.qrCodeContainer,
                children: [(0, i.jsx)(c, {
                    ...this.props
                }), (0, i.jsx)("div", {
                    className: o.qrCodeOverlay,
                    children: (0, i.jsx)("img", {
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
    var h = c
}