function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPurchaseToken: function() {
            return l
        },
        getPurchaseTokenHash: function() {
            return u
        }
    }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007");
    var i = n("748820"),
        s = n("95410"),
        r = n("718517");
    let a = "purchase_token",
        o = 60 * r.default.Millis.DAY;

    function l() {
        let e = s.default.get(a);
        if (null != e && e.expires >= Date.now()) return e.purchaseToken;
        let t = (0, i.v4)();
        return s.default.set(a, {
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