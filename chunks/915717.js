function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reduce: function() {
            return u
        }
    }), n("424973");
    var r = n("234160"),
        i = n("714413"),
        o = n("125692");

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach(function(t) {
                (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var c = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null
    };

    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.payload;
        switch (t.type) {
            case r.BEGIN_DRAG:
                return a(a({}, e), {}, {
                    itemType: n.itemType,
                    item: n.item,
                    sourceId: n.sourceId,
                    isSourcePublic: n.isSourcePublic,
                    dropResult: null,
                    didDrop: !1
                });
            case r.PUBLISH_DRAG_SOURCE:
                return a(a({}, e), {}, {
                    isSourcePublic: !0
                });
            case r.HOVER:
                return a(a({}, e), {}, {
                    targetIds: n.targetIds
                });
            case i.REMOVE_TARGET:
                if (-1 === e.targetIds.indexOf(n.targetId)) return e;
                return a(a({}, e), {}, {
                    targetIds: (0, o.without)(e.targetIds, n.targetId)
                });
            case r.DROP:
                return a(a({}, e), {}, {
                    dropResult: n.dropResult,
                    didDrop: !0,
                    targetIds: []
                });
            case r.END_DRAG:
                return a(a({}, e), {}, {
                    itemType: null,
                    item: null,
                    sourceId: null,
                    dropResult: null,
                    didDrop: !1,
                    isSourcePublic: null,
                    targetIds: []
                });
            default:
                return e
        }
    }
}