function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUPPORT_LOCATION: function() {
            return u
        },
        default: function() {
            return f
        }
    });
    var i = n("872717"),
        s = n("15649"),
        r = n("915639"),
        a = n("271938"),
        o = n("773336"),
        l = n("49111");
    let u = "https://".concat(l.SUPPORT_DOMAIN),
        d = "https://".concat(l.SUPPORT_DEV_DOMAIN);

    function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
        return t + e
    }

    function _() {
        return r.default.locale.toLowerCase()
    }
    var f = {
        getArticleURL: e => c("/hc/".concat(_(), "/articles/").concat(e)),
        getDevArticleURL: e => c("/hc/".concat(_(), "/articles/").concat(e), d),
        getCreatorSupportArticleURL: e => c("/hc/".concat(_(), "/articles/").concat(e), "https://creator-support.discord.com"),
        getTwitterURL: () => (0, s.default)(l.LocalizedLinks.TWITTER),
        getCommunityURL: () => c("/hc/".concat(_())),
        getSubmitRequestURL(e) {
            let t = c("/hc/".concat(_(), "/requests/new?platform=").concat(encodeURIComponent((0, o.getPlatformName)())));
            return null != e && (t += "&device_info=".concat(encodeURIComponent(e))), t
        },
        async getSubmitRequestURLAuthenticated(e) {
            let t = a.default.getToken();
            if (null == t) return this.getSubmitRequestURL(e);
            let n = await i.HTTP.get({
                    url: l.Endpoints.SSO_TOKEN,
                    headers: {
                        authorization: t
                    }
                }),
                s = this.getSubmitRequestURL(e);
            return "".concat((0, i.getAPIBaseURL)()).concat(l.Endpoints.SSO, "?service=zendesk&return_to=").concat(s, "&token=").concat(n.body.token)
        },
        getSearchURL(e) {
            let t = encodeURIComponent(e);
            return c("/hc/".concat(_(), "/search?utf8=%E2%9C%93&query=").concat(t, "&commit=Search"))
        },
        getFeaturedArticlesJsonURL: () => c("/api/v2/help_center/en-us/articles.json?label_names=featured")
    }
}