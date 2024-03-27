function(e, t, n) {
    var r = n("73184"),
        i = n("533206"),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        u = r(function() {
            return arguments
        }()) ? r : function(e) {
            return i(e) && o.call(e, "callee") && !s.call(e, "callee")
        };
    e.exports = u
}