function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007");
    var i = {
        makeMemoizer: function(e) {
            let t = new Map;
            return n => {
                let i = t.get(n);
                return void 0 === i && (i = e(n), t.set(n, i)), i
            }
        }
    }
}