function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("846519"),
        s = n("689938");

    function o(e) {
        return "".concat(e).length < 13 ? 1e3 * e : e
    }

    function l(e) {
        return class extends r.PureComponent {
            componentDidMount() {
                this._interval.start(1e3, () => this.setState(this.getUpdatedTime()))
            }
            componentWillUnmount() {
                this._interval.stop()
            }
            componentDidUpdate(e) {
                (e.timestamps.end !== this.props.timestamps.end || e.timestamps.start !== this.props.timestamps.start) && this.setState(this.getUpdatedTime())
            }
            getUpdatedTime() {
                let {
                    timestamps: e
                } = this.props, t = Date.now() / 1e3;
                return null != e.end ? this.getDiff(t, o(e.end) / 1e3) : null != e.start ? this.getDiff(o(e.start) / 1e3, t) : {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }
            }
            renderTime(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return t && e <= 0 ? -1 : e < 10 ? "0".concat(e) : e
            }
            getDiff(e, t) {
                let n = Math.max(t - e, 0);
                return {
                    hours: Math.floor(n / 3600) % 24,
                    minutes: Math.floor(n / 60) % 60,
                    seconds: Math.floor(n) % 60
                }
            }
            render() {
                let {
                    timestamps: t,
                    ...n
                } = this.props, {
                    hours: r,
                    minutes: a,
                    seconds: o
                } = this.state, l = {
                    hours: this.renderTime(r, !0),
                    minutes: this.renderTime(a),
                    seconds: this.renderTime(o)
                };
                return null != t.end ? (0, i.jsx)(e, {
                    ...n,
                    message: s.default.Messages.USER_ACTIVITY_TIMESTAMP_END.format(l)
                }) : null != t.start ? (0, i.jsx)(e, {
                    ...n,
                    message: s.default.Messages.USER_ACTIVITY_TIMESTAMP_START.format(l)
                }) : null
            }
            constructor(e) {
                var t, n, i;
                super(e), t = this, i = void 0, (n = "_interval") in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i, this._interval = new a.Interval, this.state = {
                    ...this.getUpdatedTime()
                }
            }
        }
    }
}