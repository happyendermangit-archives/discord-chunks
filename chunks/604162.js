function(e, t, n) {
    "use strict";
    n("854508"), e.exports = function(e, t, r, a) {
        var i = this;
        i.sequenceLevels[e] = 0;

        function o(t) {
            var o;
            i.fireCallback(r, t, e), "keyup" !== a && (o = n("791607"), i.ignoreNextKeyup = o(t)), setTimeout(function() {
                i.resetSequences()
            }, 10)
        }
        for (var s = 0; s < t.length; ++s) {
            var c = s + 1 === t.length ? o : function(t) {
                return function() {
                    i.nextExpectedAction = t, ++i.sequenceLevels[e], i.resetSequenceTimer()
                }
            }(a || i.getKeyInfo(t[s + 1]).action);
            i.bindSingle(t[s], c, a, e, s)
        }
    }
}