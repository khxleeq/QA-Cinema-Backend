const { describe, it, beforeEach } = require('mocha');
const chai = require('chai');
const chaitHttp = require('chai-http');
chai.use(chaitHttp);
const { expect } = chai;
const discussion = require('../models/discussionModel');
const server = require('../test-server.js');


describe('CRUD Tests', () => {
    let testDiscussion;

    beforeEach(async () => {
        try {
            await discussion.deleteMany({});
            testDiscussion = await discussion.create({
              topic: "Ahhh s..",
              topicAuthor: "CJ",
              comment: "Here we go again",

            });
            testDiscussion = JSON.parse(JSON.stringify(testDiscussion)); 
        } catch (err) {
            console.log(err);
        }
    });

    // Create
    it('Should create discussion', (done) => {
        const newDiscussion = {
            topic: "Ahhh s..",
            topicAuthor: "CJ",
            comment: "Here we go again",
        };

        chai.request(server).post('/api/discussion').send(newDiscussion)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(201);
                expect(res.body).to.deep.include(newDiscussion);

                return done();
            });
    });

    // Read
    it('Should get all topics', (done) => {
        chai.request(server).get('/api/discussion')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);

                return done();
            });
    });

    it('Should get a topic', (done) => {
        chai.request(server).get(`/api/discussion/${testDiscussion._id}`)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.include(testDiscussion);

                return done();
            });
    });

    // Update 
    it('Should update topic', (done) => {
        chai.request(server).put(`/api/discussion/${testDiscussion._id}`).query({ topic: 'Ahhh s..' })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.include(testDiscussion);

                return done();
            });
    });

    // Delete
    it('Should delete topic', (done) => {
        chai.request(server).delete(`/api/discussion/${testDiscussion._id}`)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(204);
                
                return done();
            });
    });
});