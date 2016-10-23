'use strict'

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    expect = chai.expect

chai.use(chaiHttp)

describe('Test API tweets', function(){
  var id, url = 'http://localhost:9000'
  it(': create record', function(done){
    chai.request(url)
        .post('/tweets')
        .send({
          name: 'Hello World'
        })
        .end(function(err, res){
          expect(res).to.have.status(200)
          id = res.body._id;
          done()
        })
  })
  it(': read data', function(done){
    chai.request(url)
        .get('/tweets')
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
  it(': update record', function(done){
    chai.request(url)
        .put(`/tweets/${id}`)
        .send({
          title: 'Hello World, Awesome!'
        })
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
  it(': delete record', function(done){
    chai.request(url)
        .delete(`/tweets/${id}`)
        .end(function(err, res){
          expect(res).to.have.status(200)
          done()
        })
  })
})
