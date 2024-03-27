function(e, t, n) {
    "use strict";
    let r;
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    let i = new Uint8Array(16);

    function a() {
        if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(i)
    }
}