function(e, t, n) {
    "use strict";
    var r = n("366400"),
        i = n("16662");
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