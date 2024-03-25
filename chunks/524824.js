function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LoginHandoffSource: function() {
            return a
        },
        getLoginHandoffSourceFromRedirectTo: function() {
            return o
        }
    });
    var s, a, r = n("361572"),
        l = n("49111"),
        i = n("724210");

    function o(e) {
        let t = decodeURIComponent(e),
            n = (0, r.tryParseChannelPath)(t);
        return null != n && n.channelId === i.StaticChannelRoute.ROLE_SUBSCRIPTIONS ? "role_subscription" : t === l.Routes.SETTINGS(l.UserSettingsSections.SUBSCRIPTIONS, "role-subscriptions") ? "role_subscription_setting" : void 0
    }(s = a || (a = {})).ROLE_SUBSCRIPTION = "role_subscription", s.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"
}