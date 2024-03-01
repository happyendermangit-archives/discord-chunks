function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reduce: function() {
            return l
        }
    }), n("424973");
    var r = n("234160"),
        a = n("714413"),
        i = n("125692");

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach(function(t) {
                (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
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

    function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.payload;
        switch (t.type) {
            case r.BEGIN_DRAG:
                return s(s({}, e), {}, {
                    itemType: n.itemType,
                    item: n.item,
                    sourceId: n.sourceId,
                    isSourcePublic: n.isSourcePublic,
                    dropResult: null,
                    didDrop: !1
                });
            case r.PUBLISH_DRAG_SOURCE:
                return s(s({}, e), {}, {
                    isSourcePublic: !0
                });
            case r.HOVER:
                return s(s({}, e), {}, {
                    targetIds: n.targetIds
                });
            case a.REMOVE_TARGET:
                if (-1 === e.targetIds.indexOf(n.targetId)) return e;
                return s(s({}, e), {}, {
                    targetIds: (0, i.without)(e.targetIds, n.targetId)
                });
            case r.DROP:
                return s(s({}, e), {}, {
                    dropResult: n.dropResult,
                    didDrop: !0,
                    targetIds: []
                });
            case r.END_DRAG:
                return s(s({}, e), {}, {
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