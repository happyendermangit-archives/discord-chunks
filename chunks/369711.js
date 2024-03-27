function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        initRenderingContextWebGL: function() {
            return a
        }
    }), n("951953"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
    let r = new(n("259443")).Logger("RenderingContextWebGL");
    class s {
        static create(e) {
            if (null == e) return null;
            let t = this.createShader(e, e.VERTEX_SHADER, "\nattribute vec4 position;\nattribute vec2 texcoord;\nuniform mat4 transform;\nvarying vec2 out_texcoord;\n\nvoid main() {\n   gl_Position = transform * position;\n   out_texcoord = texcoord;\n}\n"),
                n = this.createShader(e, e.FRAGMENT_SHADER, "\nprecision mediump float;\n\nvarying vec2 out_texcoord;\nuniform sampler2D texture;\n\nvoid main() {\n   gl_FragColor = texture2D(texture, out_texcoord);\n}\n");
            if (null == t || null == n) return null;
            let i = this.createProgram(e, t, n);
            if (null == i) return null;
            let r = e.getAttribLocation(i, "position"),
                a = e.getAttribLocation(i, "texcoord");
            if (-1 === r || -1 === a) return null;
            let o = e.getUniformLocation(i, "transform"),
                l = e.getUniformLocation(i, "texture");
            if (null == o || null == l) return null;
            let u = e.createBuffer();
            if (null == u) return null;
            e.bindBuffer(e.ARRAY_BUFFER, u), e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), e.STATIC_DRAW);
            let d = e.createTexture();
            return null == d ? null : new s({
                gl: e,
                program: i,
                positionLoc: r,
                texcoordLoc: a,
                transformLoc: o,
                textureLoc: l,
                vertexBuffer: u,
                texture: d
            })
        }
        static createShader(e, t, n) {
            let i = e.createShader(t);
            if (null == i) return null;
            if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
                r.warn("Failed to compile shader!");
                let t = e.getShaderInfoLog(i);
                return null != t && r.log(t), e.deleteShader(i), null
            }
            return i
        }
        static createProgram(e, t, n) {
            if (null == t || null == n) return null;
            let i = e.createProgram();
            if (null == i) return null;
            if (e.attachShader(i, t), e.attachShader(i, n), e.linkProgram(i), !e.getProgramParameter(i, e.LINK_STATUS)) {
                r.warn("Failed to link program!");
                let t = e.getProgramInfoLog(i);
                return null != t && r.log(t), e.deleteProgram(i), null
            }
            return i
        }
        render(e) {
            if (null == e) return;
            let t = e.width,
                n = e.height,
                i = this.gl;
            i.bindTexture(i.TEXTURE_2D, this.texture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, n, 0, i.RGBA, i.UNSIGNED_BYTE, e.data), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.viewport(0, 0, t, n), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT), i.useProgram(this.program), i.bindBuffer(i.ARRAY_BUFFER, this.vertexBuffer), i.enableVertexAttribArray(this.positionLoc), i.vertexAttribPointer(this.positionLoc, 2, i.FLOAT, !1, 0, 0), i.enableVertexAttribArray(this.texcoordLoc), i.vertexAttribPointer(this.texcoordLoc, 2, i.FLOAT, !1, 0, 0), i.uniformMatrix4fv(this.transformLoc, !1, this.transform), i.uniform1i(this.textureLoc, 0), i.drawArrays(i.TRIANGLES, 0, 6)
        }
        constructor({
            gl: e,
            program: t,
            positionLoc: n,
            texcoordLoc: r,
            transformLoc: s,
            textureLoc: a,
            vertexBuffer: o,
            texture: l
        }) {
            i(this, "transform", new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1])), i(this, "gl", void 0), i(this, "program", void 0), i(this, "positionLoc", void 0), i(this, "texcoordLoc", void 0), i(this, "transformLoc", void 0), i(this, "textureLoc", void 0), i(this, "vertexBuffer", void 0), i(this, "texture", void 0), this.gl = e, this.program = t, this.positionLoc = n, this.texcoordLoc = r, this.transformLoc = s, this.textureLoc = a, this.vertexBuffer = o, this.texture = l
        }
    }

    function a(e) {
        let t = e.getContext("webgl2");
        return null == t ? null : s.create(t)
    }
}