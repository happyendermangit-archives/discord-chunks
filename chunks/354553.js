function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return i
        }
    }), r("222007");
    var s, n = r("884691");

    function l(e, t, r) {
        return Math.min(Math.max(Math.floor(e / t), 1), r)
    }
    var i = (0, r("737960").default)(((s = class extends n.Component {
        static getDerivedStateFromProps(e, t) {
            let {
                width: r,
                desiredItemWidth: s,
                maxColumns: n
            } = e, i = l(r, s, n);
            return i !== t.columns ? {
                columns: i
            } : null
        }
        render() {
            let {
                width: e,
                height: t,
                children: r
            } = this.props, {
                columns: s
            } = this.state;
            return r(s, e, t)
        }
        constructor(...e) {
            super(...e), this.state = {
                columns: l(this.props.width, this.props.desiredItemWidth, this.props.maxColumns)
            }
        }
    }).defaultProps = {
        desiredItemWidth: 200
    }, s))
}