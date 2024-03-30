function(e, t, n) {
    "use strict";

    function i(e) {
        return e.replace(/[\s-~]+/g, "-").replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase()
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("757143")
}