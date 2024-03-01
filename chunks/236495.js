function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createNativeDragSource: function() {
            return i
        },
        matchNativeItemType: function() {
            return o
        }
    });
    var r = n("703366"),
        a = n("584561");

    function i(e, t) {
        var n = new a.NativeDragSource(r.nativeTypesConfig[e]);
        return n.loadDataTransfer(t), n
    }

    function o(e) {
        if (!e) return null;
        var t = Array.prototype.slice.call(e.types || []);
        return Object.keys(r.nativeTypesConfig).filter(function(e) {
            return r.nativeTypesConfig[e].matchesTypes.some(function(e) {
                return t.indexOf(e) > -1
            })
        })[0] || null
    }
}