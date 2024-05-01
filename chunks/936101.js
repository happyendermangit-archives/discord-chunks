function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPurchaseToken: function() {
            return l
        },
        getPurchaseTokenHash: function() {
            return u
        }
    }), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("642549"), n("47120");
    var i = n("153832"),
        r = n("433517"),
        s = n("70956");
    let a = "purchase_token",
        o = 60 * s.default.Millis.DAY;

    function l() {
        let e = r.Storage.get(a);
        if (null != e && e.expires >= Date.now()) return e.purchaseToken;
        let t = (0, i.v4)();
        return r.Storage.set(a, {
            purchaseToken: t,
            expires: Date.now() + o
        }), t
    }
    async function u() {
        let e = new Uint8Array(l().split("").map(e => e.charCodeAt(0))),
            t = await window.crypto.subtle.digest({
                name: "SHA-256"
            }, e);
        return btoa(String.fromCharCode(...new Uint8Array(t)))
    }
}