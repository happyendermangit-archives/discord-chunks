function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("70102");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("897027");
    let l = e => new Promise((t, n) => {
        null == e && n(Error("No image src passed"));
        let i = new Image;
        i.src = e, i.onload = () => t(i), i.onerror = e => n(e)
    });
    class u extends s.PureComponent {
        componentDidUpdate(e) {
            e.src !== this.props.src && this.setState({
                loaded: !1
            }, () => this.initialize())
        }
        initialize() {
            l(this.props.src).then(() => {
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
                width: s,
                height: r,
                onLoad: l,
                style: u,
                imageClassName: d
            } = this.props, {
                loaded: c
            } = this.state;
            return (0, i.jsx)("div", {
                className: e,
                style: {
                    ...u,
                    width: s,
                    height: r
                },
                children: (0, i.jsx)("img", {
                    className: a(o.image, d, {
                        [o.loaded]: c
                    }),
                    width: s,
                    height: r,
                    src: t,
                    alt: n,
                    onLoad: l
                })
            })
        }
        constructor(e) {
            super(e), this.unmounting = !1, this.state = {
                loaded: !1
            }, this.initialize()
        }
    }
    u.defaultProps = {
        width: 0,
        height: 0,
        alt: ""
    };
    var d = u
}