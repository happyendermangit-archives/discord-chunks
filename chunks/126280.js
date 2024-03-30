function(e, t, n) {
    "use strict";
    n.r(t);
    t.default = {
        makeMemoizer: function(e) {
            var t = new Map;
            return function(n) {
                var r = t.get(n);
                return void 0 === r && (r = e(n), t.set(n, r)), r
            }
        }
    }
}