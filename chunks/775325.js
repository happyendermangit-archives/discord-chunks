function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return u
        }
    }), n("222007");
    var i = n("884691");

    function u(t) {
        var e;
        let {
            stepConfigs: n,
            breadcrumbs: u
        } = t, [r, l] = i.useState(null === (e = n[0]) || void 0 === e ? void 0 : e.key), a = n.map(t => t.key).filter(t => null != t), o = n.filter(t => {
            var e;
            return null != t.key && (null == t ? void 0 : null === (e = t.options) || void 0 === e ? void 0 : e.useBreadcrumbLabel) != null
        }).map(t => ({
            id: t.key,
            useBreadcrumbLabel: t.options.useBreadcrumbLabel
        })).sort((t, e) => null != u ? u.indexOf(t.id) - u.indexOf(e.id) : 0);
        return {
            steps: a,
            step: r,
            setStep: l,
            breadcrumbsData: o
        }
    }
}