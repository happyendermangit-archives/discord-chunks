function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        addExceptionMechanism: function() {
            return l
        },
        addExceptionTypeValue: function() {
            return c
        },
        arrayify: function() {
            return d
        },
        checkOrSetAlreadyCaught: function() {
            return u
        },
        getEventDescription: function() {
            return o
        },
        uuid4: function() {
            return a
        }
    }), n("781738"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("222007");
    var r = n("654069"),
        i = n("232945");

    function a() {
        let t = i.GLOBAL_OBJ,
            e = t.crypto || t.msCrypto;
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        let n = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
        return "10000000100040008000100000000000".replace(/[018]/g, t => (t ^ (15 & n()) >> t / 4).toString(16))
    }

    function s(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function o(t) {
        let {
            message: e,
            event_id: n
        } = t;
        if (e) return e;
        let r = s(t);
        if (r) return r.type && r.value ? "".concat(r.type, ": ").concat(r.value) : r.type || r.value || n || "<unknown>";
        return n || "<unknown>"
    }

    function c(t, e, n) {
        let r = t.exception = t.exception || {},
            i = r.values = r.values || [],
            a = i[0] = i[0] || {};
        !a.value && (a.value = e || ""), !a.type && (a.type = n || "Error")
    }

    function l(t, e) {
        let n = s(t);
        if (!n) return;
        let r = n.mechanism;
        if (n.mechanism = {
                type: "generic",
                handled: !0,
                ...r,
                ...e
            }, e && "data" in e) {
            let t = {
                ...r && r.data,
                ...e.data
            };
            n.mechanism.data = t
        }
    }

    function u(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            (0, r.addNonEnumerableProperty)(t, "__sentry_captured__", !0)
        } catch (t) {}
        return !1
    }

    function d(t) {
        return Array.isArray(t) ? t : [t]
    }
}