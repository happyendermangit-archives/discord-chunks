function(e, t, n) {
    "use strict";

    function s(e) {
        let t = "==".slice(0, (4 - e.length % 4) % 4),
            n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
            s = atob(n),
            a = new ArrayBuffer(s.length),
            r = new Uint8Array(a);
        for (let e = 0; e < s.length; e++) r[e] = s.charCodeAt(e);
        return a
    }

    function a(e) {
        let t = new Uint8Array(e),
            n = "";
        for (let e of t) n += String.fromCharCode(e);
        let s = btoa(n),
            a = s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        return a
    }
    n.r(t), n.d(t, {
        get: function() {
            return m
        },
        parseRequestOptionsFromJSON: function() {
            return g
        }
    }), n("781738"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("222007"), n("70102"), n("274635");
    var r = "copy",
        l = "convert";

    function i(e, t, n) {
        if (t === r) return n;
        if (t === l) return e(n);
        if (t instanceof Array) return n.map(n => i(e, t[0], n));
        if (t instanceof Object) {
            let s = {};
            for (let [a, r] of Object.entries(t)) {
                if (r.derive) {
                    let e = r.derive(n);
                    void 0 !== e && (n[a] = e)
                }
                if (!(a in n)) {
                    if (r.required) throw Error("Missing key: ".concat(a));
                    continue
                }
                if (null == n[a]) {
                    s[a] = null;
                    continue
                }
                s[a] = i(e, r.schema, n[a])
            }
            return s
        }
    }

    function o(e, t) {
        return {
            required: !0,
            schema: e,
            derive: t
        }
    }

    function u(e) {
        return {
            required: !0,
            schema: e
        }
    }

    function d(e) {
        return {
            required: !1,
            schema: e
        }
    }
    var c = {
            type: u(r),
            id: u(l),
            transports: d(r)
        },
        E = {
            appid: d(r),
            appidExclude: d(r),
            credProps: d(r)
        },
        f = {
            appid: d(r),
            appidExclude: d(r),
            credProps: d(r)
        };
    u({
        rp: u(r),
        user: u({
            id: u(l),
            name: u(r),
            displayName: u(r)
        }),
        challenge: u(l),
        pubKeyCredParams: u(r),
        timeout: d(r),
        excludeCredentials: d([c]),
        authenticatorSelection: d(r),
        attestation: d(r),
        extensions: d(E)
    }), d(r), u(r), u(r), u(l), d(r), u({
        clientDataJSON: u(l),
        attestationObject: u(l),
        transports: o(r, e => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
        })
    }), o(f, e => e.getClientExtensionResults());
    var _ = {
            mediation: d(r),
            publicKey: u({
                challenge: u(l),
                timeout: d(r),
                rpId: d(r),
                allowCredentials: d([c]),
                userVerification: d(r),
                extensions: d(E)
            }),
            signal: d(r)
        },
        h = {
            type: u(r),
            id: u(r),
            rawId: u(l),
            authenticatorAttachment: d(r),
            response: u({
                clientDataJSON: u(l),
                authenticatorData: u(l),
                signature: u(l),
                userHandle: u(l)
            }),
            clientExtensionResults: o(f, e => e.getClientExtensionResults())
        };

    function g(e) {
        return i(s, _, e)
    }
    async function m(e) {
        let t = await navigator.credentials.get(e);
        return t.toJSON = () => i(a, h, t), t
    }
}