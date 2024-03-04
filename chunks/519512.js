function(e, t, n) {
    "use strict";
    var r = n("366400"),
        i = n("888757");
    e.exports = function() {
        var e = i();
        return r(String.prototype, {
            trim: e
        }, {
            trim: function() {
                return String.prototype.trim !== e
            }
        }), e
    }
}