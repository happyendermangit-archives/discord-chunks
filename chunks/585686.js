function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("47120");
    var i = n("470079");

    function r(e) {
        var t;
        let {
            stepConfigs: n,
            breadcrumbs: r
        } = e, [s, a] = i.useState(null === (t = n[0]) || void 0 === t ? void 0 : t.key), o = n.map(e => e.key).filter(e => null != e);
        return {
            steps: o,
            step: s,
            setStep: a,
            breadcrumbsData: n.filter(e => {
                var t;
                return null != e.key && (null == e ? void 0 : null === (t = e.options) || void 0 === t ? void 0 : t.useBreadcrumbLabel) != null
            }).map(e => ({
                id: e.key,
                useBreadcrumbLabel: e.options.useBreadcrumbLabel
            })).sort((e, t) => null != r ? r.indexOf(e.id) - r.indexOf(t.id) : 0)
        }
    }
}