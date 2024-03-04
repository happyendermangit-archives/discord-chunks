function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createNativeDragSource: function() {
            return o
        },
        matchNativeItemType: function() {
            return s
        }
    });
    var r = n("703366"),
        i = n("584561");

    function o(e, t) {
        var n = new i.NativeDragSource(r.nativeTypesConfig[e]);
        return n.loadDataTransfer(t), n
    }

    function s(e) {
        if (!e) return null;
        var t = Array.prototype.slice.call(e.types || []);
        return Object.keys(r.nativeTypesConfig).filter(function(e) {
            return r.nativeTypesConfig[e].matchesTypes.some(function(e) {
                return t.indexOf(e) > -1
            })
        })[0] || null
    }
}