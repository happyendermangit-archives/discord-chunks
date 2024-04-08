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
    var s, a, i = n("754688"),
        r = n("981631"),
        l = n("176505");

    function o(e) {
        let t = decodeURIComponent(e),
            n = (0, i.tryParseChannelPath)(t);
        return null != n && n.channelId === l.StaticChannelRoute.ROLE_SUBSCRIPTIONS ? "role_subscription" : t === r.Routes.SETTINGS(r.UserSettingsSections.SUBSCRIPTIONS, "role-subscriptions") ? "role_subscription_setting" : void 0
    }(s = a || (a = {})).ROLE_SUBSCRIPTION = "role_subscription", s.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"
}