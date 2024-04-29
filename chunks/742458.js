function(e, t, s) {
    "use strict";
    var n, o;
    s.r(t), s.d(t, {
        PhoneOrEmailSelectorForceMode: function() {
            return n
        },
        shouldShowCountryCodeSelector: function() {
            return r
        }
    }), (o = n || (n = {})).PHONE = "phone", o.EMAIL = "email";
    let l = /^[-() \d]+$/,
        a = e => e.startsWith("+");

    function r(e, t) {
        return "phone" === e ? !a(t) : "email" !== e && !(t.length < 3) && l.test(t)
    }
}