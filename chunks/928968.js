function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createNativeDragSource: function() {
            return a
        },
        matchNativeItemType: function() {
            return o
        }
    });
    var r = n("515652"),
        i = n("926028");

    function a(e, t) {
        var n = new i.NativeDragSource(r.nativeTypesConfig[e]);
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