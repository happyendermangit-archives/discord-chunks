function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        insert: function() {
            return r
        }
    });

    function r(e, t, n) {
        var r = function(e, t, n) {
            for (var r = 0, o = e.length; r < o;) {
                var i = r + o >>> 1;
                0 > n(e[i], t) ? r = i + 1 : o = i
            }
            return r
        }(e, t, n);
        e.splice(r, 0, t)
    }
}