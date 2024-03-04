function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var i, s, r = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("458960"),
        d = n("77078"),
        c = n("49111"),
        f = n("646405");
    (i = class extends a.Component {
        componentDidMount() {
            this.props.show && this.animate(1)
        }
        componentDidUpdate(e) {
            e.show !== this.props.show && this.animate(this.props.show ? 1 : 0)
        }
        getAnimatedStyle() {
            let {
                anim: e
            } = this, {
                reducedMotion: t
            } = this.context;
            return {
                opacity: e,
                transform: t.enabled ? void 0 : [{
                    translateY: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["-100px", "0px"]
                    })
                }, {
                    translateZ: 0
                }]
            }
        }
        render() {
            return (0, r.jsx)(u.default.a, {
                href: c.Routes.INDEX,
                target: "_blank",
                rel: "noopener",
                className: l(f.logo, this.props.className),
                style: this.getAnimatedStyle()
            })
        }
        constructor(...e) {
            super(...e), this.anim = new u.default.Value(0), this.animate = e => {
                u.default.spring(this.anim, {
                    toValue: e,
                    friction: 10,
                    tension: 100
                }).start()
            }
        }
    }).contextType = d.AccessibilityPreferencesContext, s = i
}