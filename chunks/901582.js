function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
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
        renderProvider(t) {
            var e, i;
            let {
                section: n,
                page: l,
                object: u,
                objectType: r,
                children: s
            } = this.props, o = this.mergeLocation(t.location, this.getLocation(l, n, u, r)), c = this.getContext(o, null !== (e = this._loadDate) && void 0 !== e ? e : t.loadDate, null !== (i = this._loadId) && void 0 !== i ? i : t.loadId);
            return (0, a.jsx)(d.AnalyticsContext.Provider, {
                value: c,
                children: s
            })
        }
        render() {
            let {
                context: t
            } = this.props;
            return null != t ? this.renderProvider(t) : (0, a.jsx)(d.AnalyticsContext.Consumer, {
                children: t => this.renderProvider(t)
            })
        }
        constructor(t) {
            super(t), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, s.cachedFunction)((t, e, i, n) => {
                let l = {};
                return null != t && (l.page = t), null != e && (l.section = e), null != i && (l.object = i), null != n && (l.objectType = n), l
            }), this.mergeLocation = (0, s.cachedFunction)((t, e) => ({
                ...t,
                ...e
            })), this.getContext = (0, s.cachedFunction)((t, e, i) => ({
                location: t,
                loadDate: e,
                loadId: i
            })), null != t.loadId ? this._loadId = t.loadId : t.root && (this._loadId = (0, r.v4)())
        }
    }).Pages = o.AnalyticsPages, n.Sections = o.AnalyticsSections, n.Objects = o.AnalyticsObjects, n.ObjectTypes = o.AnalyticsObjectTypes, n.defaultProps = {
        root: !1
    }, l = n
}