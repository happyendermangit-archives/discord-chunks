function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setPromoEmailConsentState: function() {
            return r
        },
        setPromoEmailConsentChecked: function() {
            return a
        },
        usePromoEmailConsentStore: function() {
            return o
        }
    });
    var i = n("308503");
    let s = (0, i.default)(() => ({
            required: !1,
            checked: !1,
            preChecked: !1
        })),
        r = e => {
            s.setState(e)
        },
        a = e => {
            s.setState({
                checked: e
            })
        },
        o = s
}