function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return i
        }
    }), n("222007");
    var u = n("884691");

    function i(t) {
        var e;
        let {
            stepConfigs: n,
            breadcrumbs: i
        } = t, [r, l] = u.useState(null === (e = n[0]) || void 0 === e ? void 0 : e.key), a = n.map(t => t.key).filter(t => null != t), o = n.filter(t => {
            var e;
            return null != t.key && (null == t ? void 0 : null === (e = t.options) || void 0 === e ? void 0 : e.useBreadcrumbLabel) != null
        }).map(t => ({
            id: t.key,
            useBreadcrumbLabel: t.options.useBreadcrumbLabel
        })).sort((t, e) => null != i ? i.indexOf(t.id) - i.indexOf(e.id) : 0);
        return {
            steps: a,
            step: r,
            setStep: l,
            breadcrumbsData: o
        }
    }
}