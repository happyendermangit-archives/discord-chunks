function(e, t, n) {
    "use strict";
    n("424973"), e.exports = function(e) {
        var t = {};

        function n(n) {
            var i = e.get(n);
            return void 0 === i ? [] : t[i] || []
        }
        return {
            get: n,
            add: function(n, i) {
                var r = e.get(n);
                !t[r] && (t[r] = []), t[r].push(i)
            },
            removeListener: function(e, t) {
                for (var i = n(e), r = 0, o = i.length; r < o; ++r)
                    if (i[r] === t) {
                        i.splice(r, 1);
                        break
                    }
            },
            removeAllListeners: function(e) {
                var t = n(e);
                t && (t.length = 0)
            }
        }
    }
}