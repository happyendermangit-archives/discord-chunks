function(e, t, n) {
    "use strict";
    var r = n("286233"),
        i = n("673555");
    e.exports = function() {
        var e = i();
        return r(Array.prototype, {
            map: e
        }, {
            map: function() {
                return Array.prototype.map !== e
            }
        }), e
    }
}