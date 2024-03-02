function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return l
        }
    });
    var n, l, a = i("37983"),
        u = i("884691"),
        r = i("748820"),
        d = i("599110"),
        s = i("117362"),
        o = i("49111");
    (n = class extends u.Component {
        renderProvider(e) {
            var t, i;
            let {
                section: n,
                page: l,
                object: u,
                objectType: r,
                children: s
            } = this.props, o = this.mergeLocation(e.location, this.getLocation(l, n, u, r)), c = this.getContext(o, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (i = this._loadId) && void 0 !== i ? i : e.loadId);
            return (0, a.jsx)(d.AnalyticsContext.Provider, {
                value: c,
                children: s
            })
        }
        render() {
            let {
                context: e
            } = this.props;
            return null != e ? this.renderProvider(e) : (0, a.jsx)(d.AnalyticsContext.Consumer, {
                children: e => this.renderProvider(e)
            })
        }
        constructor(e) {
            super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, s.cachedFunction)((e, t, i, n) => {
                let l = {};
                return null != e && (l.page = e), null != t && (l.section = t), null != i && (l.object = i), null != n && (l.objectType = n), l
            }), this.mergeLocation = (0, s.cachedFunction)((e, t) => ({
                ...e,
                ...t
            })), this.getContext = (0, s.cachedFunction)((e, t, i) => ({
                location: e,
                loadDate: t,
                loadId: i
            })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, r.v4)())
        }
    }).Pages = o.AnalyticsPages, n.Sections = o.AnalyticsSections, n.Objects = o.AnalyticsObjects, n.ObjectTypes = o.AnalyticsObjectTypes, n.defaultProps = {
        root: !1
    }, l = n
}