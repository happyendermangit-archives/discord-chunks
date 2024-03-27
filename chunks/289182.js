function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUpdatedOptions: function() {
            return s
        }
    });
    var i = n("625306"),
        r = n("570140");

    function s(e) {
        return {
            ...e,
            extra: {
                ...null == e ? void 0 : e.extra,
                ...{
                    ...null != r.default._currentDispatchActionType ? {
                        currentAction: r.default._currentDispatchActionType
                    } : {},
                    lastFewActions: (0, i.serialize)()
                }
            }
        }
    }
}