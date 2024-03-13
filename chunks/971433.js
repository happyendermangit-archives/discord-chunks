function(t, r, e) {
    var n = e("897506"),
        o = e("346173"),
        i = Object.prototype,
        a = i.hasOwnProperty,
        u = i.propertyIsEnumerable,
        s = n(function() {
            return arguments
        }()) ? n : function(t) {
            return o(t) && a.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = s
}