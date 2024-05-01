function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i, r = n("735250"),
        a = n("470079"),
        s = n("153832"),
        o = n("626135"),
        l = n("251625"),
        u = n("981631");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class _ extends(i = a.Component) {
        renderProvider(e) {
            var t, n;
            let {
                section: i,
                page: a,
                object: s,
                objectType: l,
                children: u
            } = this.props, d = this.mergeLocation(e.location, this.getLocation(a, i, s, l)), _ = this.getContext(d, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
            return (0, r.jsx)(o.AnalyticsContext.Provider, {
                value: _,
                children: u
            })
        }
        render() {
            let {
                context: e
            } = this.props;
            return null != e ? this.renderProvider(e) : (0, r.jsx)(o.AnalyticsContext.Consumer, {
                children: e => this.renderProvider(e)
            })
        }
        constructor(e) {
            super(e), d(this, "_loadId", null), d(this, "_loadDate", this.props.root ? Date.now() : null), d(this, "getLocation", (0, l.cachedFunction)((e, t, n, i) => {
                let r = {};
                return null != e && (r.page = e), null != t && (r.section = t), null != n && (r.object = n), null != i && (r.objectType = i), r
            })), d(this, "mergeLocation", (0, l.cachedFunction)((e, t) => ({
                ...e,
                ...t
            }))), d(this, "getContext", (0, l.cachedFunction)((e, t, n) => ({
                location: e,
                loadDate: t,
                loadId: n
            }))), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, s.v4)())
        }
    }
    d(_, "Pages", u.AnalyticsPages), d(_, "Sections", u.AnalyticsSections), d(_, "Objects", u.AnalyticsObjects), d(_, "ObjectTypes", u.AnalyticsObjectTypes), d(_, "defaultProps", {
        root: !1
    })
}