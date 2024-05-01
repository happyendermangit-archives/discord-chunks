function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDecorationSizeForAvatarSize: function() {
            return l
        },
        openAvatarDecorationModal: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("703656");
    n("956664");
    var a = n("419061"),
        o = n("981631");

    function l(e) {
        return "number" != typeof e ? (0, r.getAvatarSize)(e) * a.DECORATION_TO_AVATAR_RATIO : e * a.DECORATION_TO_AVATAR_RATIO
    }
    let u = e => {
        let {
            analyticsLocations: t,
            initialSelectedDecoration: a,
            initialSelectedDecorationId: l,
            isTryItOutFlow: u,
            guild: d,
            onClose: _
        } = e;
        (0, r.openModalLazy)(async () => {
            (0, s.getHistory)().location.pathname === o.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, s.transitionTo)(o.Routes.APP);
            let {
                default: e
            } = await Promise.resolve().then(n.bind(n, "235400"));
            return n => (0, i.jsx)(e, {
                ...n,
                onCloseModal: n.onClose,
                onClose: _,
                analyticsLocations: t,
                initialSelectedDecoration: a,
                initialSelectedDecorationId: l,
                isTryItOutFlow: u,
                guild: d
            })
        }, {})
    }
}