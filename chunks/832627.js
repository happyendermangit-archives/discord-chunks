function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("862337"),
        s = n("782340");

    function r(e) {
        return "".concat(e).length < 13 ? 1e3 * e : e
    }

    function o(e) {
        return class extends i.PureComponent {
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
                return null != e.end ? this.getDiff(t, r(e.end) / 1e3) : null != e.start ? this.getDiff(r(e.start) / 1e3, t) : {
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
                    hours: i,
                    minutes: a,
                    seconds: r
                } = this.state, o = {
                    hours: this.renderTime(i, !0),
                    minutes: this.renderTime(a),
                    seconds: this.renderTime(r)
                };
                return null != t.end ? (0, l.jsx)(e, {
                    ...n,
                    message: s.default.Messages.USER_ACTIVITY_TIMESTAMP_END.format(o)
                }) : null != t.start ? (0, l.jsx)(e, {
                    ...n,
                    message: s.default.Messages.USER_ACTIVITY_TIMESTAMP_START.format(o)
                }) : null
            }
            constructor(e) {
                super(e), this._interval = new a.Interval, this.state = {
                    ...this.getUpdatedTime()
                }
            }
        }
    }
}