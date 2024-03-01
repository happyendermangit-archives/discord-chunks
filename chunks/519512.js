function(t, e, s) {
    "use strict";
    var r = s("366400"),
        i = s("888757");
    t.exports = function() {
        var t = i();
        return r(String.prototype, {
            trim: t
        }, {
            trim: function() {
                return String.prototype.trim !== t
            }
        }), t
    }
}