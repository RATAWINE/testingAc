const supertest = require("supertest")
const assert = require("assert")
const app = require("../index")

describe("Testing", function(){
    it("Testing Get / and should return status code 200", async function(){
        const {status, _body} = await supertest(app).get("/")
        
    })
})
