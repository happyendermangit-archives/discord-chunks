function(t, e, o) {
    "use strict";
    o.r(e), o.d(e, {
        setPromoEmailConsentState: function() {
            return r
        },
        setPromoEmailConsentChecked: function() {
            return l
        },
        usePromoEmailConsentStore: function() {
            return i
        }
    });
    var n = o("308503");
    let d = (0, n.default)(() => ({
            required: !1,
            checked: !1,
            preChecked: !1
        })),
        r = t => {
            d.setState(t)
        },
        l = t => {
            d.setState({
                checked: t
            })
        },
        i = d
}