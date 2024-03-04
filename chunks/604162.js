function(e, t, n) {
    "use strict";
    n("854508"), e.exports = function(e, t, r, i) {
        var o = this;
        o.sequenceLevels[e] = 0;

        function s(t) {
            var s;
            o.fireCallback(r, t, e), "keyup" !== i && (s = n("791607"), o.ignoreNextKeyup = s(t)), setTimeout(function() {
                o.resetSequences()
            }, 10)
        }
        for (var a = 0; a < t.length; ++a) {
            var c = a + 1 === t.length ? s : function(t) {
                return function() {
                    o.nextExpectedAction = t, ++o.sequenceLevels[e], o.resetSequenceTimer()
                }
            }(i || o.getKeyInfo(t[a + 1]).action);
            o.bindSingle(t[a], c, i, e, a)
        }
    }
}