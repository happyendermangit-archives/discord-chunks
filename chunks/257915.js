function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("480057");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = e => new Promise((t, n) => {
        null == e && n(Error("No image src passed"));
        let i = new Image;
        i.src = e, i.onload = () => t(i), i.onerror = e => n(e)
    });
    class _ extends(i = s.PureComponent) {
        componentDidUpdate(e) {
            e.src !== this.props.src && this.setState({
                loaded: !1
            }, () => this.initialize())
        }
        initialize() {
            d(this.props.src).then(() => {
                !this.unmounting && this.setState({
                    loaded: !0
                })
            })
        }
        componentWillUnmount() {
            this.unmounting = !0
        }
        render() {
            let {
                className: e,
                src: t,
                alt: n,
                width: i,
                height: s,
                onLoad: a,
                style: u,
                imageClassName: d
            } = this.props, {
                loaded: _
            } = this.state;
            return (0, r.jsx)("div", {
                className: e,
                style: {
                    ...u,
                    width: i,
                    height: s
                },
                children: (0, r.jsx)("img", {
                    className: o()(l.image, d, {
                        [l.loaded]: _
                    }),
                    width: i,
                    height: s,
                    src: t,
                    alt: n,
                    onLoad: a
                })
            })
        }
        constructor(e) {
            super(e), u(this, "unmounting", !1), u(this, "state", {
                loaded: !1
            }), this.initialize()
        }
    }
    u(_, "defaultProps", {
        width: 0,
        height: 0,
        alt: ""
    }), t.default = _
}