const index = require("./index")

// @ponicode
describe("init", () => {
    let inst

    beforeEach(() => {
        inst = new index.default("Port", false)
    })

    test("0", () => {
        let callFunction = () => {
            inst.init()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("instance", () => {
    let inst

    beforeEach(() => {
        inst = new index.default("Extensions", true)
    })

    test("0", () => {
        let callFunction = () => {
            inst.instance()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("lazyEnter", () => {
    let inst

    beforeEach(() => {
        inst = new index.default("Expressway", false)
    })

    test("0", () => {
        let callFunction = () => {
            inst.lazyEnter(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.lazyEnter(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.lazyEnter(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("lazyExit", () => {
    let inst

    beforeEach(() => {
        inst = new index.default("Port", true)
    })

    test("0", () => {
        let callFunction = () => {
            inst.lazyExit()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("elHandle", () => {
    let inst

    beforeEach(() => {
        inst = new index.default("Port", true)
    })

    test("0", () => {
        let callFunction = () => {
            inst.elHandle({ dataset: { src: "http://placeimg.com/640/480" }, classList: { add: () => false, remove: () => "Maurice Purdy" }, removeAttribute: () => "Gail Hoppe", setAttribute: () => false, addEventListener: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.elHandle({ dataset: { src: "http://placeimg.com/640/480" }, classList: { add: () => false, remove: () => "Ronald Keeling" }, removeAttribute: () => "Maurice Purdy", setAttribute: () => true, addEventListener: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.elHandle({ dataset: { src: "http://placeimg.com/640/480" }, classList: { add: () => true, remove: () => "Gail Hoppe" }, removeAttribute: () => "Ronald Keeling", setAttribute: () => true, addEventListener: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.elHandle({ dataset: { src: "http://placeimg.com/640/480" }, classList: { add: () => false, remove: () => "Maurice Purdy" }, removeAttribute: () => "Gail Hoppe", setAttribute: () => false, addEventListener: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.elHandle({ dataset: { src: "http://placeimg.com/640/480" }, classList: { add: () => true, remove: () => "Maurice Purdy" }, removeAttribute: () => "Gail Hoppe", setAttribute: () => true, addEventListener: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.elHandle(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loadAll", () => {
    let inst

    beforeEach(() => {
        inst = new index.default("Expressway", false)
    })

    test("0", () => {
        let callFunction = () => {
            inst.loadAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loadNativeAll", () => {
    let inst

    beforeEach(() => {
        inst = new index.default("Harbors", false)
    })

    test("0", () => {
        let callFunction = () => {
            inst.loadNativeAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("add", () => {
    let inst

    beforeEach(() => {
        inst = new index.default("Port", true)
    })

    test("0", () => {
        let callFunction = () => {
            inst.add({ setAttribute: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.add({ setAttribute: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.add(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("remove", () => {
    let inst

    beforeEach(() => {
        inst = new index.default("Port", true)
    })

    test("0", () => {
        let callFunction = () => {
            inst.remove({ setAttribute: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.remove({ setAttribute: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.remove(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
