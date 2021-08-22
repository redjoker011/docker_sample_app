const mysql = require("./mysql")
// @ponicode
describe("mysql.init", () => {
    test("0", async () => {
        await mysql.init()
    })
})

// @ponicode
describe("mysql.getItems", () => {
    test("0", async () => {
        await mysql.getItems()
    })
})

// @ponicode
describe("mysql.getItem", () => {
    test("0", async () => {
        await mysql.getItem("fake_project")
    })

    test("1", async () => {
        await mysql.getItem("projectId-1969970175")
    })

    test("2", async () => {
        await mysql.getItem(12)
    })

    test("3", async () => {
        await mysql.getItem("bc23a9d531064583ace8f67dad60f6bb")
    })

    test("4", async () => {
        await mysql.getItem(2)
    })

    test("5", async () => {
        await mysql.getItem(undefined)
    })
})

// @ponicode
describe("mysql.storeItem", () => {
    test("0", async () => {
        await mysql.storeItem({ id: "projects/", name: "dummy_name/", completed: "Developer" })
    })

    test("1", async () => {
        await mysql.storeItem({ id: "fake_project_id", name: "$dummy_name", completed: "Producer" })
    })

    test("2", async () => {
        await mysql.storeItem({ id: "projectId-1969970175", name: "DUMMYNAME", completed: "Manager" })
    })

    test("3", async () => {
        await mysql.storeItem({ id: "projectId-1969970175", name: "$dummy_name", completed: "Architect" })
    })

    test("4", async () => {
        await mysql.storeItem({ id: "proj_", name: "dummy_name/", completed: "Producer" })
    })

    test("5", async () => {
        await mysql.storeItem(undefined)
    })
})

// @ponicode
describe("mysql.updateItem", () => {
    test("0", async () => {
        await mysql.updateItem("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", { name: "dummyName123", completed: "Developer" })
    })

    test("1", async () => {
        await mysql.updateItem("a85a8e6b-348b-4011-a1ec-1e78e9620782", { name: "dummy_name", completed: "Developer" })
    })

    test("2", async () => {
        await mysql.updateItem("7289708e-b17a-477c-8a77-9ab575c4b4d8", { name: "DUMMYNAME", completed: "Producer" })
    })

    test("3", async () => {
        await mysql.updateItem("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", { name: "/dummy_name", completed: "Producer" })
    })

    test("4", async () => {
        await mysql.updateItem("7289708e-b17a-477c-8a77-9ab575c4b4d8", { name: "/dummy_name", completed: "Producer" })
    })

    test("5", async () => {
        await mysql.updateItem(undefined, undefined)
    })
})

// @ponicode
describe("mysql.removeItem", () => {
    test("0", async () => {
        await mysql.removeItem("projectId-1969970175")
    })

    test("1", async () => {
        await mysql.removeItem("P5")
    })

    test("2", async () => {
        await mysql.removeItem("YOUR_PROJECT_ID")
    })

    test("3", async () => {
        await mysql.removeItem(2)
    })

    test("4", async () => {
        await mysql.removeItem(12)
    })

    test("5", async () => {
        await mysql.removeItem(undefined)
    })
})
