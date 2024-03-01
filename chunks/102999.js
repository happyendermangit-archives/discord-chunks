function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return O
        }
    }), E("222007");
    var t = E("37983"),
        o = E("884691"),
        n = E("446674"),
        r = E("318696"),
        i = E("915639"),
        a = E("787910"),
        I = E("90404"),
        s = E("782340"),
        T = E("386161");

    function S(e) {
        let {
            locale: _,
            children: E
        } = e, [o, r] = (0, n.useStateFromStoresArray)([a.default], () => [a.default.isLoading(), a.default.getError()]);
        return null != r ? (0, t.jsx)(I.default, {
            title: s.default.Messages.I18N_LOCALE_LOADING_ERROR.format({
                locale: _
            }),
            note: (0, t.jsx)("span", {
                children: r.message
            })
        }) : o ? __OVERLAY__ ? null : (0, t.jsx)("div", {
            className: T.loading
        }) : E
    }
    class N extends o.Component {
        render() {
            let {
                locale: e,
                children: _
            } = this.props;
            return (0, t.jsx)(S, {
                locale: e,
                children: _
            })
        }
        constructor(e) {
            super(e), r.updateLocaleLoadingStatus(e.locale, !0)
        }
    }
    var O = n.default.connectStores([i.default], () => ({
        locale: i.default.locale
    }))(N)
}