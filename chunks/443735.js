function(t, e, n) {
    var r = n("475227"),
        i = n("389109"),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        u = r(function() {
            return arguments
        }()) ? r : function(t) {
            return i(t) && o.call(t, "callee") && !s.call(t, "callee")
        };
    t.exports = u
}