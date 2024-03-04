function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFavoritesServerExperiment: function() {
            return r
        },
        default: function() {
            return a
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
            kind: "user",
            id: "2021-09_favorites_server",
            label: "Favorites Server",
            defaultConfig: {
                favoritesEnabled: !1,
                canShow: !0,
                isFavoritesPerk: !1,
                hasStaffPrivileges: !1
            },
            treatments: [{
                id: 1,
                label: "Favorites v1 - On",
                config: {
                    favoritesEnabled: !0,
                    canShow: !0,
                    isFavoritesPerk: !1,
                    hasStaffPrivileges: !0
                }
            }, {
                id: 2,
                label: "Favorites v1 - Forced Off",
                config: {
                    favoritesEnabled: !1,
                    canShow: !1,
                    isFavoritesPerk: !1,
                    hasStaffPrivileges: !0
                }
            }, {
                id: 3,
                label: "Favorites v2",
                config: {
                    favoritesEnabled: !0,
                    canShow: !0,
                    isFavoritesPerk: !0,
                    hasStaffPrivileges: !0
                }
            }, {
                id: 4,
                label: "Favorites v2 w/o Staff Privileges",
                config: {
                    favoritesEnabled: !0,
                    canShow: !0,
                    isFavoritesPerk: !0,
                    hasStaffPrivileges: !1
                }
            }]
        }),
        r = e => s.useExperiment({
            location: e
        }, {
            autoTrackExposure: !0
        });
    var a = s
}