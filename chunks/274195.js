function(e, t, n) {
    "use strict";
    n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
    var r = n("187798"),
        i = n("478898"),
        o = n("48494"),
        s = n("682086");

    function a(e) {
        return e.call.bind(e)
    }
    var c = "undefined" != typeof BigInt,
        u = "undefined" != typeof Symbol,
        d = a(Object.prototype.toString),
        l = a(Number.prototype.valueOf),
        f = a(String.prototype.valueOf),
        p = a(Boolean.prototype.valueOf);
    if (c) var h = a(BigInt.prototype.valueOf);
    if (u) var v = a(Symbol.prototype.valueOf);

    function g(e, t) {
        if ("object" != typeof e) return !1;
        try {
            return t(e), !0
        } catch (e) {
            return !1
        }
    }
    t.isArgumentsObject = r, t.isGeneratorFunction = i, t.isTypedArray = s;
    t.isPromise = function(e) {
        return "undefined" != typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
    };
    t.isArrayBufferView = function(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : s(e) || E(e)
    };
    t.isUint8Array = function(e) {
        return "Uint8Array" === o(e)
    };
    t.isUint8ClampedArray = function(e) {
        return "Uint8ClampedArray" === o(e)
    };
    t.isUint16Array = function(e) {
        return "Uint16Array" === o(e)
    };
    t.isUint32Array = function(e) {
        return "Uint32Array" === o(e)
    };
    t.isInt8Array = function(e) {
        return "Int8Array" === o(e)
    };
    t.isInt16Array = function(e) {
        return "Int16Array" === o(e)
    };
    t.isInt32Array = function(e) {
        return "Int32Array" === o(e)
    };
    t.isFloat32Array = function(e) {
        return "Float32Array" === o(e)
    };
    t.isFloat64Array = function(e) {
        return "Float64Array" === o(e)
    };
    t.isBigInt64Array = function(e) {
        return "BigInt64Array" === o(e)
    };

    function b(e) {
        return "[object Map]" === d(e)
    }
    t.isBigUint64Array = function(e) {
        return "BigUint64Array" === o(e)
    }, b.working = "undefined" != typeof Map && b(new Map);

    function m(e) {
        return "[object Set]" === d(e)
    }
    t.isMap = function(e) {
        return "undefined" != typeof Map && (b.working ? b(e) : e instanceof Map)
    }, m.working = "undefined" != typeof Set && m(new Set);

    function y(e) {
        return "[object WeakMap]" === d(e)
    }
    t.isSet = function(e) {
        return "undefined" != typeof Set && (m.working ? m(e) : e instanceof Set)
    }, y.working = "undefined" != typeof WeakMap && y(new WeakMap);

    function x(e) {
        return "[object WeakSet]" === d(e)
    }
    t.isWeakMap = function(e) {
        return "undefined" != typeof WeakMap && (y.working ? y(e) : e instanceof WeakMap)
    }, x.working = "undefined" != typeof WeakSet && x(new WeakSet);

    function w(e) {
        return "[object ArrayBuffer]" === d(e)
    }

    function S(e) {
        return "undefined" != typeof ArrayBuffer && (w.working ? w(e) : e instanceof ArrayBuffer)
    }

    function k(e) {
        return "[object DataView]" === d(e)
    }

    function E(e) {
        return "undefined" != typeof DataView && (k.working ? k(e) : e instanceof DataView)
    }
    t.isWeakSet = function(e) {
        return x(e)
    }, w.working = "undefined" != typeof ArrayBuffer && w(new ArrayBuffer), t.isArrayBuffer = S, k.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && k(new DataView(new ArrayBuffer(1), 0, 1)), t.isDataView = E;
    var _ = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

    function M(e) {
        return "[object SharedArrayBuffer]" === d(e)
    }

    function D(e) {
        return void 0 !== _ && (void 0 === M.working && (M.working = M(new _)), M.working ? M(e) : e instanceof _)
    }
    t.isSharedArrayBuffer = D;
    t.isAsyncFunction = function(e) {
        return "[object AsyncFunction]" === d(e)
    };
    t.isMapIterator = function(e) {
        return "[object Map Iterator]" === d(e)
    };
    t.isSetIterator = function(e) {
        return "[object Set Iterator]" === d(e)
    };
    t.isGeneratorObject = function(e) {
        return "[object Generator]" === d(e)
    };

    function C(e) {
        return g(e, l)
    }

    function P(e) {
        return g(e, f)
    }

    function T(e) {
        return g(e, p)
    }

    function A(e) {
        return c && g(e, h)
    }

    function R(e) {
        return u && g(e, v)
    }
    t.isWebAssemblyCompiledModule = function(e) {
        return "[object WebAssembly.Module]" === d(e)
    }, t.isNumberObject = C, t.isStringObject = P, t.isBooleanObject = T, t.isBigIntObject = A, t.isSymbolObject = R;
    t.isBoxedPrimitive = function(e) {
        return C(e) || P(e) || T(e) || A(e) || R(e)
    };
    t.isAnyArrayBuffer = function(e) {
        return "undefined" != typeof Uint8Array && (S(e) || D(e))
    }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function() {
                throw Error(e + " is not supported in userland")
            }
        })
    })
}