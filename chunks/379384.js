function(t, e, n) {
    "use strict";
    let r;
    n.r(e), n.d(e, {
        default: function() {
            return o
        }
    }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
    let i = new Uint8Array(16);

    function o() {
        if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(i)
    }
}