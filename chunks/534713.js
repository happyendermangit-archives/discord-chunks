function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return n
        }
    });
    var d = a("69580");

    function n(e) {
        var t, a, n, c;
        let i = null == e ? void 0 : e.get("client_id"),
            o = null == e ? void 0 : null === (t = e.get("scope")) || void 0 === t ? void 0 : t.split(" "),
            r = null == e ? void 0 : e.get("state"),
            f = null == e ? void 0 : e.get("redirect_uri"),
            l = null == e ? void 0 : e.get("response_type"),
            s = null !== (a = null == e ? void 0 : e.get("nonce")) && void 0 !== a ? a : void 0,
            u = null !== (n = null == e ? void 0 : e.get("code_challenge")) && void 0 !== n ? n : void 0,
            b = null !== (c = null == e ? void 0 : e.get("code_challenge_method")) && void 0 !== c ? c : void 0;
        return null == i || null == o || null == r || null == f || null == l || ((0, d.openOAuth2Modal)({
            clientId: i,
            scopes: o,
            redirectUri: f,
            state: r,
            responseType: l,
            nonce: s,
            codeChallenge: u,
            codeChallengeMethod: b
        }), !0)
    }
}