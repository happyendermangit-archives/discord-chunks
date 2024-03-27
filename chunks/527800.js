function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i) {
        var a = this;
        a.sequenceLevels[e] = 0;

        function o(t) {
            var o;
            a.fireCallback(r, t, e), "keyup" !== i && (o = n("619820"), a.ignoreNextKeyup = o(t)), setTimeout(function() {
                a.resetSequences()
            }, 10)
        }
        for (var s = 0; s < t.length; ++s) {
            var u = s + 1 === t.length ? o : function(t) {
                return function() {
                    a.nextExpectedAction = t, ++a.sequenceLevels[e], a.resetSequenceTimer()
                }
            }(i || a.getKeyInfo(t[s + 1]).action);
            a.bindSingle(t[s], u, i, e, s)
        }
    }
}