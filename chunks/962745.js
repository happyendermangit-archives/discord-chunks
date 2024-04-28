function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("209185"),
        o = n("706454"),
        l = n("229588"),
        u = n("586576"),
        d = n("689938"),
        _ = n("997042");

    function c(e) {
        let {
            locale: t,
            children: n
        } = e, [r, a] = (0, s.useStateFromStoresArray)([l.default], () => [l.default.isLoading(), l.default.getError()]);
        return null != a ? (0, i.jsx)(u.default, {
            title: d.default.Messages.I18N_LOCALE_LOADING_ERROR.format({
                locale: t
            }),
            note: (0, i.jsx)("span", {
                children: a.message
            })
        }) : r ? __OVERLAY__ ? null : (0, i.jsx)("div", {
            className: _.loading
        }) : n
    }
    class E extends r.Component {
        render() {
            let {
                locale: e,
                children: t
            } = this.props;
            return (0, i.jsx)(c, {
                locale: e,
                children: t
            })
        }
        constructor(e) {
            super(e), a.updateLocaleLoadingStatus(e.locale, !0)
        }
    }
    t.default = s.default.connectStores([o.default], () => ({
        locale: o.default.locale
    }))(E)
}