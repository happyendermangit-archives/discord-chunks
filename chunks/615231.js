function(e, t, n) {
    "use strict";

    function s(e) {
        let t = "==".slice(0, (4 - e.length % 4) % 4),
            n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
            s = new ArrayBuffer(n.length),
            a = new Uint8Array(s);
        for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
        return s
    }

    function a(e) {
        let t = new Uint8Array(e),
            n = "";
        for (let e of t) n += String.fromCharCode(e);
        return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
    }
    n.r(t), n.d(t, {
        get: function() {
            return m
        },
        parseRequestOptionsFromJSON: function() {
            return _
        }
    });
    var i = "copy",
        r = "convert";

    function l(e, t, n) {
        if (t === i) return n;
        if (t === r) return e(n);
        if (t instanceof Array) return n.map(n => l(e, t[0], n));
        if (t instanceof Object) {
            let s = {};
            for (let [a, i] of Object.entries(t)) {
                if (i.derive) {
                    let e = i.derive(n);
                    void 0 !== e && (n[a] = e)
                }
                if (!(a in n)) {
                    if (i.required) throw Error(`Missing key: ${a}`);
                    continue
                }
                if (null == n[a]) {
                    s[a] = null;
                    continue
                }
                s[a] = l(e, i.schema, n[a])
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
            type: u(i),
            id: u(r),
            transports: d(i)
        },
        f = {
            appid: d(i),
            appidExclude: d(i),
            credProps: d(i)
        },
        h = {
            appid: d(i),
            appidExclude: d(i),
            credProps: d(i)
        };
    u({
        rp: u(i),
        user: u({
            id: u(r),
            name: u(i),
            displayName: u(i)
        }),
        challenge: u(r),
        pubKeyCredParams: u(i),
        timeout: d(i),
        excludeCredentials: d([c]),
        authenticatorSelection: d(i),
        attestation: d(i),
        extensions: d(f)
    }), d(i), u(i), u(i), u(r), d(i), u({
        clientDataJSON: u(r),
        attestationObject: u(r),
        transports: o(i, e => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
        })
    }), o(h, e => e.getClientExtensionResults());
    var E = {
            mediation: d(i),
            publicKey: u({
                challenge: u(r),
                timeout: d(i),
                rpId: d(i),
                allowCredentials: d([c]),
                userVerification: d(i),
                extensions: d(f)
            }),
            signal: d(i)
        },
        g = {
            type: u(i),
            id: u(i),
            rawId: u(r),
            authenticatorAttachment: d(i),
            response: u({
                clientDataJSON: u(r),
                authenticatorData: u(r),
                signature: u(r),
                userHandle: u(r)
            }),
            clientExtensionResults: o(h, e => e.getClientExtensionResults())
        };

    function _(e) {
        return l(s, E, e)
    }
    async function m(e) {
        let t = await navigator.credentials.get(e);
        return t.toJSON = () => l(a, g, t), t
    }
}