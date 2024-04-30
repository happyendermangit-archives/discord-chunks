function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AllChannelAccessOptions: function() {
            return r
        },
        useEditStateStore: function() {
            return a
        }
    });
    var i, r, s = n("652874");
    (i = r || (r = {}))[i.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", i[i.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS";
    let a = (0, s.default)(e => ({
        listings: {},
        setListing: (t, n) => e(e => ({
            listings: {
                ...e.listings,
                [t]: n(e.listings[t])
            }
        })),
        editStateIdsForGroup: {},
        setEditStateIdsForGroup: (t, n) => e(e => ({
            editStateIdsForGroup: {
                ...e.editStateIdsForGroup,
                [t]: n(e.editStateIdsForGroup[t])
            }
        }))
    }))
}