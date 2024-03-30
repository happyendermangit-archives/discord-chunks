function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.getContext("2d");
        return null == t ? null : {
            render: function(e) {
                t.putImageData(e, 0, 0)
            }
        }
    }
    n.r(t), n.d(t, {
        initRenderingContext2D: function() {
            return r
        }
    })
}