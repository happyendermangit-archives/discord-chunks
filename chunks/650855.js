function(t, e, s) {
    "use strict";
    t.exports = function(t, e) {
        return !!e && "object" == typeof e && "[[Enumerable]]" in e && "[[Configurable]]" in e && (t.IsAccessorDescriptor(e) || t.IsDataDescriptor(e))
    }
}