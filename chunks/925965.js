function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        "number" != typeof e.which && (e.which = e.keyCode);
        var t, r = n("619820")(e);
        if (r) {
            if ("keyup" === e.type && this.ignoreNextKeyup === r) {
                this.ignoreNextKeyup = !1;
                return
            }
            t = n("287901"), this.handleKey(r, t(e), e)
        }
    }
}