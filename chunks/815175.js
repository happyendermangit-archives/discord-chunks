function(e, t, n) {
    "use strict";
    n("854508"), e.exports = function(e) {
        "number" != typeof e.which && (e.which = e.keyCode);
        var t, r = n("791607")(e);
        if (r) {
            if ("keyup" === e.type && this.ignoreNextKeyup === r) {
                this.ignoreNextKeyup = !1;
                return
            }
            t = n("451125"), this.handleKey(r, t(e), e)
        }
    }
}