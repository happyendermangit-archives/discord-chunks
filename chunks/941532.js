function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getApplicationDetailsText: function() {
            return r
        }
    });
    var i = n("689938");

    function r(e) {
        if (null != e.privacy_policy_url && null != e.terms_of_service_url) return i.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_LINKS.format({
            application: e.name,
            privacyPolicyURL: e.privacy_policy_url,
            termsOfServiceURL: e.terms_of_service_url
        });
        if (null != e.privacy_policy_url) return i.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_PRIVACY_POLICY_LINK.format({
            application: e.name,
            privacyPolicyURL: e.privacy_policy_url
        });
        if (null != e.terms_of_service_url) return i.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY_WITH_TERMS_OF_SERVICE_LINK.format({
            application: e.name,
            termsOfServiceURL: e.terms_of_service_url
        });
        return i.default.Messages.OAUTH2_DETAILS_PRIVACY_POLICY.format({
            application: e.name
        })
    }
}