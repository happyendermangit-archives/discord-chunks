function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    t.default = {
        makeMemoizer: function(e) {
            let t = new Map;
            return n => {
                let i = t.get(n);
                return void 0 === i && (i = e(n), t.set(n, i)), i
            }
        }
    }
}