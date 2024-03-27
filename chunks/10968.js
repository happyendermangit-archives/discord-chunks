function(e) {
    "use strict";
    e.exports = function(e) {
        var t = {};

        function n(n) {
            var r = e.get(n);
            return void 0 === r ? [] : t[r] || []
        }
        return {
            get: n,
            add: function(n, r) {
                var i = e.get(n);
                !t[i] && (t[i] = []), t[i].push(r)
            },
            removeListener: function(e, t) {
                for (var r = n(e), i = 0, a = r.length; i < a; ++i)
                    if (r[i] === t) {
                        r.splice(i, 1);
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