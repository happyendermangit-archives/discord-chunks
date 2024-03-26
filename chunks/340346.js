function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        initRenderingContextWebGL: function() {
            return a
        }
    }), n("370692"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var i = n("811022");
    let s = new i.Logger("RenderingContextWebGL");
    class r {
        static create(e) {
            if (null == e) return null;
            let t = this.createShader(e, e.VERTEX_SHADER, "\nattribute vec4 position;\nattribute vec2 texcoord;\nuniform mat4 transform;\nvarying vec2 out_texcoord;\n\nvoid main() {\n   gl_Position = transform * position;\n   out_texcoord = texcoord;\n}\n"),
                n = this.createShader(e, e.FRAGMENT_SHADER, "\nprecision mediump float;\n\nvarying vec2 out_texcoord;\nuniform sampler2D texture;\n\nvoid main() {\n   gl_FragColor = texture2D(texture, out_texcoord);\n}\n");
            if (null == t || null == n) return null;
            let i = this.createProgram(e, t, n);
            if (null == i) return null;
            let s = e.getAttribLocation(i, "position"),
                a = e.getAttribLocation(i, "texcoord");
            if (-1 === s || -1 === a) return null;
            let o = e.getUniformLocation(i, "transform"),
                l = e.getUniformLocation(i, "texture");
            if (null == o || null == l) return null;
            let u = e.createBuffer();
            if (null == u) return null;
            e.bindBuffer(e.ARRAY_BUFFER, u), e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), e.STATIC_DRAW);
            let d = e.createTexture();
            return null == d ? null : new r({
                gl: e,
                program: i,
                positionLoc: s,
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
                s.warn("Failed to compile shader!");
                let t = e.getShaderInfoLog(i);
                return null != t && s.log(t), e.deleteShader(i), null
            }
            return i
        }
        static createProgram(e, t, n) {
            if (null == t || null == n) return null;
            let i = e.createProgram();
            if (null == i) return null;
            if (e.attachShader(i, t), e.attachShader(i, n), e.linkProgram(i), !e.getProgramParameter(i, e.LINK_STATUS)) {
                s.warn("Failed to link program!");
                let t = e.getProgramInfoLog(i);
                return null != t && s.log(t), e.deleteProgram(i), null
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
            texcoordLoc: i,
            transformLoc: s,
            textureLoc: r,
            vertexBuffer: a,
            texture: o
        }) {
            this.transform = new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1]), this.gl = e, this.program = t, this.positionLoc = n, this.texcoordLoc = i, this.transformLoc = s, this.textureLoc = r, this.vertexBuffer = a, this.texture = o
        }
    }

    function a(e) {
        let t = e.getContext("webgl2");
        return null == t ? null : r.create(t)
    }
}